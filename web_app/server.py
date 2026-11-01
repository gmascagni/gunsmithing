import os
import re
import json
import asyncio
from pathlib import Path
from typing import Optional, List, Dict, Any

from fastapi import FastAPI, HTTPException, Query, Request, UploadFile, File, Form
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

try:
    from web_app.rag_engine import rag_engine
except ImportError:
    from rag_engine import rag_engine

try:
    from web_app.video_analyzer import analyze_malfunction_video, SAMPLE_CASES, UPLOAD_DIR
except ImportError:
    from video_analyzer import analyze_malfunction_video, SAMPLE_CASES, UPLOAD_DIR

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

class LLMStartRequest(BaseModel):
    backend: Optional[str] = "ollama"
    model: Optional[str] = None
    endpoint: Optional[str] = None

class SwitchModelRequest(BaseModel):
    model: str
    backend: Optional[str] = None

class IdentifyPartRequest(BaseModel):
    firearm_id: str
    norm_x: float
    norm_y: float
    norm_r: Optional[float] = 0.08
    image_crop: Optional[str] = None
    plate_id: Optional[str] = None

class VideoAnalyzeRequest(BaseModel):
    firearm_id: Optional[str] = "AR15_M4_Platform"
    sample_id: Optional[str] = None
    user_notes: Optional[str] = ""

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

@app.post("/api/llm/start")
async def start_local_llm(req: Optional[LLMStartRequest] = None):
    """Starts or connects to the local LLM AI engine (Ollama on localhost or LAN)."""
    cfg = get_saved_config()
    target_backend = (req.backend if req and req.backend else cfg.get("backend", "ollama")) or "ollama"
    ep = (req.endpoint if req and req.endpoint else cfg.get("endpoint", "http://127.0.0.1:11434")) or "http://127.0.0.1:11434"
    desired_model = req.model if req and req.model else cfg.get("model", "auto")

    if target_backend == "ollama":
        is_running = False
        models = []
        try:
            async with httpx.AsyncClient(timeout=2.0) as client:
                res = await client.get(f"{ep.rstrip('/')}/api/tags")
                if res.status_code == 200:
                    is_running = True
                    models = [m["name"] for m in res.json().get("models", [])]
        except Exception:
            is_running = False

        if not is_running:
            import shutil, subprocess
            ollama_bin = shutil.which("ollama")
            if not ollama_bin:
                candidate_paths = [
                    Path(os.environ.get("LOCALAPPDATA", "")) / "Programs" / "Ollama" / "ollama.exe",
                    Path(os.environ.get("PROGRAMFILES", "")) / "Ollama" / "ollama.exe",
                    Path(r"C:\Users\gmasc\AppData\Local\Programs\Ollama\ollama.exe"),
                ]
                for cp in candidate_paths:
                    if cp.exists():
                        ollama_bin = str(cp)
                        break

            if ollama_bin:
                try:
                    if os.name == "nt":
                        subprocess.Popen(
                            [ollama_bin, "serve"],
                            creationflags=subprocess.CREATE_NO_WINDOW | subprocess.DETACHED_PROCESS,
                            stdout=subprocess.DEVNULL,
                            stderr=subprocess.DEVNULL
                        )
                    else:
                        subprocess.Popen(
                            [ollama_bin, "serve"],
                            stdout=subprocess.DEVNULL,
                            stderr=subprocess.DEVNULL,
                            start_new_session=True
                        )
                except Exception as e:
                    return JSONResponse({
                        "success": False,
                        "error": f"Failed to spawn Ollama process: {str(e)}",
                        "status": "offline"
                    })

                for _ in range(12):
                    await asyncio.sleep(0.5)
                    try:
                        async with httpx.AsyncClient(timeout=1.0) as client:
                            res = await client.get(f"{ep.rstrip('/')}/api/tags")
                            if res.status_code == 200:
                                is_running = True
                                models = [m["name"] for m in res.json().get("models", [])]
                                break
                    except Exception:
                        pass

        if not is_running:
            return JSONResponse({
                "success": False,
                "error": "Ollama service could not be started or reached on localhost:11434. Please verify Ollama is installed and run 'ollama serve'.",
                "status": "offline",
                "backend": "ollama"
            })

        # Select best active model
        active_model = "qwen3.5:4b"
        if desired_model and desired_model != "auto" and desired_model in models:
            active_model = desired_model
        elif "qwen3.5:4b" in models:
            active_model = "qwen3.5:4b"
        elif any("llama-3" in m.lower() for m in models):
            active_model = next(m for m in models if "llama-3" in m.lower())
        elif models:
            chat_models = [m for m in models if not any(x in m for x in ["embed", "bge", "bert"])]
            active_model = chat_models[0] if chat_models else models[0]

        cfg["backend"] = "ollama"
        cfg["model"] = active_model
        cfg["endpoint"] = ep
        CONFIG_FILE.write_text(json.dumps(cfg, indent=2), encoding="utf-8")

        vram_info = "Ready in VRAM"
        try:
            async with httpx.AsyncClient(timeout=1.5) as client:
                ps_res = await client.get(f"{ep.rstrip('/')}/api/ps")
                if ps_res.status_code == 200:
                    running_models = ps_res.json().get("models", [])
                    active_running = [rm for rm in running_models if rm.get("name") == active_model]
                    if active_running:
                        size_gb = round(active_running[0].get("size_vram", 0) / (1024**3), 2)
                        vram_info = f"{size_gb} GB VRAM (GPU)" if size_gb > 0 else "Loaded in GPU Memory"
        except Exception:
            pass

        return JSONResponse({
            "success": True,
            "status": "online",
            "backend": "ollama",
            "model": active_model,
            "models": models,
            "endpoint": ep,
            "vram_info": vram_info,
            "message": f"Connected to Local Ollama AI! Active Model: {active_model}"
        })

    elif target_backend == "lmstudio":
        try:
            async with httpx.AsyncClient(timeout=2.0) as client:
                res = await client.get(f"{ep.rstrip('/')}/models")
                if res.status_code == 200:
                    models = [m["id"] for m in res.json().get("data", [])]
                    active_model = models[0] if models else "local-model"
                    cfg["backend"] = "lmstudio"
                    cfg["model"] = active_model
                    cfg["endpoint"] = ep
                    CONFIG_FILE.write_text(json.dumps(cfg, indent=2), encoding="utf-8")
                    return JSONResponse({
                        "success": True,
                        "status": "online",
                        "backend": "lmstudio",
                        "model": active_model,
                        "models": models,
                        "endpoint": ep,
                        "message": f"Connected to Local LM Studio! Active Model: {active_model}"
                    })
        except Exception as e:
            return JSONResponse({
                "success": False,
                "error": f"LM Studio is not reachable at {ep}: {str(e)}. Start LM Studio with Local Server enabled.",
                "status": "offline",
                "backend": "lmstudio"
            })

    return JSONResponse({
        "success": True,
        "status": "online",
        "backend": "builtin",
        "model": "gunsmith-expert-v1",
        "message": "Switched to Built-in Armorer Expert Engine (Offline)."
    })

@app.post("/api/llm/stop")
async def stop_local_llm():
    """Unlinks local LLM and falls back to built-in offline expert."""
    cfg = get_saved_config()
    cfg["backend"] = "builtin"
    CONFIG_FILE.write_text(json.dumps(cfg, indent=2), encoding="utf-8")
    return JSONResponse({
        "success": True,
        "status": "offline",
        "backend": "builtin",
        "model": "gunsmith-expert-v1",
        "message": "Local AI unlinked. Switched to Built-in Armorer Expert Engine."
    })

