import os
import json
import shutil
from pathlib import Path
import sys

sys.path.append(str(Path(__file__).resolve().parent.parent))
from web_app.firearms_data import FIREARMS_METADATA
from web_app.parts_data import PARTS_DATABASE, DEFAULT_CATEGORY_PARTS

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

# 3. Generate data.js containing all platforms, manuals, schematics, specs, and videos
base_repo_raw = "https://raw.githubusercontent.com/gmascagni/gunsmithing/main"
base_blob = "https://github.com/gmascagni/gunsmithing/raw/main"
base_blob_view = "https://github.com/gmascagni/gunsmithing/blob/main"

all_data = {}
for fid, meta in FIREARMS_METADATA.items():
    fdir = root / fid
    manuals = []
    schematics = []
    if (fdir / "manuals").exists():
        for mf in sorted((fdir / "manuals").glob("*.pdf")):
            size_mb = round(mf.stat().st_size / (1024 * 1024), 2)
            manuals.append({
                "id": mf.name,
                "title": mf.stem.replace("_", " "),
                "filename": mf.name,
                "size_mb": size_mb,
                "raw_url": f"{base_repo_raw}/{fid}/manuals/{mf.name}",
                "github_url": f"{base_blob_view}/{fid}/manuals/{mf.name}",
                "url": f"{base_repo_raw}/{fid}/manuals/{mf.name}",
                "local_url": f"/api/manuals/{fid}/{mf.name}"
            })
    if (fdir / "schematics").exists():
        for sf in sorted((fdir / "schematics").glob("*.png")) + sorted((fdir / "schematics").glob("*.jpg")) + sorted((fdir / "schematics").glob("*.jpeg")):
            schematics.append({
                "id": sf.name,
                "title": sf.stem.replace("_", " "),
                "filename": sf.name,
                "url": f"{base_repo_raw}/{fid}/schematics/{sf.name}",
                "local_url": f"/api/schematics/{fid}/{sf.name}"
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
    f"window.STATIC_CATEGORY_PARTS = {json.dumps(DEFAULT_CATEGORY_PARTS, indent=2)};\n"
)
(docs_dir / "data.js").write_text(data_js_content, encoding="utf-8")

# 4. Generate rag_data.js from rag_index.json (or rebuild if needed)
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

# 5. Create docs/index.html with relative paths
index_html = (static_dir / "index.html").read_text(encoding="utf-8")
index_html = index_html.replace('href="/static/', 'href="./')
index_html = index_html.replace('src="/static/', 'src="./')
# Ensure data.js and rag_data.js are both loaded before app.js
if '<script src="./data.js"></script>' not in index_html:
    index_html = index_html.replace(
        '<script src="./rag_data.js"></script>\n  <script src="./app.js"></script>',
        '<script src="./data.js"></script>\n  <script src="./rag_data.js"></script>\n  <script src="./app.js"></script>'
    )
    if '<script src="./data.js"></script>' not in index_html:
        index_html = index_html.replace(
            '<script src="./app.js"></script>',
            '<script src="./data.js"></script>\n  <script src="./rag_data.js"></script>\n  <script src="./app.js"></script>'
        )
(docs_dir / "index.html").write_text(index_html, encoding="utf-8")

# 6. Copy web_app/static/app.js directly to docs/app.js
shutil.copy2(static_dir / "app.js", docs_dir / "app.js")
print("Synchronized docs/app.js directly from web_app/static/app.js!")

print("GitHub Pages docs/ directory built successfully!")
