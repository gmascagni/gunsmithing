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
replacement_chat = '''    // If running statically on GitHub Pages without Python backend:
    const isStaticMode = window.location.hostname.includes("github.io") || window.STATIC_FIREARMS_DATA;
    if (isStaticMode) {
      // 1. Direct Google Gemini Web API from client if key is set
      if (activeLLMBackend === "gemini" && activeLLMApiKey) {
        try {
          const mod = (activeLLMModel && activeLLMModel !== "auto") ? activeLLMModel : "gemini-1.5-flash";
          const gunPrompt = firearmData ? `Current Firearm Platform: ${firearmData.name} (${firearmData.id}). Answer as an expert master gunsmith and armorer assistant.` : "Answer as an expert master gunsmith and armorer assistant.";
          const gemRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${mod}:generateContent?key=${activeLLMApiKey}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: `${gunPrompt}\\n\\nUser Question: ${query}` }] }]
            })
          });
          if (gemRes.ok) {
            const gemData = await gemRes.json();
            const replyText = gemData.candidates?.[0]?.content?.parts?.[0]?.text;
            if (replyText) {
              typingMsg.remove();
              appendMessage("assistant", replyText, `Google Gemini (${mod}) [Cloud Web]`);
              return;
            }
          }
        } catch (gemErr) {
          console.warn("Client-side Gemini API call failed, falling back to built-in engine", gemErr);
        }
      }

      // 2. Client-side armorer engine
      const reply = generateClientSideExpertReply(query, firearmData);
      setTimeout(() => {
        typingMsg.remove();
        if ((activeLLMBackend === "lmstudio" || activeLLMBackend === "ollama") && (activeLLMEndpoint.includes("127.0.0.1") || activeLLMEndpoint.includes("localhost"))) {
          appendMessage("assistant", `${reply}\\n\\n---\\n*💡 **Local LM Studio / Ollama Notice:** You are currently viewing the hosted web version on GitHub Pages. Chrome blocks \\`https://\\` websites from connecting to local \\`http://127.0.0.1\\`. To connect to your local LM Studio / Ollama with PyMuPDF RAG, double-click \\`run_workbench.bat\\` in your \\`Gun Manuals\\` folder and open **http://127.0.0.1:8055**.*`, "Built-in Armorer Engine (Client)");
        } else {
          appendMessage("assistant", reply, "Built-in Armorer Engine (Client)");
        }
      }, 350);
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

  // Lewis Automatic Machine Gun
  if (fid.includes("lewis") || q.includes("lewis")) {
    if (q.includes("clean") || q.includes("maintenance") || q.includes("lube") || q.includes("oil") || q.includes("care") || q.includes("carbon")) {
      return `### Lewis Automatic Machine Gun — Armorer Cleaning & Maintenance Protocol\\n\\n` +
        `1. **Gas Cylinder & Piston Rod Assembly:**\\n` +
        `   * Disassemble gas cylinder and thoroughly scrub interior walls and ports with nitro powder solvent and a stiff brass wire brush to eliminate lead, carbon, and copper wash.\\n` +
        `   * Wipe piston head, piston rings, and rack teeth completely dry. **Never leave heavy oil or wet grease inside the gas chamber** (causes violent smoking and rapid baked carbon buildup).\\n\\n` +
        `2. **Gear Casing & Clockwork Return Mainspring (Part #18):**\\n` +
        `   * Lubricate spiral mainspring leaves with a light coat of medium petroleum grease (graphite blend).\\n` +
        `   * ⚠️ **MANDATORY SAFETY WARNING:** Never allow the gear casing to spin free or release tension uncontrolled. Hold casing securely while pulling tension locking key.\\n\\n` +
        `3. **Aluminum Radiator & Barrel Shroud:**\\n` +
        `   * Inspect the longitudinal cooling fins for dirt, mud, or bent vanes that obstruct airflow. Clean with kerosene and soft bristle brush.\\n` +
        `   * Ensure the aluminum casing and barrel clamp screws are torqued evenly to preserve straight barrel-to-gas-cylinder alignment.\\n\\n` +
        `4. **Feed Mechanism & Pan Magazine:**\\n` +
        `   * Apply a light wipe of gun oil to the bolt feed stud, actuator track, and striker post. Keep feed arm pawl pivots free of grit.`;
    } else if (q.includes("tension") || q.includes("spring") || q.includes("clock") || q.includes("pull") || q.includes("gear")) {
      return `### Lewis Gun Return Mainspring Calibration\\n\\n` +
        `* **Operating Tension:** **12 to 14 lbs pull** measured with a spring scale hooked to the cocking handle.\\n` +
        `* **Baseline Pre-load:** From dead-slack, rotate gear casing counter-clockwise exactly **2 to 2½ full revolutions** before seating the tension latch key.\\n` +
        `* **Pinion Teeth Runout:** Must remain under **0.003\\"**.\\n` +
        `* **Field Adjustment:** If sluggish forward stroke causes failure to feed from 47-round drum, add 1/2 turn (2 clicks). If bolt recoils excessively hard against buffer, reduce tension by 1 click.`;
    } else if (q.includes("gas") || q.includes("regulator") || q.includes("port") || q.includes("cup")) {
      return `### Lewis Gun Gas Port & Regulator System\\n\\n` +
        `* **Two-Port Cup Regulator:** Features large ('L') and small ('S' or 'H') gas ports.\\n` +
        `* **Standard Service:** Always run on the smaller port under normal conditions (firing ~500–600 rpm).\\n` +
        `* **Adverse Conditions:** Rotate regulator cup using the armorer combination wrench to the large port if heavy fouling or sub-zero mud causes short-recoil stoppages.`;
    } else if (q.includes("stoppage") || q.includes("jam") || q.includes("position") || q.includes("fail")) {
      return `### Lewis Gun 4-Position Stoppage Diagnostics\\n\\n` +
        `* **Position 1 (Cocking Handle fully forward):** Misfire, empty drum, or broken striker. Wait 5s for hangfire, cock, replace drum.\\n` +
        `* **Position 2 (Cocking Handle 1\\" to 2\\" from forward):** Thick rimmed cartridge, deformed bullet, or dirt in chamber. Clear, check gas regulator.\\n` +
        `* **Position 3 (Cocking Handle near full rear):** Separated case or broken ejector. Insert clearing plug / extract ruptured case.\\n` +
        `* **Position 4 (Cocking Handle jammed full rear):** Pinion gear sheared, return spring broken, or bent piston rod. Dismount gear casing.`;
    }
  }

  // Glock Safe-Action Pistols
  if (fid.includes("glock") || q.includes("glock")) {
    if (q.includes("sear") || q.includes("cruciform") || q.includes("engagement") || q.includes("drop")) {
      return `### Glock Cruciform Sear Engagement Specification\\n\\n* **Safety Requirement:** Minimum **66% (2/3)** surface overlap between striker lug and trigger bar cruciform sear plate.\\n* **Armorer Inspection:** Install orange Armorer Inspection Cover Plate (SP 02096). Verify engagement under 10x magnification.\\n* ⚠️ **Warning:** Less than 66% overlap introduces risk of accidental discharge or full-auto slip.`;
    } else if (q.includes("lube") || q.includes("oil") || q.includes("clean") || q.includes("drop")) {
      return `### Glock Factory 5-Drop Lubrication Protocol\\n\\n1. **Drops 1 & 2:** Rear slide rail channels.\\n2. **Drops 3 & 4:** Front slide rail cuts.\\n3. **Drop 5:** Barrel hood and circumference.\\n4. **Half Drop:** Trigger bar cruciform wipe across connector ramp.\\n\\n⚠️ **MANDATORY WARNING:** NEVER lubricate the firing pin channel or safety plunger cavity. Keep 100% dry.`;
    } else if (q.includes("trigger") || q.includes("25") || q.includes("polish")) {
      return `### Glock 25¢ Trigger Polish Job\\n\\n* Mirror polish with Flitz/Mothers on cruciform sear shelf, connector ramp, safety plunger dome, and trigger bar tab.\\n* Never alter factory 90° sear angles or remove metal.`;
    }
  }

  // Ruger Firearms
  if (fid.includes("ruger") || q.includes("ruger")) {
    if (q.includes("10/22") || q.includes("torque") || q.includes("v-block")) {
      return `### Ruger 10/22 Factory Torque Specifications\\n\\n* **Takedown Action Screw:** **15 to 20 in-lbs** (wood/synthetic) / 25 in-lbs (pillar bedded).\\n* **Barrel V-Block Clamp Screws:** **25 to 30 in-lbs** in alternating 5 in-lb increments.\\n* **Rim Recess Headspace:** 0.0425\\" to 0.0435\\".`;
    } else if (q.includes("magazine") || q.includes("rotary")) {
      return `### Ruger 10/22 Rotary Magazine Pre-Tensioning\\n\\n* Pre-load the rotor clock spring exactly **1-1/4 full turns (450°)** counter-clockwise before seating into feed lips.`;
    } else if (q.includes("mark") || q.includes("strut") || q.includes("reassembly")) {
      return `### Ruger Mark Series Hammer Strut Alignment\\n\\n* Point muzzle 45° upward, pull trigger to drop hammer forward, point muzzle up so hammer strut dangles into mainspring housing cup before closing.`;
    }
  }

  // Beretta Pistols
  if (fid.includes("beretta") || q.includes("beretta")) {
    if (q.includes("dead trigger") || q.includes("spring") || q.includes("grip")) {
      return `### Beretta 92FS / M9 Dead Trigger Remedy\\n\\n* **Root Cause:** Forward leg of trigger bar spring unseated from underside groove (common after removing right grip panel).\\n* **Remedy:** Reseat spring leg into slot and verify grip bushing does not pinch spring.`;
    } else if (q.includes("locking block") || q.includes("block")) {
      return `### Beretta 92 Locking Block Tolerances\\n\\n* Inspect every 5,000 rounds; replace every 15,000 to 20,000 rounds with Gen 3 radiused kit. Replace recoil spring every 3,000–5,000 rounds.`;
    }
  }

  // Sears Roebuck Double Shotgun
  if (fid.includes("sears") || fid.includes("roebuck") || q.includes("sears") || q.includes("1922") || q.includes("side by side")) {
    if (q.includes("chamber") || q.includes("length") || q.includes("2-3/4") || q.includes("safety")) {
      return `### ⚠️ 1922 Sears 12G Double Chamber Safety Warning\\n\\n* **Pre-1927 Short Chamber Warning:** Many early doubles used **2-5/8\\" or 2-1/2\\" chambers** for roll-crimp paper shells. Firing modern star-crimped 2-3/4\\" shells opens petals into the forcing cone, causing catastrophic pressure spikes (15,000+ psi).\\n* **Action Required:** Measure with a 12G chamber gauge or Cerrosafe cast before firing modern ammunition.`;
    } else if (q.includes("maker") || q.includes("manufacturer") || q.includes("code") || q.includes("who made")) {
      return `### Sears Shotgun Manufacturer Cross-Reference\\n\\nSears never manufactured firearms; they used 3-digit store codes:\\n* **101.xxxx:** J. Stevens Arms Co. (Stevens 311 / 5100 / Springfield 5100)\\n* **105.xxxx:** Crescent Fire Arms Co. (Empire Ejector / Triumph)\\n* **103.xxxx:** Marlin Firearms Co.\\n* **Meriden Fire Arms:** Owned directly by Sears (1905–1918; A.J. Aubrey doubles).`;
    } else if (q.includes("headspace") || q.includes("loose") || q.includes("off-face") || q.includes("play")) {
      return `### 1922 Sears 12G Lockup & Headspace Tolerances\\n\\n* **12G Rim Headspace:** 0.054\\" GO / 0.064\\" NO-GO; maximum FIELD limit is 0.070\\".\\n* **Hinge Pin:** 0.375\\" nominal hardened pin. If barrels rattle (off-face), fit oversize +0.005\\" pin and stone hook bearing to 80%+ contact.\\n* **Top Lever:** Must rest at 4:30 to 5:00 o'clock when shut. If at 6:00 o'clock center, underbolt is worn.`;
    }
  }

  // General Gunsmithing Standards
  if (q.includes("headspace") || q.includes("gauge") || q.includes("go") || q.includes("no-go")) {
    return `### Headspace Gauging Rules\\n\\n* **GO:** Minimum chamber dimension; bolt MUST close completely without forcing.\\n* **NO-GO:** Maximum allowable dimension for new/re-barreled firearms; bolt must NOT close with light finger pressure.\\n* **FIELD:** Absolute maximum service safety limit. If the bolt closes on a FIELD gauge, the firearm has excessive headspace and is **UNSAFE TO FIRE** until repaired.`;
  }
  if (q.includes("cerrosafe") || q.includes("cast")) {
    return `### Cerrosafe Chamber Casting Timing Protocol\\n\\n* Pour molten alloy at 160°–190°F into clean, lightly oiled chamber.\\n* Cerrosafe shrinks during initial cooling, then expands to **EXACT 1:1 true chamber dimension at PRECISELY 1 HOUR after pouring**.\\n* Measure all critical diameters and forcing cone lengths at the 1-hour mark with calibrated micrometers.`;
  }

  // General summary
  return `### Armorer Technical Summary: ${fname}\\n\\n* **Platform:** ${fname}\\n* **Manuals Available:** ${firearmData && firearmData.manuals ? firearmData.manuals.length : 0}\\n* **Schematics Available:** ${firearmData && firearmData.schematics ? firearmData.schematics.length : 0}\\n* **Curated Bench Videos:** ${firearmData && firearmData.videos ? firearmData.videos.length : 0}\\n\\nSelect any document, schematic plate, or video from the left library panel to inspect directly on your bench.`;
}
'''
app_js += client_expert_fn
(docs_dir / "app.js").write_text(app_js, encoding="utf-8")

print("GitHub Pages docs/ directory built successfully!")