@app.post("/api/llm/switch-model")
async def switch_model(req: SwitchModelRequest):
    """Quickly switches active model for local LLM."""
    cfg = get_saved_config()
    if req.backend:
        cfg["backend"] = req.backend
    cfg["model"] = req.model
    CONFIG_FILE.write_text(json.dumps(cfg, indent=2), encoding="utf-8")
    return JSONResponse({
        "success": True,
        "backend": cfg.get("backend", "ollama"),
        "model": req.model,
        "message": f"Switched model to {req.model}"
    })

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

def build_master_armorer_system_prompt(firearm_data: Dict[str, Any], specs_str: str) -> str:
    """Builds the comprehensive Master Gunsmith directive across military weapons, optics, accessories, long range, and backyard setups."""
    fname = firearm_data.get("name", "Firearm Platform")
    fsub = firearm_data.get("subtitle", "")
    return (
        f"You are the Master Armorer and Chief Weaponsmith of the Armorer's Workbench.\n\n"
        f"CORE DIRECTIVE & SPECIALIZATION (NOT A GENERALIST):\n"
        f"You are NOT a generalist AI summarizing surface-level information. You are a seasoned, highly technical master gunsmith and military weapons specialist with elite, authoritative mastery across five core disciplines:\n\n"
        f"1. MILITARY WEAPONS (HISTORIC TO MODERN):\n"
        f"   - Complete mechanical cycle of operations: feeding, chambering, locking, firing, unlocking, extracting, ejecting, cocking.\n"
        f"   - Gas operating systems (Direct Impingement, Short-Stroke, Long-Stroke, Roller-Delayed, Falling Block, Short Recoil, Open-Bolt).\n"
        f"   - Military weapons mastery: M16/M4/AR-15, AR-10/SR-25, AK-47/AKM/AK-74, FN FAL, G3/PTR, M1 Garand, M14/M1A, SKS 45, Mauser 98k, Mosin-Nagant 91/30, Lee-Enfield No. 4, Lewis Light Machine Gun, M249 SAW, M240, PKM, 1911, Beretta 92FS/M9, Sig P320/M17, Glock Gen 1–5, Browning Hi-Power, HK USP.\n"
        f"   - Full-auto trip timing, disconnector overlap, sear engagement geometries, gas port erosion, dwell time, buffer tube weight calibration (Carbine/H/H2/H3/A5), carrier tilt mitigation.\n"
        f"   - Headspace standards: GO, NO-GO, and FIELD gauges across rimmed, rimless, belted, and bottlenecked cartridges.\n\n"
        f"2. PRECISION OPTICS & SCOPE MOUNTING:\n"
        f"   - Scope mounting protocols: rail bedding, screw degreasing, blue threadlocker (Loctite 242), exact torque specs (Base: 30–35 in-lbs, Ring Crossbolts: 45–65 in-lbs, Ring Caps: 15–18 in-lbs in crisscross sequence—NEVER crush or pinch erector tubes).\n"
        f"   - Ring alignment & lapping: 1-inch, 30mm, 34mm, 35mm coaxial truing with 220-grit compound; checking ring squareness and concentricity.\n"
        f"   - Optical leveling & calibration: mechanical zero, optical centering, leveling reticles via plumb bob or precision feeler gauges between rail and turret flat, tall-target tracking test (100-yard tracking verification).\n"
        f"   - Reticle subtensions & mechanics: First Focal Plane (FFP) vs Second Focal Plane (SFP); MRAD/MIL (0.1 mil = 1cm at 100m, 0.36\" at 100 yd) vs MOA (1.047\" at 100 yd); parallax elimination vs ocular focus; eye box/relief; zero stops.\n"
        f"   - Tactical optics: Red dots (Aimpoint, EOTech), prism scopes (ACOG, Elcan), co-witness heights (absolute, lower 1/3, 1.93\", 2.26\" NVG), 45°/35° offset mounts.\n\n"
        f"3. ACCESSORIES, SUPPRESSORS & TACTICAL HARDWARE:\n"
        f"   - Suppressors: Direct-thread vs QD taper mounts (SureFire, KeyMo, Plan B, Rearden, ASR), bore-to-can concentricity checking using precision alignment rods to prevent catastrophic baffle strikes.\n"
        f"   - Suppressor gas management: adjustable gas blocks (bleed-off vs restrictive), enhanced bolt carriers, gas-busting charging handles, heavier buffer weights.\n"
        f"   - Weapon lights & IR designators: SureFire, Modlite, Cloud Defensive, PEQ-15, DBAL, MAWL, zeroing IR lasers with parallel offset vs converging zero.\n"
        f"   - Rail systems: M-LOK T-nut orientation and torque (35 in-lbs metal, 15 in-lbs polymer), Picatinny (MIL-STD-1913), Arca-Swiss precision tripod dovetails.\n"
        f"   - Bipods & slings: Harris, Atlas, MDT Ckye-Pod loading, 2-point adjustable tactical slings (Vickers, Ferro) and anti-rotation QD cup placement.\n\n"
        f"4. LONG RANGE SHOOTING & PRECISION BALLISTICS:\n"
        f"   - Action accurizing: Action truing/blueprinting (facing receiver face, single-point thread recutting, lapping bolt lugs for >85% contact with Dykem).\n"
        f"   - Barrel work: Chamber reaming to minimum SAAMI, 11° precision target crown or 90° recessed step, free-floating barrel check (dollar bill test).\n"
        f"   - Bedding: Aluminum pillar bedding and glass bedding with Devcon 10110 Plastic Steel or Marine-Tex, action screw torque (55–65 in-lbs into pillars).\n"
        f"   - Ballistics & load craft: Cartridge Base to Ogive (CBTO), finding rifling lands with Hornady OAL gauge, tuning bullet jump (0.015\"–0.030\"), barrel twist stabilization (Greenhill / Miller twist formula e.g. 1:7 for 77gr 5.56, 1:8 for 140gr 6.5 Creedmoor, 1:10 for 175gr .308), G1 vs G7 ballistic coefficients, transonic transition, density altitude.\n\n"
        f"5. BACKYARD SETUPS & HOME ARMORER WORKBENCH CRAFT:\n"
        f"   - Home bench anatomy: Heavy rigid bench (4x4 timber legs, 2-3\" solid top), heavy bench vise with soft non-marring jaw caps (nylon, brass, leather), receiver clamshells, barrel vise blocks, reaction rods that engage extension lugs to protect receiver index pins.\n"
        f"   - Hand tools: Hollow-ground parallel gunsmith screwdrivers (NEVER hardware store tapered drivers that slip and ruin screw slots), roll pin punches, roll pin starter punches, brass drift punches, Wheeler FAT wrench inch-pound torque wrench.\n"
        f"   - Backyard zeroing & range setup: Safe backstop design (minimum 8–10 ft dirt berm with 2:1 slope, railroad tie cribbing, sand traps, zero rock fill, verified downrange safety), 25/36/50/100 yard zeroing geometry, bore sighting at 25 yards through the bore or with laser arbor to guarantee paper hit at 100 yards.\n"
        f"   - Practical DIY boundaries: Clearly define what can be hand-stoned, polished, or fitted with Arkansas stones and files vs what strictly requires a lathe, vertical mill, or factory armory.\n\n"
        f"ACTIVE FIREARM DOSSIER: {fname} ({fsub})\n"
        f"KEY WORKSHOP SPECIFICATIONS & TOLERANCES:\n"
        f"{specs_str}\n\n"
        f"TONE & RESPONSE STYLE:\n"
        f"- Speak with the seasoned authority, technical precision, and practical wisdom of a Master Gunsmith.\n"
        f"- Always quote exact torque specs (in-lbs / ft-lbs), clearances, drill/punch sizes, and gauge readings.\n"
        f"- Highlight critical safety warnings with ⚠️ CRITICAL ARMORER NOTICE.\n"
        f"- Structure responses with clean markdown headers (###), bold technical terms, and step-by-step procedures."
    )

