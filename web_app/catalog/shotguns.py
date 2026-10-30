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
                "url": "https://www.youtube.com/watch?v=r8Rem870x9M2w",
                "embed_url": "https://www.youtube-nocookie.com/embed/r8Rem870x9M2w",
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
                "url": "https://www.youtube.com/watch?v=m8Mos500x9M2w",
                "embed_url": "https://www.youtube-nocookie.com/embed/m8Mos500x9M2w",
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
                "url": "https://www.youtube.com/watch?v=b8BenM4x9M2w",
                "embed_url": "https://www.youtube-nocookie.com/embed/b8BenM4x9M2w",
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
                "url": "https://www.youtube.com/watch?v=b8Ber1301x9M2w",
                "embed_url": "https://www.youtube-nocookie.com/embed/b8Ber1301x9M2w",
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
                "url": "https://www.youtube.com/watch?v=b8CitOUx9M2w",
                "embed_url": "https://www.youtube-nocookie.com/embed/b8CitOUx9M2w",
                "summary": "Teardown of the Browning Citori: removing buttstock, inspecting inertia block and hammer springs, and checking top lever lockup."
            }
        ]
    }
}
