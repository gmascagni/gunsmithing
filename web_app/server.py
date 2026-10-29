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
    backend: Optional[str] = "auto" # "ollama", "lmstudio", "builtin"
    model: Optional[str] = None
    temperature: Optional[float] = 0.3

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
            
    # 3. Videos
    videos = [
        {
            "id": "IkPNHiLMFL0",
            "title": "Anvil 033: Lewis Gun Firing Pin and Oprod Repair",
            "creator": "Mark Novak / Anvil",
            "category": "Gunsmithing & Repair",
            "url": "https://www.youtube.com/watch?v=IkPNHiLMFL0",
            "embed_url": "https://www.youtube-nocookie.com/embed/IkPNHiLMFL0",
            "summary": "Master-level gunsmithing repair. Machining a replacement striker/firing pin, annealing, hardening to ~50-52 HRC, fitting to op-rod post, and testing bolt lockup headspace."
        },
        {
            "id": "I3ZA9rg8uKI",
            "title": "Project Lightening Ep. 04: Field Strip",
            "creator": "C&Rsenal & Forgotten Weapons",
            "category": "Disassembly & Assembly",
            "url": "https://www.youtube.com/watch?v=I3ZA9rg8uKI",
            "embed_url": "https://www.youtube-nocookie.com/embed/I3ZA9rg8uKI",
            "summary": "Step-by-step takedown: Buttstock removal, releasing return spring tension safely, dropping trigger group, sliding out bolt & piston, and removing feed arm."
        },
        {
            "id": "Mnp4J-5UNZI",
            "title": "Lewis Light Machine Gun - Step By Step Disassembly & Reassembly",
            "creator": "Historical Firearms Bench",
            "category": "Disassembly & Assembly",
            "url": "https://www.youtube.com/watch?v=Mnp4J-5UNZI",
            "embed_url": "https://www.youtube-nocookie.com/embed/Mnp4J-5UNZI",
            "summary": "Tabletop bench view of component pin extraction, barrel shroud disassembly, and timing the rack teeth with the pinion."
        },
        {
            "id": "kI1p1kqkbdA",
            "title": "World of Guns: Complete 3D Disassembly & Assembly",
            "creator": "Noble Empire",
            "category": "3D Mechanism & Cutaway",
            "url": "https://www.youtube.com/watch?v=kI1p1kqkbdA",
            "embed_url": "https://www.youtube-nocookie.com/embed/kI1p1kqkbdA",
            "summary": "3D interactive exploded view showing all 62+ component parts, screws, spring plungers, locking lugs, and pan magazine inner rotor."
        },
        {
            "id": "TS9bR9EiRd8",
            "title": "Animation Of The Mechanisms Of The Lewis LMG",
            "creator": "Mechanism Dynamics",
            "category": "3D Mechanism & Cutaway",
            "url": "https://www.youtube.com/watch?v=TS9bR9EiRd8",
            "embed_url": "https://www.youtube-nocookie.com/embed/TS9bR9EiRd8",
            "summary": "Detailed animated slow-motion sequence of gas tap expansion, cup piston push, clock spring rewind, helical cam unlocking, and pan feed arm ratcheting."
        },
        {
            "id": "OMDsdTzEG3Y",
            "title": "Original Lewis Gun Stop-Motion Operations Footage",
            "creator": "War Office / US War Dept Archives",
            "category": "Historical & Training",
            "url": "https://www.youtube.com/watch?v=OMDsdTzEG3Y",
            "embed_url": "https://www.youtube-nocookie.com/embed/OMDsdTzEG3Y",
            "summary": "Vintage military training footage demonstrating operation through sectioned metal cutaways."
        },
        {
            "id": "FlsEmE5pM10",
            "title": "Primer 034: The Lewis Gun Documentary",
            "creator": "C&Rsenal",
            "category": "Historical & Technical Deep Dive",
            "url": "https://www.youtube.com/watch?v=FlsEmE5pM10",
            "embed_url": "https://www.youtube-nocookie.com/embed/FlsEmE5pM10",
            "summary": "In-depth history of Isaac Newton Lewis' design, BSA manufacturing, live fire with high-speed camera footage showing bolt rebound and muzzle venturi cooling."
        },
        {
            "id": "gUXu47SzeG0",
            "title": "US Navy MkVI Lewis Gun in .30-06 for the Marines",
            "creator": "Forgotten Weapons",
            "category": "Variants & Armorer Differences",
            "url": "https://www.youtube.com/watch?v=gUXu47SzeG0",
            "embed_url": "https://www.youtube-nocookie.com/embed/gUXu47SzeG0",
            "summary": "Examination of Savage Arms M1917 chambered in rimless .30-06: altered feed arm, feed pawls, and magazine rim depths."
        },
        {
            "id": "k5FTHSYEo7A",
            "title": "Savage M1918 Aircraft Lewis Gun",
            "creator": "Forgotten Weapons",
            "category": "Variants & Armorer Differences",
            "url": "https://www.youtube.com/watch?v=k5FTHSYEo7A",
            "embed_url": "https://www.youtube-nocookie.com/embed/k5FTHSYEo7A",
            "summary": "Aircraft variant with spade grips, deleted cooling radiator, 97-round high-capacity pan, and silk-bag cartridge deflector chute."
        }
    ]
    
    # 4. Stoppages Diagnostic Data
    stoppages = [
        {
            "position": "Position 1: Cocking Handle Fully Forward",
            "short_desc": "Bolt closed on chamber; gun fails to fire upon trigger pull",
            "causes": [
                "Empty magazine or pan center rotor jammed.",
                "Broken or shortened striker (firing pin tip chipped or deformed).",
                "Defective primer or dud cartridge.",
                "Piston post striker not reaching primer due to incomplete bolt rotation into battery."
            ],
            "action": "Immediate Action: Cock gun, observe feedway, cycle new round. If persistent: Check striker protrusion (spec 0.050\"-0.060\") and examine pan feed pawls."
        },
        {
            "position": "Position 2: Cocking Handle at 1\" to 2\" Mid-Stroke",
            "short_desc": "Bolt stopped during forward travel before fully locking",
            "causes": [
                "Damaged or dented cartridge case jammed in feedway.",
                "Weak return mainspring (pinion tension under 12 lbs).",
                "Severe carbon encrustation in gas cylinder or piston head.",
                "Weak or deformed cartridge guide spring in feed cover."
            ],
            "action": "Immediate Action: Pull cocking handle rearward, clear jammed cartridge, check pan teeth. Gunsmith Action: Increase clock spring tension 1-2 clicks; scrape carbon from gas regulator cup and cylinder."
        },
        {
            "position": "Position 3: Cocking Handle Near Full Rear",
            "short_desc": "Bolt stopped near recoil limit; failure to extract or eject spent case",
            "causes": [
                "Broken extractor claw or fatigued extractor spring.",
                "Broken ejector arm (pivoted in left receiver wall).",
                "Ruptured case neck or head separation left inside chamber.",
                "Gas regulator port set too small for dirty conditions (short recoil)."
            ],
            "action": "Gunsmith Action: Inspect extractors and ejector tip. Use broken-shell extractor for separated cases. Rotate gas regulator from 'S' (Small) to 'L' (Large) port."
        },
        {
            "position": "Position 4: Cocking Handle Jammed Full Rear",
            "short_desc": "Gun locked open; cocking handle cannot be pushed forward",
            "causes": [
                "Broken clock return spring binding inside circular gear casing.",
                "Foreign debris or sheared gear tooth jammed in pinion teeth.",
                "Bent piston rod from excessive gas pressure or barrel shroud drop.",
                "Loose set screw or damaged rack."
            ],
            "action": "Gunsmith Action: Remove buttstock and ease gear casing. Inspect spiral mainspring and pinion teeth. Roll piston rod on precision flat to verify straightness."
        }
    ]
    
    # 5. Workshop Specifications & Tolerances
    specs = {
        "calibers": ".303 British (Mk VII rimmed) / .30-06 Springfield (US M1917/1918 rimless)",
        "operation": "Gas-operated (cup piston), open-bolt, rotating 4-lug bolt, rack & pinion clock spring return",
        "feed": "47-round pan magazine (infantry) / 97-round pan magazine (aircraft/naval)",
        "cyclic_rate": "500 - 600 rounds/min",
        "spring_tension": "12 to 14 lbs pull measured at cocking handle (approx 2 to 2.5 full turns of gear casing from slack)",
        "striker_protrusion": "0.050\" to 0.060\" through bolt face at full battery",
        "gas_regulator": "Two-orifice cup: 'S' (Small - normal operation) / 'L' (Large - foul/cold conditions)",
        "headspace_303": "Rimmed: GO = 0.058\", NO-GO = 0.064\", FIELD = 0.070\"",
        "cooling_system": "Aluminum longitudinal fluted radiator enclosed in steel jacket with muzzle blast venturi cowl"
    }
    
    return {
        "id": firearm_id,
        "name": "Lewis Automatic Machine Gun",
        "subtitle": "Model 1914 / 1917 / 1918 (.303 British & .30-06 Springfield)",
        "manuals": manuals,
        "schematics": schematics,
        "videos": videos,
        "stoppages": stoppages,
        "specs": specs
    }

