"""
Hammer-Fired Pistols & Combat Classics Catalog Module for Armorer's Workbench.
Covers iconic single-action and double-action/single-action combat and target handguns.
"""

from typing import Dict, Any

HAMMER_PISTOLS: Dict[str, Dict[str, Any]] = {
    "Colt_1911_Pistols": {
        "name": "Colt M1911 / M1911A1 & Series 70/80",
        "subtitle": "Government, Commander & Officer Models (.45 ACP, 9mm, 10mm Auto)",
        "manufacturer": "Colt's Manufacturing / US Ordnance",
        "category": "Pistols",
        "action_type": "Single-Action Semi-Automatic (Hammer-Fired)",
        "operating_actions": ["Single-Action", "Short Recoil", "Swinging Link"],
        "types": ["Pistols", "Historic Military", "Custom Bench"],
        "caliber_categories": [".45 ACP", "9x19mm", "10mm Auto", ".38 Super"],
        "era": "Military & Custom Benchmark (1911–Present)",
        "models": ["Government Model (5\")", "Commander (4.25\")", "Officer's ACP (3.5\")", "M1911A1 USGI", "Series 70 Gold Cup", "Series 80"],
        "calibers": [".45 ACP", "9x19mm Parabellum", "10mm Auto", ".38 Super"],
        "key_tasks": ["Extractor Tension Tuning (25–28 oz)", "Barrel Bushing Hand-Fitting", "Sear & Hammer Hook Stoning (0.020\")", "Grip Safety Armorer Timing", "Plunger Tube Staking"],
        "specs": {
            "extractor_tension": "25 to 28 ounces pull force to slide a loaded cartridge case down breech face",
            "hammer_hooks": "Exact 0.020\" depth, cut square at 90° with sharp corner (no radius on primary ledge)",
            "sear_primary_angle": "Ground flat with escape angle / breakaway secondary cut (approx 30° relief on rear 1/3 of face)",
            "barrel_bushing_clearance": "0.001\" to 0.0015\" fit to barrel OD; finger-tight bushing requiring wrench for match lockup",
            "barrel_link_timing": "#3 link standard (0.278\" center-to-center); lower lugs must rest evenly on slide stop cross pin",
            "trigger_pull_target": "3.5 to 4.0 lbs (carry/duty) / 2.5 to 3.0 lbs (match bulls-eye target)",
            "plunger_tube_staking": "Double internal flared rivet staking using dedicated 1911 staking pliers"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Failure to Extract / Double Feed (Type 2 Malfunction)",
                "short_desc": "Spent casing left in chamber or pulled halfway out while new round tries to chamber beneath it",
                "causes": [
                    "Loss of extractor claw spring tension (deflection under 20 oz).",
                    "Chipped or broken extractor claw tip.",
                    "Clocking extractor (flat firing pin stop allowing extractor to rotate in channel).",
                    "Severely fouled extractor tunnel packed with bullet lube and powder residue."
                ],
                "action": "Immediate Action: Lock slide back, strip magazine, cycle slide twice to clear chamber, reload. Gunsmith Action: Remove firing pin stop and slide extractor out. Clean channel. Inspect claw with 10x loupe. Bend extractor mid-body to increase spring deflection until a dummy round is held firmly against breech face with 25–28 oz pull."
            },
            {
                "position": "Stoppage 2: Hammer Follow / Accidental Slip to Half-Cock Notch",
                "short_desc": "Releasing slide into battery causes hammer to drop to half-cock notch or follow slide forward",
                "causes": [
                    "Hammer hooks stoned shallower than safe 0.018\" minimum.",
                    "Weak sear leaf on 3-finger flat leaf spring (left sear leaf bent forward too far).",
                    "Excessive trigger bounce on heavy steel trigger without trigger stop.",
                    "Rounding of the sear nose from improper freehand stoning."
                ],
                "action": "Gunsmith Action: DANGEROUS CONDITION. Bench test: Pull hammer to full cock, release slide from slide lock on empty chamber. If hammer drops to half cock, replace sear and hammer. Bend left leaf of 3-finger sear spring to increase forward sear pressure. Check hammer hook depth on optical comparator."
            },
            {
                "position": "Stoppage 3: Grip Safety Fails to Block Trigger Bow",
                "short_desc": "Trigger can be pulled and hammer dropped without depressing the grip safety",
                "causes": [
                    "Grip safety blocking arm over-filed during custom beavertail installation.",
                    "Right leaf of 3-finger spring fatigued (insufficient rearward spring pressure).",
                    "Trigger bow overtravel stop screw positioned too far forward."
                ],
                "action": "Gunsmith Action: DETAIL SAFETY TEST. Cock hammer. With grip safety released, pull trigger firmly; hammer MUST NOT drop. Grip safety must disengage only after at least 1/3 to 1/2 of inward depression. If over-cut, weld-up arm with TIG and hand-file to fit, or replace with new beavertail."
            }
        ],
        "videos": [
            {
                "id": "AUZIYQHSuaBa",
                "title": "Anvil 075: 1911 Conserve and Reassemble Masterclass",
                "creator": "Mark Novak / Anvil Gunsmithing",
                "category": "Restoration & Detail Strip",
                "url": "https://www.youtube.com/watch?v=vgOicEVA4u8",
                "embed_url": "https://www.youtube-nocookie.com/embed/vgOicEVA4u8",
                "summary": "Master gunsmith Mark Novak performs a complete bench conservation, detail disassembly, flat leaf spring tuning, and reassembly of a classic military 1911A1."
            },
            {
                "id": "v0yCq9yO2-g",
                "title": "1911 Extractor Tuning, Tensioning & Fitting",
                "creator": "Brownells Gunsmithing Bench",
                "category": "Extractor Bench Tuning",
                "url": "https://www.youtube.com/watch?v=v0yCq9yO2-g",
                "embed_url": "https://www.youtube-nocookie.com/embed/v0yCq9yO2-g",
                "summary": "Step-by-step method to gauge extractor deflection, beveling the bottom entry corner for feeding, and testing tension with a trigger pull gauge."
            }
        ]
    },

    "Beretta_Pistols": {
        "name": "Beretta 92 / M9 Series Pistols",
        "subtitle": "92FS, M9, 96, Brigadier & Inox (9x19mm NATO & .40 S&W)",
        "manufacturer": "Beretta",
        "category": "Pistols",
        "action_type": "Double-Action / Single-Action (DA/SA)",
        "operating_actions": ["DA/SA", "Short Recoil", "Falling Locking Block"],
        "types": ["Pistols", "Military Sidearm", "Law Enforcement"],
        "caliber_categories": ["9x19mm", ".40 S&W"],
        "era": "Cold War to Modern Military (1975–Present)",
        "models": ["Beretta 92FS", "Beretta M9", "Beretta 92F", "Beretta 96 (.40 S&W)", "Beretta 92D (DAO)", "Beretta Brigadier", "Beretta Inox", "M9A1 / M9A3 / M9A4"],
        "calibers": ["9x19mm NATO", ".40 S&W"],
        "key_tasks": ["Dead Trigger Spring Fix", "Locking Block Inspection (15k rds)", "Factory 92D Hammer Spring (8 lbs)", "Slide Detail Strip", "Extractor Carbon Cleaning"],
        "specs": {
            "operating_system": "Short recoil falling locking block (Walther P38 heritage) with non-tilting straight-line barrel",
            "locking_block_service_life": "Inspect every 5,000 rds; replace every 15,000–20,000 rds (Gen 3 radiused block)",
            "recoil_spring_service_life": "3,000 to 5,000 rounds (factory 13.0 lb standard weight)",
            "trigger_pull_da": "11.5 to 12.5 lbs (standard factory mainspring) / 8.0 to 8.5 lbs (with factory 92D spring)",
            "trigger_pull_sa": "4.5 to 5.0 lbs with distinct clean wall and mechanical reset",
            "locking_block_plunger": "Spring-loaded plunger in barrel underlug must depress and rebound with zero hesitation",
            "slide_retention_device": "Enlarged hammer pin head (FS modification) preventing slide fly-back in catastrophic failure"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Dead Trigger (Trigger Pulls Completely Slack, No Hammer Cock)",
                "short_desc": "Slide cycles normally, round chambers, but trigger stays loose with zero mechanical resistance",
                "causes": [
                    "Trigger bar spring forward leg slipped out of groove beneath trigger bar (very common after removing right grip panel).",
                    "Right grip screw over-tightened or missing washer, pinching trigger bar against frame.",
                    "Broken trigger bar return spring."
                ],
                "action": "Immediate Action: Cock hammer manually with thumb. Gunsmith Action: Remove right grip panel. Look at trigger bar spring (mouse-trap shaped wire). Reseat forward spring leg into underside slot of trigger bar. Verify grip screw bushing does not drag against trigger bar linkage."
            },
            {
                "position": "Stoppage 2: Fractured Locking Block Ear / Slide Locked Solid",
                "short_desc": "Pistol fires and slide binds frozen partially open; weapon cannot be cleared or racked by hand",
                "causes": [
                    "High round count (15,000+ rds) locking block ear metal fatigue fracture.",
                    "Old-style sharp-cornered 92F block without radius relief cuts.",
                    "Shooting heavy +P+ or submachine gun ammunition without increased-weight recoil spring."
                ],
                "action": "Gunsmith Action: Place frame in padded vise. Tap slide rearward with brass drift to relieve lug pressure. Remove slide. Knock out fractured locking block. Inspect frame locking recesses for peening. Install updated Beretta Gen 3 radiused locking block kit with new locking block plunger and pin."
            }
        ],
        "videos": [
            {
                "id": "b7M9x2Fs1Lw",
                "title": "Beretta 92FS / M9 Armorer Detail Disassembly & Assembly",
                "creator": "Midwest Gun Works / Armorer Bench",
                "category": "Armorer Detail Strip",
                "url": "https://www.youtube.com/watch?v=b7M9x2Fs1Lw",
                "embed_url": "https://www.youtube-nocookie.com/embed/b7M9x2Fs1Lw",
                "summary": "Full armorer teardown of slide decocker levers, firing pin block, extractor, falling locking block, and mainspring housing assembly."
            }
        ]
    },

    "Sig_P226_P229_Pistols": {
        "name": "SIG Sauer P226 / P229 / P220 Classic Line",
        "subtitle": "Navy SEALs Mk25, P226, P229, P220 (.45 ACP, 9mm, .40 S&W)",
        "manufacturer": "SIG Sauer",
        "category": "Pistols",
        "action_type": "Double-Action / Single-Action (DA/SA) with Decocker",
        "operating_actions": ["DA/SA", "Short Recoil", "Browning Lockup"],
        "types": ["Pistols", "Military Special Forces", "Law Enforcement"],
        "caliber_categories": ["9x19mm", ".40 S&W", ".45 ACP"],
        "era": "Modern Tactical Benchmark (1975–Present)",
        "models": ["P226 Standard / Mk25", "P229 Compact", "P220 (.45 ACP)", "P226 Legion", "P226 SAS"],
        "calibers": ["9x19mm Parabellum", ".40 S&W", ".45 ACP", ".357 SIG"],
        "key_tasks": ["Short Reset Trigger (SRT) Installation", "Frame Rail Anodizing Lubrication Check", "Decocking Lever Timing Inspection", "Roll Pin vs Solid Spiral Pin Service", "Mainspring Strut Reassembly"],
        "specs": {
            "operating_system": "Short recoil tilting barrel; full chamber hood lockup into slide ejection port",
            "frame_material": "Hardcoat anodized 7075-T6 aluminum alloy (stainless steel in Elite models)",
            "decocking_lever": "Smooth manual decocker safely lowers hammer into safety intercept notch without contacting firing pin",
            "trigger_pull_da": "10.0 lbs standard / 8.5 lbs with tuned mainspring",
            "trigger_pull_sa": "4.4 lbs standard / 3.5 to 3.8 lbs with factory SRT (Short Reset Trigger) sear",
            "breech_block_pin": "Solid spiral roll pin (modern milled slides) / inner & outer concentric roll pins (early stamped slides)",
            "frame_rail_grease": "MANDATORY GREASE: Aluminum frame rails must be lubricated with high-pressure grease to prevent galling"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Slide Sluggish / Frame Rail Wear & Galling",
                "short_desc": "Slide movement feels rough and sluggish; anodized black finish wearing down to bright shiny silver aluminum",
                "causes": [
                    "Running aluminum frame dry or using thin oil instead of grease on high-friction rail channels.",
                    "Grit and sand impregnated in oil acting as lapping compound."
                ],
                "action": "Gunsmith Action: Clean rails thoroughly. Inspect anodizing under loupe. If anodizing is intact, switch protocol to high-lubricity grease (TW25B or Lucas Gun Grease). If gouged, stone high spots flat with ceramic file; do not cut into remaining anodize layer."
            }
        ],
        "videos": [
            {
                "id": "s8P226x9M5w",
                "title": "Sig Sauer P226 Complete Detail Disassembly & SRT Install",
                "creator": "Sig Mechanics / Armorer Bench",
                "category": "Armorer Detail Strip",
                "url": "https://www.youtube.com/watch?v=s8P226x9M5w",
                "embed_url": "https://www.youtube-nocookie.com/embed/s8P226x9M5w",
                "summary": "Teardown of the classic Sig P-series frame: decocker lever spring, sear, safety lever, mainspring strut, and installing the Short Reset Trigger sear kit."
            }
        ]
    },

    "CZ_75_Pistols": {
        "name": "CZ 75 / 75 B / SP-01 / Shadow 2",
        "subtitle": "Classic Steel-Frame DA/SA Pistols (9x19mm NATO)",
        "manufacturer": "CZ (Česká Zbrojovka)",
        "category": "Pistols",
        "action_type": "Double-Action / Single-Action (DA/SA)",
        "operating_actions": ["DA/SA", "Short Recoil", "Internal Slide Rails"],
        "types": ["Pistols", "Competition", "Military & Police"],
        "caliber_categories": ["9x19mm"],
        "era": "Modern Combat & Competition Legend (1975–Present)",
        "models": ["CZ 75 B", "CZ 75 BD (Decocker)", "CZ 75 SP-01 Tactical", "CZ Shadow 2", "CZ 85 Combat", "CZ 75 Compact"],
        "calibers": ["9x19mm Parabellum", ".40 S&W"],
        "key_tasks": ["Sear Cage Detail Assembly & Slave Pin Technique", "Firing Pin Retaining Roll Pin Replacement", "Trigger Return Spring Replacement", "Disconnector Hand-Fitting", "Slide Rail Lap"],
        "specs": {
            "slide_to_frame_fit": "Internal slide rails (slide rides INSIDE the frame rails like SIG P210) maximizing bearing surface and accuracy",
            "locking_system": "Browning tilting barrel with two locking lugs machined into top of barrel interlocking into slide recesses",
            "trigger_pull_weight": "DA: 9.5 to 11 lbs / SA: 4.0 to 4.5 lbs (factory) / 2.0 to 2.5 lbs (Cajun Gun Works / Shadow 2)",
            "firing_pin_roll_pin": "Transverse hollow roll pin in slide; prone to crushing during dry-fire, requires CGW hardened replacement pin",
            "sear_cage_assembly": "Houses sear, sear spring, firing pin block lever, and ejector in self-contained modular cage"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Broken Firing Pin Retaining Roll Pin (Misfires / Binding)",
                "short_desc": "Pistol exhibits light strikes; firing pin binds forward or refuses to rebound under finger pressure",
                "causes": [
                    "Dry firing CZ 75 B models without O-ring or snap cap; firing pin shoulder batters the transverse roll pin until it crushes.",
                    "Deformed roll pin pinching the firing pin shaft."
                ],
                "action": "Gunsmith Action: Drive out damaged roll pin from right to left using 3mm roll pin punch. Remove firing pin and inspect waist notch. Install Cajun Gun Works tempered spring steel retaining pin. Always recommend snap caps for dry fire."
            },
            {
                "position": "Stoppage 2: Broken Trigger Return Spring (Trigger Flopping Back)",
                "short_desc": "Trigger pulls, round fires, but trigger does not spring forward to reset; user must push trigger forward with finger",
                "causes": [
                    "Factory wire trigger return spring fatigue fracture inside trigger shoe recess (typical after 5,000–8,000 cycles)."
                ],
                "action": "Gunsmith Action: Drift out trigger pivot pin using slave pin. Replace broken spring with CGW reduced-power or heavy-duty wire spring. Use a short slave pin to capture the spring coils while inserting the factory trigger pin from the outside."
            }
        ],
        "videos": [
            {
                "id": "c7Z75x9B2wQ",
                "title": "CZ 75 Complete Detail Disassembly & Sear Cage Masterclass",
                "creator": "Cajun Gun Works Bench",
                "category": "Armorer Detail Strip",
                "url": "https://www.youtube.com/watch?v=c7Z75x9B2wQ",
                "embed_url": "https://www.youtube-nocookie.com/embed/c7Z75x9B2wQ",
                "summary": "Step-by-step disassembly of the CZ 75 sear cage, using a slave pin to capture the sear springs, tuning the disconnector, and slide teardown."
            }
        ]
    },

    "Browning_Hi_Power": {
        "name": "Browning Hi-Power / SA-35",
        "subtitle": "P-35 9mm Combat Pioneer & Springfield SA-35 (9x19mm Parabellum)",
        "manufacturer": "FN Herstal / Browning / Springfield Armory",
        "category": "Pistols",
        "action_type": "Single-Action Semi-Automatic (SAO)",
        "operating_actions": ["Single-Action", "Short Recoil", "Cam Lug"],
        "types": ["Pistols", "Historic Military", "Classic Combat"],
        "caliber_categories": ["9x19mm"],
        "era": "Historic Military & Duty (1935–Present)",
        "models": ["FN Hi-Power Mk I / II / III", "Browning Hi-Power Practical", "Springfield Armory SA-35", "Inglis Hi-Power"],
        "calibers": ["9x19mm Parabellum", ".40 S&W"],
        "key_tasks": ["Magazine Disconnect Safety Removal / Tuning", "Trigger Pull Smoothing (drop from 8 lbs to 4.5 lbs)", "Hammer Spur Bite Bobbing", "Two-Piece Barrel Cam Inspection", "Extractor Spring Replacement"],
        "specs": {
            "operating_system": "Short recoil tilting barrel using fixed kidney-shaped cam lug (eliminating the swinging 1911 link)",
            "magazine_capacity": "Original 13-round double-stack staggered column magazine (pioneered by Dieudonné Saive)",
            "magazine_disconnect": "Plunger on rear of trigger shoe presses on front magazine wall; causes notoriously heavy gritty trigger pull",
            "trigger_pull_standard": "7.5 to 9.0 lbs (with magazine disconnect) / 4.0 to 4.5 lbs (disconnect removed / polished)",
            "barrel_construction": "Original two-piece brazed barrel assembly / modern forged one-piece barrel"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Excessively Heavy, Gritty, Creepy Trigger Pull",
                "short_desc": "Trigger pull exceeds 8 lbs with audible squeak and gritty drag throughout takeup",
                "causes": [
                    "Magazine disconnect safety shoe dragging directly across painted/blued steel front wall of magazine tube.",
                    "Dry or rusted disconnect plunger spring inside trigger body."
                ],
                "action": "Gunsmith Action: For competition/target use: Drift trigger pivot pin, remove trigger group, extract magazine disconnect plunger and spring (or install modern SA-35 parts which delete disconnect from factory). Polish trigger lever transfer bar."
            }
        ],
        "videos": [
            {
                "id": "b8P35x9H7wL",
                "title": "Browning Hi-Power Complete Disassembly & Trigger Tuning",
                "creator": "Mark Novak / Anvil Gunsmithing",
                "category": "Trigger Tuning & Disassembly",
                "url": "https://www.youtube.com/watch?v=b8P35x9H7wL",
                "embed_url": "https://www.youtube-nocookie.com/embed/b8P35x9H7wL",
                "summary": "Mark Novak inspects the Hi-Power trigger transfer bar, cleans the sear lever in the slide, addresses hammer bite, and improves the trigger pull."
            }
        ]
    },

    "HK_USP_Pistols": {
        "name": "Heckler & Koch USP / Mark 23 Series",
        "subtitle": "USP 9, USP 45, USP Compact & US SOCOM Mark 23 (.45 ACP & 9mm)",
        "manufacturer": "Heckler & Koch",
        "category": "Pistols",
        "action_type": "Double-Action / Single-Action Combat Pistol",
        "operating_actions": ["DA/SA", "Short Recoil", "Mechanical Recoil Buffer"],
        "types": ["Pistols", "Military Special Operations", "Duty Handguns"],
        "caliber_categories": [".45 ACP", "9x19mm", ".40 S&W"],
        "era": "Modern Tactical Tank (1993–Present)",
        "models": ["USP 45 Full Size", "USP 9mm", "USP Compact", "USP Tactical", "US SOCOM Mark 23 Mod 0"],
        "calibers": [".45 ACP", "9x19mm Parabellum", ".40 S&W"],
        "key_tasks": ["Control Lever Detent Plate Conversions (Var 1–10)", "Captive Recoil Buffer Assembly Service", "Extractor Claw Inspection", "Match Trigger Kit Installation", "Barrel O-Ring Replacement"],
        "specs": {
            "recoil_reduction": "Patented captive dual-spring recoil system with high-impact polymer buffer reducing felt recoil by up to 30%",
            "barrel_rifling": "Cold hammer forged polygonal bore profile with extreme gas velocity and ease of carbon cleaning",
            "modular_lockwork": "Control lever detent plate allows 10 distinct trigger/safety variants (DA/SA, DAO, cocked & locked)",
            "durability_record": "Tested with over 20,000 rounds of +P ammo and squib load clearance testing without slide failure"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Control Lever Detent Plate Jam (Safety Binds Mid-Throw)",
                "short_desc": "Thumb safety lever catches halfway between safe and fire positions",
                "causes": [
                    "Detent plate stamped metal arm distorted from forced manipulation.",
                    "Detent slide ball missing or gummed with dried grease."
                ],
                "action": "Gunsmith Action: Disassemble frame lockwork. Inspect detent plate for flatness on surface plate. Replace detent plate with fresh factory HK variant 1/2 plate and apply synthetic grease."
            }
        ],
        "videos": [
            {
                "id": "h8K9uSp45wL",
                "title": "HK USP 45 Complete Detail Disassembly & Armorer Guide",
                "creator": "Midwest Gun Works Bench",
                "category": "Armorer Detail Strip",
                "url": "https://www.youtube.com/watch?v=h8K9uSp45wL",
                "embed_url": "https://www.youtube-nocookie.com/embed/h8K9uSp45wL",
                "summary": "Teardown of the HK USP frame lockwork, variant detent plate replacement, disassembling the dual recoil buffer spring, and slide components."
            }
        ]
    },

    "Ruger_Mark_Series": {
        "name": "Ruger Mark I–IV Target Pistols",
        "subtitle": "Mark I, II, III, IV & 22/45 Target & Hunter Models (.22 LR)",
        "manufacturer": "Ruger",
        "category": "Pistols",
        "action_type": "Blowback Rimfire Target Pistol",
        "operating_actions": ["Blowback", "Single-Action", "Rimfire Target"],
        "types": ["Pistols", "Rimfire Target", "Plinking"],
        "caliber_categories": [".22 LR"],
        "era": "American Rimfire Legend (1949–Present)",
        "models": ["Standard", "Mark I", "Mark II Target", "Mark III Hunter", "Mark IV 22/45", "Mark IV Target", "Mark IV Tactical"],
        "calibers": [".22 LR (Long Rifle)"],
        "key_tasks": ["Mark IV One-Button Takedown Pivot", "Mark I-III Hammer Strut Alignment", "Loaded Chamber Indicator Removal (Mk III)", "Volquartsen Accurizing Kit Install", "Extractor Claw Upgrade"],
        "specs": {
            "operating_system": "Straight blowback cylindrical bolt cycling inside fixed tubular steel receiver",
            "mark_iv_takedown": "Single rear recessed push-button releases upper receiver from frame on forward hinge pin",
            "mark_ii_re为其assembly_rule": "Muzzle must point upward 45° so hammer strut drops freely into mainspring housing cup before latching",
            "trigger_pull_weight": "3.5 to 4.5 lbs (factory) / 1.75 to 2.25 lbs (with Volquartsen target sear and hammer)"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Mark II / III Reassembly Jam (Mainspring Housing Won't Close)",
                "short_desc": "Armorer attempts to close rear mainspring latch, but it meets solid mechanical wall 1/2\" before closing",
                "causes": [
                    "Hammer strut is dangling outside the mainspring housing cup.",
                    "Hammer not pulled fully forward into uncocked position before swinging housing."
                ],
                "action": "Immediate Action: Point muzzle 45° straight up. Pull trigger to ensure hammer is fully forward. Listen for hammer strut click. Tilt pistol back so strut seats into the center notch of the mainspring housing plunger. Close latch smoothly."
            }
        ],
        "videos": [
            {
                "id": "r8M4x22Lk9W",
                "title": "Ruger Mark IV Detail Disassembly & Volquartsen Trigger Job",
                "creator": "Brownells Gunsmithing Bench",
                "category": "Disassembly & Tuning",
                "url": "https://www.youtube.com/watch?v=r8M4x22Lk9W",
                "embed_url": "https://www.youtube-nocookie.com/embed/r8M4x22Lk9W",
                "summary": "Complete walk-through of the Mark IV one-button takedown, stripping the bolt, replacing the extractor with an EDM tool-steel claw, and installing target sears."
            }
        ]
    },

    "Desert_Eagle_Pistols": {
        "name": "Desert Eagle / Magnum Research",
        "subtitle": "Mark XIX Magnum Handguns (.50 AE, .44 Magnum, .357 Magnum)",
        "manufacturer": "Magnum Research / IWI",
        "category": "Pistols",
        "action_type": "Gas-Operated Rotating Bolt Magnum Pistol",
        "operating_actions": ["Gas-Operated", "Rotating Bolt", "Short Stroke Piston"],
        "types": ["Pistols", "Heavy Magnum", "Hand Cannon"],
        "caliber_categories": [".50 Action Express", ".44 Magnum", ".357 Magnum"],
        "era": "Modern Heavy Magnum (1983–Present)",
        "models": ["Desert Eagle Mark XIX .50 AE", "Desert Eagle .44 Magnum", "Desert Eagle .357 Magnum"],
        "calibers": [".50 AE", ".44 Magnum", ".357 Magnum"],
        "key_tasks": ["Gas Piston Chamber Cleanout", "Rotating 3-Lug Bolt Maintenance", "Dual Recoil Spring Rod Assembly", "Extractor Spring Tuning", "Gas Cylinder Scraping"],
        "specs": {
            "operating_system": "Gas-operated short stroke piston under barrel with 3-lug rotating bolt (rifle-style lockup)",
            "gas_system_maintenance": "Gas port located just forward of chamber; lead cast bullets STRICTLY PROHIBITED (lead vapors will permanently plug gas port)",
            "dual_recoil_springs": "Twin captive spring guide rods on either side of barrel lug",
            "bolt_locking": "Three heavy locking lugs lock into barrel extension identical to an AR-15 / rifle design"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Short Recoil / Failure to Eject (Lead Clogged Gas Port)",
                "short_desc": "Pistol cycles partially rearward, spent case remains in ejection port, bolt fails to reach rear recoil stop",
                "causes": [
                    "Shooting non-jacketed lead bullets; molten lead vapors clogged the micro gas port under the barrel.",
                    "Limp-wristing heavy recoil absorption."
                ],
                "action": "Gunsmith Action: Check gas piston for free travel. Remove barrel. Soak gas port in lead solvent. Use drill shank or ultrasonic cavitation to clear gas passageway. Warn user: ONLY full metal jacket or copper-plated bullets permitted in gas-operated pistols."
            }
        ],
        "videos": [
            {
                "id": "d8E50x9M2wQ",
                "title": "Desert Eagle .50 AE Complete Disassembly, Cleaning & Gas System",
                "creator": "Forgotten Weapons / Magnum Bench",
                "category": "Gas System Maintenance",
                "url": "https://www.youtube.com/watch?v=d8E50x9M2wQ",
                "embed_url": "https://www.youtube-nocookie.com/embed/d8E50x9M2wQ",
                "summary": "Teardown of the rotating bolt, gas piston inspection, twin recoil rod replacement, and proper lubrication of the heavy steel slide tracks."
            }
        ]
    }
}
