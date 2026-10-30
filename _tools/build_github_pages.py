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

# 4. Create docs/index.html with relative paths and blank initial iframe
index_html = (static_dir / "index.html").read_text(encoding="utf-8")
index_html = index_html.replace('href="/static/', 'href="./')
index_html = index_html.replace('src="/static/', 'src="./')
index_html = index_html.replace('<script src="./app.js"></script>', '<script src="./data.js"></script>\n  <script src="./app.js"></script>')
(docs_dir / "index.html").write_text(index_html, encoding="utf-8")

# 5. Create docs/app.js adapted for GitHub Pages static fallback
app_js = (static_dir / "app.js").read_text(encoding="utf-8")

# Enhance chat handling for static GitHub Pages fallback
target_chat = '    const res = await fetch("/api/chat", {'
replacement_chat = '''    // If running statically on GitHub Pages without Python backend, run client-side expert engine
    const isStaticMode = window.location.hostname.includes("github.io") || window.STATIC_FIREARMS_DATA;
    if (isStaticMode) {
      const reply = generateClientSideExpertReply(text, firearmData);
      setTimeout(() => {
        typingIndicator.remove();
        addMessage("assistant", reply, "Built-in Armorer Engine (Client)");
      }, 500);
      return;
    }
    const res = await fetch("/api/chat", {'''

app_js = app_js.replace(target_chat, replacement_chat, 1)

