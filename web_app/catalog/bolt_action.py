"""
Bolt Action Precision & Hunting Rifles Catalog Module for Armorer's Workbench.
Covers Remington 700, Winchester 70, Tikka T3x, Savage 110, and Ruger American.
"""

from typing import Dict, Any

BOLT_ACTION: Dict[str, Dict[str, Any]] = {
    "Remington_700_Rifles": {
        "name": "Remington Model 700 Rifles",
        "subtitle": "The World's Benchrest & Tactical Standard (.308 Win, .30-06, 6.5 Creedmoor, .223)",
        "manufacturer": "Remington Arms / RemArms",
        "category": "Rifles & Carbines",
        "action_type": "Push-Feed 2-Lug Bolt Action",
        "operating_actions": ["Bolt Action", "Push Feed", "Three Rings of Steel"],
        "types": ["Rifles & Carbines", "Precision Sniper Rifle", "Hunting Rifle"],
        "caliber_categories": [".308 Winchester", ".30-06 Springfield", "6.5 Creedmoor", ".223 Remington"],
        "era": "Modern Precision Standard (1962–Present)",
        "models": ["Model 700 BDL (Deluxe)", "Model 700 SPS (Synthetic)", "Model 700 Police (PSS / 5R)", "M24 SWS (US Army)", "M40A1–A6 (USMC)"],
        "calibers": [".308 Winchester", ".30-06 Springfield", "6.5 Creedmoor", ".300 Win Mag", ".223 Remington"],
        "key_tasks": ["Action Screw Torque (Front 55–65 in-lbs, Rear 45 in-lbs)", "Bolt Shroud Disassembly (Shoelace / Tool Method)", "Recoil Lug Alignment Jig Setup", "Pillar & Glass Bedding Action", "Timney / TriggerTech Trigger Upgrade"],
        "specs": {
            "three_rings_of_steel": "Remington safety design: Recessed bolt face enclosed by barrel counterbore, enclosed by thick front receiver ring",
            "action_screws_torque": "Front action screw: 55 to 65 in-lbs (into front receiver ring); Rear action screw: 45 in-lbs (do NOT overtighten rear to prevent binding rear tang)",
            "extractor_design": "Riveted circular spring-steel C-clip snapped into groove inside bolt face recess",
            "barrel_threads": "1-1/16\" x 16 TPI (Threads Per Inch) with 60° V-thread profile",
            "headspace_308_win": "GO = 1.6300\", NO-GO = 1.6340\", FIELD = 1.6380\""
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Walker Trigger Accidental Discharge on Safety Release",
                "short_desc": "Moving safety from SAFE to FIRE causes rifle to fire without finger touching trigger",
                "causes": [
                    "Vintage pre-2006 Walker trigger design where connector floats free from trigger shoe; dirt, dried grease, or over-adjusted sear engagement allows connector to slip off sear when safety cam lifts.",
                    "User backing out sear engagement screw to lighten trigger pull."
                ],
                "action": "Immediate Action: DANGEROUS CONDITION. Never load rifle. Gunsmith Action: Mandatory upgrade: Remove factory Walker trigger group. Install modern enclosed sear trigger (TriggerTech Primary or Timney 510) featuring true captured sear design and zero creep."
            },
            {
                "position": "Stoppage 2: Riveted Extractor Slips Off Cartridge Rim",
                "short_desc": "Bolt pulls rearward but fails to extract fired case from chamber",
                "causes": [
                    "Broken or collapsed circular spring-steel extractor clip in bolt face.",
                    "Chamber corrosion creating high extraction force."
                ],
                "action": "Gunsmith Action: Use Remington extractor riveting tool to install fresh factory spring clip, or machine bolt face for Sako-style or M16-style sliding claw extractor conversion."
            }
        ],
        "videos": [
            {
                "id": "r8M700x9B2w",
                "title": "Remington 700 Bolt Disassembly, Cleaning & Firing Pin Service",
                "creator": "Brownells Gunsmithing Bench",
                "category": "Bolt Teardown",
                "url": "https://www.youtube.com/results?search_query=Remington+Model+700+Rifles+Remington+700+Bolt+Disassembly%2C+Cleaning+%26+Firing+Pin+Service+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Remington+Model+700+Rifles+Remington+700+Bolt+Disassembly%2C+Cleaning+%26+Firing+Pin+Service+gunsmithing+armorer",
                "summary": "Step-by-step teardown of the Remington 700 bolt using the coin or shoelace method, checking firing pin protrusion, and cleaning the firing pin spring."
            }
        ]
    },

    "Winchester_Model_70": {
        "name": "Winchester Model 70",
        "subtitle": "'The Rifleman's Rifle' (Pre-64 & Classic Controlled Round Feed .30-06 / .270)",
        "manufacturer": "Winchester Repeating Arms",
        "category": "Rifles & Carbines",
        "action_type": "Controlled Round Feed (CRF) Mauser-Pattern Bolt Action",
        "operating_actions": ["Controlled Round Feed", "Mauser Claw Extractor", "3-Position Wing Safety"],
        "types": ["Rifles & Carbines", "Dangerous Game Hunting", "American Classic"],
        "caliber_categories": [".30-06 Springfield", ".270 Winchester", ".300 Win Mag", ".375 H&H"],
        "era": "American Hunting Benchmark (1936–Present)",
        "models": ["Pre-64 Model 70 (Collector Gold Standard)", "Classic Super Grade", "Extreme Weather SS", "Featherweight"],
        "calibers": [".30-06 Springfield", ".270 Winchester", ".308 Win", ".375 H&H Magnum"],
        "key_tasks": ["Mauser Non-Rotating Claw Extractor Tuning", "Coned Breech Headspacing", "3-Position Wing Safety Shroud Timing", "Pre-64 Trigger Stoning", "Glass Bedding Flat-Bottom Receiver"],
        "specs": {
            "controlled_round_feed": "Massive non-rotating spring-steel claw extractor captures cartridge rim as it rises from magazine feed lips, guiding it into chamber",
            "3_position_safety": "Position 1 (Rear): Safe & bolt locked; Position 2 (Mid): Safe & bolt can be opened to unload; Position 3 (Forward): Fire",
            "coned_breech": "Breech face of barrel is chamfered at 45° to match bolt head cone, ensuring bullet tip glides into chamber even if rifle is upside down",
            "receiver_bottom": "Integral flat-bottom receiver with square recoil lug, ideal for epoxy pillar bedding"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Claw Extractor Won't Snap Over Single-Loaded Round",
                "short_desc": "Shooter drops single cartridge directly into chamber and tries to force bolt closed; bolt jams stubbornly",
                "causes": [
                    "Model 70 is pure Controlled Round Feed; extractor claw is designed to capture rim from beneath, not snap over.",
                    "Forcing bolt closed against rim risks chipping claw face."
                ],
                "action": "Immediate Action: Press round into magazine well and feed forward from magazine. Gunsmith Action: Bevel the front entry face of the claw extractor at 45° with fine stone to allow emergency push-feed snap-over without breaking."
            }
        ],
        "videos": [
            {
                "id": "w8Win70x9M2w",
                "title": "Winchester Model 70 Pre-64 Action & 3-Position Safety",
                "creator": "Mark Novak / Anvil Gunsmithing",
                "category": "Classic Gunsmithing",
                "url": "https://www.youtube.com/results?search_query=Winchester+Model+70+Winchester+Model+70+Pre-64+Action+%26+3-Position+Safety+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Winchester+Model+70+Winchester+Model+70+Pre-64+Action+%26+3-Position+Safety+gunsmithing+armorer",
                "summary": "Masterclass on the Model 70 action: coned breech geometry, claw extractor tension, timing the 3-position safety sleeve, and trigger stoning."
            }
        ]
    },

    "Tikka_T3_Rifles": {
        "name": "Tikka T3 & T3x Bolt Action Rifles",
        "subtitle": "Finnish Sub-MOA Precision Hunting & Target Rifles (6.5 CM, .308 Win, .223)",
        "manufacturer": "Tikka (Sako Finland)",
        "category": "Rifles & Carbines",
        "action_type": "70° Throw Push-Feed Precision Bolt Action",
        "operating_actions": ["Bolt Action", "70-Degree Bolt Lift", "Cold Hammer Forged"],
        "types": ["Rifles & Carbines", "Precision Hunting", "Target Match"],
        "caliber_categories": ["6.5 Creedmoor", ".308 Winchester", ".270 Winchester", ".223 Remington"],
        "era": "Modern European Precision (2003–Present)",
        "models": ["T3x Lite", "T3x CTR (Compact Tactical Rifle)", "T3x Superlite", "T3x TAC A1 (Chassis)"],
        "calibers": ["6.5 Creedmoor", ".308 Winchester", ".30-06", ".223 Rem", ".300 Win Mag"],
        "key_tasks": ["Steel Recoil Lug Bedding Upgrade", "Single-Stage Trigger Set Screw Tuning (2–4 lbs)", "Bolt Shroud Replacement (Aluminum)", "Metric Barrel Threading (M17x1)", "Magazine Latch Adjustment"],
        "specs": {
            "sub_moa_guarantee": "Factory 1-MOA 3-shot or 5-shot accuracy guarantee using match factory ammunition",
            "bolt_lift": "Fast 70° bolt throw (providing generous clearance for large high-magnification ocular optics bells)",
            "barrel_threads": "Metric M17x1 or 5/8x24 thread pitch depending on export market",
            "trigger_adjustment": "Single allen head screw inside magazine well adjusts trigger weight cleanly from 2.0 to 4.0 lbs without opening action",
            "recoil_lug": "Separate mortised recoil lug fits into receiver slot (T3x features steel lug; upgrade from early aluminum)"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Accuracy Degradation / Wandering Zero on Heavy Caliber",
                "short_desc": "Sub-MOA rifle begins shooting 2 to 3-inch groups after 200 rounds of heavy magnum recoil",
                "causes": [
                    "Factory aluminum recoil lug indented or deformed by steel receiver recoil shoulder.",
                    "Action screws loose in polymer stock without metal pillars."
                ],
                "action": "Gunsmith Action: Disassemble stock. Discard soft aluminum recoil lug. Install precision-ground stainless steel or titanium recoil lug. Glass bed the action and recoil lug with Devcon 10110 aluminum epoxy; torque action screws to 45 in-lbs."
            }
        ],
        "videos": [
            {
                "id": "t8T3xx9M2wQ",
                "title": "Tikka T3x Complete Disassembly, Trigger Tuning & Upgrades",
                "creator": "Brownells Gunsmithing Bench",
                "category": "Precision Rifle Tuning",
                "url": "https://www.youtube.com/results?search_query=Tikka+T3+%26+T3x+Bolt+Action+Rifles+Tikka+T3x+Complete+Disassembly%2C+Trigger+Tuning+%26+Upgrades+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Tikka+T3+%26+T3x+Bolt+Action+Rifles+Tikka+T3x+Complete+Disassembly%2C+Trigger+Tuning+%26+Upgrades+gunsmithing+armorer",
                "summary": "Teardown of the Tikka T3x: adjusting the trigger pull weight with an allen wrench, replacing the bolt shroud, and installing a steel recoil lug."
            }
        ]
    },

    "Savage_110_Axis": {
        "name": "Savage Model 110 & Axis Series",
        "subtitle": "Barrel Nut Headspace System & AccuTrigger (.308 Win, 6.5 CM, .223, .30-06)",
        "manufacturer": "Savage Arms",
        "category": "Rifles & Carbines",
        "action_type": "Floating Bolt Head Push-Feed Bolt Action",
        "operating_actions": ["Floating Bolt Head", "Barrel Lock Nut System", "AccuTrigger Blade"],
        "types": ["Rifles & Carbines", "Precision Hunting", "DIY Custom Bench"],
        "caliber_categories": [".308 Winchester", "6.5 Creedmoor", ".30-06", ".223 Remington"],
        "era": "American Mass Precision Benchmark (1958–Present)",
        "models": ["Model 110 Apex", "Model 110 Tactical", "110 Ultralite", "Savage Axis II", "Model 10 / 12 Varmint"],
        "calibers": [".308 Winchester", "6.5 Creedmoor", ".30-06", ".223 Remington", ".300 Win Mag"],
        "key_tasks": ["Barrel Lock Nut Headspacing (Go-Gauge & Savage Wrench)", "Floating Bolt Head Interchangeability", "AccuTrigger Return Spring Adjustment (1.5–4.5 lbs)", "AccuStock Aluminum Rail Bedding", "Bolt Lift Kit Installation"],
        "specs": {
            "barrel_nut_system": "Threaded barrel lock nut allows gunsmith to screw barrel into receiver against a GO-gauge and lock it at exact zero headspace with a spanner wrench (no lathe chamber reaming required)",
            "floating_bolt_head": "Bolt head is pinned to body with slight lateral play, allowing bolt lugs to self-align 100% against receiver locking abutments",
            "accutrigger_safety": "AccuRelease center blade prevents sear release if rifle is dropped or jarred",
            "thread_sizes": "Small shank (1.055\" x 20 TPI) / Large shank (1.120\" x 20 TPI on magnums and target actions)"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: AccuTrigger Locks Up (Rifle Cocked but Trigger Stiff)",
                "short_desc": "Shooter pulls trigger blade from an angle, hear click, but gun does not fire; trigger is completely locked",
                "causes": [
                    "User pulled outer trigger shoe without fully depressing the center AccuRelease blade.",
                    "AccuTrigger pull weight spring adjusted below minimum 1.5 lb threshold."
                ],
                "action": "Immediate Action: Lift bolt handle up and down to recock action, then pull straight back on center blade. Gunsmith Action: Use Savage trigger tool to increase spring tension 1/2 turn until sear stays engaged during aggressive bolt cycling."
            }
        ],
        "videos": [
            {
                "id": "s8Sav110x9M2w",
                "title": "Savage 110 Barrel Swap & Headspace Setting with Barrel Nut",
                "creator": "Brownells Gunsmithing Bench",
                "category": "Barrel Nut Gunsmithing",
                "url": "https://www.youtube.com/results?search_query=Savage+Model+110+%26+Axis+Series+Savage+110+Barrel+Swap+%26+Headspace+Setting+with+Barrel+Nut+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Savage+Model+110+%26+Axis+Series+Savage+110+Barrel+Swap+%26+Headspace+Setting+with+Barrel+Nut+gunsmithing+armorer",
                "summary": "Full demonstration of using a barrel nut wrench, Clymer GO/NO-GO gauges, swapping bolt heads from .223 to .308, and tuning the AccuTrigger."
            }
        ]
    },

    "Ruger_American_Rifles": {
        "name": "Ruger American Rifle Series",
        "subtitle": "Power Bedding V-Block Precision Hunting Rifles (.308 Win, 6.5 CM, .223, 300 BLK)",
        "manufacturer": "Ruger",
        "category": "Rifles & Carbines",
        "action_type": "70° 3-Lug Full-Diameter Bolt Action",
        "operating_actions": ["3-Lug Full-Diameter Bolt", "Power Bedding V-Blocks", "Marksman Trigger"],
        "types": ["Rifles & Carbines", "Affordable Precision", "Hunting Rifle"],
        "caliber_categories": [".308 Winchester", "6.5 Creedmoor", "5.56x45mm / .223", "300 AAC Blackout"],
        "era": "Modern CNC Benchmark (2012–Present)",
        "models": ["Ruger American Standard", "Ruger American Predator (Threaded)", "Ruger American Ranch (AR Mag Compatible)", "Generation II"],
        "calibers": [".308 Winchester", "6.5 Creedmoor", "5.56x45mm", "300 AAC Blackout", "7.62x39mm", "6.5 Grendel"],
        "key_tasks": ["Power Bedding V-Block Wedge Torque (60–65 in-lbs)", "Marksman Trigger Adjustment (3–5 lbs)", "Dual Cocking Cam Lubrication", "AR-15 Magazine Well Conversion", "Barrel Nut Takedown"],
        "specs": {
            "power_bedding": "Patented stainless steel V-blocks molded into polymer stock positively locate receiver against recoil",
            "action_screws_torque": "60 to 65 in-lbs front and rear screws; torque must be applied evenly to draw receiver into V-blocks",
            "bolt_design": "One-piece full diameter three-lug bolt with 70° throw and dual cocking cams for smooth opening",
            "marksman_trigger": "Adjustable trigger with safety blade adjustable from 3 to 5 lbs"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Forend Touching Barrel (Loss of Free-Float)",
                "short_desc": "Synthetic stock touches barrel on bipod pressure, creating vertical stringing on target",
                "causes": [
                    "Flexible injection-molded synthetic stock dust cover bending under weight.",
                    "Uneven action screw torque tilting receiver in V-blocks."
                ],
                "action": "Gunsmith Action: Loosen action screws. Re-torque in steps to 60 in-lbs while holding barrel centered. Use Dremel or sanding drum to relieve plastic barrel channel until a dollar bill passes cleanly with bipod loaded."
            }
        ],
        "videos": [
            {
                "id": "r8AmRifx9M2w",
                "title": "Ruger American Rifle Teardown, Bedding & Trigger Adjustment",
                "creator": "Brownells Gunsmithing Bench",
                "category": "Budget Rifle Tuning",
                "url": "https://www.youtube.com/results?search_query=Ruger+American+Rifle+Series+Ruger+American+Rifle+Teardown%2C+Bedding+%26+Trigger+Adjustment+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Ruger+American+Rifle+Series+Ruger+American+Rifle+Teardown%2C+Bedding+%26+Trigger+Adjustment+gunsmithing+armorer",
                "summary": "Teardown of the Ruger American rifle, torque specs for Power Bedding V-blocks, adjusting the Marksman trigger, and bolt service."
            }
        ]
    }
}
