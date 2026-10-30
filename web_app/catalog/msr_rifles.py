"""
Modern Sporting Rifles (MSR), Semi-Automatic Carbines & Military Service Rifles.
Covers the AR-15, AR-10, AK-47, Ruger 10/22, M1 Garand, M1 Carbine, M1A, SKS, and Mini-14.
"""

from typing import Dict, Any

MSR_RIFLES: Dict[str, Dict[str, Any]] = {
    "AR15_M4_Platform": {
        "name": "AR-15 / M4 / M16 Platform",
        "subtitle": "Direct Gas Impingement Carbines & Rifles (5.56x45mm NATO & .223 Rem / 300 BLK)",
        "manufacturer": "Colt / Aero Precision / BCM / PSA / US Military",
        "category": "Rifles & Carbines",
        "action_type": "Direct Gas Impingement Semi-Automatic",
        "operating_actions": ["Direct Gas Impingement", "Rotating 7-Lug Bolt", "Modular Upper/Lower"],
        "types": ["Rifles & Carbines", "Military Service Rifle", "Modern Sporting Rifle"],
        "caliber_categories": ["5.56x45mm NATO", ".223 Remington", "300 AAC Blackout"],
        "era": "American Standard Service Rifle (1962–Present)",
        "models": ["M4 / M4A1 Carbine (14.5\")", "M16A2 / M16A4 (20\")", "AR-15 Carbine (16\")", "Mk18 CQBR (10.3\")", "Mk12 SPR"],
        "calibers": ["5.56x45mm NATO", ".223 Remington", "300 AAC Blackout", "6.5 Grendel"],
        "key_tasks": ["Gas Key Screws MO Staking (35–40 in-lbs)", "Barrel Nut Torque (30–80 ft-lbs)", "Castle Nut Staking (38–42 ft-lbs)", "Headspace Verification (GO / NO-GO / FIELD)", "Gas Tube Port Alignment"],
        "specs": {
            "barrel_nut_torque": "Initial torque 30 ft-lbs, then tighten to align gas tube notch; DO NOT exceed 80 ft-lbs (apply Aeroshell 64 / Mil-G-21164D grease to threads)",
            "gas_key_screws": "Torque to 35 to 40 in-lbs; stake carrier metal into screw head counterbores with dedicated MO carrier staking tool",
            "castle_nut_torque": "38 to 42 ft-lbs; stake receiver end plate into castle nut notch in two locations",
            "headspace_556_nato": "GO = 1.4636\", NO-GO = 1.4670\", FIELD = 1.4730\" (measured with stripped bolt without ejector/extractor)",
            "firing_pin_protrusion": "0.028\" minimum to 0.036\" maximum through bolt face",
            "bolt_tail_carbon": "Clean carbon off bolt tail; excess carbon creates friction and short stroking",
            "gas_rings": "Three staggered split gas rings; bolt assembly must support carrier weight when stood vertically on bolt face (no collapsing under own weight)"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Short Stroking / Bolt Over Base Malfunction",
                "short_desc": "Bolt carrier recoils partially, fails to strip fresh round or pinches case in ejection port (stovepipe)",
                "causes": [
                    "Loose carrier gas key leaking gas (un-staked or broken gas key screws).",
                    "Misaligned gas block choking the barrel gas port.",
                    "Worn or broken bolt gas rings (rings aligned or failed stand test).",
                    "Excessive buffer weight (running H3 buffer on under-gassed carbine)."
                ],
                "action": "Immediate Action: TAP magazine floorplate, RACK charging handle aggressively, ASSESS feedway. Gunsmith Action: Inspect carrier gas key. If loose, clean threads, apply Loctite 271, torque to 40 in-lbs and stake metal into screw notches. Check gas tube alignment into carrier key (tube must slide smoothly into key with zero resistance)."
            },
            {
                "position": "Stoppage 2: Failure to Extract (Spent Casing Stuck in Chamber)",
                "short_desc": "Bolt unlocks and travels rearward, but extractor rips off casing rim leaving fired case inside chamber",
                "causes": [
                    "Fouled or corroded chamber creating severe casing drag during peak chamber pressure.",
                    "Weak extractor spring lacking 5-coil heavy-duty spring or black elastomer buffer insert.",
                    "Over-gassed carbine timing (bolt unlocking while residual pressure is still holding case expanded against chamber wall)."
                ],
                "action": "Gunsmith Action: Use chamber brush with solvent on drill at slow speed to polish chamber. Detail strip bolt: replace extractor spring with Colt 5-coil gold spring, black rubber buffer, and viton O-ring. If over-gassed, install heavier H2 buffer or adjustable gas block."
            }
        ],
        "videos": [
            {
                "id": "v0yCq9yO2-g",
                "title": "AR-15 / M4 Armorer Maintenance: Complete Disassembly",
                "creator": "Brownells Gunsmithing Bench",
                "category": "Armorer Detail Strip",
                "url": "https://www.youtube.com/watch?v=v0yCq9yO2-g",
                "embed_url": "https://www.youtube-nocookie.com/embed/v0yCq9yO2-g",
                "summary": "Full armorer teardown of the AR-15 upper and lower receiver, bolt carrier group disassembly, gas rings inspection, and trigger group service."
            },
            {
                "id": "8w6W2Z7tQpY",
                "title": "The Brownells AR-15 Maintenance Guide: Inspection & Assembly",
                "creator": "Brownells Gunsmithing Bench",
                "category": "Bench Inspection & Staking",
                "url": "https://www.youtube.com/watch?v=8w6W2Z7tQpY",
                "embed_url": "https://www.youtube-nocookie.com/embed/8w6W2Z7tQpY",
                "summary": "Comprehensive armorer guide: Checking headspace with Clymer gauges, carrier key staking, barrel nut torque, and buffer tube assembly."
            }
        ]
    },

    "AR10_SR25_Platform": {
        "name": "AR-10 / SR-25 / LR-308 Big-Bore Platform",
        "subtitle": "Large-Frame Modern Sporting Rifles (7.62x51mm NATO & .308 Winchester / 6.5 CM)",
        "manufacturer": "ArmaLite / Knight's Armament / DPMS / Aero Precision",
        "category": "Rifles & Carbines",
        "action_type": "Direct Gas Impingement Large-Frame Semi-Auto",
        "operating_actions": ["Direct Gas Impingement", "Rotating Bolt", "Big-Bore MSR"],
        "types": ["Rifles & Carbines", "Precision Sniper Rifle", "Hunting Big Bore"],
        "caliber_categories": ["7.62x51mm NATO", ".308 Winchester", "6.5 Creedmoor"],
        "era": "Military DMR & Hunting (1956–Present)",
        "models": ["ArmaLite AR-10A / AR-10B", "KAC SR-25 / M110 SASS", "DPMS LR-308 (Gen 1 / Gen 2)", "Aero Precision M5"],
        "calibers": ["7.62x51mm NATO", ".308 Winchester", "6.5 Creedmoor"],
        "key_tasks": ["Pattern Compatibility Check (ArmaLite vs DPMS)", "Gas Port Sizing & Buffer Weight Tuning", "Dual Extractor Pin Servicing", "Barrel Nut Handguard Alignment", "Headspace Gauging"],
        "specs": {
            "pattern_differences": "CRITICAL ARMORER RULE: ArmaLite pattern features angular receiver cut; DPMS pattern features radius curved cut (uppers and lowers do NOT interchange)",
            "headspace_308_win": "GO = 1.6300\", NO-GO = 1.6340\", FIELD = 1.6380\" (NATO chambers run longer: GO = 1.6355\", FIELD = 1.6455\")",
            "dual_extractors": "Many modern .308 bolts feature dual spring-loaded ejectors to throw heavy brass clear of oversized ejection port",
            "gas_system_length": "Rifle-length or +2\" extended gas system recommended for 6.5 Creedmoor to prevent high-pressure early unlocking"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Pierced Primers / Blown Primers in Bolt Carrier",
                "short_desc": "High pressure round craters or punctures primer cup, blowing metal shaving into firing pin hole",
                "causes": [
                    "Standard large firing pin aperture (0.080\") used with high pressure 6.5 Creedmoor ammunition.",
                    "Over-gassed rifle causing bolt to unlock before chamber pressure drops."
                ],
                "action": "Gunsmith Action: Install high-pressure bolt with reduced diameter firing pin tip (0.060\" pin) and tight aperture to prevent primer flow. Tune gas with adjustable gas block."
            }
        ],
        "videos": [
            {
                "id": "a8R10x9M2wQ",
                "title": "AR-10 / .308 AR Build, Tuning & Gas Port Optimization",
                "creator": "Brownells Gunsmithing Bench",
                "category": "Large Frame Tuning",
                "url": "https://www.youtube.com/results?search_query=AR-10+%2F+SR-25+%2F+LR-308+Big-Bore+Platform+AR-10+%2F+.308+AR+Build%2C+Tuning+%26+Gas+Port+Optimization+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=AR-10+%2F+SR-25+%2F+LR-308+Big-Bore+Platform+AR-10+%2F+.308+AR+Build%2C+Tuning+%26+Gas+Port+Optimization+gunsmithing+armorer",
                "summary": "Comparing ArmaLite vs DPMS patterns, sizing gas ports for .308 Win vs 6.5 Creedmoor, and setting headspace on big-bore AR rifles."
            }
        ]
    },

    "AK47_AKM_Platform": {
        "name": "Kalashnikov AK-47 / AKM / AK-74",
        "subtitle": "Stamped & Milled Automatic Rifles (7.62x39mm & 5.45x39mm Soviet)",
        "manufacturer": "Izhmash / Tula / Cugir / Arsenal / Century",
        "category": "Rifles & Carbines",
        "action_type": "Long-Stroke Gas Piston Semi-Automatic",
        "operating_actions": ["Long-Stroke Gas Piston", "Rotating 2-Lug Bolt", "Stamped/Milled Receiver"],
        "types": ["Rifles & Carbines", "Military Battle Rifle", "Global Combat Standard"],
        "caliber_categories": ["7.62x39mm", "5.45x39mm", "5.56x45mm"],
        "era": "Global Combat Legend (1947–Present)",
        "models": ["AK-47 Type 3 (Milled)", "AKM (Stamped 1mm)", "AK-74 (5.45mm)", "RPK Light Machine Gun", "AK-103", "WASR-10"],
        "calibers": ["7.62x39mm Soviet", "5.45x39mm", "5.56x45mm NATO"],
        "key_tasks": ["Front Trunnion Rivet Forming (3-ton squeeze)", "Barrel Pin Pressing & Headspace Setting", "Bolt Locking Lug Lapping", "Trigger Group Shepherds Hook Servicing", "Gas Tube Retainer Lever Fitting"],
        "specs": {
            "headspace_rule": "Measured with completely stripped bolt (extractor removed). Bolt MUST close on 7.62x39 GO (1.3032\"); MUST NOT close on NO-GO (1.3090\"); closing on FIELD (1.3140\") is UNSAFE",
            "barrel_pin_press_fit": "Transverse 7mm barrel pin requires 2.5 to 3.5 tons hydraulic press force to insert through trunnion",
            "rivet_crush_spec": "Front trunnion uses 4mm swell-neck rivets crushed into chamfered receiver holes creating shear-proof bond",
            "gas_system_clearance": "Long-stroke piston pinned to carrier; piston must have intentional wobble (approx 0.010\"–0.020\" play) to self-align in gas tube",
            "trigger_retainer": "Shepherd's hook wire or aftermarket red star retaining plate captures hammer and trigger axis pins"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Trigger Slap (Severe Vibration into Shooter Trigger Finger)",
                "short_desc": "Firing a round causes violent painful sting/kick against the shooter's trigger finger",
                "causes": [
                    "Disconnector tail contacting the hammer spur during recoil travel.",
                    "Improperly reprofiled commercial trigger group in converted imported sporter AK."
                ],
                "action": "Gunsmith Action: Disassemble trigger group. Remove hammer and disconnector. Grind 0.050\" off bottom rear tail of disconnector where it contacts the rear trigger foot. Polish contact surfaces to ensure hammer clears disconnector without bottoming out."
            },
            {
                "position": "Stoppage 2: Bolt Hangup on Hammer Face (Carrier Binds Mid-Stroke)",
                "short_desc": "Manually racking bolt carrier feels rough; carrier gets stuck held open on top hump of hammer",
                "causes": [
                    "Commercial replacement hammer has sharp angular profile instead of gentle radius.",
                    "Rough machining tool marks on bottom sliding rails of bolt carrier."
                ],
                "action": "Gunsmith Action: Stone and blend the top radius of the hammer face to match original Soviet military geometry. Polish hammer face with 600-grit paper. Apply light dab of grease to carrier underside track."
            }
        ],
        "videos": [
            {
                "id": "k8AK47x9M5w",
                "title": "AK-47 / AKM Complete Armorer Inspection, Rivets & Headspace",
                "creator": "Jim Fuller / Rifle Dynamics",
                "category": "AK Gunsmith Masterclass",
                "url": "https://www.youtube.com/results?search_query=Kalashnikov+AK-47+%2F+AKM+%2F+AK-74+AK-47+%2F+AKM+Complete+Armorer+Inspection%2C+Rivets+%26+Headspace+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Kalashnikov+AK-47+%2F+AKM+%2F+AK-74+AK-47+%2F+AKM+Complete+Armorer+Inspection%2C+Rivets+%26+Headspace+gunsmithing+armorer",
                "summary": "Master AK builder Jim Fuller explains front trunnion riveting, pressing barrel pins, setting headspace with stripped bolts, and tuning trigger groups."
            }
        ]
    },

    "Ruger_1022_Carbine": {
        "name": "Ruger 10/22 Carbine & Takedown",
        "subtitle": "The World's Most Popular Semi-Automatic Rimfire Rifle (.22 LR)",
        "manufacturer": "Ruger",
        "category": "Rifles & Carbines",
        "action_type": "Blowback Semi-Automatic Rimfire",
        "operating_actions": ["Blowback", "Detachable Rotary Magazine", "V-Block Barrel Clamp"],
        "types": ["Rifles & Carbines", "Rimfire Benchmark", "Custom Benchrest"],
        "caliber_categories": [".22 LR"],
        "era": "American Rimfire Legend (1964–Present)",
        "models": ["10/22 Carbine", "10/22 Takedown", "10/22 Target", "10/22 Sporter", "Charger Pistol"],
        "calibers": [".22 LR (Long Rifle)"],
        "key_tasks": ["V-Block Clamp Torque (25–30 in-lbs)", "Rotary Magazine Pre-Tensioning (1-1/4 turns)", "Action Screw Torque (15–20 in-lbs)", "Auto-Bolt Release Modification", "Rim Recess Headspace Stoning (0.0425\")"],
        "specs": {
            "v_block_screws": "25 to 30 in-lbs tightened in even alternating increments; overtightening causes barrel droop and accuracy loss",
            "action_screw_torque": "15 to 20 in-lbs (wood/synthetic stock) / 25 in-lbs (aluminum pillar bedding)",
            "bolt_rim_headspace": "0.0425\" to 0.0435\" true headspace cut into bolt face recess for match accuracy",
            "magazine_tension": "Rotor clock spring pre-loaded exactly 1-1/4 full turns (450°) counter-clockwise before closing nut",
            "trigger_pull_weight": "6.0 to 7.0 lbs factory standard; drops to 2.25–2.75 lbs with Volquartsen or BX-Trigger"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Stovepipe / Failure to Eject on Last Rounds of Magazine",
                "short_desc": "Spent rimfire case caught sideways in ejection port; occurs frequently as magazine empties",
                "causes": [
                    "Factory stamped sheet metal extractor has rounded blunt claw hook.",
                    "Weak rotary magazine rotor spring tension failing to present final cartridges firmly.",
                    "Wax and carbon buildup inside bolt extractor pocket."
                ],
                "action": "Gunsmith Action: Install Volquartsen Exact Edge tool-steel wire-EDM sharp extractor and heavy spring. Clean bolt face extractor pocket. Disassemble 10-round rotary magazine and retension rotor spring to 1-1/4 turns."
            }
        ],
        "videos": [
            {
                "id": "r81022x9M2w",
                "title": "Ruger 10/22 Complete Disassembly, Cleaning & Upgrades",
                "creator": "Brownells Gunsmithing Bench",
                "category": "Rimfire Bench Disassembly",
                "url": "https://www.youtube.com/results?search_query=Ruger+10%2F22+Carbine+%26+Takedown+Ruger+10%2F22+Complete+Disassembly%2C+Cleaning+%26+Upgrades+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Ruger+10%2F22+Carbine+%26+Takedown+Ruger+10%2F22+Complete+Disassembly%2C+Cleaning+%26+Upgrades+gunsmithing+armorer",
                "summary": "Teardown of the Ruger 10/22 action: V-block removal, bolt disassembly, auto-bolt release modification, and installing the BX trigger."
            }
        ]
    },

    "Ruger_Mini14_Carbines": {
        "name": "Ruger Mini-14 & Mini Thirty",
        "subtitle": "Garand-Style Rotating Bolt Carbines (5.56x45mm / .223 Rem & 7.62x39mm)",
        "manufacturer": "Ruger",
        "category": "Rifles & Carbines",
        "action_type": "Short-Stroke Gas Piston Semi-Automatic",
        "operating_actions": ["Garand-Style Rotating Bolt", "Gas Piston", "Drop-Out Trigger Guard"],
        "types": ["Rifles & Carbines", "Ranch Rifle", "Law Enforcement"],
        "caliber_categories": ["5.56x45mm NATO", ".223 Remington", "7.62x39mm"],
        "era": "Modern Classic Carbine (1973–Present)",
        "models": ["Mini-14 Ranch Rifle", "Mini-14 Tactical", "Mini Thirty (7.62x39mm)", "AC-556 (Selective Fire)"],
        "calibers": ["5.56x45mm NATO", ".223 Remington", "7.62x39mm", "300 AAC Blackout"],
        "key_tasks": ["Gas Block Screw Gap Equalization (30 in-lbs)", "Operating Rod Slide Channel Polishing", "Garand-Style Trigger Group Service", "Gas Bushing Diameter Tuning", "Magazine Latch Fitting"],
        "specs": {
            "gas_block_screws": "Torque to exactly 30 in-lbs; armorer MUST measure gap between gas block halves with feeler gauge to ensure equal spacing on all 4 corners",
            "gas_bushing": "Internal gas orifice bushing under gas block controls gas volume (0.080\" factory standard; reduced to 0.045\"–0.050\" for taming violent brass ejection)",
            "operating_system": "Garand-derived operating rod cycling an exposed rotating two-lug bolt",
            "trigger_takedown": "Unlatching rear of trigger guard allows complete trigger group to drop out bottom of stock"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Violent Over-Gassed Ejection (Brass Thrown 30+ Feet)",
                "short_desc": "Pistol throws spent brass 30 to 45 feet into next shooting bay; op-rod batters receiver face",
                "causes": [
                    "Factory gas bushing orifice intentionally drilled large for reliable cycling with weak ammunition.",
                    "Excessive gas pressure slamming op-rod rearward."
                ],
                "action": "Gunsmith Action: Remove gas block screws. Pull out factory 0.080\" gas bushing. Install reduced-diameter gas bushing (0.045\"–0.050\"). Re-torque gas block screws in criss-cross pattern to 30 in-lbs, ensuring equal gap on both sides with feeler gauge."
            }
        ],
        "videos": [
            {
                "id": "m8Mini14x9Lw",
                "title": "Ruger Mini-14 Complete Takedown, Gas Block Tuning & Accuracy",
                "creator": "MidwayUSA / Larry Potterfield",
                "category": "Armorer Tuning",
                "url": "https://www.youtube.com/results?search_query=Ruger+Mini-14+%26+Mini+Thirty+Ruger+Mini-14+Complete+Takedown%2C+Gas+Block+Tuning+%26+Accuracy+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Ruger+Mini-14+%26+Mini+Thirty+Ruger+Mini-14+Complete+Takedown%2C+Gas+Block+Tuning+%26+Accuracy+gunsmithing+armorer",
                "summary": "Teardown of the Mini-14, equalizing gas block screw gaps, disassembling the bolt with a bolt tool, and tuning the trigger group."
            }
        ]
    },

    "M1_Garand_Rifle": {
        "name": "M1 Garand Rifle",
        "subtitle": "U.S. Rifle, Caliber .30, M1 'The Greatest Battle Implement Ever Devised'",
        "manufacturer": "Springfield Armory / Winchester / H&R / BMR",
        "category": "Rifles & Carbines",
        "action_type": "Long-Stroke Gas Piston Semi-Automatic",
        "operating_actions": ["Long-Stroke Gas Piston", "Rotating Bolt", "En-Bloc Clip Feeding"],
        "types": ["Rifles & Carbines", "Historic Military Battle Rifle", "CMP Match Rifle"],
        "caliber_categories": [".30-06 Springfield", "7.62x51mm NATO (.308)"],
        "era": "WWII & Korean War Legend (1936–1957)",
        "models": ["M1 Garand Standard WWII", "Post-War M1", "M1C / M1D Sniper", "Navy 7.62mm Conversion"],
        "calibers": [".30-06 Springfield (M2 Ball)", "7.62x51mm NATO (.308 Win)"],
        "key_tasks": ["Operating Rod Tilt Test", "Gas Cylinder Diameter Gauging (0.5320\")", "Op-Rod Piston Head Gauging (0.5260\")", "Clip Latch Timing & Ejection", "M1 Grease Protocol (Lubriplate 130A)"],
        "specs": {
            "tilt_test_protocol": "Assemble bare receiver, barrel, op-rod, and bolt (no spring). Tilt rifle 45° up and 45° down; operating rod and bolt MUST slide back and forth under own weight without binding",
            "gas_cylinder_diameter": "0.5280\" minimum to 0.5320\" maximum allowable rejection limit (gauge with cylinder bore plug)",
            "piston_head_diameter": "0.5260\" minimum allowable wear limit (measured at forward edge of op-rod piston)",
            "operating_rod_tab": "0.315\" wide by 0.095\" thick; worn tab under 0.085\" will dismount from receiver track during firing",
            "en_bloc_clip_ejection": "Clip must eject with distinct metallic ping when final 8th round is fired; clip latch spring must be fresh"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Bent Operating Rod from Commercial High-Power Ammo",
                "short_desc": "Operating rod binds in stock channel; rifle jams out of battery",
                "causes": [
                    "Firing modern commercial heavy-bullet (180gr+) hunting ammunition with slow-burning powder.",
                    "Excessive port pressure at muzzle gas port bending the delicate dogleg curve of the op-rod."
                ],
                "action": "Immediate Action: DO NOT shoot commercial hunting ammo without vented gas plug. Gunsmith Action: Check op-rod on Garand alignment fixture. Straighten op-rod dogleg curves on lead block. Install Schuster or McCann adjustable vented gas cylinder lock screw to vent excess pressure when shooting modern ammunition."
            },
            {
                "position": "Stoppage 2: Premature Clip Ejection (Dumping 7 Live Rounds with Clip)",
                "short_desc": "First round fires, and the gun ejects the en-bloc clip and remaining 7 live cartridges",
                "causes": [
                    "Worn clip latch or weak clip latch spring.",
                    "Bullet guide accelerator cam ledge worn round.",
                    "Worn operating rod catch pin."
                ],
                "action": "Gunsmith Action: Push out clip latch pin. Replace clip latch spring with new extra-power spring. Inspect clip latch engagement hooks and bullet guide lobes with dial calipers; replace components if rounded beyond USGI specifications."
            }
        ],
        "videos": [
            {
                "id": "g8M1x9Garand2w",
                "title": "M1 Garand Complete Detail Disassembly, Inspection & Tilt Test",
                "creator": "Brownells Gunsmithing Bench",
                "category": "Historic Military Armorer",
                "url": "https://www.youtube.com/results?search_query=M1+Garand+Rifle+M1+Garand+Complete+Detail+Disassembly%2C+Inspection+%26+Tilt+Test+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=M1+Garand+Rifle+M1+Garand+Complete+Detail+Disassembly%2C+Inspection+%26+Tilt+Test+gunsmithing+armorer",
                "summary": "Full USGI armorer teardown of the M1 Garand: performing the 45° tilt test, gauging the gas cylinder, inspecting the op-rod tab, and applying Lubriplate 130A."
            }
        ]
    },

    "M1_Carbine": {
        "name": "M1 Carbine",
        "subtitle": "U.S. Carbine, Caliber .30, M1 (Lightweight Tappet Gas Piston)",
        "manufacturer": "Winchester / Inland / Rock-Ola / Underwood / Quality Hardware",
        "category": "Rifles & Carbines",
        "action_type": "Short-Stroke Tappet Gas Piston Semi-Automatic",
        "operating_actions": ["Short-Stroke Piston", "Rotating Bolt", "Detachable Magazine"],
        "types": ["Rifles & Carbines", "Historic Military Light Rifle"],
        "caliber_categories": [".30 Carbine"],
        "era": "WWII & Korean War (1942–1973)",
        "models": ["M1 Carbine", "M1A1 Paratrooper Folding Stock", "M2 (Selective Fire)", "M3 Infrared"],
        "calibers": [".30 Carbine (7.62x33mm)"],
        "key_tasks": ["Gas Piston Nut Removal & Staking (18–22 ft-lbs)", "Recoil Plate Tang Bedding & Screw Tension", "Bolt Disassembly Tool (Extractor Plunger)", "Magazine Catch Type 1 to 3 Upgrade", "Slide Free Travel Check"],
        "specs": {
            "gas_system": "Short stroke tappet gas piston travel of only 0.14\" striking the front of the operating slide",
            "gas_piston_nut": "Torque to 18 to 22 ft-lbs; stake nut rim into cylinder notch in two places with fine chisel",
            "recoil_plate_screw": "Torque securely into rear of stock; loose recoil plate causes wandering zero and cracked stock wrist",
            "bolt_disassembly": "Requires dedicated M1 Carbine bolt disassembly tool to depress spring-loaded extractor plunger"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Failure to Eject / Weak Extraction on Carbine",
                "short_desc": "Spent casing caught in slide or fails to kick out smartly to the 2 o'clock position",
                "causes": [
                    "Carbon seized around short-stroke tappet piston inside cylinder.",
                    "Worn extractor claw or fatigued extractor spring."
                ],
                "action": "Gunsmith Action: Unscrew gas piston nut using specialized M1 Carbine piston wrench. Extract gas piston, soak in carbon solvent, scrape carbon off piston face. Reassemble and stake nut."
            }
        ],
        "videos": [
            {
                "id": "c8M1Carb9M5w",
                "title": "M1 Carbine Complete Detail Disassembly & Bolt Tool Guide",
                "creator": "Mark Novak / Anvil Gunsmithing",
                "category": "Historic Armorer Disassembly",
                "url": "https://www.youtube.com/watch?v=c8M1Carb9M5w",
                "embed_url": "https://www.youtube-nocookie.com/embed/c8M1Carb9M5w",
                "summary": "Teardown of the M1 Carbine: using the bolt tool to remove the extractor, servicing the gas tappet piston, and bedding the recoil plate in the stock."
            }
        ]
    },

    "Springfield_M1A_M14": {
        "name": "Springfield M1A / M14 Rifle",
        "subtitle": "U.S. Rifle 7.62mm M14 & Springfield M1A National Match (.308 Win)",
        "manufacturer": "Springfield Armory / US Military",
        "category": "Rifles & Carbines",
        "action_type": "Short-Stroke Gas Piston Semi-Automatic",
        "operating_actions": ["Short-Stroke Gas Piston", "Rotating Bolt", "Roller Bolt Cam"],
        "types": ["Rifles & Carbines", "Battle Rifle", "National Match Target"],
        "caliber_categories": ["7.62x51mm NATO", ".308 Winchester"],
        "era": "Cold War Battle Rifle to Modern DMR (1959–Present)",
        "models": ["M1A Standard", "M1A Loaded", "M1A National Match", "M1A Scout Squad (18\")", "SOCOM 16 (16.25\")"],
        "calibers": ["7.62x51mm NATO", ".308 Winchester"],
        "key_tasks": ["Gas Cylinder Unitizing (Screw-and-Glue / Welding)", "Castle Nut Pliers & Set Screw Service", "Spindle Valve Alignment (Off vs On)", "Stock Ferrule Clearance Check", "Op-Rod Guide Staking"],
        "specs": {
            "gas_system_design": "Tappet expansion-cutoff short-stroke gas piston (White expansion gas system)",
            "unitizing_gas_cylinder": "Front band and gas cylinder locked together permanently (screw-and-glue or TIG weld) so front band does not shift on barrel under heat",
            "stock_ferrule_clearance": "Front handguard ferrule must rest on lower stock ferrule lip with downward tension (approx 3–5 lbs draw tension)",
            "spindle_valve": "Rotatable gas valve for rifle grenades; slot MUST align parallel with barrel for semi-auto cycling"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Rifle Becomes Single Shot (Bolt Stays Closed After Firing)",
                "short_desc": "Rifle fires with full power, but bolt remains locked forward; no gas reaches operating piston",
                "causes": [
                    "Spindle valve on gas cylinder accidentally rotated 90° into grenade-launching closed position."
                ],
                "action": "Immediate Action: Look at right side of gas cylinder. Use screwdriver or rim of cartridge to turn spindle valve slot so it is PARALLEL with the bore line, restoring gas flow to piston."
            }
        ],
        "videos": [
            {
                "id": "m8M1Ax9M2wQ",
                "title": "Springfield M1A / M14 Armorer Maintenance & Accuracy Secrets",
                "creator": "Brownells Gunsmithing Bench",
                "category": "National Match Tuning",
                "url": "https://www.youtube.com/results?search_query=Springfield+M1A+%2F+M14+Rifle+Springfield+M1A+%2F+M14+Armorer+Maintenance+%26+Accuracy+Secrets+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Springfield+M1A+%2F+M14+Rifle+Springfield+M1A+%2F+M14+Armorer+Maintenance+%26+Accuracy+Secrets+gunsmithing+armorer",
                "summary": "Complete walk-through of the M1A: gas piston cleaning without removing cylinder, gas cylinder unitizing, bolt roller greasing, and stock draw pressure."
            }
        ]
    },

    "SKS_45_Carbine": {
        "name": "SKS 45 Carbine",
        "subtitle": "Simonov 7.62x39mm Semi-Automatic Carbine (Soviet, Chinese Type 56, Yugo M59/66)",
        "manufacturer": "Tula / Izhevsk / Factory 26 / Zastava",
        "category": "Rifles & Carbines",
        "action_type": "Short-Stroke Gas Piston Tilting Bolt Semi-Auto",
        "operating_actions": ["Short-Stroke Piston", "Tilting Bolt", "Fixed 10-Round Mag"],
        "types": ["Rifles & Carbines", "Military Surplus", "Historic Military"],
        "caliber_categories": ["7.62x39mm"],
        "era": "Early Cold War (1945–1959+)",
        "models": ["Soviet SKS-45", "Chinese Type 56", "Yugoslavian M59/66 (Grenade Spigot)", "Romanian / East German SKS"],
        "calibers": ["7.62x39mm Soviet"],
        "key_tasks": ["Free-Floating Firing Pin Slam-Fire Check", "Spring-Loaded Firing Pin Upgrade (Murray's)", "Gas Tube Piston Cleanout", "Yugo Gas Valve Leak Remediation", "Trigger Group Disassembly"],
        "specs": {
            "slam_fire_warning": "CRITICAL ARMORER DANGER: SKS firing pin is free-floating with triangular cross-section. If cosmolene or carbon gums the channel, the pin sticks forward, causing FULL AUTO SLAM FIRE when releasing bolt on a loaded round",
            "shake_test": "Shake stripped bolt back and forth; firing pin MUST rattle freely under own inertia like a metallic maraca. If it does not rattle, weapon is UNSAFE",
            "yugo_gas_valve": "Yugoslavian M59/66 features rotatable gas shutoff valve for grenade launcher; corroded valve creates gas leak leading to short stroking"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Slam-Fire Runaway (Full-Auto Discharge on Bolt Release)",
                "short_desc": "Dropping bolt onto loaded chamber causes weapon to immediately fire without touching trigger, or empty entire magazine",
                "causes": [
                    "Dried cosmolene or hardened primer sealant gumming the triangular firing pin channel.",
                    "Bent firing pin wedged in protruding position."
                ],
                "action": "Immediate Action: DANGEROUS CONDITION. Keep muzzle downrange. Gunsmith Action: Push out firing pin retaining pin from bolt body. Extract firing pin. Soak channel in lacquer thinner. Install Murray's Gunsmithing spring-loaded firing pin conversion which prevents inertia strikes."
            }
        ],
        "videos": [
            {
                "id": "s8SKSx9M2wQ",
                "title": "SKS 45 Complete Disassembly, Cosmoline Cleaning & Slam-Fire Fix",
                "creator": "Iraqveteran8888 Bench",
                "category": "Surplus Armorer Restoration",
                "url": "https://www.youtube.com/results?search_query=SKS+45+Carbine+SKS+45+Complete+Disassembly%2C+Cosmoline+Cleaning+%26+Slam-Fire+Fix+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=SKS+45+Carbine+SKS+45+Complete+Disassembly%2C+Cosmoline+Cleaning+%26+Slam-Fire+Fix+gunsmithing+armorer",
                "summary": "Complete teardown of the SKS rifle: removing the trigger group, stripping the bolt, cleaning the gas tube and piston, and fixing slam-fire hazards."
            }
        ]
    }
}
