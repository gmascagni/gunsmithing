import os
import json
import shutil
import subprocess
from pathlib import Path
from urllib.parse import quote
import sys

sys.path.append(str(Path(__file__).resolve().parent.parent))
from web_app.firearms_data import FIREARMS_METADATA
from web_app.parts_data import PARTS_DATABASE, DEFAULT_CATEGORY_PARTS
from web_app.video_analyzer import SAMPLE_CASES

root = Path(__file__).resolve().parent.parent
docs_dir = root / "docs"
docs_dir.mkdir(exist_ok=True)

# 1. Create .nojekyll
(docs_dir / ".nojekyll").write_text("", encoding="utf-8")

# 2. Copy favicon assets, app.css, and vendor
static_dir = root / "web_app" / "static"
for f in ["app.css", "favicon.svg", "favicon.ico", "favicon-32x32.png", "favicon-16x16.png", "apple-touch-icon.png"]:
    src = static_dir / f
    if src.exists():
        shutil.copy2(src, docs_dir / f)

vendor_dir = static_dir / "vendor"
if vendor_dir.exists():
    shutil.copytree(vendor_dir, docs_dir / "vendor", dirs_exist_ok=True)

# 3. Generate data.js containing all platforms, manuals, schematics, specs, videos, and video lab samples
base_repo_raw = "https://raw.githubusercontent.com/gmascagni/gunsmithing/main"
base_blob = "https://github.com/gmascagni/gunsmithing/raw/main"
base_blob_view = "https://github.com/gmascagni/gunsmithing/blob/main"

all_data = {}
for fid, meta in FIREARMS_METADATA.items():
    fdir = root / fid
    manuals = []
    schematics = []
    if (fdir / "manuals").exists():
        pdf_files = list((fdir / "manuals").glob("*.pdf"))
        pdf_files.sort(
            key=lambda mf: (
                1 if (mf.name.startswith("Armorer_Technical_Manual_") or mf.stat().st_size < 55 * 1024) else 0,
                mf.name.lower()
            )
        )
        for mf in pdf_files:
            raw_mb = mf.stat().st_size / (1024 * 1024)
            size_mb = max(0.01, round(raw_mb, 2))
            is_summary_stub = mf.name.startswith("Armorer_Technical_Manual_") or mf.stat().st_size < 55 * 1024
            q_mf = quote(mf.name)
            manuals.append({
                "id": mf.name,
                "title": mf.stem.replace("_", " "),
                "filename": mf.name,
                "size_mb": size_mb,
                "is_summary": is_summary_stub,
                "raw_url": f"{base_repo_raw}/{fid}/manuals/{q_mf}",
                "github_url": f"{base_blob_view}/{fid}/manuals/{q_mf}",
                "url": f"{base_repo_raw}/{fid}/manuals/{q_mf}",
                "local_url": f"/api/manuals/{fid}/{q_mf}"
            })
    if (fdir / "schematics").exists():
        for sf in sorted((fdir / "schematics").glob("*.png")) + sorted((fdir / "schematics").glob("*.jpg")) + sorted((fdir / "schematics").glob("*.jpeg")):
            q_sf = quote(sf.name)
            schematics.append({
                "id": sf.name,
                "title": sf.stem.replace("_", " "),
                "filename": sf.name,
                "url": f"{base_repo_raw}/{fid}/schematics/{q_sf}",
                "local_url": f"/api/schematics/{fid}/{q_sf}"
            })
    all_data[fid] = {
        "id": fid,
        "name": meta["name"],
        "subtitle": meta["subtitle"],
        "manufacturer": meta.get("manufacturer", "General Workshop"),
        "category": meta.get("category", "Firearms"),
        "action_type": meta.get("action_type", ""),
        "operating_actions": meta.get("operating_actions", []),
        "types": meta.get("types", []),
        "caliber_categories": meta.get("caliber_categories", []),
        "era": meta.get("era", ""),
        "models": meta.get("models", []),
        "calibers": meta.get("calibers", []),
        "key_tasks": meta.get("key_tasks", []),
        "specs": meta["specs"],
        "stoppages": meta["stoppages"],
        "videos": meta["videos"],
        "manuals": manuals,
        "schematics": schematics
    }

