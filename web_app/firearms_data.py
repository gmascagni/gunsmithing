"""
Technical specifications, diagnostic stoppage matrices, and curated masterclass video references
for each firearm and gunsmithing platform in the technical repository.
"""

from typing import Dict, Any, List

FIREARMS_METADATA: Dict[str, Dict[str, Any]] = {
    "Lewis_Automatic_Machine_Gun": {
        "name": "Lewis Automatic Machine Gun",
        "subtitle": "Model 1914 / 1917 / 1918 (.303 British & .30-06 Springfield)",
        "manufacturer": "Savage Arms / BSA",
        "category": "Machine Guns",
        "models": ["Model 1914", "Model 1917", "Model 1918 Aircraft"],
        "calibers": [".303 British", ".30-06 Springfield"],
        "key_tasks": ["Spring Tension (12-14 lbs)", "Striker Protrusion", "Gas Regulator (S/L)", "Field Strip", "Pan Feed Clearing"],
        "specs": {
            "calibers": ".303 British (Mk VII rimmed) / .30-06 Springfield (US M1917/1918 rimless)",
            "operation": "Gas-operated (cup piston), open-bolt, rotating 4-lug bolt, rack & pinion clock spring return",
            "feed": "47-round pan magazine (infantry) / 97-round pan magazine (aircraft/naval)",
            "cyclic_rate": "500 - 600 rounds/min",
            "spring_tension": "12 to 14 lbs pull measured at cocking handle (approx 2 to 2.5 full turns of gear casing from slack)",
            "striker_protrusion": "0.050\" to 0.060\" through bolt face at full battery",
            "gas_regulator": "Two-orifice cup: 'S' (Small - normal operation) / 'L' (Large - foul/cold conditions)",
            "headspace_303": "Rimmed: GO = 0.058\", NO-GO = 0.064\", FIELD = 0.070\"",
            "cooling_system": "Aluminum longitudinal fluted radiator enclosed in steel jacket with muzzle blast venturi cowl"
        },
        "stoppages": [
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
        ],
        "videos": [
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
    },

    "Glock_Pistols": {
        "name": "Glock Safe-Action Pistols",
        "subtitle": "Generations 1–5 (9x19mm, .40 S&W, .45 ACP, 10mm Auto)",
        "manufacturer": "Glock",
        "category": "Pistols",
        "models": ["Glock 17", "Glock 19", "Glock 21", "Glock 22", "Glock 23", "Glock 26", "Glock 34", "Glock 43", "Glock 43X", "Glock 48"],
        "calibers": ["9x19mm", ".40 S&W", ".45 ACP", "10mm Auto"],
        "key_tasks": ["Cruciform Sear Check (66%)", "5-Drop Lube Protocol", "25¢ Trigger Polish", "30274 Ejector Bar Upgrade", "Detail Strip"],
        "specs": {
            "cruciform_sear_engagement": "≥ 66% (minimum 2/3 sear overlap) verified via orange armorer inspection cover plate (SP 02096)",
            "connector_gap": "0.005\" to 0.010\" clearance between connector top tab and trigger housing wall",
            "trigger_pull_weight": "5.5 lbs (Standard 5.5 connector) / 4.5 lbs (Dot/Minus connector)",
            "lubrication_discipline": "Strict 5-Drop rule; ZERO lubricant in striker channel, striker sleeve, or safety plunger hole",
            "recoil_spring_lifespan": "3,000–5,000 rounds (Gen 1–3 flat spring) / 5,000–7,500 rounds (Gen 4–5 dual-nested assembly)",
            "slide_rail_clearance": "0.012\" to 0.024\" nominal lateral play across steel chassis inserts",
            "striker_free_float": "Must rattle audibly front-to-back when shaken with trigger held forward"
        },
        "stoppages": [
            {
                "position": "Failure to Fire / Light Primer Strike",
                "short_desc": "Slide fully into battery; trigger clicks but primer fails to ignite or exhibits shallow indentation",
                "causes": [
                    "Lubricant or brass-shaving sludge inside striker channel causing hydrodynamic drag on firing pin.",
                    "Chipped, broken, or mushroomed striker tip.",
                    "Fatigued striker spring (spring length compressed under 42mm).",
                    "Slide stopped 1/16\" out of battery from dirty breech face or weak recoil spring."
                ],
                "action": "Armorer Remedy: Completely degrease firing pin channel with aerosol quick-dry cleaner; DO NOT lubricate channel; inspect striker tip under 10x glass; replace striker spring (factory 24N / 5.5 lb)."
            },
            {
                "position": "Failure to Extract (FTE) / Stovepipe",
                "short_desc": "Spent cartridge case remains partially or fully inside chamber while fresh round feeds underneath",
                "causes": [
                    "Chipped or rounded extractor claw engagement tooth.",
                    "Incorrect Spring-Loaded Bearing (SLB) installed (must match LCI / non-LCI and caliber).",
                    "Outdated Gen 4 9mm ejector bar (upgrade to 30274 or Gen 5 47021).",
                    "Weak extractor depressor plunger spring."
                ],
                "action": "Armorer Remedy: Inspect claw edge; verify black SLB for 9mm LCI, white SLB for .40 S&W; replace ejector bar with 30274; replace EDP assembly."
            },
            {
                "position": "Trigger Reset Failure / Dead Trigger",
                "short_desc": "After firing, trigger stays fully rearward and fails to pop forward into reset shelf upon slide cycle",
                "causes": [
                    "Connector bent inward too tight against trigger housing, failing to cam trigger bar up.",
                    "Disconnected, broken, or incorrectly oriented trigger return spring (Gen 1–4 coil spring).",
                    "Aftermarket trigger shoe over-travel stop screw set too tight.",
                    "Deformed or burred cruciform drop shelf."
                ],
                "action": "Armorer Remedy: Adjust connector outward bend angle to ensure 0.005\"-0.010\" clearance; verify coil spring hook open side faces upward; back off trigger over-travel screw."
            },
            {
                "position": "Premature Slide Lock / Slide Locks Open with Ammo in Mag",
                "short_desc": "Slide locks back on an active magazine with 1 or more cartridges remaining",
                "causes": [
                    "Slide stop lever spring misrouted over top pin rather than under top locking block pin.",
                    "Shooter's high thumbs-forward grip bumping slide stop lever during recoil upward whip."
                ],
                "action": "Armorer Remedy: Install top locking block pin FIRST, then slide stop lever, then bottom trigger pin, verifying wire spring sits cleanly in groove under top pin."
            }
        ],
        "videos": [
            {
                "id": "kYJjQn-B-Qc",
                "title": "Glock Slide Detail Strip & Component Inspection",
                "creator": "Brownells Gun Techs",
                "category": "Disassembly & Inspection",
                "url": "https://www.youtube.com/watch?v=kYJjQn-B-Qc",
                "embed_url": "https://www.youtube-nocookie.com/embed/kYJjQn-B-Qc",
                "summary": "Complete disassembly of slide: extractor, spring-loaded bearing, extractor depressor plunger, striker assembly (spring cups, spacer sleeve), and firing pin safety plunger."
            },
            {
                "id": "oV0wDDFV0NY",
                "title": "Glock Frame Detail Strip & Reassembly (Gen 3, 4, 5)",
                "creator": "GlockStore / Lenny Magill",
                "category": "Disassembly & Assembly",
                "url": "https://www.youtube.com/watch?v=oV0wDDFV0NY",
                "embed_url": "https://www.youtube-nocookie.com/embed/oV0wDDFV0NY",
                "summary": "Locking block pin, trigger pin, housing pin, trigger bar with cruciform, ejector housing, and connector removal across Gen 3, 4, and 5 architectures."
            },
            {
                "id": "F0f631Z8m08",
                "title": "Glock 3-Stage Safe Action Armorer Bench Inspection",
                "creator": "Midwest Gun Works",
                "category": "Armorer Safety & Tolerances",
                "url": "https://www.youtube.com/watch?v=F0f631Z8m08",
                "embed_url": "https://www.youtube-nocookie.com/embed/F0f631Z8m08",
                "summary": "Step-by-step verification: Trigger safety lever block, firing pin safety plunger drop test, and cruciform drop shelf 66% engagement test using orange inspection plate."
            },
            {
                "id": "Qh_B14eQzT4",
                "title": "Connector Angle Tuning & Feeler Gauge Clearance",
                "creator": "Johnny Glocks",
                "category": "Tuning & Trigger Work",
                "url": "https://www.youtube.com/watch?v=Qh_B14eQzT4",
                "embed_url": "https://www.youtube-nocookie.com/embed/Qh_B14eQzT4",
                "summary": "Master tuner calibration of connector bend angle for crisp break and positive reset, setting 0.005\" to 0.010\" clearance between connector tab and housing."
            },
            {
                "id": "2mszC0g_yC4",
                "title": "The Famous 25¢ Glock Trigger Polish Job",
                "creator": "MCORPS1 Gunsmithing",
                "category": "Custom Gunsmithing",
                "url": "https://www.youtube.com/watch?v=2mszC0g_yC4",
                "embed_url": "https://www.youtube-nocookie.com/embed/2mszC0g_yC4",
                "summary": "Mirror polishing factory friction surfaces with Flitz/Mothers (cruciform sear shelf, connector ramp, safety plunger dome) without removing metal or altering factory angles."
            },
            {
                "id": "pGobEpUO3Uc",
                "title": "Glock Slide Rail Clearance & Lubrication Standards",
                "creator": "Larry Vickers / Vickers Tactical",
                "category": "Maintenance & Lubrication",
                "url": "https://www.youtube.com/watch?v=pGobEpUO3Uc",
                "embed_url": "https://www.youtube-nocookie.com/embed/pGobEpUO3Uc",
                "summary": "The definitive 5-drop lubrication discipline and armorer rules: exactly where oil belongs and why the striker channel must stay 100% dry."
            },
            {
                "id": "ZcM9w6bYQW0",
                "title": "Diagnosing Failure to Extract (FTE) & Stovepipes",
                "creator": "Apex Tactical Specialties",
                "category": "Troubleshooting & Malfunctions",
                "url": "https://www.youtube.com/watch?v=ZcM9w6bYQW0",
                "embed_url": "https://www.youtube-nocookie.com/embed/ZcM9w6bYQW0",
                "summary": "Diagnosing extractor claw tension, loaded chamber indicator spring pressure, and upgrading old 336 ejector bars to 30274."
            },
            {
                "id": "E6uW4U6tF3w",
                "title": "Reset Failure & Trigger Spring Binding",
                "creator": "Tactical Toolbox",
                "category": "Troubleshooting & Malfunctions",
                "url": "https://www.youtube.com/watch?v=E6uW4U6tF3w",
                "embed_url": "https://www.youtube-nocookie.com/embed/E6uW4U6tF3w",
                "summary": "Diagnosing missing reset, connector drag, and trigger return spring disconnection (Gen 1-4 coil vs Gen 5 compression spring)."
            }
        ]
    },

    "Ruger_Firearms": {
        "name": "Ruger Firearms Technical Collection",
        "subtitle": "10/22 Carbine, Mark I–IV Target Pistols & GP100 Revolvers",
        "manufacturer": "Ruger",
        "category": "Rifles / Pistols / Revolvers",
        "models": ["10/22 Carbine", "Mark I", "Mark II", "Mark III", "Mark IV", "GP100 Revolver"],
        "calibers": [".22 LR", ".357 Magnum", ".38 Special"],
        "key_tasks": ["10/22 V-Block Torque (25-30 in-lbs)", "Rotary Mag Tension (1-1/4 turns)", "Mark Series Hammer Strut Alignment", "GP100 Cylinder Gap (0.004\"-0.007\")", "Trigger Shimming"],
        "specs": {
            "10_22_takedown_action_screw": "15 to 20 in-lbs (wood/synthetic stock) / 25 in-lbs (pillar bedding)",
            "10_22_v_block_clamp_screws": "25 to 30 in-lbs (tighten evenly in alternation; do NOT overtighten to avoid barrel droop)",
            "10_22_bolt_headspace_depth": "0.0425\" to 0.0435\" rim recess depth (precision match spec)",
            "mark_series_bolt_headspace": "0.042\" to 0.044\" rim recess depth",
            "gp100_barrel_cylinder_gap": "0.004\" to 0.007\" nominal feeler gauge clearance (0.008\" maximum service limit)",
            "gp100_cylinder_endshake": "≤ 0.002\" maximum allowable axial play",
            "gp100_cartridge_headspace": "0.060\" to 0.068\" cartridge rim to recoil shield clearance",
            "gp100_firing_pin_protrusion": "0.048\" to 0.055\" with transfer bar held raised"
        },
        "stoppages": [
            {
                "position": "10/22 Failure to Extract / Spent Case Left in Chamber",
                "short_desc": "Bolt cycles rearward, leaving empty fired casing in chamber, jamming incoming fresh cartridge",
                "causes": [
                    "Factory stamped steel extractor claw worn, rounded, or packed with bullet wax/lead.",
                    "Carbon ring buildup in barrel extractor relief cut.",
                    "V-block overtightened causing barrel tenon droop and bolt face misalignment."
                ],
                "action": "Armorer Remedy: Scrape wax from extractor pocket with brass pick; install wire-EDM hardened sharp-hook extractor (Volquartsen / Kidd); verify V-block torqued evenly to 25–30 in-lbs."
            },
            {
                "position": "10/22 Rotary Magazine Feed Failure / Nose-Dive",
                "short_desc": "Cartridge tip strikes below chamber mouth; rotor fails to advance round into feedway",
                "causes": [
                    "Weak rotor clock spring tension.",
                    "Powder residue and bullet wax binding the 10-round polymer rotor flutes."
                ],
                "action": "Armorer Remedy: Disassemble magazine, scrub rotor flutes with solvent, pre-load spiral spring exactly 1-1/4 turns (450°) counter-clockwise before tightening central hex nut."
            },
            {
                "position": "Ruger Mark I/II/III Locked Bolt / Jammed Reassembly",
                "short_desc": "Pistol reassembled but bolt cannot be retracted or trigger will not trip sear",
                "causes": [
                    "Hammer strut missed the mainspring housing plunger cup and lodged against frame cross-pin."
                ],
                "action": "Armorer Remedy: NEVER force bolt with hammer. Invert pistol muzzle 45° upward, pull trigger to drop hammer forward, point muzzle upward so strut dangles freely into the mainspring housing cup, then latch closed."
            },
            {
                "position": "GP100 Cylinder Binding / Cylinder Won't Rotate",
                "short_desc": "Cylinder hard to open or binds tightly during double-action trigger pull",
                "causes": [
                    "Unburned powder flakes or lead debris lodged under the ejector star.",
                    "Excessive cylinder endshake (> 0.002\") causing cylinder face to rub against barrel forcing cone.",
                    "Ejector rod unscrewing and lengthening under recoil."
                ],
                "action": "Armorer Remedy: Brush clean beneath extractor star; measure barrel-cylinder gap (spec 0.004\"-0.007\"); install stainless crane shims to eliminate endshake."
            }
        ],
        "videos": [
            {
                "id": "F3aJ2Y4m0Xo",
                "title": "Ruger 10/22 Complete Detail Disassembly & Modular Strip",
                "creator": "MidwayUSA / Larry Potterfield",
                "category": "Disassembly & Assembly",
                "url": "https://www.youtube.com/watch?v=F3aJ2Y4m0Xo",
                "embed_url": "https://www.youtube-nocookie.com/embed/F3aJ2Y4m0Xo",
                "summary": "Removing receiver from stock, takedown screw torque, removing trigger group pins, bolt buffer, bolt removal, charging handle guide spring, and trigger detail strip."
            },
            {
                "id": "RkLq7oUaF88",
                "title": "10/22 Bolt Tuning: Extractor Upgrade & Headspace",
                "creator": "Brownells Gun Techs",
                "category": "Tuning & Repair",
                "url": "https://www.youtube.com/watch?v=RkLq7oUaF88",
                "embed_url": "https://www.youtube-nocookie.com/embed/RkLq7oUaF88",
                "summary": "Replacing stamped factory extractor with wire-EDM hardened hook, smoothing bolt face contact, and testing headspace on rim recess (0.0425\"-0.0435\")."
            },
            {
                "id": "wX-yV2kP7q0",
                "title": "10/22 Rotary Magazine Disassembly, Tensioning & Cleaning",
                "creator": "GunBlue490",
                "category": "Maintenance & Tuning",
                "url": "https://www.youtube.com/watch?v=wX-yV2kP7q0",
                "embed_url": "https://www.youtube-nocookie.com/embed/wX-yV2kP7q0",
                "summary": "Disassembling the 10-round rotary spool magazine and pre-loading the rotor clock spring by exactly 1-1/4 turns (450°) before cinching the central nut."
            },
            {
                "id": "b4Owh_qH_5k",
                "title": "Mastering Ruger Mark I/II/III Takedown & Reassembly",
                "creator": "GunBlue490",
                "category": "Disassembly & Assembly",
                "url": "https://www.youtube.com/watch?v=b4Owh_qH_5k",
                "embed_url": "https://www.youtube-nocookie.com/embed/b4Owh_qH_5k",
                "summary": "Step-by-step masterclass demystifying the Ruger Mark series reassembly puzzle and gravity alignment of the hammer strut."
            },
            {
                "id": "6P7K_tVf28M",
                "title": "Ruger Mark III Magazine Disconnect Removal & Bushing Mod",
                "creator": "Tandemkross",
                "category": "Custom Gunsmithing",
                "url": "https://www.youtube.com/watch?v=6P7K_tVf28M",
                "embed_url": "https://www.youtube-nocookie.com/embed/6P7K_tVf28M",
                "summary": "Eliminating factory magazine safety disconnect with hammer bushing; enables magazines to drop free cleanly and simplifies detail stripping."
            },
            {
                "id": "MhL0L_yD4_c",
                "title": "Ruger Mark IV Push-Button Takedown & Target Tuning",
                "creator": "Volquartsen Firearms",
                "category": "Overview & Upgrades",
                "url": "https://www.youtube.com/watch?v=MhL0L_yD4_c",
                "embed_url": "https://www.youtube-nocookie.com/embed/MhL0L_yD4_c",
                "summary": "Complete overview of the Mark IV one-button takedown hinge system and installation of target accurizing trigger kits."
            },
            {
                "id": "u1j9qG-Z-84",
                "title": "Ruger GP100 Complete Modular Disassembly",
                "creator": "GunBlue490",
                "category": "Disassembly & Assembly",
                "url": "https://www.youtube.com/watch?v=u1j9qG-Z-84",
                "embed_url": "https://www.youtube-nocookie.com/embed/u1j9qG-Z-84",
                "summary": "Modular construction breakdown: mainspring strut, trigger guard latch pin, trigger assembly module, crane latch and cylinder assembly."
            },
            {
                "id": "8V-w6Qz7fK0",
                "title": "Revolver Timing, Cylinder Gap & Endshake Tuning",
                "creator": "MidwayUSA / Larry Potterfield",
                "category": "Gunsmithing & Tolerances",
                "url": "https://www.youtube.com/watch?v=8V-w6Qz7fK0",
                "embed_url": "https://www.youtube-nocookie.com/embed/8V-w6Qz7fK0",
                "summary": "Measuring barrel-cylinder gap with feeler gauge (0.004\"-0.007\"), measuring cylinder endshake (<0.002\"), and installing crane bearing shims."
            },
            {
                "id": "tF6v5Z8m_2A",
                "title": "GP100 Trigger Action Job & Wolff Spring Kit",
                "creator": "The Armory Channel",
                "category": "Custom Gunsmithing",
                "url": "https://www.youtube.com/watch?v=tF6v5Z8m_2A",
                "embed_url": "https://www.youtube-nocookie.com/embed/tF6v5Z8m_2A",
                "summary": "Stoning trigger return slide channel, polishing hammer dog sear contact, and installing 10 lb hammer spring for silky 8.5 lb DA / 2.75 lb SA."
            }
        ]
    },

    "Beretta_Pistols": {
        "name": "Beretta 92 / M9 Series Pistols",
        "subtitle": "92FS, M9, 96, Brigadier & Inox (9x19mm NATO & .40 S&W)",
        "manufacturer": "Beretta",
        "category": "Pistols",
        "models": ["Beretta 92FS", "Beretta M9", "Beretta 92F", "Beretta 96", "Beretta 92D", "Beretta Brigadier", "Beretta Inox"],
        "calibers": ["9x19mm NATO", ".40 S&W"],
        "key_tasks": ["Dead Trigger Spring Fix", "Locking Block Inspection (15k rds)", "Factory 92D Hammer Spring (8 lbs)", "Slide Detail Strip", "Extractor Carbon Cleaning"],
        "specs": {
            "operating_system": "Short recoil falling locking block (Walther P38 heritage) with non-tilting straight-line barrel",
            "locking_block_service_life": "Inspect every 5,000 rds; replace every 15,000–20,000 rds (Gen 3 radiused block)",
            "recoil_spring_lifespan": "3,000 to 5,000 rounds replacement interval",
            "trigger_pull_standard": "11.5–12.5 lbs Double Action / 4.5–5.0 lbs Single Action",
            "trigger_pull_d_spring": "8.0–8.5 lbs Double Action with factory 92D spring (100% primer ignition reliability)",
            "barrel_rifling": "6 grooves, right-hand twist 1:9.8\" (250mm)",
            "oversized_hammer_pin": "92FS enlarged hammer pin head engages slide bottom groove to block slide separation"
        },
        "stoppages": [
            {
                "position": "Dead Trigger / No Hammer Cocking upon Trigger Pull",
                "short_desc": "Trigger pulls all the way to frame with zero spring resistance; hammer does not move",
                "causes": [
                    "Trigger bar spring leg slipped out of groove on underside of trigger bar (frequently occurs when right grip panel is removed or loosened)."
                ],
                "action": "Armorer Remedy: Remove right grip panel; reseat forward leg of trigger bar spring into its underside slot; verify grip bushing does not pinch spring leg upon re-securing."
            },
            {
                "position": "Sluggish Slide Cycling / Slide Locked Out of Battery",
                "short_desc": "Slide binds or locks rigidly 1/4\" out of battery; will not cycle smoothly",
                "causes": [
                    "Cracked or fractured locking block lug / ear.",
                    "Damaged locking block plunger or fractured plunger retaining pin."
                ],
                "action": "Armorer Remedy: Disassemble barrel assembly; inspect locking block ears under 10x magnification for stress cracks; replace with Beretta Gen 3 radiused locking block kit."
            },
            {
                "position": "Failure to Extract (FTE) / Double Feed",
                "short_desc": "Spent case remains chambered; next round from magazine rams into case rim",
                "causes": [
                    "Heavy carbon fouling baked behind extractor hook pocket.",
                    "Weak or fatigued extractor spring (pull gauge under 8 lbs).",
                    "Chipped or rounded extractor claw edge."
                ],
                "action": "Armorer Remedy: Drift out vertical extractor pin from bottom to top; thoroughly clean carbon cavity behind hook; inspect claw sharpness; install new extractor spring."
            },
            {
                "position": "Decocker / Safety Lever Loose or Failing to Drop Hammer",
                "short_desc": "Safety lever flips down but hammer fails to drop, or right-side lever spins loose",
                "causes": [
                    "Sheared ambidextrous safety lever roll pin.",
                    "Lost safety detent plunger or spring under right safety wing."
                ],
                "action": "Armorer Remedy: Replace roll pin securing right wing to left safety drum; inspect firing pin safety block plunger to ensure it moves freely without binding."
            }
        ],
        "videos": [
            {
                "id": "N6_YyW6n2Gg",
                "title": "Beretta 92FS / M9 Slide Detail Strip & Decocker Assembly",
                "creator": "Brownells Gun Techs",
                "category": "Disassembly & Assembly",
                "url": "https://www.youtube.com/watch?v=N6_YyW6n2Gg",
                "embed_url": "https://www.youtube-nocookie.com/embed/N6_YyW6n2Gg",
                "summary": "Complete slide strip: drifting ambidextrous decocker lever roll pin, extracting right safety wing, left safety drum, firing pin plunger block, and extractor."
            },
            {
                "id": "J9h8Q2-5gFc",
                "title": "Beretta 92FS / M9 Frame Detail Strip & Reassembly",
                "creator": "Midwest Gun Works",
                "category": "Disassembly & Assembly",
                "url": "https://www.youtube.com/watch?v=J9h8Q2-5gFc",
                "embed_url": "https://www.youtube-nocookie.com/embed/J9h8Q2-5gFc",
                "summary": "Removing grips, lanyard loop pin, mainspring and cap, hammer pivot pin, trigger bar, trigger return torsion spring, and magazine release reversal."
            },
            {
                "id": "D-wHq_KzB_4",
                "title": "Locking Block Inspection, Generation ID & Replacement",
                "creator": "Wilson Combat",
                "category": "Armorer Inspection & Tolerances",
                "url": "https://www.youtube.com/watch?v=D-wHq_KzB_4",
                "embed_url": "https://www.youtube-nocookie.com/embed/D-wHq_KzB_4",
                "summary": "Identifying Gen 1 square cuts vs Gen 2/3 radiused cuts; checking locking block lugs under magnification for micro-fractures; measuring frame locking recesses."
            },
            {
                "id": "Q-N8J8nL9k0",
                "title": "Beretta 92FS Enlarged Hammer Pin Safety Inspection",
                "creator": "Small Arms Solutions / Chris Bartocci",
                "category": "Historical & Armorer Safety",
                "url": "https://www.youtube.com/watch?v=Q-N8J8nL9k0",
                "embed_url": "https://www.youtube-nocookie.com/embed/Q-N8J8nL9k0",
                "summary": "Engineering history and armorer inspection of the 92FS oversized hammer pin and slide groove that blocks rearward slide separation."
            },
            {
                "id": "0kHwFvLgT5s",
                "title": "Factory 'D' Hammer Spring Conversion & DA Tuning",
                "creator": "The Armory Channel",
                "category": "Custom Gunsmithing",
                "url": "https://www.youtube.com/watch?v=0kHwFvLgT5s",
                "embed_url": "https://www.youtube-nocookie.com/embed/0kHwFvLgT5s",
                "summary": "Replacing standard mainspring with Beretta 92D spring; drops double-action pull from 12 lbs to smooth 8 lbs with 100% primer ignition."
            },
            {
                "id": "1uN7v8mFqLo",
                "title": "Wilson Combat Short-Reach Trigger Installation",
                "creator": "Wilson Combat",
                "category": "Custom Gunsmithing",
                "url": "https://www.youtube.com/watch?v=1uN7v8mFqLo",
                "embed_url": "https://www.youtube-nocookie.com/embed/1uN7v8mFqLo",
                "summary": "Upgrading trigger shoe to steel contoured short-reach profile and replacing coil mouse-trap spring with encapsulated trigger return unit."
            },
            {
                "id": "yY3kE1pU8bQ",
                "title": "Diagnosing Trigger Bar Spring Disengagement (Dead Trigger)",
                "creator": "Mosin Virus",
                "category": "Troubleshooting & Malfunctions",
                "url": "https://www.youtube.com/watch?v=yY3kE1pU8bQ",
                "embed_url": "https://www.youtube-nocookie.com/embed/yY3kE1pU8bQ",
                "summary": "Correct spring positioning and right grip screw bushing inspection when trigger bar spring unseats."
            },
            {
                "id": "3gX7wH_P9k8",
                "title": "Beretta 92 Extraction & Ejection Malfunctions (FTE)",
                "creator": "Apex Gunsmithing",
                "category": "Troubleshooting & Malfunctions",
                "url": "https://www.youtube.com/watch?v=3gX7wH_P9k8",
                "embed_url": "https://www.youtube-nocookie.com/embed/3gX7wH_P9k8",
                "summary": "Cleaning carbon behind extractor hook, measuring extractor spring tension with armorer pull gauge, and checking fixed ejector blade."
            }
        ]
    },

    "General_Gunsmithing": {
        "name": "General Gunsmithing & Workshop Disciplines",
        "subtitle": "Headspace, Chamber Casting, Machining, Bluing & Diagnostics",
        "manufacturer": "General Workshop",
        "category": "Workshop Disciplines",
        "models": ["All Firearms", "Bolt Actions", "Lever Actions", "Semi-Autos", "Revolvers"],
        "calibers": ["Rimmed", "Rimless", "Belted Magnums", "Straight Wall"],
        "key_tasks": ["Headspace (Go / No-Go / Field)", "Cerrosafe Chamber Casting", "Slow Rust & Hot Caustic Bluing", "11° Target Crowning", "Glass Bedding", "Sear Stoning"],
        "specs": {
            "headspace_safety_rule": "Bolt MUST close on GO gauge; bolt must NOT close on NO-GO with light finger pressure; bolt closing on FIELD is DANGEROUS/UNSAFE",
            "cerrosafe_casting_window": "Pour alloy at 160°–190°F. Measure cast at EXACTLY 1 hour after pouring for 1:1 true chamber dimension",
            "barrel_target_crown": "11-degree or recessed target crown cut strictly concentric to bore axis",
            "action_glass_bedding": "Stress-free epoxy action bedding using aluminum pillars; 0.030\" tape clearance around barrel shank",
            "sear_stoning_rule": "Never alter primary sear engagement angle (keep 90°); use hard Arkansas stones only to eliminate machine marks",
            "fastener_driver_standard": "Hollow-ground parallel-flatted gunsmith driver bits ONLY; never use wedge-shaped carpenter screwdrivers"
        },
        "stoppages": [
            {
                "position": "Excessive Headspace / Primer Back-Out or Case Head Separation",
                "short_desc": "Fired cases show backed-out primers, bright ring above web, or complete circumferential case separation",
                "causes": [
                    "Bolt lug or receiver locking recess setback/wear.",
                    "Chamber reamed excessively deep.",
                    "Mismatched surplus military bolt swapped without checking headspace."
                ],
                "action": "Armorer Remedy: Strip bolt extractors; insert GO, NO-GO, and FIELD gauges. If bolt closes on FIELD: set barrel shoulder back on lathe and rechamber with finish reamer."
            },
            {
                "position": "Stuck Cartridge Case in Chamber",
                "short_desc": "Case seized tightly in chamber; extractor slipped over rim or sheared rim off",
                "causes": [
                    "Rusted or pitted chamber rings creating mechanical undercut.",
                    "Overpressure reload expanding brass beyond elasticity limits.",
                    "Debris or varnish buildup from steel-cased surplus ammo."
                ],
                "action": "Armorer Remedy: Use broken-shell extractor tool or pour Cerrosafe low-melt plug from muzzle into case neck; hone chamber with 400-grit flex-hone on cleaning rod."
            },
            {
                "position": "Damaged / Buggered Screw Slots (Cam-Out Damage)",
                "short_desc": "Screw head slots distorted, burred, or stripped",
                "causes": [
                    "Use of wedge-shaped tapered carpenter screwdrivers that ride up out of slot under torque."
                ],
                "action": "Armorer Remedy: Grind custom parallel hollow-ground driver bit matching slot width and depth exactly; dress burred screw heads with fine needle files and cold blue."
            },
            {
                "position": "Bluing Failure: Streaking, Splotches or Incomplete Conversion",
                "short_desc": "Steel emerges from bluing tank with red/brown spots, uneven mottling, or streaks",
                "causes": [
                    "Residual oil, fingerprint grease, or silicon contamination on steel.",
                    "Caustic tank temperature outside operating range (must be 285°–292°F).",
                    "Depleted sodium nitrate salt concentration."
                ],
                "action": "Armorer Remedy: Strip finish completely; soak in boiling sodium metasilicate degreaser; handle exclusively with clean stainless wire or degreased nitrile gloves."
            }
        ],
        "videos": [
            {
                "id": "J98Fk7s2L_8",
                "title": "Headspace Gauging Demystified: Go, No-Go & Field Gauges",
                "creator": "Mark Novak / Anvil Gunsmithing",
                "category": "Diagnostics & Headspace",
                "url": "https://www.youtube.com/watch?v=J98Fk7s2L_8",
                "embed_url": "https://www.youtube-nocookie.com/embed/J98Fk7s2L_8",
                "summary": "Complete theory and demonstration of headspace gauges across rimmed (.303 Brit), rimless (.30-06, .308), and belted calibers."
            },
            {
                "id": "vV1p8_oG9_Q",
                "title": "Chamber Casting with Cerrosafe Low-Melt Alloy",
                "creator": "Mark Novak / Anvil Gunsmithing",
                "category": "Chamber Diagnostics",
                "url": "https://www.youtube.com/watch?v=vV1p8_oG9_Q",
                "embed_url": "https://www.youtube-nocookie.com/embed/vV1p8_oG9_Q",
                "summary": "Casting unknown chambers with Cerrosafe (160°-190°F), bore plugging, pouring, and the crucial 1-hour dimension measurement window."
            },
            {
                "id": "48S-1jJ9t0k",
                "title": "Traditional Slow Rust Bluing: Chemistry, Rust Box & Carding",
                "creator": "Mark Novak / Anvil Gunsmithing",
                "category": "Metal Finishing & Restoration",
                "url": "https://www.youtube.com/watch?v=48S-1jJ9t0k",
                "embed_url": "https://www.youtube-nocookie.com/embed/48S-1jJ9t0k",
                "summary": "Acid rusting, sweating in humidity cabinet, boiling to convert red Fe2O3 to deep black Fe3O4, and wire wheel carding."
            },
            {
                "id": "kY0R3M_P-58",
                "title": "Hot Caustic Salt Bluing Setup, Chemistry & Safety",
                "creator": "MidwayUSA / Larry Potterfield",
                "category": "Metal Finishing & Restoration",
                "url": "https://www.youtube.com/watch?v=kY0R3M_P-58",
                "embed_url": "https://www.youtube-nocookie.com/embed/kY0R3M_P-58",
                "summary": "Operating hot bluing tanks at 285°-292°F using sodium hydroxide and nitrate salts with boil-over precautions."
            },
            {
                "id": "eG_4kM_x900",
                "title": "Cutting an 11-Degree Target Barrel Crown",
                "creator": "MidwayUSA / Larry Potterfield",
                "category": "Machining & Barrel Work",
                "url": "https://www.youtube.com/watch?v=eG_4kM_x900",
                "embed_url": "https://www.youtube-nocookie.com/embed/eG_4kM_x900",
                "summary": "Facing and crowning a rifle muzzle on lathe or with Manson hand cutter and brass pilots concentric to bore."
            },
            {
                "id": "VwK9T_P22o4",
                "title": "Rifle Action Glass Bedding & Pillar Bedding",
                "creator": "Brownells Gun Techs",
                "category": "Precision Stock Fitting",
                "url": "https://www.youtube.com/watch?v=VwK9T_P22o4",
                "embed_url": "https://www.youtube-nocookie.com/embed/VwK9T_P22o4",
                "summary": "Stress-free action bedding with Acraglas Gel, aluminum pillars, clay dams, and PVA release agents."
            },
            {
                "id": "LqN6s9O8Pz8",
                "title": "Precision Trigger Sear Stoning with True-Angle Jigs",
                "creator": "MidwayUSA / Larry Potterfield",
                "category": "Trigger & Sear Tuning",
                "url": "https://www.youtube.com/watch?v=LqN6s9O8Pz8",
                "embed_url": "https://www.youtube-nocookie.com/embed/LqN6s9O8Pz8",
                "summary": "Using Norton hard Arkansas stones and fixture jigs to stone sears without altering critical 90° angles."
            },
            {
                "id": "yW6eL8Bq96E",
                "title": "Custom Grinding Screwdrivers for Gunsmith Fasteners",
                "creator": "Brownells Gun Techs",
                "category": "Armorer Tooling",
                "url": "https://www.youtube.com/watch?v=yW6eL8Bq96E",
                "embed_url": "https://www.youtube-nocookie.com/embed/yW6eL8Bq96E",
                "summary": "Grinding parallel hollow-ground screwdriver bits to fit exact screw slot dimensions and eliminate cam-out."
            }
        ]
    }
}
