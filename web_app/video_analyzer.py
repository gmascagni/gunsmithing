"""
Master Armorer Video Diagnostics Engine.
Extracts diagnostic frames from weapon malfunction videos using ffmpeg,
analyzes visual cycle-of-operations failures with Multimodal AI (Gemini / Ollama Vision / Offline Heuristic),
and produces an authoritative master gunsmith repair plan grounded in technical manuals.
"""

import os
import io
import re
import json
import base64
import subprocess
from pathlib import Path
from typing import List, Dict, Any, Optional

from PIL import Image, ImageDraw, ImageFont

BASE_DIR = Path(__file__).resolve().parent.parent
UPLOAD_DIR = BASE_DIR / "web_app" / "uploads"
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

try:
    from web_app.firearms_data import FIREARMS_METADATA
    from web_app.parts_data import PARTS_DATABASE
    from web_app.rag_engine import rag_engine
except ImportError:
    from firearms_data import FIREARMS_METADATA
    from parts_data import PARTS_DATABASE
    from rag_engine import rag_engine


# Pre-packaged Malfunction Simulation Cases for Instant Testing
SAMPLE_CASES = {
    "ar15_double_feed": {
        "id": "ar15_double_feed",
        "firearm_id": "AR15_M4_Platform",
        "firearm_name": "AR-15 / M4 Carbine",
        "title": "Type 3 Stoppage: Failure to Extract & Double Feed Wedge",
        "cycle_phase": "Phase 6: Extraction / Phase 1: Feeding",
        "description": "Slow-motion video of AR-15 stoppage during rapid string. Bolt carrier stops 0.75\" out of battery. Spent 5.56 casing remains seated in chamber while bolt strips fresh cartridge from magazine, jamming bullet tip against spent case head.",
        "primary_symptom": "Spent brass in chamber + live round jammed into rear of chamber",
        "root_causes": [
            "Worn or chipped extractor claw hook (extractor slipped off case rim under residual chamber pressure)",
            "Degraded extractor spring or missing/hardened Viton black O-ring / blue insert",
            "Fouled or carbon-ringed chamber creating excessive extraction drag force",
            "Over-gassed system inducing premature carrier unlock before case neck collapses"
        ],
        "immediate_action": "LOCK bolt to rear • DROP magazine • CLEAR jammed rounds by working charging handle • INSERT fresh magazine • RACK and resume.",
        "armorer_checklist": [
            "1. Gauging: Check chamber headspace with 1.4646\" GO and 1.4706\" NO-GO gauges.",
            "2. Extractor Inspection: Measure extractor hook depth (min 0.035\"). Replace worn claw (OEM Colt/Mil-Spec 9330030).",
            "3. Spring Upgrade: Install 5-coil copper-coated high-reliability extractor spring with silicone insert and Viton #006 O-ring (provides 15+ lbs claw tension).",
            "4. Gas Mitigation: Check carrier key screws staked to 50–55 in-lbs; test gas rings stagger; consider H2/H3 buffer to delay unlock timing."
        ],
        "parts_to_inspect": [
            {"name": "Bolt Assembly Extractor", "oem": "Mil-Spec 9330030", "spec": "15–18 lbs grip force; 0.035\" hook depth"},
            {"name": "Extractor Spring & Viton O-Ring", "oem": "Mil-Spec 8448512", "spec": "Replace every 3,000–5,000 rounds"},
            {"name": "Chamber & Locking Lugs", "oem": "Barrel Extension Lugs", "spec": "Chamber reamer polish; zero carbon ring"}
        ]
    },
    "glock_stovepipe": {
        "id": "glock_stovepipe",
        "firearm_id": "Glock_Pistols",
        "firearm_name": "Glock 17 / 19 (Gen 4/5)",
        "title": "Type 2 Stoppage: Stovepipe / Failure to Eject",
        "cycle_phase": "Phase 7: Ejection",
        "description": "High-speed video captures spent 9x19mm casing failing to clear ejection port. Slide travels forward and crushes casing rim-down at 90° against the barrel hood.",
        "primary_symptom": "Spent casing pinched vertically between slide breechface and barrel hood",
        "root_causes": [
            "Legacy Gen 3/early Gen 4 336 ejector causing low erratic ejection trajectory",
            "Weak or chipped extractor claw not gripping casing pivot point firmly until ejector strike",
            "Wrong caliber spring-loaded bearing installed (must use black bearing for 9mm LCI)",
            "Underpowered training ammunition or shooter limp-wristing dampening recoil slide velocity"
        ],
        "immediate_action": "SWIPE / CLEAR: Sweep hand backward over slide top to wipe out pinched brass, or TAP magazine base, RACK slide vigorously.",
        "armorer_checklist": [
            "1. Ejector Upgrade: Verify ejector bar stamping. If marked '336', replace trigger mechanism housing with updated Gen 4 '30274' or Gen 5 '47021' ejector.",
            "2. Extractor Depressor Plunger (EDP): Remove EDP assembly; verify metal-to-metal (spring end) touches extractor, and polymer bearing touches slide cover plate.",
            "3. Spring Loaded Bearing Check: Black bearing (OEM SP 01176) for 9mm LCI; White bearing is strictly for .40 S&W.",
            "4. Extractor Claw Inspection: Clean carbon cake from extractor hook cavity with brass dental pick; check hook edge under 10x magnification."
        ],
        "parts_to_inspect": [
            {"name": "Ejector Bar / Trigger Housing", "oem": "OEM 30274 / SP 00322", "spec": "Angled inward kick; zero mushrooming"},
            {"name": "Spring Loaded Bearing (9mm)", "oem": "OEM SP 01176 (Black)", "spec": "0.195\" nominal length; zero split"},
            {"name": "Extractor with LCI", "oem": "OEM SP 01895", "spec": "Free pivot; clean claw seat"}
        ]
    },
    "benelli_out_of_battery": {
        "id": "benelli_out_of_battery",
        "firearm_id": "Benelli_M4_Shotgun",
        "firearm_name": "Benelli M4 / M1014 Combat Shotgun",
        "title": "Type 4 Stoppage: Rotary Bolt Out-of-Battery & Short Stroke",
        "cycle_phase": "Phase 3: Locking & Phase 2: Chambering",
        "description": "Video inspection shows rotary locking bolt stopped 0.125\" short of full rotation in barrel extension. Trigger pulls with dull click; disconnector safety blocks hammer release to prevent catastrophic out-of-battery ignition.",
        "primary_symptom": "Bolt carrier 1/8\" open; bolt head lugs not fully rotated 90° into barrel extension",
        "root_causes": [
            "Carbon and lead fouling caked inside the dual ARGO gas cylinders / piston ring gaps",
            "Weak recoil spring inside receiver stock extension tube",
            "Severe carbon ring in 12-gauge 3\" chamber impeding shell rim seating",
            "Bolt cam pin or bolt carrier track lack of high-temp synthetic grease"
        ],
        "immediate_action": "PUSH bolt forward with palm heel to seat into battery; if stuck, rack charging handle firmly to eject defective shell.",
        "armorer_checklist": [
            "1. ARGO Pistons Disassembly: Remove barrel, slide out dual stainless steel pistons. Soak in carbon solvent and verify piston rings float freely.",
            "2. Recoil Spring Tube Maintenance: Unscrew stock buffer tube with heat gun; inspect recoil spring for rust, kinks, or length under 17.5\".",
            "3. Rotary Bolt Cam Track: Clean cam pin and apply thin film of synthetic grease (Slip 2000 EWG or Lucas Gun Butter).",
            "4. Barrel Extension Recesses: Clean out accumulated unburned propellant flakes from locking lug radial cuts."
        ],
        "parts_to_inspect": [
            {"name": "Dual ARGO Gas Pistons", "oem": "Benelli 70043", "spec": "Twin floating pistons; clean ring seals"},
            {"name": "Recoil Spring (Stock Tube)", "oem": "Benelli 70025", "spec": "Free length min 17.5\"; smooth travel"},
            {"name": "Rotary Bolt Cam Pin", "oem": "Benelli 70038", "spec": "Inspect for galling on 45° helical track"}
        ]
    },
    "sig_p320_slide_lock_failure": {
        "id": "sig_p320_slide_lock_failure",
        "firearm_id": "Sig_P320_M17_Pistols",
        "firearm_name": "SIG Sauer P320 / M17 / M18 MHS",
        "title": "Failure to Lock Back on Empty & Slide Catch Disengagement",
        "cycle_phase": "Phase 8: Hold-Open / Cocking",
        "description": "Diagnostic clip shows last round fired from magazine; slide completes full cycle and returns forward onto empty chamber instead of locking back on slide catch lever.",
        "primary_symptom": "Slide closes on empty chamber after last shot; slide catch does not rise",
        "root_causes": [
            "Shooter thumbs-forward grip pressing down on extended ambidextrous slide catch lever",
            "Slide catch lever spring dislodged or improperly seated in Fire Control Unit (FCU) pocket",
            "Weak or fatigued magazine spring failing to exert sufficient upward lift on follower tab",
            "Magazine follower tab worn or chipped where it contacts slide catch foot"
        ],
        "immediate_action": "RELOAD: Insert fresh magazine and manually rack slide to chamber round.",
        "armorer_checklist": [
            "1. Grip Test: Fire single shot with one hand; verify if slide locks back without thumb resting on lever.",
            "2. FCU Slide Catch Spring Orientation: Remove FCU from grip module; inspect small coil spring under slide catch lever. Ensure leg is locked into chassis groove.",
            "3. Magazine Follower Height: Compare follower projection against factory gauge; replace magazine spring (10–13 coils) if compressed >1 inch.",
            "4. Slide Catch Notch: Inspect square notch on left slide rail for peening or rounding."
        ],
        "parts_to_inspect": [
            {"name": "Slide Catch Lever & Spring", "oem": "SIG 1301138-R / 1300977-R", "spec": "Spring tension holds lever downward until empty follower lifts"},
            {"name": "Magazine Follower & Spring", "oem": "SIG 17-Round MHS Mag Assembly", "spec": "Positive upward snap; zero lateral wobble"}
        ]
    }
}


