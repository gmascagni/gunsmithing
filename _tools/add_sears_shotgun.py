import sys
from pathlib import Path

root = Path(__file__).resolve().parent.parent
shotguns_path = root / "web_app" / "catalog" / "shotguns.py"

content = shotguns_path.read_text(encoding="utf-8")

if "Sears_Roebuck_12G_Side_By_Side" in content:
    print("Sears shotgun already registered in shotguns.py")
    sys.exit(0)

sears_entry = '''    "Sears_Roebuck_12G_Side_By_Side": {
        "name": "Sears, Roebuck & Co. 12-Gauge Side-by-Side Shotgun (1922)",
        "subtitle": "Vintage Double-Barrel Field Shotgun (Ranger Model 101 / Stevens 311 / Crescent / Meriden)",
        "manufacturer": "Sears, Roebuck & Co. / J. Stevens Arms / Crescent Fire Arms",
        "category": "Shotguns",
        "action_type": "Break-Action Side-by-Side (SxS) Dual Trigger Double-Barrel Shotgun",
        "operating_actions": ["Break-Open Boxlock", "Dual Triggers", "Automatic Tang Safety", "Mechanical Extractor"],
        "types": ["Shotguns", "Historic & Military", "Hunting & Law Enforcement"],
        "caliber_categories": ["12 Gauge"],
        "era": "Golden Age of American Field Doubles (1900-1950)",
        "models": [
            "1922 Sears Ranger Hammerless Double (Model 101.1 / Stevens 5100/311)",
            "1922 Sears Ranger Model 105 (Crescent Fire Arms Co.)",
            "Sears A.J. Aubrey / Meriden Hammerless Double (Pre-1918)",
            "Eastern Arms Co. 12G Double (Sears Brand)",
            "J.C. Higgins Model 101.1 Side-by-Side"
        ],
        "calibers": ["12 Gauge (2-3/4\\" Chamber & 2-5/8\\" Vintage Early Hulls)"],
        "key_tasks": [
            "Chamber Length & Forcing Cone Gauging (Pre-1927 Short Chamber Verification)",
            "Barrel Hook & Hinge Pin Bearing Fit (Fixing Off-Face Action Play)",
            "Top Snap Lever Reserve & Underbolt Engagement Inspection",
            "Double Trigger & Sear Overlap Tuning (Preventing Doubling)",
            "Firing Pin Protrusion & Hemispherical Nose Polishing",
            "Extractor Guide Rod Alignment & Chamber Polishing"
        ],
        "specs": {
            "headspace_rim_recess": "0.054\\" GO / 0.064\\" NO-GO standard 12G rim recess depth. Maximum allowable FIELD limit: 0.070\\".",
            "firing_pin_protrusion": "0.055\\" to 0.065\\" protrusion through breech face. Tips must be hemispherical and mirror-polished with zero burrs.",
            "hinge_pin_bearing": "0.375\\" nominal diameter hardened hinge pin. Barrel lump hook must maintain minimum 80% full bluing contact with zero off-face clearance.",
            "top_lever_reserve": "When barrels are snapped locked shut, top snap lever must rest at 4:30 to 5:00 o'clock (past center right). If lever reaches or passes 6:00 o'clock center, the locking underbolt and barrel lugs are worn.",
            "trigger_pull_weights": "Front Trigger (Right Barrel): 4.0 to 4.5 lbs. Rear Trigger (Left Barrel): 4.5 to 5.0 lbs.",
            "pre_1927_chamber_warning": "CRITICAL ARMORER SAFETY: Many double shotguns manufactured prior to 1927 had 2-5/8\\" or 2-1/2\\" chambers designed for roll-crimp paper hulls. Firing modern star-crimped 2-3/4\\" high-pressure shells causes crimp petals to open into the forcing cone, causing catastrophic chamber pressure spikes (15,000+ psi). Always measure chamber length with a brass chamber gauge or Cerrosafe cast."
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Action Rattles or Has Fore-and-Aft Play When Closed (Off-Face Condition)",
                "short_desc": "Barrels shake laterally or axially against receiver face when forend is latched shut; gap visible between breech and barrel breech face",
                "causes": [
                    "Worn barrel lump hook bearing surface from decades of shooting without lubrication.",
                    "Indented or worn frame hinge pin.",
                    "Stretched frame or battered locking underbolt."
                ],
                "action": "Immediate Action: DO NOT FIRE. An off-face shotgun can fracture the hinge pin or blow out under pressure. Gunsmith Action: 1) Measure gap with feeler gauge (any gap > 0.002\\" is unsafe). 2) Turn or replace frame hinge pin with precision oversize pin (+0.005\\" to +0.010\\"). 3) TIG weld or shim the barrel hook and hand-fit using Prussian blue to achieve 85%+ uniform bearing contact."
            },
            {
                "position": "Stoppage 2: Doubling (Both Barrels Fire Simultaneously on Front Trigger Pull)",
                "short_desc": "Pulling the right barrel trigger causes heavy recoil and simultaneously trips the left barrel hammer",
                "causes": [
                    "Worn or chipped sear notches on hammers.",
                    "Sear engagement depth less than 0.030\\".",
                    "Heavy recoil dislodges left sear due to weakened sear spring or accumulated hardened oil."
                ],
                "action": "Immediate Action: Unload weapon and cease firing immediately. Gunsmith Action: Remove buttstock tang bolt. Detail strip locks. Stone sear and hammer notch strictly square with hard Arkansas stone at factory 90° angle—NEVER undercut sear. Replace weakened sear springs and test by dropping cocked receiver on rubber mallet from 6 inches."
            },
            {
                "position": "Stoppage 3: Failure to Fire / Light Primer Indentation on One Barrel",
                "short_desc": "Hammer drops with audible click, but cartridge does not ignite; shallow primer strike",
                "causes": [
                    "Weakened or cracked mainspring (coil spring on Stevens 311 / flat V-spring on Crescent).",
                    "Chipped or shortened firing pin tip (protrusion < 0.050\\").",
                    "Hardened dried grease inside firing pin tunnel dampening striker blow."
                ],
                "action": "Immediate Action: Wait 30 seconds with muzzle downrange before opening action (hangfire precaution). Gunsmith Action: Flush firing pin channel with brake cleaner. Measure firing pin protrusion (spec: 0.055\\"-0.065\\"). If short, machine replacement water-hardening W1 drill rod firing pin, harden to 50 HRC and polish spherical tip. Replace mainspring."
            },
            {
                "position": "Stoppage 4: Sticky Extraction / Fired Shell Hull Lodged in Chamber",
                "short_desc": "Barrels hinge open, but fired paper or plastic hull remains jammed in chamber; extractor slips over rim",
                "causes": [
                    "Pitted, rusty, or rough chamber walls expanding under firing pressure.",
                    "Bent extractor guide rod or worn extractor bevel.",
                    "Modern high-pressure ammunition fired in vintage tight chamber."
                ],
                "action": "Immediate Action: Use wooden dowel through muzzle to push hull out. Gunsmith Action: Hone chamber with 400-grit flex-hone and light cutting oil to remove rust pits and mirror polish. Check extractor plate bevel and ensure extractor guide rod moves freely without binding."
            }
        ],
        "videos": [
            {
                "id": "vintage_sxs_gunsmithing",
                "title": "Vintage Side-by-Side Shotgun Repair & Action Tightening",
                "creator": "Larry Potterfield / MidwayUSA",
                "category": "Gunsmithing & Repair",
                "url": "https://www.youtube.com/results?search_query=vintage+side+by+side+shotgun+repair+action+tightening+off+face+gunsmithing",
                "embed_url": "",
                "summary": "Master gunsmithing teardown and servicing of vintage American boxlock side-by-side shotguns (Stevens 311 / Crescent / Fox). Demonstrates hinge pin fitting, removing off-face action play, stone sear tuning to prevent doubling, and chamber polishing."
            }
        ]
    }
'''

r_idx = content.rfind("}")
if r_idx != -1:
    prefix = content[:r_idx].rstrip()
    if prefix.endswith(","):
        new_content = prefix + "\n" + sears_entry + "}\n"
    else:
        new_content = prefix + ",\n" + sears_entry + "}\n"
    shotguns_path.write_text(new_content, encoding="utf-8")
    print("Successfully added Sears_Roebuck_12G_Side_By_Side to shotguns.py!")
else:
    print("Closing brace not found")
