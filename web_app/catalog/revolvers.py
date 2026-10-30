"""
Revolvers (Wheelguns) Catalog Module for Armorer's Workbench.
Covers classic and modern double-action and single-action revolvers.
"""

from typing import Dict, Any

REVOLVERS: Dict[str, Dict[str, Any]] = {
    "Smith_Wesson_Revolvers": {
        "name": "Smith & Wesson K/L/N-Frame Revolvers",
        "subtitle": "Distinguished Combat Magnum 686, 586, 19, 10 & Model 29 (.357 Mag, .44 Mag, .38 Spl)",
        "manufacturer": "Smith & Wesson",
        "category": "Revolvers",
        "action_type": "Double-Action / Single-Action Revolver",
        "operating_actions": ["Double-Action", "Single-Action", "Solid-Frame Swing-Out Cylinder"],
        "types": ["Revolvers", "Duty Handguns", "Hunting & Target"],
        "caliber_categories": [".357 Magnum", ".44 Magnum", ".38 Special"],
        "era": "American Revolver Benchmark (1899–Present)",
        "models": ["Model 686 / 586 (L-Frame .357)", "Model 19 / 66 (K-Frame Combat Magnum)", "Model 10 / 64 (K-Frame Service)", "Model 29 / 629 (N-Frame .44 Mag)", "Model 27 / 28 Highway Patrolman"],
        "calibers": [".357 Magnum", ".44 Magnum", ".38 Special (+P)"],
        "key_tasks": ["Cylinder Endshake Shimming (0.001\"–0.002\")", "Barrel-Cylinder Gap Feeler Gauging (0.004\"–0.007\")", "Rebound Slide Spring Stoning & Tuning", "Crane / Yoke True Alignment", "Hand Timing & Extractor Star Check"],
        "specs": {
            "barrel_cylinder_gap": "0.004\" to 0.007\" measured with cylinder pushed fully rearward against recoil shield",
            "cylinder_endshake": "0.001\" to 0.002\" maximum allowable fore-and-aft movement; shim with Power Custom shims if exceeding 0.003\"",
            "headspace_rimmed": "0.060\" GO / 0.068\" NO-GO between cylinder rear face and recoil shield",
            "trigger_pull_da": "9.5 to 11.0 lbs (factory standard) / 7.5 to 8.5 lbs (tuned with lightened rebound spring)",
            "trigger_pull_sa": "3.0 to 3.5 lbs crisp break with zero perceptible creep",
            "sideplate_removal_rule": "NEVER pry sideplate with screwdriver; rap wooden handle of hammer against grip frame until sideplate walks free under vibration",
            "crane_alignment": "Must pass straight into cylinder window without rubbing bottom frame window ledge"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Cylinder Binds / Heavy Trigger Drag During Rotation",
                "short_desc": "Trigger becomes extremely heavy or cylinder locks solid while attempting to pull trigger in double action",
                "causes": [
                    "Ejector rod unscrewed and backed out (S&W ejector rods feature left-hand reverse threads on modern guns).",
                    "Unburned powder flakes or carbon packed beneath the star-shaped extractor ratchet.",
                    "Excessive cylinder endshake allowing cylinder face to rub against barrel breech shoulder.",
                    "Bullet walking forward out of case under heavy magnum recoil and striking frame."
                ],
                "action": "Immediate Action: Look at ejector rod. If knurled head has backed out, tighten counter-clockwise (reverse thread) by hand. Gunsmith Action: Swing out cylinder, lift extractor star, brush under-star recess with bronze brush. Check barrel-cylinder gap with feeler gauge. If gap is under 0.003\", face off barrel breech shoulder with 90° facing cutter."
            },
            {
                "position": "Stoppage 2: Cylinder Fails to Carry-Up (Late Hand Timing)",
                "short_desc": "Hammer drops or reaches full cock before the cylinder bolt snaps into the cylinder locking notch",
                "causes": [
                    "Worn or peened hand tip (the vertical pawl that pushes the extractor ratchet teeth).",
                    "Worn ratchet tooth on one or more individual chambers.",
                    "Cylinder bolt window binding on dried grease or metal burr."
                ],
                "action": "Gunsmith Action: TIMING TEST: Hold cylinder lightly with thumb and forefinger to create gentle drag. Pull trigger slowly in double action. Cylinder bolt MUST snap into locking notch with an audible click BEFORE hammer falls. If late, install oversized hand and hand-stone width to time each chamber."
            }
        ],
        "videos": [
            {
                "id": "s8W686x9M2w",
                "title": "S&W Revolver Tuning, Endshake & Action Job Masterclass",
                "creator": "Mark Novak / Anvil Gunsmithing",
                "category": "Revolver Gunsmithing",
                "url": "https://www.youtube.com/results?search_query=Smith+%26+Wesson+K%2FL%2FN-Frame+Revolvers+S%26W+Revolver+Tuning%2C+Endshake+%26+Action+Job+Masterclass+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Smith+%26+Wesson+K%2FL%2FN-Frame+Revolvers+S%26W+Revolver+Tuning%2C+Endshake+%26+Action+Job+Masterclass+gunsmithing+armorer",
                "summary": "Masterclass on removing S&W sideplates without damaging mating seams, checking barrel-cylinder gap, installing endshake bearings, and stoning the rebound slide."
            },
            {
                "id": "j8Miculek7wL",
                "title": "Jerry Miculek: How to Tune a Smith & Wesson Revolver Trigger",
                "creator": "Jerry Miculek / Miculek Pro Bench",
                "category": "Trigger Tuning",
                "url": "https://www.youtube.com/watch?v=j8Miculek7wL",
                "embed_url": "https://www.youtube-nocookie.com/embed/j8Miculek7wL",
                "summary": "Legendary speed shooter Jerry Miculek demonstrates mainspring strain screw adjustment, rebound spring replacement, and mirror stoning trigger contact surfaces."
            }
        ]
    },

    "Colt_Python_Revolvers": {
        "name": "Colt Python & Anaconda Revolvers",
        "subtitle": "The Rolls-Royce of Revolvers & 2020 Rebirth (.357 Magnum & .44 Magnum)",
        "manufacturer": "Colt's Manufacturing",
        "category": "Revolvers",
        "action_type": "Double-Action / Single-Action Revolver",
        "operating_actions": ["Double-Action", "Single-Action", "Solid-Frame Bank Vault Lockup"],
        "types": ["Revolvers", "Premium Target", "Collectors & Hunting"],
        "caliber_categories": [".357 Magnum", ".44 Magnum"],
        "era": "Golden Age Hand-Fitted to Modern CNC (1955–Present)",
        "models": ["Python (.357 Mag 4.25\" / 6\")", "Anaconda (.44 Mag)", "King Cobra", "Diamondback"],
        "calibers": [".357 Magnum", ".38 Special", ".44 Magnum"],
        "key_tasks": ["V-Spring Hand-Fitting (Legacy Models)", "Cylinder Bolt Drop Timing Adjustment", "Bank Vault Cylinder Lockup Inspection", "Rebound Lever Hand-Stoning", "2020 Leaf Spring Action Tuning"],
        "specs": {
            "bank_vault_lockup": "Hand continues to press upward on ratchet at moment of hammer drop, completely eliminating cylinder play (0.000\" rotational play when locked)",
            "barrel_cylinder_gap": "0.003\" to 0.005\" tighter factory tolerance than standard revolvers",
            "legacy_lockwork": "V-shaped flat spring powers both hammer and trigger rebound; hand-fitted by master Colt armorers",
            "2020_redesign": "Streamlined lockwork with fewer parts, user-swappable front sights, and beefed-up topstrap with 30% more steel"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Cylinder Bolt Drops Early (Ring Around Cylinder)",
                "short_desc": "Cylinder bolt drops onto cylinder circumference before entering leadoff lead-in groove, scratching line around cylinder",
                "causes": [
                    "Worn or improperly bent cylinder bolt spring / rebound lever arm.",
                    "Peened bolt cam wing on trigger side."
                ],
                "action": "Gunsmith Action: Stone the tail of the cylinder bolt where it rides the trigger cam. Bolt must drop smoothly into cylinder notch or lead-in flute without peening cylinder exterior."
            }
        ],
        "videos": [
            {
                "id": "c8Pyt44x9M2w",
                "title": "Colt Python Action Lockwork & Timing Masterclass",
                "creator": "Mark Novak / Anvil Gunsmithing",
                "category": "Legacy Colt Lockwork",
                "url": "https://www.youtube.com/results?search_query=Colt+Python+%26+Anaconda+Revolvers+Colt+Python+Action+Lockwork+%26+Timing+Masterclass+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Colt+Python+%26+Anaconda+Revolvers+Colt+Python+Action+Lockwork+%26+Timing+Masterclass+gunsmithing+armorer",
                "summary": "In-depth mechanical study of the classic Colt V-spring lockwork, hand timing, rebound lever tuning, and comparing the original to the 2020 Python design."
            }
        ]
    },

    "Ruger_Revolvers_GP100": {
        "name": "Ruger GP100 / SP101 & Super Redhawk",
        "subtitle": "Modular Frame Heavy-Duty Double-Action Revolvers (.357 Mag & .44 Mag)",
        "manufacturer": "Ruger",
        "category": "Revolvers",
        "action_type": "Double-Action / Single-Action Modular Revolver",
        "operating_actions": ["DA/SA", "Modular Sub-Assembly", "Triple-Locking Cylinder"],
        "types": ["Revolvers", "Heavy-Duty Duty", "Magnum Hunting"],
        "caliber_categories": [".357 Magnum", ".44 Magnum", ".38 Special"],
        "era": "Modern Industrial Workhorse (1985–Present)",
        "models": ["GP100 4.2\" (.357 Mag)", "GP100 Match Champion", "SP101 Concealed Carry (.357 Mag)", "Super Redhawk (.44 Mag / .454 Casull)"],
        "calibers": [".357 Magnum", ".38 Special", ".44 Magnum", ".454 Casull"],
        "key_tasks": ["Trigger Housing Modular Sub-Assembly Removal", "Hammer & Trigger Dog Shimming", "Wolff Spring Kit Installation", "Crane Latch Pivot Servicing", "Front Cylinder Lockup Verification"],
        "specs": {
            "solid_frame_design": "No sideplate; solid investment-cast 4140/stainless frame with sub-assemblies dropping out through bottom of frame",
            "triple_locking_cylinder": "Cylinder locks into frame at front of crane, rear of cylinder, and bottom locking bolt",
            "barrel_cylinder_gap": "0.004\" to 0.007\" factory specification",
            "hammer_strut_spring": "Modular coil mainspring on steel strut (no flat leaf springs to break or lose tension)",
            "cylinder_latch_mechanism": "Push-button thumb latch pressed straight into frame to release crane"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Heavy Stiff Double Action Trigger Stacking",
                "short_desc": "Trigger pull increases dramatically in weight right before hammer release",
                "causes": [
                    "Factory 14-lb heavy mainspring designed for extreme primer ignition.",
                    "Rough stamped trigger dog surfaces dragging on hammer cam.",
                    "Hammer rubbing against interior frame sidewalls."
                ],
                "action": "Gunsmith Action: Drop out trigger housing assembly by depressing trigger latch spring plunger. Install 0.002\" hammer shims and trigger shims to center parts in frame. Polish trigger dog and sear notch. Install Wolff 10-lb hammer spring and 8-lb trigger return spring."
            }
        ],
        "videos": [
            {
                "id": "r8G100x9M5w",
                "title": "Ruger GP100 Complete Disassembly, Shimming & Trigger Job",
                "creator": "Brownells Gunsmithing Bench",
                "category": "Revolver Shimming & Tuning",
                "url": "https://www.youtube.com/results?search_query=Ruger+GP100+%2F+SP101+%26+Super+Redhawk+Ruger+GP100+Complete+Disassembly%2C+Shimming+%26+Trigger+Job+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Ruger+GP100+%2F+SP101+%26+Super+Redhawk+Ruger+GP100+Complete+Disassembly%2C+Shimming+%26+Trigger+Job+gunsmithing+armorer",
                "summary": "Teardown of the GP100 trigger group, installing Power Custom trigger shims, replacing mainspring and trigger return spring, and smoothing double action stroke."
            }
        ]
    },

    "Colt_Single_Action_Army": {
        "name": "Colt Single Action Army (SAA 1873 Peacemaker)",
        "subtitle": "Model P 1873 'The Gun That Won the West' (.45 Colt & .357 Magnum)",
        "manufacturer": "Colt's Manufacturing",
        "category": "Revolvers",
        "action_type": "Single-Action Revolver (4-Click Lockwork)",
        "operating_actions": ["Single-Action", "Loading Gate Rod Ejection", "4-Click Lockwork"],
        "types": ["Revolvers", "Historic Western", "Cowboy Action"],
        "caliber_categories": [".45 Colt", ".357 Magnum", ".44-40 WCF"],
        "era": "American Frontier (1873–Present)",
        "models": ["Colt SAA 1873", "Peacemaker 4.75\"", "Artillery Model 5.5\"", "Cavalry Model 7.5\""],
        "calibers": [".45 Colt", ".357 Magnum", ".44-40 Winchester"],
        "key_tasks": ["4-Click Hammer Notch Stoning", "Hand & Bolt Flat Spring Replacement", "Cylinder Base Pin Latch Service", "Half-Cock Safety Inspection", "Loading Gate Detent Fitting"],
        "specs": {
            "4_click_cocking": "Hammer makes 4 distinct clicks spelling C-O-L-T: 1. Safety notch, 2. Half-cock loading notch, 3. Cylinder bolt drops, 4. Full-cock sear engagement",
            "safety_protocol": "HISTORIC SAFETY RULE: Always load five cartridges and lower hammer down onto an EMPTY chamber to prevent drop discharge",
            "cylinder_bolt_timing": "Bolt must drop into cylinder notch flute ramp approximately 1/8\" before locking notch",
            "hammer_notch_maintenance": "Safety and half-cock notches are fragile and will shear if trigger is pulled while on half-cock"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Broken Hand and Bolt Spring (Cylinder Free-Wheeling)",
                "short_desc": "Cylinder bolt does not pop up to lock cylinder, or hand fails to rotate cylinder on hammer cock",
                "causes": [
                    "Fracture of the dual-leg flat combination spring inside lower frame.",
                    "Dirt and hardened oil locking the bolt pivot screw."
                ],
                "action": "Gunsmith Action: Disassemble backstrap and trigger guard. Replace broken flat spring with modern piano-wire spring replacement (Wolff or Heinie wire spring) which eliminates flat-leaf breakage permanently."
            }
        ],
        "videos": [
            {
                "id": "c8SAA1873x2w",
                "title": "Colt Single Action Army Complete Disassembly & Tuning",
                "creator": "Mark Novak / Anvil Gunsmithing",
                "category": "Historic Lockwork Restoration",
                "url": "https://www.youtube.com/results?search_query=Colt+Single+Action+Army+%28SAA+1873+Peacemaker%29+Colt+Single+Action+Army+Complete+Disassembly+%26+Tuning+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Colt+Single+Action+Army+%28SAA+1873+Peacemaker%29+Colt+Single+Action+Army+Complete+Disassembly+%26+Tuning+gunsmithing+armorer",
                "summary": "Mark Novak teardown of the 1873 Peacemaker, tuning the combination bolt/hand spring, timing cylinder lockup, and repairing damaged half-cock notches."
            }
        ]
    },

    "Ruger_Blackhawk_Vaquero": {
        "name": "Ruger Blackhawk & Vaquero",
        "subtitle": "New Model Single-Action Revolvers (.357 Mag, .44 Mag, .45 Colt)",
        "manufacturer": "Ruger",
        "category": "Revolvers",
        "action_type": "Single-Action Revolver with Transfer Bar Safety",
        "operating_actions": ["Single-Action", "Transfer Bar Safety", "Coil Spring Lockwork"],
        "types": ["Revolvers", "Cowboy Action", "Magnum Hunting"],
        "caliber_categories": [".357 Magnum", ".44 Magnum", ".45 Colt"],
        "era": "Modern Ruger Single-Action (1955–Present)",
        "models": ["Blackhawk (Adjustable Sights)", "Super Blackhawk (.44 Mag)", "Vaquero (Fixed Sights)", "Bisley Target"],
        "calibers": [".357 Magnum", ".44 Magnum", ".45 Colt", ".41 Magnum"],
        "key_tasks": ["Transfer Bar Clearance & Pinch Test", "Loading Gate Pawl Interlock Check", "Poor Boy's Trigger Job (Uncoupling Leg)", "Cylinder Throat Pin Gauging (.4525\")", "Base Pin Latch Upgrade"],
        "specs": {
            "transfer_bar_safety": "Hammer cannot contact firing pin directly; hammer blow can only reach primer when trigger is held back lifting the transfer bar between them",
            "safe_carry": "100% safe to carry fully loaded with all six chambers charged (unlike classic 1873 design)",
            "loading_gate_interlock": "Opening loading gate automatically drops the cylinder bolt allowing cylinder to freewheel for loading without touching hammer"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Cylinder Pin Jumps Forward Under Heavy Recoil",
                "short_desc": "Firing heavy magnum loads causes cylinder pin to slide forward, binding cylinder rotation",
                "causes": [
                    "Factory spring-loaded base pin latch nut has shallow detent angle.",
                    "High recoil inertia of .44 Mag / heavy .45 Colt loads compressing latch spring."
                ],
                "action": "Gunsmith Action: Install Belt Mountain heavy-duty locking base pin with set screw. Set screw locks pin securely into barrel underlug recess."
            }
        ],
        "videos": [
            {
                "id": "r8B1kHwk9M2w",
                "title": "Ruger Blackhawk Complete Disassembly & Transfer Bar Inspection",
                "creator": "MidwayUSA / Larry Potterfield",
                "category": "Bench Disassembly",
                "url": "https://www.youtube.com/watch?v=r8B1kHwk9M2w",
                "embed_url": "https://www.youtube-nocookie.com/embed/r8B1kHwk9M2w",
                "summary": "Full teardown of the Ruger New Model single-action frame, transfer bar linkage, coil mainspring strut, and cylinder base pin assembly."
            }
        ]
    },

    "SW_J_Frame_Snubnose": {
        "name": "Smith & Wesson J-Frame Snubnose",
        "subtitle": "Airweight 642, 637, Model 36 & Bodyguard (.38 Special & .357 Mag)",
        "manufacturer": "Smith & Wesson",
        "category": "Revolvers",
        "action_type": "Double-Action-Only & DA/SA Concealed Carry Revolver",
        "operating_actions": ["Double-Action", "Enclosed Hammer (Centennial)", "Aluminum Alloy Airweight"],
        "types": ["Revolvers", "Concealed Carry", "Snubnose Pocket Pistol"],
        "caliber_categories": [".38 Special", ".357 Magnum"],
        "era": "American Concealed Carry Benchmark (1950–Present)",
        "models": ["Model 642 Airweight (DAO Enclosed)", "Model 637 Chief's Special", "Model 36 Classic (.38 Spl)", "Model 340 PD (.357 Mag Scandium)"],
        "calibers": [".38 Special (+P)", ".357 Magnum"],
        "key_tasks": ["Centennial Enclosed Hammer Disassembly", "Apex J-Frame Duty Spring Kit", "Barrel-Cylinder Gap Inspection", "Firing Pin Bushing & Spring Service", "Crane Screw Fitting"],
        "specs": {
            "barrel_length": "1.875\" standard snubnose barrel with fixed front ramp sight",
            "frame_material": "Aluminum alloy (Airweight) / Scandium alloy (AirLite) / Carbon or Stainless steel",
            "trigger_pull_weight": "11.5 to 13.0 lbs factory double-action; drops to 8.5–9.0 lbs with Apex Duty kit",
            "firing_pin_location": "Modern J-frames feature frame-mounted spring-loaded firing pin rather than hammer-mounted hammer nose"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Light Strikes on Hard Primer Defense Ammo",
                "short_desc": "Hammer drops with normal snap, but primer fails to ignite on heavy-cup defense rounds",
                "causes": [
                    "Installing ultra-light competition hammer springs in small-diameter J-frame coil strut.",
                    "Frame-mounted firing pin spring fouled with pocket lint causing firing pin drag."
                ],
                "action": "Gunsmith Action: Drive out firing pin retaining pin from frame. Extract firing pin and spring; clean tunnel with solvent. Install Apex extended length firing pin (increases protrusion by 0.008\") and verify 100% primer ignition on CCI/Federal primers."
            }
        ],
        "videos": [
            {
                "id": "s8W642x9M5w",
                "title": "S&W J-Frame 642 Disassembly, Apex Trigger Kit & Tuning",
                "creator": "Apex Tactical Specialties",
                "category": "Snubnose Tuning",
                "url": "https://www.youtube.com/results?search_query=Smith+%26+Wesson+J-Frame+Snubnose+S%26W+J-Frame+642+Disassembly%2C+Apex+Trigger+Kit+%26+Tuning+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Smith+%26+Wesson+J-Frame+Snubnose+S%26W+J-Frame+642+Disassembly%2C+Apex+Trigger+Kit+%26+Tuning+gunsmithing+armorer",
                "summary": "Step-by-step teardown of the S&W J-frame Airweight, installing the extended firing pin, lighter rebound spring, and achieving a smooth 8.5 lb carry trigger."
            }
        ]
    }
}