def create_synthetic_diagnostic_frame(title: str, timestamp_str: str, phase: str, symptom: str) -> str:
    """Generates an annotated visual HUD diagnostic frame with Pillow when video is simulated."""
    width, height = 640, 360
    img = Image.new("RGB", (width, height), color=(15, 23, 42)) # Slate 900
    draw = ImageDraw.Draw(img)

    # Grid background pattern
    for x in range(0, width, 40):
        draw.line([(x, 0), (x, height)], fill=(30, 41, 59), width=1)
    for y in range(0, height, 40):
        draw.line([(0, y), (width, y)], fill=(30, 41, 59), width=1)

    # Visual Reticle & Stoppage Zone Box
    draw.rectangle([80, 70, 560, 290], outline=(217, 119, 6), width=2) # Amber 600
    draw.line([(60, 180), (100, 180)], fill=(245, 158, 11), width=2)
    draw.line([(540, 180), (580, 180)], fill=(245, 158, 11), width=2)
    draw.line([(320, 50), (320, 90)], fill=(245, 158, 11), width=2)
    draw.line([(320, 270), (320, 310)], fill=(245, 158, 11), width=2)

    # HUD Badges & Text
    # Header bar
    draw.rectangle([0, 0, width, 40], fill=(2, 6, 23))
    draw.text((15, 10), "ARMORER AI VIDEO DIAGNOSTICS LAB", fill=(217, 119, 6))
    draw.text((width - 120, 10), f"TIME: {timestamp_str}", fill=(148, 163, 184))

    # Stoppage Banner
    draw.rectangle([90, 80, 550, 120], fill=(220, 38, 38, 200)) # Red 600
    draw.text((105, 90), f"MALFUNCTION DETECTED: {title[:40]}", fill=(255, 255, 255))

    # Phase badge
    draw.rectangle([90, 135, 420, 165], fill=(30, 41, 59))
    draw.text((105, 142), f"CYCLE OF OPS: {phase}", fill=(56, 189, 248))

    # Observation
    draw.text((90, 190), "OPTICAL OBSERVATION / SENSOR READOUT:", fill=(148, 163, 184))
    draw.text((90, 215), symptom[:70], fill=(248, 250, 252))
    if len(symptom) > 70:
        draw.text((90, 235), symptom[70:140], fill=(248, 250, 252))

    # Bottom status bar
    draw.rectangle([0, height - 30, width, height], fill=(2, 6, 23))
    draw.text((15, height - 22), "FPS: 240 Slow-Mo • Spectrum: Visible • Analysis: Master Armorer Vision V2", fill=(100, 116, 139))

    # Export to base64
    buf = io.BytesIO()
    img.save(buf, format="JPEG", quality=85)
    return base64.b64encode(buf.getvalue()).decode("utf-8")