# Add client-side expert reply function to end of app_js
client_expert_fn = '''
// Client-side rule-based knowledge engine for GitHub Pages
function generateClientSideExpertReply(query, firearmData) {
  const q = query.toLowerCase();
  const fid = (firearmData && firearmData.id) ? firearmData.id.toLowerCase() : "";
  const fname = firearmData ? firearmData.name : "Firearm";

  if (fid.includes("glock")) {
    if (q.includes("sear") || q.includes("cruciform") || q.includes("engagement") || q.includes("drop")) {
      return "### Glock Cruciform Sear Engagement Specification\\n\\n* **Safety Requirement:** Minimum **66% (2/3)** surface overlap between striker lug and trigger bar cruciform sear plate.\\n* **Armorer Inspection:** Install orange Armorer Inspection Cover Plate (SP 02096). Verify engagement under 10x magnification.\\n* ⚠️ **Warning:** Less than 66% overlap introduces risk of accidental discharge or full-auto slip.";
    } else if (q.includes("lube") || q.includes("oil") || q.includes("clean") || q.includes("drop")) {
      return "### Glock Factory 5-Drop Lubrication Protocol\\n\\n1. **Drops 1 & 2:** Rear slide rail channels.\\n2. **Drops 3 & 4:** Front slide rail cuts.\\n3. **Drop 5:** Barrel hood and circumference.\\n4. **Half Drop:** Trigger bar cruciform wipe across connector ramp.\\n\\n⚠️ **MANDATORY WARNING:** NEVER lubricate the firing pin channel or safety plunger cavity. Keep 100% dry.";
    } else if (q.includes("trigger") || q.includes("25") || q.includes("polish")) {
      return "### Glock 25¢ Trigger Polish Job\\n\\n* Mirror polish with Flitz/Mothers on cruciform sear shelf, connector ramp, safety plunger dome, and trigger bar tab.\\n* Never alter factory 90° sear angles or remove metal.";
    }
  } else if (fid.includes("ruger")) {
    if (q.includes("10/22") || q.includes("torque") || q.includes("v-block")) {
      return "### Ruger 10/22 Factory Torque Specifications\\n\\n* **Takedown Action Screw:** **15 to 20 in-lbs** (wood/synthetic) / 25 in-lbs (pillar bedded).\\n* **Barrel V-Block Clamp Screws:** **25 to 30 in-lbs** in alternating 5 in-lb increments.\\n* **Rim Recess Headspace:** 0.0425\\\" to 0.0435\\\".";
    } else if (q.includes("magazine") || q.includes("rotary")) {
      return "### Ruger 10/22 Rotary Magazine Pre-Tensioning\\n\\n* Pre-load the rotor clock spring exactly **1-1/4 full turns (450°)** counter-clockwise before seating into feed lips.";
    } else if (q.includes("mark") || q.includes("strut") || q.includes("reassembly")) {
      return "### Ruger Mark Series Hammer Strut Alignment\\n\\n* Point muzzle 45° upward, pull trigger to drop hammer forward, point muzzle up so hammer strut dangles into mainspring housing cup before closing.";
    }
  } else if (fid.includes("beretta")) {
    if (q.includes("dead trigger") || q.includes("spring") || q.includes("grip")) {
      return "### Beretta 92FS / M9 Dead Trigger Remedy\\n\\n* **Root Cause:** Forward leg of trigger bar spring unseated from underside groove (common after removing right grip panel).\\n* **Remedy:** Reseat spring leg into slot and verify grip bushing does not pinch spring.";
    } else if (q.includes("locking block") || q.includes("block")) {
      return "### Beretta 92 Locking Block Tolerances\\n\\n* Inspect every 5,000 rounds; replace every 15,000 to 20,000 rounds with Gen 3 radiused kit. Replace recoil spring every 3,000–5,000 rounds.";
    }
  } else if (fid.includes("sears") || fid.includes("roebuck") || q.includes("sears") || q.includes("1922") || q.includes("side by side")) {
    if (q.includes("chamber") || q.includes("length") || q.includes("2-3/4") || q.includes("safety")) {
      return "### ⚠️ 1922 Sears 12G Double Chamber Safety Warning\\n\\n* **Pre-1927 Short Chamber Warning:** Many early doubles used **2-5/8\\\" or 2-1/2\\\" chambers** for roll-crimp paper shells. Firing modern star-crimped 2-3/4\\\" shells opens petals into the forcing cone, causing catastrophic pressure spikes (15,000+ psi).\\n* **Action Required:** Measure with a 12G chamber gauge or Cerrosafe cast before firing modern ammunition.";
    } else if (q.includes("maker") || q.includes("manufacturer") || q.includes("code") || q.includes("who made")) {
      return "### Sears Shotgun Manufacturer Cross-Reference\\n\\nSears never manufactured firearms; they used 3-digit store codes:\\n* **101.xxxx:** J. Stevens Arms Co. (Stevens 311 / 5100 / Springfield 5100)\\n* **105.xxxx:** Crescent Fire Arms Co. (Empire Ejector / Triumph)\\n* **103.xxxx:** Marlin Firearms Co.\\n* **Meriden Fire Arms:** Owned directly by Sears (1905–1918; A.J. Aubrey doubles).";
    } else if (q.includes("headspace") || q.includes("loose") || q.includes("off-face") || q.includes("play")) {
      return "### 1922 Sears 12G Lockup & Headspace Tolerances\\n\\n* **12G Rim Headspace:** 0.054\\\" GO / 0.064\\\" NO-GO; maximum FIELD limit is 0.070\\\".\\n* **Hinge Pin:** 0.375\\\" nominal hardened pin. If barrels rattle (off-face), fit oversize +0.005\\\" pin and stone hook bearing to 80%+ contact.\\n* **Top Lever:** Must rest at 4:30 to 5:00 o'clock when shut. If at 6:00 o'clock center, underbolt is worn.";
    }
  } else if (fid.includes("general") || fid.includes("smithing")) {
    if (q.includes("headspace") || q.includes("gauge") || q.includes("go")) {
      return "### Headspace Gauging Rules\\n\\n* **GO:** Minimum chamber; bolt MUST close.\\n* **NO-GO:** Max new chamber; bolt must NOT close with light finger pressure.\\n* **FIELD:** Absolute service limit. If bolt closes on FIELD, the firearm is **UNSAFE TO FIRE**.";
    } else if (q.includes("cerrosafe") || q.includes("cast")) {
      return "### Cerrosafe Chamber Casting Timing\\n\\n* Pour at 160°–190°F. Measure cast at **PRECISELY 1 HOUR after pouring** for 1:1 true chamber dimension.";
    }
  } else {
    if (q.includes("tension") || q.includes("spring") || q.includes("clock")) {
      return "### Lewis Gun Return Mainspring Calibration\\n\\n* Normal operating tension is **12 to 14 lbs pull** at cocking handle.\\n* Baseline from slack is **2 to 2½ full revolutions** of gear casing.";
    }
  }

  // General summary
  return `### Armorer Technical Summary: ${fname}\\n\\n* **Platform:** ${fname}\\n* **Manuals Available:** ${firearmData.manuals ? firearmData.manuals.length : 0}\\n* **Schematics Available:** ${firearmData.schematics ? firearmData.schematics.length : 0}\\n* **Curated Bench Videos:** ${firearmData.videos ? firearmData.videos.length : 0}\\n\\nSelect any document, schematic plate, or video from the left library panel to inspect directly on your bench.`;
}
'''
app_js += client_expert_fn
(docs_dir / "app.js").write_text(app_js, encoding="utf-8")

print("GitHub Pages docs/ directory built successfully!")
