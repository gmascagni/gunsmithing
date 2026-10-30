"""
Striker-Fired Pistols Catalog Module for Armorer's Workbench.
Covers the most popular striker-fired duty, concealed carry, and training handguns.
"""

from typing import Dict, Any

STRIKER_PISTOLS: Dict[str, Dict[str, Any]] = {
    "Glock_Pistols": {
        "name": "Glock Safe-Action Pistols",
        "subtitle": "Generations 1–5 (9x19mm, .40 S&W, .45 ACP, 10mm Auto)",
        "manufacturer": "Glock",
        "category": "Pistols",
        "action_type": "Striker-Fired Safe Action",
        "operating_actions": ["Striker-Fired", "Short Recoil", "Safe-Action"],
        "types": ["Pistols", "Duty Handguns", "Concealed Carry"],
        "caliber_categories": ["9x19mm", ".40 S&W", ".45 ACP", "10mm Auto"],
        "era": "Modern Duty & Tactical (1982–Present)",
        "models": ["Glock 17", "Glock 19", "Glock 21", "Glock 22", "Glock 26", "Glock 34", "Glock 43", "Glock 43X", "Glock 48"],
        "calibers": ["9x19mm", ".40 S&W", ".45 ACP", "10mm Auto", ".357 SIG"],
        "key_tasks": ["Cruciform Sear Check (66%)", "5-Drop Lube Protocol", "25¢ Trigger Polish", "30274 Ejector Bar Upgrade", "Detail Strip"],
        "specs": {
            "cruciform_sear_engagement": "≥ 66% (minimum 2/3 sear overlap) verified via orange armorer inspection cover plate (SP 02096)",
            "connector_gap": "0.005\" to 0.010\" clearance between connector top tab and trigger housing wall",
            "trigger_pull_standard": "5.5 lbs (standard unmarked connector) / 4.5 lbs (dot) / 3.5 lbs (minus connector)",
            "firing_pin_protrusion": "0.045\" to 0.055\" through breech face; must retract freely under spring cups",
            "slide_rail_clearance": "0.008\" to 0.014\" slide-to-frame rail runout",
            "lubrication_points": "Exactly 5 drops: 1 each rear slide rail, 1 each front slide rail, 1 barrel exterior hood/lug, 0.5 connector ramp wipe",
            "critical_warning": "DO NOT lubricate firing pin channel or firing pin safety plunger cavity; must remain 100% dry to avoid hydraulic lock and misfires"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Slide Out of Battery (1/16\" to 1/8\" Gap)",
                "short_desc": "Slide hangs up just short of lockup; trigger cannot reset or fire",
                "causes": [
                    "Carbon buildup on barrel hood or breech face locking shoulder.",
                    "Weak recoil spring assembly (captured guide rod fatigue).",
                    "Over-expanded reloaded case or fouled match chamber.",
                    "Deformed polymer guide rod rubbing slide dust cover channel."
                ],
                "action": "Immediate Action: Tap rear of slide with heel of hand to seat in battery. Gunsmith Action: Run Glock 45° recoil spring test (empty weapon, cock, pull trigger, point 45° straight up, ease slide rearward 1/4\" and release gently; slide must go fully into battery under spring pressure alone). Replace RSA if failed."
            },
            {
                "position": "Stoppage 2: Erratic Ejection / Brass to Face (BTF)",
                "short_desc": "Spent casing ejects straight back into armorer face or dribbles out of port",
                "causes": [
                    "Early Gen 4 336 stamped ejector bar installed instead of updated 30274/47021 part.",
                    "Chipped or deformed extractor claw face.",
                    "Extractor depressor plunger loaded backwards (metal bearing must touch extractor, polymer bearing touches slide cover plate).",
                    "Excessive carbon or brass shavings packed in extractor claw pocket."
                ],
                "action": "Gunsmith Action: Inspect extractor claw under 10x loupe. Upgrade ejector bar to factory Gen 4 30274 (9mm) or Gen 5 47021. Verify extractor plunger spring order: plunger -> spring -> polymer spring-loaded bearing."
            },
            {
                "position": "Stoppage 3: Light Primer Strikes (Click Instead of Bang)",
                "short_desc": "Firing pin releases but indentation on primer cup is shallow or off-center",
                "causes": [
                    "Oil, solvent, or hardened carbon inside firing pin channel liner causing hydraulic drag.",
                    "Chipped or worn firing pin tip.",
                    "Cracked or broken polymer firing pin spring cups (SP 00070).",
                    "Aftermarket reduced-power striker spring installed (4.0 lb vs factory 5.5 lb)."
                ],
                "action": "Gunsmith Action: Detail strip slide. Inspect firing pin channel; clean with dry cotton swab (NEVER oil). Shake slide back and forth; striker must click and slide freely. Replace spring cups if cracked."
            },
            {
                "position": "Stoppage 4: Trigger Fails to Reset (Dead Trigger After Cycling)",
                "short_desc": "Slide cycles rearward, extracts and chambers next round, but trigger remains slack against rear frame",
                "causes": [
                    "Broken or unhooked coil trigger spring in trigger housing (NY1/NY2 spring inverted).",
                    "Connector bent inward too far (connector lip dragging heavily inside housing cut).",
                    "Trigger bar cruciform binding on frame ejector housing.",
                    "Cruciform drop safety shelf dropped below ejector pin ledge."
                ],
                "action": "Gunsmith Action: Check connector angle. Bend connector slightly outward until a sheet of paper (approx 0.008\") passes between connector top lip and trigger housing. Verify trigger spring 'S' hook orientation."
            }
        ],
        "videos": [
            {
                "id": "7P4Y1f5t1J8",
                "title": "Glock Complete Detail Disassembly & Reassembly Masterclass",
                "creator": "MidwayUSA / Larry Potterfield",
                "category": "Detail Strip & Bench Assembly",
                "url": "https://www.youtube.com/watch?v=7P4Y1f5t1J8",
                "embed_url": "https://www.youtube-nocookie.com/embed/7P4Y1f5t1J8",
                "summary": "Step-by-step frame and slide complete teardown using standard 3/32\" armorer punch. Removing locking block, trigger mechanism housing, connector, and striker channel liner."
            },
            {
                "id": "e_r1Kz_T2Lg",
                "title": "Glock 25¢ Trigger Job & Cruciform Sear Safety Engagement Check",
                "creator": "Brownells Gunsmithing Bench",
                "category": "Tuning & Armorer Safety Inspection",
                "url": "https://www.youtube.com/watch?v=e_r1Kz_T2Lg",
                "embed_url": "https://www.youtube-nocookie.com/embed/e_r1Kz_T2Lg",
                "summary": "Polishing bearing surfaces (trigger bar tab, connector ramp, safety plunger, cruciform sear shelf) with Mother's polish. Verification of 66% sear engagement with armorer plate."
            }
        ]
    },

    "Sig_P365_Pistols": {
        "name": "SIG Sauer P365 Series Pistols",
        "subtitle": "P365, P365X, P365 XL, P365-XMACRO & SAS (9x19mm & .380 ACP)",
        "manufacturer": "SIG Sauer",
        "category": "Pistols",
        "action_type": "Striker-Fired Modular FCU Micro-Compact",
        "operating_actions": ["Striker-Fired", "Short Recoil", "Chassis-Based FCU"],
        "types": ["Pistols", "Concealed Carry", "Micro-Compact"],
        "caliber_categories": ["9x19mm", ".380 ACP"],
        "era": "Modern Concealed Carry (2018–Present)",
        "models": ["P365 Standard", "P365X", "P365 XL", "P365-XMACRO", "P365 SAS", "P365-.380"],
        "calibers": ["9x19mm Parabellum", ".380 ACP"],
        "key_tasks": ["FCU Chassis Extraction", "Extractor Spring & Pin Inspection", "Striker Drag Assessment", "Disconnector Cleaning", "Grip Module Swap"],
        "specs": {
            "operating_system": "Short recoil tilting barrel with standalone serialized Fire Control Unit (FCU) chassis",
            "trigger_pull_weight": "5.5 to 6.5 lbs (curved or factory flat trigger)",
            "striker_design": "Chiseled chisel-point striker tip (Gen 2 updated to eliminate primer wipe drag)",
            "extractor_spring": "Flat-wound high-cycle wire spring with internal indexing plunger",
            "fcu_retention_pin": "Single rear frame takedown cross-pin; pushes out left-to-right",
            "magazine_catch": "Reversible steel catch with spring-loaded wedge plunger",
            "slide_rail_clearance": "0.006\" to 0.010\" on stainless steel chassis rail tabs"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Failure to Extract (Spent Casing Left in Chamber)",
                "short_desc": "Slide cycles rearward, extractor slips off rim, leaving expanded casing in chamber while feeding new round",
                "causes": [
                    "Carbon fouling or brass shavings packed beneath the extractor claw.",
                    "Fatigued or damaged flat extractor spring.",
                    "Chipped extractor hook edge.",
                    "Lacquered steel casing expansion in tight micro-compact chamber."
                ],
                "action": "Gunsmith Action: Drive out top extractor retaining pin with 1/16\" punch. Remove extractor claw, plunger, and spring. Clean recess with brass brush; inspect hook angle under 10x magnification. Reinstall with fresh factory spring if extractor tension is under 2.5 lbs pull."
            },
            {
                "position": "Stoppage 2: Dead Trigger / Disconnector Hang-up After Cycling",
                "short_desc": "Slide goes fully into battery, but trigger stays trapped rearward with no sear click",
                "causes": [
                    "Disconnector tab on right side of FCU fouled with pocket lint or dry abrasive dust.",
                    "Trigger bar return spring disconnected from rear trigger bar hole.",
                    "Grip module internal wall rubbing on trigger bar linkage."
                ],
                "action": "Immediate Action: Press forward on trigger shoe to reset. Gunsmith Action: Push out rear FCU pin and lift chassis up and out of grip module. Inspect trigger bar spring (tiny leg hooked into chassis). Spray clean with non-chlorinated solvent, wipe dry, apply single micro-drop of synthetic oil to disconnector pivot."
            },
            {
                "position": "Stoppage 3: Slide Catch Fails to Lock Open on Empty Magazine",
                "short_desc": "Last round fires, magazine follower reaches top, but slide slams shut on empty chamber",
                "causes": [
                    "Weak magazine spring in high-capacity 12rd/15rd/17rd magazine.",
                    "Slide catch lever spring leg unseated from chassis retaining notch.",
                    "Shooter high thumb-forward grip riding downward on external slide catch tab."
                ],
                "action": "Gunsmith Action: Insert empty factory magazine and cycle slide briskly by hand. If it locks open manually but fails in live fire, check shooter thumb clearance or stretch/replace magazine spring."
            }
        ],
        "videos": [
            {
                "id": "EBVTpVn-xjX",
                "title": "Sig Sauer P365 Complete Takedown & FCU Chassis Removal",
                "creator": "Sig Mechanics Bench",
                "category": "FCU Teardown & Inspection",
                "url": "https://www.youtube.com/watch?v=EBVTpVn-xjX",
                "embed_url": "https://www.youtube-nocookie.com/embed/EBVTpVn-xjX",
                "summary": "Detailed armorer guide to driving out the rear frame pin, lifting the serialized FCU out of the polymer grip frame, and inspecting the disconnector and slide catch lever spring."
            },
            {
                "id": "FMftVGoLNgP",
                "title": "Sig P365 Striker Assembly Disassembly, Cleaning & Upgrades",
                "creator": "Brownells Gunsmithing",
                "category": "Striker Maintenance",
                "url": "https://www.youtube.com/watch?v=FMftVGoLNgP",
                "embed_url": "https://www.youtube-nocookie.com/embed/FMftVGoLNgP",
                "summary": "How to depress the slide rear cap sleeve, slide off the backplate, remove the striker assembly, clean the striker channel, and check for primer drag wear."
            }
        ]
    },

    "Sig_P320_M17_Pistols": {
        "name": "SIG Sauer P320 / M17 / M18 Modular Pistols",
        "subtitle": "US Military M17/M18 Service Pistols & P320 Series (9x19mm, .40 S&W, .45 ACP)",
        "manufacturer": "SIG Sauer",
        "category": "Pistols",
        "action_type": "Modular Striker-Fired Service Pistol",
        "operating_actions": ["Striker-Fired", "Chassis-Based FCU", "Short Recoil"],
        "types": ["Pistols", "Military Sidearm", "Law Enforcement"],
        "caliber_categories": ["9x19mm", ".40 S&W", ".45 ACP"],
        "era": "Modern Military & Police (2014–Present)",
        "models": ["P320 Full Size", "P320 Carry", "P320 Compact", "M17 Military (US Army)", "M18 Compact (US Navy/Marines)", "P320 X-Five"],
        "calibers": ["9x19mm Parabellum", ".40 S&W", ".45 ACP", ".357 SIG"],
        "key_tasks": ["FCU Detail Disassembly", "Voluntary Upgrade Safety Verification", "Extractor Pin Retainer Service", "Takedown Safety Lever Check", "Manual Safety Rebuild"],
        "specs": {
            "chassis_system": "Stainless steel internal Fire Control Unit (FCU) stamped with serial number; tool-less removal",
            "trigger_pull_weight": "5.5 to 6.5 lbs (standard) / 4.0 to 4.5 lbs (Legion/X-Series flat trigger)",
            "safety_system": "Internal striker safety block, disconnector, trigger bar sear disconnect, and optional ambidextrous manual thumb safety (M17/M18)",
            "barrel_lockup": "Full-chamber breech hood locks into slide ejection port cutout",
            "slide_backplate": "Slide cap with captive extractor spring guide rod and striker lock plate",
            "upgrade_status": "Factory voluntary trigger safety upgrade incorporates lightweight trigger shoe, mechanical disconnector, and skeletonized sear"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Slide Will Not Lock Back on Takedown Pin Rotate",
                "short_desc": "Takedown lever refuses to rotate 90° downward during disassembly",
                "causes": [
                    "Magazine still seated in pistol (takedown safety interlock engaged).",
                    "Slide not pulled to absolute maximum rearward travel before engaging slide stop.",
                    "Takedown safety lever inside FCU binding on trigger bar."
                ],
                "action": "Immediate Action: Drop magazine, verify chamber clear, lock slide full rearward, then rotate lever 90° clockwise. Gunsmith Action: Inspect internal takedown safety lever (curved sheet metal arm) for bends or binding."
            },
            {
                "position": "Stoppage 2: Light Primer Strikes After Striker Cleaning",
                "short_desc": "Striker releases with audible click but round does not fire; primer shows light faint strike",
                "causes": [
                    "Liquid oil or solvent left in striker channel creating hydrodynamic resistance against striker cup.",
                    "Striker safety block spring inverted or jammed.",
                    "Debris in firing pin hole on breech face."
                ],
                "action": "Gunsmith Action: Detail strip slide. Pull out striker assembly. Swab striker channel with dry Q-tip until bone dry. Inspect striker spring cups and striker return spring."
            }
        ],
        "videos": [
            {
                "id": "wXy8f9Z7bQs",
                "title": "Sig P320 / M17 Complete Armorer Teardown & Rebuild",
                "creator": "Sig Mechanics / Armorer Bench",
                "category": "Armorer Detail Strip",
                "url": "https://www.youtube.com/watch?v=wXy8f9Z7bQs",
                "embed_url": "https://www.youtube-nocookie.com/embed/wXy8f9Z7bQs",
                "summary": "Full bench teardown of the P320/M17 FCU: Sear spring replacement, safety lever alignment, trigger bar reassembly, and testing drop safety tolerances."
            }
        ]
    },

    "Smith_Wesson_MP_Shield": {
        "name": "Smith & Wesson M&P & Shield Series",
        "subtitle": "M&P9 M2.0, Shield, Shield Plus, Equalizer (9x19mm, .40 S&W, .45 ACP)",
        "manufacturer": "Smith & Wesson",
        "category": "Pistols",
        "action_type": "Striker-Fired Duty & Concealed Carry",
        "operating_actions": ["Striker-Fired", "Short Recoil", "Browning Cam"],
        "types": ["Pistols", "Duty Handguns", "Concealed Carry"],
        "caliber_categories": ["9x19mm", ".40 S&W", ".45 ACP"],
        "era": "Modern Duty & Concealed Carry (2005–Present)",
        "models": ["M&P9 M2.0 Full Size", "M&P9 M2.0 Compact", "M&P Shield 9", "M&P Shield Plus", "M&P45 M2.0", "Equalizer"],
        "calibers": ["9x19mm Parabellum", ".40 S&W", ".45 ACP", "10mm Auto"],
        "key_tasks": ["Sear Deactivation Lever Takedown", "Apex Trigger & Sear Fitting", "Striker Block Plunger Polishing", "Extractor Roll Pin Inspection", "Frame Chassis Bedding"],
        "specs": {
            "sear_deactivation_lever": "Yellow/green internal lever inside magazine well pushes down to drop sear without pulling trigger for takedown",
            "trigger_pull_weight": "5.5 to 6.5 lbs (M2.0 factory flat/curved) / 4.0 to 4.5 lbs (with Apex Forward Set Sear)",
            "striker_block_safety": "Dome-shaped steel plunger in slide; must be pushed upward to allow striker forward travel",
            "frame_sub_chassis": "Embedded stainless steel chassis embedded in Zytel polymer frame to resist torsional flex",
            "barrel_twist": "1:10\" 5R rifling on M2.0 barrels for lead/jacketed bullet stability"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Gritty Trigger Takeup / False Reset Click",
                "short_desc": "Trigger pull has noticeable gritty drag before breaking; user feels double click during reset",
                "causes": [
                    "Factory striker block safety plunger stamped with rough machining ridges.",
                    "Trigger bar candy-cane loop rubbing frame ejector block.",
                    "Fouling beneath rear sight dovetail pressing on striker block spring."
                ],
                "action": "Gunsmith Action: Drift out rear sight (or remove optic plate). Extract striker block plunger. Chuck plunger into lathe or hand drill; polish hemispherical dome with 2000-grit paper and Flitz compound to mirror finish. Stone bottom edge of trigger bar candy-cane loop."
            },
            {
                "position": "Stoppage 2: Slide Lock Lever Disengages Prematurely on Mag Insertion",
                "short_desc": "Inserting fresh loaded magazine causes slide to automatically slam forward into battery without pressing slide release",
                "causes": [
                    "Worn slide stop detent ball and spring on M&P M2.0 slide stop assembly.",
                    "Rounding of the slide stop engagement notch in the slide.",
                    "Over-aggressive upward slam of magazine floorplate during tactical reload."
                ],
                "action": "Gunsmith Action: Inspect slide stop engagement notch under magnification. If edge is rounded, square notch with needle file. Replace slide stop lever assembly with updated M2.0 detent unit."
            }
        ],
        "videos": [
            {
                "id": "k8M7p2W9vLs",
                "title": "S&W M&P 2.0 Detail Disassembly & Apex Trigger Installation",
                "creator": "Apex Tactical Specialties",
                "category": "Trigger Tuning & Disassembly",
                "url": "https://www.youtube.com/watch?v=k8M7p2W9vLs",
                "embed_url": "https://www.youtube-nocookie.com/embed/k8M7p2W9vLs",
                "summary": "Complete walk-through of drifting roll pins, removing sear housing block, installing forward set sear and ultimate striker block, and tuning trigger overtravel."
            }
        ]
    },

    "Springfield_Hellcat_XD": {
        "name": "Springfield Armory Hellcat & XD Series",
        "subtitle": "Hellcat, Hellcat Pro, XD-M Elite & XD-S (9x19mm & .45 ACP)",
        "manufacturer": "Springfield Armory / HS Produkt",
        "category": "Pistols",
        "action_type": "Striker-Fired Micro-Compact & Duty",
        "operating_actions": ["Striker-Fired", "Short Recoil", "Grip Safety (XD)"],
        "types": ["Pistols", "Concealed Carry", "Duty Handguns"],
        "caliber_categories": ["9x19mm", ".45 ACP", "10mm Auto"],
        "era": "Modern Duty & CCW (2002–Present)",
        "models": ["Hellcat Micro-Compact", "Hellcat Pro", "XD-M Elite 4.5\"", "XD-S Mod.2", "XD-9 Service"],
        "calibers": ["9x19mm Parabellum", ".45 ACP", "10mm Auto", ".40 S&W"],
        "key_tasks": ["Striker Retaining Roll Pin Replacement", "Extractor Tension Tuning", "Dual Captive Recoil Spring Service", "Grip Safety Spring Reset (XD)", "Optics Cut Screws Torque"],
        "specs": {
            "operating_system": "Short recoil tilting barrel (Browning-Petter style locking)",
            "striker_pin_safety": "Transverse steel roll pin through slide top retains striker and striker dampening spring",
            "loaded_chamber_indicator": "Mechanical pivoting top lever visually and tactilely indicates loaded chamber",
            "trigger_pull_weight": "5.5 to 6.5 lbs (Hellcat Gen 2 flat trigger) / 5.0 to 5.5 lbs (XD-M Elite META trigger)",
            "magazine_capacity": "11+1 / 13+1 / 15+1 rounds in patented staggered micro-compact magazine body"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Broken Striker Retaining Roll Pin (Dry Fire Failure)",
                "short_desc": "Striker fails to capture; slide locks up or striker binds forward during cycling",
                "causes": [
                    "Extensive dry fire without snap caps causing striker collar to batter the transverse roll pin in slide.",
                    "Split or sheared factory split roll pin."
                ],
                "action": "Gunsmith Action: Drive out broken roll pin fragments using 3/32\" roll pin punch. Inspect striker lug. Replace with heavy-duty spiral coiled spring pin (Channellock/PRP heavy-duty replacement). Always advise customer to use snap caps during dry-fire practice."
            }
        ],
        "videos": [
            {
                "id": "q9X1r4K8bZs",
                "title": "Springfield Hellcat Complete Disassembly, Cleaning & Upgrades",
                "creator": "Powder River Precision",
                "category": "Bench Disassembly",
                "url": "https://www.youtube.com/watch?v=q9X1r4K8bZs",
                "embed_url": "https://www.youtube-nocookie.com/embed/q9X1r4K8bZs",
                "summary": "Teardown of the Springfield Hellcat slide, extractor removal, sear spring installation, and trigger shoe upgrade."
            }
        ]
    },

    "Walther_PDP_PPQ": {
        "name": "Walther PDP / PPQ Series Pistols",
        "subtitle": "PDP Compact, PDP Full Size, PPQ M2 & Q4/Q5 Match (9x19mm)",
        "manufacturer": "Walther Arms",
        "category": "Pistols",
        "action_type": "Striker-Fired Performance Duty Pistol",
        "operating_actions": ["Striker-Fired", "Pre-Cocked Striker", "Short Recoil"],
        "types": ["Pistols", "Duty Handguns", "Competition"],
        "caliber_categories": ["9x19mm"],
        "era": "Modern Duty & Competition (2011–Present)",
        "models": ["PDP Compact 4\"", "PDP Full Size 4.5\"", "PDP Pro SD", "PPQ M2", "Q5 Match Steel Frame"],
        "calibers": ["9x19mm Parabellum"],
        "key_tasks": ["Performance Duty Trigger (PDT) Tuning", "Stepped Chamber Inspection", "Optics Plate Torquing (13 in-lbs)", "Striker Assembly Maintenance", "Ejector Clearance Check"],
        "specs": {
            "chamber_design": "Walther stepped chamber (slight taper step near neck) creating tighter gas seal and higher bullet velocity",
            "trigger_system": "Fully pre-cocked striker with Performance Duty Trigger (PDT); 4.5 to 5.0 lbs break with 0.1\" reset",
            "optics_system": "Factory direct slide optic cut with deep-set indexing lugs (Torx T10 screws: 13 in-lbs)",
            "superterrain_serrations": "Deep protruding cocking serrations designed for gloved duty manipulation"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Failure to Chamber Reloaded Ammo (Stepped Chamber Bind)",
                "short_desc": "Factory ammo feeds smoothly, but reloaded casings bind 1/8\" short of battery",
                "causes": [
                    "Walther stepped chamber has tighter neck tolerance than standard SAAMI cylinder.",
                    "Reloaded brass resized with standard sizing die without pushing shoulder back sufficiently."
                ],
                "action": "Gunsmith Action: Drop-check rounds using a dedicated 9mm cartridge gauge. Clean chamber with bronze bore brush dipped in carbon solvent. Use factory ammunition or full-length small base sizing dies."
            }
        ],
        "videos": [
            {
                "id": "p8Y2z9M5xQs",
                "title": "Walther PDP Complete Detail Strip & Dynamic Trigger Install",
                "creator": "Walther Defense Bench",
                "category": "Armorer Detail Strip",
                "url": "https://www.youtube.com/watch?v=p8Y2z9M5xQs",
                "embed_url": "https://www.youtube-nocookie.com/embed/p8Y2z9M5xQs",
                "summary": "Step-by-step disassembly of the Walther PDP polymer frame, slide teardown, optics mounting procedure, and trigger tuning."
            }
        ]
    },

    "CZ_P10_Series": {
        "name": "CZ P-10 Series Pistols",
        "subtitle": "CZ P-10 C, P-10 F, P-10 S & P-10 M (9x19mm NATO)",
        "manufacturer": "CZ (Česká Zbrojovka)",
        "category": "Pistols",
        "action_type": "Striker-Fired Duty Pistol",
        "operating_actions": ["Striker-Fired", "Short Recoil", "Browning Cam"],
        "types": ["Pistols", "Duty Handguns", "Concealed Carry"],
        "caliber_categories": ["9x19mm"],
        "era": "Modern Duty (2017–Present)",
        "models": ["CZ P-10 C (Compact)", "CZ P-10 F (Full Size)", "CZ P-10 S (Subcompact)", "CZ P-10 M (Micro)"],
        "calibers": ["9x19mm Parabellum", ".45 ACP"],
        "key_tasks": ["Swappable Mag Catch Reversal", "Striker Safety Block Inspection", "Trigger Bar Stoning", "Slide Stop Spring Alignment", "Detail Disassembly"],
        "specs": {
            "barrel_lockup": "Browning-Petter style locking into slide ejection port; cold hammer forged barrel",
            "trigger_system": "Crisp striker-fired trigger with 4.0 to 4.5 lb break and short positive tactile reset",
            "slide_finish": "Extremely hard corrosion-resistant nitrided ferritic nitrocarburized finish",
            "magazine_catch": "Reversible single-sided steel catch (updated from early ambidextrous stiff design)"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Stiff Magazine Release on Loaded Full Magazine",
                "short_desc": "Magazine release button requires excessive thumb force to drop a full 15/17rd magazine",
                "causes": [
                    "Top cartridge in full magazine exerts heavy upward spring pressure against underside of slide.",
                    "Early Gen 1 dual-sided ambi mag catch design had high friction angles."
                ],
                "action": "Gunsmith Action: Inspect mag catch model. Update to CZ factory reversible mag catch kit. Lightly polish the contact ramp of the mag catch shelf with 1500-grit paper."
            }
        ],
        "videos": [
            {
                "id": "c7P10x9M2wQ",
                "title": "CZ P-10C Complete Armorer Disassembly & Trigger Polish",
                "creator": "Cajun Gun Works",
                "category": "Disassembly & Tuning",
                "url": "https://www.youtube.com/results?search_query=CZ+P-10+Series+Pistols+CZ+P-10C+Complete+Armorer+Disassembly+%26+Trigger+Polish+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=CZ+P-10+Series+Pistols+CZ+P-10C+Complete+Armorer+Disassembly+%26+Trigger+Polish+gunsmithing+armorer",
                "summary": "Teardown of the CZ P-10 frame, removing locking block and sear assembly, smoothing trigger takeup, and reassembling slide components."
            }
        ]
    },

    "HK_VP9_Pistols": {
        "name": "Heckler & Koch VP9 / SFP9 Series",
        "subtitle": "VP9, VP9SK, VP9L & Tactical (9x19mm NATO & .40 S&W)",
        "manufacturer": "Heckler & Koch",
        "category": "Pistols",
        "action_type": "Striker-Fired Combat Pistol",
        "operating_actions": ["Striker-Fired", "Short Recoil", "Cold Hammer Forged"],
        "types": ["Pistols", "Duty Handguns", "Military & Police"],
        "caliber_categories": ["9x19mm", ".40 S&W"],
        "era": "Modern Duty & Tactical (2014–Present)",
        "models": ["VP9 Standard", "VP9SK (Subcompact)", "VP9L (Long Slide)", "VP9 Tactical", "VP40"],
        "calibers": ["9x19mm Parabellum", ".40 S&W"],
        "key_tasks": ["Cocking Indicator Inspection", "Charging Support Ear Replacement", "Disassembly Safety Interlock Check", "Paddle vs Button Mag Catch Service", "Extractor Roll Pin Service"],
        "specs": {
            "cocking_indicator": "Red dot on rear of firing pin visible through slide backplate aperture when cocked",
            "charging_supports": "Patented polymer wings/ears recessed into rear slide serrations for positive racking",
            "barrel_bore": "Polygonal rifling with cold hammer forged cannon-grade steel barrel (O-ring on tactical models)",
            "trigger_pull_weight": "5.0 to 5.4 lbs with distinct single-stage crisp wall and short reset"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Slide Fails to Takedown When Rotating Disassembly Lever",
                "short_desc": "Disassembly lever rotates, but slide refuses to push forward off frame",
                "causes": [
                    "Magazine not removed from frame (disassembly safety interlock active).",
                    "Disassembly latch not rotated full 90° clockwise.",
                    "Internal trigger bar drop latch not tripped."
                ],
                "action": "Immediate Action: Ensure magazine is out. Lock slide fully back, ensure latch is full 90° down, pull slide slightly rearward and ease forward smoothly off rails without pulling trigger."
            }
        ],
        "videos": [
            {
                "id": "h8K9vP9x2Ls",
                "title": "HK VP9 Complete Disassembly & Armorer Maintenance Guide",
                "creator": "Midwest Gun Works Bench",
                "category": "Armorer Detail Strip",
                "url": "https://www.youtube.com/watch?v=h8K9vP9x2Ls",
                "embed_url": "https://www.youtube-nocookie.com/embed/h8K9vP9x2Ls",
                "summary": "Disassembling the HK VP9 slide and frame, removing the striker group, cleaning the extractor channel, and servicing the paddle magazine release."
            }
        ]
    },

    "Taurus_TX22_GSeries": {
        "name": "Taurus G-Series & TX22 Pistols",
        "subtitle": "G2c, G3, G3c & TX22 Rimfire (9x19mm & .22 LR)",
        "manufacturer": "Taurus USA",
        "category": "Pistols",
        "action_type": "Striker-Fired Duty, CCW & Rimfire Target",
        "operating_actions": ["Striker-Fired", "Restrike Capability", "Blowback (TX22)"],
        "types": ["Pistols", "Budget Concealed Carry", "Rimfire Training"],
        "caliber_categories": ["9x19mm", ".22 LR"],
        "era": "Modern Consumer Market (2015–Present)",
        "models": ["Taurus G2c", "Taurus G3", "Taurus G3c", "Taurus TX22", "Taurus TX22 Competition"],
        "calibers": ["9x19mm Parabellum", ".22 LR"],
        "key_tasks": ["Restrike Trigger Linkage Check", "TX22 Feed Ramp Polishing", "Striker Spring Inspection", "Slide Endcap Removal", "Chamber Cleaning"],
        "specs": {
            "restrike_capability": "Double-action restrike capability allows pulling trigger again without racking slide on dud primer",
            "trigger_system": "Single-action restrike with flat face or curved trigger blade (approx 5.5 to 6.0 lbs)",
            "tx22_capacity": "Proprietary 16-round rimfire polymer magazine with staggered feed lips",
            "tx22_operating": "Straight blowback action with lightweight aluminum slide and buffer pad"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: TX22 Rimfire Failure to Feed (Nose-Up Jam)",
                "short_desc": "Cartridge tip catches on top edge of chamber mouth rather than smoothly feeding",
                "causes": [
                    "Wax and carbon buildup on stainless steel feed ramp.",
                    "Magazine follower binding inside magazine body due to rimfire fouling.",
                    "Rim rim-lock from improperly loaded .22 LR rounds."
                ],
                "action": "Gunsmith Action: Polish feed ramp with felt bob and polishing paste. Disassemble TX22 magazine, clean interior tube with dry silicone cloth (no oil to attract powder residue). Ensure top rim sits in front of the rim below it."
            }
        ],
        "videos": [
            {
                "id": "t2X22x9G3wL",
                "title": "Taurus TX22 & G3 Series Takedown, Cleaning & Tuning",
                "creator": "22plinkster / Gunsmith Corner",
                "category": "Cleaning & Feed Tuning",
                "url": "https://www.youtube.com/results?search_query=Taurus+G-Series+%26+TX22+Pistols+Taurus+TX22+%26+G3+Series+Takedown%2C+Cleaning+%26+Tuning+gunsmithing+armorer",
                "embed_url": "https://www.youtube-nocookie.com/embed?listType=search&list=Taurus+G-Series+%26+TX22+Pistols+Taurus+TX22+%26+G3+Series+Takedown%2C+Cleaning+%26+Tuning+gunsmithing+armorer",
                "summary": "Teardown of the TX22 and G3 pistols: feed ramp polishing, magazine maintenance, and recoil spring inspection."
            }
        ]
    }
}