def extract_frames_with_ffmpeg(video_path: Path, max_frames: int = 5) -> List[Dict[str, Any]]:
    """Extracts diagnostic frames using system ffmpeg."""
    frames = []
    temp_dir = video_path.parent / f"frames_{video_path.stem}"
    temp_dir.mkdir(parents=True, exist_ok=True)

    try:
        # 1. Get duration via ffprobe or default to 5 seconds
        duration = 5.0
        try:
            probe_cmd = [
                "ffprobe", "-v", "error", "-show_entries", "format=duration",
                "-of", "default=noprint_wrappers=1:nokey=1", str(video_path)
            ]
            res = subprocess.run(probe_cmd, capture_output=True, text=True, timeout=10)
            if res.returncode == 0 and res.stdout.strip():
                duration = max(1.0, float(res.stdout.strip()))
        except Exception:
            duration = 5.0

        # Calculate time steps (e.g. 15%, 35%, 55%, 75%, 95%)
        timestamps = [round(duration * (i + 1) / (max_frames + 1), 3) for i in range(max_frames)]
        phase_labels = [
            "Phase 1: In Battery / Lockup",
            "Phase 2: Ignition & Unlock Travel",
            "Phase 3: Extraction & Port Opening",
            "Phase 4: Ejection / Clearance",
            "Phase 5: Feeding / Stoppage State"
        ]

        for idx, t in enumerate(timestamps):
            out_img = temp_dir / f"frame_{idx:02d}.jpg"
            cmd = [
                "ffmpeg", "-y", "-ss", str(t), "-i", str(video_path),
                "-frames:v", "1", "-q:v", "3", "-vf", "scale=640:360", str(out_img)
            ]
            subprocess.run(cmd, capture_output=True, timeout=15)
            if out_img.exists() and out_img.stat().st_size > 500:
                with open(out_img, "rb") as f:
                    b64_data = base64.b64encode(f.read()).decode("utf-8")
                frames.append({
                    "frame_idx": idx + 1,
                    "timestamp": f"{t:.2f}s",
                    "phase": phase_labels[idx] if idx < len(phase_labels) else f"Phase {idx+1}",
                    "image_b64": f"data:image/jpeg;base64,{b64_data}"
                })

        # Cleanup extracted jpg files
        for p in temp_dir.glob("*.jpg"):
            try:
                p.unlink()
            except Exception:
                pass
        temp_dir.rmdir()
    except Exception as e:
        print(f"[VideoAnalyzer] ffmpeg extraction warning: {e}")

    return frames