data_js_content = (
    "// Static firearms repository data for GitHub Pages deployment\n"
    f"window.STATIC_FIREARMS_DATA = {json.dumps(all_data, indent=2)};\n\n"
    f"window.STATIC_PARTS_DATABASE = {json.dumps(PARTS_DATABASE, indent=2)};\n\n"
    f"window.STATIC_CATEGORY_PARTS = {json.dumps(DEFAULT_CATEGORY_PARTS, indent=2)};\n\n"
    f"window.STATIC_VIDEO_SAMPLES = {json.dumps(SAMPLE_CASES, indent=2)};\n"
)
(docs_dir / "data.js").write_text(data_js_content, encoding="utf-8")

# 4. Generate rag_data.js from rag_index.json
cache_file = root / "web_app" / "cache" / "rag_index.json"
if cache_file.exists():
    try:
        rag_raw = json.loads(cache_file.read_text(encoding="utf-8"))
        chunks = rag_raw.get("chunks", [])
        out_chunks = []
        for c in chunks:
            out_chunks.append({
                "id": c["id"],
                "fid": c["firearm_id"],
                "doc": c.get("manual_title", ""),
                "fn": c.get("manual_filename", ""),
                "p": c.get("page", 1),
                "sec": c.get("section", ""),
                "text": c["text"][:1800]
            })
        rag_js_content = "window.RAG_CHUNKS = " + json.dumps(out_chunks, separators=(",", ":")) + ";"
        (static_dir / "rag_data.js").write_text(rag_js_content, encoding="utf-8")
        (docs_dir / "rag_data.js").write_text(rag_js_content, encoding="utf-8")
        print(f"Generated rag_data.js ({len(out_chunks)} chunks, {round((docs_dir / 'rag_data.js').stat().st_size / (1024*1024), 2)} MB)")
    except Exception as e:
        print(f"Warning: could not export rag_data.js: {e}")

# 5. Copy web_app/static/app.js directly to docs/app.js and syntax-check
shutil.copy2(static_dir / "app.js", docs_dir / "app.js")
print("Synchronized docs/app.js directly from web_app/static/app.js!")

for js_path in [static_dir / "app.js", docs_dir / "app.js"]:
    chk = subprocess.run(["node", "--check", str(js_path)], capture_output=True, text=True)
    if chk.returncode != 0:
        print(f"ERROR: Syntax check failed for {js_path}:\n{chk.stderr}")
        sys.exit(chk.returncode)
    else:
        print(f"Syntax OK: {js_path.name}")

# 6. Create docs/index.html with relative paths, cache-busting hashes & preserved defer / fetchpriority attributes
import hashlib
css_hash = hashlib.md5((docs_dir / "app.css").read_bytes()).hexdigest()[:8]
app_hash = hashlib.md5((docs_dir / "app.js").read_bytes()).hexdigest()[:8]
data_hash = hashlib.md5((docs_dir / "data.js").read_bytes()).hexdigest()[:8]

index_html = (static_dir / "index.html").read_text(encoding="utf-8")
index_html = index_html.replace('href="/static/app.css"', f'href="./app.css?v={css_hash}"')
index_html = index_html.replace('href="/static/', 'href="./')
index_html = index_html.replace('src="/static/rag_data.js"', f'src="./rag_data.js?v={data_hash}"')
index_html = index_html.replace('src="/static/app.js"', f'src="./app.js?v={app_hash}"')
index_html = index_html.replace('src="/static/', 'src="./')

if "data.js" not in index_html:
    index_html = index_html.replace(
        f'<script defer src="./app.js?v={app_hash}"></script>',
        f'<script defer src="./data.js?v={data_hash}"></script>\n  <script defer src="./app.js?v={app_hash}"></script>'
    )

(docs_dir / "index.html").write_text(index_html, encoding="utf-8")
print(f"Built docs/index.html with cache-busting versions (app={app_hash}, css={css_hash}, data={data_hash})")

print("GitHub Pages docs/ directory built successfully!")