def generate_fallback_expert_response(query: str, firearm_data: Dict[str, Any]) -> str:
    """Intelligent rule-based expert answer tailored to active firearm platform when LLM is offline."""
    q = query.lower()
    fid = firearm_data.get("id", "")
    fname = firearm_data.get("name", "Firearm")

    # =========================================================================
    # SPECIALIZED DOMAIN 1: SCOPES, OPTICS, RETICLES & MOUNTING TORQUE
    # =========================================================================
    if any(k in q for k in ["scope", "optic", "ring", "lapping", "torque", "mount", "mrad", "moa", "reticle", "leveling", "cant", "eye relief", "parallax", "ffp", "sfp"]):
        if any(k in q for k in ["torque", "spec", "tighten", "inch-pound", "in-lb", "lbs"]):
            return (
                "### Master Gunsmith: Scope Mounting & Precision Torque Specifications\n\n"
                "* **Base / Picatinny Rail to Receiver:**\n"
                "  * **Torque:** **30 to 35 in-lbs** using T15/T20 Torx fasteners.\n"
                "  * **Preparation:** Degrease receiver tapped holes completely with 99% isopropyl alcohol or acetone. Apply one drop of **Loctite 242 (Blue)** or Vibra-TITE. Bedding the base underside with a thin skim of Loctite or release-agent paste ensures 100% stress-free contact.\n"
                "* **Ring-to-Base Crossbolts (Clamps):**\n"
                "  * **Steel Crossbolts (Weaver / Picatinny):** **45 to 65 in-lbs** (e.g. Badger Ordnance, Nightforce, Hawkins).\n"
                "  * **Aluminum Crossbolts:** **35 to 45 in-lbs** max (e.g. Vortex Precision Matched, Leupold BackCountry).\n"
                "* **Ring Caps (Scope Tube Clamping):**\n"
                "  * **Torque:** **15 to 18 in-lbs** (NEVER exceed 18 in-lbs).\n"
                "  * **⚠️ CRITICAL ARMORER WARNING:** Overtightening ring caps will crush the internal 30mm/34mm erector tube, causing turret binding, parallax freeze, and reticle tracking failures. Always tighten in an alternating X-pattern with even ring gaps on both left and right sides."
            )
        elif any(k in q for k in ["lap", "lapping", "alignment", "bar", "concentric"]):
            return (
                "### Scope Ring Lapping & Coaxial Truing Protocol\n\n"
                "* **When to Lap:** Required on paired two-piece rings mounted on multi-piece receivers where manufacturing tolerances create coaxial misalignment. (One-piece unimounts usually do not require lapping).\n"
                "* **Alignment Inspection:** Mount rings, insert pointed alignment rods, and verify that the opposing sharp tips meet within **0.002\"**.\n"
                "* **Lapping Procedure:**\n"
                "  1. Apply **220-grit silicon carbide lapping compound** evenly across bottom ring saddles.\n"
                "  2. Install cylindrical steel lapping bar with top caps tightened to light sliding friction (~5 in-lbs).\n"
                "  3. Work bar in figure-8 and linear strokes while rotating slightly.\n"
                "  4. Lap until **75% to 80% surface contact** is achieved on both rings. Degrease completely before optic installation."
            )
        elif any(k in q for k in ["level", "leveling", "cant", "plumb", "straight"]):
            return (
                "### Precision Scope Leveling & Optical Alignment\n\n"
                "1. **Level the Action:** Clamp the rifle in a bench vise. Place a precision machinist bubble level across the receiver rails or bolt raceway and level to 0.0°.\n"
                "2. **The Feeler Gauge Flat Method:** If the bottom of your optic's turret housing is precision-ground flat (e.g., Nightforce, Vortex Razor, Kahles, Tangent Theta), slide an automotive feeler gauge stack between the flat bottom of the scope and the flat top of the Picatinny rail until snug. Tighten ring caps evenly.\n"
                "3. **Plumb Bob Verification:** For long-range rifles, hang a high-contrast weighted plumb line at 50–100 yards. Align the vertical reticle hair directly to the plumb string through the bore.\n"
                "4. **Install Anti-Cant Indicator:** Mount an electronic or bubble level to the scope tube while aligned with the plumb line. A 1° cant error at 1,000 yards induces over **5 inches of horizontal dispersion**!"
            )
        elif any(k in q for k in ["moa", "mrad", "mil", "reticle", "ffp", "sfp"]):
            return (
                "### Masterclass: MRAD vs MOA & Focal Plane Selection\n\n"
                "* **MRAD (Mil-Radian):**\n"
                "  * Based on trigonometric radian: 1 Mil = 1/1000th of distance = **10 cm at 100 meters** = **3.6 inches at 100 yards**.\n"
                "  * Standard turret clicks: **0.1 MRAD = 1 cm @ 100m = 0.36\" @ 100 yd**.\n"
                "  * Universal military and PRS standard for intuitive range estimation and DOPE math.\n"
                "* **MOA (Minute of Angle):**\n"
                "  * Based on 1/60th of a degree: True MOA = **1.047 inches at 100 yards** (often rounded to 1.0\" SMOA).\n"
                "  * Standard turret clicks: **1/4 MOA = 0.26\" @ 100 yd**.\n"
                "* **FFP (First Focal Plane) vs SFP (Second Focal Plane):**\n"
                "  * **FFP:** Reticle scales proportionally with magnification. Subtensions and holdovers are **100% accurate at EVERY magnification setting**. Mandatory for long range and tactical field engagements.\n"
                "  * **SFP:** Reticle remains fixed size. Subtensions are ONLY true at one specific magnification (usually maximum power). Ideal for fixed-distance benchrest or close-range hunting."
            )
        else:
            return (
                "### Master Gunsmith Optics & Scope Systems Overview\n\n"
                "* **Base Fasteners:** 30–35 in-lbs with blue Loctite 242 into degreased receiver holes.\n"
                "* **Ring Crossbolts:** 45–65 in-lbs (steel) / 35–45 in-lbs (aluminum).\n"
                "* **Ring Caps:** 15–18 in-lbs in crisscross sequence; maintain equal ring gap on both sides.\n"
                "* **Lapping:** 220-grit compound until 75–80% contact achieved on two-piece mounts.\n"
                "* **Leveling:** Align vertical reticle hair to distant plumb line; install anti-cant bubble."
            )

    # =========================================================================
    # SPECIALIZED DOMAIN 2: LONG RANGE, ACCURIZING, BEDDING & BALLISTICS
    # =========================================================================
    if any(k in q for k in ["long range", "accuriz", "bedding", "pillar", "truing", "blueprinting", "bullet jump", "cbto", "twist rate", "ballistics", "dope", "crown"]):
        if any(k in q for k in ["bedding", "pillar", "glass", "devcon", "epoxy"]):
            return (
                "### Pillar & Glass Bedding Accurizing Masterclass\n\n"
                "* **Aluminum Pillars:** Drill out stock action screw holes with 5/8\" Forstner bit. Cut 6061-T6 aluminum pillars to contour the bottom metal and receiver tang. Pillars isolate the action from wood/fiberglass compression.\n"
                "* **Epoxy Compound:** Use **Devcon 10110 Plastic Steel Putty** or **Marine-Tex Gray**. High compressive strength with near-zero cure shrinkage.\n"
                "* **Release Agent:** Apply 2 coats of pure carnauba paste wax or PVA (polyvinyl alcohol) release agent to ALL metal surfaces, screw threads, and recoil lug sides. Never skip release agent!\n"
                "* **Recoil Lug Taping:** Wrap 2 layers of masking tape on the **front, bottom, and sides** of the recoil lug. Leave ONLY the rear bearing face bare metal. This ensures the lug bears 100% against the epoxy block while releasing freely during future disassembly.\n"
                "* **Action Screw Torque:** Torque screws into cured pillars to **55 to 65 in-lbs** in an aluminum chassis or pillar-bedded stock."
            )
        elif any(k in q for k in ["bullet jump", "cbto", "ogive", "lands", "freebore"]):
            return (
                "### Cartridge Base to Ogive (CBTO) & Bullet Jump Tuning\n\n"
                "* **Measurement Standard:** Never measure bullet seating depth by Cartridge Overall Length (COAL) to the meplat tip (tips vary by 0.010\"). Always measure **CBTO (Cartridge Base to Ogive)** using a comparator insert on a dial caliper.\n"
                "* **Finding the Lands:** Use a Hornady OAL Gauge with a modified threaded case. Gently push the rod until the projectile kisses the rifling lands. Record three consistent measurements.\n"
                "* **Optimal Jump Windows:**\n"
                "  * **Tangent Ogives (e.g. Sierra MatchKing):** 0.015\" to 0.030\" jump into lands.\n"
                "  * **Hybrid Ogives (e.g. Berger Hybrid):** Jump-tolerant, sweet spot typically 0.020\" to 0.050\" off lands.\n"
                "  * **Secant / VLD Ogives:** Sensitive to jump; typically tune in 0.005\" steps starting from 0.010\" off lands.\n"
                "* **⚠️ SAAMI Warning:** Ensure tuned CBTO still fits inside your rifle's internal box magazine (e.g. AICS 2.870\" limit for .308/6.5 Creedmoor)."
            )
        elif any(k in q for k in ["twist", "twist rate", "stabiliz", "greenhill", "grain"]):
            return (
                "### Precision Barrel Twist Rate & Projectile Stabilization\n\n"
                "* **Miller Twist Rule:** Bullet length (not weight) dictates required twist rate. Bullets need a gyroscopic stability factor ($S_g$) between **1.4 and 1.8** to avoid yaw or excessive spin-drift.\n"
                "* **Proven Long-Range Caliber Twists:**\n"
                "  * **5.56x45mm / .223 Rem:** **1:7\"** for 75gr–77gr OTM (Mk 262); **1:8\"** for 69gr–73gr; **1:9\"** for 55gr–62gr.\n"
                "  * **6.5mm Creedmoor / .260 Rem:** **1:8\"** optimal for 140gr–147gr ELD-M / Berger Hybrids.\n"
                "  * **.308 Winchester:** **1:10\"** for 168gr–175gr (M118LR) and up to 200gr; **1:11.25\"** (M24 Palma spec).\n"
                "  * **.300 Win Mag / .300 PRC:** **1:9\" to 1:8.5\"** for 215gr–225gr high-BC projectiles."
            )
        elif any(k in q for k in ["truing", "blueprint", "recut", "action"]):
            return (
                "### Action Blueprinting & Receiver Truing Protocol\n\n"
                "1. **Single-Point Mandrel Setup:** Dial in receiver bolt raceway on an engine lathe within **0.0001\" TIR** using dual 4-jaw spider chucks.\n"
                "2. **Face Receiver Ring:** Take a clean 0.002\" pass square to the raceway centerline.\n"
                "3. **Single-Point Recut Threads:** Clean internal tenon threads (e.g. Remington 700 1-1/16\"-16) to ensure 100% concentricity.\n"
                "4. **Lap Bolt Locking Lugs:** Apply 400-grit clover compound to bolt lug rear surfaces. Cycle bolt in receiver under light rearward spring pressure until **≥ 85% full contact** is established on both upper and lower lugs (verified with Dykem)."
            )
        else:
            return (
                "### Master Long Range & Rifle Accurizing Summary\n\n"
                "* **Bedding:** Aluminum pillars + Devcon 10110; 55–65 in-lbs action screw torque; relieve front/sides of recoil lug.\n"
                "* **Barrel Crown:** Recessed 11° target crown concentric to bore axis; zero burrs.\n"
                "* **Seating Depth:** Measure CBTO, not COAL; test bullet jumps between 0.015\" and 0.040\".\n"
                "* **Twist Stabilization:** Match barrel twist to projectile length ($S_g >= 1.5$)."
            )

    # =========================================================================
    # SPECIALIZED DOMAIN 3: SUPPRESSORS, ACCESSORIES & TACTICAL HARDWARE
    # =========================================================================
    if any(k in q for k in ["suppressor", "silencer", "muzzle brake", "concentricity", "alignment rod", "m-lok", "mlok", "bipod", "weapon light", "laser", "ir designator", "peq", "sling"]):
        if any(k in q for k in ["concentric", "alignment", "rod", "baffle", "strike"]):
            return (
                "### Suppressor Concentricity & Baffle Strike Prevention\n\n"
                "* **The Golden Rule:** NEVER fire a newly mounted suppressor without first verifying bore-to-can concentricity with a **precision ground alignment rod** (Geissele, Huxwrx, or CNC tool steel rod).\n"
                "* **Inspection Steps:**\n"
                "  1. Mount suppressor and torque muzzle device or direct thread adapter to **25 to 30 ft-lbs**.\n"
                "  2. Slide caliber-specific alignment rod down the bore from muzzle end.\n"
                "  3. Check rod tip position at the suppressor front endcap. The rod must sit **dead center** in the aperture with equal circumferential clearance.\n"
                "  4. If the rod touches or leans near the endcap edge: **DO NOT FIRE**. The barrel shoulder may lack squareness, or a crush washer was improperly used. Always use precision shims for muzzle devices on suppressor hosts—**NEVER use crush washers**!"
            )
        elif any(k in q for k in ["gas", "blowback", "tuning", "buffer", "charging handle"]):
            return (
                "### Suppressor Gas Mitigation & Recoil Tuning\n\n"
                "* **Gas-in-the-Face Remedies:** Suppressors increase backpressure and bolt carrier velocity by 25–40%.\n"
                "* **Three-Tier Tuning Protocol:**\n"
                "  1. **Adjustable Gas Block (AGB):** Install a restrictive or bleed-off AGB (e.g. Superlative Arms). Tune until bolt reliably locks back on an empty magazine with weak training ammo, then add 1 click.\n"
                "  2. **Buffer Mass:** Upgrade buffer from standard Carbine (3.0 oz) to **H2 (4.6 oz)** or **H3 (5.4 oz)** to delay carrier unlock timing and drop chamber residual pressure.\n"
                "  3. **Gas Busting Charging Handle:** Install a silicone-sealed charging handle (e.g. Radian Raptor-SD, Geissele Airborne, or PRI Gas Buster) to deflect port gases away from the shooter's eyes."
            )
        elif any(k in q for k in ["m-lok", "mlok", "rail", "t-nut"]):
            return (
                "### M-LOK Handguard Accessory Mounting & Torque\n\n"
                "* **T-Nut Geometry:** The M-LOK T-nut must be aligned parallel with the accessory slot, inserted through, and rotated exactly **90° perpendicular** across the slot lips as the screw tightens.\n"
                "* **Torque Specifications:**\n"
                "  * **Into Metal Handguard:** **35 in-lbs** maximum.\n"
                "  * **Into Polymer Handguard / Stock:** **15 in-lbs** maximum (over-torquing will strip polymer shoulders).\n"
                "* **Thread Prep:** Apply blue threadlocker (Loctite 242) to prevent vibration backing under sustained firing."
            )
        else:
            return (
                "### Masterclass: Tactical Accessories & Hardware Installation\n\n"
                "* **Suppressor Concentricity:** Verify with alignment rod before live fire; use precision shims, NEVER crush washers.\n"
                "* **Gas Mitigation:** AGB + H2/H3 buffer + gas-busting charging handle.\n"
                "* **M-LOK Torque:** 35 in-lbs (metal) / 15 in-lbs (polymer) with 90° rotated T-nuts.\n"
                "* **Weapon Lights / Lasers:** Torque 1913 crossbolts to 30 in-lbs; co-align slaved IR laser with visible laser at 50/100 yd."
            )

    # =========================================================================
    # SPECIALIZED DOMAIN 4: BACKYARD SETUPS, HOME WORKBENCH & RANGE CRAFT
    # =========================================================================
    if any(k in q for k in ["backyard", "home bench", "bench setup", "vise", "soft jaws", "backstop", "berm", "bore sight", "boresight", "zeroing", "punch set", "tools", "screwdriver"]):
        if any(k in q for k in ["backstop", "berm", "sandbag", "safety", "range", "yard"]):
            return (
                "### Safe Backyard Testing & Range Backstop Architecture\n\n"
                "* **Berm Construction Standards (US Military Field Range Criteria):**\n"
                "  * **Height & Depth:** Minimum **8 to 10 feet tall** with a **2:1 slope angle** and minimum 4-foot top crest thickness.\n"
                "  * **Material:** Sifted earth, clean sand, or clay free of rocks, large gravel, or debris to eliminate ricochet hazard.\n"
                "  * **Impact Box / Sand Trap:** Build a wooden cribbing box from treated 6x6 timbers or railroad ties packed with 3 feet of dry sand. Sand absorbs handgun, rifle, and shotgun impacts with zero splash-back.\n"
                "* **Downrange Safety Margin:** Confirm a zero-occupancy safety fan downrange. Even a .22 LR travels up to 1.5 miles at high angles!\n"
                "* **Sound Containment:** Line shooting bench sidewalls with acoustic baffling or dense horse stall rubber mats to reduce muzzle blast propagation to neighbors."
            )
        elif any(k in q for k in ["bench", "vise", "tool", "jaw", "reaction rod"]):
            return (
                "### The Master Armorer Home Workbench Setup\n\n"
                "* **Workbench Construction:** Rigid 4x4 timber legs with double-layered 3/4\" Baltic birch or solid 2\" butcher block top. Bolt the bench to wall studs or floor to prevent flex during heavy barrel torquing (up to 80 ft-lbs).\n"
                "* **Bench Vise & Non-Marring Jaws:** Mount a 5\" to 6\" heavy ductile iron vise (Wilton, Yost). Never clamp gun parts in bare steel jaws! Equip with:\n"
                "  1. Polyurethane multi-groove soft jaws (holds barrels and round bolts without scratching).\n"
                "  2. Brass / aluminum jaw caps.\n"
                "  3. Thick saddle-leather jaw liners for delicate blued surfaces.\n"
                "* **Essential Armorer Tool Arsenal:**\n"
                "  * **Screwdrivers:** Hollow-ground parallel bits only (Brownells Magna-Tip). Hardware store wedge drivers will slip and destroy collector screw slots.\n"
                "  * **Punches:** Hardened roll pin punches with hemispherical guide nits, roll pin starter punches, and brass drift punches.\n"
                "  * **Torque Wrenches:** Wheeler FAT Wrench (10–65 in-lbs) + 1/2\" drive clicker torque wrench (20–150 ft-lbs).\n"
                "  * **AR Barrel Work:** Always use a spline-engaging **Reaction Rod** (Geissele / Midwest Industries) that locks into barrel extension lugs, NOT an upper clamshell that can twist and shear the receiver indexing pin!"
            )
        elif any(k in q for k in ["bore sight", "boresight", "zero", "zeroing", "25"]):
            return (
                "### Backyard Bore Sighting & 25-to-100 Yard Zeroing Method\n\n"
                "* **Visual Bore Sight (Bolt Actions & AR Platforms):**\n"
                "  1. Secure weapon rock-solid in a bench rest or sandbag rest.\n"
                "  2. Remove bolt (or separate AR upper and remove BCG).\n"
                "  3. Look through the bore from the breech at a high-contrast target 25 yards away (e.g. a 2\" orange dot or building corner).\n"
                "  4. Without moving the rifle, look through the optic and adjust windage/elevation turrets until crosshairs sit directly on the target center.\n"
                "* **25-Yard Trajectory Math:**\n"
                "  * **5.56 NATO / AR-15 (2.6\" Sight Height):** At 25 yards, point of impact should be **1.2 to 1.5 inches LOW** to achieve a combat zero at 50/200 yards or 36/300 yards.\n"
                "  * **.308 Win / 6.5 CM (1.5\" Sight Height):** At 25 yards, point of impact should be **0.5 inches LOW** for a direct 100-yard center zero.\n"
                "* This two-minute procedure guarantees your first shot is on paper at 100 yards without burning costly match ammunition!"
            )
        else:
            return (
                "### Master Home Armorer Workbench & Backyard Range Summary\n\n"
                "* **Bench:** Rigid solid timber bench with 5\"–6\" vise and non-marring soft jaws (polyurethane/brass).\n"
                "* **Tools:** Hollow-ground gunsmith screwdrivers; roll pin starters; Reaction Rod; in-lb torque wrench.\n"
                "* **Bore Sighting:** Visual bore alignment at 25 yards guarantees first-shot paper hits at 100 yards.\n"
                "* **Backyard Backstop:** Minimum 8–10 ft sifted dirt berm with 3-foot deep sand trap box."
            )
    
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
        if any(k in q for k in ["barrel shield", "shield", "radiator", "casing", "mouthpiece", "barrel group", "cooling"]):
            return (
                "### Master Armorer: Lewis Automatic Machine Gun — Barrel Group & Radiator Casing Stripping Protocol\n\n"
                "*⚠️ **Armorer Warning:** Disassembly of the aluminum radiator and barrel group should only be performed for deep armory overhaul, barrel replacement, or clearing heavy baked carbon from the gas cylinder.*\n\n"
                "**Step-by-Step Stripping Sequence:**\n"
                "1. **Clamp Ring (Part #3-13):**\n"
                "   * Using the flat screwdriver bit on the armorer barrel mouthpiece spanner, unscrew the clamp ring screw (Part #3-15).\n"
                "   * Slide the clamp ring—which carries the front sight (Part #3-14) and positioning screw—forward off the radiator casing.\n\n"
                "2. **Radiator Casing Front (Barrel Shield / Outer Shroud, Part #3-4):**\n"
                "   * Grasp the cylindrical aluminum radiator casing front and pull it straight off forward away from the longitudinal cooling fins.\n\n"
                "3. **Radiator Casing Rear (Part #3-20A):**\n"
                "   * Withdraw the radiator casing rear (permanently assembled to the radiator casing rear locking piece) straight off to the rear towards the receiver.\n\n"
                "4. **Gas Cylinder (Part #3-19):**\n"
                "   * Unscrew and dismount the gas cylinder. *Armorer Field Trick:* Use the piston rack (Part #8-1) as your wrench—the cross-section of the rack is purpose-machined to match the gas cylinder wrench flats.\n\n"
                "5. **Gas Chamber Gland (Part #3-7) & Barrel Mouthpiece (Part #3-2) — ⚠️ LEFT-HANDED THREADS:**\n"
                "   * Fit the armorer combination spanner to the barrel mouthpiece (Part #3-2) and gas chamber gland (Part #3-7).\n"
                "   * ⚠️ **MANDATORY WARNING:** Both components are machined with **LEFT-HANDED (REVERSE) THREADS**. Turn clockwise to loosen; turning counterclockwise will strip or shear the threads.\n\n"
                "6. **Barrel Dismounting (Part #3-1) & Gas Chamber (Part #3-6):**\n"
                "   * Keep the barrel mouthpiece threaded on approximately 3 threads to protect the crown.\n"
                "   * Strike the mouthpiece lightly with a brass or lead mallet to drive the barrel rearward, breaking the taper fit inside the aluminum radiator (Part #3-3).\n"
                "   * Unscrew the barrel completely; the gas chamber (Part #3-6) will drop free from its recess inside the radiator.\n\n"
                "*Reference Manual:* [1917 Savage Arms Lewis Machine Gun Hand-Book (pp. 13–15, Plate III)](/api/manuals/Lewis_Automatic_Machine_Gun/1917_Savage_Arms_Lewis_Machine_Gun_Handbook.pdf#page=13)"
            )
        elif any(k in q for k in ["tension", "spring", "clock", "pinion", "mainspring", "lbs"]):
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

    # Retrieve grounded RAG technical manual citations
    rag_prompt_block, rag_sources = rag_engine.get_grounding_prompt(user_query, req.firearm_id, top_k=3)
    
    # Assemble comprehensive Master Armorer System Directive
    base_master_prompt = build_master_armorer_system_prompt(firearm_data, specs_str)
    system_prompt = f"{base_master_prompt}\n\n{rag_prompt_block}" if rag_prompt_block else base_master_prompt

    # Dynamic document sources including deep manual RAG citations
    doc_sources = []
    if rag_sources:
        for s in rag_sources:
            doc_sources.append({
                "title": s["title"],
                "url": s["url"],
                "type": "rag_citation",
                "page": s["page"]
            })
    for m in firearm_data.get("manuals", [])[:2]:
        doc_sources.append({
            "title": m["title"],
            "url": f"/api/manuals/{req.firearm_id}/{m['filename']}",
            "type": "manual"
        })
    if firearm_data.get("videos"):
        doc_sources.append({
            "title": firearm_data["videos"][0]["title"],
            "url": f"https://www.youtube.com/watch?v={firearm_data['videos'][0]['id']}",
            "type": "video"
        })
    if not doc_sources:
        doc_sources = [{"title": firearm_data.get("name", "Technical Dossier"), "url": "#", "type": "dossier"}]

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
            async with httpx.AsyncClient(timeout=httpx.Timeout(45.0, connect=1.5)) as client:
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
            async with httpx.AsyncClient(timeout=httpx.Timeout(20.0, connect=1.5)) as client:
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
    if rag_sources:
        fallback_reply += "\n\n### 📖 Grounded Technical Manual References:\n"
        for s in rag_sources:
            fallback_reply += f"* **[{s['title']}]({s['url']})**\n"

    return JSONResponse({
        "reply": fallback_reply,
        "backend_used": "Built-in Armorer Knowledge Engine (Offline)",
        "sources": doc_sources
    })