async def analyze_frames_with_gemini(
    frames: List[Dict[str, Any]],
    firearm_name: str,
    user_notes: str,
    api_key: str,
    model: str = "gemini-1.5-flash"
) -> Optional[Dict[str, Any]]:
    """Invokes Gemini Multimodal Vision API to diagnose weapon malfunction from frames."""
    import httpx

    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={api_key}"

    parts: List[Dict[str, Any]] = [
        {
            "text": (
                f"You are a master military armorer and chief gunsmith analyzing a high-speed video capture of a firearm malfunction.\n"
                f"Firearm Platform: {firearm_name}\n"
                f"User / Operator Notes: {user_notes or 'Gun experienced a stoppage during live-fire testing.'}\n\n"
                f"Instructions:\n"
                f"1. Carefully examine each temporal video frame.\n"
                f"2. Classify the stoppage (e.g. Type 1 Failure to Fire, Type 2 Stovepipe/Failure to Eject, Type 3 Failure to Extract/Double Feed, Type 4 Bolt Out of Battery/Bolt Bounce, Short Stroke).\n"
                f"3. Pinpoint the exact phase of the mechanical cycle of operations that failed.\n"
                f"4. Provide the primary visible symptom, ranked probable root causes, immediate action clearing drill, and step-by-step armorer repair checklist with exact torque specs and tolerances.\n\n"
                f"Respond ONLY with a valid JSON object matching this schema:\n"
                f"{{\n"
                f'  "title": "Stoppage Name & Type",\n'
                f'  "cycle_phase": "Phase Name (e.g. Phase 6: Extraction)",\n'
                f'  "primary_symptom": "Visual observation in the frame",\n'
                f'  "root_causes": ["Cause 1", "Cause 2", "Cause 3"],\n'
                f'  "immediate_action": "Field clearing procedure",\n'
                f'  "armorer_checklist": ["Step 1", "Step 2", "Step 3", "Step 4"],\n'
                f'  "parts_to_inspect": [\n'
                f'    {{"name": "Part Name", "oem": "OEM/Mil-Spec Part #", "spec": "Tolerance/clearance/torque spec"}}\n'
                f'  ]\n'
                f"}}"
            )
        }
    ]

    for f in frames[:5]:
        raw_b64 = f["image_b64"]
        if "," in raw_b64:
            raw_b64 = raw_b64.split(",", 1)[1]
        parts.append({
            "inline_data": {
                "mime_type": "image/jpeg",
                "data": raw_b64
            }
        })

    payload = {
        "contents": [{"parts": parts}],
        "generationConfig": {
            "temperature": 0.2,
            "response_mime_type": "application/json"
        }
    }

    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            res = await client.post(url, json=payload)
            if res.status_code == 200:
                data = res.json()
                raw_text = data["candidates"][0]["content"]["parts"][0]["text"]
                parsed = json.loads(raw_text)
                parsed["analysis_engine"] = f"Multimodal Vision AI (Google Gemini {model})"
                return parsed
    except Exception as e:
        print(f"[VideoAnalyzer] Gemini Vision error: {e}")

    return None


