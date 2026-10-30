import os
import re
import json
import asyncio
from pathlib import Path
from typing import Optional, List, Dict, Any

from fastapi import FastAPI, HTTPException, Query, Request
from fastapi.responses import HTMLResponse, FileResponse, StreamingResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import httpx

BASE_DIR = Path(__file__).resolve().parent.parent
STATIC_DIR = Path(__file__).resolve().parent / "static"

try:
    from web_app.firearms_data import FIREARMS_METADATA, PARTS_CATALOG
except ImportError:
    from firearms_data import FIREARMS_METADATA, PARTS_CATALOG

try:
    from web_app.parts_data import PARTS_DATABASE, DEFAULT_CATEGORY_PARTS, find_part_by_coordinates
except ImportError:
    from parts_data import PARTS_DATABASE, DEFAULT_CATEGORY_PARTS, find_part_by_coordinates

app = FastAPI(title="Armorer's Workbench", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static folder
app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")

# Models for API
class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    firearm_id: str
    messages: List[ChatMessage]
    backend: Optional[str] = "auto" # "ollama", "lmstudio", "gemini", "openai", "custom_web", "builtin"
    model: Optional[str] = None
    temperature: Optional[float] = 0.3
    api_key: Optional[str] = None
    endpoint: Optional[str] = None

class LLMConfig(BaseModel):
    backend: str = "auto"
    model: Optional[str] = "auto"
    endpoint: Optional[str] = None
    api_key: Optional[str] = None
    temperature: Optional[float] = 0.3

class IdentifyPartRequest(BaseModel):
    firearm_id: str
    norm_x: float
    norm_y: float
    norm_r: Optional[float] = 0.08
    image_crop: Optional[str] = None

CONFIG_FILE = BASE_DIR / "web_app" / "config.json"

def get_saved_config() -> Dict[str, Any]:
    if CONFIG_FILE.exists():
        try:
            return json.loads(CONFIG_FILE.read_text(encoding="utf-8"))
        except Exception:
            pass
    return {
        "backend": "auto",
        "model": "auto",
        "endpoint": "http://127.0.0.1:11434",
        "api_key": "",
        "temperature": 0.3
    }

# In-memory cached gunsmith knowledge
def get_firearm_path(firearm_id: str) -> Path:
    p = BASE_DIR / firearm_id
    if not p.exists() or not p.is_dir():
        raise HTTPException(status_code=404, detail=f"Firearm '{firearm_id}' not found.")
    return p

def load_firearm_data(firearm_id: str) -> Dict[str, Any]:
    fpath = get_firearm_path(firearm_id)
    
    # 1. Manuals
    manuals_dir = fpath / "manuals"
    manuals = []
    if manuals_dir.exists():
        for mf in sorted(manuals_dir.glob("*.pdf")):
            size_mb = round(mf.stat().st_size / (1024 * 1024), 2)
            name_clean = mf.stem.replace("_", " ")
            manuals.append({
                "id": mf.name,
                "title": name_clean,
                "filename": mf.name,
                "size_mb": size_mb,
                "url": f"/api/manuals/{firearm_id}/{mf.name}"
            })
            
    # 2. Schematics
    schematics_dir = fpath / "schematics"
    schematics = []
    if schematics_dir.exists():
        for sf in sorted(schematics_dir.glob("*.jpeg")) + sorted(schematics_dir.glob("*.jpg")) + sorted(schematics_dir.glob("*.png")):
            schematics.append({
                "id": sf.name,
                "title": sf.stem.replace("_", " "),
                "filename": sf.name,
                "url": f"/api/schematics/{firearm_id}/{sf.name}"
            })
            
    # 3. Pull Platform Metadata from FIREARMS_METADATA
    meta = FIREARMS_METADATA.get(firearm_id, {
        "name": firearm_id.replace("_", " "),
        "subtitle": "Technical Manuals, Schematics & Video References",
        "specs": {},
        "stoppages": [],
        "videos": []
    })
    
    return {
        "id": firearm_id,
        "name": meta.get("name", firearm_id.replace("_", " ")),
        "subtitle": meta.get("subtitle", "Technical Repository"),
        "manufacturer": meta.get("manufacturer", "General"),
        "category": meta.get("category", "Firearms"),
        "action_type": meta.get("action_type", ""),
        "operating_actions": meta.get("operating_actions", []),
        "types": meta.get("types", []),
        "caliber_categories": meta.get("caliber_categories", []),
        "era": meta.get("era", ""),
        "models": meta.get("models", []),
        "calibers": meta.get("calibers", []),
        "key_tasks": meta.get("key_tasks", []),
        "manuals": manuals,
        "schematics": schematics,
        "videos": meta.get("videos", []),
        "stoppages": meta.get("stoppages", []),
        "specs": meta.get("specs", {})
    }

@app.get("/", response_class=HTMLResponse)
async def serve_index():
    index_file = STATIC_DIR / "index.html"
    if not index_file.exists():
        raise HTTPException(status_code=404, detail="index.html not found")
    return HTMLResponse(content=index_file.read_text(encoding="utf-8"))

@app.get("/favicon.ico", include_in_schema=False)
async def get_favicon():
    fav = STATIC_DIR / "favicon.ico"
    if fav.exists():
        return FileResponse(str(fav), media_type="image/x-icon")
    raise HTTPException(status_code=404)

@app.get("/api/firearms")
async def list_firearms():
    # Discover available firearms in directory with full armory metadata
    firearms = []
    for d in sorted(BASE_DIR.iterdir(), key=lambda p: p.name):
        if d.is_dir() and not d.name.startswith(("_", ".")) and (d / "manuals").exists():
            meta = FIREARMS_METADATA.get(d.name, {})
            manuals_count = len(list((d / "manuals").glob("*.pdf")))
            schematics_count = len(list((d / "schematics").glob("*.*"))) if (d / "schematics").exists() else 0
            firearms.append({
                "id": d.name,
                "name": meta.get("name", d.name.replace("_", " ")),
                "subtitle": meta.get("subtitle", ""),
                "manufacturer": meta.get("manufacturer", "General"),
                "category": meta.get("category", "Firearms"),
                "action_type": meta.get("action_type", ""),
                "operating_actions": meta.get("operating_actions", []),
                "types": meta.get("types", []),
                "caliber_categories": meta.get("caliber_categories", []),
                "era": meta.get("era", ""),
                "models": meta.get("models", []),
                "calibers": meta.get("calibers", []),
                "key_tasks": meta.get("key_tasks", []),
                "manuals_count": manuals_count,
                "schematics_count": schematics_count,
                "videos_count": len(meta.get("videos", [])),
                "stoppages_count": len(meta.get("stoppages", []))
            })
    return {"firearms": firearms}

@app.get("/api/firearms/{firearm_id}")
async def get_firearm(firearm_id: str):
    data = load_firearm_data(firearm_id)
    return data

@app.get("/api/manuals/{firearm_id}/{filename}")
async def get_manual_pdf(firearm_id: str, filename: str):
    fpath = get_firearm_path(firearm_id) / "manuals" / filename
    if not fpath.exists():
        raise HTTPException(status_code=404, detail="Manual not found")
    return FileResponse(
        str(fpath),
        media_type="application/pdf",
        headers={"Content-Disposition": f"inline; filename={filename}"}
    )

@app.get("/api/schematics/{firearm_id}/{filename}")
async def get_schematic_image(firearm_id: str, filename: str):
    fpath = get_firearm_path(firearm_id) / "schematics" / filename
    if not fpath.exists():
        raise HTTPException(status_code=404, detail="Schematic not found")
    media_type = "image/jpeg" if filename.lower().endswith((".jpeg", ".jpg")) else "image/png"
    return FileResponse(str(fpath), media_type=media_type)

@app.get("/api/llm/config")
async def get_config():
    cfg = get_saved_config()
    # Mask API keys for security in UI display
    safe_cfg = dict(cfg)
    if safe_cfg.get("api_key"):
        safe_cfg["api_key_masked"] = safe_cfg["api_key"][:4] + "..." + safe_cfg["api_key"][-4:] if len(safe_cfg["api_key"]) > 8 else "***"
    return safe_cfg

@app.post("/api/llm/config")
async def update_config(cfg: LLMConfig):
    cur = get_saved_config()
    cur.update({
        "backend": cfg.backend,
        "model": cfg.model or "auto",
        "endpoint": cfg.endpoint or cur.get("endpoint", "http://127.0.0.1:11434"),
        "temperature": cfg.temperature if cfg.temperature is not None else 0.3
    })
    if cfg.api_key:
        cur["api_key"] = cfg.api_key
    CONFIG_FILE.write_text(json.dumps(cur, indent=2), encoding="utf-8")
    return {"status": "saved", "config": cur}

@app.post("/api/llm/test")
async def test_llm_connection(req: Dict[str, Any]):
    backend = req.get("backend", "auto")
    endpoint = req.get("endpoint", "")
    api_key = req.get("api_key", "")
    model = req.get("model", "")

    # Test Google Gemini (Web)
    if backend == "gemini":
        key = api_key or os.environ.get("GEMINI_API_KEY", "")
        if not key:
            return {"success": False, "error": "No Gemini API key provided."}
        mod = model if model and model != "auto" else "gemini-1.5-flash"
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{mod}:generateContent?key={key}"
        try:
            async with httpx.AsyncClient(timeout=8.0) as client:
                res = await client.post(url, json={"contents": [{"parts": [{"text": "Hello, respond with 'OK'."}]}]})
                if res.status_code == 200:
                    return {"success": True, "message": f"Connected to Google Gemini ({mod}) successfully!"}
                else:
                    return {"success": False, "error": f"Gemini API returned status {res.status_code}: {res.text[:150]}"}
        except Exception as e:
            return {"success": False, "error": f"Failed to reach Gemini: {str(e)}"}

    # Test OpenAI / Custom Web
    elif backend in ["openai", "custom_web"]:
        key = api_key or (os.environ.get("OPENAI_API_KEY", "") if backend == "openai" else "")
        if not key:
            return {"success": False, "error": f"No API key provided for {backend}."}
        url = endpoint if endpoint else ("https://api.openai.com/v1/chat/completions" if backend == "openai" else "")
        if not url:
            return {"success": False, "error": "Custom Web endpoint URL is required."}
        mod = model if model and model != "auto" else ("gpt-4o-mini" if backend == "openai" else "default")
        headers = {"Authorization": f"Bearer {key}", "Content-Type": "application/json"}
        payload = {"model": mod, "messages": [{"role": "user", "content": "Ping"}], "max_tokens": 5}
        try:
            async with httpx.AsyncClient(timeout=8.0) as client:
                res = await client.post(url, json=payload, headers=headers)
                if res.status_code == 200:
                    return {"success": True, "message": f"Connected to {backend.upper()} ({mod}) successfully!"}
                else:
                    return {"success": False, "error": f"API returned status {res.status_code}: {res.text[:150]}"}
        except Exception as e:
            return {"success": False, "error": f"Failed to connect: {str(e)}"}

    # Test Local Ollama
    elif backend == "ollama":
        ep = endpoint if endpoint else "http://127.0.0.1:11434"
        try:
            async with httpx.AsyncClient(timeout=4.0) as client:
                res = await client.get(f"{ep.rstrip('/')}/api/tags")
                if res.status_code == 200:
                    models = [m["name"] for m in res.json().get("models", [])]
                    return {"success": True, "message": f"Connected to Local Ollama machine ({ep})! Found models: {', '.join(models[:4])}"}
                else:
                    return {"success": False, "error": f"Ollama host returned status {res.status_code}"}
        except Exception as e:
            return {"success": False, "error": f"Unable to reach local Ollama machine at {ep}: {str(e)}"}

    # Test Local LM Studio
    elif backend == "lmstudio":
        ep = endpoint if endpoint else "http://127.0.0.1:1234/v1"
        try:
            async with httpx.AsyncClient(timeout=4.0) as client:
                res = await client.get(f"{ep.rstrip('/')}/models")
                if res.status_code == 200:
                    models = [m["id"] for m in res.json().get("data", [])]
                    return {"success": True, "message": f"Connected to Local LM Studio machine ({ep})! Found models: {', '.join(models[:4])}"}
                else:
                    return {"success": False, "error": f"LM Studio host returned status {res.status_code}"}
        except Exception as e:
            return {"success": False, "error": f"Unable to reach LM Studio machine at {ep}: {str(e)}"}

    return {"success": True, "message": "Built-in Armorer Knowledge Engine active (offline)."}

@app.get("/api/llm/backends")
async def check_llm_backends():
    backends = []
    cfg = get_saved_config()
    
    # 1. Local AI Machine: Ollama (localhost or custom host)
    ollama_ep = cfg.get("endpoint") if cfg.get("backend") == "ollama" and cfg.get("endpoint") else "http://127.0.0.1:11434"
    try:
        async with httpx.AsyncClient(timeout=1.5) as client:
            resp = await client.get(f"{ollama_ep.rstrip('/')}/api/tags")
            if resp.status_code == 200:
                models = [m["name"] for m in resp.json().get("models", [])]
                backends.append({
                    "id": "ollama",
                    "name": "Local AI Machine (Ollama)",
                    "endpoint": ollama_ep,
                    "status": "online",
                    "type": "local",
                    "models": models,
                    "default_model": models[0] if models else "qwen3.5:4b"
                })
    except Exception:
        backends.append({
            "id": "ollama",
            "name": "Local AI Machine (Ollama)",
            "endpoint": ollama_ep,
            "status": "offline",
            "type": "local",
            "models": [],
            "default_model": "qwen3.5:4b"
        })

    # 2. Local AI Machine: LM Studio (localhost or custom host)
    lm_ep = cfg.get("endpoint") if cfg.get("backend") == "lmstudio" and cfg.get("endpoint") else "http://127.0.0.1:1234/v1"
    try:
        async with httpx.AsyncClient(timeout=1.5) as client:
            resp = await client.get(f"{lm_ep.rstrip('/')}/models")
            if resp.status_code == 200:
                models = [m["id"] for m in resp.json().get("data", [])]
                backends.append({
                    "id": "lmstudio",
                    "name": "Local AI Machine (LM Studio)",
                    "endpoint": lm_ep,
                    "status": "online",
                    "type": "local",
                    "models": models,
                    "default_model": models[0] if models else "local-model"
                })
    except Exception:
        backends.append({
            "id": "lmstudio",
            "name": "Local AI Machine (LM Studio)",
            "endpoint": lm_ep,
            "status": "offline",
            "type": "local",
            "models": [],
            "default_model": "local-model"
        })

    # 3. Web-Based Cloud: Google Gemini
    has_gemini_key = bool(cfg.get("api_key") or os.environ.get("GEMINI_API_KEY"))
    backends.append({
        "id": "gemini",
        "name": "Google Gemini (Web Cloud)",
        "endpoint": "https://generativelanguage.googleapis.com",
        "status": "configured" if has_gemini_key else "needs_key",
        "type": "web",
        "models": ["gemini-1.5-flash", "gemini-1.5-pro", "gemini-2.0-flash"],
        "default_model": "gemini-1.5-flash"
    })

    # 4. Web-Based Cloud: OpenAI
    has_openai_key = bool(os.environ.get("OPENAI_API_KEY"))
    backends.append({
        "id": "openai",
        "name": "OpenAI / ChatGPT (Web Cloud)",
        "endpoint": "https://api.openai.com/v1",
        "status": "configured" if has_openai_key else "needs_key",
        "type": "web",
        "models": ["gpt-4o-mini", "gpt-4o"],
        "default_model": "gpt-4o-mini"
    })

    # 5. Web-Based Cloud: Custom OpenAI-compatible (Groq / OpenRouter / DeepSeek)
    backends.append({
        "id": "custom_web",
        "name": "OpenRouter / Groq / DeepSeek (Web Cloud)",
        "endpoint": "https://openrouter.ai/api/v1",
        "status": "configured" if cfg.get("backend") == "custom_web" and cfg.get("api_key") else "needs_key",
        "type": "web",
        "models": ["llama-3.3-70b-versatile", "deepseek-chat", "custom"],
        "default_model": "llama-3.3-70b-versatile"
    })

    # 6. Built-in Offline Expert Engine
    backends.append({
        "id": "builtin",
        "name": "Built-in Armorer Knowledge Engine (Offline)",
        "endpoint": "internal",
        "status": "online",
        "type": "offline",
        "models": ["gunsmith-expert-v1"],
        "default_model": "gunsmith-expert-v1"
    })

    return {"backends": backends, "saved_config": cfg}

def generate_fallback_expert_response(query: str, firearm_data: Dict[str, Any]) -> str:
    """Intelligent rule-based expert answer tailored to active firearm platform when LLM is offline."""
    q = query.lower()
    fid = firearm_data.get("id", "")
    fname = firearm_data.get("name", "Firearm")
    
    # 1. Glock Pistols Platform
    if "glock" in fid.lower():
        if any(k in q for k in ["sear", "cruciform", "engagement", "orange", "plate", "drop safety"]):
            return (
                "### Glock Cruciform Sear Engagement Specification\n\n"
                "* **Safety Requirement:** Minimum **66% (2/3)** surface overlap between the striker lug and trigger bar cruciform sear plate.\n"
                "* **Armorer Inspection Protocol:** Install the orange Armorer Inspection Cover Plate (`SP 02096`) onto the slide rear. Cock the action, illuminate with an inspection light, and observe sear shelf overlap under 10x magnification.\n"
                "* **⚠️ CRITICAL SAFETY WARNING:** Overlap under 66% introduces extreme risk of accidental discharge upon drop/impact or uncontrolled multi-fire/full-auto slip."
            )
        elif any(k in q for k in ["lube", "oil", "lubricat", "clean", "drop"]):
            return (
                "### Glock Factory 5-Drop Lubrication Protocol\n\n"
                "Apply **exactly 5 drops** of clean gun oil:\n"
                "1. **Drops 1 & 2:** One drop split evenly along both slide rail channels.\n"
                "2. **Drops 3 & 4:** One drop split along front slide rails.\n"
                "3. **Drop 5:** One drop spread on barrel exterior circumference and barrel hood.\n"
                "4. **Half Drop (Crucial):** One tiny drop where the trigger bar cruciform bird-head wipes across the connector cam ramp.\n\n"
                "⚠️ **MANDATORY ARMORER WARNING:** NEVER lubricate the firing pin channel, striker sleeve, or safety plunger hole. Oil in the channel creates hydrodynamic drag, collecting brass shavings and causing light primer strikes."
            )
        elif any(k in q for k in ["trigger", "polish", "connector", "25", "cent"]):
            return (
                "### Glock 25¢ Trigger Polish & Connector Tuning\n\n"
                "* **Surfaces to Polish:** Mirror polish with Flitz or Mothers polish:\n"
                "  1. Cruciform sear shelf\n"
                "  2. Connector cam ramp face\n"
                "  3. Trigger bar safety plunger bump\n"
                "  4. Firing pin safety plunger dome\n"
                "  5. Striker lug contact face\n"
                "* **Rules:** Use felt bob or cotton cloth only. DO NOT use stones, files, or sandpaper. Never alter factory 90° sear angles.\n"
                "* **Connector Gap:** Maintain 0.005\" to 0.010\" clearance between connector top tab and trigger housing."
            )
        elif any(k in q for k in ["stoppage", "extract", "stovepipe", "fte", "jam", "eject"]):
            return (
                "### Glock Extraction & Malfunction Diagnostics\n\n"
                "* **Failure to Extract / Stovepipe:**\n"
                "  1. Check extractor claw edge under magnification for chipping or rounded nose.\n"
                "  2. Check Spring Loaded Bearing: must match caliber (black for 9mm LCI, white for .40 S&W).\n"
                "  3. In Gen 4 9mm: upgrade old 336 ejector to **30274** (or Gen 5 **47021**) ejector bar to eliminate erratic brass-to-face ejection."
            )
        elif any(k in q for k in ["strip", "disassemble", "takedown", "pin"]):
            return (
                "### Glock Detail Disassembly & Pin Punch Sequence\n\n"
                "1. **Clear Weapon:** Drop magazine, lock slide open, visually/physically verify chamber empty.\n"
                "2. **Field Strip:** Pull trigger to decock striker, pull slide rearward 1/8\", pull down slide lock tabs on both sides, slide off forward.\n"
                "3. **Frame Pin Order:** On 3-pin frames (Gen 3/4), push out the **top locking block pin FIRST** using a 3/32\" armorer punch. This relieves spring tension off the trigger pin below it, allowing the trigger pin to push out effortlessly without battering the frame."
            )
        else:
            return (
                f"### Glock Armorer Technical Overview\n\n"
                f"* **System:** Safe-Action striker-fired short recoil system.\n"
                f"* **Cruciform Sear Engagement:** Minimum 66% (2/3 overlap) via orange inspection cover plate.\n"
                f"* **Connector Gap:** 0.005\" to 0.010\" clearance.\n"
                f"* **Lubrication:** Strict 5-drop rule; keep striker channel 100% dry.\n"
                f"* **Primary Guides:** Consult the *Glock Armorer's Manual (Gen 1–5)* in the library."
            )

    # 2. Ruger Firearms Platform
    elif "ruger" in fid.lower():
        if any(k in q for k in ["10/22", "1022", "torque", "v-block", "action screw"]):
            return (
                "### Ruger 10/22 Factory Torque Specifications\n\n"
                "* **Takedown Action Screw:** **15 to 20 in-lbs** for wood/synthetic stocks; up to **25 in-lbs** for metal pillar-bedded stocks.\n"
                "* **Barrel V-Block Clamp Screws:** **25 to 30 in-lbs** tightening evenly in alternating 5 in-lb increments.\n"
                "* **⚠️ Armorer Precaution:** Never overtighten the V-block beyond 30 in-lbs, as this causes barrel tenon droop and destroys accuracy.\n"
                "* **Bolt Headspace (Rim Recess):** Factory rim recess is 0.0425\" to 0.0435\" depth."
            )
        elif any(k in q for k in ["magazine", "rotary", "rotary mag", "tension", "spool"]):
            return (
                "### Ruger 10/22 Rotary Magazine Pre-Tensioning\n\n"
                "1. Disassemble central 9/64\" hex nut and clean lead wax from rotor flutes.\n"
                "2. Insert clock spring arbor into rotor notch.\n"
                "3. **Pre-Load Spring:** Rotate the rotor counter-clockwise exactly **1-1/4 full turns (450°)** before seating into the magazine feed lips.\n"
                "4. Cinch central allen screw until snug without cracking polymer casing."
            )
        elif any(k in q for k in ["mark", "mk", "strut", "reassembly", "jigsaw", "jammed"]):
            return (
                "### Ruger Mark I / II / III Reassembly & Hammer Strut Alignment\n\n"
                "* **The Golden Rule:** The hammer strut must nest directly into the mainspring housing plunger cup.\n"
                "* **Fail-Safe Procedure:**\n"
                "  1. With bolt stop pin pushed up through frame, point pistol muzzle **45° upward**, pull trigger to let hammer fall forward.\n"
                "  2. Invert pistol pointing muzzle **upward**, allowing the hammer strut to dangle freely toward the mainspring housing.\n"
                "  3. Swing mainspring housing closed — verify you feel spring resistance in the final 1/4\" before latching."
            )
        elif any(k in q for k in ["gp100", "revolver", "cylinder", "gap", "endshake"]):
            return (
                "### Ruger GP100 Revolver Armorer Clearances\n\n"
                "* **Barrel-to-Cylinder Gap (BCG):** **0.004\" to 0.007\"** nominal with feeler gauge (0.008\" maximum service limit).\n"
                "* **Cylinder Endshake (Axial Play):** Maximum **0.002\"** allowable play. If excessive, install stainless steel crane bearing shims.\n"
                "* **Headspace:** 0.060\" to 0.068\" cartridge rim to recoil shield.\n"
                "* **Firing Pin Protrusion:** 0.048\" to 0.055\" with transfer bar held raised."
            )
        else:
            return (
                f"### Ruger Firearms Armorer Summary\n\n"
                f"* **10/22 Carbine:** V-block torque 25–30 in-lbs; action screw 15–20 in-lbs; rotary mag 1-1/4 turns.\n"
                f"* **Mark Series:** Hammer strut gravity cup alignment; Mark IV one-button takedown.\n"
                f"* **GP100:** Cylinder gap 0.004\"–0.007\"; endshake ≤ 0.002\".\n"
                f"* Consult the factory manuals in the preview window for complete exploded views."
            )

    # 3. Beretta Pistols Platform
    elif "beretta" in fid.lower():
        if any(k in q for k in ["dead trigger", "trigger bar", "spring", "right grip"]):
            return (
                "### Beretta 92FS / M9 Dead Trigger Diagnosis\n\n"
                "* **Primary Symptom:** Trigger pulls rearward with zero resistance; hammer fails to cock.\n"
                "* **Root Cause:** The forward leg of the trigger bar spring has slipped out of its groove on the underside of the trigger bar. This almost always happens when removing or loosening the right grip panel.\n"
                "* **Remedy:** Remove right grip panel, hook spring leg securely into trigger bar groove, and verify grip bushing does not pinch spring upon tightening."
            )
        elif any(k in q for k in ["locking block", "block", "lug", "wing", "fracture"]):
            return (
                "### Beretta 92 Locking Block Inspection & Service Life\n\n"
                "* **Service Life:** Inspect every 5,000 rounds; replace every 15,000 to 20,000 rounds.\n"
                "* **Generations:** Upgrade Gen 1 blocks (sharp square cuts) to Gen 3 kits (radiused stress-relief cuts).\n"
                "* **Inspection:** Check block wings under 10x magnification for micro-fissures. Also replace recoil spring every 3,000–5,000 rounds."
            )
        elif any(k in q for k in ["d spring", "trigger pull", "double action", "tuning"]):
            return (
                "### Factory Beretta 'D' Hammer Spring Upgrade\n\n"
                "* Installing the factory **Beretta 92D (DAO) mainspring** drops standard double-action trigger pull from ~12 lbs down to a smooth, reliable **8.0 to 8.5 lbs**.\n"
                "* Unlike aftermarket ultra-light springs, the factory D spring maintains 100% primer ignition reliability across all standard NATO ammunition."
            )
        else:
            return (
                f"### Beretta 92FS / M9 Technical Summary\n\n"
                f"* **Operating System:** Short-recoil falling locking block with non-tilting barrel.\n"
                f"* **Tolerances:** Locking block replacement at 15k–20k rds; recoil spring at 3k–5k rds.\n"
                f"* **Safety Feature:** Oversized 92FS hammer pin engages slide channel to prevent rearward slide separation.\n"
                f"* Consult the *Beretta 92FS Full Technical Manual* in the preview panel."
            )

    # 4. General Gunsmithing Workshop Platform
    elif "general" in fid.lower() or "smithing" in fid.lower():
        if any(k in q for k in ["headspace", "gauge", "go", "no-go", "field"]):
            return (
                "### Masterclass: Headspace Gauging Standards\n\n"
                "* **GO Gauge:** Minimum allowable chamber length. Bolt must close smoothly without binding.\n"
                "* **NO-GO Gauge:** Maximum allowable chamber length for new or rechambered rifles. Bolt must NOT close with light finger pressure.\n"
                "* **FIELD Gauge:** Absolute maximum safe limit for service rifles. If bolt closes on FIELD gauge, the firearm is **UNSAFE TO FIRE** (extreme risk of case head separation and gas blowout).\n"
                "* **Armorer Protocol:** Always strip bolt extractors and ejector plungers before gauging to ensure true metal-on-metal reading."
            )
        elif any(k in q for k in ["cerrosafe", "chamber cast", "casting", "alloy"]):
            return (
                "### Chamber Casting with Cerrosafe Low-Melt Alloy\n\n"
                "* **Melting Point:** 160°F to 190°F in clean ladle.\n"
                "* **Bore Prep:** Plug bore 1/2\" ahead of chamber throat with tight oiled patch; preheat barrel slightly with heat gun.\n"
                "* **CRITICAL TIMING WINDOW:** Cerrosafe shrinks during initial cooling, then expands. It reaches **exact 1:1 chamber dimensions at PRECISELY 1 HOUR after pouring**. Measure your cast at the 1-hour mark with micrometer."
            )
        elif any(k in q for k in ["blue", "bluing", "rust", "tank", "caustic"]):
            return (
                "### Bluing Disciplines: Slow Rust vs Hot Caustic\n\n"
                "* **Traditional Slow Rust Bluing:** Acid solution rusting -> sweat in humidity box -> boil in distilled water to convert red Fe2O3 to black Fe3O4 -> card with 0.003\" wire wheel. Best for soldered double barrels.\n"
                "* **Hot Caustic Salts:** 285°F to 292°F sodium hydroxide/nitrate tank. Never add cold water to hot salts. Complete degreasing in boiling cleaner is mandatory."
            )
        else:
            return (
                f"### General Gunsmithing Core Disciplines\n\n"
                f"* **Headspace:** Bolt must close on GO, must not close on FIELD.\n"
                f"* **Fasteners:** Hollow-ground parallel bits only; zero tapered screwdrivers.\n"
                f"* **Chamber Casting:** Cerrosafe 1-hour measurement window.\n"
                f"* **Barrels:** 11-degree target crown concentric to bore axis.\n"
                f"* Consult *Practical Gunsmithing* and *US Army TM 9-1005* in the library."
            )

    # 5. Lewis Machine Gun Platform
    else:
        if any(k in q for k in ["tension", "spring", "clock", "pinion", "mainspring", "lbs"]):
            return (
                "### Return Mainspring (Clock Spring) & Pinion Calibration\n\n"
                "**Primary Spec:**\n"
                "* Normal operating tension is **12 to 14 lbs pull**, measured with a spring scale hooked to the cocking handle as it initiates rearward stroke.\n"
                "* Standard baseline from complete slack is **2 to 2½ full revolutions** of the circular gear casing.\n\n"
                "**Gunsmith Procedure:**\n"
                "1. **Safety Warning:** Never release the gear casing catch with the spring under load without holding the pinion firmly. Releasing uncontrolled will shear the pinion teeth or fracture the spring arbor.\n"
                "2. To increase tension (for sluggish cycling or short recoil): rotate gear casing clockwise 1–2 clicks.\n"
                "3. To decrease tension (for excessive bolt bounce or buffer battering): relieve one notch counterclockwise.\n\n"
                "*Reference Manual:* [Savage Arms Lewis Machine Gun Hand-Book (p. 41-45)](/api/manuals/Lewis_Automatic_Machine_Gun/1917_Savage_Arms_Lewis_Machine_Gun_Handbook.pdf)"
            )
        elif any(k in q for k in ["striker", "firing pin", "oprod", "operating rod", "repair", "replace"]):
            return (
                "### Striker (Firing Pin) & Operating Rod Servicing\n\n"
                "**Component Architecture:**\n"
                "* The striker is rigidly mounted directly to the vertical post of the operating rod/piston rack. It does *not* have an internal firing pin spring in the bolt.\n"
                "* It reaches the primer only during the final 1/2-inch forward stroke as the helical cam completes 4-lug bolt lockup.\n\n"
                "**Tolerances & Replacement:**\n"
                "* **Striker Protrusion:** Must measure **0.050\" to 0.060\"** beyond the bolt face when in full battery.\n"
                "* If the striker is broken or chipped: drive out the transverse taper pin holding the striker in the piston post, extract the old striker, machine a replacement from tool steel (O1 or W1), harden and temper to ~50–52 HRC, and re-pin.\n\n"
                "*Recommended Bench Video:* [Mark Novak - Anvil 033: Lewis Gun Firing Pin and Oprod Repair](https://www.youtube.com/watch?v=IkPNHiLMFL0)"
            )
        elif any(k in q for k in ["stoppage", "jam", "troubleshoot", "malfunction", "position"]):
            return (
                "### Lewis Gun 4-Position Stoppage Diagnostic Matrix\n\n"
                "Diagnose malfunctions immediately by the resting position of the cocking handle:\n\n"
                "1. **Position 1 (Handle Fully Forward):** Misfire. Dud cartridge, empty pan, worn/broken striker tip, or bolt not completely cammed into battery.\n"
                "2. **Position 2 (Handle at 1\" to 2\" Mid-Stroke):** Short recoil / feed stoppage. Weak return spring, dented cartridge case, or heavy carbon in gas cylinder.\n"
                "3. **Position 3 (Handle Near Full Rear):** Extraction / Ejection failure. Broken extractor claws, broken ejector arm (left receiver wall), or ruptured cartridge case stuck in chamber.\n"
                "4. **Position 4 (Handle Jammed Full Rear):** Severe mechanical lock. Broken return spring binding in gear casing, sheared rack/pinion tooth, or bent piston rod.\n\n"
                "*Reference Manual:* [1942 UK: How to Remedy and Prevent Stoppages](/api/manuals/Lewis_Automatic_Machine_Gun/1942_UK_How_to_Remedy_and_Prevent_Stoppages.pdf)"
            )
        elif any(k in q for k in ["strip", "disassemble", "takedown", "field strip", "take down"]):
            return (
                "### Field Stripping & Takedown Sequence\n\n"
                "1. **Clear Weapon:** Confirm chamber empty and feedway clear. Ease bolt forward under trigger control.\n"
                "2. **Remove Buttstock:** Depress the spring-loaded buttstock latch at the front lower edge of the stock; slide the butt assembly rearward off the receiver dovetail.\n"
                "3. **Release Mainspring Tension:** Cock handle slightly to access gear casing catch. Disengage catch and ease the spiral clock spring to complete slack.\n"
                "4. **Drop Trigger Housing:** Pull the trigger and slide the trigger/pistol grip group downward and rearward along its receiver rails.\n"
                "5. **Withdraw Operating Rod & Bolt:** Retract cocking handle to the disassembly enlargement cut, pull handle outward to detach, then slide bolt and piston rod out the rear.\n"
                "6. **Lift Feed Cover:** Pivot feed cover latch, swing cover upward to access feed arm and feed pawls.\n\n"
                "*Bench Video:* [C&Rsenal Project Lightening Episode 04: Field Strip](https://www.youtube.com/watch?v=I3ZA9rg8uKI)"
            )
        elif any(k in q for k in ["clean", "corrosive", "oil", "lubricat", "maintain"]):
            return (
                "### Cleaning & Chemical Care Protocols\n\n"
                "* **Corrosive Primer Neutralization:** Surplus military .303 and .30-06 ammunition leaves corrosive potassium chlorate salts. Flush bore, chamber, and gas port with hot soapy water or boiling water before cleaning with solvent (Hoppe's No. 9 / Ballistol).\n"
                "* **Gas Piston & Cup:** Soak the cupped piston head in carbon remover (Kroil or Slip 2000). Scrape carbon with brass scrapers. Avoid emery cloth that reduces piston diameter.\n"
                "* **Pan Magazine Lubrication Caution:** Do **NOT** oil the internal spiral track heavily. Wet lubricant collects powder residue and dirt, causing the pan center rotor to drag and fail feeding."
            )
        elif any(k in q for k in ["gas", "regulator", "cup", "port"]):
            return (
                "### Gas Regulator Adjustments & Settings\n\n"
                "* The gas regulator cup at the front gas block features two port orifices:\n"
                "  * **'S' (Small Port):** Factory standard setting for normal shooting with standard service ammunition.\n"
                "  * **'L' (Large Port):** Port to select when firing with heavy carbon buildup, sandy conditions, or in sub-zero weather.\n"
                "* If the gun experiences short recoil (stovepipes, failure to advance pan magazine), switch regulator to the large port."
            )
        else:
            return (
                f"### Gunsmith Technical Summary for: *{query}*\n\n"
                f"For the **{fname}**:\n"
                f"* **Calibers & System:** {firearm_data.get('subtitle', '')}\n"
                f"* **Key Calibrations:** Spring tension = 12–14 lbs; Striker protrusion = 0.050\"–0.060\"; Headspace (.303) = 0.058\" GO / 0.064\" NO-GO.\n"
                f"* **Consult Primary Documents:** You can preview all original manuals, inspect high-resolution schematic plates, or watch video takedowns directly in the center preview window."
            )

@app.post("/api/chat")
async def chat_handler(req: ChatRequest):
    firearm_data = load_firearm_data(req.firearm_id)
    user_query = req.messages[-1].content if req.messages else ""
    
    # Dynamic specifications string
    specs_lines = [f"- {k.replace('_', ' ').title()}: {v}" for k, v in firearm_data.get('specs', {}).items()]
    specs_str = "\n".join(specs_lines) if specs_lines else "- Refer to factory armorer manuals in repository."

    # Dynamic document sources
    doc_sources = [m["title"] for m in firearm_data.get("manuals", [])[:2]]
    if firearm_data.get("videos"):
        doc_sources.append(firearm_data["videos"][0]["title"])
    if not doc_sources:
        doc_sources = [firearm_data.get("name", "Technical Dossier")]
    
    # System prompt injected with platform technical specifications
    system_prompt = (
        f"You are an expert master gunsmith and armorer assistant helping a technician service, repair, clean, "
        f"troubleshoot, and maintain firearms. You have access to the complete workshop technical files for the "
        f"{firearm_data['name']} ({firearm_data['subtitle']}).\n\n"
        f"KEY WORKSHOP SPECIFICATIONS & TOLERANCES:\n"
        f"{specs_str}\n\n"
        f"Always provide precise, technical, armorer-level advice with safety warnings (e.g. spring safety, headspace limits, zero lubricant where prohibited, torque specs). "
        f"Format your response with clear markdown headers, bold bullet points, and step-by-step procedures."
    )

    cfg = get_saved_config()
    backend = req.backend or cfg.get("backend", "auto")
    model = req.model or cfg.get("model", "auto")
    endpoint = req.endpoint or cfg.get("endpoint", "")
    api_key = req.api_key or cfg.get("api_key", "")
    temp = req.temperature if req.temperature is not None else cfg.get("temperature", 0.3)

    # 1. Google Gemini (Web Cloud)
    if backend == "gemini" or (backend == "auto" and (api_key or os.environ.get("GEMINI_API_KEY")) and (model and "gemini" in model)):
        key = api_key or os.environ.get("GEMINI_API_KEY", "")
        if key:
            mod = model if model and model != "auto" else "gemini-1.5-flash"
            url = f"https://generativelanguage.googleapis.com/v1beta/models/{mod}:generateContent?key={key}"
            payload = {
                "system_instruction": {"parts": [{"text": system_prompt}]},
                "contents": [{"role": "user", "parts": [{"text": user_query}]}],
                "generationConfig": {"temperature": temp}
            }
            try:
                async with httpx.AsyncClient(timeout=15.0) as client:
                    resp = await client.post(url, json=payload)
                    if resp.status_code == 200:
                        data = resp.json()
                        candidates = data.get("candidates", [])
                        if candidates:
                            parts = candidates[0].get("content", {}).get("parts", [])
                            if parts:
                                return JSONResponse({
                                    "reply": parts[0].get("text", "").strip(),
                                    "backend_used": f"Google Gemini ({mod}) [Cloud Web]",
                                    "sources": doc_sources
                                })
                    else:
                        return JSONResponse({
                            "reply": f"⚠️ Gemini API Error (HTTP {resp.status_code}): {resp.text[:200]}",
                            "backend_used": "Gemini API Error",
                            "sources": []
                        })
            except Exception as e:
                if backend == "gemini":
                    return JSONResponse({"reply": f"⚠️ Failed to connect to Gemini Web: {str(e)}", "backend_used": "Error", "sources": []})

    # 2. OpenAI / Custom Web Cloud (OpenRouter, Groq, DeepSeek)
    if backend in ["openai", "custom_web"] or (backend == "auto" and (api_key or os.environ.get("OPENAI_API_KEY")) and model and ("gpt" in model or "claude" in model or "llama" in model)):
        key = api_key or (os.environ.get("OPENAI_API_KEY", "") if backend == "openai" else "")
        target_url = endpoint if endpoint else ("https://api.openai.com/v1/chat/completions" if backend == "openai" else "")
        if target_url and key:
            mod = model if model and model != "auto" else ("gpt-4o-mini" if backend == "openai" else "default")
            headers = {"Authorization": f"Bearer {key}", "Content-Type": "application/json"}
            messages = [{"role": "system", "content": system_prompt}]
            for m in req.messages[-4:]:
                messages.append({"role": m.role, "content": m.content})
            payload = {"model": mod, "messages": messages, "temperature": temp}
            try:
                async with httpx.AsyncClient(timeout=15.0) as client:
                    resp = await client.post(target_url, json=payload, headers=headers)
                    if resp.status_code == 200:
                        data = resp.json()
                        ans = data["choices"][0]["message"]["content"].strip()
                        label = "OpenAI" if "openai" in target_url else "Web Cloud LLM"
                        return JSONResponse({
                            "reply": ans,
                            "backend_used": f"{label} ({mod}) [Cloud Web]",
                            "sources": doc_sources
                        })
                    else:
                        return JSONResponse({
                            "reply": f"⚠️ Web LLM API Error (HTTP {resp.status_code}): {resp.text[:200]}",
                            "backend_used": "Web API Error",
                            "sources": []
                        })
            except Exception as e:
                if backend in ["openai", "custom_web"]:
                    return JSONResponse({"reply": f"⚠️ Failed to connect to Web LLM: {str(e)}", "backend_used": "Error", "sources": []})

    # 3. Local AI Machine: Ollama (localhost or LAN host like http://192.168.1.x:11434)
    if backend in ["ollama", "auto"]:
        ep = endpoint if endpoint else "http://127.0.0.1:11434"
        try:
            model_to_use = model if model and model != "auto" else "qwen3.5:4b"
            prompt_full = f"{system_prompt}\n\nUser Question: {user_query}\n\nMaster Gunsmith Response:"
            payload = {
                "model": model_to_use,
                "prompt": prompt_full,
                "stream": False,
                "options": {"temperature": temp}
            }
            async with httpx.AsyncClient(timeout=10.0) as client:
                resp = await client.post(f"{ep.rstrip('/')}/api/generate", json=payload)
                if resp.status_code == 200:
                    ans = resp.json().get("response", "").strip()
                    if ans:
                        host_tag = "Localhost" if "127.0.0.1" in ep or "localhost" in ep else f"LAN AI Rig ({ep})"
                        return JSONResponse({
                            "reply": ans,
                            "backend_used": f"Ollama ({model_to_use}) [{host_tag}]",
                            "sources": doc_sources
                        })
        except Exception:
            pass

    # 4. Local AI Machine: LM Studio (localhost or LAN host like http://192.168.1.x:1234/v1)
    if backend in ["lmstudio", "auto"]:
        ep = endpoint if endpoint else "http://127.0.0.1:1234/v1"
        try:
            model_to_use = model if model and model != "auto" else "meta-llama-3.1-8b-instruct-abliterated"
            messages = [{"role": "system", "content": system_prompt}]
            for m in req.messages[-4:]:
                messages.append({"role": m.role, "content": m.content})
            payload = {
                "model": model_to_use,
                "messages": messages,
                "temperature": temp
            }
            async with httpx.AsyncClient(timeout=10.0) as client:
                resp = await client.post(f"{ep.rstrip('/')}/chat/completions", json=payload)
                if resp.status_code == 200:
                    data = resp.json()
                    ans = data["choices"][0]["message"]["content"].strip()
                    host_tag = "Localhost" if "127.0.0.1" in ep or "localhost" in ep else f"LAN AI Rig ({ep})"
                    return JSONResponse({
                        "reply": ans,
                        "backend_used": f"LM Studio ({model_to_use}) [{host_tag}]",
                        "sources": doc_sources
                    })
        except Exception:
            pass

    # 5. Fallback to Built-in Expert Engine
    fallback_reply = generate_fallback_expert_response(user_query, firearm_data)
    return JSONResponse({
        "reply": fallback_reply,
        "backend_used": "Built-in Armorer Knowledge Engine (Offline)",
        "sources": doc_sources
    })

@app.get("/api/search")
async def search_repository(q: str = Query(..., min_length=2), firearm_id: str = "Lewis_Automatic_Machine_Gun"):
    query = q.lower()
    results = []

    # 1. Search Across All Firearms / Manufacturers / Models / Key Tasks
    for fid, meta in FIREARMS_METADATA.items():
        fname = meta.get("name", "").lower()
        mfg = meta.get("manufacturer", "").lower()
        sub = meta.get("subtitle", "").lower()
        models = [m.lower() for m in meta.get("models", [])]
        calibers = [c.lower() for c in meta.get("calibers", [])]
        key_tasks = [t.lower() for t in meta.get("key_tasks", [])]
        specs_blob = " ".join(str(v).lower() for v in meta.get("specs", {}).values())
        
        if (query in fname or query in mfg or query in sub or 
            any(query in m for m in models) or any(query in c for c in calibers) or
            any(query in t for t in key_tasks) or query in specs_blob):
            results.append({
                "type": "firearm",
                "title": f"🔫 Switch to: {meta.get('name')}",
                "subtitle": f"{meta.get('manufacturer')} • {meta.get('category')}",
                "action": "switch_firearm",
                "target": fid
            })

    # 2. Search active firearm technical data
    data = load_firearm_data(firearm_id)

    # Search manuals
    for m in data["manuals"]:
        if query in m["title"].lower():
            results.append({
                "type": "manual",
                "title": m["title"],
                "subtitle": f"PDF Manual ({m['size_mb']} MB)",
                "action": "open_manual",
                "target": m["filename"]
            })

    # Search videos
    for v in data["videos"]:
        if query in v["title"].lower() or query in v["summary"].lower() or query in v["category"].lower():
            results.append({
                "type": "video",
                "title": v["title"],
                "subtitle": f"{v['creator']} • {v['category']}",
                "action": "open_video",
                "target": v["id"]
            })

    # Search stoppages
    for s in data["stoppages"]:
        if query in s["position"].lower() or query in s["short_desc"].lower() or any(query in c.lower() for c in s["causes"]):
            results.append({
                "type": "stoppage",
                "title": s["position"],
                "subtitle": s["short_desc"],
                "action": "open_stoppage",
                "target": s["position"]
            })

    # Search specs
    for k, v in data["specs"].items():
        if query in k.lower() or query in v.lower():
            results.append({
                "type": "spec",
                "title": k.replace("_", " ").title(),
                "subtitle": v,
                "action": "open_spec",
                "target": k
            })

    return {"results": results}

@app.get("/api/parts/{firearm_id}")
async def get_parts(firearm_id: str):
    if firearm_id in PARTS_DATABASE:
        return {"firearm_id": firearm_id, "parts": PARTS_DATABASE[firearm_id]}
    for cat_name, parts in DEFAULT_CATEGORY_PARTS.items():
        return {"firearm_id": firearm_id, "category": cat_name, "parts": parts}
    return {"firearm_id": firearm_id, "parts": []}

@app.post("/api/parts/identify")
async def identify_part(req: IdentifyPartRequest):
    result = find_part_by_coordinates(
        firearm_id=req.firearm_id,
        norm_x=req.norm_x,
        norm_y=req.norm_y,
        norm_r=req.norm_r or 0.08
    )
    if not result or not result.get("primary"):
        raise HTTPException(status_code=404, detail="No matching component found")
    return {
        "status": "ok",
        "primary": result["primary"],
        "distance": result.get("distance", 0.0),
        "alternates": result.get("alternates", [])
    }

@app.get("/api/network-info")
async def get_network_info():
    import socket
    hostname = socket.gethostname()
    try:
        ips = socket.gethostbyname_ex(hostname)[2]
        lan_ips = [ip for ip in ips if not ip.startswith("127.") and not ip.startswith("169.")]
    except Exception:
        lan_ips = []
    
    primary_ip = lan_ips[0] if lan_ips else "127.0.0.1"
    port = 8055
    return {
        "hostname": hostname,
        "local_url": f"http://127.0.0.1:{port}",
        "network_url": f"http://{primary_ip}:{port}",
        "lan_ips": lan_ips,
        "port": port
    }

@app.get("/api/network-qr")
async def get_network_qr():
    import socket
    import io
    import qrcode
    from fastapi.responses import Response

    hostname = socket.gethostname()
    try:
        ips = socket.gethostbyname_ex(hostname)[2]
        lan_ips = [ip for ip in ips if not ip.startswith("127.") and not ip.startswith("169.")]
    except Exception:
        lan_ips = []
    
    primary_ip = lan_ips[0] if lan_ips else "127.0.0.1"
    target_url = f"http://{primary_ip}:8055"

    qr = qrcode.QRCode(box_size=6, border=2)
    qr.add_data(target_url)
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white")
    
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    return Response(content=buf.getvalue(), media_type="image/png")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=8055, reload=True)