@app.get("/api/search")
async def search_repository(q: str = Query(..., min_length=2), firearm_id: str = "Lewis_Automatic_Machine_Gun"):
    query = q.lower().strip()
    raw_tokens = [t for t in query.replace("-", " ").replace("/", " ").replace(".", "").split() if len(t) > 0]
    
    STOP_WORDS = {"my", "the", "a", "an", "is", "in", "on", "for", "to", "of", "with", "and", "needs", "need", "want", "how", "what", "where", "i", "can", "please", "do", "get", "take", "off", "deep", "does", "it", "any", "some", "at", "by", "from", "as", "about"}
    content_tokens = [t for t in raw_tokens if t not in STOP_WORDS]
    tokens_to_match = content_tokens if content_tokens else raw_tokens

    results = []
    platform_matches = []

    # 1. Search Across All Firearms / Manufacturers / Models / Key Tasks with Token Scoring
    for fid, meta in FIREARMS_METADATA.items():
        fname = meta.get("name", "").lower()
        mfg = meta.get("manufacturer", "").lower()
        sub = meta.get("subtitle", "").lower()
        models = [m.lower() for m in meta.get("models", [])]
        calibers = [c.lower() for c in meta.get("calibers", [])]
        key_tasks = [t.lower() for t in meta.get("key_tasks", [])]
        specs_blob = " ".join(str(v).lower() for v in meta.get("specs", {}).values())

        searchable_blob = f"{fname} {mfg} {sub} {' '.join(models)} {' '.join(calibers)} {' '.join(key_tasks)} {specs_blob}".replace("-", " ").replace("/", " ").replace(".", "")

        score = 0
        if query in fname or query in searchable_blob:
            score += 120
        
        # Check token coverage against content words
        matched_tokens = [t for t in tokens_to_match if t in searchable_blob]
        if tokens_to_match and len(matched_tokens) == len(tokens_to_match):
            score += 100 + len(matched_tokens) * 10
        elif tokens_to_match and len(matched_tokens) >= max(1, len(tokens_to_match) - 1):
            score += 60 + len(matched_tokens) * 8

        # Extra weight if specific model token matches model list (e.g. "17" for Glock 17)
        has_model_match = False
        for m in models:
            m_clean = m.replace("-", " ").split()
            if any(t in m_clean for t in tokens_to_match if len(t) >= 2 or t.isdigit()):
                score += 80
                has_model_match = True
                break

        # Platform + Model compound match (e.g. "glock" AND "17")
        if has_model_match and any(t in fname or t in mfg for t in tokens_to_match):
            score += 150

        if score > 0:
            platform_matches.append({
                "score": score,
                "item": {
                    "type": "firearm",
                    "title": f"🔫 Switch Bench to: {meta.get('name')}",
                    "subtitle": f"{meta.get('manufacturer')} • {meta.get('subtitle') or meta.get('category')}",
                    "action": "switch_firearm",
                    "target": fid
                }
            })

    platform_matches.sort(key=lambda x: x["score"], reverse=True)
    results.extend([pm["item"] for pm in platform_matches])

    # 2. Search active firearm technical data
    data = load_firearm_data(firearm_id)

    # Search manuals
    for m in data["manuals"]:
        m_text = f"{m['title']} {m['filename']}".lower()
        if any(t in m_text for t in tokens_to_match) or query in m_text:
            results.append({
                "type": "manual",
                "title": m["title"],
                "subtitle": f"PDF Manual ({m['size_mb']} MB)",
                "action": "open_manual",
                "target": m["filename"]
            })

    # Search videos
    for v in data["videos"]:
        v_text = f"{v['title']} {v.get('summary', '')} {v.get('category', '')}".lower()
        if any(t in v_text for t in tokens_to_match) or query in v_text:
            results.append({
                "type": "video",
                "title": v["title"],
                "subtitle": f"{v['creator']} • {v['category']}",
                "action": "open_video",
                "target": v["id"]
            })

    # Search stoppages
    for s in data.get("stoppages", []):
        s_text = f"{s.get('position', '')} {s.get('short_desc', '')} {s.get('root_causes', '')} {s.get('remedy', '')}".lower()
        if any(t in s_text for t in tokens_to_match) or query in s_text:
            results.append({
                "type": "stoppage",
                "title": f"Stoppage: {s.get('position', '')}",
                "subtitle": s.get('short_desc', ''),
                "action": "open_stoppage",
                "target": s.get('position', '')
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

@app.get("/api/rag/search")
async def rag_search_endpoint(q: str = Query(..., min_length=2), firearm_id: Optional[str] = None, limit: int = 5):
    """Deep search across all 80 indexed armorer manuals and technical dossiers."""
    results = rag_engine.search(q, firearm_id=firearm_id, top_k=limit)
    return {"query": q, "firearm_id": firearm_id, "results": results}

@app.get("/api/video/samples")
async def get_video_samples():
    """Returns available malfunction test cases for visual diagnostic simulation."""
    return {"samples": list(SAMPLE_CASES.values())}

@app.post("/api/video/analyze")
async def analyze_video_endpoint(
    request: Request,
    file: Optional[UploadFile] = File(None),
    firearm_id: Optional[str] = Form(None),
    sample_id: Optional[str] = Form(None),
    user_notes: Optional[str] = Form(None)
):
    target_fid = firearm_id
    target_sample = sample_id
    target_notes = user_notes or ""

    # Check if request is JSON body
    content_type = request.headers.get("content-type", "")
    if "application/json" in content_type:
        try:
            body = await request.json()
            target_fid = body.get("firearm_id") or target_fid
            target_sample = body.get("sample_id") or target_sample
            target_notes = body.get("user_notes") or target_notes
        except Exception:
            pass

    target_fid = target_fid or "AR15_M4_Platform"
    cfg = get_saved_config()
    video_path = None

    if file and file.filename:
        ext = Path(file.filename).suffix or ".mp4"
        video_path = UPLOAD_DIR / f"upload_{os.urandom(6).hex()}{ext}"
        contents = await file.read()
        with open(video_path, "wb") as f:
            f.write(contents)

    try:
        report = await analyze_malfunction_video(
            firearm_id=target_fid,
            video_path=video_path,
            sample_id=target_sample,
            user_notes=target_notes,
            cfg=cfg
        )
        return {"status": "ok", "report": report}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Video analysis error: {str(e)}")
    finally:
        if video_path and video_path.exists():
            try:
                video_path.unlink()
            except Exception:
                pass

@app.get("/api/parts/{firearm_id}")
async def get_parts(firearm_id: str):
    if firearm_id in PARTS_DATABASE:
        return {"firearm_id": firearm_id, "parts": PARTS_DATABASE[firearm_id]}
    for cat_name, parts in DEFAULT_CATEGORY_PARTS.items():
        return {"firearm_id": firearm_id, "category": cat_name, "parts": parts}
    return {"firearm_id": firearm_id, "parts": []}

def enrich_part_with_rag(firearm_id: str, part: Dict[str, Any]) -> Dict[str, Any]:
    """Cross-references identified component with firearm technical dossier, stoppages, and armorer specs."""
    meta = FIREARMS_METADATA.get(firearm_id, {})
    part_text = (part.get("name", "") + " " + part.get("assembly", "")).lower()

    # RAG search across platform stoppages
    stoppages = meta.get("stoppages", [])
    matching_stoppages = []
    for s in stoppages:
        combined = (s.get("position", "") + " " + s.get("short_desc", "") + " " + s.get("root_causes", "") + " " + s.get("remedy", "")).lower()
        words = [w for w in re.split(r"\W+", part_text) if len(w) > 3]
        if any(w in combined for w in words):
            matching_stoppages.append(f"{s.get('position', '')}: {s.get('short_desc', '')} — {s.get('remedy', '')}")

    if matching_stoppages and not part.get("malfunctions"):
        part["malfunctions"] = " • ".join(matching_stoppages[:2])
    elif matching_stoppages:
        # Prepend authentic factory stoppage note
        part["malfunctions"] = f"[{matching_stoppages[0]}] " + part["malfunctions"]

    # RAG search across platform specs
    specs = meta.get("specs", {})
    matching_specs = []
    for k, v in specs.items():
        if any(w in k.lower() or w in str(v).lower() for w in re.split(r"\W+", part_text) if len(w) > 3):
            matching_specs.append(f"{k.replace('_', ' ').title()}: {v}")

    if matching_specs:
        part["tolerances"] = part.get("tolerances", "") + " | Spec: " + "; ".join(matching_specs[:2])

    # Deep RAG: Search firearm's PDF manuals for primary source citations using anatomical scoring
    try:
        import fitz
        manuals_dir = BASE_DIR / firearm_id / "manuals"
        if manuals_dir.exists():
            pname = part.get("name", "").lower()
            if any(w in pname for w in ["stock", "butt", "buffer"]):
                targets = ["stock", "butt", "buffer", "tang", "dovetail"]
            elif any(w in pname for w in ["barrel", "bore", "gas", "shroud", "muzzle", "radiator"]):
                targets = ["barrel", "gas", "piston", "bore", "cylinder", "radiator", "port"]
            elif any(w in pname for w in ["trigger", "sear", "disconnect", "grip", "guard", "hammer"]):
                targets = ["trigger", "sear", "guard", "disconnector", "pull", "hammer", "sear pin"]
            elif any(w in pname for w in ["magazine", "feed", "pan", "drum", "clip"]):
                targets = ["magazine", "clip", "feed", "pan", "follower", "feedway"]
            elif any(w in pname for w in ["cylinder", "crane", "ratchet"]):
                targets = ["cylinder", "crane", "ratchet", "yoke", "endshake"]
            else:
                targets = ["bolt", "receiver", "breech", "action", "slide", "striker", "firing pin"]

            best_match = None
            best_score = 0
            for pdf_file in sorted(manuals_dir.glob("*.pdf")):
                try:
                    doc = fitz.open(pdf_file)
                    for page_idx in range(len(doc)):
                        p_text = doc[page_idx].get_text()
                        p_lower = p_text.lower()
                        score = sum(p_lower.count(t) for t in targets)
                        if score > best_score:
                            best_score = score
                            lines = [ln.strip() for ln in p_text.splitlines() if ln.strip()]
                            snippet = " ".join(lines[:4])[:260]
                            best_match = {
                                "manual_filename": pdf_file.name,
                                "manual_title": pdf_file.stem.replace("_", " "),
                                "page": page_idx + 1,
                                "snippet": snippet,
                                "url": f"/api/manuals/{firearm_id}/{pdf_file.name}#page={page_idx + 1}"
                            }
                except Exception:
                    continue
            if best_match and best_score > 0:
                part["manual_citation"] = best_match
    except Exception:
        pass

    part["rag_grounded"] = True
    return part

async def analyze_part_with_vision(
    firearm_id: str,
    image_crop_b64: str,
    plate_id: Optional[str] = None
) -> Optional[Dict[str, Any]]:
    """Invokes Multimodal Vision AI (Gemini or Ollama Vision) on cropped schematic component."""
    cfg = get_saved_config()
    gemini_key = cfg.get("api_key") or os.environ.get("GEMINI_API_KEY", "")

    if "," in image_crop_b64:
        header, b64_data = image_crop_b64.split(",", 1)
        mime = "image/png" if "png" in header else "image/jpeg"
    else:
        b64_data = image_crop_b64
        mime = "image/png"

    firearm_meta = FIREARMS_METADATA.get(firearm_id, {})
    firearm_name = firearm_meta.get("name", firearm_id.replace("_", " "))

    vision_prompt = (
        f"You are a master gunsmith armorer analyzing an exploded schematic or technical diagram crop from the {firearm_name}.\n"
        f"The gunsmith has circled a specific component or subassembly in this technical diagram.\n"
        f"Plate Context: {plate_id or 'Technical schematic plate'}\n\n"
        f"Task:\n"
        f"1. Visually identify what specific firearm part, subassembly, or mechanism is circled (e.g. 47-Round Pan Magazine, Firing Pin Striker, Breech Bolt, Operating Rod, Trigger Sear, Extractor, Barrel Jacket, etc.).\n"
        f"2. Read any callout numbers or labels if legible in the crop.\n"
        f"3. Return accurate armorer specifications and tolerances for this component on the {firearm_name}.\n\n"
        f"Return ONLY a valid JSON object with these keys:\n"
        f"{{\n"
        f'  "name": "Component Name",\n'
        f'  "callout_num": "Part # / Callout",\n'
        f'  "oem_number": "OEM or Military Reference #",\n'
        f'  "assembly": "Subassembly Group",\n'
        f'  "tolerances": "Critical gunsmith tolerances, clearances, or spring tension",\n'
        f'  "malfunctions": "Common stoppages or wear failure modes associated with this part",\n'
        f'  "maintenance": "Shop servicing, cleaning, stoning, and lubrication protocol"\n'
        f"}}"
    )

    # 1. Try Google Gemini Vision
    if gemini_key:
        mod = cfg.get("model") if cfg.get("model") and "gemini" in cfg.get("model") else "gemini-1.5-flash"
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{mod}:generateContent?key={gemini_key}"
        payload = {
            "contents": [
                {
                    "parts": [
                        {"text": vision_prompt},
                        {
                            "inline_data": {
                                "mime_type": mime,
                                "data": b64_data
                            }
                        }
                    ]
                }
            ],
            "generationConfig": {
                "temperature": 0.1,
                "response_mime_type": "application/json"
            }
        }
        try:
            async with httpx.AsyncClient(timeout=10.0) as client:
                res = await client.post(url, json=payload)
                if res.status_code == 200:
                    data = res.json()
                    candidates = data.get("candidates", [])
                    if candidates:
                        raw_text = candidates[0].get("content", {}).get("parts", [{}])[0].get("text", "")
                        parsed = json.loads(raw_text)
                        parsed["identification_method"] = f"Multimodal Vision AI (Gemini {mod})"
                        return parsed
        except Exception as e:
            print("Gemini Vision identification error:", e)

    # 2. Try Local Ollama Vision (if Ollama has a vision model)
    ollama_ep = cfg.get("endpoint") if cfg.get("backend") == "ollama" and cfg.get("endpoint") else "http://127.0.0.1:11434"
    try:
        async with httpx.AsyncClient(timeout=2.0) as client:
            tags_res = await client.get(f"{ollama_ep.rstrip('/')}/api/tags")
            if tags_res.status_code == 200:
                models = [m["name"] for m in tags_res.json().get("models", [])]
                vision_models = [m for m in models if any(vm in m.lower() for vm in ["vision", "llava", "minicpm", "qwen2-vl", "qwen2.5-vl", "bakllava"])]
                if vision_models:
                    def rank_vision_model(name: str) -> int:
                        nl = name.lower()
                        if "qwen2.5-vl" in nl:
                            return 0
                        if "qwen2-vl" in nl:
                            return 1
                        if "llama3.2-vision" in nl:
                            return 2
                        if "minicpm" in nl:
                            return 3
                        if "vision" in nl:
                            return 4
                        if "llava" in nl:
                            return 5
                        return 10

                    vision_models.sort(key=rank_vision_model)
                    target_model = vision_models[0]
                    ollama_payload = {
                        "model": target_model,
                        "messages": [
                            {
                                "role": "user",
                                "content": vision_prompt,
                                "images": [b64_data]
                            }
                        ],
                        "stream": False,
                        "format": "json"
                    }
                    chat_res = await client.post(f"{ollama_ep.rstrip('/')}/api/chat", json=ollama_payload, timeout=25.0)
                    if chat_res.status_code == 200:
                        content = chat_res.json().get("message", {}).get("content", "")
                        parsed = json.loads(content)
                        parsed["identification_method"] = f"Local Multimodal Vision AI (Ollama {target_model})"
                        parsed["is_fallback"] = False
                        return parsed
    except Exception as e:
        print("Ollama Vision error:", e)

    return None

@app.post("/api/parts/identify")
async def identify_part(req: IdentifyPartRequest):
    # 1. Attempt Multimodal Vision AI analysis if image crop is provided
    if req.image_crop and len(req.image_crop) > 100:
        vision_result = await analyze_part_with_vision(
            firearm_id=req.firearm_id,
            image_crop_b64=req.image_crop,
            plate_id=req.plate_id
        )
        if vision_result and vision_result.get("name"):
            enriched = enrich_part_with_rag(req.firearm_id, vision_result)
            return {
                "status": "ok",
                "primary": enriched,
                "confidence": 0.96,
                "method": enriched.get("identification_method", "Multimodal Vision AI"),
                "is_fallback": False,
                "alternates": []
            }

    # 2. Coordinate-based schematic catalog lookup fallback
    result = find_part_by_coordinates(
        firearm_id=req.firearm_id,
        norm_x=req.norm_x,
        norm_y=req.norm_y,
        norm_r=req.norm_r or 0.08
    )
    if not result or not result.get("primary"):
        raise HTTPException(status_code=404, detail="No matching component found")

    enriched = enrich_part_with_rag(req.firearm_id, result["primary"])
    enriched["identification_method"] = "Schematic Coordinate Fallback (Vision Model Offline)"
    enriched["is_fallback"] = True
    return {
        "status": "ok",
        "primary": enriched,
        "distance": result.get("distance", 0.0),
        "method": "Schematic Coordinate Fallback (Vision Model Offline)",
        "is_fallback": True,
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