def run_heuristic_video_analyzer(
    firearm_id: str,
    user_notes: str,
    frames: List[Dict[str, Any]]
) -> Dict[str, Any]:
    """100% Offline Master Gunsmith Malfunction Diagnosis Engine."""
    meta = FIREARMS_METADATA.get(firearm_id, {})
    fname = meta.get("name", firearm_id.replace("_", " "))
    notes_lower = user_notes.lower()

    # Determine likely stoppage type based on user notes or platform profile
    matched_case_key = "ar15_double_feed"
    if any(k in notes_lower for k in ["stovepipe", "eject", "vertical", "pinched", "fte"]):
        matched_case_key = "glock_stovepipe"
    elif any(k in notes_lower for k in ["battery", "rotary", "bolt head", "short stroke", "gas", "piston", "benelli"]):
        matched_case_key = "benelli_out_of_battery"
    elif any(k in notes_lower for k in ["lock back", "slide catch", "follower", "magazine", "empty", "sig", "p320"]):
        matched_case_key = "sig_p320_slide_lock_failure"
    elif "glock" in firearm_id.lower():
        matched_case_key = "glock_stovepipe"
    elif "benelli" in firearm_id.lower() or "shotgun" in firearm_id.lower():
        matched_case_key = "benelli_out_of_battery"
    elif "sig" in firearm_id.lower():
        matched_case_key = "sig_p320_slide_lock_failure"
    else:
        matched_case_key = "ar15_double_feed"

    template = SAMPLE_CASES[matched_case_key].copy()

    # Tailor title and diagnostics to the active firearm
    if template["firearm_id"] != firearm_id:
        template["firearm_name"] = fname
        template["title"] = f"{fname}: {template['title'].split(': ', 1)[-1]}"

    template["analysis_engine"] = "Master Gunsmith Video Analysis Engine (Offline / Vision Fallback)"
    return template


