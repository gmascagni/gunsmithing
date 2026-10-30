"""
Battle Rifles & Historic Military Classics Catalog Module for Armorer's Workbench.
Covers FN FAL, Lewis Gun, Mauser 98k, Mosin-Nagant 91/30, Lee-Enfield No. 4, and Springfield 1903.
"""

from typing import Dict, Any

BATTLE_HISTORIC: Dict[str, Dict[str, Any]] = {
    "FN_FAL_L1A1": {
        "name": "FN FAL / L1A1 SLR Battle Rifle",
        "subtitle": "'The Right Arm of the Free World' (7.62x51mm NATO Metric & Inch Pattern)",
        "manufacturer": "FN Herstal / Royal Small Arms Factory Enfield / Imbel / DSA",
        "category": "Rifles & Carbines",
        "action_type": "Short-Stroke Gas Piston Tilting-Breechblock Battle Rifle",
        "operating_actions": ["Short-Stroke Gas Piston", "Tilting Breechblock", "Break-Open Receiver"],
        "types": ["Rifles & Carbines", "Military Battle Rifle", "Cold War Classic"],
        "caliber_categories": ["7.62x51mm NATO", ".308 Winchester"],
        "era": "Cold War Free World Standard (1953–Present)",
        "models": ["FAL 50.00 (Standard)", "FAL 50.63 (Para Folding Stock)", "L1A1 SLR (British Commonwealth Inch)", "StG 58 (Austrian)"],
        "calibers": ["7.62x51mm NATO", ".308 Winchester"],
        "key_tasks": ["Locking Shoulder Sizing (Pin Gauge Headspacing)", "Gas Regulator Vent Sleeve Calibration (1–7 clicks)", "Hinge Pin Takedown & Break-Open Action", "Tilting Bolt Lug Lapping", "Recoil Spring Tube Servicing"],
        "specs": {
            "headspace_method": "Headspace is set by pressing a precision-ground cylindrical locking shoulder (available in 0.001\" increments from 0.254\" to 0.272\") into the receiver floor",
            "gas_regulator_calibration": "Gas sleeve vents excess gas. Standard armorer calibration: Open regulator wide until rifle fails to lock open on empty magazine, then close regulator sleeve 2 clicks for 100% reliable combat operation",
            "bolt_locking": "Rear of breechblock drops downward into locking shoulder recess in floor of receiver",
            "metric_vs_inch": "Metric magazines have small front beak; Inch magazines have large heavy brazed lug (Inch receivers can use Metric mags, but not vice-versa)"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Violent Over-Gassed Ejection / Blown Case Heads",
                "short_desc": "Rifle ejects brass with extreme violence, tearing extractor rim or kicking shooter hard",
                "causes": [
                    "Gas regulator sleeve screwed shut (vent hole completely covered).",
                    "Shooting hot commercial ammunition with military gas setting."
                ],
                "action": "Immediate Action: Rotate gas regulator collar clockwise (numbers getting higher) to open vent port and release excess gas until ejection drops to a comfortable 10–12 feet."
            }
        ],
        "videos": [
            {
                "id": "f8FNFALx9M2w",
                "title": "FN FAL Complete Armorer Headspace Setting & Locking Shoulder Pin Gauging",
                "creator": "Mark Novak / Anvil Gunsmithing",
                "category": "Battle Rifle Armorer",
                "url": "https://www.youtube.com/results?search_query=FN+FAL+%2F+L1A1+SLR+Battle+Rifle+FN+FAL+Complete+Armorer+Headspace+Setting+%26+Locking+Shoulder+Pin+Gauging+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=FN+FAL+%2F+L1A1+SLR+Battle+Rifle+FN+FAL+Complete+Armorer+Headspace+Setting+%26+Locking+Shoulder+Pin+Gauging+gunsmithing+armorer",
                "summary": "Step-by-step masterclass on setting headspace on the FN FAL using Clymer gauges, pin gauge rods, selecting locking shoulders, and tuning the gas collar."
            }
        ]
    },

    "Lewis_Automatic_Machine_Gun": {
        "name": "Lewis Automatic Machine Gun",
        "subtitle": "Model 1914 / 1917 / 1918 (.303 British & .30-06 Springfield)",
        "manufacturer": "Savage Arms / BSA (Birmingham Small Arms)",
        "category": "Machine Guns",
        "action_type": "Gas-Operated Machine Gun (Open Bolt)",
        "operating_actions": ["Gas-Operated", "Open-Bolt", "Rack & Pinion Clock Spring Return"],
        "types": ["Machine Guns", "Automatic Weapons", "Historic Military"],
        "caliber_categories": [".303 British", ".30-06 Springfield"],
        "era": "Historic Military (WWI / WWII)",
        "models": ["Model 1914 (BSA .303)", "Model 1917 (Savage Arms .30-06)", "Model 1918 Aircraft (Stripped Radiator)"],
        "calibers": [".303 British (Mk VII)", ".30-06 Springfield (US M1917)"],
        "key_tasks": ["Return Mainspring Tension Calibration (12–14 lbs)", "Striker (Firing Pin) Protrusion Check (0.050\"–0.060\")", "Gas Regulator Cup Rotation ('S' / 'L')", "Field Stripping & Rack Timing", "47-Round Pan Magazine Servicing"],
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
                "creator": "Mark Novak / Anvil Gunsmithing",
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
            }
        ]
    },

    "Mauser_Karabiner_98k": {
        "name": "Mauser Karabiner 98k / Gewehr 98",
        "subtitle": "The Benchmark of Bolt-Action Military Rifles (7.92x57mm / 8mm Mauser)",
        "manufacturer": "Mauser Werke / Sauer / Steyr / DWM",
        "category": "Rifles & Carbines",
        "action_type": "Controlled Round Feed (CRF) 3-Lug Bolt Action",
        "operating_actions": ["Controlled Round Feed", "Third Safety Lug", "3-Position Flag Safety"],
        "types": ["Rifles & Carbines", "Historic Military Battle Rifle", "Bolt Action Foundation"],
        "caliber_categories": ["7.92x57mm Mauser (8mm)"],
        "era": "Military & Sporting Benchmark (1898–Present)",
        "models": ["Gewehr 98 (WWI)", "Karabiner 98k (WWII Standard)", "Yugoslavian M48", "Swedish Mauser M96 (6.5x55mm)"],
        "calibers": ["7.92x57mm Mauser (8x57 IS)", "6.5x55mm Swedish", "7x57mm Mauser"],
        "key_tasks": ["Bolt Shroud Disassembly (Flag Safety Mid-Position)", "Claw Extractor Removal without Bending", "Floorplate Cartridge Release (Bullet Tip Catch)", "Stock Recoil Crossbolt Torquing", "Headspace Gauging"],
        "specs": {
            "safety_system": "Three-position flag safety on bolt shroud (Left: Fire; Vertical: Disassembly & safe bolt operation; Right: Complete lock)",
            "third_safety_lug": "Auxiliary locking lug at rear of bolt body enters bridge recess in catastrophic failure",
            "gas_shield": "Flanged bolt sleeve directs escaping gas away from shooter's face into magazine well",
            "extractor_collar": "Spring steel collar rotates around bolt body capturing the long spring claw extractor"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Decocked Bolt Removed from Action (Bolt Shroud Locked)",
                "short_desc": "Bolt was removed with safety in FIRE position and decocked; cocking cam slipped forward and cannot be reinserted into receiver",
                "causes": [
                    "Accidentally twisting bolt shroud or pulling trigger while extracting bolt."
                ],
                "action": "Immediate Action: Catch cocking piece bottom lug on edge of wooden workbench. Pull bolt body forward with muscle until cocking piece snaps into full-cock notch. Turn flag safety up to vertical, then slide bolt smoothly into receiver."
            }
        ],
        "videos": [
            {
                "id": "m8Mau98x9M2w",
                "title": "Mauser 98 Complete Disassembly, Claw Extractor & Safety Tuning",
                "creator": "Mark Novak / Anvil Gunsmithing",
                "category": "Historic Bolt Gunsmithing",
                "url": "https://www.youtube.com/results?search_query=Mauser+Karabiner+98k+%2F+Gewehr+98+Mauser+98+Complete+Disassembly%2C+Claw+Extractor+%26+Safety+Tuning+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Mauser+Karabiner+98k+%2F+Gewehr+98+Mauser+98+Complete+Disassembly%2C+Claw+Extractor+%26+Safety+Tuning+gunsmithing+armorer",
                "summary": "Teardown of the Mauser 98 bolt: lifting and removing the claw extractor without bending, disassembling the firing pin spring, and adjusting the flag safety."
            }
        ]
    },

    "Mosin_Nagant_9130": {
        "name": "Mosin-Nagant Model 1891/30 & M44",
        "subtitle": "Soviet Military Workhorse (7.62x54mmR Russian Rimmed)",
        "manufacturer": "Izhevsk / Tula / Sestroretsk / Chatellerault",
        "category": "Rifles & Carbines",
        "action_type": "Bolt-Action Two-Piece Bolthead Rifle",
        "operating_actions": ["Push-Feed Rotating Bolt Head", "Rimmed Cartridge Interrupter", "Cock-on-Opening"],
        "types": ["Rifles & Carbines", "Military Surplus", "Historic Battle Rifle"],
        "caliber_categories": ["7.62x54mmR"],
        "era": "Czarist to WWII Russian Legend (1891–1965+)",
        "models": ["Model 1891 'Three-Line'", "Model 1891/30 Standard Infantry", "M38 Carbine", "M44 Side-Folding Bayonet", "PU Sniper"],
        "calibers": ["7.62x54mmR (Rimmed)"],
        "key_tasks": ["Interrupter/Ejector Tuning (Rim-Jam Elimination)", "Firing Pin Protrusion Teardown Gauge (0.075\"–0.095\")", "Sticky Bolt Fluting / Chamber Scrub", "Connecting Bar & Bolt Head Alignment", "Trigger Spring Shimming"],
        "specs": {
            "interrupter_design": "Spring-steel leaf on left receiver wall separates top cartridge from cartridge below it, preventing rim-lock jams with rimmed brass",
            "firing_pin_protrusion": "Must be gauged using the Mosin armorer multi-tool notched cutout: 0.075\" minimum (passes shallow notch) / 0.095\" maximum (must not clear deep notch)",
            "bolt_construction": "Unique 3-piece bolt: separate floating bolt head, connecting bar guide, and main bolt body with cocking knob",
            "safety_mechanism": "Pull cocking knob full rearward and rotate counter-clockwise to hook over receiver wall"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Sticky Bolt Syndrome (Requires 2x4 Wooden Board to Open Bolt)",
                "short_desc": "Rifle fires, but bolt handle is cemented shut; user cannot lift bolt handle by hand",
                "causes": [
                    "Baked-on dried cosmoline and shellac lining the steel chamber walls.",
                    "Steel cartridge case lacquer melting and bonding to rough chamber surfaces."
                ],
                "action": "Gunsmith Action: Chuck 20-gauge brass shotgun brush on drill rod section. Dip in lacquer thinner and acetone. Run drill in chamber for 2 minutes at 600 RPM. Wipe out with clean patches. Mirror-polish chamber with metal polish paste."
            },
            {
                "position": "Stoppage 2: Rim-Lock / Rim-Jam (Bolt Jammed Mid-Push)",
                "short_desc": "Top cartridge rim is trapped behind the rim of the second round in magazine; bolt cannot push round forward",
                "causes": [
                    "Bent or fatigued interrupter leaf spring allowing second round to rise prematurely into the top feedway."
                ],
                "action": "Gunsmith Action: Disassemble action from stock. Remove interrupter screw. Inspect interrupter blade. Bend leaf spring outward slightly to increase spring tension holding the second cartridge down while top cartridge is chambered."
            }
        ],
        "videos": [
            {
                "id": "m8Mos9130x9Lw",
                "title": "Mosin-Nagant Complete Disassembly, Interrupter Fix & Chamber Polish",
                "creator": "Iraqveteran8888 Bench",
                "category": "Surplus Restoration",
                "url": "https://www.youtube.com/results?search_query=Mosin-Nagant+Model+1891%2F30+%26+M44+Mosin-Nagant+Complete+Disassembly%2C+Interrupter+Fix+%26+Chamber+Polish+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Mosin-Nagant+Model+1891%2F30+%26+M44+Mosin-Nagant+Complete+Disassembly%2C+Interrupter+Fix+%26+Chamber+Polish+gunsmithing+armorer",
                "summary": "Full teardown of the Mosin-Nagant 91/30: using the teardrop armorer tool to set firing pin depth, curing sticky bolt syndrome, and tuning the interrupter."
            }
        ]
    },

    "Lee_Enfield_No4": {
        "name": "Lee-Enfield No. 4 Mk I & SMLE Mk III",
        "subtitle": "British Commonwealth Rapid-Fire Battle Rifle (.303 British)",
        "manufacturer": "RSAF Enfield / BSA / Long Branch / Savage-Stevens",
        "category": "Rifles & Carbines",
        "action_type": "Cock-on-Closing Rear-Locking Bolt Action",
        "operating_actions": ["Cock-on-Closing", "Rear Locking Lugs", "Removable Numbered Bolt Heads"],
        "types": ["Rifles & Carbines", "Historic Military Battle Rifle", "Commonwealth Legend"],
        "caliber_categories": [".303 British"],
        "era": "British Empire Service (1895–1957+)",
        "models": ["SMLE No. 1 Mk III* (WWI)", "Rifle No. 4 Mk I (WWII)", "No. 4 Mk 2", "No. 5 Mk I 'Jungle Carbine'"],
        "calibers": [".303 British (Mk VII Rimmed)"],
        "key_tasks": ["Numbered Bolt Head Swapping (0, 1, 2, 3 Headspace)", "Striker Collar & Firing Pin Removal Tool", "Forend Stock Draw Block Bedding", "Magazine Feed Lip Bending Tool", "Two-Stage Military Trigger Tuning"],
        "specs": {
            "headspace_adjustment": "Set by unscrewing and swapping numbered bolt heads: Size 0 (standard), Size 1 (+0.003\"), Size 2 (+0.006\"), Size 3 (+0.009\")",
            "headspace_limits": "GO = 0.058\" / NO-GO = 0.064\" / FIELD (Military Service Limit) = 0.070\"",
            "cock_on_closing": "Bolt cocks on the forward stroke (allowing the famous 'Mad Minute' 30+ aimed shots in 60 seconds)",
            "rear_locking_lugs": "Dual locking lugs at rear of bolt body; produces natural micro-flex in receiver, requiring exact forend draw block bedding"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Excessive Headspace / Primer Back-Out on .303",
                "short_desc": "Fired casings show stretched case head web or primer backing out of pocket by 0.010\"",
                "causes": [
                    "Wear on rear receiver locking shoulders from decades of firing high-pressure military cordite ammunition.",
                    "Worn Size 0 bolt head."
                ],
                "action": "Gunsmith Action: Measure headspace with 0.064\" NO-GO gauge. If bolt closes on NO-GO, unscrew bolt head from bolt body. Replace Size 0 bolt head with Size 1 or Size 2 bolt head. Re-gauge until bolt resists NO-GO gauge."
            }
        ],
        "videos": [
            {
                "id": "e8LeeNo4x9M2w",
                "title": "Lee-Enfield No. 4 Mk I Headspace, Bolt Heads & Complete Teardown",
                "creator": "Mark Novak / Anvil Gunsmithing",
                "category": "Enfield Gunsmithing",
                "url": "https://www.youtube.com/results?search_query=Lee-Enfield+No.+4+Mk+I+%26+SMLE+Mk+III+Lee-Enfield+No.+4+Mk+I+Headspace%2C+Bolt+Heads+%26+Complete+Teardown+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Lee-Enfield+No.+4+Mk+I+%26+SMLE+Mk+III+Lee-Enfield+No.+4+Mk+I+Headspace%2C+Bolt+Heads+%26+Complete+Teardown+gunsmithing+armorer",
                "summary": "Mark Novak explains the unique Lee-Enfield numbered bolt head system, measuring rimmed headspace, disassembly of the striker and spring, and bedding draw blocks."
            }
        ]
    },

    "Springfield_M1903": {
        "name": "Springfield M1903 / M1903A3",
        "subtitle": "U.S. Rifle, Caliber .30, Model of 1903 (.30-06 Springfield)",
        "manufacturer": "Springfield Armory / Rock Island / Remington / Smith-Corona",
        "category": "Rifles & Carbines",
        "action_type": "Modified Mauser Controlled Round Feed Bolt Action",
        "operating_actions": ["Modified Mauser CRF", "Magazine Cut-Off Switch", "Two-Piece Striker Sleeve"],
        "types": ["Rifles & Carbines", "Historic Military Battle Rifle", "WWI / WWII Legend"],
        "caliber_categories": [".30-06 Springfield"],
        "era": "American Military Standard (1903–1945+)",
        "models": ["M1903 Standard (Ladder Sight)", "M1903 Mark I (Pedersen Device Cut)", "M1903A3 (Aperture Receiver Sight)", "M1903A4 Sniper Rifle"],
        "calibers": [".30-06 Springfield (M1906 / M2 Ball)"],
        "key_tasks": ["Low-Number Receiver Metallurgy Safety Verification", "Magazine Cut-Off Switch Detent Service", "Two-Piece Firing Pin Rod Assembly", "Coned Breech Headspace Checking", "Stock Recoil Lug Bedding"],
        "specs": {
            "low_number_warning": "CRITICAL ARMORER SAFETY WARNING: Low-number receivers (Springfield Armory under serial # 800,000; Rock Island under # 285,507) were single heat-treated case-hardened steel and prone to brittle shattering. DO NOT shoot heavy modern ammunition in low-number rifles",
            "high_number_receivers": "Double heat-treated (Springfield 800,000–1,275,767) and Nickel steel (above 1,275,767; all Remington and Smith-Corona 1903A3s) are 100% safe for standard service ammunition",
            "magazine_cutoff": "Three-position thumb lever (ON: feeds from internal 5-round magazine; OFF: magazine locked in reserve for single-shot loading; MID: allows bolt removal)"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Bolt Will Not Pull Back Out of Receiver for Cleaning",
                "short_desc": "Shooter pulls bolt handle rearward to remove bolt, but it hits a positive mechanical stop",
                "causes": [
                    "Magazine cutoff lever is set in ON or OFF position instead of center horizontal REMOVE position."
                ],
                "action": "Immediate Action: Look at left rear of receiver. Flip magazine cutoff lever to the exact center horizontal position (halfway between ON and OFF). Pull bolt straight back out of receiver."
            }
        ],
        "videos": [
            {
                "id": "s8M1903x9M2w",
                "title": "Springfield M1903 Complete Disassembly & Low-Number Safety",
                "creator": "Brownells Gunsmithing Bench",
                "category": "Military Bolt Action",
                "url": "https://www.youtube.com/results?search_query=Springfield+M1903+%2F+M1903A3+Springfield+M1903+Complete+Disassembly+%26+Low-Number+Safety+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Springfield+M1903+%2F+M1903A3+Springfield+M1903+Complete+Disassembly+%26+Low-Number+Safety+gunsmithing+armorer",
                "summary": "Teardown of the 1903 Springfield: examining serial number ranges for metallurgy safety, two-piece firing pin service, and tuning the magazine cutoff."
            }
        ]
    }
}
