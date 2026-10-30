"""
Shotguns (Pump-Action & Semi-Automatic) Catalog Module for Armorer's Workbench.
Covers Remington 870, Mossberg 500/590, Benelli M4, Beretta 1301/A300, and Browning Citori.
"""

from typing import Dict, Any

SHOTGUNS: Dict[str, Dict[str, Any]] = {
    "Remington_870_Shotgun": {
        "name": "Remington Model 870 Shotguns",
        "subtitle": "The World's Most Produced Pump Shotgun (12 Gauge & 20 Gauge Wingmaster / Express)",
        "manufacturer": "Remington Arms / RemArms",
        "category": "Shotguns",
        "action_type": "Slide-Action / Pump-Action Repeating Shotgun",
        "operating_actions": ["Pump-Action", "Dual Action Bars", "Solid Steel Billet Receiver"],
        "types": ["Shotguns", "Home Defense", "Hunting & Law Enforcement"],
        "caliber_categories": ["12 Gauge", "20 Gauge"],
        "era": "American Pump Standard (1950–Present)",
        "models": ["Model 870 Wingmaster (Polished Blue)", "Model 870 Express", "Model 870 Police Magnum", "Model 870 Tactical"],
        "calibers": ["12 Gauge (2-3/4\" & 3\" Mag)", "20 Gauge"],
        "key_tasks": ["Shell Latch Staking (Dedicated 870 Staking Tool)", "Flex-Tab Anti-Jam Conversion Inspection", "Ejector Spring Riveting Replacement", "Dual Action Bar Timing & Truing", "Magazine Tube Dimple Swaging / Drilling"],
        "specs": {
            "receiver_material": "Milled from a single solid billet of ordnance grade steel for lifetime durability",
            "dual_action_bars": "Twin steel action bars prevent binding or twisting during aggressive pumping",
            "shell_latches": "Left and right spring-steel shell latches staked inside receiver walls hold shells in magazine tube; require specialized staking tool if dislodged",
            "flex_tab_conversion": "Carrier modified with 'U' shaped cutout and modified breech bolt allows user to clear shell over carrier jam by cycling pump",
            "ejector_spring": "Riveted into left inside receiver wall; replaced by drilling old rivet and restaking"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Shell Over Carrier Jam (Action Locked Shut with Live Round)",
                "short_desc": "Cartridge slips out of magazine tube onto top of closed carrier while bolt is locked; pump cannot be racked",
                "causes": [
                    "Weak or improperly staked shell latch allowing cartridge to bypass latch.",
                    "Older pre-1980 non-Flex-Tab bolt and carrier assembly installed."
                ],
                "action": "Immediate Action (with Flex-Tab): Force pump handle rearward with heel of hand; the Flex-Tab notch bends around the cartridge rim, chambering the round. Gunsmith Action: Check left and right shell latch staking using Remington 870 staking tool. Restake latches firmly into receiver grooves."
            },
            {
                "position": "Stoppage 2: Stuck Empty Hull in Chamber After Firing (Sticky Extraction)",
                "short_desc": "Round fires, but pump handle requires mortar strike on ground to extract fired plastic hull",
                "causes": [
                    "Inexpensive steel-based promotional shot shells expanding into rough micro-grooves in chamber.",
                    "Machining ridges inside factory Express chamber."
                ],
                "action": "Gunsmith Action: Wrap 0000 steel wool soaked in Kroil around an old 12-gauge bronze brush attached to cleaning rod section. Chuck into cordless drill. Polish chamber at medium speed for 90 seconds until mirror-smooth. Replace factory MIM extractor with non-MIM forged steel Police extractor."
            }
        ],
        "videos": [
            {
                "id": "r8Rem870x9M2w",
                "title": "Remington 870 Complete Armorer Disassembly & Flex-Tab Fix",
                "creator": "Brownells Gunsmithing Bench",
                "category": "Armorer Detail Strip",
                "url": "https://www.youtube.com/results?search_query=Remington+Model+870+Shotguns+Remington+870+Complete+Armorer+Disassembly+%26+Flex-Tab+Fix+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Remington+Model+870+Shotguns+Remington+870+Complete+Armorer+Disassembly+%26+Flex-Tab+Fix+gunsmithing+armorer",
                "summary": "Full armorer teardown of the Remington 870: trigger plate assembly, shell latches, ejector spring replacement, and polishing sticky chambers."
            }
        ]
    },

    "Mossberg_500_590_Shotgun": {
        "name": "Mossberg 500 & 590 / 590A1 Series",
        "subtitle": "US Military Spec-D Pump Shotgun (12 Gauge & 20 Gauge)",
        "manufacturer": "O.F. Mossberg & Sons",
        "category": "Shotguns",
        "action_type": "Pump-Action Repeating Shotgun with Top Tang Safety",
        "operating_actions": ["Pump-Action", "Ambidextrous Top Tang Safety", "Mil-Spec 3443G"],
        "types": ["Shotguns", "Military & Police", "Home Defense"],
        "caliber_categories": ["12 Gauge", "20 Gauge"],
        "era": "Military & Tactical Benchmark (1960–Present)",
        "models": ["Mossberg 500 Field", "Mossberg 590 Tactical", "Mossberg 590A1 (Heavy Barrel & Metal Trigger Group)", "Shockwave (14\")"],
        "calibers": ["12 Gauge (3\" Chamber)", "20 Gauge", ".410 Bore"],
        "key_tasks": ["Top Tang Safety Slide & Detent Ball Replacement", "Dual Cartridge Stop & Interrupter Timing", "Cleanout Magazine Tube Cap Service (590)", "Metal Trigger Housing Upgrade", "Elevator Assembly Alignment"],
        "specs": {
            "top_tang_safety": "Thumb-operated sliding safety switch located on top tang of receiver (completely ambidextrous and ergonomic)",
            "dual_extractors": "Twin symmetrical extractor claws on bolt (left and right) provide dual purchase on shell rim",
            "cartridge_stops": "Cartridge stop and interrupter are loose floating stamped parts held in place by trigger housing (no staking required unlike Remington)",
            "mil_spec_qualification": "Mossberg 590A1 passed US Military Mil-S-3443G test (3,000 rounds of full-power 00-buck without a single malfunction)"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Double Shell Dump into Receiver (Two Shells Released at Once)",
                "short_desc": "Racking pump drops one shell onto elevator while second shell squirts beneath elevator into action",
                "causes": [
                    "Bent or fatigued cartridge interrupter on left inside receiver wall.",
                    "Trigger group pins walking out, allowing trigger housing to shift."
                ],
                "action": "Gunsmith Action: Drop trigger group. Inspect left-side cartridge interrupter. Measure bend angle against factory gauge. Bend front finger slightly inward to properly catch and hold the second round in magazine tube during pumping."
            }
        ],
        "videos": [
            {
                "id": "m8Mos500x9M2w",
                "title": "Mossberg 500 / 590 Complete Disassembly & Armorer Tuning",
                "creator": "MidwayUSA / Larry Potterfield",
                "category": "Bench Disassembly",
                "url": "https://www.youtube.com/results?search_query=Mossberg+500+%26+590+%2F+590A1+Series+Mossberg+500+%2F+590+Complete+Disassembly+%26+Armorer+Tuning+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Mossberg+500+%26+590+%2F+590A1+Series+Mossberg+500+%2F+590+Complete+Disassembly+%26+Armorer+Tuning+gunsmithing+armorer",
                "summary": "Teardown of the Mossberg 500/590: removing bolt slide and dual extractors, replacing safety detent ball, and tuning the cartridge stop."
            }
        ]
    },

    "Benelli_M4_Shotgun": {
        "name": "Benelli M4 / M1014 Combat Shotgun",
        "subtitle": "US Marine Corps Joint Service Combat Shotgun (12 Gauge ARGO System)",
        "manufacturer": "Benelli Armi / Beretta Holding",
        "category": "Shotguns",
        "action_type": "Auto-Regulating Gas-Operated (ARGO) Semi-Automatic",
        "operating_actions": ["Dual Piston ARGO Gas System", "Rotating Bolt Head", "Self-Cleaning"],
        "types": ["Shotguns", "Combat Shotgun", "Military Special Operations"],
        "caliber_categories": ["12 Gauge"],
        "era": "Modern Combat Benchmark (1999–Present)",
        "models": ["Benelli M4 Tactical (18.5\")", "M1014 USMC Joint Service Shotgun", "M4 Entry (14\")"],
        "calibers": ["12 Gauge (2-3/4\" & 3\" Magnum)"],
        "key_tasks": ["Dual Stainless Gas Piston Carbon Scrape", "Rotating Bolt Locking Lug Inspection", "Collapsible Stock 3-Position Recoil Tube Upgrade", "Carrier Dog Leg Spring Tuning", "Full-Length 7-Round Tube Installation"],
        "specs": {
            "argo_system": "Auto-Regulating Gas-Operated dual stainless steel short-stroke pistons positioned directly forward of chamber (high pressure, low fouling)",
            "self_cleaning": "Pistons blow excess high-pressure gas over their own skirts to self-scrape carbon buildup",
            "rotating_bolt": "Two-lug rotating bolt head derived from combat rifle designs locking directly into barrel extension",
            "extreme_reliability": "Capable of firing over 25,000 rounds of combat ammunition without part replacement"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Short Stroking on Light Trap / Low-Recoil Loads",
                "short_desc": "Gun fails to fully cycle or lock back on empty with light 1-oz target loads under 1150 FPS",
                "causes": [
                    "Benelli M4 ARGO is engineered strictly as a combat military weapon for full-power buckshot and slugs.",
                    "Brand-new weapon before initial 200-round full-power break-in."
                ],
                "action": "Gunsmith Action: Run minimum 100 to 200 rounds of full-power 00-buckshot (1300+ FPS) to burnish action tracks and seat recoil spring. Lightly oil bolt carrier rails with high-performance synthetic lube."
            }
        ],
        "videos": [
            {
                "id": "b8BenM4x9M2w",
                "title": "Benelli M4 Complete Disassembly, ARGO Gas System & Maintenance",
                "creator": "Brownells Gunsmithing Bench",
                "category": "Combat Shotgun Armorer",
                "url": "https://www.youtube.com/results?search_query=Benelli+M4+%2F+M1014+Combat+Shotgun+Benelli+M4+Complete+Disassembly%2C+ARGO+Gas+System+%26+Maintenance+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Benelli+M4+%2F+M1014+Combat+Shotgun+Benelli+M4+Complete+Disassembly%2C+ARGO+Gas+System+%26+Maintenance+gunsmithing+armorer",
                "summary": "Complete walk-through of the Benelli M4: removing dual ARGO pistons, bolt disassembly, magazine tube heating for removal, and trigger group service."
            }
        ]
    },

    "Beretta_A300_1301_Shotgun": {
        "name": "Beretta A300 Outlander & 1301 Tactical",
        "subtitle": "B-LINK Gas-Operated Semi-Automatic Shotguns (12 Gauge)",
        "manufacturer": "Beretta",
        "category": "Shotguns",
        "action_type": "B-LINK Gas Piston Semi-Automatic Shotgun",
        "operating_actions": ["B-LINK Fast Gas System", "Self-Cleaning Scraper Band", "Rotating Bolt"],
        "types": ["Shotguns", "Tactical & Home Defense", "Sporting & Waterfowl"],
        "caliber_categories": ["12 Gauge"],
        "era": "Modern High-Speed Benchmark (2012–Present)",
        "models": ["Beretta 1301 Tactical (Gen 1 / Gen 2)", "Beretta A300 Ultima Patrol", "Beretta A300 Outlander (Hunting)"],
        "calibers": ["12 Gauge (2-3/4\" & 3\" Magnum)"],
        "key_tasks": ["B-LINK Gas Piston Elastic Scraper Ring Service", "Stock Drop & Cast Shim Set Fitting", "Bolt Release Latch Shroud Verification (Gen 1 fix)", "Magazine Tube Extension Clamp Torquing", "Exhaust Valve Spring Inspection"],
        "specs": {
            "blink_gas_system": "Beretta B-LINK system cycles 36% faster than any other semi-auto shotgun (capable of 4 shots in under 1 second)",
            "elastic_scraper_band": "Self-cleaning piston features split steel scraper ring that cleans magazine tube with every stroke",
            "bolt_release_latch": "Gen 2 incorporates redesigned bolt release shroud to prevent accidental double-shell dump on rear latch press",
            "stock_shims": "Included polymer shims adjust drop at heel and left/right cast for tailored shooter eye alignment"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Gen 1 1301 Fatal Shell Dump on Bolt Release Press",
                "short_desc": "Accidental rearward press of bolt release button dumps two shells from magazine into receiver, jamming action",
                "causes": [
                    "Early Gen 1 bolt release lever lacked shroud; pressing rear of lever acted as magazine dump latch."
                ],
                "action": "Gunsmith Action: Install Beretta factory Gen 2 one-piece shrouded bolt release latch or Aridus Industries latch shroud to prevent rearward lever travel."
            }
        ],
        "videos": [
            {
                "id": "b8Ber1301x9M2w",
                "title": "Beretta 1301 Tactical & A300 Complete Teardown & Gas Maintenance",
                "creator": "Brownells Gunsmithing Bench",
                "category": "Gas Shotgun Armorer",
                "url": "https://www.youtube.com/results?search_query=Beretta+A300+Outlander+%26+1301+Tactical+Beretta+1301+Tactical+%26+A300+Complete+Teardown+%26+Gas+Maintenance+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Beretta+A300+Outlander+%26+1301+Tactical+Beretta+1301+Tactical+%26+A300+Complete+Teardown+%26+Gas+Maintenance+gunsmithing+armorer",
                "summary": "Teardown of the Beretta 1301 B-LINK gas system: cleaning the piston and elastic ring, trigger group removal, and stock drop shim adjustment."
            }
        ]
    },

    "Browning_Citori_OverUnder": {
        "name": "Browning Citori / Superposed Over/Under",
        "subtitle": "Classic Boxlock Over/Under Double-Barrel Shotguns (12 & 20 Gauge)",
        "manufacturer": "Browning / Miroku Japan",
        "category": "Shotguns",
        "action_type": "Break-Action Over/Under Double-Barrel Shotgun",
        "operating_actions": ["Break-Action", "Boxlock", "Inertia Single Selective Trigger"],
        "types": ["Shotguns", "Clay Target & Skeet", "Upland Sporting"],
        "caliber_categories": ["12 Gauge", "20 Gauge", "28 Gauge", ".410 Bore"],
        "era": "Fine Sporting Benchmark (1973–Present)",
        "models": ["Citori 725", "Citori CX / CXS", "Superposed Classic (Belgium)", "Citori Hunter"],
        "calibers": ["12 Gauge", "20 Gauge", "28 Gauge", ".410 Bore"],
        "key_tasks": ["Inertia Block Trigger Block Tuning", "Automatic Ejector Timing & Hammer Springs", "Hinge Pin Wear Shimming (Off-Face Repair)", "Top Lever Center Alignment Check", "Locking Bolt Bite Hand-Stoning"],
        "specs": {
            "locking_system": "Full-width transverse tapered locking bolt slides forward through receiver floor into underlugs (wears in, not out)",
            "inertia_trigger": "Recoil from first barrel shifts inertia block to disconnect first sear and connect second sear for second shot",
            "top_lever_position": "Top lever must sit slightly to the RIGHT of center on fresh guns (sign of full locking bolt reserve)",
            "hinge_pin": "Hardened replaceable cylindrical hinge pin; if action becomes loose, hinge pin is turned or replaced with oversize pin"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Second Barrel Fails to Fire on Light Loads (Inertia Trigger No-Reset)",
                "short_desc": "First barrel fires normally, but pulling trigger second time feels dead; second hammer not tripped",
                "causes": [
                    "Extremely light 7/8 oz low-recoil skeet loads fail to produce enough inertia to kick the inertia block rearward.",
                    "Dried grease gumming inertia block pivot."
                ],
                "action": "Immediate Action: Bump buttstock against knee to mechanically reset inertia block. Gunsmith Action: Remove buttstock. Clean trigger group. Lighten inertia block return spring slightly or convert to mechanical trigger conversion (as in Citori 725 FireLite trigger)."
            }
        ],
        "videos": [
            {
                "id": "b8CitOUx9M2w",
                "title": "Browning Citori Over/Under Disassembly & Action Tuning",
                "creator": "MidwayUSA / Larry Potterfield",
                "category": "Over/Under Gunsmithing",
                "url": "https://www.youtube.com/results?search_query=Browning+Citori+%2F+Superposed+Over%2FUnder+Browning+Citori+Over%2FUnder+Disassembly+%26+Action+Tuning+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Browning+Citori+%2F+Superposed+Over%2FUnder+Browning+Citori+Over%2FUnder+Disassembly+%26+Action+Tuning+gunsmithing+armorer",
                "summary": "Teardown of the Browning Citori: removing buttstock, inspecting inertia block and hammer springs, and checking top lever lockup."
            }
        ]
    },
    "Sears_Roebuck_12G_Side_By_Side": {
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
        "calibers": ["12 Gauge (2-3/4\" Chamber & 2-5/8\" Vintage Early Hulls)"],
        "key_tasks": [
            "Chamber Length & Forcing Cone Gauging (Pre-1927 Short Chamber Verification)",
            "Barrel Hook & Hinge Pin Bearing Fit (Fixing Off-Face Action Play)",
            "Top Snap Lever Reserve & Underbolt Engagement Inspection",
            "Double Trigger & Sear Overlap Tuning (Preventing Doubling)",
            "Firing Pin Protrusion & Hemispherical Nose Polishing",
            "Extractor Guide Rod Alignment & Chamber Polishing"
        ],
        "specs": {
            "headspace_rim_recess": "0.054\" GO / 0.064\" NO-GO standard 12G rim recess depth. Maximum allowable FIELD limit: 0.070\".",
            "firing_pin_protrusion": "0.055\" to 0.065\" protrusion through breech face. Tips must be hemispherical and mirror-polished with zero burrs.",
            "hinge_pin_bearing": "0.375\" nominal diameter hardened hinge pin. Barrel lump hook must maintain minimum 80% full bluing contact with zero off-face clearance.",
            "top_lever_reserve": "When barrels are snapped locked shut, top snap lever must rest at 4:30 to 5:00 o'clock (past center right). If lever reaches or passes 6:00 o'clock center, the locking underbolt and barrel lugs are worn.",
            "trigger_pull_weights": "Front Trigger (Right Barrel): 4.0 to 4.5 lbs. Rear Trigger (Left Barrel): 4.5 to 5.0 lbs.",
            "pre_1927_chamber_warning": "CRITICAL ARMORER SAFETY: Many double shotguns manufactured prior to 1927 had 2-5/8\" or 2-1/2\" chambers designed for roll-crimp paper hulls. Firing modern star-crimped 2-3/4\" high-pressure shells causes crimp petals to open into the forcing cone, causing catastrophic chamber pressure spikes (15,000+ psi). Always measure chamber length with a brass chamber gauge or Cerrosafe cast."
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
                "action": "Immediate Action: DO NOT FIRE. An off-face shotgun can fracture the hinge pin or blow out under pressure. Gunsmith Action: 1) Measure gap with feeler gauge (any gap > 0.002\" is unsafe). 2) Turn or replace frame hinge pin with precision oversize pin (+0.005\" to +0.010\"). 3) TIG weld or shim the barrel hook and hand-fit using Prussian blue to achieve 85%+ uniform bearing contact."
            },
            {
                "position": "Stoppage 2: Doubling (Both Barrels Fire Simultaneously on Front Trigger Pull)",
                "short_desc": "Pulling the right barrel trigger causes heavy recoil and simultaneously trips the left barrel hammer",
                "causes": [
                    "Worn or chipped sear notches on hammers.",
                    "Sear engagement depth less than 0.030\".",
                    "Heavy recoil dislodges left sear due to weakened sear spring or accumulated hardened oil."
                ],
                "action": "Immediate Action: Unload weapon and cease firing immediately. Gunsmith Action: Remove buttstock tang bolt. Detail strip locks. Stone sear and hammer notch strictly square with hard Arkansas stone at factory 90° angle—NEVER undercut sear. Replace weakened sear springs and test by dropping cocked receiver on rubber mallet from 6 inches."
            },
            {
                "position": "Stoppage 3: Failure to Fire / Light Primer Indentation on One Barrel",
                "short_desc": "Hammer drops with audible click, but cartridge does not ignite; shallow primer strike",
                "causes": [
                    "Weakened or cracked mainspring (coil spring on Stevens 311 / flat V-spring on Crescent).",
                    "Chipped or shortened firing pin tip (protrusion < 0.050\").",
                    "Hardened dried grease inside firing pin tunnel dampening striker blow."
                ],
                "action": "Immediate Action: Wait 30 seconds with muzzle downrange before opening action (hangfire precaution). Gunsmith Action: Flush firing pin channel with brake cleaner. Measure firing pin protrusion (spec: 0.055\"-0.065\"). If short, machine replacement water-hardening W1 drill rod firing pin, harden to 50 HRC and polish spherical tip. Replace mainspring."
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
}