@app.get("/", response_class=HTMLResponse)
async def serve_index():
    index_file = STATIC_DIR / "index.html"
    if not index_file.exists():
        raise HTTPException(status_code=404, detail="index.html not found")
    return HTMLResponse(content=index_file.read_text(encoding="utf-8"))

@app.get("/api/firearms")
async def list_firearms():
    # Discover available firearms in directory
    firearms = []
    for d in BASE_DIR.iterdir():
        if d.is_dir() and not d.name.startswith(("_", ".")) and (d / "manuals").exists():
            firearms.append({
                "id": d.name,
                "name": d.name.replace("_", " "),
                "has_manuals": True
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

@app.get("/api/llm/backends")
async def check_llm_backends():
    backends = []
    
    # Check Ollama on port 11434
    try:
        async with httpx.AsyncClient(timeout=1.5) as client:
            resp = await client.get("http://127.0.0.1:11434/api/tags")
            if resp.status_code == 200:
                models = [m["name"] for m in resp.json().get("models", [])]
                backends.append({
                    "id": "ollama",
                    "name": "Ollama (Local LLM)",
                    "endpoint": "http://127.0.0.1:11434",
                    "status": "online",
                    "models": models,
                    "default_model": models[0] if models else "llama3"
                })
    except Exception:
        backends.append({
            "id": "ollama",
            "name": "Ollama",
            "endpoint": "http://127.0.0.1:11434",
            "status": "offline",
            "models": [],
            "default_model": "llama3"
        })

    # Check LM Studio on port 1234
    try:
        async with httpx.AsyncClient(timeout=1.5) as client:
            resp = await client.get("http://127.0.0.1:1234/v1/models")
            if resp.status_code == 200:
                models = [m["id"] for m in resp.json().get("data", [])]
                backends.append({
                    "id": "lmstudio",
                    "name": "LM Studio (Local OpenAI-Compatible)",
                    "endpoint": "http://127.0.0.1:1234/v1",
                    "status": "online",
                    "models": models,
                    "default_model": models[0] if models else "local-model"
                })
    except Exception:
        backends.append({
            "id": "lmstudio",
            "name": "LM Studio",
            "endpoint": "http://127.0.0.1:1234/v1",
            "status": "offline",
            "models": [],
            "default_model": "local-model"
        })

    # Always provide Built-in Gunsmith Expert Engine
    backends.append({
        "id": "builtin",
        "name": "Built-in Armorer Knowledge Engine",
        "endpoint": "internal",
        "status": "online",
        "models": ["gunsmith-expert-v1"],
        "default_model": "gunsmith-expert-v1"
    })

    return {"backends": backends}

def generate_fallback_expert_response(query: str, firearm_data: Dict[str, Any]) -> str:
    """Intelligent rule-based expert answer when local LLM is offline or cold-starting."""
    q = query.lower()
    
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
            "For the **Lewis Light Machine Gun**:\n"
            "* **Operation:** Open-bolt, gas-operated via cup-faced piston and Archimedean spiral spring (pinion & rack).\n"
            "* **Key Calibrations:** Spring pull at cocking handle = **12 to 14 lbs**; Striker protrusion = **0.050\" to 0.060\"**; Headspace (.303) = 0.058\" GO / 0.064\" NO-GO.\n"
            "* **Consult Primary Documents:** You can preview all 8 original manuals, inspect 59 high-resolution schematic plates, or watch video takedowns directly in the center preview window."
        )

@app.post("/api/chat")
async def chat_handler(req: ChatRequest):
    firearm_data = load_firearm_data(req.firearm_id)
    user_query = req.messages[-1].content if req.messages else ""
    
    # System prompt injected with gunsmith technical specifications
    system_prompt = (
        f"You are an expert master gunsmith and armorer assistant helping a technician service, repair, clean, "
        f"troubleshoot, and maintain firearms. You have access to the complete workshop technical files for the "
        f"{firearm_data['name']} ({firearm_data['subtitle']}).\n"
        f"KEY SPECIFICATIONS:\n"
        f"- Calibers: {firearm_data['specs']['calibers']}\n"
        f"- Operation: {firearm_data['specs']['operation']}\n"
        f"- Spring Tension: {firearm_data['specs']['spring_tension']}\n"
        f"- Striker Protrusion: {firearm_data['specs']['striker_protrusion']}\n"
        f"- Gas Regulator: {firearm_data['specs']['gas_regulator']}\n"
        f"- Headspace: {firearm_data['specs']['headspace_303']}\n\n"
        f"Always provide precise, technical, armorer-level advice with safety warnings (e.g., releasing clock spring tension safely, open-bolt headspace, corrosive ammo). "
        f"Format your response with clear markdown headers, bold bullet points, and step-by-step procedures."
    )

    # 1. Check if Ollama requested or available
    if req.backend in ["ollama", "auto"]:
        try:
            model_to_use = req.model or "qwen3.5:4b"
            prompt_full = f"{system_prompt}\n\nUser Question: {user_query}\n\nMaster Gunsmith Response:"
            payload = {
                "model": model_to_use,
                "prompt": prompt_full,
                "stream": False,
                "options": {
                    "temperature": req.temperature or 0.3
                }
            }
            async with httpx.AsyncClient(timeout=8.0) as client:
                resp = await client.post("http://127.0.0.1:11434/api/generate", json=payload)
                if resp.status_code == 200:
                    ans = resp.json().get("response", "").strip()
                    if ans:
                        return JSONResponse({
                            "reply": ans,
                            "backend_used": f"Ollama ({model_to_use})",
                            "sources": ["1917 Savage Arms Lewis Hand-Book", "1940 UK Armourers Handbook Part III", "Mark Novak Anvil 033"]
                        })
        except Exception:
            pass # fall through to LM studio or builtin

    # 2. Check if LM Studio requested or available
    if req.backend in ["lmstudio", "auto"]:
        try:
            model_to_use = req.model or "meta-llama-3.1-8b-instruct-abliterated"
            messages = [{"role": "system", "content": system_prompt}]
            for m in req.messages[-4:]:
                messages.append({"role": m.role, "content": m.content})
                
            payload = {
                "model": model_to_use,
                "messages": messages,
                "temperature": req.temperature or 0.3
            }
            async with httpx.AsyncClient(timeout=8.0) as client:
                resp = await client.post("http://127.0.0.1:1234/v1/chat/completions", json=payload)
                if resp.status_code == 200:
                    data = resp.json()
                    ans = data["choices"][0]["message"]["content"].strip()
                    return JSONResponse({
                        "reply": ans,
                        "backend_used": f"LM Studio ({model_to_use})",
                        "sources": ["1917 Savage Arms Lewis Hand-Book", "1940 UK Armourers Handbook Part III"]
                    })
        except Exception:
            pass

    # 3. Fallback to built-in expert engine
    fallback_reply = generate_fallback_expert_response(user_query, firearm_data)
    return JSONResponse({
        "reply": fallback_reply,
        "backend_used": "Built-in Armorer Knowledge Engine",
        "sources": ["1917 Savage Arms Lewis Hand-Book", "1942 UK Stoppages Handbook", "Mark Novak Anvil 033"]
    })

@app.get("/api/search")
async def search_repository(q: str = Query(..., min_length=2), firearm_id: str = "Lewis_Automatic_Machine_Gun"):
    query = q.lower()
    data = load_firearm_data(firearm_id)
    results = []

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