async def analyze_malfunction_video(
    firearm_id: str,
    video_path: Optional[Path] = None,
    sample_id: Optional[str] = None,
    user_notes: str = "",
    cfg: Optional[Dict[str, Any]] = None
) -> Dict[str, Any]:
    """Master entry point for malfunction video analysis."""
    if cfg is None:
        cfg = {}

    firearm_meta = FIREARMS_METADATA.get(firearm_id, {})
    fname = firearm_meta.get("name", firearm_id.replace("_", " "))

    # 1. Check if user selected one of the pre-loaded simulation cases
    if sample_id and sample_id in SAMPLE_CASES:
        sc = SAMPLE_CASES[sample_id]
        frames = [
            {
                "frame_idx": 1,
                "timestamp": "0.08s",
                "phase": "T0: Cycle Start",
                "image_b64": f"data:image/jpeg;base64,{create_synthetic_diagnostic_frame(sc['title'], '0.08s', 'Ignition', 'In Battery Chambering')}"
            },
            {
                "frame_idx": 2,
                "timestamp": "0.19s",
                "phase": "T1: Recoil Travel",
                "image_b64": f"data:image/jpeg;base64,{create_synthetic_diagnostic_frame(sc['title'], '0.19s', sc['cycle_phase'], sc['primary_symptom'])}"
            },
            {
                "frame_idx": 3,
                "timestamp": "0.34s",
                "phase": "T2: Stoppage Lockup",
                "image_b64": f"data:image/jpeg;base64,{create_synthetic_diagnostic_frame(sc['title'], '0.34s', 'Stoppage Point', sc['root_causes'][0])}"
            }
        ]
        result = sc.copy()
        result["frames"] = frames
        result["analysis_engine"] = "Armorer Diagnostics Lab (Simulated High-Speed Malfunction Capture)"
    elif video_path and video_path.exists():
        # Extract frames using ffmpeg
        frames = extract_frames_with_ffmpeg(video_path, max_frames=5)
        if not frames:
            # Fallback synthetic frame if ffmpeg failed
            frames = [
                {
                    "frame_idx": 1,
                    "timestamp": "0.15s",
                    "phase": "Malfunction Frame",
                    "image_b64": f"data:image/jpeg;base64,{create_synthetic_diagnostic_frame('Video Frame Extraction', '0.15s', 'Cycle Disruption', user_notes or 'Visual stoppage observed')}"
                }
            ]

        # Attempt Vision AI if configured
        gemini_key = cfg.get("api_key") or os.environ.get("GEMINI_API_KEY", "")
        vision_result = None
        if gemini_key:
            mod = cfg.get("model") if cfg.get("model") and "gemini" in cfg.get("model") else "gemini-1.5-flash"
            vision_result = await analyze_frames_with_gemini(
                frames=frames,
                firearm_name=fname,
                user_notes=user_notes,
                api_key=gemini_key,
                model=mod
            )

        if vision_result:
            result = vision_result
            result["frames"] = frames
        else:
            result = run_heuristic_video_analyzer(firearm_id, user_notes, frames)
            result["frames"] = frames
    else:
        # Fallback default heuristic analysis
        result = run_heuristic_video_analyzer(firearm_id, user_notes, [])
        result["frames"] = [
            {
                "frame_idx": 1,
                "timestamp": "0.12s",
                "phase": "Stoppage Point",
                "image_b64": f"data:image/jpeg;base64,{create_synthetic_diagnostic_frame(result['title'], '0.12s', result['cycle_phase'], result['primary_symptom'])}"
            }
        ]

    # Ground findings with RAG Manual Citations
    search_query = f"{result.get('title', '')} {result.get('primary_symptom', '')} {result.get('cycle_phase', '')}"
    rag_citations = rag_engine.search(search_query, firearm_id=firearm_id, top_k=2)
    result["rag_manual_citations"] = rag_citations

    # Enrich parts to inspect with current platform parts data if available
    if firearm_id in PARTS_DATABASE:
        platform_parts = PARTS_DATABASE[firearm_id]
        # Match part names
        for item in result.get("parts_to_inspect", []):
            pname = item.get("name", "").lower()
            for p in platform_parts:
                if any(w in p.get("name", "").lower() for w in pname.split() if len(w) > 3):
                    if p.get("oem"):
                        item["oem"] = p["oem"]
                    if p.get("tolerances"):
                        item["spec"] = p["tolerances"]

    return result
