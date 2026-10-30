// Static firearms repository data for GitHub Pages deployment
window.STATIC_FIREARMS_DATA = {
  "Glock_Pistols": {
    "id": "Glock_Pistols",
    "name": "Glock Safe-Action Pistols",
    "subtitle": "Generations 1\u20135 (9x19mm, .40 S&W, .45 ACP, 10mm Auto)",
    "manufacturer": "Glock",
    "category": "Pistols",
    "action_type": "Striker-Fired Safe Action",
    "operating_actions": [
      "Striker-Fired",
      "Short Recoil",
      "Safe-Action"
    ],
    "types": [
      "Pistols",
      "Duty Handguns",
      "Concealed Carry"
    ],
    "caliber_categories": [
      "9x19mm",
      ".40 S&W",
      ".45 ACP",
      "10mm Auto"
    ],
    "era": "Modern Duty & Tactical (1982\u2013Present)",
    "models": [
      "Glock 17",
      "Glock 19",
      "Glock 21",
      "Glock 22",
      "Glock 26",
      "Glock 34",
      "Glock 43",
      "Glock 43X",
      "Glock 48"
    ],
    "calibers": [
      "9x19mm",
      ".40 S&W",
      ".45 ACP",
      "10mm Auto",
      ".357 SIG"
    ],
    "key_tasks": [
      "Cruciform Sear Check (66%)",
      "5-Drop Lube Protocol",
      "25\u00a2 Trigger Polish",
      "30274 Ejector Bar Upgrade",
      "Detail Strip"
    ],
    "specs": {
      "cruciform_sear_engagement": "\u2265 66% (minimum 2/3 sear overlap) verified via orange armorer inspection cover plate (SP 02096)",
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
        "action": "Immediate Action: Tap rear of slide with heel of hand to seat in battery. Gunsmith Action: Run Glock 45\u00b0 recoil spring test (empty weapon, cock, pull trigger, point 45\u00b0 straight up, ease slide rearward 1/4\" and release gently; slide must go fully into battery under spring pressure alone). Replace RSA if failed."
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
        "title": "Glock 25\u00a2 Trigger Job & Cruciform Sear Safety Engagement Check",
        "creator": "Brownells Gunsmithing Bench",
        "category": "Tuning & Armorer Safety Inspection",
        "url": "https://www.youtube.com/watch?v=e_r1Kz_T2Lg",
        "embed_url": "https://www.youtube-nocookie.com/embed/e_r1Kz_T2Lg",
        "summary": "Polishing bearing surfaces (trigger bar tab, connector ramp, safety plunger, cruciform sear shelf) with Mother's polish. Verification of 66% sear engagement with armorer plate."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Glock_Pistols.pdf",
        "title": "Armorer Technical Manual Glock Pistols",
        "filename": "Armorer_Technical_Manual_Glock_Pistols.pdf",
        "size_mb": 0.01,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Glock_Pistols/manuals/Armorer_Technical_Manual_Glock_Pistols.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Glock_Pistols/manuals/Armorer_Technical_Manual_Glock_Pistols.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Glock_Pistols/manuals/Armorer_Technical_Manual_Glock_Pistols.pdf",
        "local_url": "/api/manuals/Glock_Pistols/Armorer_Technical_Manual_Glock_Pistols.pdf"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5.pdf",
        "title": "Glock Armorers Manual Gen 1 to 5",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5.pdf",
        "size_mb": 22.48,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Glock_Pistols/manuals/Glock_Armorers_Manual_Gen_1_to_5.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Glock_Pistols/manuals/Glock_Armorers_Manual_Gen_1_to_5.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Glock_Pistols/manuals/Glock_Armorers_Manual_Gen_1_to_5.pdf",
        "local_url": "/api/manuals/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5.pdf"
      },
      {
        "id": "Glock_Factory_Armorers_Manual.pdf",
        "title": "Glock Factory Armorers Manual",
        "filename": "Glock_Factory_Armorers_Manual.pdf",
        "size_mb": 6.35,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Glock_Pistols/manuals/Glock_Factory_Armorers_Manual.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Glock_Pistols/manuals/Glock_Factory_Armorers_Manual.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Glock_Pistols/manuals/Glock_Factory_Armorers_Manual.pdf",
        "local_url": "/api/manuals/Glock_Pistols/Glock_Factory_Armorers_Manual.pdf"
      }
    ],
    "schematics": [
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p001_01.png",
        "title": "Glock Armorers Manual Gen 1 to 5 p001 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p001_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p001_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p001_01.png"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p001_02.png",
        "title": "Glock Armorers Manual Gen 1 to 5 p001 02",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p001_02.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p001_02.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p001_02.png"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p002_01.png",
        "title": "Glock Armorers Manual Gen 1 to 5 p002 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p002_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p002_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p002_01.png"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p002_02.png",
        "title": "Glock Armorers Manual Gen 1 to 5 p002 02",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p002_02.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p002_02.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p002_02.png"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p002_03.png",
        "title": "Glock Armorers Manual Gen 1 to 5 p002 03",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p002_03.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p002_03.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p002_03.png"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p002_04.png",
        "title": "Glock Armorers Manual Gen 1 to 5 p002 04",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p002_04.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p002_04.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p002_04.png"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p002_05.png",
        "title": "Glock Armorers Manual Gen 1 to 5 p002 05",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p002_05.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p002_05.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p002_05.png"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p002_06.png",
        "title": "Glock Armorers Manual Gen 1 to 5 p002 06",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p002_06.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p002_06.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p002_06.png"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p003_01.png",
        "title": "Glock Armorers Manual Gen 1 to 5 p003 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p003_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p003_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p003_01.png"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p003_02.png",
        "title": "Glock Armorers Manual Gen 1 to 5 p003 02",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p003_02.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p003_02.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p003_02.png"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p004_01.png",
        "title": "Glock Armorers Manual Gen 1 to 5 p004 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p004_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p004_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p004_01.png"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p083_01.png",
        "title": "Glock Armorers Manual Gen 1 to 5 p083 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p083_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p083_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p083_01.png"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p083_02.png",
        "title": "Glock Armorers Manual Gen 1 to 5 p083 02",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p083_02.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p083_02.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p083_02.png"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p084_01.png",
        "title": "Glock Armorers Manual Gen 1 to 5 p084 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p084_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p084_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p084_01.png"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p097_01.png",
        "title": "Glock Armorers Manual Gen 1 to 5 p097 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p097_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p097_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p097_01.png"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p097_02.png",
        "title": "Glock Armorers Manual Gen 1 to 5 p097 02",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p097_02.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p097_02.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p097_02.png"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p098_01.png",
        "title": "Glock Armorers Manual Gen 1 to 5 p098 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p098_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p098_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p098_01.png"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p139_01.png",
        "title": "Glock Armorers Manual Gen 1 to 5 p139 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p139_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p139_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p139_01.png"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p140_01.png",
        "title": "Glock Armorers Manual Gen 1 to 5 p140 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p140_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p140_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p140_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p001_01.png",
        "title": "Glock Factory Armorers Manual p001 01",
        "filename": "Glock_Factory_Armorers_Manual_p001_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p001_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p001_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p002_01.png",
        "title": "Glock Factory Armorers Manual p002 01",
        "filename": "Glock_Factory_Armorers_Manual_p002_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p002_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p002_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p003_01.png",
        "title": "Glock Factory Armorers Manual p003 01",
        "filename": "Glock_Factory_Armorers_Manual_p003_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p003_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p003_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p004_01.png",
        "title": "Glock Factory Armorers Manual p004 01",
        "filename": "Glock_Factory_Armorers_Manual_p004_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p004_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p004_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p005_01.png",
        "title": "Glock Factory Armorers Manual p005 01",
        "filename": "Glock_Factory_Armorers_Manual_p005_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p005_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p005_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p006_01.png",
        "title": "Glock Factory Armorers Manual p006 01",
        "filename": "Glock_Factory_Armorers_Manual_p006_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p006_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p006_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p007_01.png",
        "title": "Glock Factory Armorers Manual p007 01",
        "filename": "Glock_Factory_Armorers_Manual_p007_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p007_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p007_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p008_01.png",
        "title": "Glock Factory Armorers Manual p008 01",
        "filename": "Glock_Factory_Armorers_Manual_p008_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p008_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p008_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p009_01.png",
        "title": "Glock Factory Armorers Manual p009 01",
        "filename": "Glock_Factory_Armorers_Manual_p009_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p009_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p009_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p010_01.png",
        "title": "Glock Factory Armorers Manual p010 01",
        "filename": "Glock_Factory_Armorers_Manual_p010_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p010_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p010_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p011_01.png",
        "title": "Glock Factory Armorers Manual p011 01",
        "filename": "Glock_Factory_Armorers_Manual_p011_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p011_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p011_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p012_01.png",
        "title": "Glock Factory Armorers Manual p012 01",
        "filename": "Glock_Factory_Armorers_Manual_p012_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p012_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p012_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p013_01.png",
        "title": "Glock Factory Armorers Manual p013 01",
        "filename": "Glock_Factory_Armorers_Manual_p013_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p013_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p013_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p014_01.png",
        "title": "Glock Factory Armorers Manual p014 01",
        "filename": "Glock_Factory_Armorers_Manual_p014_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p014_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p014_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p015_01.png",
        "title": "Glock Factory Armorers Manual p015 01",
        "filename": "Glock_Factory_Armorers_Manual_p015_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p015_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p015_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p016_01.png",
        "title": "Glock Factory Armorers Manual p016 01",
        "filename": "Glock_Factory_Armorers_Manual_p016_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p016_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p016_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p017_01.png",
        "title": "Glock Factory Armorers Manual p017 01",
        "filename": "Glock_Factory_Armorers_Manual_p017_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p017_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p017_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p018_01.png",
        "title": "Glock Factory Armorers Manual p018 01",
        "filename": "Glock_Factory_Armorers_Manual_p018_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p018_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p018_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p019_01.png",
        "title": "Glock Factory Armorers Manual p019 01",
        "filename": "Glock_Factory_Armorers_Manual_p019_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p019_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p019_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p020_01.png",
        "title": "Glock Factory Armorers Manual p020 01",
        "filename": "Glock_Factory_Armorers_Manual_p020_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p020_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p020_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p021_01.png",
        "title": "Glock Factory Armorers Manual p021 01",
        "filename": "Glock_Factory_Armorers_Manual_p021_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p021_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p021_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p022_01.png",
        "title": "Glock Factory Armorers Manual p022 01",
        "filename": "Glock_Factory_Armorers_Manual_p022_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p022_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p022_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p023_01.png",
        "title": "Glock Factory Armorers Manual p023 01",
        "filename": "Glock_Factory_Armorers_Manual_p023_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p023_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p023_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p024_01.png",
        "title": "Glock Factory Armorers Manual p024 01",
        "filename": "Glock_Factory_Armorers_Manual_p024_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p024_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p024_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p025_01.png",
        "title": "Glock Factory Armorers Manual p025 01",
        "filename": "Glock_Factory_Armorers_Manual_p025_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p025_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p025_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p026_01.png",
        "title": "Glock Factory Armorers Manual p026 01",
        "filename": "Glock_Factory_Armorers_Manual_p026_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p026_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p026_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p027_01.png",
        "title": "Glock Factory Armorers Manual p027 01",
        "filename": "Glock_Factory_Armorers_Manual_p027_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p027_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p027_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p028_01.png",
        "title": "Glock Factory Armorers Manual p028 01",
        "filename": "Glock_Factory_Armorers_Manual_p028_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p028_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p028_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p029_01.png",
        "title": "Glock Factory Armorers Manual p029 01",
        "filename": "Glock_Factory_Armorers_Manual_p029_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p029_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p029_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p030_01.png",
        "title": "Glock Factory Armorers Manual p030 01",
        "filename": "Glock_Factory_Armorers_Manual_p030_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p030_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p030_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p031_01.png",
        "title": "Glock Factory Armorers Manual p031 01",
        "filename": "Glock_Factory_Armorers_Manual_p031_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p031_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p031_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p032_01.png",
        "title": "Glock Factory Armorers Manual p032 01",
        "filename": "Glock_Factory_Armorers_Manual_p032_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p032_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p032_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p033_01.png",
        "title": "Glock Factory Armorers Manual p033 01",
        "filename": "Glock_Factory_Armorers_Manual_p033_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p033_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p033_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p034_01.png",
        "title": "Glock Factory Armorers Manual p034 01",
        "filename": "Glock_Factory_Armorers_Manual_p034_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p034_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p034_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p035_01.png",
        "title": "Glock Factory Armorers Manual p035 01",
        "filename": "Glock_Factory_Armorers_Manual_p035_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p035_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p035_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p036_01.png",
        "title": "Glock Factory Armorers Manual p036 01",
        "filename": "Glock_Factory_Armorers_Manual_p036_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p036_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p036_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p037_01.png",
        "title": "Glock Factory Armorers Manual p037 01",
        "filename": "Glock_Factory_Armorers_Manual_p037_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p037_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p037_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p038_01.png",
        "title": "Glock Factory Armorers Manual p038 01",
        "filename": "Glock_Factory_Armorers_Manual_p038_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p038_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p038_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p039_01.png",
        "title": "Glock Factory Armorers Manual p039 01",
        "filename": "Glock_Factory_Armorers_Manual_p039_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p039_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p039_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p040_01.png",
        "title": "Glock Factory Armorers Manual p040 01",
        "filename": "Glock_Factory_Armorers_Manual_p040_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p040_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p040_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p041_01.png",
        "title": "Glock Factory Armorers Manual p041 01",
        "filename": "Glock_Factory_Armorers_Manual_p041_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p041_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p041_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p042_01.png",
        "title": "Glock Factory Armorers Manual p042 01",
        "filename": "Glock_Factory_Armorers_Manual_p042_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p042_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p042_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p043_01.png",
        "title": "Glock Factory Armorers Manual p043 01",
        "filename": "Glock_Factory_Armorers_Manual_p043_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p043_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p043_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p044_01.png",
        "title": "Glock Factory Armorers Manual p044 01",
        "filename": "Glock_Factory_Armorers_Manual_p044_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p044_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p044_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p045_01.png",
        "title": "Glock Factory Armorers Manual p045 01",
        "filename": "Glock_Factory_Armorers_Manual_p045_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p045_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p045_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p046_01.png",
        "title": "Glock Factory Armorers Manual p046 01",
        "filename": "Glock_Factory_Armorers_Manual_p046_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p046_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p046_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p047_01.png",
        "title": "Glock Factory Armorers Manual p047 01",
        "filename": "Glock_Factory_Armorers_Manual_p047_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p047_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p047_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p048_01.png",
        "title": "Glock Factory Armorers Manual p048 01",
        "filename": "Glock_Factory_Armorers_Manual_p048_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p048_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p048_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p049_01.png",
        "title": "Glock Factory Armorers Manual p049 01",
        "filename": "Glock_Factory_Armorers_Manual_p049_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p049_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p049_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p050_01.png",
        "title": "Glock Factory Armorers Manual p050 01",
        "filename": "Glock_Factory_Armorers_Manual_p050_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p050_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p050_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p051_01.png",
        "title": "Glock Factory Armorers Manual p051 01",
        "filename": "Glock_Factory_Armorers_Manual_p051_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p051_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p051_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p052_01.png",
        "title": "Glock Factory Armorers Manual p052 01",
        "filename": "Glock_Factory_Armorers_Manual_p052_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p052_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p052_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p053_01.png",
        "title": "Glock Factory Armorers Manual p053 01",
        "filename": "Glock_Factory_Armorers_Manual_p053_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p053_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p053_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p054_01.png",
        "title": "Glock Factory Armorers Manual p054 01",
        "filename": "Glock_Factory_Armorers_Manual_p054_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p054_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p054_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p055_01.png",
        "title": "Glock Factory Armorers Manual p055 01",
        "filename": "Glock_Factory_Armorers_Manual_p055_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p055_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p055_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p056_01.png",
        "title": "Glock Factory Armorers Manual p056 01",
        "filename": "Glock_Factory_Armorers_Manual_p056_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p056_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p056_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p057_01.png",
        "title": "Glock Factory Armorers Manual p057 01",
        "filename": "Glock_Factory_Armorers_Manual_p057_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p057_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p057_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p058_01.png",
        "title": "Glock Factory Armorers Manual p058 01",
        "filename": "Glock_Factory_Armorers_Manual_p058_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p058_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p058_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p059_01.png",
        "title": "Glock Factory Armorers Manual p059 01",
        "filename": "Glock_Factory_Armorers_Manual_p059_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p059_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p059_01.png"
      },
      {
        "id": "Glock_Factory_Armorers_Manual_p060_01.png",
        "title": "Glock Factory Armorers Manual p060 01",
        "filename": "Glock_Factory_Armorers_Manual_p060_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Factory_Armorers_Manual_p060_01.png",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Factory_Armorers_Manual_p060_01.png"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p006_02.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p006 02",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p006_02.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p006_02.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p006_02.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p007_02.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p007 02",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p007_02.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p007_02.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p007_02.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p010_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p010 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p010_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p010_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p010_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p011_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p011 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p011_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p011_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p011_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p012_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p012 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p012_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p012_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p012_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p013_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p013 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p013_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p013_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p013_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p014_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p014 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p014_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p014_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p014_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p015_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p015 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p015_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p015_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p015_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p016_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p016 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p016_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p016_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p016_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p017_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p017 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p017_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p017_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p017_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p018_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p018 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p018_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p018_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p018_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p019_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p019 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p019_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p019_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p019_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p020_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p020 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p020_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p020_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p020_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p021_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p021 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p021_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p021_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p021_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p022_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p022 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p022_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p022_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p022_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p023_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p023 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p023_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p023_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p023_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p024_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p024 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p024_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p024_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p024_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p025_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p025 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p025_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p025_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p025_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p026_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p026 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p026_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p026_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p026_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p028_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p028 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p028_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p028_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p028_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p029_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p029 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p029_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p029_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p029_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p030_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p030 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p030_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p030_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p030_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p031_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p031 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p031_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p031_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p031_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p032_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p032 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p032_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p032_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p032_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p033_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p033 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p033_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p033_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p033_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p034_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p034 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p034_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p034_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p034_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p035_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p035 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p035_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p035_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p035_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p036_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p036 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p036_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p036_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p036_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p037_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p037 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p037_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p037_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p037_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p038_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p038 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p038_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p038_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p038_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p039_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p039 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p039_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p039_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p039_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p040_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p040 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p040_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p040_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p040_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p041_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p041 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p041_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p041_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p041_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p042_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p042 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p042_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p042_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p042_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p043_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p043 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p043_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p043_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p043_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p044_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p044 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p044_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p044_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p044_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p045_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p045 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p045_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p045_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p045_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p046_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p046 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p046_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p046_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p046_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p047_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p047 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p047_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p047_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p047_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p048_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p048 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p048_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p048_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p048_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p049_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p049 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p049_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p049_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p049_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p050_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p050 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p050_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p050_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p050_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p051_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p051 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p051_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p051_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p051_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p052_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p052 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p052_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p052_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p052_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p053_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p053 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p053_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p053_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p053_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p054_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p054 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p054_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p054_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p054_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p055_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p055 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p055_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p055_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p055_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p056_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p056 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p056_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p056_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p056_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p057_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p057 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p057_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p057_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p057_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p058_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p058 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p058_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p058_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p058_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p059_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p059 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p059_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p059_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p059_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p060_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p060 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p060_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p060_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p060_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p061_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p061 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p061_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p061_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p061_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p062_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p062 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p062_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p062_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p062_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p064_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p064 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p064_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p064_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p064_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p065_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p065 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p065_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p065_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p065_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p066_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p066 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p066_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p066_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p066_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p067_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p067 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p067_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p067_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p067_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p068_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p068 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p068_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p068_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p068_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p069_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p069 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p069_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p069_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p069_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p070_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p070 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p070_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p070_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p070_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p071_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p071 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p071_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p071_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p071_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p072_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p072 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p072_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p072_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p072_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p073_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p073 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p073_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p073_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p073_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p074_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p074 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p074_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p074_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p074_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p075_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p075 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p075_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p075_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p075_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p076_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p076 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p076_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p076_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p076_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p077_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p077 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p077_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p077_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p077_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p080_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p080 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p080_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p080_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p080_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p081_02.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p081 02",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p081_02.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p081_02.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p081_02.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p082_02.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p082 02",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p082_02.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p082_02.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p082_02.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p086_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p086 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p086_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p086_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p086_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p087_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p087 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p087_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p087_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p087_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p088_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p088 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p088_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p088_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p088_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p089_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p089 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p089_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p089_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p089_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p090_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p090 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p090_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p090_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p090_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p091_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p091 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p091_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p091_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p091_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p092_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p092 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p092_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p092_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p092_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p093_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p093 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p093_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p093_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p093_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p094_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p094 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p094_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p094_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p094_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p095_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p095 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p095_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p095_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p095_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p099_02.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p099 02",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p099_02.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p099_02.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p099_02.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p100_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p100 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p100_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p100_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p100_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p101_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p101 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p101_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p101_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p101_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p102_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p102 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p102_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p102_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p102_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p103_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p103 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p103_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p103_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p103_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p104_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p104 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p104_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p104_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p104_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p105_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p105 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p105_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p105_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p105_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p106_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p106 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p106_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p106_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p106_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p107_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p107 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p107_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p107_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p107_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p108_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p108 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p108_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p108_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p108_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p109_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p109 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p109_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p109_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p109_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p110_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p110 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p110_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p110_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p110_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p111_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p111 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p111_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p111_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p111_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p112_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p112 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p112_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p112_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p112_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p113_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p113 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p113_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p113_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p113_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p114_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p114 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p114_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p114_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p114_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p115_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p115 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p115_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p115_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p115_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p116_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p116 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p116_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p116_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p116_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p117_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p117 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p117_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p117_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p117_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p118_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p118 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p118_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p118_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p118_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p119_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p119 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p119_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p119_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p119_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p120_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p120 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p120_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p120_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p120_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p121_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p121 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p121_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p121_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p121_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p122_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p122 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p122_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p122_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p122_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p123_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p123 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p123_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p123_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p123_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p124_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p124 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p124_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p124_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p124_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p125_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p125 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p125_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p125_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p125_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p126_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p126 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p126_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p126_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p126_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p127_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p127 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p127_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p127_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p127_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p128_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p128 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p128_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p128_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p128_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p129_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p129 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p129_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p129_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p129_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p130_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p130 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p130_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p130_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p130_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p131_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p131 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p131_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p131_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p131_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p132_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p132 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p132_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p132_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p132_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p133_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p133 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p133_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p133_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p133_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p134_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p134 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p134_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p134_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p134_01.jpeg"
      },
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5_p135_01.jpeg",
        "title": "Glock Armorers Manual Gen 1 to 5 p135 01",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5_p135_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Glock_Pistols/schematics/Glock_Armorers_Manual_Gen_1_to_5_p135_01.jpeg",
        "local_url": "/api/schematics/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5_p135_01.jpeg"
      }
    ]
  },
  "Sig_P365_Pistols": {
    "id": "Sig_P365_Pistols",
    "name": "SIG Sauer P365 Series Pistols",
    "subtitle": "P365, P365X, P365 XL, P365-XMACRO & SAS (9x19mm & .380 ACP)",
    "manufacturer": "SIG Sauer",
    "category": "Pistols",
    "action_type": "Striker-Fired Modular FCU Micro-Compact",
    "operating_actions": [
      "Striker-Fired",
      "Short Recoil",
      "Chassis-Based FCU"
    ],
    "types": [
      "Pistols",
      "Concealed Carry",
      "Micro-Compact"
    ],
    "caliber_categories": [
      "9x19mm",
      ".380 ACP"
    ],
    "era": "Modern Concealed Carry (2018\u2013Present)",
    "models": [
      "P365 Standard",
      "P365X",
      "P365 XL",
      "P365-XMACRO",
      "P365 SAS",
      "P365-.380"
    ],
    "calibers": [
      "9x19mm Parabellum",
      ".380 ACP"
    ],
    "key_tasks": [
      "FCU Chassis Extraction",
      "Extractor Spring & Pin Inspection",
      "Striker Drag Assessment",
      "Disconnector Cleaning",
      "Grip Module Swap"
    ],
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
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Sig_P365_Pistols.pdf",
        "title": "Armorer Technical Manual Sig P365 Pistols",
        "filename": "Armorer_Technical_Manual_Sig_P365_Pistols.pdf",
        "size_mb": 0.01,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Sig_P365_Pistols/manuals/Armorer_Technical_Manual_Sig_P365_Pistols.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Sig_P365_Pistols/manuals/Armorer_Technical_Manual_Sig_P365_Pistols.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Sig_P365_Pistols/manuals/Armorer_Technical_Manual_Sig_P365_Pistols.pdf",
        "local_url": "/api/manuals/Sig_P365_Pistols/Armorer_Technical_Manual_Sig_P365_Pistols.pdf"
      }
    ],
    "schematics": []
  },
  "Sig_P320_M17_Pistols": {
    "id": "Sig_P320_M17_Pistols",
    "name": "SIG Sauer P320 / M17 / M18 Modular Pistols",
    "subtitle": "US Military M17/M18 Service Pistols & P320 Series (9x19mm, .40 S&W, .45 ACP)",
    "manufacturer": "SIG Sauer",
    "category": "Pistols",
    "action_type": "Modular Striker-Fired Service Pistol",
    "operating_actions": [
      "Striker-Fired",
      "Chassis-Based FCU",
      "Short Recoil"
    ],
    "types": [
      "Pistols",
      "Military Sidearm",
      "Law Enforcement"
    ],
    "caliber_categories": [
      "9x19mm",
      ".40 S&W",
      ".45 ACP"
    ],
    "era": "Modern Military & Police (2014\u2013Present)",
    "models": [
      "P320 Full Size",
      "P320 Carry",
      "P320 Compact",
      "M17 Military (US Army)",
      "M18 Compact (US Navy/Marines)",
      "P320 X-Five"
    ],
    "calibers": [
      "9x19mm Parabellum",
      ".40 S&W",
      ".45 ACP",
      ".357 SIG"
    ],
    "key_tasks": [
      "FCU Detail Disassembly",
      "Voluntary Upgrade Safety Verification",
      "Extractor Pin Retainer Service",
      "Takedown Safety Lever Check",
      "Manual Safety Rebuild"
    ],
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
        "short_desc": "Takedown lever refuses to rotate 90\u00b0 downward during disassembly",
        "causes": [
          "Magazine still seated in pistol (takedown safety interlock engaged).",
          "Slide not pulled to absolute maximum rearward travel before engaging slide stop.",
          "Takedown safety lever inside FCU binding on trigger bar."
        ],
        "action": "Immediate Action: Drop magazine, verify chamber clear, lock slide full rearward, then rotate lever 90\u00b0 clockwise. Gunsmith Action: Inspect internal takedown safety lever (curved sheet metal arm) for bends or binding."
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
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Sig_P320_M17_Pistols.pdf",
        "title": "Armorer Technical Manual Sig P320 M17 Pistols",
        "filename": "Armorer_Technical_Manual_Sig_P320_M17_Pistols.pdf",
        "size_mb": 0.01,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Sig_P320_M17_Pistols/manuals/Armorer_Technical_Manual_Sig_P320_M17_Pistols.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Sig_P320_M17_Pistols/manuals/Armorer_Technical_Manual_Sig_P320_M17_Pistols.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Sig_P320_M17_Pistols/manuals/Armorer_Technical_Manual_Sig_P320_M17_Pistols.pdf",
        "local_url": "/api/manuals/Sig_P320_M17_Pistols/Armorer_Technical_Manual_Sig_P320_M17_Pistols.pdf"
      }
    ],
    "schematics": []
  },
  "Smith_Wesson_MP_Shield": {
    "id": "Smith_Wesson_MP_Shield",
    "name": "Smith & Wesson M&P & Shield Series",
    "subtitle": "M&P9 M2.0, Shield, Shield Plus, Equalizer (9x19mm, .40 S&W, .45 ACP)",
    "manufacturer": "Smith & Wesson",
    "category": "Pistols",
    "action_type": "Striker-Fired Duty & Concealed Carry",
    "operating_actions": [
      "Striker-Fired",
      "Short Recoil",
      "Browning Cam"
    ],
    "types": [
      "Pistols",
      "Duty Handguns",
      "Concealed Carry"
    ],
    "caliber_categories": [
      "9x19mm",
      ".40 S&W",
      ".45 ACP"
    ],
    "era": "Modern Duty & Concealed Carry (2005\u2013Present)",
    "models": [
      "M&P9 M2.0 Full Size",
      "M&P9 M2.0 Compact",
      "M&P Shield 9",
      "M&P Shield Plus",
      "M&P45 M2.0",
      "Equalizer"
    ],
    "calibers": [
      "9x19mm Parabellum",
      ".40 S&W",
      ".45 ACP",
      "10mm Auto"
    ],
    "key_tasks": [
      "Sear Deactivation Lever Takedown",
      "Apex Trigger & Sear Fitting",
      "Striker Block Plunger Polishing",
      "Extractor Roll Pin Inspection",
      "Frame Chassis Bedding"
    ],
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
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Smith_Wesson_MP_Shield.pdf",
        "title": "Armorer Technical Manual Smith Wesson MP Shield",
        "filename": "Armorer_Technical_Manual_Smith_Wesson_MP_Shield.pdf",
        "size_mb": 0.01,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Smith_Wesson_MP_Shield/manuals/Armorer_Technical_Manual_Smith_Wesson_MP_Shield.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Smith_Wesson_MP_Shield/manuals/Armorer_Technical_Manual_Smith_Wesson_MP_Shield.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Smith_Wesson_MP_Shield/manuals/Armorer_Technical_Manual_Smith_Wesson_MP_Shield.pdf",
        "local_url": "/api/manuals/Smith_Wesson_MP_Shield/Armorer_Technical_Manual_Smith_Wesson_MP_Shield.pdf"
      }
    ],
    "schematics": []
  },
  "Springfield_Hellcat_XD": {
    "id": "Springfield_Hellcat_XD",
    "name": "Springfield Armory Hellcat & XD Series",
    "subtitle": "Hellcat, Hellcat Pro, XD-M Elite & XD-S (9x19mm & .45 ACP)",
    "manufacturer": "Springfield Armory / HS Produkt",
    "category": "Pistols",
    "action_type": "Striker-Fired Micro-Compact & Duty",
    "operating_actions": [
      "Striker-Fired",
      "Short Recoil",
      "Grip Safety (XD)"
    ],
    "types": [
      "Pistols",
      "Concealed Carry",
      "Duty Handguns"
    ],
    "caliber_categories": [
      "9x19mm",
      ".45 ACP",
      "10mm Auto"
    ],
    "era": "Modern Duty & CCW (2002\u2013Present)",
    "models": [
      "Hellcat Micro-Compact",
      "Hellcat Pro",
      "XD-M Elite 4.5\"",
      "XD-S Mod.2",
      "XD-9 Service"
    ],
    "calibers": [
      "9x19mm Parabellum",
      ".45 ACP",
      "10mm Auto",
      ".40 S&W"
    ],
    "key_tasks": [
      "Striker Retaining Roll Pin Replacement",
      "Extractor Tension Tuning",
      "Dual Captive Recoil Spring Service",
      "Grip Safety Spring Reset (XD)",
      "Optics Cut Screws Torque"
    ],
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
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Springfield_Hellcat_XD.pdf",
        "title": "Armorer Technical Manual Springfield Hellcat XD",
        "filename": "Armorer_Technical_Manual_Springfield_Hellcat_XD.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Springfield_Hellcat_XD/manuals/Armorer_Technical_Manual_Springfield_Hellcat_XD.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Springfield_Hellcat_XD/manuals/Armorer_Technical_Manual_Springfield_Hellcat_XD.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Springfield_Hellcat_XD/manuals/Armorer_Technical_Manual_Springfield_Hellcat_XD.pdf",
        "local_url": "/api/manuals/Springfield_Hellcat_XD/Armorer_Technical_Manual_Springfield_Hellcat_XD.pdf"
      }
    ],
    "schematics": []
  },
  "Walther_PDP_PPQ": {
    "id": "Walther_PDP_PPQ",
    "name": "Walther PDP / PPQ Series Pistols",
    "subtitle": "PDP Compact, PDP Full Size, PPQ M2 & Q4/Q5 Match (9x19mm)",
    "manufacturer": "Walther Arms",
    "category": "Pistols",
    "action_type": "Striker-Fired Performance Duty Pistol",
    "operating_actions": [
      "Striker-Fired",
      "Pre-Cocked Striker",
      "Short Recoil"
    ],
    "types": [
      "Pistols",
      "Duty Handguns",
      "Competition"
    ],
    "caliber_categories": [
      "9x19mm"
    ],
    "era": "Modern Duty & Competition (2011\u2013Present)",
    "models": [
      "PDP Compact 4\"",
      "PDP Full Size 4.5\"",
      "PDP Pro SD",
      "PPQ M2",
      "Q5 Match Steel Frame"
    ],
    "calibers": [
      "9x19mm Parabellum"
    ],
    "key_tasks": [
      "Performance Duty Trigger (PDT) Tuning",
      "Stepped Chamber Inspection",
      "Optics Plate Torquing (13 in-lbs)",
      "Striker Assembly Maintenance",
      "Ejector Clearance Check"
    ],
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
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Walther_PDP_PPQ.pdf",
        "title": "Armorer Technical Manual Walther PDP PPQ",
        "filename": "Armorer_Technical_Manual_Walther_PDP_PPQ.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Walther_PDP_PPQ/manuals/Armorer_Technical_Manual_Walther_PDP_PPQ.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Walther_PDP_PPQ/manuals/Armorer_Technical_Manual_Walther_PDP_PPQ.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Walther_PDP_PPQ/manuals/Armorer_Technical_Manual_Walther_PDP_PPQ.pdf",
        "local_url": "/api/manuals/Walther_PDP_PPQ/Armorer_Technical_Manual_Walther_PDP_PPQ.pdf"
      }
    ],
    "schematics": []
  },
  "CZ_P10_Series": {
    "id": "CZ_P10_Series",
    "name": "CZ P-10 Series Pistols",
    "subtitle": "CZ P-10 C, P-10 F, P-10 S & P-10 M (9x19mm NATO)",
    "manufacturer": "CZ (\u010cesk\u00e1 Zbrojovka)",
    "category": "Pistols",
    "action_type": "Striker-Fired Duty Pistol",
    "operating_actions": [
      "Striker-Fired",
      "Short Recoil",
      "Browning Cam"
    ],
    "types": [
      "Pistols",
      "Duty Handguns",
      "Concealed Carry"
    ],
    "caliber_categories": [
      "9x19mm"
    ],
    "era": "Modern Duty (2017\u2013Present)",
    "models": [
      "CZ P-10 C (Compact)",
      "CZ P-10 F (Full Size)",
      "CZ P-10 S (Subcompact)",
      "CZ P-10 M (Micro)"
    ],
    "calibers": [
      "9x19mm Parabellum",
      ".45 ACP"
    ],
    "key_tasks": [
      "Swappable Mag Catch Reversal",
      "Striker Safety Block Inspection",
      "Trigger Bar Stoning",
      "Slide Stop Spring Alignment",
      "Detail Disassembly"
    ],
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
        "url": "https://www.youtube.com/watch?v=c7P10x9M2wQ",
        "embed_url": "https://www.youtube-nocookie.com/embed/c7P10x9M2wQ",
        "summary": "Teardown of the CZ P-10 frame, removing locking block and sear assembly, smoothing trigger takeup, and reassembling slide components."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_CZ_P10_Series.pdf",
        "title": "Armorer Technical Manual CZ P10 Series",
        "filename": "Armorer_Technical_Manual_CZ_P10_Series.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/CZ_P10_Series/manuals/Armorer_Technical_Manual_CZ_P10_Series.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/CZ_P10_Series/manuals/Armorer_Technical_Manual_CZ_P10_Series.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/CZ_P10_Series/manuals/Armorer_Technical_Manual_CZ_P10_Series.pdf",
        "local_url": "/api/manuals/CZ_P10_Series/Armorer_Technical_Manual_CZ_P10_Series.pdf"
      }
    ],
    "schematics": []
  },
  "HK_VP9_Pistols": {
    "id": "HK_VP9_Pistols",
    "name": "Heckler & Koch VP9 / SFP9 Series",
    "subtitle": "VP9, VP9SK, VP9L & Tactical (9x19mm NATO & .40 S&W)",
    "manufacturer": "Heckler & Koch",
    "category": "Pistols",
    "action_type": "Striker-Fired Combat Pistol",
    "operating_actions": [
      "Striker-Fired",
      "Short Recoil",
      "Cold Hammer Forged"
    ],
    "types": [
      "Pistols",
      "Duty Handguns",
      "Military & Police"
    ],
    "caliber_categories": [
      "9x19mm",
      ".40 S&W"
    ],
    "era": "Modern Duty & Tactical (2014\u2013Present)",
    "models": [
      "VP9 Standard",
      "VP9SK (Subcompact)",
      "VP9L (Long Slide)",
      "VP9 Tactical",
      "VP40"
    ],
    "calibers": [
      "9x19mm Parabellum",
      ".40 S&W"
    ],
    "key_tasks": [
      "Cocking Indicator Inspection",
      "Charging Support Ear Replacement",
      "Disassembly Safety Interlock Check",
      "Paddle vs Button Mag Catch Service",
      "Extractor Roll Pin Service"
    ],
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
          "Disassembly latch not rotated full 90\u00b0 clockwise.",
          "Internal trigger bar drop latch not tripped."
        ],
        "action": "Immediate Action: Ensure magazine is out. Lock slide fully back, ensure latch is full 90\u00b0 down, pull slide slightly rearward and ease forward smoothly off rails without pulling trigger."
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
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_HK_VP9_Pistols.pdf",
        "title": "Armorer Technical Manual HK VP9 Pistols",
        "filename": "Armorer_Technical_Manual_HK_VP9_Pistols.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/HK_VP9_Pistols/manuals/Armorer_Technical_Manual_HK_VP9_Pistols.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/HK_VP9_Pistols/manuals/Armorer_Technical_Manual_HK_VP9_Pistols.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/HK_VP9_Pistols/manuals/Armorer_Technical_Manual_HK_VP9_Pistols.pdf",
        "local_url": "/api/manuals/HK_VP9_Pistols/Armorer_Technical_Manual_HK_VP9_Pistols.pdf"
      }
    ],
    "schematics": []
  },
  "Taurus_TX22_GSeries": {
    "id": "Taurus_TX22_GSeries",
    "name": "Taurus G-Series & TX22 Pistols",
    "subtitle": "G2c, G3, G3c & TX22 Rimfire (9x19mm & .22 LR)",
    "manufacturer": "Taurus USA",
    "category": "Pistols",
    "action_type": "Striker-Fired Duty, CCW & Rimfire Target",
    "operating_actions": [
      "Striker-Fired",
      "Restrike Capability",
      "Blowback (TX22)"
    ],
    "types": [
      "Pistols",
      "Budget Concealed Carry",
      "Rimfire Training"
    ],
    "caliber_categories": [
      "9x19mm",
      ".22 LR"
    ],
    "era": "Modern Consumer Market (2015\u2013Present)",
    "models": [
      "Taurus G2c",
      "Taurus G3",
      "Taurus G3c",
      "Taurus TX22",
      "Taurus TX22 Competition"
    ],
    "calibers": [
      "9x19mm Parabellum",
      ".22 LR"
    ],
    "key_tasks": [
      "Restrike Trigger Linkage Check",
      "TX22 Feed Ramp Polishing",
      "Striker Spring Inspection",
      "Slide Endcap Removal",
      "Chamber Cleaning"
    ],
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
        "url": "https://www.youtube.com/watch?v=t2X22x9G3wL",
        "embed_url": "https://www.youtube-nocookie.com/embed/t2X22x9G3wL",
        "summary": "Teardown of the TX22 and G3 pistols: feed ramp polishing, magazine maintenance, and recoil spring inspection."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Taurus_TX22_GSeries.pdf",
        "title": "Armorer Technical Manual Taurus TX22 GSeries",
        "filename": "Armorer_Technical_Manual_Taurus_TX22_GSeries.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Taurus_TX22_GSeries/manuals/Armorer_Technical_Manual_Taurus_TX22_GSeries.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Taurus_TX22_GSeries/manuals/Armorer_Technical_Manual_Taurus_TX22_GSeries.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Taurus_TX22_GSeries/manuals/Armorer_Technical_Manual_Taurus_TX22_GSeries.pdf",
        "local_url": "/api/manuals/Taurus_TX22_GSeries/Armorer_Technical_Manual_Taurus_TX22_GSeries.pdf"
      }
    ],
    "schematics": []
  },
  "Colt_1911_Pistols": {
    "id": "Colt_1911_Pistols",
    "name": "Colt M1911 / M1911A1 & Series 70/80",
    "subtitle": "Government, Commander & Officer Models (.45 ACP, 9mm, 10mm Auto)",
    "manufacturer": "Colt's Manufacturing / US Ordnance",
    "category": "Pistols",
    "action_type": "Single-Action Semi-Automatic (Hammer-Fired)",
    "operating_actions": [
      "Single-Action",
      "Short Recoil",
      "Swinging Link"
    ],
    "types": [
      "Pistols",
      "Historic Military",
      "Custom Bench"
    ],
    "caliber_categories": [
      ".45 ACP",
      "9x19mm",
      "10mm Auto",
      ".38 Super"
    ],
    "era": "Military & Custom Benchmark (1911\u2013Present)",
    "models": [
      "Government Model (5\")",
      "Commander (4.25\")",
      "Officer's ACP (3.5\")",
      "M1911A1 USGI",
      "Series 70 Gold Cup",
      "Series 80"
    ],
    "calibers": [
      ".45 ACP",
      "9x19mm Parabellum",
      "10mm Auto",
      ".38 Super"
    ],
    "key_tasks": [
      "Extractor Tension Tuning (25\u201328 oz)",
      "Barrel Bushing Hand-Fitting",
      "Sear & Hammer Hook Stoning (0.020\")",
      "Grip Safety Armorer Timing",
      "Plunger Tube Staking"
    ],
    "specs": {
      "extractor_tension": "25 to 28 ounces pull force to slide a loaded cartridge case down breech face",
      "hammer_hooks": "Exact 0.020\" depth, cut square at 90\u00b0 with sharp corner (no radius on primary ledge)",
      "sear_primary_angle": "Ground flat with escape angle / breakaway secondary cut (approx 30\u00b0 relief on rear 1/3 of face)",
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
        "action": "Immediate Action: Lock slide back, strip magazine, cycle slide twice to clear chamber, reload. Gunsmith Action: Remove firing pin stop and slide extractor out. Clean channel. Inspect claw with 10x loupe. Bend extractor mid-body to increase spring deflection until a dummy round is held firmly against breech face with 25\u201328 oz pull."
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
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Colt_1911_Pistols.pdf",
        "title": "Armorer Technical Manual Colt 1911 Pistols",
        "filename": "Armorer_Technical_Manual_Colt_1911_Pistols.pdf",
        "size_mb": 0.01,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Colt_1911_Pistols/manuals/Armorer_Technical_Manual_Colt_1911_Pistols.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Colt_1911_Pistols/manuals/Armorer_Technical_Manual_Colt_1911_Pistols.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Colt_1911_Pistols/manuals/Armorer_Technical_Manual_Colt_1911_Pistols.pdf",
        "local_url": "/api/manuals/Colt_1911_Pistols/Armorer_Technical_Manual_Colt_1911_Pistols.pdf"
      }
    ],
    "schematics": []
  },
  "Beretta_Pistols": {
    "id": "Beretta_Pistols",
    "name": "Beretta 92 / M9 Series Pistols",
    "subtitle": "92FS, M9, 96, Brigadier & Inox (9x19mm NATO & .40 S&W)",
    "manufacturer": "Beretta",
    "category": "Pistols",
    "action_type": "Double-Action / Single-Action (DA/SA)",
    "operating_actions": [
      "DA/SA",
      "Short Recoil",
      "Falling Locking Block"
    ],
    "types": [
      "Pistols",
      "Military Sidearm",
      "Law Enforcement"
    ],
    "caliber_categories": [
      "9x19mm",
      ".40 S&W"
    ],
    "era": "Cold War to Modern Military (1975\u2013Present)",
    "models": [
      "Beretta 92FS",
      "Beretta M9",
      "Beretta 92F",
      "Beretta 96 (.40 S&W)",
      "Beretta 92D (DAO)",
      "Beretta Brigadier",
      "Beretta Inox",
      "M9A1 / M9A3 / M9A4"
    ],
    "calibers": [
      "9x19mm NATO",
      ".40 S&W"
    ],
    "key_tasks": [
      "Dead Trigger Spring Fix",
      "Locking Block Inspection (15k rds)",
      "Factory 92D Hammer Spring (8 lbs)",
      "Slide Detail Strip",
      "Extractor Carbon Cleaning"
    ],
    "specs": {
      "operating_system": "Short recoil falling locking block (Walther P38 heritage) with non-tilting straight-line barrel",
      "locking_block_service_life": "Inspect every 5,000 rds; replace every 15,000\u201320,000 rds (Gen 3 radiused block)",
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
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Beretta_Pistols.pdf",
        "title": "Armorer Technical Manual Beretta Pistols",
        "filename": "Armorer_Technical_Manual_Beretta_Pistols.pdf",
        "size_mb": 0.01,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Beretta_Pistols/manuals/Armorer_Technical_Manual_Beretta_Pistols.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Beretta_Pistols/manuals/Armorer_Technical_Manual_Beretta_Pistols.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Beretta_Pistols/manuals/Armorer_Technical_Manual_Beretta_Pistols.pdf",
        "local_url": "/api/manuals/Beretta_Pistols/Armorer_Technical_Manual_Beretta_Pistols.pdf"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual.pdf",
        "title": "Beretta 92F 92FS 9mm Manual",
        "filename": "Beretta_92F_92FS_9mm_Manual.pdf",
        "size_mb": 3.34,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Beretta_Pistols/manuals/Beretta_92F_92FS_9mm_Manual.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Beretta_Pistols/manuals/Beretta_92F_92FS_9mm_Manual.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Beretta_Pistols/manuals/Beretta_92F_92FS_9mm_Manual.pdf",
        "local_url": "/api/manuals/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual.pdf"
      },
      {
        "id": "US_Army_TM_9_1005_317_10_M9_Pistol.pdf",
        "title": "US Army TM 9 1005 317 10 M9 Pistol",
        "filename": "US_Army_TM_9_1005_317_10_M9_Pistol.pdf",
        "size_mb": 0.6,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Beretta_Pistols/manuals/US_Army_TM_9_1005_317_10_M9_Pistol.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Beretta_Pistols/manuals/US_Army_TM_9_1005_317_10_M9_Pistol.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Beretta_Pistols/manuals/US_Army_TM_9_1005_317_10_M9_Pistol.pdf",
        "local_url": "/api/manuals/Beretta_Pistols/US_Army_TM_9_1005_317_10_M9_Pistol.pdf"
      }
    ],
    "schematics": [
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p001_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p001 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p001_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p001_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p001_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p002_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p002 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p002_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p002_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p002_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p003_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p003 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p003_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p003_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p003_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p004_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p004 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p004_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p004_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p004_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p005_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p005 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p005_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p005_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p005_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p006_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p006 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p006_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p006_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p006_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p007_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p007 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p007_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p007_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p007_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p008_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p008 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p008_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p008_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p008_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p009_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p009 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p009_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p009_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p009_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p010_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p010 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p010_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p010_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p010_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p011_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p011 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p011_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p011_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p011_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p012_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p012 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p012_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p012_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p012_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p013_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p013 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p013_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p013_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p013_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p014_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p014 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p014_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p014_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p014_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p015_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p015 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p015_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p015_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p015_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p016_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p016 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p016_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p016_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p016_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p017_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p017 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p017_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p017_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p017_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p018_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p018 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p018_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p018_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p018_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p019_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p019 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p019_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p019_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p019_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p020_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p020 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p020_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p020_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p020_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p021_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p021 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p021_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p021_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p021_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p022_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p022 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p022_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p022_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p022_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p023_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p023 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p023_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p023_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p023_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p024_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p024 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p024_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p024_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p024_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p025_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p025 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p025_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p025_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p025_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p026_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p026 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p026_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p026_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p026_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p027_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p027 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p027_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p027_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p027_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p028_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p028 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p028_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p028_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p028_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p029_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p029 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p029_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p029_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p029_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p030_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p030 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p030_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p030_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p030_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p031_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p031 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p031_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p031_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p031_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p032_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p032 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p032_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p032_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p032_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p033_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p033 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p033_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p033_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p033_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p034_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p034 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p034_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p034_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p034_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p035_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p035 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p035_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p035_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p035_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p036_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p036 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p036_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p036_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p036_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p037_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p037 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p037_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p037_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p037_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p038_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p038 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p038_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p038_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p038_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p039_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p039 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p039_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p039_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p039_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p040_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p040 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p040_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p040_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p040_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p041_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p041 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p041_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p041_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p041_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p042_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p042 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p042_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p042_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p042_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p043_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p043 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p043_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p043_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p043_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p044_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p044 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p044_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p044_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p044_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p045_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p045 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p045_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p045_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p045_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p046_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p046 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p046_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p046_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p046_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p047_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p047 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p047_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p047_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p047_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p048_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p048 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p048_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p048_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p048_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p049_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p049 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p049_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p049_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p049_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p050_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p050 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p050_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p050_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p050_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p051_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p051 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p051_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p051_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p051_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p052_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p052 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p052_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p052_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p052_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p053_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p053 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p053_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p053_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p053_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p054_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p054 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p054_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p054_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p054_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p055_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p055 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p055_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p055_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p055_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p056_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p056 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p056_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p056_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p056_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p057_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p057 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p057_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p057_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p057_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p058_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p058 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p058_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p058_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p058_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p059_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p059 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p059_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p059_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p059_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p060_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p060 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p060_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p060_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p060_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p061_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p061 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p061_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p061_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p061_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p062_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p062 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p062_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p062_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p062_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p063_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p063 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p063_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p063_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p063_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p064_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p064 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p064_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p064_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p064_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p065_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p065 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p065_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p065_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p065_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p066_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p066 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p066_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p066_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p066_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p067_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p067 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p067_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p067_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p067_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p068_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p068 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p068_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p068_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p068_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p069_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p069 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p069_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p069_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p069_01.png"
      },
      {
        "id": "Beretta_92F_92FS_9mm_Manual_p070_01.png",
        "title": "Beretta 92F 92FS 9mm Manual p070 01",
        "filename": "Beretta_92F_92FS_9mm_Manual_p070_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/Beretta_92F_92FS_9mm_Manual_p070_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual_p070_01.png"
      },
      {
        "id": "US_Army_TM_9_1005_317_10_M9_Pistol_p035_01.png",
        "title": "US Army TM 9 1005 317 10 M9 Pistol p035 01",
        "filename": "US_Army_TM_9_1005_317_10_M9_Pistol_p035_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/US_Army_TM_9_1005_317_10_M9_Pistol_p035_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/US_Army_TM_9_1005_317_10_M9_Pistol_p035_01.png"
      },
      {
        "id": "US_Army_TM_9_1005_317_10_M9_Pistol_p042_01.png",
        "title": "US Army TM 9 1005 317 10 M9 Pistol p042 01",
        "filename": "US_Army_TM_9_1005_317_10_M9_Pistol_p042_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/US_Army_TM_9_1005_317_10_M9_Pistol_p042_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/US_Army_TM_9_1005_317_10_M9_Pistol_p042_01.png"
      },
      {
        "id": "US_Army_TM_9_1005_317_10_M9_Pistol_p043_01.png",
        "title": "US Army TM 9 1005 317 10 M9 Pistol p043 01",
        "filename": "US_Army_TM_9_1005_317_10_M9_Pistol_p043_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/US_Army_TM_9_1005_317_10_M9_Pistol_p043_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/US_Army_TM_9_1005_317_10_M9_Pistol_p043_01.png"
      },
      {
        "id": "US_Army_TM_9_1005_317_10_M9_Pistol_p075_01.png",
        "title": "US Army TM 9 1005 317 10 M9 Pistol p075 01",
        "filename": "US_Army_TM_9_1005_317_10_M9_Pistol_p075_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/US_Army_TM_9_1005_317_10_M9_Pistol_p075_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/US_Army_TM_9_1005_317_10_M9_Pistol_p075_01.png"
      },
      {
        "id": "US_Army_TM_9_1005_317_10_M9_Pistol_p091_01.png",
        "title": "US Army TM 9 1005 317 10 M9 Pistol p091 01",
        "filename": "US_Army_TM_9_1005_317_10_M9_Pistol_p091_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Beretta_Pistols/schematics/US_Army_TM_9_1005_317_10_M9_Pistol_p091_01.png",
        "local_url": "/api/schematics/Beretta_Pistols/US_Army_TM_9_1005_317_10_M9_Pistol_p091_01.png"
      }
    ]
  },
  "Sig_P226_P229_Pistols": {
    "id": "Sig_P226_P229_Pistols",
    "name": "SIG Sauer P226 / P229 / P220 Classic Line",
    "subtitle": "Navy SEALs Mk25, P226, P229, P220 (.45 ACP, 9mm, .40 S&W)",
    "manufacturer": "SIG Sauer",
    "category": "Pistols",
    "action_type": "Double-Action / Single-Action (DA/SA) with Decocker",
    "operating_actions": [
      "DA/SA",
      "Short Recoil",
      "Browning Lockup"
    ],
    "types": [
      "Pistols",
      "Military Special Forces",
      "Law Enforcement"
    ],
    "caliber_categories": [
      "9x19mm",
      ".40 S&W",
      ".45 ACP"
    ],
    "era": "Modern Tactical Benchmark (1975\u2013Present)",
    "models": [
      "P226 Standard / Mk25",
      "P229 Compact",
      "P220 (.45 ACP)",
      "P226 Legion",
      "P226 SAS"
    ],
    "calibers": [
      "9x19mm Parabellum",
      ".40 S&W",
      ".45 ACP",
      ".357 SIG"
    ],
    "key_tasks": [
      "Short Reset Trigger (SRT) Installation",
      "Frame Rail Anodizing Lubrication Check",
      "Decocking Lever Timing Inspection",
      "Roll Pin vs Solid Spiral Pin Service",
      "Mainspring Strut Reassembly"
    ],
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
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Sig_P226_P229_Pistols.pdf",
        "title": "Armorer Technical Manual Sig P226 P229 Pistols",
        "filename": "Armorer_Technical_Manual_Sig_P226_P229_Pistols.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Sig_P226_P229_Pistols/manuals/Armorer_Technical_Manual_Sig_P226_P229_Pistols.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Sig_P226_P229_Pistols/manuals/Armorer_Technical_Manual_Sig_P226_P229_Pistols.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Sig_P226_P229_Pistols/manuals/Armorer_Technical_Manual_Sig_P226_P229_Pistols.pdf",
        "local_url": "/api/manuals/Sig_P226_P229_Pistols/Armorer_Technical_Manual_Sig_P226_P229_Pistols.pdf"
      }
    ],
    "schematics": []
  },
  "CZ_75_Pistols": {
    "id": "CZ_75_Pistols",
    "name": "CZ 75 / 75 B / SP-01 / Shadow 2",
    "subtitle": "Classic Steel-Frame DA/SA Pistols (9x19mm NATO)",
    "manufacturer": "CZ (\u010cesk\u00e1 Zbrojovka)",
    "category": "Pistols",
    "action_type": "Double-Action / Single-Action (DA/SA)",
    "operating_actions": [
      "DA/SA",
      "Short Recoil",
      "Internal Slide Rails"
    ],
    "types": [
      "Pistols",
      "Competition",
      "Military & Police"
    ],
    "caliber_categories": [
      "9x19mm"
    ],
    "era": "Modern Combat & Competition Legend (1975\u2013Present)",
    "models": [
      "CZ 75 B",
      "CZ 75 BD (Decocker)",
      "CZ 75 SP-01 Tactical",
      "CZ Shadow 2",
      "CZ 85 Combat",
      "CZ 75 Compact"
    ],
    "calibers": [
      "9x19mm Parabellum",
      ".40 S&W"
    ],
    "key_tasks": [
      "Sear Cage Detail Assembly & Slave Pin Technique",
      "Firing Pin Retaining Roll Pin Replacement",
      "Trigger Return Spring Replacement",
      "Disconnector Hand-Fitting",
      "Slide Rail Lap"
    ],
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
          "Factory wire trigger return spring fatigue fracture inside trigger shoe recess (typical after 5,000\u20138,000 cycles)."
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
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_CZ_75_Pistols.pdf",
        "title": "Armorer Technical Manual CZ 75 Pistols",
        "filename": "Armorer_Technical_Manual_CZ_75_Pistols.pdf",
        "size_mb": 0.01,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/CZ_75_Pistols/manuals/Armorer_Technical_Manual_CZ_75_Pistols.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/CZ_75_Pistols/manuals/Armorer_Technical_Manual_CZ_75_Pistols.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/CZ_75_Pistols/manuals/Armorer_Technical_Manual_CZ_75_Pistols.pdf",
        "local_url": "/api/manuals/CZ_75_Pistols/Armorer_Technical_Manual_CZ_75_Pistols.pdf"
      }
    ],
    "schematics": []
  },
  "Browning_Hi_Power": {
    "id": "Browning_Hi_Power",
    "name": "Browning Hi-Power / SA-35",
    "subtitle": "P-35 9mm Combat Pioneer & Springfield SA-35 (9x19mm Parabellum)",
    "manufacturer": "FN Herstal / Browning / Springfield Armory",
    "category": "Pistols",
    "action_type": "Single-Action Semi-Automatic (SAO)",
    "operating_actions": [
      "Single-Action",
      "Short Recoil",
      "Cam Lug"
    ],
    "types": [
      "Pistols",
      "Historic Military",
      "Classic Combat"
    ],
    "caliber_categories": [
      "9x19mm"
    ],
    "era": "Historic Military & Duty (1935\u2013Present)",
    "models": [
      "FN Hi-Power Mk I / II / III",
      "Browning Hi-Power Practical",
      "Springfield Armory SA-35",
      "Inglis Hi-Power"
    ],
    "calibers": [
      "9x19mm Parabellum",
      ".40 S&W"
    ],
    "key_tasks": [
      "Magazine Disconnect Safety Removal / Tuning",
      "Trigger Pull Smoothing (drop from 8 lbs to 4.5 lbs)",
      "Hammer Spur Bite Bobbing",
      "Two-Piece Barrel Cam Inspection",
      "Extractor Spring Replacement"
    ],
    "specs": {
      "operating_system": "Short recoil tilting barrel using fixed kidney-shaped cam lug (eliminating the swinging 1911 link)",
      "magazine_capacity": "Original 13-round double-stack staggered column magazine (pioneered by Dieudonn\u00e9 Saive)",
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
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Browning_Hi_Power.pdf",
        "title": "Armorer Technical Manual Browning Hi Power",
        "filename": "Armorer_Technical_Manual_Browning_Hi_Power.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Browning_Hi_Power/manuals/Armorer_Technical_Manual_Browning_Hi_Power.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Browning_Hi_Power/manuals/Armorer_Technical_Manual_Browning_Hi_Power.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Browning_Hi_Power/manuals/Armorer_Technical_Manual_Browning_Hi_Power.pdf",
        "local_url": "/api/manuals/Browning_Hi_Power/Armorer_Technical_Manual_Browning_Hi_Power.pdf"
      }
    ],
    "schematics": []
  },
  "HK_USP_Pistols": {
    "id": "HK_USP_Pistols",
    "name": "Heckler & Koch USP / Mark 23 Series",
    "subtitle": "USP 9, USP 45, USP Compact & US SOCOM Mark 23 (.45 ACP & 9mm)",
    "manufacturer": "Heckler & Koch",
    "category": "Pistols",
    "action_type": "Double-Action / Single-Action Combat Pistol",
    "operating_actions": [
      "DA/SA",
      "Short Recoil",
      "Mechanical Recoil Buffer"
    ],
    "types": [
      "Pistols",
      "Military Special Operations",
      "Duty Handguns"
    ],
    "caliber_categories": [
      ".45 ACP",
      "9x19mm",
      ".40 S&W"
    ],
    "era": "Modern Tactical Tank (1993\u2013Present)",
    "models": [
      "USP 45 Full Size",
      "USP 9mm",
      "USP Compact",
      "USP Tactical",
      "US SOCOM Mark 23 Mod 0"
    ],
    "calibers": [
      ".45 ACP",
      "9x19mm Parabellum",
      ".40 S&W"
    ],
    "key_tasks": [
      "Control Lever Detent Plate Conversions (Var 1\u201310)",
      "Captive Recoil Buffer Assembly Service",
      "Extractor Claw Inspection",
      "Match Trigger Kit Installation",
      "Barrel O-Ring Replacement"
    ],
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
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_HK_USP_Pistols.pdf",
        "title": "Armorer Technical Manual HK USP Pistols",
        "filename": "Armorer_Technical_Manual_HK_USP_Pistols.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/HK_USP_Pistols/manuals/Armorer_Technical_Manual_HK_USP_Pistols.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/HK_USP_Pistols/manuals/Armorer_Technical_Manual_HK_USP_Pistols.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/HK_USP_Pistols/manuals/Armorer_Technical_Manual_HK_USP_Pistols.pdf",
        "local_url": "/api/manuals/HK_USP_Pistols/Armorer_Technical_Manual_HK_USP_Pistols.pdf"
      }
    ],
    "schematics": []
  },
  "Ruger_Mark_Series": {
    "id": "Ruger_Mark_Series",
    "name": "Ruger Mark I\u2013IV Target Pistols",
    "subtitle": "Mark I, II, III, IV & 22/45 Target & Hunter Models (.22 LR)",
    "manufacturer": "Ruger",
    "category": "Pistols",
    "action_type": "Blowback Rimfire Target Pistol",
    "operating_actions": [
      "Blowback",
      "Single-Action",
      "Rimfire Target"
    ],
    "types": [
      "Pistols",
      "Rimfire Target",
      "Plinking"
    ],
    "caliber_categories": [
      ".22 LR"
    ],
    "era": "American Rimfire Legend (1949\u2013Present)",
    "models": [
      "Standard",
      "Mark I",
      "Mark II Target",
      "Mark III Hunter",
      "Mark IV 22/45",
      "Mark IV Target",
      "Mark IV Tactical"
    ],
    "calibers": [
      ".22 LR (Long Rifle)"
    ],
    "key_tasks": [
      "Mark IV One-Button Takedown Pivot",
      "Mark I-III Hammer Strut Alignment",
      "Loaded Chamber Indicator Removal (Mk III)",
      "Volquartsen Accurizing Kit Install",
      "Extractor Claw Upgrade"
    ],
    "specs": {
      "operating_system": "Straight blowback cylindrical bolt cycling inside fixed tubular steel receiver",
      "mark_iv_takedown": "Single rear recessed push-button releases upper receiver from frame on forward hinge pin",
      "mark_ii_re\u4e3a\u5176assembly_rule": "Muzzle must point upward 45\u00b0 so hammer strut drops freely into mainspring housing cup before latching",
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
        "action": "Immediate Action: Point muzzle 45\u00b0 straight up. Pull trigger to ensure hammer is fully forward. Listen for hammer strut click. Tilt pistol back so strut seats into the center notch of the mainspring housing plunger. Close latch smoothly."
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
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Ruger_Mark_Series.pdf",
        "title": "Armorer Technical Manual Ruger Mark Series",
        "filename": "Armorer_Technical_Manual_Ruger_Mark_Series.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Ruger_Mark_Series/manuals/Armorer_Technical_Manual_Ruger_Mark_Series.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Ruger_Mark_Series/manuals/Armorer_Technical_Manual_Ruger_Mark_Series.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Ruger_Mark_Series/manuals/Armorer_Technical_Manual_Ruger_Mark_Series.pdf",
        "local_url": "/api/manuals/Ruger_Mark_Series/Armorer_Technical_Manual_Ruger_Mark_Series.pdf"
      }
    ],
    "schematics": []
  },
  "Desert_Eagle_Pistols": {
    "id": "Desert_Eagle_Pistols",
    "name": "Desert Eagle / Magnum Research",
    "subtitle": "Mark XIX Magnum Handguns (.50 AE, .44 Magnum, .357 Magnum)",
    "manufacturer": "Magnum Research / IWI",
    "category": "Pistols",
    "action_type": "Gas-Operated Rotating Bolt Magnum Pistol",
    "operating_actions": [
      "Gas-Operated",
      "Rotating Bolt",
      "Short Stroke Piston"
    ],
    "types": [
      "Pistols",
      "Heavy Magnum",
      "Hand Cannon"
    ],
    "caliber_categories": [
      ".50 Action Express",
      ".44 Magnum",
      ".357 Magnum"
    ],
    "era": "Modern Heavy Magnum (1983\u2013Present)",
    "models": [
      "Desert Eagle Mark XIX .50 AE",
      "Desert Eagle .44 Magnum",
      "Desert Eagle .357 Magnum"
    ],
    "calibers": [
      ".50 AE",
      ".44 Magnum",
      ".357 Magnum"
    ],
    "key_tasks": [
      "Gas Piston Chamber Cleanout",
      "Rotating 3-Lug Bolt Maintenance",
      "Dual Recoil Spring Rod Assembly",
      "Extractor Spring Tuning",
      "Gas Cylinder Scraping"
    ],
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
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Desert_Eagle_Pistols.pdf",
        "title": "Armorer Technical Manual Desert Eagle Pistols",
        "filename": "Armorer_Technical_Manual_Desert_Eagle_Pistols.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Desert_Eagle_Pistols/manuals/Armorer_Technical_Manual_Desert_Eagle_Pistols.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Desert_Eagle_Pistols/manuals/Armorer_Technical_Manual_Desert_Eagle_Pistols.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Desert_Eagle_Pistols/manuals/Armorer_Technical_Manual_Desert_Eagle_Pistols.pdf",
        "local_url": "/api/manuals/Desert_Eagle_Pistols/Armorer_Technical_Manual_Desert_Eagle_Pistols.pdf"
      }
    ],
    "schematics": []
  },
  "Smith_Wesson_Revolvers": {
    "id": "Smith_Wesson_Revolvers",
    "name": "Smith & Wesson K/L/N-Frame Revolvers",
    "subtitle": "Distinguished Combat Magnum 686, 586, 19, 10 & Model 29 (.357 Mag, .44 Mag, .38 Spl)",
    "manufacturer": "Smith & Wesson",
    "category": "Revolvers",
    "action_type": "Double-Action / Single-Action Revolver",
    "operating_actions": [
      "Double-Action",
      "Single-Action",
      "Solid-Frame Swing-Out Cylinder"
    ],
    "types": [
      "Revolvers",
      "Duty Handguns",
      "Hunting & Target"
    ],
    "caliber_categories": [
      ".357 Magnum",
      ".44 Magnum",
      ".38 Special"
    ],
    "era": "American Revolver Benchmark (1899\u2013Present)",
    "models": [
      "Model 686 / 586 (L-Frame .357)",
      "Model 19 / 66 (K-Frame Combat Magnum)",
      "Model 10 / 64 (K-Frame Service)",
      "Model 29 / 629 (N-Frame .44 Mag)",
      "Model 27 / 28 Highway Patrolman"
    ],
    "calibers": [
      ".357 Magnum",
      ".44 Magnum",
      ".38 Special (+P)"
    ],
    "key_tasks": [
      "Cylinder Endshake Shimming (0.001\"\u20130.002\")",
      "Barrel-Cylinder Gap Feeler Gauging (0.004\"\u20130.007\")",
      "Rebound Slide Spring Stoning & Tuning",
      "Crane / Yoke True Alignment",
      "Hand Timing & Extractor Star Check"
    ],
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
        "action": "Immediate Action: Look at ejector rod. If knurled head has backed out, tighten counter-clockwise (reverse thread) by hand. Gunsmith Action: Swing out cylinder, lift extractor star, brush under-star recess with bronze brush. Check barrel-cylinder gap with feeler gauge. If gap is under 0.003\", face off barrel breech shoulder with 90\u00b0 facing cutter."
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
        "url": "https://www.youtube.com/watch?v=s8W686x9M2w",
        "embed_url": "https://www.youtube-nocookie.com/embed/s8W686x9M2w",
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
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Smith_Wesson_Revolvers.pdf",
        "title": "Armorer Technical Manual Smith Wesson Revolvers",
        "filename": "Armorer_Technical_Manual_Smith_Wesson_Revolvers.pdf",
        "size_mb": 0.01,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Smith_Wesson_Revolvers/manuals/Armorer_Technical_Manual_Smith_Wesson_Revolvers.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Smith_Wesson_Revolvers/manuals/Armorer_Technical_Manual_Smith_Wesson_Revolvers.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Smith_Wesson_Revolvers/manuals/Armorer_Technical_Manual_Smith_Wesson_Revolvers.pdf",
        "local_url": "/api/manuals/Smith_Wesson_Revolvers/Armorer_Technical_Manual_Smith_Wesson_Revolvers.pdf"
      }
    ],
    "schematics": []
  },
  "Colt_Python_Revolvers": {
    "id": "Colt_Python_Revolvers",
    "name": "Colt Python & Anaconda Revolvers",
    "subtitle": "The Rolls-Royce of Revolvers & 2020 Rebirth (.357 Magnum & .44 Magnum)",
    "manufacturer": "Colt's Manufacturing",
    "category": "Revolvers",
    "action_type": "Double-Action / Single-Action Revolver",
    "operating_actions": [
      "Double-Action",
      "Single-Action",
      "Solid-Frame Bank Vault Lockup"
    ],
    "types": [
      "Revolvers",
      "Premium Target",
      "Collectors & Hunting"
    ],
    "caliber_categories": [
      ".357 Magnum",
      ".44 Magnum"
    ],
    "era": "Golden Age Hand-Fitted to Modern CNC (1955\u2013Present)",
    "models": [
      "Python (.357 Mag 4.25\" / 6\")",
      "Anaconda (.44 Mag)",
      "King Cobra",
      "Diamondback"
    ],
    "calibers": [
      ".357 Magnum",
      ".38 Special",
      ".44 Magnum"
    ],
    "key_tasks": [
      "V-Spring Hand-Fitting (Legacy Models)",
      "Cylinder Bolt Drop Timing Adjustment",
      "Bank Vault Cylinder Lockup Inspection",
      "Rebound Lever Hand-Stoning",
      "2020 Leaf Spring Action Tuning"
    ],
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
        "url": "https://www.youtube.com/watch?v=c8Pyt44x9M2w",
        "embed_url": "https://www.youtube-nocookie.com/embed/c8Pyt44x9M2w",
        "summary": "In-depth mechanical study of the classic Colt V-spring lockwork, hand timing, rebound lever tuning, and comparing the original to the 2020 Python design."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Colt_Python_Revolvers.pdf",
        "title": "Armorer Technical Manual Colt Python Revolvers",
        "filename": "Armorer_Technical_Manual_Colt_Python_Revolvers.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Colt_Python_Revolvers/manuals/Armorer_Technical_Manual_Colt_Python_Revolvers.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Colt_Python_Revolvers/manuals/Armorer_Technical_Manual_Colt_Python_Revolvers.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Colt_Python_Revolvers/manuals/Armorer_Technical_Manual_Colt_Python_Revolvers.pdf",
        "local_url": "/api/manuals/Colt_Python_Revolvers/Armorer_Technical_Manual_Colt_Python_Revolvers.pdf"
      }
    ],
    "schematics": []
  },
  "Ruger_Revolvers_GP100": {
    "id": "Ruger_Revolvers_GP100",
    "name": "Ruger GP100 / SP101 & Super Redhawk",
    "subtitle": "Modular Frame Heavy-Duty Double-Action Revolvers (.357 Mag & .44 Mag)",
    "manufacturer": "Ruger",
    "category": "Revolvers",
    "action_type": "Double-Action / Single-Action Modular Revolver",
    "operating_actions": [
      "DA/SA",
      "Modular Sub-Assembly",
      "Triple-Locking Cylinder"
    ],
    "types": [
      "Revolvers",
      "Heavy-Duty Duty",
      "Magnum Hunting"
    ],
    "caliber_categories": [
      ".357 Magnum",
      ".44 Magnum",
      ".38 Special"
    ],
    "era": "Modern Industrial Workhorse (1985\u2013Present)",
    "models": [
      "GP100 4.2\" (.357 Mag)",
      "GP100 Match Champion",
      "SP101 Concealed Carry (.357 Mag)",
      "Super Redhawk (.44 Mag / .454 Casull)"
    ],
    "calibers": [
      ".357 Magnum",
      ".38 Special",
      ".44 Magnum",
      ".454 Casull"
    ],
    "key_tasks": [
      "Trigger Housing Modular Sub-Assembly Removal",
      "Hammer & Trigger Dog Shimming",
      "Wolff Spring Kit Installation",
      "Crane Latch Pivot Servicing",
      "Front Cylinder Lockup Verification"
    ],
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
        "url": "https://www.youtube.com/watch?v=r8G100x9M5w",
        "embed_url": "https://www.youtube-nocookie.com/embed/r8G100x9M5w",
        "summary": "Teardown of the GP100 trigger group, installing Power Custom trigger shims, replacing mainspring and trigger return spring, and smoothing double action stroke."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Ruger_Revolvers_GP100.pdf",
        "title": "Armorer Technical Manual Ruger Revolvers GP100",
        "filename": "Armorer_Technical_Manual_Ruger_Revolvers_GP100.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Ruger_Revolvers_GP100/manuals/Armorer_Technical_Manual_Ruger_Revolvers_GP100.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Ruger_Revolvers_GP100/manuals/Armorer_Technical_Manual_Ruger_Revolvers_GP100.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Ruger_Revolvers_GP100/manuals/Armorer_Technical_Manual_Ruger_Revolvers_GP100.pdf",
        "local_url": "/api/manuals/Ruger_Revolvers_GP100/Armorer_Technical_Manual_Ruger_Revolvers_GP100.pdf"
      }
    ],
    "schematics": []
  },
  "Colt_Single_Action_Army": {
    "id": "Colt_Single_Action_Army",
    "name": "Colt Single Action Army (SAA 1873 Peacemaker)",
    "subtitle": "Model P 1873 'The Gun That Won the West' (.45 Colt & .357 Magnum)",
    "manufacturer": "Colt's Manufacturing",
    "category": "Revolvers",
    "action_type": "Single-Action Revolver (4-Click Lockwork)",
    "operating_actions": [
      "Single-Action",
      "Loading Gate Rod Ejection",
      "4-Click Lockwork"
    ],
    "types": [
      "Revolvers",
      "Historic Western",
      "Cowboy Action"
    ],
    "caliber_categories": [
      ".45 Colt",
      ".357 Magnum",
      ".44-40 WCF"
    ],
    "era": "American Frontier (1873\u2013Present)",
    "models": [
      "Colt SAA 1873",
      "Peacemaker 4.75\"",
      "Artillery Model 5.5\"",
      "Cavalry Model 7.5\""
    ],
    "calibers": [
      ".45 Colt",
      ".357 Magnum",
      ".44-40 Winchester"
    ],
    "key_tasks": [
      "4-Click Hammer Notch Stoning",
      "Hand & Bolt Flat Spring Replacement",
      "Cylinder Base Pin Latch Service",
      "Half-Cock Safety Inspection",
      "Loading Gate Detent Fitting"
    ],
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
        "url": "https://www.youtube.com/watch?v=c8SAA1873x2w",
        "embed_url": "https://www.youtube-nocookie.com/embed/c8SAA1873x2w",
        "summary": "Mark Novak teardown of the 1873 Peacemaker, tuning the combination bolt/hand spring, timing cylinder lockup, and repairing damaged half-cock notches."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Colt_Single_Action_Army.pdf",
        "title": "Armorer Technical Manual Colt Single Action Army",
        "filename": "Armorer_Technical_Manual_Colt_Single_Action_Army.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Colt_Single_Action_Army/manuals/Armorer_Technical_Manual_Colt_Single_Action_Army.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Colt_Single_Action_Army/manuals/Armorer_Technical_Manual_Colt_Single_Action_Army.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Colt_Single_Action_Army/manuals/Armorer_Technical_Manual_Colt_Single_Action_Army.pdf",
        "local_url": "/api/manuals/Colt_Single_Action_Army/Armorer_Technical_Manual_Colt_Single_Action_Army.pdf"
      }
    ],
    "schematics": []
  },
  "Ruger_Blackhawk_Vaquero": {
    "id": "Ruger_Blackhawk_Vaquero",
    "name": "Ruger Blackhawk & Vaquero",
    "subtitle": "New Model Single-Action Revolvers (.357 Mag, .44 Mag, .45 Colt)",
    "manufacturer": "Ruger",
    "category": "Revolvers",
    "action_type": "Single-Action Revolver with Transfer Bar Safety",
    "operating_actions": [
      "Single-Action",
      "Transfer Bar Safety",
      "Coil Spring Lockwork"
    ],
    "types": [
      "Revolvers",
      "Cowboy Action",
      "Magnum Hunting"
    ],
    "caliber_categories": [
      ".357 Magnum",
      ".44 Magnum",
      ".45 Colt"
    ],
    "era": "Modern Ruger Single-Action (1955\u2013Present)",
    "models": [
      "Blackhawk (Adjustable Sights)",
      "Super Blackhawk (.44 Mag)",
      "Vaquero (Fixed Sights)",
      "Bisley Target"
    ],
    "calibers": [
      ".357 Magnum",
      ".44 Magnum",
      ".45 Colt",
      ".41 Magnum"
    ],
    "key_tasks": [
      "Transfer Bar Clearance & Pinch Test",
      "Loading Gate Pawl Interlock Check",
      "Poor Boy's Trigger Job (Uncoupling Leg)",
      "Cylinder Throat Pin Gauging (.4525\")",
      "Base Pin Latch Upgrade"
    ],
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
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Ruger_Blackhawk_Vaquero.pdf",
        "title": "Armorer Technical Manual Ruger Blackhawk Vaquero",
        "filename": "Armorer_Technical_Manual_Ruger_Blackhawk_Vaquero.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Ruger_Blackhawk_Vaquero/manuals/Armorer_Technical_Manual_Ruger_Blackhawk_Vaquero.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Ruger_Blackhawk_Vaquero/manuals/Armorer_Technical_Manual_Ruger_Blackhawk_Vaquero.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Ruger_Blackhawk_Vaquero/manuals/Armorer_Technical_Manual_Ruger_Blackhawk_Vaquero.pdf",
        "local_url": "/api/manuals/Ruger_Blackhawk_Vaquero/Armorer_Technical_Manual_Ruger_Blackhawk_Vaquero.pdf"
      }
    ],
    "schematics": []
  },
  "SW_J_Frame_Snubnose": {
    "id": "SW_J_Frame_Snubnose",
    "name": "Smith & Wesson J-Frame Snubnose",
    "subtitle": "Airweight 642, 637, Model 36 & Bodyguard (.38 Special & .357 Mag)",
    "manufacturer": "Smith & Wesson",
    "category": "Revolvers",
    "action_type": "Double-Action-Only & DA/SA Concealed Carry Revolver",
    "operating_actions": [
      "Double-Action",
      "Enclosed Hammer (Centennial)",
      "Aluminum Alloy Airweight"
    ],
    "types": [
      "Revolvers",
      "Concealed Carry",
      "Snubnose Pocket Pistol"
    ],
    "caliber_categories": [
      ".38 Special",
      ".357 Magnum"
    ],
    "era": "American Concealed Carry Benchmark (1950\u2013Present)",
    "models": [
      "Model 642 Airweight (DAO Enclosed)",
      "Model 637 Chief's Special",
      "Model 36 Classic (.38 Spl)",
      "Model 340 PD (.357 Mag Scandium)"
    ],
    "calibers": [
      ".38 Special (+P)",
      ".357 Magnum"
    ],
    "key_tasks": [
      "Centennial Enclosed Hammer Disassembly",
      "Apex J-Frame Duty Spring Kit",
      "Barrel-Cylinder Gap Inspection",
      "Firing Pin Bushing & Spring Service",
      "Crane Screw Fitting"
    ],
    "specs": {
      "barrel_length": "1.875\" standard snubnose barrel with fixed front ramp sight",
      "frame_material": "Aluminum alloy (Airweight) / Scandium alloy (AirLite) / Carbon or Stainless steel",
      "trigger_pull_weight": "11.5 to 13.0 lbs factory double-action; drops to 8.5\u20139.0 lbs with Apex Duty kit",
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
        "url": "https://www.youtube.com/watch?v=s8W642x9M5w",
        "embed_url": "https://www.youtube-nocookie.com/embed/s8W642x9M5w",
        "summary": "Step-by-step teardown of the S&W J-frame Airweight, installing the extended firing pin, lighter rebound spring, and achieving a smooth 8.5 lb carry trigger."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_SW_J_Frame_Snubnose.pdf",
        "title": "Armorer Technical Manual SW J Frame Snubnose",
        "filename": "Armorer_Technical_Manual_SW_J_Frame_Snubnose.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/SW_J_Frame_Snubnose/manuals/Armorer_Technical_Manual_SW_J_Frame_Snubnose.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/SW_J_Frame_Snubnose/manuals/Armorer_Technical_Manual_SW_J_Frame_Snubnose.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/SW_J_Frame_Snubnose/manuals/Armorer_Technical_Manual_SW_J_Frame_Snubnose.pdf",
        "local_url": "/api/manuals/SW_J_Frame_Snubnose/Armorer_Technical_Manual_SW_J_Frame_Snubnose.pdf"
      }
    ],
    "schematics": []
  },
  "AR15_M4_Platform": {
    "id": "AR15_M4_Platform",
    "name": "AR-15 / M4 / M16 Platform",
    "subtitle": "Direct Gas Impingement Carbines & Rifles (5.56x45mm NATO & .223 Rem / 300 BLK)",
    "manufacturer": "Colt / Aero Precision / BCM / PSA / US Military",
    "category": "Rifles & Carbines",
    "action_type": "Direct Gas Impingement Semi-Automatic",
    "operating_actions": [
      "Direct Gas Impingement",
      "Rotating 7-Lug Bolt",
      "Modular Upper/Lower"
    ],
    "types": [
      "Rifles & Carbines",
      "Military Service Rifle",
      "Modern Sporting Rifle"
    ],
    "caliber_categories": [
      "5.56x45mm NATO",
      ".223 Remington",
      "300 AAC Blackout"
    ],
    "era": "American Standard Service Rifle (1962\u2013Present)",
    "models": [
      "M4 / M4A1 Carbine (14.5\")",
      "M16A2 / M16A4 (20\")",
      "AR-15 Carbine (16\")",
      "Mk18 CQBR (10.3\")",
      "Mk12 SPR"
    ],
    "calibers": [
      "5.56x45mm NATO",
      ".223 Remington",
      "300 AAC Blackout",
      "6.5 Grendel"
    ],
    "key_tasks": [
      "Gas Key Screws MO Staking (35\u201340 in-lbs)",
      "Barrel Nut Torque (30\u201380 ft-lbs)",
      "Castle Nut Staking (38\u201342 ft-lbs)",
      "Headspace Verification (GO / NO-GO / FIELD)",
      "Gas Tube Port Alignment"
    ],
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
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_AR15_M4_Platform.pdf",
        "title": "Armorer Technical Manual AR15 M4 Platform",
        "filename": "Armorer_Technical_Manual_AR15_M4_Platform.pdf",
        "size_mb": 0.01,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/AR15_M4_Platform/manuals/Armorer_Technical_Manual_AR15_M4_Platform.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/AR15_M4_Platform/manuals/Armorer_Technical_Manual_AR15_M4_Platform.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/AR15_M4_Platform/manuals/Armorer_Technical_Manual_AR15_M4_Platform.pdf",
        "local_url": "/api/manuals/AR15_M4_Platform/Armorer_Technical_Manual_AR15_M4_Platform.pdf"
      }
    ],
    "schematics": []
  },
  "AR10_SR25_Platform": {
    "id": "AR10_SR25_Platform",
    "name": "AR-10 / SR-25 / LR-308 Big-Bore Platform",
    "subtitle": "Large-Frame Modern Sporting Rifles (7.62x51mm NATO & .308 Winchester / 6.5 CM)",
    "manufacturer": "ArmaLite / Knight's Armament / DPMS / Aero Precision",
    "category": "Rifles & Carbines",
    "action_type": "Direct Gas Impingement Large-Frame Semi-Auto",
    "operating_actions": [
      "Direct Gas Impingement",
      "Rotating Bolt",
      "Big-Bore MSR"
    ],
    "types": [
      "Rifles & Carbines",
      "Precision Sniper Rifle",
      "Hunting Big Bore"
    ],
    "caliber_categories": [
      "7.62x51mm NATO",
      ".308 Winchester",
      "6.5 Creedmoor"
    ],
    "era": "Military DMR & Hunting (1956\u2013Present)",
    "models": [
      "ArmaLite AR-10A / AR-10B",
      "KAC SR-25 / M110 SASS",
      "DPMS LR-308 (Gen 1 / Gen 2)",
      "Aero Precision M5"
    ],
    "calibers": [
      "7.62x51mm NATO",
      ".308 Winchester",
      "6.5 Creedmoor"
    ],
    "key_tasks": [
      "Pattern Compatibility Check (ArmaLite vs DPMS)",
      "Gas Port Sizing & Buffer Weight Tuning",
      "Dual Extractor Pin Servicing",
      "Barrel Nut Handguard Alignment",
      "Headspace Gauging"
    ],
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
        "url": "https://www.youtube.com/watch?v=a8R10x9M2wQ",
        "embed_url": "https://www.youtube-nocookie.com/embed/a8R10x9M2wQ",
        "summary": "Comparing ArmaLite vs DPMS patterns, sizing gas ports for .308 Win vs 6.5 Creedmoor, and setting headspace on big-bore AR rifles."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_AR10_SR25_Platform.pdf",
        "title": "Armorer Technical Manual AR10 SR25 Platform",
        "filename": "Armorer_Technical_Manual_AR10_SR25_Platform.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/AR10_SR25_Platform/manuals/Armorer_Technical_Manual_AR10_SR25_Platform.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/AR10_SR25_Platform/manuals/Armorer_Technical_Manual_AR10_SR25_Platform.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/AR10_SR25_Platform/manuals/Armorer_Technical_Manual_AR10_SR25_Platform.pdf",
        "local_url": "/api/manuals/AR10_SR25_Platform/Armorer_Technical_Manual_AR10_SR25_Platform.pdf"
      }
    ],
    "schematics": []
  },
  "AK47_AKM_Platform": {
    "id": "AK47_AKM_Platform",
    "name": "Kalashnikov AK-47 / AKM / AK-74",
    "subtitle": "Stamped & Milled Automatic Rifles (7.62x39mm & 5.45x39mm Soviet)",
    "manufacturer": "Izhmash / Tula / Cugir / Arsenal / Century",
    "category": "Rifles & Carbines",
    "action_type": "Long-Stroke Gas Piston Semi-Automatic",
    "operating_actions": [
      "Long-Stroke Gas Piston",
      "Rotating 2-Lug Bolt",
      "Stamped/Milled Receiver"
    ],
    "types": [
      "Rifles & Carbines",
      "Military Battle Rifle",
      "Global Combat Standard"
    ],
    "caliber_categories": [
      "7.62x39mm",
      "5.45x39mm",
      "5.56x45mm"
    ],
    "era": "Global Combat Legend (1947\u2013Present)",
    "models": [
      "AK-47 Type 3 (Milled)",
      "AKM (Stamped 1mm)",
      "AK-74 (5.45mm)",
      "RPK Light Machine Gun",
      "AK-103",
      "WASR-10"
    ],
    "calibers": [
      "7.62x39mm Soviet",
      "5.45x39mm",
      "5.56x45mm NATO"
    ],
    "key_tasks": [
      "Front Trunnion Rivet Forming (3-ton squeeze)",
      "Barrel Pin Pressing & Headspace Setting",
      "Bolt Locking Lug Lapping",
      "Trigger Group Shepherds Hook Servicing",
      "Gas Tube Retainer Lever Fitting"
    ],
    "specs": {
      "headspace_rule": "Measured with completely stripped bolt (extractor removed). Bolt MUST close on 7.62x39 GO (1.3032\"); MUST NOT close on NO-GO (1.3090\"); closing on FIELD (1.3140\") is UNSAFE",
      "barrel_pin_press_fit": "Transverse 7mm barrel pin requires 2.5 to 3.5 tons hydraulic press force to insert through trunnion",
      "rivet_crush_spec": "Front trunnion uses 4mm swell-neck rivets crushed into chamfered receiver holes creating shear-proof bond",
      "gas_system_clearance": "Long-stroke piston pinned to carrier; piston must have intentional wobble (approx 0.010\"\u20130.020\" play) to self-align in gas tube",
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
        "url": "https://www.youtube.com/watch?v=k8AK47x9M5w",
        "embed_url": "https://www.youtube-nocookie.com/embed/k8AK47x9M5w",
        "summary": "Master AK builder Jim Fuller explains front trunnion riveting, pressing barrel pins, setting headspace with stripped bolts, and tuning trigger groups."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_AK47_AKM_Platform.pdf",
        "title": "Armorer Technical Manual AK47 AKM Platform",
        "filename": "Armorer_Technical_Manual_AK47_AKM_Platform.pdf",
        "size_mb": 0.01,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/AK47_AKM_Platform/manuals/Armorer_Technical_Manual_AK47_AKM_Platform.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/AK47_AKM_Platform/manuals/Armorer_Technical_Manual_AK47_AKM_Platform.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/AK47_AKM_Platform/manuals/Armorer_Technical_Manual_AK47_AKM_Platform.pdf",
        "local_url": "/api/manuals/AK47_AKM_Platform/Armorer_Technical_Manual_AK47_AKM_Platform.pdf"
      }
    ],
    "schematics": []
  },
  "Ruger_1022_Carbine": {
    "id": "Ruger_1022_Carbine",
    "name": "Ruger 10/22 Carbine & Takedown",
    "subtitle": "The World's Most Popular Semi-Automatic Rimfire Rifle (.22 LR)",
    "manufacturer": "Ruger",
    "category": "Rifles & Carbines",
    "action_type": "Blowback Semi-Automatic Rimfire",
    "operating_actions": [
      "Blowback",
      "Detachable Rotary Magazine",
      "V-Block Barrel Clamp"
    ],
    "types": [
      "Rifles & Carbines",
      "Rimfire Benchmark",
      "Custom Benchrest"
    ],
    "caliber_categories": [
      ".22 LR"
    ],
    "era": "American Rimfire Legend (1964\u2013Present)",
    "models": [
      "10/22 Carbine",
      "10/22 Takedown",
      "10/22 Target",
      "10/22 Sporter",
      "Charger Pistol"
    ],
    "calibers": [
      ".22 LR (Long Rifle)"
    ],
    "key_tasks": [
      "V-Block Clamp Torque (25\u201330 in-lbs)",
      "Rotary Magazine Pre-Tensioning (1-1/4 turns)",
      "Action Screw Torque (15\u201320 in-lbs)",
      "Auto-Bolt Release Modification",
      "Rim Recess Headspace Stoning (0.0425\")"
    ],
    "specs": {
      "v_block_screws": "25 to 30 in-lbs tightened in even alternating increments; overtightening causes barrel droop and accuracy loss",
      "action_screw_torque": "15 to 20 in-lbs (wood/synthetic stock) / 25 in-lbs (aluminum pillar bedding)",
      "bolt_rim_headspace": "0.0425\" to 0.0435\" true headspace cut into bolt face recess for match accuracy",
      "magazine_tension": "Rotor clock spring pre-loaded exactly 1-1/4 full turns (450\u00b0) counter-clockwise before closing nut",
      "trigger_pull_weight": "6.0 to 7.0 lbs factory standard; drops to 2.25\u20132.75 lbs with Volquartsen or BX-Trigger"
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
        "url": "https://www.youtube.com/watch?v=r81022x9M2w",
        "embed_url": "https://www.youtube-nocookie.com/embed/r81022x9M2w",
        "summary": "Teardown of the Ruger 10/22 action: V-block removal, bolt disassembly, auto-bolt release modification, and installing the BX trigger."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Ruger_1022_Carbine.pdf",
        "title": "Armorer Technical Manual Ruger 1022 Carbine",
        "filename": "Armorer_Technical_Manual_Ruger_1022_Carbine.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Ruger_1022_Carbine/manuals/Armorer_Technical_Manual_Ruger_1022_Carbine.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Ruger_1022_Carbine/manuals/Armorer_Technical_Manual_Ruger_1022_Carbine.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Ruger_1022_Carbine/manuals/Armorer_Technical_Manual_Ruger_1022_Carbine.pdf",
        "local_url": "/api/manuals/Ruger_1022_Carbine/Armorer_Technical_Manual_Ruger_1022_Carbine.pdf"
      }
    ],
    "schematics": []
  },
  "Ruger_Mini14_Carbines": {
    "id": "Ruger_Mini14_Carbines",
    "name": "Ruger Mini-14 & Mini Thirty",
    "subtitle": "Garand-Style Rotating Bolt Carbines (5.56x45mm / .223 Rem & 7.62x39mm)",
    "manufacturer": "Ruger",
    "category": "Rifles & Carbines",
    "action_type": "Short-Stroke Gas Piston Semi-Automatic",
    "operating_actions": [
      "Garand-Style Rotating Bolt",
      "Gas Piston",
      "Drop-Out Trigger Guard"
    ],
    "types": [
      "Rifles & Carbines",
      "Ranch Rifle",
      "Law Enforcement"
    ],
    "caliber_categories": [
      "5.56x45mm NATO",
      ".223 Remington",
      "7.62x39mm"
    ],
    "era": "Modern Classic Carbine (1973\u2013Present)",
    "models": [
      "Mini-14 Ranch Rifle",
      "Mini-14 Tactical",
      "Mini Thirty (7.62x39mm)",
      "AC-556 (Selective Fire)"
    ],
    "calibers": [
      "5.56x45mm NATO",
      ".223 Remington",
      "7.62x39mm",
      "300 AAC Blackout"
    ],
    "key_tasks": [
      "Gas Block Screw Gap Equalization (30 in-lbs)",
      "Operating Rod Slide Channel Polishing",
      "Garand-Style Trigger Group Service",
      "Gas Bushing Diameter Tuning",
      "Magazine Latch Fitting"
    ],
    "specs": {
      "gas_block_screws": "Torque to exactly 30 in-lbs; armorer MUST measure gap between gas block halves with feeler gauge to ensure equal spacing on all 4 corners",
      "gas_bushing": "Internal gas orifice bushing under gas block controls gas volume (0.080\" factory standard; reduced to 0.045\"\u20130.050\" for taming violent brass ejection)",
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
        "action": "Gunsmith Action: Remove gas block screws. Pull out factory 0.080\" gas bushing. Install reduced-diameter gas bushing (0.045\"\u20130.050\"). Re-torque gas block screws in criss-cross pattern to 30 in-lbs, ensuring equal gap on both sides with feeler gauge."
      }
    ],
    "videos": [
      {
        "id": "m8Mini14x9Lw",
        "title": "Ruger Mini-14 Complete Takedown, Gas Block Tuning & Accuracy",
        "creator": "MidwayUSA / Larry Potterfield",
        "category": "Armorer Tuning",
        "url": "https://www.youtube.com/watch?v=m8Mini14x9Lw",
        "embed_url": "https://www.youtube-nocookie.com/embed/m8Mini14x9Lw",
        "summary": "Teardown of the Mini-14, equalizing gas block screw gaps, disassembling the bolt with a bolt tool, and tuning the trigger group."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Ruger_Mini14_Carbines.pdf",
        "title": "Armorer Technical Manual Ruger Mini14 Carbines",
        "filename": "Armorer_Technical_Manual_Ruger_Mini14_Carbines.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Ruger_Mini14_Carbines/manuals/Armorer_Technical_Manual_Ruger_Mini14_Carbines.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Ruger_Mini14_Carbines/manuals/Armorer_Technical_Manual_Ruger_Mini14_Carbines.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Ruger_Mini14_Carbines/manuals/Armorer_Technical_Manual_Ruger_Mini14_Carbines.pdf",
        "local_url": "/api/manuals/Ruger_Mini14_Carbines/Armorer_Technical_Manual_Ruger_Mini14_Carbines.pdf"
      }
    ],
    "schematics": []
  },
  "M1_Garand_Rifle": {
    "id": "M1_Garand_Rifle",
    "name": "M1 Garand Rifle",
    "subtitle": "U.S. Rifle, Caliber .30, M1 'The Greatest Battle Implement Ever Devised'",
    "manufacturer": "Springfield Armory / Winchester / H&R / BMR",
    "category": "Rifles & Carbines",
    "action_type": "Long-Stroke Gas Piston Semi-Automatic",
    "operating_actions": [
      "Long-Stroke Gas Piston",
      "Rotating Bolt",
      "En-Bloc Clip Feeding"
    ],
    "types": [
      "Rifles & Carbines",
      "Historic Military Battle Rifle",
      "CMP Match Rifle"
    ],
    "caliber_categories": [
      ".30-06 Springfield",
      "7.62x51mm NATO (.308)"
    ],
    "era": "WWII & Korean War Legend (1936\u20131957)",
    "models": [
      "M1 Garand Standard WWII",
      "Post-War M1",
      "M1C / M1D Sniper",
      "Navy 7.62mm Conversion"
    ],
    "calibers": [
      ".30-06 Springfield (M2 Ball)",
      "7.62x51mm NATO (.308 Win)"
    ],
    "key_tasks": [
      "Operating Rod Tilt Test",
      "Gas Cylinder Diameter Gauging (0.5320\")",
      "Op-Rod Piston Head Gauging (0.5260\")",
      "Clip Latch Timing & Ejection",
      "M1 Grease Protocol (Lubriplate 130A)"
    ],
    "specs": {
      "tilt_test_protocol": "Assemble bare receiver, barrel, op-rod, and bolt (no spring). Tilt rifle 45\u00b0 up and 45\u00b0 down; operating rod and bolt MUST slide back and forth under own weight without binding",
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
        "url": "https://www.youtube.com/watch?v=g8M1x9Garand2w",
        "embed_url": "https://www.youtube-nocookie.com/embed/g8M1x9Garand2w",
        "summary": "Full USGI armorer teardown of the M1 Garand: performing the 45\u00b0 tilt test, gauging the gas cylinder, inspecting the op-rod tab, and applying Lubriplate 130A."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_M1_Garand_Rifle.pdf",
        "title": "Armorer Technical Manual M1 Garand Rifle",
        "filename": "Armorer_Technical_Manual_M1_Garand_Rifle.pdf",
        "size_mb": 0.01,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/M1_Garand_Rifle/manuals/Armorer_Technical_Manual_M1_Garand_Rifle.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/M1_Garand_Rifle/manuals/Armorer_Technical_Manual_M1_Garand_Rifle.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/M1_Garand_Rifle/manuals/Armorer_Technical_Manual_M1_Garand_Rifle.pdf",
        "local_url": "/api/manuals/M1_Garand_Rifle/Armorer_Technical_Manual_M1_Garand_Rifle.pdf"
      }
    ],
    "schematics": []
  },
  "M1_Carbine": {
    "id": "M1_Carbine",
    "name": "M1 Carbine",
    "subtitle": "U.S. Carbine, Caliber .30, M1 (Lightweight Tappet Gas Piston)",
    "manufacturer": "Winchester / Inland / Rock-Ola / Underwood / Quality Hardware",
    "category": "Rifles & Carbines",
    "action_type": "Short-Stroke Tappet Gas Piston Semi-Automatic",
    "operating_actions": [
      "Short-Stroke Piston",
      "Rotating Bolt",
      "Detachable Magazine"
    ],
    "types": [
      "Rifles & Carbines",
      "Historic Military Light Rifle"
    ],
    "caliber_categories": [
      ".30 Carbine"
    ],
    "era": "WWII & Korean War (1942\u20131973)",
    "models": [
      "M1 Carbine",
      "M1A1 Paratrooper Folding Stock",
      "M2 (Selective Fire)",
      "M3 Infrared"
    ],
    "calibers": [
      ".30 Carbine (7.62x33mm)"
    ],
    "key_tasks": [
      "Gas Piston Nut Removal & Staking (18\u201322 ft-lbs)",
      "Recoil Plate Tang Bedding & Screw Tension",
      "Bolt Disassembly Tool (Extractor Plunger)",
      "Magazine Catch Type 1 to 3 Upgrade",
      "Slide Free Travel Check"
    ],
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
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_M1_Carbine.pdf",
        "title": "Armorer Technical Manual M1 Carbine",
        "filename": "Armorer_Technical_Manual_M1_Carbine.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/M1_Carbine/manuals/Armorer_Technical_Manual_M1_Carbine.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/M1_Carbine/manuals/Armorer_Technical_Manual_M1_Carbine.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/M1_Carbine/manuals/Armorer_Technical_Manual_M1_Carbine.pdf",
        "local_url": "/api/manuals/M1_Carbine/Armorer_Technical_Manual_M1_Carbine.pdf"
      }
    ],
    "schematics": []
  },
  "Springfield_M1A_M14": {
    "id": "Springfield_M1A_M14",
    "name": "Springfield M1A / M14 Rifle",
    "subtitle": "U.S. Rifle 7.62mm M14 & Springfield M1A National Match (.308 Win)",
    "manufacturer": "Springfield Armory / US Military",
    "category": "Rifles & Carbines",
    "action_type": "Short-Stroke Gas Piston Semi-Automatic",
    "operating_actions": [
      "Short-Stroke Gas Piston",
      "Rotating Bolt",
      "Roller Bolt Cam"
    ],
    "types": [
      "Rifles & Carbines",
      "Battle Rifle",
      "National Match Target"
    ],
    "caliber_categories": [
      "7.62x51mm NATO",
      ".308 Winchester"
    ],
    "era": "Cold War Battle Rifle to Modern DMR (1959\u2013Present)",
    "models": [
      "M1A Standard",
      "M1A Loaded",
      "M1A National Match",
      "M1A Scout Squad (18\")",
      "SOCOM 16 (16.25\")"
    ],
    "calibers": [
      "7.62x51mm NATO",
      ".308 Winchester"
    ],
    "key_tasks": [
      "Gas Cylinder Unitizing (Screw-and-Glue / Welding)",
      "Castle Nut Pliers & Set Screw Service",
      "Spindle Valve Alignment (Off vs On)",
      "Stock Ferrule Clearance Check",
      "Op-Rod Guide Staking"
    ],
    "specs": {
      "gas_system_design": "Tappet expansion-cutoff short-stroke gas piston (White expansion gas system)",
      "unitizing_gas_cylinder": "Front band and gas cylinder locked together permanently (screw-and-glue or TIG weld) so front band does not shift on barrel under heat",
      "stock_ferrule_clearance": "Front handguard ferrule must rest on lower stock ferrule lip with downward tension (approx 3\u20135 lbs draw tension)",
      "spindle_valve": "Rotatable gas valve for rifle grenades; slot MUST align parallel with barrel for semi-auto cycling"
    },
    "stoppages": [
      {
        "position": "Stoppage 1: Rifle Becomes Single Shot (Bolt Stays Closed After Firing)",
        "short_desc": "Rifle fires with full power, but bolt remains locked forward; no gas reaches operating piston",
        "causes": [
          "Spindle valve on gas cylinder accidentally rotated 90\u00b0 into grenade-launching closed position."
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
        "url": "https://www.youtube.com/watch?v=m8M1Ax9M2wQ",
        "embed_url": "https://www.youtube-nocookie.com/embed/m8M1Ax9M2wQ",
        "summary": "Complete walk-through of the M1A: gas piston cleaning without removing cylinder, gas cylinder unitizing, bolt roller greasing, and stock draw pressure."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Springfield_M1A_M14.pdf",
        "title": "Armorer Technical Manual Springfield M1A M14",
        "filename": "Armorer_Technical_Manual_Springfield_M1A_M14.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Springfield_M1A_M14/manuals/Armorer_Technical_Manual_Springfield_M1A_M14.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Springfield_M1A_M14/manuals/Armorer_Technical_Manual_Springfield_M1A_M14.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Springfield_M1A_M14/manuals/Armorer_Technical_Manual_Springfield_M1A_M14.pdf",
        "local_url": "/api/manuals/Springfield_M1A_M14/Armorer_Technical_Manual_Springfield_M1A_M14.pdf"
      }
    ],
    "schematics": []
  },
  "SKS_45_Carbine": {
    "id": "SKS_45_Carbine",
    "name": "SKS 45 Carbine",
    "subtitle": "Simonov 7.62x39mm Semi-Automatic Carbine (Soviet, Chinese Type 56, Yugo M59/66)",
    "manufacturer": "Tula / Izhevsk / Factory 26 / Zastava",
    "category": "Rifles & Carbines",
    "action_type": "Short-Stroke Gas Piston Tilting Bolt Semi-Auto",
    "operating_actions": [
      "Short-Stroke Piston",
      "Tilting Bolt",
      "Fixed 10-Round Mag"
    ],
    "types": [
      "Rifles & Carbines",
      "Military Surplus",
      "Historic Military"
    ],
    "caliber_categories": [
      "7.62x39mm"
    ],
    "era": "Early Cold War (1945\u20131959+)",
    "models": [
      "Soviet SKS-45",
      "Chinese Type 56",
      "Yugoslavian M59/66 (Grenade Spigot)",
      "Romanian / East German SKS"
    ],
    "calibers": [
      "7.62x39mm Soviet"
    ],
    "key_tasks": [
      "Free-Floating Firing Pin Slam-Fire Check",
      "Spring-Loaded Firing Pin Upgrade (Murray's)",
      "Gas Tube Piston Cleanout",
      "Yugo Gas Valve Leak Remediation",
      "Trigger Group Disassembly"
    ],
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
        "url": "https://www.youtube.com/watch?v=s8SKSx9M2wQ",
        "embed_url": "https://www.youtube-nocookie.com/embed/s8SKSx9M2wQ",
        "summary": "Complete teardown of the SKS rifle: removing the trigger group, stripping the bolt, cleaning the gas tube and piston, and fixing slam-fire hazards."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_SKS_45_Carbine.pdf",
        "title": "Armorer Technical Manual SKS 45 Carbine",
        "filename": "Armorer_Technical_Manual_SKS_45_Carbine.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/SKS_45_Carbine/manuals/Armorer_Technical_Manual_SKS_45_Carbine.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/SKS_45_Carbine/manuals/Armorer_Technical_Manual_SKS_45_Carbine.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/SKS_45_Carbine/manuals/Armorer_Technical_Manual_SKS_45_Carbine.pdf",
        "local_url": "/api/manuals/SKS_45_Carbine/Armorer_Technical_Manual_SKS_45_Carbine.pdf"
      }
    ],
    "schematics": []
  },
  "Remington_700_Rifles": {
    "id": "Remington_700_Rifles",
    "name": "Remington Model 700 Rifles",
    "subtitle": "The World's Benchrest & Tactical Standard (.308 Win, .30-06, 6.5 Creedmoor, .223)",
    "manufacturer": "Remington Arms / RemArms",
    "category": "Rifles & Carbines",
    "action_type": "Push-Feed 2-Lug Bolt Action",
    "operating_actions": [
      "Bolt Action",
      "Push Feed",
      "Three Rings of Steel"
    ],
    "types": [
      "Rifles & Carbines",
      "Precision Sniper Rifle",
      "Hunting Rifle"
    ],
    "caliber_categories": [
      ".308 Winchester",
      ".30-06 Springfield",
      "6.5 Creedmoor",
      ".223 Remington"
    ],
    "era": "Modern Precision Standard (1962\u2013Present)",
    "models": [
      "Model 700 BDL (Deluxe)",
      "Model 700 SPS (Synthetic)",
      "Model 700 Police (PSS / 5R)",
      "M24 SWS (US Army)",
      "M40A1\u2013A6 (USMC)"
    ],
    "calibers": [
      ".308 Winchester",
      ".30-06 Springfield",
      "6.5 Creedmoor",
      ".300 Win Mag",
      ".223 Remington"
    ],
    "key_tasks": [
      "Action Screw Torque (Front 55\u201365 in-lbs, Rear 45 in-lbs)",
      "Bolt Shroud Disassembly (Shoelace / Tool Method)",
      "Recoil Lug Alignment Jig Setup",
      "Pillar & Glass Bedding Action",
      "Timney / TriggerTech Trigger Upgrade"
    ],
    "specs": {
      "three_rings_of_steel": "Remington safety design: Recessed bolt face enclosed by barrel counterbore, enclosed by thick front receiver ring",
      "action_screws_torque": "Front action screw: 55 to 65 in-lbs (into front receiver ring); Rear action screw: 45 in-lbs (do NOT overtighten rear to prevent binding rear tang)",
      "extractor_design": "Riveted circular spring-steel C-clip snapped into groove inside bolt face recess",
      "barrel_threads": "1-1/16\" x 16 TPI (Threads Per Inch) with 60\u00b0 V-thread profile",
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
        "url": "https://www.youtube.com/watch?v=r8M700x9B2w",
        "embed_url": "https://www.youtube-nocookie.com/embed/r8M700x9B2w",
        "summary": "Step-by-step teardown of the Remington 700 bolt using the coin or shoelace method, checking firing pin protrusion, and cleaning the firing pin spring."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Remington_700_Rifles.pdf",
        "title": "Armorer Technical Manual Remington 700 Rifles",
        "filename": "Armorer_Technical_Manual_Remington_700_Rifles.pdf",
        "size_mb": 0.01,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Remington_700_Rifles/manuals/Armorer_Technical_Manual_Remington_700_Rifles.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Remington_700_Rifles/manuals/Armorer_Technical_Manual_Remington_700_Rifles.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Remington_700_Rifles/manuals/Armorer_Technical_Manual_Remington_700_Rifles.pdf",
        "local_url": "/api/manuals/Remington_700_Rifles/Armorer_Technical_Manual_Remington_700_Rifles.pdf"
      }
    ],
    "schematics": []
  },
  "Winchester_Model_70": {
    "id": "Winchester_Model_70",
    "name": "Winchester Model 70",
    "subtitle": "'The Rifleman's Rifle' (Pre-64 & Classic Controlled Round Feed .30-06 / .270)",
    "manufacturer": "Winchester Repeating Arms",
    "category": "Rifles & Carbines",
    "action_type": "Controlled Round Feed (CRF) Mauser-Pattern Bolt Action",
    "operating_actions": [
      "Controlled Round Feed",
      "Mauser Claw Extractor",
      "3-Position Wing Safety"
    ],
    "types": [
      "Rifles & Carbines",
      "Dangerous Game Hunting",
      "American Classic"
    ],
    "caliber_categories": [
      ".30-06 Springfield",
      ".270 Winchester",
      ".300 Win Mag",
      ".375 H&H"
    ],
    "era": "American Hunting Benchmark (1936\u2013Present)",
    "models": [
      "Pre-64 Model 70 (Collector Gold Standard)",
      "Classic Super Grade",
      "Extreme Weather SS",
      "Featherweight"
    ],
    "calibers": [
      ".30-06 Springfield",
      ".270 Winchester",
      ".308 Win",
      ".375 H&H Magnum"
    ],
    "key_tasks": [
      "Mauser Non-Rotating Claw Extractor Tuning",
      "Coned Breech Headspacing",
      "3-Position Wing Safety Shroud Timing",
      "Pre-64 Trigger Stoning",
      "Glass Bedding Flat-Bottom Receiver"
    ],
    "specs": {
      "controlled_round_feed": "Massive non-rotating spring-steel claw extractor captures cartridge rim as it rises from magazine feed lips, guiding it into chamber",
      "3_position_safety": "Position 1 (Rear): Safe & bolt locked; Position 2 (Mid): Safe & bolt can be opened to unload; Position 3 (Forward): Fire",
      "coned_breech": "Breech face of barrel is chamfered at 45\u00b0 to match bolt head cone, ensuring bullet tip glides into chamber even if rifle is upside down",
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
        "action": "Immediate Action: Press round into magazine well and feed forward from magazine. Gunsmith Action: Bevel the front entry face of the claw extractor at 45\u00b0 with fine stone to allow emergency push-feed snap-over without breaking."
      }
    ],
    "videos": [
      {
        "id": "w8Win70x9M2w",
        "title": "Winchester Model 70 Pre-64 Action & 3-Position Safety",
        "creator": "Mark Novak / Anvil Gunsmithing",
        "category": "Classic Gunsmithing",
        "url": "https://www.youtube.com/watch?v=w8Win70x9M2w",
        "embed_url": "https://www.youtube-nocookie.com/embed/w8Win70x9M2w",
        "summary": "Masterclass on the Model 70 action: coned breech geometry, claw extractor tension, timing the 3-position safety sleeve, and trigger stoning."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Winchester_Model_70.pdf",
        "title": "Armorer Technical Manual Winchester Model 70",
        "filename": "Armorer_Technical_Manual_Winchester_Model_70.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Winchester_Model_70/manuals/Armorer_Technical_Manual_Winchester_Model_70.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Winchester_Model_70/manuals/Armorer_Technical_Manual_Winchester_Model_70.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Winchester_Model_70/manuals/Armorer_Technical_Manual_Winchester_Model_70.pdf",
        "local_url": "/api/manuals/Winchester_Model_70/Armorer_Technical_Manual_Winchester_Model_70.pdf"
      }
    ],
    "schematics": []
  },
  "Tikka_T3_Rifles": {
    "id": "Tikka_T3_Rifles",
    "name": "Tikka T3 & T3x Bolt Action Rifles",
    "subtitle": "Finnish Sub-MOA Precision Hunting & Target Rifles (6.5 CM, .308 Win, .223)",
    "manufacturer": "Tikka (Sako Finland)",
    "category": "Rifles & Carbines",
    "action_type": "70\u00b0 Throw Push-Feed Precision Bolt Action",
    "operating_actions": [
      "Bolt Action",
      "70-Degree Bolt Lift",
      "Cold Hammer Forged"
    ],
    "types": [
      "Rifles & Carbines",
      "Precision Hunting",
      "Target Match"
    ],
    "caliber_categories": [
      "6.5 Creedmoor",
      ".308 Winchester",
      ".270 Winchester",
      ".223 Remington"
    ],
    "era": "Modern European Precision (2003\u2013Present)",
    "models": [
      "T3x Lite",
      "T3x CTR (Compact Tactical Rifle)",
      "T3x Superlite",
      "T3x TAC A1 (Chassis)"
    ],
    "calibers": [
      "6.5 Creedmoor",
      ".308 Winchester",
      ".30-06",
      ".223 Rem",
      ".300 Win Mag"
    ],
    "key_tasks": [
      "Steel Recoil Lug Bedding Upgrade",
      "Single-Stage Trigger Set Screw Tuning (2\u20134 lbs)",
      "Bolt Shroud Replacement (Aluminum)",
      "Metric Barrel Threading (M17x1)",
      "Magazine Latch Adjustment"
    ],
    "specs": {
      "sub_moa_guarantee": "Factory 1-MOA 3-shot or 5-shot accuracy guarantee using match factory ammunition",
      "bolt_lift": "Fast 70\u00b0 bolt throw (providing generous clearance for large high-magnification ocular optics bells)",
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
        "url": "https://www.youtube.com/watch?v=t8T3xx9M2wQ",
        "embed_url": "https://www.youtube-nocookie.com/embed/t8T3xx9M2wQ",
        "summary": "Teardown of the Tikka T3x: adjusting the trigger pull weight with an allen wrench, replacing the bolt shroud, and installing a steel recoil lug."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Tikka_T3_Rifles.pdf",
        "title": "Armorer Technical Manual Tikka T3 Rifles",
        "filename": "Armorer_Technical_Manual_Tikka_T3_Rifles.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Tikka_T3_Rifles/manuals/Armorer_Technical_Manual_Tikka_T3_Rifles.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Tikka_T3_Rifles/manuals/Armorer_Technical_Manual_Tikka_T3_Rifles.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Tikka_T3_Rifles/manuals/Armorer_Technical_Manual_Tikka_T3_Rifles.pdf",
        "local_url": "/api/manuals/Tikka_T3_Rifles/Armorer_Technical_Manual_Tikka_T3_Rifles.pdf"
      }
    ],
    "schematics": []
  },
  "Savage_110_Axis": {
    "id": "Savage_110_Axis",
    "name": "Savage Model 110 & Axis Series",
    "subtitle": "Barrel Nut Headspace System & AccuTrigger (.308 Win, 6.5 CM, .223, .30-06)",
    "manufacturer": "Savage Arms",
    "category": "Rifles & Carbines",
    "action_type": "Floating Bolt Head Push-Feed Bolt Action",
    "operating_actions": [
      "Floating Bolt Head",
      "Barrel Lock Nut System",
      "AccuTrigger Blade"
    ],
    "types": [
      "Rifles & Carbines",
      "Precision Hunting",
      "DIY Custom Bench"
    ],
    "caliber_categories": [
      ".308 Winchester",
      "6.5 Creedmoor",
      ".30-06",
      ".223 Remington"
    ],
    "era": "American Mass Precision Benchmark (1958\u2013Present)",
    "models": [
      "Model 110 Apex",
      "Model 110 Tactical",
      "110 Ultralite",
      "Savage Axis II",
      "Model 10 / 12 Varmint"
    ],
    "calibers": [
      ".308 Winchester",
      "6.5 Creedmoor",
      ".30-06",
      ".223 Remington",
      ".300 Win Mag"
    ],
    "key_tasks": [
      "Barrel Lock Nut Headspacing (Go-Gauge & Savage Wrench)",
      "Floating Bolt Head Interchangeability",
      "AccuTrigger Return Spring Adjustment (1.5\u20134.5 lbs)",
      "AccuStock Aluminum Rail Bedding",
      "Bolt Lift Kit Installation"
    ],
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
        "url": "https://www.youtube.com/watch?v=s8Sav110x9M2w",
        "embed_url": "https://www.youtube-nocookie.com/embed/s8Sav110x9M2w",
        "summary": "Full demonstration of using a barrel nut wrench, Clymer GO/NO-GO gauges, swapping bolt heads from .223 to .308, and tuning the AccuTrigger."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Savage_110_Axis.pdf",
        "title": "Armorer Technical Manual Savage 110 Axis",
        "filename": "Armorer_Technical_Manual_Savage_110_Axis.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Savage_110_Axis/manuals/Armorer_Technical_Manual_Savage_110_Axis.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Savage_110_Axis/manuals/Armorer_Technical_Manual_Savage_110_Axis.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Savage_110_Axis/manuals/Armorer_Technical_Manual_Savage_110_Axis.pdf",
        "local_url": "/api/manuals/Savage_110_Axis/Armorer_Technical_Manual_Savage_110_Axis.pdf"
      }
    ],
    "schematics": []
  },
  "Ruger_American_Rifles": {
    "id": "Ruger_American_Rifles",
    "name": "Ruger American Rifle Series",
    "subtitle": "Power Bedding V-Block Precision Hunting Rifles (.308 Win, 6.5 CM, .223, 300 BLK)",
    "manufacturer": "Ruger",
    "category": "Rifles & Carbines",
    "action_type": "70\u00b0 3-Lug Full-Diameter Bolt Action",
    "operating_actions": [
      "3-Lug Full-Diameter Bolt",
      "Power Bedding V-Blocks",
      "Marksman Trigger"
    ],
    "types": [
      "Rifles & Carbines",
      "Affordable Precision",
      "Hunting Rifle"
    ],
    "caliber_categories": [
      ".308 Winchester",
      "6.5 Creedmoor",
      "5.56x45mm / .223",
      "300 AAC Blackout"
    ],
    "era": "Modern CNC Benchmark (2012\u2013Present)",
    "models": [
      "Ruger American Standard",
      "Ruger American Predator (Threaded)",
      "Ruger American Ranch (AR Mag Compatible)",
      "Generation II"
    ],
    "calibers": [
      ".308 Winchester",
      "6.5 Creedmoor",
      "5.56x45mm",
      "300 AAC Blackout",
      "7.62x39mm",
      "6.5 Grendel"
    ],
    "key_tasks": [
      "Power Bedding V-Block Wedge Torque (60\u201365 in-lbs)",
      "Marksman Trigger Adjustment (3\u20135 lbs)",
      "Dual Cocking Cam Lubrication",
      "AR-15 Magazine Well Conversion",
      "Barrel Nut Takedown"
    ],
    "specs": {
      "power_bedding": "Patented stainless steel V-blocks molded into polymer stock positively locate receiver against recoil",
      "action_screws_torque": "60 to 65 in-lbs front and rear screws; torque must be applied evenly to draw receiver into V-blocks",
      "bolt_design": "One-piece full diameter three-lug bolt with 70\u00b0 throw and dual cocking cams for smooth opening",
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
        "url": "https://www.youtube.com/watch?v=r8AmRifx9M2w",
        "embed_url": "https://www.youtube-nocookie.com/embed/r8AmRifx9M2w",
        "summary": "Teardown of the Ruger American rifle, torque specs for Power Bedding V-blocks, adjusting the Marksman trigger, and bolt service."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Ruger_American_Rifles.pdf",
        "title": "Armorer Technical Manual Ruger American Rifles",
        "filename": "Armorer_Technical_Manual_Ruger_American_Rifles.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Ruger_American_Rifles/manuals/Armorer_Technical_Manual_Ruger_American_Rifles.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Ruger_American_Rifles/manuals/Armorer_Technical_Manual_Ruger_American_Rifles.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Ruger_American_Rifles/manuals/Armorer_Technical_Manual_Ruger_American_Rifles.pdf",
        "local_url": "/api/manuals/Ruger_American_Rifles/Armorer_Technical_Manual_Ruger_American_Rifles.pdf"
      }
    ],
    "schematics": []
  },
  "Winchester_Model_1894": {
    "id": "Winchester_Model_1894",
    "name": "Winchester Model 1894",
    "subtitle": "The Premier American Deer Rifle (.30-30 Winchester & .32 Win Special)",
    "manufacturer": "Winchester Repeating Arms / USRAC",
    "category": "Rifles & Carbines",
    "action_type": "Lever-Action Tubular Magazine Repeating Rifle",
    "operating_actions": [
      "Lever Action",
      "Locking Bolt Cam",
      "Tubular Magazine"
    ],
    "types": [
      "Rifles & Carbines",
      "American Classic Hunting",
      "Western Heritage"
    ],
    "caliber_categories": [
      ".30-30 Winchester",
      ".32 Winchester Special",
      ".38-55 WCF"
    ],
    "era": "American Deer Hunting Legend (1894\u2013Present)",
    "models": [
      "Model 94 Carbine (20\")",
      "Model 94 Trapper (16\")",
      "Model 94 Sporter (24\")",
      "Model 94 Big Bore (.375 Win)"
    ],
    "calibers": [
      ".30-30 Winchester",
      ".32 Win Special",
      ".38-55 Winchester"
    ],
    "key_tasks": [
      "Cartridge Stop & Carrier Timing",
      "Vertical Locking Bolt Upward Slide Engagement",
      "Loading Gate Spring Tension Adjustment",
      "Link Pin & Finger Lever Stoning",
      "Top-Eject vs Angle-Eject Disassembly"
    ],
    "specs": {
      "locking_system": "Vertical sliding steel locking bolt rises up behind the breech bolt, completely supporting chamber pressure",
      "cartridge_stop": "Spring-loaded stop on bottom of carrier prevents second round from escaping tubular magazine into action",
      "angle_eject_change": "1982 redesign altered ejection angle to 45\u00b0 to allow low-profile scope mounting over bore center",
      "ammunition_safety": "FLAT POINT OR SOFT POINT BULLETS ONLY: Pointed spitzer bullets in tubular magazines can detonate primer of round ahead under recoil"
    },
    "stoppages": [
      {
        "position": "Stoppage 1: Double Feed from Magazine Tube (Round Under Carrier)",
        "short_desc": "Opening lever releases one round onto carrier, but a second round slips halfway out of tube beneath carrier, jamming lever solid",
        "causes": [
          "Worn or chipped cartridge stop lug on front of carrier.",
          "Loose carrier screw on left receiver wall.",
          "Weak or broken carrier spring."
        ],
        "action": "Immediate Action: DO NOT force lever. Use brass probe to push protruding cartridge back into magazine tube while slightly lifting lever. Gunsmith Action: Remove carrier. Inspect cartridge stop shelf. Square worn face with needle file or install new carrier. Tighten carrier screw with blue Loctite."
      }
    ],
    "videos": [
      {
        "id": "w8Win94x9M2w",
        "title": "Winchester Model 94 Complete Disassembly, Cleaning & Assembly",
        "creator": "Mark Novak / Anvil Gunsmithing",
        "category": "Classic Lever Gunsmithing",
        "url": "https://www.youtube.com/watch?v=w8Win94x9M2w",
        "embed_url": "https://www.youtube-nocookie.com/embed/w8Win94x9M2w",
        "summary": "Teardown of the Winchester 94 action: link pin, locking bolt, loading gate spring, hammer assembly, and timing the carrier."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Winchester_Model_1894.pdf",
        "title": "Armorer Technical Manual Winchester Model 1894",
        "filename": "Armorer_Technical_Manual_Winchester_Model_1894.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Winchester_Model_1894/manuals/Armorer_Technical_Manual_Winchester_Model_1894.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Winchester_Model_1894/manuals/Armorer_Technical_Manual_Winchester_Model_1894.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Winchester_Model_1894/manuals/Armorer_Technical_Manual_Winchester_Model_1894.pdf",
        "local_url": "/api/manuals/Winchester_Model_1894/Armorer_Technical_Manual_Winchester_Model_1894.pdf"
      }
    ],
    "schematics": []
  },
  "Marlin_336_1895": {
    "id": "Marlin_336_1895",
    "name": "Marlin Model 336 & 1895 Series",
    "subtitle": "Solid Top-Receiver Side-Eject Lever Action (.30-30 Win & .45-70 Government)",
    "manufacturer": "Marlin Firearms / Ruger-Marlin",
    "category": "Rifles & Carbines",
    "action_type": "Lever-Action Side-Ejecting Repeating Rifle",
    "operating_actions": [
      "Lever Action",
      "Solid-Top Side Eject",
      "Flat-Top Scope Ready"
    ],
    "types": [
      "Rifles & Carbines",
      "Big Game Hunting",
      "Guide Gun"
    ],
    "caliber_categories": [
      ".30-30 Winchester",
      ".45-70 Government",
      ".35 Remington"
    ],
    "era": "Modern Lever Standard (1948\u2013Present)",
    "models": [
      "Model 336 (.30-30 Win)",
      "Model 1895 Guide Gun (.45-70 Govt)",
      "Model 1894 (.357 Mag / .44 Mag)",
      "Model 336 Dark Series"
    ],
    "calibers": [
      ".30-30 Winchester",
      ".45-70 Government",
      ".35 Remington",
      ".444 Marlin"
    ],
    "key_tasks": [
      "'Marlin Jam' Carrier Snail Cam Stoning & Radius",
      "Two-Piece Firing Pin Interlock Service",
      "Crossbolt Safety O-Ring Replacement",
      "Flat-Top Receiver Scope Torquing",
      "Finger Lever Plunger Tension Tuning"
    ],
    "specs": {
      "solid_top_receiver": "One-piece steel receiver with solid top strap and side ejection port, inherently rigid for optic mounting",
      "marlin_jam_prevention": "Bottom edge of lever cam must be radiused and polished to prevent gouging a sharp notch into the carrier cam surface",
      "two_piece_firing_pin": "Rear firing pin segment drops out of alignment until lever is closed and locking bolt pushes it straight into battery",
      "crossbolt_safety": "Transverse hammer-blocking crossbolt safety with captive rubber O-ring detent"
    },
    "stoppages": [
      {
        "position": "Stoppage 1: The Infamous 'Marlin Jam' (Lever Frozen at Mid-Stroke)",
        "short_desc": "Cycling lever forward causes carrier to fail to lift; lever binds with heavy mechanical resistance",
        "causes": [
          "Sharp lower cam on finger lever has battered and gouged a groove into the carrier cam snail.",
          "Carrier drops into the groove and gets trapped, preventing lever from completing stroke."
        ],
        "action": "Gunsmith Action: MARLIN JAM CURE: Remove lever and carrier. Hand-stone the notch out of the carrier snail surface flat with India stone. Round and mirror-polish the sharp tip of the finger lever cam so it glides across the carrier smoothly rather than gouging."
      }
    ],
    "videos": [
      {
        "id": "m8Mar336x9M2w",
        "title": "Fixing the Marlin Jam & Complete Model 336 / 1895 Disassembly",
        "creator": "Brownells Gunsmithing Bench",
        "category": "Lever Action Repair",
        "url": "https://www.youtube.com/watch?v=m8Mar336x9M2w",
        "embed_url": "https://www.youtube-nocookie.com/embed/m8Mar336x9M2w",
        "summary": "Step-by-step disassembly of the Marlin 336/1895, diagnosing and fixing the carrier jam, two-piece firing pin service, and trigger stoning."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Marlin_336_1895.pdf",
        "title": "Armorer Technical Manual Marlin 336 1895",
        "filename": "Armorer_Technical_Manual_Marlin_336_1895.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Marlin_336_1895/manuals/Armorer_Technical_Manual_Marlin_336_1895.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Marlin_336_1895/manuals/Armorer_Technical_Manual_Marlin_336_1895.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Marlin_336_1895/manuals/Armorer_Technical_Manual_Marlin_336_1895.pdf",
        "local_url": "/api/manuals/Marlin_336_1895/Armorer_Technical_Manual_Marlin_336_1895.pdf"
      }
    ],
    "schematics": []
  },
  "Henry_Lever_Action": {
    "id": "Henry_Lever_Action",
    "name": "Henry Classic & Big Boy Lever Action",
    "subtitle": "American-Made Tubular & Side-Gate Lever Rifles (.357 Mag, .44 Mag, .45 Colt, .22 LR)",
    "manufacturer": "Henry Repeating Arms",
    "category": "Rifles & Carbines",
    "action_type": "Lever-Action Transfer Bar Repeating Rifle",
    "operating_actions": [
      "Lever Action",
      "Transfer Bar Safety",
      "Side-Gate & Tube Feed"
    ],
    "types": [
      "Rifles & Carbines",
      "American Craftsmanship",
      "Cowboy Action"
    ],
    "caliber_categories": [
      ".357 Magnum",
      ".44 Magnum",
      ".45 Colt",
      ".22 LR",
      ".30-30 Win"
    ],
    "era": "Modern American Tradition (1996\u2013Present)",
    "models": [
      "Henry Big Boy Brass",
      "Big Boy Steel Side Gate",
      "Golden Boy .22 LR",
      "Henry All-Weather"
    ],
    "calibers": [
      ".357 Magnum",
      ".44 Magnum",
      ".45 Colt",
      ".22 LR",
      ".30-30 Winchester"
    ],
    "key_tasks": [
      "Transfer Bar Alignment & Safety Check",
      "Dual Loading System (Side-Gate & Magazine Tube)",
      "Receiver Cover Disassembly (Golden Boy)",
      "Lever Latch Spring Adjustment",
      "Ejector Spring Inspection"
    ],
    "specs": {
      "dual_loading_system": "Modern Big Boy models feature BOTH a receiver side-loading gate AND a removable inner brass tube for rapid unloading",
      "safety_system": "Internal transfer bar mechanism (no unsightly crossbolt safety or hammer half-cock required)",
      "golden_boy_construction": "Die-cast alloy receiver with polished brasslite cover sleeve; barrel threaded into inner steel receiver core",
      "smooth_action": "Factory hand-polished rack-and-pinion / lever linkage renowned for glass-smooth out-of-the-box cycling"
    },
    "stoppages": [
      {
        "position": "Stoppage 1: Side Loading Gate Stiff / Pinching Cartridge Rim",
        "short_desc": "Cartridges difficult to push into side gate; loading gate leaf spring snaps back aggressively on thumb",
        "causes": [
          "Factory loading gate spring temper has heavy initial preload.",
          "Gate opening edge has sharp stamped burr."
        ],
        "action": "Gunsmith Action: Disassemble receiver. Remove loading gate screw. Lightly polish the inside ramp of the gate window with 800-grit paper. Hand-stone the spring leaf thickness slightly (0.002\"\u20130.003\") to reduce insertion effort while maintaining positive gate closure."
      }
    ],
    "videos": [
      {
        "id": "h8HenBBx9M2w",
        "title": "Henry Big Boy Complete Disassembly, Cleaning & Action Tuning",
        "creator": "MidwayUSA / Larry Potterfield",
        "category": "Bench Disassembly",
        "url": "https://www.youtube.com/watch?v=h8HenBBx9M2w",
        "embed_url": "https://www.youtube-nocookie.com/embed/h8HenBBx9M2w",
        "summary": "Teardown of the Henry Big Boy action: removing the bolt, extractor, transfer bar safety, and side-loading gate mechanism."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Henry_Lever_Action.pdf",
        "title": "Armorer Technical Manual Henry Lever Action",
        "filename": "Armorer_Technical_Manual_Henry_Lever_Action.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Henry_Lever_Action/manuals/Armorer_Technical_Manual_Henry_Lever_Action.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Henry_Lever_Action/manuals/Armorer_Technical_Manual_Henry_Lever_Action.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Henry_Lever_Action/manuals/Armorer_Technical_Manual_Henry_Lever_Action.pdf",
        "local_url": "/api/manuals/Henry_Lever_Action/Armorer_Technical_Manual_Henry_Lever_Action.pdf"
      }
    ],
    "schematics": []
  },
  "Remington_870_Shotgun": {
    "id": "Remington_870_Shotgun",
    "name": "Remington Model 870 Shotguns",
    "subtitle": "The World's Most Produced Pump Shotgun (12 Gauge & 20 Gauge Wingmaster / Express)",
    "manufacturer": "Remington Arms / RemArms",
    "category": "Shotguns",
    "action_type": "Slide-Action / Pump-Action Repeating Shotgun",
    "operating_actions": [
      "Pump-Action",
      "Dual Action Bars",
      "Solid Steel Billet Receiver"
    ],
    "types": [
      "Shotguns",
      "Home Defense",
      "Hunting & Law Enforcement"
    ],
    "caliber_categories": [
      "12 Gauge",
      "20 Gauge"
    ],
    "era": "American Pump Standard (1950\u2013Present)",
    "models": [
      "Model 870 Wingmaster (Polished Blue)",
      "Model 870 Express",
      "Model 870 Police Magnum",
      "Model 870 Tactical"
    ],
    "calibers": [
      "12 Gauge (2-3/4\" & 3\" Mag)",
      "20 Gauge"
    ],
    "key_tasks": [
      "Shell Latch Staking (Dedicated 870 Staking Tool)",
      "Flex-Tab Anti-Jam Conversion Inspection",
      "Ejector Spring Riveting Replacement",
      "Dual Action Bar Timing & Truing",
      "Magazine Tube Dimple Swaging / Drilling"
    ],
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
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Remington_870_Shotgun.pdf",
        "title": "Armorer Technical Manual Remington 870 Shotgun",
        "filename": "Armorer_Technical_Manual_Remington_870_Shotgun.pdf",
        "size_mb": 0.01,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Remington_870_Shotgun/manuals/Armorer_Technical_Manual_Remington_870_Shotgun.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Remington_870_Shotgun/manuals/Armorer_Technical_Manual_Remington_870_Shotgun.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Remington_870_Shotgun/manuals/Armorer_Technical_Manual_Remington_870_Shotgun.pdf",
        "local_url": "/api/manuals/Remington_870_Shotgun/Armorer_Technical_Manual_Remington_870_Shotgun.pdf"
      }
    ],
    "schematics": []
  },
  "Mossberg_500_590_Shotgun": {
    "id": "Mossberg_500_590_Shotgun",
    "name": "Mossberg 500 & 590 / 590A1 Series",
    "subtitle": "US Military Spec-D Pump Shotgun (12 Gauge & 20 Gauge)",
    "manufacturer": "O.F. Mossberg & Sons",
    "category": "Shotguns",
    "action_type": "Pump-Action Repeating Shotgun with Top Tang Safety",
    "operating_actions": [
      "Pump-Action",
      "Ambidextrous Top Tang Safety",
      "Mil-Spec 3443G"
    ],
    "types": [
      "Shotguns",
      "Military & Police",
      "Home Defense"
    ],
    "caliber_categories": [
      "12 Gauge",
      "20 Gauge"
    ],
    "era": "Military & Tactical Benchmark (1960\u2013Present)",
    "models": [
      "Mossberg 500 Field",
      "Mossberg 590 Tactical",
      "Mossberg 590A1 (Heavy Barrel & Metal Trigger Group)",
      "Shockwave (14\")"
    ],
    "calibers": [
      "12 Gauge (3\" Chamber)",
      "20 Gauge",
      ".410 Bore"
    ],
    "key_tasks": [
      "Top Tang Safety Slide & Detent Ball Replacement",
      "Dual Cartridge Stop & Interrupter Timing",
      "Cleanout Magazine Tube Cap Service (590)",
      "Metal Trigger Housing Upgrade",
      "Elevator Assembly Alignment"
    ],
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
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Mossberg_500_590_Shotgun.pdf",
        "title": "Armorer Technical Manual Mossberg 500 590 Shotgun",
        "filename": "Armorer_Technical_Manual_Mossberg_500_590_Shotgun.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Mossberg_500_590_Shotgun/manuals/Armorer_Technical_Manual_Mossberg_500_590_Shotgun.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Mossberg_500_590_Shotgun/manuals/Armorer_Technical_Manual_Mossberg_500_590_Shotgun.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Mossberg_500_590_Shotgun/manuals/Armorer_Technical_Manual_Mossberg_500_590_Shotgun.pdf",
        "local_url": "/api/manuals/Mossberg_500_590_Shotgun/Armorer_Technical_Manual_Mossberg_500_590_Shotgun.pdf"
      }
    ],
    "schematics": []
  },
  "Benelli_M4_Shotgun": {
    "id": "Benelli_M4_Shotgun",
    "name": "Benelli M4 / M1014 Combat Shotgun",
    "subtitle": "US Marine Corps Joint Service Combat Shotgun (12 Gauge ARGO System)",
    "manufacturer": "Benelli Armi / Beretta Holding",
    "category": "Shotguns",
    "action_type": "Auto-Regulating Gas-Operated (ARGO) Semi-Automatic",
    "operating_actions": [
      "Dual Piston ARGO Gas System",
      "Rotating Bolt Head",
      "Self-Cleaning"
    ],
    "types": [
      "Shotguns",
      "Combat Shotgun",
      "Military Special Operations"
    ],
    "caliber_categories": [
      "12 Gauge"
    ],
    "era": "Modern Combat Benchmark (1999\u2013Present)",
    "models": [
      "Benelli M4 Tactical (18.5\")",
      "M1014 USMC Joint Service Shotgun",
      "M4 Entry (14\")"
    ],
    "calibers": [
      "12 Gauge (2-3/4\" & 3\" Magnum)"
    ],
    "key_tasks": [
      "Dual Stainless Gas Piston Carbon Scrape",
      "Rotating Bolt Locking Lug Inspection",
      "Collapsible Stock 3-Position Recoil Tube Upgrade",
      "Carrier Dog Leg Spring Tuning",
      "Full-Length 7-Round Tube Installation"
    ],
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
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Benelli_M4_Shotgun.pdf",
        "title": "Armorer Technical Manual Benelli M4 Shotgun",
        "filename": "Armorer_Technical_Manual_Benelli_M4_Shotgun.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Benelli_M4_Shotgun/manuals/Armorer_Technical_Manual_Benelli_M4_Shotgun.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Benelli_M4_Shotgun/manuals/Armorer_Technical_Manual_Benelli_M4_Shotgun.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Benelli_M4_Shotgun/manuals/Armorer_Technical_Manual_Benelli_M4_Shotgun.pdf",
        "local_url": "/api/manuals/Benelli_M4_Shotgun/Armorer_Technical_Manual_Benelli_M4_Shotgun.pdf"
      }
    ],
    "schematics": []
  },
  "Beretta_A300_1301_Shotgun": {
    "id": "Beretta_A300_1301_Shotgun",
    "name": "Beretta A300 Outlander & 1301 Tactical",
    "subtitle": "B-LINK Gas-Operated Semi-Automatic Shotguns (12 Gauge)",
    "manufacturer": "Beretta",
    "category": "Shotguns",
    "action_type": "B-LINK Gas Piston Semi-Automatic Shotgun",
    "operating_actions": [
      "B-LINK Fast Gas System",
      "Self-Cleaning Scraper Band",
      "Rotating Bolt"
    ],
    "types": [
      "Shotguns",
      "Tactical & Home Defense",
      "Sporting & Waterfowl"
    ],
    "caliber_categories": [
      "12 Gauge"
    ],
    "era": "Modern High-Speed Benchmark (2012\u2013Present)",
    "models": [
      "Beretta 1301 Tactical (Gen 1 / Gen 2)",
      "Beretta A300 Ultima Patrol",
      "Beretta A300 Outlander (Hunting)"
    ],
    "calibers": [
      "12 Gauge (2-3/4\" & 3\" Magnum)"
    ],
    "key_tasks": [
      "B-LINK Gas Piston Elastic Scraper Ring Service",
      "Stock Drop & Cast Shim Set Fitting",
      "Bolt Release Latch Shroud Verification (Gen 1 fix)",
      "Magazine Tube Extension Clamp Torquing",
      "Exhaust Valve Spring Inspection"
    ],
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
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Beretta_A300_1301_Shotgun.pdf",
        "title": "Armorer Technical Manual Beretta A300 1301 Shotgun",
        "filename": "Armorer_Technical_Manual_Beretta_A300_1301_Shotgun.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Beretta_A300_1301_Shotgun/manuals/Armorer_Technical_Manual_Beretta_A300_1301_Shotgun.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Beretta_A300_1301_Shotgun/manuals/Armorer_Technical_Manual_Beretta_A300_1301_Shotgun.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Beretta_A300_1301_Shotgun/manuals/Armorer_Technical_Manual_Beretta_A300_1301_Shotgun.pdf",
        "local_url": "/api/manuals/Beretta_A300_1301_Shotgun/Armorer_Technical_Manual_Beretta_A300_1301_Shotgun.pdf"
      }
    ],
    "schematics": []
  },
  "Browning_Citori_OverUnder": {
    "id": "Browning_Citori_OverUnder",
    "name": "Browning Citori / Superposed Over/Under",
    "subtitle": "Classic Boxlock Over/Under Double-Barrel Shotguns (12 & 20 Gauge)",
    "manufacturer": "Browning / Miroku Japan",
    "category": "Shotguns",
    "action_type": "Break-Action Over/Under Double-Barrel Shotgun",
    "operating_actions": [
      "Break-Action",
      "Boxlock",
      "Inertia Single Selective Trigger"
    ],
    "types": [
      "Shotguns",
      "Clay Target & Skeet",
      "Upland Sporting"
    ],
    "caliber_categories": [
      "12 Gauge",
      "20 Gauge",
      "28 Gauge",
      ".410 Bore"
    ],
    "era": "Fine Sporting Benchmark (1973\u2013Present)",
    "models": [
      "Citori 725",
      "Citori CX / CXS",
      "Superposed Classic (Belgium)",
      "Citori Hunter"
    ],
    "calibers": [
      "12 Gauge",
      "20 Gauge",
      "28 Gauge",
      ".410 Bore"
    ],
    "key_tasks": [
      "Inertia Block Trigger Block Tuning",
      "Automatic Ejector Timing & Hammer Springs",
      "Hinge Pin Wear Shimming (Off-Face Repair)",
      "Top Lever Center Alignment Check",
      "Locking Bolt Bite Hand-Stoning"
    ],
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
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Browning_Citori_OverUnder.pdf",
        "title": "Armorer Technical Manual Browning Citori OverUnder",
        "filename": "Armorer_Technical_Manual_Browning_Citori_OverUnder.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Browning_Citori_OverUnder/manuals/Armorer_Technical_Manual_Browning_Citori_OverUnder.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Browning_Citori_OverUnder/manuals/Armorer_Technical_Manual_Browning_Citori_OverUnder.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Browning_Citori_OverUnder/manuals/Armorer_Technical_Manual_Browning_Citori_OverUnder.pdf",
        "local_url": "/api/manuals/Browning_Citori_OverUnder/Armorer_Technical_Manual_Browning_Citori_OverUnder.pdf"
      }
    ],
    "schematics": []
  },
  "FN_FAL_L1A1": {
    "id": "FN_FAL_L1A1",
    "name": "FN FAL / L1A1 SLR Battle Rifle",
    "subtitle": "'The Right Arm of the Free World' (7.62x51mm NATO Metric & Inch Pattern)",
    "manufacturer": "FN Herstal / Royal Small Arms Factory Enfield / Imbel / DSA",
    "category": "Rifles & Carbines",
    "action_type": "Short-Stroke Gas Piston Tilting-Breechblock Battle Rifle",
    "operating_actions": [
      "Short-Stroke Gas Piston",
      "Tilting Breechblock",
      "Break-Open Receiver"
    ],
    "types": [
      "Rifles & Carbines",
      "Military Battle Rifle",
      "Cold War Classic"
    ],
    "caliber_categories": [
      "7.62x51mm NATO",
      ".308 Winchester"
    ],
    "era": "Cold War Free World Standard (1953\u2013Present)",
    "models": [
      "FAL 50.00 (Standard)",
      "FAL 50.63 (Para Folding Stock)",
      "L1A1 SLR (British Commonwealth Inch)",
      "StG 58 (Austrian)"
    ],
    "calibers": [
      "7.62x51mm NATO",
      ".308 Winchester"
    ],
    "key_tasks": [
      "Locking Shoulder Sizing (Pin Gauge Headspacing)",
      "Gas Regulator Vent Sleeve Calibration (1\u20137 clicks)",
      "Hinge Pin Takedown & Break-Open Action",
      "Tilting Bolt Lug Lapping",
      "Recoil Spring Tube Servicing"
    ],
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
        "action": "Immediate Action: Rotate gas regulator collar clockwise (numbers getting higher) to open vent port and release excess gas until ejection drops to a comfortable 10\u201312 feet."
      }
    ],
    "videos": [
      {
        "id": "f8FNFALx9M2w",
        "title": "FN FAL Complete Armorer Headspace Setting & Locking Shoulder Pin Gauging",
        "creator": "Mark Novak / Anvil Gunsmithing",
        "category": "Battle Rifle Armorer",
        "url": "https://www.youtube.com/watch?v=f8FNFALx9M2w",
        "embed_url": "https://www.youtube-nocookie.com/embed/f8FNFALx9M2w",
        "summary": "Step-by-step masterclass on setting headspace on the FN FAL using Clymer gauges, pin gauge rods, selecting locking shoulders, and tuning the gas collar."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_FN_FAL_L1A1.pdf",
        "title": "Armorer Technical Manual FN FAL L1A1",
        "filename": "Armorer_Technical_Manual_FN_FAL_L1A1.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/FN_FAL_L1A1/manuals/Armorer_Technical_Manual_FN_FAL_L1A1.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/FN_FAL_L1A1/manuals/Armorer_Technical_Manual_FN_FAL_L1A1.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/FN_FAL_L1A1/manuals/Armorer_Technical_Manual_FN_FAL_L1A1.pdf",
        "local_url": "/api/manuals/FN_FAL_L1A1/Armorer_Technical_Manual_FN_FAL_L1A1.pdf"
      }
    ],
    "schematics": []
  },
  "Lewis_Automatic_Machine_Gun": {
    "id": "Lewis_Automatic_Machine_Gun",
    "name": "Lewis Automatic Machine Gun",
    "subtitle": "Model 1914 / 1917 / 1918 (.303 British & .30-06 Springfield)",
    "manufacturer": "Savage Arms / BSA (Birmingham Small Arms)",
    "category": "Machine Guns",
    "action_type": "Gas-Operated Machine Gun (Open Bolt)",
    "operating_actions": [
      "Gas-Operated",
      "Open-Bolt",
      "Rack & Pinion Clock Spring Return"
    ],
    "types": [
      "Machine Guns",
      "Automatic Weapons",
      "Historic Military"
    ],
    "caliber_categories": [
      ".303 British",
      ".30-06 Springfield"
    ],
    "era": "Historic Military (WWI / WWII)",
    "models": [
      "Model 1914 (BSA .303)",
      "Model 1917 (Savage Arms .30-06)",
      "Model 1918 Aircraft (Stripped Radiator)"
    ],
    "calibers": [
      ".303 British (Mk VII)",
      ".30-06 Springfield (US M1917)"
    ],
    "key_tasks": [
      "Return Mainspring Tension Calibration (12\u201314 lbs)",
      "Striker (Firing Pin) Protrusion Check (0.050\"\u20130.060\")",
      "Gas Regulator Cup Rotation ('S' / 'L')",
      "Field Stripping & Rack Timing",
      "47-Round Pan Magazine Servicing"
    ],
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
    ],
    "manuals": [
      {
        "id": "1917_American_Machinist_Manufacture_of_the_Lewis_Machine_Gun.pdf",
        "title": "1917 American Machinist Manufacture of the Lewis Machine Gun",
        "filename": "1917_American_Machinist_Manufacture_of_the_Lewis_Machine_Gun.pdf",
        "size_mb": 9.5,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1917_American_Machinist_Manufacture_of_the_Lewis_Machine_Gun.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Lewis_Automatic_Machine_Gun/manuals/1917_American_Machinist_Manufacture_of_the_Lewis_Machine_Gun.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1917_American_Machinist_Manufacture_of_the_Lewis_Machine_Gun.pdf",
        "local_url": "/api/manuals/Lewis_Automatic_Machine_Gun/1917_American_Machinist_Manufacture_of_the_Lewis_Machine_Gun.pdf"
      },
      {
        "id": "1917_British_Instruction_on_the_Lewis_Automatic_Machine_Gun.pdf",
        "title": "1917 British Instruction on the Lewis Automatic Machine Gun",
        "filename": "1917_British_Instruction_on_the_Lewis_Automatic_Machine_Gun.pdf",
        "size_mb": 4.58,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1917_British_Instruction_on_the_Lewis_Automatic_Machine_Gun.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Lewis_Automatic_Machine_Gun/manuals/1917_British_Instruction_on_the_Lewis_Automatic_Machine_Gun.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1917_British_Instruction_on_the_Lewis_Automatic_Machine_Gun.pdf",
        "local_url": "/api/manuals/Lewis_Automatic_Machine_Gun/1917_British_Instruction_on_the_Lewis_Automatic_Machine_Gun.pdf"
      },
      {
        "id": "1917_Savage_Arms_Lewis_Machine_Gun_Handbook.pdf",
        "title": "1917 Savage Arms Lewis Machine Gun Handbook",
        "filename": "1917_Savage_Arms_Lewis_Machine_Gun_Handbook.pdf",
        "size_mb": 3.09,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1917_Savage_Arms_Lewis_Machine_Gun_Handbook.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Lewis_Automatic_Machine_Gun/manuals/1917_Savage_Arms_Lewis_Machine_Gun_Handbook.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1917_Savage_Arms_Lewis_Machine_Gun_Handbook.pdf",
        "local_url": "/api/manuals/Lewis_Automatic_Machine_Gun/1917_Savage_Arms_Lewis_Machine_Gun_Handbook.pdf"
      },
      {
        "id": "1918_RAF_Instructional_Notes_on_the_Lewis_Gun.pdf",
        "title": "1918 RAF Instructional Notes on the Lewis Gun",
        "filename": "1918_RAF_Instructional_Notes_on_the_Lewis_Gun.pdf",
        "size_mb": 2.98,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1918_RAF_Instructional_Notes_on_the_Lewis_Gun.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Lewis_Automatic_Machine_Gun/manuals/1918_RAF_Instructional_Notes_on_the_Lewis_Gun.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1918_RAF_Instructional_Notes_on_the_Lewis_Gun.pdf",
        "local_url": "/api/manuals/Lewis_Automatic_Machine_Gun/1918_RAF_Instructional_Notes_on_the_Lewis_Gun.pdf"
      },
      {
        "id": "1940_UK_Armourers_Handbook_Part_III_Light_Machine_Guns.pdf",
        "title": "1940 UK Armourers Handbook Part III Light Machine Guns",
        "filename": "1940_UK_Armourers_Handbook_Part_III_Light_Machine_Guns.pdf",
        "size_mb": 53.29,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1940_UK_Armourers_Handbook_Part_III_Light_Machine_Guns.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Lewis_Automatic_Machine_Gun/manuals/1940_UK_Armourers_Handbook_Part_III_Light_Machine_Guns.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1940_UK_Armourers_Handbook_Part_III_Light_Machine_Guns.pdf",
        "local_url": "/api/manuals/Lewis_Automatic_Machine_Gun/1940_UK_Armourers_Handbook_Part_III_Light_Machine_Guns.pdf"
      },
      {
        "id": "1940_UK_Guns_for_the_Home_Guard_Lewis.pdf",
        "title": "1940 UK Guns for the Home Guard Lewis",
        "filename": "1940_UK_Guns_for_the_Home_Guard_Lewis.pdf",
        "size_mb": 20.7,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1940_UK_Guns_for_the_Home_Guard_Lewis.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Lewis_Automatic_Machine_Gun/manuals/1940_UK_Guns_for_the_Home_Guard_Lewis.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1940_UK_Guns_for_the_Home_Guard_Lewis.pdf",
        "local_url": "/api/manuals/Lewis_Automatic_Machine_Gun/1940_UK_Guns_for_the_Home_Guard_Lewis.pdf"
      },
      {
        "id": "1942_Manual_of_Modern_Automatic_Guns.pdf",
        "title": "1942 Manual of Modern Automatic Guns",
        "filename": "1942_Manual_of_Modern_Automatic_Guns.pdf",
        "size_mb": 3.81,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1942_Manual_of_Modern_Automatic_Guns.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Lewis_Automatic_Machine_Gun/manuals/1942_Manual_of_Modern_Automatic_Guns.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1942_Manual_of_Modern_Automatic_Guns.pdf",
        "local_url": "/api/manuals/Lewis_Automatic_Machine_Gun/1942_Manual_of_Modern_Automatic_Guns.pdf"
      },
      {
        "id": "1942_UK_How_to_Remedy_and_Prevent_Stoppages.pdf",
        "title": "1942 UK How to Remedy and Prevent Stoppages",
        "filename": "1942_UK_How_to_Remedy_and_Prevent_Stoppages.pdf",
        "size_mb": 15.83,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1942_UK_How_to_Remedy_and_Prevent_Stoppages.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Lewis_Automatic_Machine_Gun/manuals/1942_UK_How_to_Remedy_and_Prevent_Stoppages.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1942_UK_How_to_Remedy_and_Prevent_Stoppages.pdf",
        "local_url": "/api/manuals/Lewis_Automatic_Machine_Gun/1942_UK_How_to_Remedy_and_Prevent_Stoppages.pdf"
      },
      {
        "id": "Armorer_Technical_Manual_Lewis_Automatic_Machine_Gun.pdf",
        "title": "Armorer Technical Manual Lewis Automatic Machine Gun",
        "filename": "Armorer_Technical_Manual_Lewis_Automatic_Machine_Gun.pdf",
        "size_mb": 0.01,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/Armorer_Technical_Manual_Lewis_Automatic_Machine_Gun.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Lewis_Automatic_Machine_Gun/manuals/Armorer_Technical_Manual_Lewis_Automatic_Machine_Gun.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/Armorer_Technical_Manual_Lewis_Automatic_Machine_Gun.pdf",
        "local_url": "/api/manuals/Lewis_Automatic_Machine_Gun/Armorer_Technical_Manual_Lewis_Automatic_Machine_Gun.pdf"
      }
    ],
    "schematics": [
      {
        "id": "plate_p10_1.jpeg",
        "title": "plate p10 1",
        "filename": "plate_p10_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p10_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p10_1.jpeg"
      },
      {
        "id": "plate_p11_1.jpeg",
        "title": "plate p11 1",
        "filename": "plate_p11_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p11_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p11_1.jpeg"
      },
      {
        "id": "plate_p12_1.jpeg",
        "title": "plate p12 1",
        "filename": "plate_p12_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p12_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p12_1.jpeg"
      },
      {
        "id": "plate_p13_1.jpeg",
        "title": "plate p13 1",
        "filename": "plate_p13_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p13_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p13_1.jpeg"
      },
      {
        "id": "plate_p14_1.jpeg",
        "title": "plate p14 1",
        "filename": "plate_p14_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p14_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p14_1.jpeg"
      },
      {
        "id": "plate_p15_1.jpeg",
        "title": "plate p15 1",
        "filename": "plate_p15_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p15_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p15_1.jpeg"
      },
      {
        "id": "plate_p16_1.jpeg",
        "title": "plate p16 1",
        "filename": "plate_p16_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p16_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p16_1.jpeg"
      },
      {
        "id": "plate_p17_1.jpeg",
        "title": "plate p17 1",
        "filename": "plate_p17_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p17_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p17_1.jpeg"
      },
      {
        "id": "plate_p18_1.jpeg",
        "title": "plate p18 1",
        "filename": "plate_p18_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p18_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p18_1.jpeg"
      },
      {
        "id": "plate_p19_1.jpeg",
        "title": "plate p19 1",
        "filename": "plate_p19_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p19_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p19_1.jpeg"
      },
      {
        "id": "plate_p1_1.jpeg",
        "title": "plate p1 1",
        "filename": "plate_p1_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p1_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p1_1.jpeg"
      },
      {
        "id": "plate_p20_1.jpeg",
        "title": "plate p20 1",
        "filename": "plate_p20_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p20_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p20_1.jpeg"
      },
      {
        "id": "plate_p21_1.jpeg",
        "title": "plate p21 1",
        "filename": "plate_p21_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p21_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p21_1.jpeg"
      },
      {
        "id": "plate_p22_1.jpeg",
        "title": "plate p22 1",
        "filename": "plate_p22_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p22_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p22_1.jpeg"
      },
      {
        "id": "plate_p23_1.jpeg",
        "title": "plate p23 1",
        "filename": "plate_p23_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p23_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p23_1.jpeg"
      },
      {
        "id": "plate_p24_1.jpeg",
        "title": "plate p24 1",
        "filename": "plate_p24_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p24_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p24_1.jpeg"
      },
      {
        "id": "plate_p25_1.jpeg",
        "title": "plate p25 1",
        "filename": "plate_p25_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p25_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p25_1.jpeg"
      },
      {
        "id": "plate_p26_1.jpeg",
        "title": "plate p26 1",
        "filename": "plate_p26_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p26_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p26_1.jpeg"
      },
      {
        "id": "plate_p27_1.jpeg",
        "title": "plate p27 1",
        "filename": "plate_p27_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p27_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p27_1.jpeg"
      },
      {
        "id": "plate_p28_1.jpeg",
        "title": "plate p28 1",
        "filename": "plate_p28_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p28_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p28_1.jpeg"
      },
      {
        "id": "plate_p29_1.jpeg",
        "title": "plate p29 1",
        "filename": "plate_p29_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p29_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p29_1.jpeg"
      },
      {
        "id": "plate_p2_1.jpeg",
        "title": "plate p2 1",
        "filename": "plate_p2_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p2_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p2_1.jpeg"
      },
      {
        "id": "plate_p30_1.jpeg",
        "title": "plate p30 1",
        "filename": "plate_p30_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p30_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p30_1.jpeg"
      },
      {
        "id": "plate_p31_1.jpeg",
        "title": "plate p31 1",
        "filename": "plate_p31_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p31_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p31_1.jpeg"
      },
      {
        "id": "plate_p32_1.jpeg",
        "title": "plate p32 1",
        "filename": "plate_p32_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p32_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p32_1.jpeg"
      },
      {
        "id": "plate_p33_1.jpeg",
        "title": "plate p33 1",
        "filename": "plate_p33_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p33_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p33_1.jpeg"
      },
      {
        "id": "plate_p35_1.jpeg",
        "title": "plate p35 1",
        "filename": "plate_p35_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p35_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p35_1.jpeg"
      },
      {
        "id": "plate_p37_1.jpeg",
        "title": "plate p37 1",
        "filename": "plate_p37_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p37_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p37_1.jpeg"
      },
      {
        "id": "plate_p38_1.jpeg",
        "title": "plate p38 1",
        "filename": "plate_p38_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p38_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p38_1.jpeg"
      },
      {
        "id": "plate_p39_1.jpeg",
        "title": "plate p39 1",
        "filename": "plate_p39_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p39_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p39_1.jpeg"
      },
      {
        "id": "plate_p3_1.jpeg",
        "title": "plate p3 1",
        "filename": "plate_p3_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p3_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p3_1.jpeg"
      },
      {
        "id": "plate_p40_1.jpeg",
        "title": "plate p40 1",
        "filename": "plate_p40_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p40_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p40_1.jpeg"
      },
      {
        "id": "plate_p41_1.jpeg",
        "title": "plate p41 1",
        "filename": "plate_p41_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p41_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p41_1.jpeg"
      },
      {
        "id": "plate_p42_1.jpeg",
        "title": "plate p42 1",
        "filename": "plate_p42_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p42_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p42_1.jpeg"
      },
      {
        "id": "plate_p43_1.jpeg",
        "title": "plate p43 1",
        "filename": "plate_p43_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p43_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p43_1.jpeg"
      },
      {
        "id": "plate_p44_1.jpeg",
        "title": "plate p44 1",
        "filename": "plate_p44_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p44_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p44_1.jpeg"
      },
      {
        "id": "plate_p45_1.jpeg",
        "title": "plate p45 1",
        "filename": "plate_p45_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p45_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p45_1.jpeg"
      },
      {
        "id": "plate_p46_1.jpeg",
        "title": "plate p46 1",
        "filename": "plate_p46_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p46_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p46_1.jpeg"
      },
      {
        "id": "plate_p47_1.jpeg",
        "title": "plate p47 1",
        "filename": "plate_p47_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p47_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p47_1.jpeg"
      },
      {
        "id": "plate_p48_1.jpeg",
        "title": "plate p48 1",
        "filename": "plate_p48_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p48_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p48_1.jpeg"
      },
      {
        "id": "plate_p49_1.jpeg",
        "title": "plate p49 1",
        "filename": "plate_p49_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p49_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p49_1.jpeg"
      },
      {
        "id": "plate_p4_1.jpeg",
        "title": "plate p4 1",
        "filename": "plate_p4_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p4_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p4_1.jpeg"
      },
      {
        "id": "plate_p50_1.jpeg",
        "title": "plate p50 1",
        "filename": "plate_p50_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p50_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p50_1.jpeg"
      },
      {
        "id": "plate_p51_1.jpeg",
        "title": "plate p51 1",
        "filename": "plate_p51_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p51_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p51_1.jpeg"
      },
      {
        "id": "plate_p52_1.jpeg",
        "title": "plate p52 1",
        "filename": "plate_p52_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p52_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p52_1.jpeg"
      },
      {
        "id": "plate_p53_1.jpeg",
        "title": "plate p53 1",
        "filename": "plate_p53_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p53_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p53_1.jpeg"
      },
      {
        "id": "plate_p54_1.jpeg",
        "title": "plate p54 1",
        "filename": "plate_p54_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p54_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p54_1.jpeg"
      },
      {
        "id": "plate_p55_1.jpeg",
        "title": "plate p55 1",
        "filename": "plate_p55_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p55_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p55_1.jpeg"
      },
      {
        "id": "plate_p56_1.jpeg",
        "title": "plate p56 1",
        "filename": "plate_p56_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p56_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p56_1.jpeg"
      },
      {
        "id": "plate_p57_1.jpeg",
        "title": "plate p57 1",
        "filename": "plate_p57_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p57_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p57_1.jpeg"
      },
      {
        "id": "plate_p58_1.jpeg",
        "title": "plate p58 1",
        "filename": "plate_p58_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p58_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p58_1.jpeg"
      },
      {
        "id": "plate_p59_1.jpeg",
        "title": "plate p59 1",
        "filename": "plate_p59_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p59_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p59_1.jpeg"
      },
      {
        "id": "plate_p5_1.jpeg",
        "title": "plate p5 1",
        "filename": "plate_p5_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p5_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p5_1.jpeg"
      },
      {
        "id": "plate_p60_1.jpeg",
        "title": "plate p60 1",
        "filename": "plate_p60_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p60_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p60_1.jpeg"
      },
      {
        "id": "plate_p61_1.jpeg",
        "title": "plate p61 1",
        "filename": "plate_p61_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p61_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p61_1.jpeg"
      },
      {
        "id": "plate_p6_1.jpeg",
        "title": "plate p6 1",
        "filename": "plate_p6_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p6_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p6_1.jpeg"
      },
      {
        "id": "plate_p7_1.jpeg",
        "title": "plate p7 1",
        "filename": "plate_p7_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p7_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p7_1.jpeg"
      },
      {
        "id": "plate_p8_1.jpeg",
        "title": "plate p8 1",
        "filename": "plate_p8_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p8_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p8_1.jpeg"
      },
      {
        "id": "plate_p9_1.jpeg",
        "title": "plate p9 1",
        "filename": "plate_p9_1.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Lewis_Automatic_Machine_Gun/schematics/plate_p9_1.jpeg",
        "local_url": "/api/schematics/Lewis_Automatic_Machine_Gun/plate_p9_1.jpeg"
      }
    ]
  },
  "Mauser_Karabiner_98k": {
    "id": "Mauser_Karabiner_98k",
    "name": "Mauser Karabiner 98k / Gewehr 98",
    "subtitle": "The Benchmark of Bolt-Action Military Rifles (7.92x57mm / 8mm Mauser)",
    "manufacturer": "Mauser Werke / Sauer / Steyr / DWM",
    "category": "Rifles & Carbines",
    "action_type": "Controlled Round Feed (CRF) 3-Lug Bolt Action",
    "operating_actions": [
      "Controlled Round Feed",
      "Third Safety Lug",
      "3-Position Flag Safety"
    ],
    "types": [
      "Rifles & Carbines",
      "Historic Military Battle Rifle",
      "Bolt Action Foundation"
    ],
    "caliber_categories": [
      "7.92x57mm Mauser (8mm)"
    ],
    "era": "Military & Sporting Benchmark (1898\u2013Present)",
    "models": [
      "Gewehr 98 (WWI)",
      "Karabiner 98k (WWII Standard)",
      "Yugoslavian M48",
      "Swedish Mauser M96 (6.5x55mm)"
    ],
    "calibers": [
      "7.92x57mm Mauser (8x57 IS)",
      "6.5x55mm Swedish",
      "7x57mm Mauser"
    ],
    "key_tasks": [
      "Bolt Shroud Disassembly (Flag Safety Mid-Position)",
      "Claw Extractor Removal without Bending",
      "Floorplate Cartridge Release (Bullet Tip Catch)",
      "Stock Recoil Crossbolt Torquing",
      "Headspace Gauging"
    ],
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
        "url": "https://www.youtube.com/watch?v=m8Mau98x9M2w",
        "embed_url": "https://www.youtube-nocookie.com/embed/m8Mau98x9M2w",
        "summary": "Teardown of the Mauser 98 bolt: lifting and removing the claw extractor without bending, disassembling the firing pin spring, and adjusting the flag safety."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Mauser_Karabiner_98k.pdf",
        "title": "Armorer Technical Manual Mauser Karabiner 98k",
        "filename": "Armorer_Technical_Manual_Mauser_Karabiner_98k.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Mauser_Karabiner_98k/manuals/Armorer_Technical_Manual_Mauser_Karabiner_98k.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Mauser_Karabiner_98k/manuals/Armorer_Technical_Manual_Mauser_Karabiner_98k.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Mauser_Karabiner_98k/manuals/Armorer_Technical_Manual_Mauser_Karabiner_98k.pdf",
        "local_url": "/api/manuals/Mauser_Karabiner_98k/Armorer_Technical_Manual_Mauser_Karabiner_98k.pdf"
      }
    ],
    "schematics": []
  },
  "Mosin_Nagant_9130": {
    "id": "Mosin_Nagant_9130",
    "name": "Mosin-Nagant Model 1891/30 & M44",
    "subtitle": "Soviet Military Workhorse (7.62x54mmR Russian Rimmed)",
    "manufacturer": "Izhevsk / Tula / Sestroretsk / Chatellerault",
    "category": "Rifles & Carbines",
    "action_type": "Bolt-Action Two-Piece Bolthead Rifle",
    "operating_actions": [
      "Push-Feed Rotating Bolt Head",
      "Rimmed Cartridge Interrupter",
      "Cock-on-Opening"
    ],
    "types": [
      "Rifles & Carbines",
      "Military Surplus",
      "Historic Battle Rifle"
    ],
    "caliber_categories": [
      "7.62x54mmR"
    ],
    "era": "Czarist to WWII Russian Legend (1891\u20131965+)",
    "models": [
      "Model 1891 'Three-Line'",
      "Model 1891/30 Standard Infantry",
      "M38 Carbine",
      "M44 Side-Folding Bayonet",
      "PU Sniper"
    ],
    "calibers": [
      "7.62x54mmR (Rimmed)"
    ],
    "key_tasks": [
      "Interrupter/Ejector Tuning (Rim-Jam Elimination)",
      "Firing Pin Protrusion Teardown Gauge (0.075\"\u20130.095\")",
      "Sticky Bolt Fluting / Chamber Scrub",
      "Connecting Bar & Bolt Head Alignment",
      "Trigger Spring Shimming"
    ],
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
        "url": "https://www.youtube.com/watch?v=m8Mos9130x9Lw",
        "embed_url": "https://www.youtube-nocookie.com/embed/m8Mos9130x9Lw",
        "summary": "Full teardown of the Mosin-Nagant 91/30: using the teardrop armorer tool to set firing pin depth, curing sticky bolt syndrome, and tuning the interrupter."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Mosin_Nagant_9130.pdf",
        "title": "Armorer Technical Manual Mosin Nagant 9130",
        "filename": "Armorer_Technical_Manual_Mosin_Nagant_9130.pdf",
        "size_mb": 0.01,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Mosin_Nagant_9130/manuals/Armorer_Technical_Manual_Mosin_Nagant_9130.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Mosin_Nagant_9130/manuals/Armorer_Technical_Manual_Mosin_Nagant_9130.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Mosin_Nagant_9130/manuals/Armorer_Technical_Manual_Mosin_Nagant_9130.pdf",
        "local_url": "/api/manuals/Mosin_Nagant_9130/Armorer_Technical_Manual_Mosin_Nagant_9130.pdf"
      }
    ],
    "schematics": []
  },
  "Lee_Enfield_No4": {
    "id": "Lee_Enfield_No4",
    "name": "Lee-Enfield No. 4 Mk I & SMLE Mk III",
    "subtitle": "British Commonwealth Rapid-Fire Battle Rifle (.303 British)",
    "manufacturer": "RSAF Enfield / BSA / Long Branch / Savage-Stevens",
    "category": "Rifles & Carbines",
    "action_type": "Cock-on-Closing Rear-Locking Bolt Action",
    "operating_actions": [
      "Cock-on-Closing",
      "Rear Locking Lugs",
      "Removable Numbered Bolt Heads"
    ],
    "types": [
      "Rifles & Carbines",
      "Historic Military Battle Rifle",
      "Commonwealth Legend"
    ],
    "caliber_categories": [
      ".303 British"
    ],
    "era": "British Empire Service (1895\u20131957+)",
    "models": [
      "SMLE No. 1 Mk III* (WWI)",
      "Rifle No. 4 Mk I (WWII)",
      "No. 4 Mk 2",
      "No. 5 Mk I 'Jungle Carbine'"
    ],
    "calibers": [
      ".303 British (Mk VII Rimmed)"
    ],
    "key_tasks": [
      "Numbered Bolt Head Swapping (0, 1, 2, 3 Headspace)",
      "Striker Collar & Firing Pin Removal Tool",
      "Forend Stock Draw Block Bedding",
      "Magazine Feed Lip Bending Tool",
      "Two-Stage Military Trigger Tuning"
    ],
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
        "url": "https://www.youtube.com/watch?v=e8LeeNo4x9M2w",
        "embed_url": "https://www.youtube-nocookie.com/embed/e8LeeNo4x9M2w",
        "summary": "Mark Novak explains the unique Lee-Enfield numbered bolt head system, measuring rimmed headspace, disassembly of the striker and spring, and bedding draw blocks."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Lee_Enfield_No4.pdf",
        "title": "Armorer Technical Manual Lee Enfield No4",
        "filename": "Armorer_Technical_Manual_Lee_Enfield_No4.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Lee_Enfield_No4/manuals/Armorer_Technical_Manual_Lee_Enfield_No4.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Lee_Enfield_No4/manuals/Armorer_Technical_Manual_Lee_Enfield_No4.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Lee_Enfield_No4/manuals/Armorer_Technical_Manual_Lee_Enfield_No4.pdf",
        "local_url": "/api/manuals/Lee_Enfield_No4/Armorer_Technical_Manual_Lee_Enfield_No4.pdf"
      }
    ],
    "schematics": []
  },
  "Springfield_M1903": {
    "id": "Springfield_M1903",
    "name": "Springfield M1903 / M1903A3",
    "subtitle": "U.S. Rifle, Caliber .30, Model of 1903 (.30-06 Springfield)",
    "manufacturer": "Springfield Armory / Rock Island / Remington / Smith-Corona",
    "category": "Rifles & Carbines",
    "action_type": "Modified Mauser Controlled Round Feed Bolt Action",
    "operating_actions": [
      "Modified Mauser CRF",
      "Magazine Cut-Off Switch",
      "Two-Piece Striker Sleeve"
    ],
    "types": [
      "Rifles & Carbines",
      "Historic Military Battle Rifle",
      "WWI / WWII Legend"
    ],
    "caliber_categories": [
      ".30-06 Springfield"
    ],
    "era": "American Military Standard (1903\u20131945+)",
    "models": [
      "M1903 Standard (Ladder Sight)",
      "M1903 Mark I (Pedersen Device Cut)",
      "M1903A3 (Aperture Receiver Sight)",
      "M1903A4 Sniper Rifle"
    ],
    "calibers": [
      ".30-06 Springfield (M1906 / M2 Ball)"
    ],
    "key_tasks": [
      "Low-Number Receiver Metallurgy Safety Verification",
      "Magazine Cut-Off Switch Detent Service",
      "Two-Piece Firing Pin Rod Assembly",
      "Coned Breech Headspace Checking",
      "Stock Recoil Lug Bedding"
    ],
    "specs": {
      "low_number_warning": "CRITICAL ARMORER SAFETY WARNING: Low-number receivers (Springfield Armory under serial # 800,000; Rock Island under # 285,507) were single heat-treated case-hardened steel and prone to brittle shattering. DO NOT shoot heavy modern ammunition in low-number rifles",
      "high_number_receivers": "Double heat-treated (Springfield 800,000\u20131,275,767) and Nickel steel (above 1,275,767; all Remington and Smith-Corona 1903A3s) are 100% safe for standard service ammunition",
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
        "url": "https://www.youtube.com/watch?v=s8M1903x9M2w",
        "embed_url": "https://www.youtube-nocookie.com/embed/s8M1903x9M2w",
        "summary": "Teardown of the 1903 Springfield: examining serial number ranges for metallurgy safety, two-piece firing pin service, and tuning the magazine cutoff."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_Springfield_M1903.pdf",
        "title": "Armorer Technical Manual Springfield M1903",
        "filename": "Armorer_Technical_Manual_Springfield_M1903.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/Springfield_M1903/manuals/Armorer_Technical_Manual_Springfield_M1903.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/Springfield_M1903/manuals/Armorer_Technical_Manual_Springfield_M1903.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Springfield_M1903/manuals/Armorer_Technical_Manual_Springfield_M1903.pdf",
        "local_url": "/api/manuals/Springfield_M1903/Armorer_Technical_Manual_Springfield_M1903.pdf"
      }
    ],
    "schematics": []
  },
  "General_Gunsmithing": {
    "id": "General_Gunsmithing",
    "name": "General Gunsmithing & Workshop Disciplines",
    "subtitle": "Headspace, Chamber Casting, Machining, Bluing & Diagnostics",
    "manufacturer": "General Workshop",
    "category": "Workshop Disciplines",
    "action_type": "Gunsmithing Bench Procedures & Machining Standards",
    "operating_actions": [
      "Chamber Casting",
      "Headspace Gauging",
      "Hot Bluing",
      "Glass Bedding"
    ],
    "types": [
      "Workshop Disciplines",
      "Machining & Stoning",
      "Restoration"
    ],
    "caliber_categories": [
      "Rimmed",
      "Rimless",
      "Belted Magnums",
      "Straight Wall"
    ],
    "era": "Professional Gunsmithing Standards",
    "models": [
      "All Firearms",
      "Bolt Actions",
      "Lever Actions",
      "Semi-Autos",
      "Revolvers"
    ],
    "calibers": [
      "Rimmed",
      "Rimless",
      "Belted Magnums",
      "Straight Wall"
    ],
    "key_tasks": [
      "Headspace (Go / No-Go / Field)",
      "Cerrosafe Chamber Casting",
      "Slow Rust & Hot Caustic Bluing",
      "11\u00b0 Target Crowning",
      "Glass Bedding",
      "Sear Stoning"
    ],
    "specs": {
      "headspace_safety_rule": "Bolt MUST close on GO gauge; bolt must NOT close on NO-GO with light finger pressure; bolt closing on FIELD is DANGEROUS/UNSAFE",
      "cerrosafe_casting_window": "Pour alloy at 160\u00b0\u2013190\u00b0F. Measure cast at EXACTLY 1 hour after pouring for 1:1 true chamber dimension",
      "hot_caustic_bluing_temp": "285\u00b0F to 292\u00b0F boiling sodium hydroxide / nitrate bath; exact boiling point indicates salt concentration",
      "target_crown_angle": "11\u00b0 recessed target crown cut perpendicular to bore axis; eliminates uneven muzzle blast gas dispersion",
      "glass_bedding_clearance": "0.030\" to 0.050\" relief around sides and bottom of recoil lug; front of lug takes 100% of recoil bearing"
    },
    "stoppages": [
      {
        "position": "Diagnostic Protocol 1: Headspace Failure (Bolt Closes on FIELD Gauge)",
        "short_desc": "Bolt handle closes with normal pressure over a hardened steel FIELD headspace gauge",
        "causes": [
          "Worn receiver locking lugs or barrel set back.",
          "Unsafe bolt swap without gauging headspace."
        ],
        "action": "Immediate Action: RED TAG FIREARM: UNSAFE TO FIRE. Case head separation risk. Gunsmith Action: Set barrel back by cutting 1 full thread pitch on lathe, recut chamber with finish reamer to exact GO depth, or install oversized locking block/bolt head."
      }
    ],
    "videos": [
      {
        "id": "e8Headspacex9M2w",
        "title": "Headspace Gauging Masterclass: GO, NO-GO & FIELD Explained",
        "creator": "Larry Potterfield / MidwayUSA",
        "category": "Bench Safety & Gauging",
        "url": "https://www.youtube.com/watch?v=e8Headspacex9M2w",
        "embed_url": "https://www.youtube-nocookie.com/embed/e8Headspacex9M2w",
        "summary": "Master gunsmith Larry Potterfield demonstrates how headspace is measured across rimmed, rimless, and belted cases, and how to verify bolt safety."
      }
    ],
    "manuals": [
      {
        "id": "Armorer_Technical_Manual_General_Gunsmithing.pdf",
        "title": "Armorer Technical Manual General Gunsmithing",
        "filename": "Armorer_Technical_Manual_General_Gunsmithing.pdf",
        "size_mb": 0.0,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/General_Gunsmithing/manuals/Armorer_Technical_Manual_General_Gunsmithing.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/General_Gunsmithing/manuals/Armorer_Technical_Manual_General_Gunsmithing.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/General_Gunsmithing/manuals/Armorer_Technical_Manual_General_Gunsmithing.pdf",
        "local_url": "/api/manuals/General_Gunsmithing/Armorer_Technical_Manual_General_Gunsmithing.pdf"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith.pdf",
        "title": "Practical Gunsmithing American Gunsmith",
        "filename": "Practical_Gunsmithing_American_Gunsmith.pdf",
        "size_mb": 44.42,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/General_Gunsmithing/manuals/Practical_Gunsmithing_American_Gunsmith.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/General_Gunsmithing/manuals/Practical_Gunsmithing_American_Gunsmith.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/General_Gunsmithing/manuals/Practical_Gunsmithing_American_Gunsmith.pdf",
        "local_url": "/api/manuals/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith.pdf"
      },
      {
        "id": "The_Gunsmiths_Manual_Practical_Guide.pdf",
        "title": "The Gunsmiths Manual Practical Guide",
        "filename": "The_Gunsmiths_Manual_Practical_Guide.pdf",
        "size_mb": 21.27,
        "raw_url": "https://github.com/gmascagni/gunsmithing/raw/main/General_Gunsmithing/manuals/The_Gunsmiths_Manual_Practical_Guide.pdf",
        "github_url": "https://github.com/gmascagni/gunsmithing/blob/main/General_Gunsmithing/manuals/The_Gunsmiths_Manual_Practical_Guide.pdf",
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/General_Gunsmithing/manuals/The_Gunsmiths_Manual_Practical_Guide.pdf",
        "local_url": "/api/manuals/General_Gunsmithing/The_Gunsmiths_Manual_Practical_Guide.pdf"
      }
    ],
    "schematics": [
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p001_01.jpg",
        "title": "Practical Gunsmithing American Gunsmith p001 01",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p001_01.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p001_01.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p001_01.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p001_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p001 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p001_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p001_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p001_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p002_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p002 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p002_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p002_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p002_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p003_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p003 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p003_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p003_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p003_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p004_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p004 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p004_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p004_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p004_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p005_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p005 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p005_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p005_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p005_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p006_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p006 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p006_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p006_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p006_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p007_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p007 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p007_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p007_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p007_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p008_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p008 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p008_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p008_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p008_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p009_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p009 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p009_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p009_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p009_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p010_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p010 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p010_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p010_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p010_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p011_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p011 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p011_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p011_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p011_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p012_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p012 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p012_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p012_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p012_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p013_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p013 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p013_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p013_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p013_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p014_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p014 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p014_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p014_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p014_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p015_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p015 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p015_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p015_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p015_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p016_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p016 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p016_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p016_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p016_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p017_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p017 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p017_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p017_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p017_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p018_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p018 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p018_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p018_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p018_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p019_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p019 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p019_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p019_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p019_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p020_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p020 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p020_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p020_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p020_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p021_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p021 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p021_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p021_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p021_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p022_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p022 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p022_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p022_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p022_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p023_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p023 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p023_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p023_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p023_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p024_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p024 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p024_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p024_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p024_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p025_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p025 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p025_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p025_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p025_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p026_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p026 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p026_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p026_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p026_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p027_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p027 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p027_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p027_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p027_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p028_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p028 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p028_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p028_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p028_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p029_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p029 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p029_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p029_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p029_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p030_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p030 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p030_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p030_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p030_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p031_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p031 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p031_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p031_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p031_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p032_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p032 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p032_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p032_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p032_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p033_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p033 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p033_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p033_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p033_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p034_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p034 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p034_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p034_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p034_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p035_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p035 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p035_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p035_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p035_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p036_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p036 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p036_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p036_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p036_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p037_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p037 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p037_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p037_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p037_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p038_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p038 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p038_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p038_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p038_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p039_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p039 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p039_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p039_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p039_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p040_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p040 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p040_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p040_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p040_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p041_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p041 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p041_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p041_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p041_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p042_01.jpg",
        "title": "Practical Gunsmithing American Gunsmith p042 01",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p042_01.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p042_01.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p042_01.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p042_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p042 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p042_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p042_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p042_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p043_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p043 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p043_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p043_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p043_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p044_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p044 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p044_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p044_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p044_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p045_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p045 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p045_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p045_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p045_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p046_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p046 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p046_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p046_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p046_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p047_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p047 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p047_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p047_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p047_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p048_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p048 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p048_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p048_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p048_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p049_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p049 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p049_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p049_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p049_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p050_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p050 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p050_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p050_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p050_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p051_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p051 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p051_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p051_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p051_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p052_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p052 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p052_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p052_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p052_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p053_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p053 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p053_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p053_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p053_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p054_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p054 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p054_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p054_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p054_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p055_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p055 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p055_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p055_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p055_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p056_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p056 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p056_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p056_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p056_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p057_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p057 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p057_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p057_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p057_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p058_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p058 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p058_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p058_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p058_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p059_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p059 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p059_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p059_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p059_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p060_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p060 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p060_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p060_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p060_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p061_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p061 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p061_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p061_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p061_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p062_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p062 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p062_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p062_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p062_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p063_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p063 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p063_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p063_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p063_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p064_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p064 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p064_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p064_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p064_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p065_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p065 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p065_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p065_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p065_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p066_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p066 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p066_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p066_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p066_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p067_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p067 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p067_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p067_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p067_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p068_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p068 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p068_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p068_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p068_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p069_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p069 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p069_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p069_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p069_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p070_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p070 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p070_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p070_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p070_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p071_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p071 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p071_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p071_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p071_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p072_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p072 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p072_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p072_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p072_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p073_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p073 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p073_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p073_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p073_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p074_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p074 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p074_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p074_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p074_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p075_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p075 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p075_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p075_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p075_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p076_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p076 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p076_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p076_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p076_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p077_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p077 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p077_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p077_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p077_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p078_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p078 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p078_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p078_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p078_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p079_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p079 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p079_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p079_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p079_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p080_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p080 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p080_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p080_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p080_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p081_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p081 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p081_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p081_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p081_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p082_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p082 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p082_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p082_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p082_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p083_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p083 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p083_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p083_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p083_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p084_01.jpg",
        "title": "Practical Gunsmithing American Gunsmith p084 01",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p084_01.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p084_01.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p084_01.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p084_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p084 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p084_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p084_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p084_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p085_01.jpg",
        "title": "Practical Gunsmithing American Gunsmith p085 01",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p085_01.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p085_01.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p085_01.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p085_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p085 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p085_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p085_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p085_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p086_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p086 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p086_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p086_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p086_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p087_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p087 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p087_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p087_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p087_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p088_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p088 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p088_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p088_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p088_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p089_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p089 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p089_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p089_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p089_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p090_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p090 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p090_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p090_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p090_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p091_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p091 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p091_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p091_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p091_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p092_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p092 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p092_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p092_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p092_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p093_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p093 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p093_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p093_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p093_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p094_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p094 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p094_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p094_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p094_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p095_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p095 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p095_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p095_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p095_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p096_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p096 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p096_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p096_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p096_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p097_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p097 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p097_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p097_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p097_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p098_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p098 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p098_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p098_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p098_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p099_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p099 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p099_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p099_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p099_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p100_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p100 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p100_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p100_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p100_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p101_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p101 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p101_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p101_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p101_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p102_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p102 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p102_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p102_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p102_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p103_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p103 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p103_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p103_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p103_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p104_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p104 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p104_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p104_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p104_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p105_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p105 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p105_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p105_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p105_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p106_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p106 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p106_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p106_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p106_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p107_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p107 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p107_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p107_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p107_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p108_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p108 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p108_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p108_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p108_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p109_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p109 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p109_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p109_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p109_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p110_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p110 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p110_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p110_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p110_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p111_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p111 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p111_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p111_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p111_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p112_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p112 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p112_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p112_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p112_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p113_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p113 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p113_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p113_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p113_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p114_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p114 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p114_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p114_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p114_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p115_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p115 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p115_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p115_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p115_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p116_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p116 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p116_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p116_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p116_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p117_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p117 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p117_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p117_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p117_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p118_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p118 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p118_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p118_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p118_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p119_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p119 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p119_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p119_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p119_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p120_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p120 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p120_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p120_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p120_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p121_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p121 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p121_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p121_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p121_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p122_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p122 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p122_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p122_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p122_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p123_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p123 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p123_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p123_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p123_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p124_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p124 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p124_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p124_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p124_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p125_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p125 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p125_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p125_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p125_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p126_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p126 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p126_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p126_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p126_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p127_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p127 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p127_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p127_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p127_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p128_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p128 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p128_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p128_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p128_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p129_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p129 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p129_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p129_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p129_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p130_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p130 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p130_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p130_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p130_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p131_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p131 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p131_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p131_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p131_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p132_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p132 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p132_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p132_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p132_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p133_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p133 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p133_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p133_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p133_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p134_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p134 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p134_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p134_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p134_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p135_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p135 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p135_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p135_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p135_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p136_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p136 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p136_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p136_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p136_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p137_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p137 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p137_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p137_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p137_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p138_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p138 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p138_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p138_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p138_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p139_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p139 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p139_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p139_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p139_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p140_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p140 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p140_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p140_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p140_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p141_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p141 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p141_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p141_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p141_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p142_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p142 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p142_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p142_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p142_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p143_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p143 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p143_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p143_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p143_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p144_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p144 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p144_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p144_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p144_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p145_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p145 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p145_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p145_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p145_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p146_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p146 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p146_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p146_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p146_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p147_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p147 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p147_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p147_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p147_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p148_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p148 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p148_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p148_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p148_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p149_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p149 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p149_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p149_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p149_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p150_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p150 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p150_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p150_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p150_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p151_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p151 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p151_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p151_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p151_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p152_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p152 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p152_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p152_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p152_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p153_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p153 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p153_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p153_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p153_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p154_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p154 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p154_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p154_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p154_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p155_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p155 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p155_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p155_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p155_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p156_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p156 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p156_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p156_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p156_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p157_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p157 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p157_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p157_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p157_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p158_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p158 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p158_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p158_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p158_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p159_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p159 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p159_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p159_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p159_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p160_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p160 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p160_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p160_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p160_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p161_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p161 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p161_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p161_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p161_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p162_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p162 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p162_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p162_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p162_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p163_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p163 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p163_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p163_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p163_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p164_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p164 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p164_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p164_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p164_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p165_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p165 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p165_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p165_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p165_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p166_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p166 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p166_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p166_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p166_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p167_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p167 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p167_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p167_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p167_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p168_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p168 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p168_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p168_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p168_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p169_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p169 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p169_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p169_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p169_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p170_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p170 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p170_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p170_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p170_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p171_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p171 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p171_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p171_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p171_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p172_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p172 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p172_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p172_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p172_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p173_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p173 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p173_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p173_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p173_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p174_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p174 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p174_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p174_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p174_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p175_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p175 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p175_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p175_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p175_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p176_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p176 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p176_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p176_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p176_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p177_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p177 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p177_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p177_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p177_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p178_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p178 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p178_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p178_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p178_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p179_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p179 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p179_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p179_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p179_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p180_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p180 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p180_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p180_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p180_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p181_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p181 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p181_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p181_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p181_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p182_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p182 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p182_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p182_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p182_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p183_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p183 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p183_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p183_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p183_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p184_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p184 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p184_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p184_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p184_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p185_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p185 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p185_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p185_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p185_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p186_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p186 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p186_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p186_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p186_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p187_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p187 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p187_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p187_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p187_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p188_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p188 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p188_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p188_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p188_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p189_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p189 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p189_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p189_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p189_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p190_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p190 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p190_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p190_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p190_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p191_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p191 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p191_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p191_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p191_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p192_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p192 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p192_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p192_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p192_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p193_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p193 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p193_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p193_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p193_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p194_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p194 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p194_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p194_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p194_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p195_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p195 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p195_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p195_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p195_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p196_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p196 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p196_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p196_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p196_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p197_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p197 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p197_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p197_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p197_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p198_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p198 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p198_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p198_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p198_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p199_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p199 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p199_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p199_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p199_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p200_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p200 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p200_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p200_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p200_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p201_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p201 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p201_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p201_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p201_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p202_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p202 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p202_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p202_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p202_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p203_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p203 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p203_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p203_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p203_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p204_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p204 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p204_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p204_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p204_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p205_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p205 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p205_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p205_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p205_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p206_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p206 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p206_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p206_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p206_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p207_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p207 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p207_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p207_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p207_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p208_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p208 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p208_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p208_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p208_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p209_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p209 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p209_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p209_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p209_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p210_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p210 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p210_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p210_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p210_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p211_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p211 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p211_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p211_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p211_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p212_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p212 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p212_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p212_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p212_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p213_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p213 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p213_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p213_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p213_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p214_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p214 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p214_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p214_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p214_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p215_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p215 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p215_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p215_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p215_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p216_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p216 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p216_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p216_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p216_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p217_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p217 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p217_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p217_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p217_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p218_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p218 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p218_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p218_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p218_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p219_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p219 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p219_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p219_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p219_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p220_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p220 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p220_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p220_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p220_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p221_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p221 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p221_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p221_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p221_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p222_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p222 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p222_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p222_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p222_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p223_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p223 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p223_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p223_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p223_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p224_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p224 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p224_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p224_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p224_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p225_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p225 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p225_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p225_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p225_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p226_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p226 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p226_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p226_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p226_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p227_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p227 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p227_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p227_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p227_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p228_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p228 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p228_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p228_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p228_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p229_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p229 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p229_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p229_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p229_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p230_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p230 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p230_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p230_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p230_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p231_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p231 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p231_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p231_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p231_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p232_01.jpg",
        "title": "Practical Gunsmithing American Gunsmith p232 01",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p232_01.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p232_01.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p232_01.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p232_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p232 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p232_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p232_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p232_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p233_01.jpg",
        "title": "Practical Gunsmithing American Gunsmith p233 01",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p233_01.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p233_01.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p233_01.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p233_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p233 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p233_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p233_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p233_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p234_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p234 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p234_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p234_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p234_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p235_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p235 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p235_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p235_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p235_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p236_01.jpg",
        "title": "Practical Gunsmithing American Gunsmith p236 01",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p236_01.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p236_01.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p236_01.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p236_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p236 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p236_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p236_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p236_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p237_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p237 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p237_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p237_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p237_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p238_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p238 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p238_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p238_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p238_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p239_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p239 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p239_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p239_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p239_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p240_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p240 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p240_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p240_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p240_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p241_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p241 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p241_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p241_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p241_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p242_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p242 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p242_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p242_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p242_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p243_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p243 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p243_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p243_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p243_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p244_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p244 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p244_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p244_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p244_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p245_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p245 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p245_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p245_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p245_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p246_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p246 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p246_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p246_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p246_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p247_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p247 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p247_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p247_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p247_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p248_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p248 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p248_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p248_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p248_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p249_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p249 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p249_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p249_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p249_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p250_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p250 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p250_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p250_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p250_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p251_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p251 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p251_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p251_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p251_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p252_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p252 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p252_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p252_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p252_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p253_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p253 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p253_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p253_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p253_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p254_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p254 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p254_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p254_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p254_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p255_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p255 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p255_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p255_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p255_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p256_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p256 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p256_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p256_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p256_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p257_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p257 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p257_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p257_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p257_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p258_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p258 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p258_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p258_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p258_02.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p260_01.jpg",
        "title": "Practical Gunsmithing American Gunsmith p260 01",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p260_01.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p260_01.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p260_01.jpg"
      },
      {
        "id": "Practical_Gunsmithing_American_Gunsmith_p260_02.jpg",
        "title": "Practical Gunsmithing American Gunsmith p260 02",
        "filename": "Practical_Gunsmithing_American_Gunsmith_p260_02.jpg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/General_Gunsmithing/schematics/Practical_Gunsmithing_American_Gunsmith_p260_02.jpg",
        "local_url": "/api/schematics/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith_p260_02.jpg"
      }
    ]
  }
};

window.STATIC_PARTS_DATABASE = {
  "Lewis_Automatic_Machine_Gun": [
    {
      "id": "lewis_trigger_grip",
      "name": "Trigger, Trigger Guard & Pistol Grip Assembly",
      "callout_num": "Part #20 / Savage 109",
      "oem_number": "BSA-LMG-20 / Savage 109 / Ordnance 42",
      "assembly": "Trigger Mechanism & Fire Control Group",
      "tolerances": "Trigger pull weight: 6.5 to 7.5 lbs. Sear engagement overlap on operating rod rack notch: 0.045\" minimum full square contact. Sear spring free length: 0.850\".",
      "malfunctions": "Runaway gun (burst fire / fails to cease firing when trigger is released) if sear nose chipped or rack notch rounded; trigger fails to reset if sear spring broken or trigger housing packed with grit.",
      "maintenance": "Remove buttstock, pull trigger rearward and slide trigger guard assembly downward and rearward along receiver rails. Stone sear engagement nose square with hard Arkansas oilstone\u2014NEVER round off sear facet. Clean sear pivot pin and apply 1 drop of light oil.",
      "norm_x": 0.38,
      "norm_y": 0.58,
      "norm_r": 0.1
    },
    {
      "id": "lewis_buttstock",
      "name": "Walnut Buttstock Assembly with Butt Plate & Latch",
      "callout_num": "Part #21 / Savage 110",
      "oem_number": "BSA-LMG-21 / Savage 110",
      "assembly": "Butt Group & Stock Attachment",
      "tolerances": "Buttstock latch clearance: 0.002\" to 0.005\" slide fit over receiver dovetail. Latch spring retention: positive lock requiring firm upward press to release.",
      "malfunctions": "Stock wobble / loose lockup if dovetail rails worn; cracked walnut stock behind tang if fired with loose latch pin.",
      "maintenance": "Press stock latch upward and slide stock straight back off receiver. Inspect brass oiler brush inside butt trap. Treat walnut with boiled linseed oil.",
      "norm_x": 0.18,
      "norm_y": 0.55,
      "norm_r": 0.12
    },
    {
      "id": "lewis_return_spring",
      "name": "Gear Casing & Flat Clockwork Return Spring Assembly",
      "callout_num": "Part #18 / Savage 102",
      "oem_number": "BSA-LMG-18 / Savage 102",
      "assembly": "Return Mechanism & Pinion Group",
      "tolerances": "Spring Tension: 12 to 14 lbs pull measured at cocking handle. Baseline winding: exactly 2 to 2\u00bd complete rotations from neutral dead-slack. Gear teeth runout: < 0.003\".",
      "malfunctions": "Sluggish forward stroke; failure to strip heavy .303 rimmed cartridge from magazine drum; sheared pinion gear teeth if released without tension key holding teeth.",
      "maintenance": "NEVER release spring tension uncontrolled. Lubricate internal spiral leaves with medium petroleum grease (graphite blend). Replace mainspring if pull drops below 10 lbs after 2.5 turns.",
      "norm_x": 0.46,
      "norm_y": 0.5,
      "norm_r": 0.08
    },
    {
      "id": "lewis_drum_magazine",
      "name": "47-Round Clockwork Pan Drum Magazine Assembly",
      "callout_num": "Part #23 / Magazine Group",
      "oem_number": "BSA-LMG-23 / Savage 115",
      "assembly": "Magazine & Feed Mechanism",
      "tolerances": "Internal clock spring tension: exactly 2 to 2\u00bd complete rotations from dead-slack using tension key (BSA-LMG-84). Center boss clearance over receiver post: 0.005\" to 0.008\". Magazine catch lockup: 0.015\" to 0.025\" engagement depth. Outer diameter: 8.25\", weight loaded: 4.5 lbs.",
      "malfunctions": "Position 1 Stoppage (pan fails to advance next cartridge into feedway); deformed interior radial ribs causing cartridge jam; stripped center rotor pinion if rotated counter-clockwise by hand.",
      "maintenance": "NEVER FORCE DRUM ROTATION COUNTER-CLOCKWISE. Store drums with spring tension completely relaxed. Clean internal corrugated tracks with solvent wash and dry patch; apply micro-fine dry PTFE / graphite powder. NEVER apply heavy wet grease or oil inside drum tracks as powder fouling will seize the rotor.",
      "norm_x": 0.46,
      "norm_y": 0.24,
      "norm_r": 0.16
    },
    {
      "id": "lewis_drum_magazine_side",
      "name": "47-Round Pan Drum Magazine (Mounted Profile)",
      "callout_num": "Part #23 / Magazine Group",
      "oem_number": "BSA-LMG-23 / Savage 115",
      "assembly": "Magazine & Feed Mechanism",
      "tolerances": "Internal clock spring tension: exactly 2 to 2\u00bd complete rotations from dead-slack using tension key (BSA-LMG-84). Center boss clearance over receiver post: 0.005\" to 0.008\". Magazine catch lockup: 0.015\" to 0.025\" engagement depth.",
      "malfunctions": "Position 1 Stoppage (pan fails to advance next cartridge into feedway); deformed interior radial ribs causing cartridge jam; stripped center rotor pinion if rotated counter-clockwise by hand.",
      "maintenance": "NEVER FORCE DRUM ROTATION COUNTER-CLOCKWISE. Store drums with spring tension completely relaxed. Clean internal corrugated tracks with solvent wash and dry patch; apply micro-fine dry PTFE / graphite powder.",
      "norm_x": 0.48,
      "norm_y": 0.36,
      "norm_r": 0.12
    },
    {
      "id": "lewis_bipod_assembly",
      "name": "Folding Field Bipod & Muzzle Blast Cowl",
      "callout_num": "Part #2 / Savage 103",
      "oem_number": "BSA-LMG-02 / Savage 103",
      "assembly": "Mount & Venturi Draught Cowl Group",
      "tolerances": "Clamp collar torque: 25 to 30 in-lbs. Leg pivot friction: holds firm at 60\u00b0 spread without collapsing under firing vibration.",
      "malfunctions": "Bipod slipping or collapsing under rapid cyclic recoil; worn pivot rivet causing canted aim.",
      "maintenance": "Inspect leg hinge rivets; tighten collar clamping screw; wipe pivot joints with light preservative oil.",
      "norm_x": 0.55,
      "norm_y": 0.6,
      "norm_r": 0.1
    },
    {
      "id": "lewis_barrel_radiator",
      "name": "Barrel with Aluminum Radiator & Cooling Casing",
      "callout_num": "Part #1 / Savage 101",
      "oem_number": "BSA-LMG-01 / Savage 101",
      "assembly": "Barrel & Forced Draught Cooling Group",
      "tolerances": "Barrel-to-receiver torque: 75 to 85 ft-lbs with barrel clamp. Radiator fin-to-shroud clearance: 0.015\" circumferential air gap.",
      "malfunctions": "Thermal barrel droop or wandering zero if radiator shroud loose; gas port gas leakage causing erratic cyclic rate.",
      "maintenance": "Blow out longitudinal cooling fins with compressed air. Ensure front barrel gas gland threads are tight and pinned. Clean muzzle blast induction cup.",
      "norm_x": 0.68,
      "norm_y": 0.52,
      "norm_r": 0.16
    },
    {
      "id": "lewis_piston_oprod",
      "name": "Gas Piston, Rack & Operating Rod Assembly",
      "callout_num": "Part #12",
      "oem_number": "BSA-LMG-12 / Savage 104",
      "assembly": "Operating Rod & Gas Engine",
      "tolerances": "Piston cup clearance to gas cylinder: 0.002\" to 0.004\" diametrical gap. Rack teeth engagement depth into pinion: 0.065\" minimum. Striker post runout: < 0.0015\".",
      "malfunctions": "Short recoil / failure to extract if piston cup carbon-fouled or gas port eroded; sheared striker post if bolt rotation stalls in locked battery.",
      "maintenance": "Scrape gas piston face with brass scraper; never use hardened steel wire wheel. Check rack teeth for chipping or rounding at front teeth. Wipe cylinder dry with kerosene; no wet oil.",
      "norm_x": 0.35,
      "norm_y": 0.42,
      "norm_r": 0.14
    },
    {
      "id": "lewis_striker",
      "name": "Striker (Firing Pin) & Retaining Pin",
      "callout_num": "Part #14",
      "oem_number": "BSA-LMG-14 / Savage 107",
      "assembly": "Operating Rod & Ignition Assembly",
      "tolerances": "Firing pin protrusion beyond breech face: 0.052\" to 0.060\". Tip radius: 0.045\" hemispherical. Rockwell hardness: 50\u201352 HRC on tip, annealed body.",
      "malfunctions": "Pierced primers if protrusion exceeds 0.062\"; light strikes or misfires if tip mushroomed or oprod post pocket worn egg-shaped.",
      "maintenance": "Inspect tip under 10x magnifier for crater pitting. Hand-stone tip radius if mushroomed. Ensure free pivot play on oprod post without binding.",
      "norm_x": 0.42,
      "norm_y": 0.38,
      "norm_r": 0.09
    },
    {
      "id": "lewis_bolt",
      "name": "Rotating Bolt with Dual Extractors",
      "callout_num": "Part #15",
      "oem_number": "BSA-LMG-15 / Savage 105",
      "assembly": "Breech Mechanism & Lockup Group",
      "tolerances": "Locking lug overlap into receiver ring: 100% full engagement upon cam completion. Headspace: 0.064\" (GO) to 0.070\" (NO-GO) rim thickness for .303 British.",
      "malfunctions": "Separated case heads if headspace excessive (> 0.074\" FIELD); failure to extract if dual spring extractors lose temper from rapid barrel heat.",
      "maintenance": "Check both left and right extractor claws for sharp biting edge. Test claw spring tension (must hold rim securely without slipping under 5 lb shake test).",
      "norm_x": 0.52,
      "norm_y": 0.36,
      "norm_r": 0.11
    },
    {
      "id": "lewis_feed_arm",
      "name": "Feed Arm Actuating Pawl & Stop Pawl",
      "callout_num": "Part #22",
      "oem_number": "BSA-LMG-22 / Savage 114",
      "assembly": "Feed & Drum Rotation Group",
      "tolerances": "Pawl tip engagement into drum rim notches: 0.040\" minimum depth. Feed arm travel stroke: precisely 1.120\" transverse arc.",
      "malfunctions": "Drum fails to index next round; magazine jams midway; twin feed if stop pawl spring is broken or bent.",
      "maintenance": "Inspect pawl chisel points for rounding. Clean feed arm track in receiver cover; lubricate slide track with thin oil. Check pawl spring tension.",
      "norm_x": 0.62,
      "norm_y": 0.28,
      "norm_r": 0.1
    }
  ],
  "Glock_Pistols": [
    {
      "id": "glock_trigger_bar",
      "name": "Cruciform Trigger Bar & Striker Lug Plate",
      "callout_num": "Part #26",
      "oem_number": "SP 00357 (Gen 1-4) / SP 39701 (Gen 5)",
      "assembly": "Trigger Mechanism & Fire Control Group",
      "tolerances": "Cruciform sear engagement: \u2265 66% (minimum 2/3 overlap) on striker foot, inspected through orange armorer inspection plate (SP 02096). Connector gap: 0.005\" to 0.010\" clearance between top lip and housing.",
      "malfunctions": "Double-firing or failure to reset if engagement < 66%; spongy or creep-heavy trigger break if disconnector cam ramp is burred or dry.",
      "maintenance": "Inspect cruciform sear surface for rounding or uneven wear. Polish disconnector cam and sear face with 0.5-micron diamond compound (do not grind through nickel plating). Wipe dry; never grease striker sear interface.",
      "norm_x": 0.48,
      "norm_y": 0.55,
      "norm_r": 0.12
    },
    {
      "id": "glock_striker_assembly",
      "name": "Firing Pin (Striker) Assembly with Spring & Maritime Cups",
      "callout_num": "Part #4",
      "oem_number": "SP 00049 / Spring SP 00063 / Cups SP 00070",
      "assembly": "Slide Ignition & Striker Mechanism",
      "tolerances": "Firing pin protrusion: 0.045\" to 0.055\" through breech face rectangular aperture. Striker spring free length: 1.625\" (replace if < 1.450\"). Spring weight: 5.5 lbs (standard silver spring).",
      "malfunctions": "Light primer strikes if firing pin channel is oiled or carbon fouled (hydraulic drag); pierced primers if tip has burr; broken spring cups causing striker binding.",
      "maintenance": "NEVER LUBRICATE FIRING PIN CHANNEL OR LINER. Must be 100% dry and solvent-free. Run the 'Glock rattle test' (cocked, hold weapon and shake\u2014striker must freely rattle inside slide channel).",
      "norm_x": 0.58,
      "norm_y": 0.22,
      "norm_r": 0.13
    },
    {
      "id": "glock_extractor_plunger",
      "name": "Extractor, Plunger, Spring & Spring-Loaded Bearing (SLB)",
      "callout_num": "Part #10",
      "oem_number": "Extractor SP 01895 / Plunger SP 00112 / SLB SP 01176",
      "assembly": "Slide Extraction & Ejection Group",
      "tolerances": "Extractor claw depth: 0.035\" to 0.042\" claw bite. SLB polymer shoulder flush with slide rear plate. Spring free length: 0.780\".",
      "malfunctions": "Brass to face (BTF); failure to extract (stovepipe); erratic 6-o'clock ejection if SLB installed backwards or claw chipped.",
      "maintenance": "Plunger assembly stack sequence: Metal rod face touches extractor claw -> spring -> polymer SLB faces slide rear cover. Clean claw pocket with dental pick.",
      "norm_x": 0.68,
      "norm_y": 0.26,
      "norm_r": 0.1
    },
    {
      "id": "glock_locking_block",
      "name": "Steel Locking Block & Cross Pins",
      "callout_num": "Part #22",
      "oem_number": "SP 01447 (9mm 3-Pin)",
      "assembly": "Frame & Recoil Cam Group",
      "tolerances": "Barrel bottom lug lockup fit: 0.001\" to 0.003\" lateral play in receiver rails. Pin holes ID: 0.118\" (trigger pin) / 0.098\" (locking block pin).",
      "malfunctions": "Cracked polymer frame if locking block pin omitted or installed out of sequence; premature unlocking causing ruptured cartridge cases.",
      "maintenance": "Assembly sequence mandatory: 1. Top locking block pin FIRST, 2. Trigger bar & slide stop, 3. Bottom trigger pin LAST. Prevents bending slide stop spring.",
      "norm_x": 0.42,
      "norm_y": 0.44,
      "norm_r": 0.11
    },
    {
      "id": "glock_recoil_spring",
      "name": "Captured Recoil Spring Assembly (RSA)",
      "callout_num": "Part #3",
      "oem_number": "SP 02457 (G19 Gen 3) / SP 08703 (G19 Gen 4/5 Dual)",
      "assembly": "Recoil & Counter-Recoil Group",
      "tolerances": "Recoil spring weight: 18 lbs standard (Gen 3) / 16.5 lbs dual-spring assembly (Gen 4/5). Free length: minimum 3.0\" on single-spring rods.",
      "malfunctions": "Slide hangs out of battery 1/8\" when dirty; battering of polymer frame recoil lugs if spring fatigued (> 5,000 rounds).",
      "maintenance": "Perform Glock 45\u00b0 test: unload, cock, pull trigger, point gun 45\u00b0 upwards, pull slide back 1/4\" and release slowly. Slide must close into full battery without pushing.",
      "norm_x": 0.28,
      "norm_y": 0.3,
      "norm_r": 0.12
    },
    {
      "id": "glock_barrel",
      "name": "Marksman / Hexagonal Rifled Cold Hammer-Forged Barrel",
      "callout_num": "Part #2",
      "oem_number": "SP 00216 (Glock 19 Barrel)",
      "assembly": "Barrel & Chamber Group",
      "tolerances": "Bore diameter: 0.355\" groove; chamber headspace depth: 0.754\" (GO) to 0.776\" (NO-GO). Barrel hood-to-slide gap: 0.004\" to 0.008\".",
      "malfunctions": "Lead fouling in polygonal rifling causing dangerous chamber pressure spikes; failure to lock into battery if feed ramp has brass gouges.",
      "maintenance": "Inspect chamber mouth and feed ramp under bright light. Mirror polish feed ramp with Flitz on felt bob (do not alter ramp angle). 1 drop oil on barrel hood exterior.",
      "norm_x": 0.25,
      "norm_y": 0.24,
      "norm_r": 0.13
    }
  ],
  "AR15_M4_Platform": [
    {
      "id": "ar15_bolt_carrier_group",
      "name": "Bolt Carrier Group (BCG) with Gas Key & Cam Pin",
      "callout_num": "Assembly #1",
      "oem_number": "Mil-Spec 8448512 / 8448507",
      "assembly": "Direct Impingement Operating Engine",
      "tolerances": "Gas key staking: Grade 8 fasteners torqued to 50\u201355 in-lbs, dual-point metal displacement staking on each screw head. Cam pin hole wear: < 0.004\" elongation.",
      "malfunctions": "Short-stroking / fail to eject if gas key leaks or screws back out; bolt carrier tilt wear on buffer tube buffer lip.",
      "maintenance": "Verify gas rings stagger (gaps not aligned). Test: stand BCG vertical on bolt face\u2014carrier must not drop under its own weight. Clean gas key interior with pipe cleaner.",
      "norm_x": 0.45,
      "norm_y": 0.35,
      "norm_r": 0.14
    },
    {
      "id": "ar15_bolt_extractor",
      "name": "Bolt Assembly with Extractor, Crane O-Ring & Ejector",
      "callout_num": "Assembly #2",
      "oem_number": "Mil-Spec 8448513",
      "assembly": "Lockup & Case Management Group",
      "tolerances": "Headspace (5.56 NATO): 1.4646\" (GO) / 1.4706\" (NO-GO) / 1.4736\" (FIELD 5.56 Max). Firing pin protrusion: 0.028\" to 0.036\".",
      "malfunctions": "Torn cartridge rims or failure to extract on carbines if extractor spring missing black buffer / viton O-ring; sheared bolt locking lugs opposite extractor pocket.",
      "maintenance": "Magnaflux / MPI inspect bolt lugs under UV light at 5,000 round intervals. Upgrade carbines to 5-coil extractor spring with Viton O-ring.",
      "norm_x": 0.55,
      "norm_y": 0.34,
      "norm_r": 0.1
    },
    {
      "id": "ar15_fire_control_group",
      "name": "Fire Control Group (Hammer, Trigger, Sear & Disconnector)",
      "callout_num": "Assembly #3",
      "oem_number": "Mil-Spec 8448582 (Trigger) / 8448612 (Hammer)",
      "assembly": "Lower Receiver Fire Control Group",
      "tolerances": "Trigger pull: 5.5 to 8.5 lbs (Mil-Spec duty). Sear engagement overlap: 0.025\" to 0.035\". Disconnector clearance to hammer hook: 0.003\" to 0.008\" when trigger held back.",
      "malfunctions": "Hammer follow (accidental burst or dead trigger) if disconnector spring installed upside down (large flared coil MUST face downward into trigger recess).",
      "maintenance": "Stone primary hammer hook flat without changing 90\u00b0 angle. Light moly grease on hammer notch and disconnector nose. Ensure hammer spring legs rest on trigger pin grooves.",
      "norm_x": 0.48,
      "norm_y": 0.62,
      "norm_r": 0.12
    },
    {
      "id": "ar15_barrel_gas_block",
      "name": "Barrel, Low-Profile Gas Block & Gas Tube",
      "callout_num": "Assembly #4",
      "oem_number": "Mil-Spec 8448567 (Gas Tube)",
      "assembly": "Gas Impingement & Barrel Group",
      "tolerances": "Gas port diameter: 0.063\" (14.5\" Carbine) / 0.076\" (16\" Mid-length) / 0.093\" (20\" Rifle). Barrel nut torque: 30 to 80 ft-lbs with Aeroshell 33MS grease.",
      "malfunctions": "Short stroking if gas block misaligned over port; bent gas tube binding inside carrier key during final 1/2\" of bolt lockup.",
      "maintenance": "Dimple barrel under gas block set screws to prevent vibration walking. Use blue Loctite 242 or rocksett on set screws. Align gas tube free-floating into carrier key.",
      "norm_x": 0.25,
      "norm_y": 0.28,
      "norm_r": 0.15
    },
    {
      "id": "ar15_buffer_assembly",
      "name": "Receiver Extension (Buffer Tube), Spring & Carbine Buffer",
      "callout_num": "Assembly #5",
      "oem_number": "Mil-Spec 8448589 (Buffer H/H2)",
      "assembly": "Counter-Recoil & Stock Group",
      "tolerances": "Carbine buffer spring free length: 10.25\" minimum (replace if < 10.125\"). Buffer weight: Carbine 3.0 oz / H 3.8 oz / H2 4.6 oz.",
      "malfunctions": "Bolt bounce resulting in light primer strikes during rapid fire if standard 3.0 oz buffer used in over-gassed carbine; buffer retainer pin shearing.",
      "maintenance": "Castle nut torque: 38 to 42 ft-lbs, securely staked into end-plate notches in at least 2 locations. Wipe buffer spring with light silicone grease.",
      "norm_x": 0.72,
      "norm_y": 0.45,
      "norm_r": 0.13
    }
  ],
  "Colt_1911_Pistols": [
    {
      "id": "1911_barrel_bushing",
      "name": "Match Grade Barrel Bushing & Recoil Plug",
      "callout_num": "Part #4",
      "oem_number": "Colt 50134 / EGW Bushing",
      "assembly": "Muzzle & Lockup Alignment Group",
      "tolerances": "Bushing-to-slide clearance: 0.0005\" to 0.001\" (finger tight on match fit). Bushing-to-barrel clearance: 0.001\" to 0.0015\" at lockup; relieved 0.003\" at 6 o'clock for tilt.",
      "malfunctions": "Accuracy dispersion / wandering groups if loose; barrel springing / failure to unlock if bushing skirt binds barrel during link-down tilt.",
      "maintenance": "Turn bushing in slide by hand or bushing wrench. Deburr inside bottom bevel so barrel clears during 1\u00b0 link-down unlocked stroke.",
      "norm_x": 0.2,
      "norm_y": 0.32,
      "norm_r": 0.11
    },
    {
      "id": "1911_sear_hammer",
      "name": "Sear, Hammer & Disconnector Match Group",
      "callout_num": "Part #18 & #20",
      "oem_number": "Colt 50165 (Sear) / 50161 (Hammer)",
      "assembly": "Fire Control & Match Ignition Group",
      "tolerances": "Sear nose primary angle: 90\u00b0 to hammer hooks with 0.020\" to 0.022\" hook height. Escape angle bevel: 45\u00b0 across rear 1/3 of sear nose. Trigger pull: 3.5 to 4.5 lbs.",
      "malfunctions": "Hammer follow to half-cock notch when slide slams home (sear bounce); trigger creep or gritty break if hooks uneven.",
      "maintenance": "Use trueing jig with 0.020\" feeler gauge. Stone hooks square to 90\u00b0. Tune 3-leaf sear spring: left leaf = sear (18-20 oz), middle leaf = disconnector/trigger (16-18 oz).",
      "norm_x": 0.58,
      "norm_y": 0.48,
      "norm_r": 0.12
    },
    {
      "id": "1911_extractor",
      "name": "Internal Spring-Steel Extractor (Tuned)",
      "callout_num": "Part #12",
      "oem_number": "Colt 50148",
      "assembly": "Slide & Breechface Group",
      "tolerances": "Tension: 24 to 28 oz claw retention force on a rimmed dummy round. Hook-to-breechface clearance: 0.075\" to 0.080\". Claw bevel: 0.015\" radius at bottom locating pad.",
      "malfunctions": "Failure to extract; stovepipe; round hangs on 45\u00b0 feed angle if hook digs into cartridge rim bevel.",
      "maintenance": "Remove and hand-radius bottom front corner of claw so rim slides upward smoothly under extractor during feeding. Adjust bow curvature with extractor tension gauge.",
      "norm_x": 0.65,
      "norm_y": 0.28,
      "norm_r": 0.09
    },
    {
      "id": "1911_barrel_link",
      "name": "Barrel Link & Slide Stop Cross Pin (#3 Standard)",
      "callout_num": "Part #6",
      "oem_number": "Colt 50138 (Link .278\" Standard #3)",
      "assembly": "Lower Lug Timing & Linkage Group",
      "tolerances": "Link center-to-center: 0.278\" (Std #3) / #1 (.274\") to #5 (.282\"). Link-down clearance between barrel bed and barrel bottom: 0.010\" minimum to prevent barrel impact on frame.",
      "malfunctions": "Sheared barrel link pin or broken lower barrel lugs if link takes recoil impact instead of vertical frame impact surface (VIS).",
      "maintenance": "Inspect frame VIS (vertical impact surface). Bow-tie relief cut on frame ensures barrel lower lugs hit VIS squarely, not on link.",
      "norm_x": 0.38,
      "norm_y": 0.42,
      "norm_r": 0.1
    }
  ],
  "Beretta_Pistols": [
    {
      "id": "beretta_locking_block",
      "name": "Falling Locking Block Assembly & Retaining Plunger",
      "callout_num": "Part #6",
      "oem_number": "Beretta Gen 3 C95383",
      "assembly": "Barrel & Falling Block Lockup Group",
      "tolerances": "Locking wing thickness: 0.128\" to 0.130\". Plunger free stroke: 0.080\". Block wings must enter slide recesses with zero binding and < 0.003\" lateral play.",
      "malfunctions": "Wing fracture at root radius (catastrophic slide freeze) if fired beyond 15,000 rounds with early Gen 1/2 sharp-corner block; failure to unlock.",
      "maintenance": "Install updated Gen 3 locking block with radiused bottom corners and corresponding Gen 3 plunger. Replace locking block every 15,000 to 20,000 rounds on service guns.",
      "norm_x": 0.36,
      "norm_y": 0.38,
      "norm_r": 0.12
    },
    {
      "id": "beretta_trigger_bar",
      "name": "External Trigger Bar & Disconnector Cam",
      "callout_num": "Part #23",
      "oem_number": "Beretta C54631",
      "assembly": "Frame External Fire Control Group",
      "tolerances": "Trigger bar spring seating depth in groove: 0.040\". Single-action sear trip travel: 0.060\". Double-action cocking stroke: 0.375\".",
      "malfunctions": "Double-action failure to cock or drop hammer if trigger bar spring slips out of lower notch; trigger fails to reset forward.",
      "maintenance": "Ensure mouse-trap trigger bar spring leg is correctly hooked into bottom notch of bar. Light grease on top disconnector cam lug where slide rides over it.",
      "norm_x": 0.52,
      "norm_y": 0.52,
      "norm_r": 0.11
    },
    {
      "id": "beretta_recoil_assembly",
      "name": "Recoil Spring & Fluted Steel Guide Rod",
      "callout_num": "Part #4",
      "oem_number": "Beretta C54627 (Steel Rod) / Spring 13 lbs",
      "assembly": "Counter-Recoil Group",
      "tolerances": "Spring free length: 5.50\" (replace if < 4.75\"). Factory spring weight: 13.0 lbs standard 9mm.",
      "malfunctions": "Cracked frame rail stops or premature locking block wing fatigue if recoil spring weakened; slide short-stroking if spring binds.",
      "maintenance": "Replace recoil spring every 3,000 to 5,000 rounds. Keep flutes on guide rod clean of grit. Inspect front slide tunnel for peening.",
      "norm_x": 0.28,
      "norm_y": 0.36,
      "norm_r": 0.12
    }
  ],
  "Remington_870_Shotgun": [
    {
      "id": "rem870_breech_bolt",
      "name": "Breech Bolt & Overhead Locking Block",
      "callout_num": "Part #12 & #14",
      "oem_number": "Remington F16377 (Bolt) / F16382 (Locking Block)",
      "assembly": "Bolt & Barrel Extension Lockup Group",
      "tolerances": "Locking block lug engagement in barrel extension notch: 100% full engagement depth (0.125\"). Headspace: 0.054\" to 0.068\" rim thickness for 12 Ga.",
      "malfunctions": "Forend locks forward and cannot be pumped after firing if locking block fails to drop; excessive headspace causing hull separation.",
      "maintenance": "Stone top locking lug surfaces if burred from heavy 3\" magnum shells. Verify slide action bars properly cam locking block down during rearward pump stroke.",
      "norm_x": 0.42,
      "norm_y": 0.38,
      "norm_r": 0.13
    },
    {
      "id": "rem870_shell_latches",
      "name": "Left & Right Shell Latches (Staked into Receiver)",
      "callout_num": "Part #32 & #34",
      "oem_number": "Remington F16398 (Left) / F16400 (Right)",
      "assembly": "Receiver Feed Management Group",
      "tolerances": "Latch protrusion into receiver feedway: 0.065\" to 0.080\". Latch staking: dual center-punch staking in factory receiver staking channels.",
      "malfunctions": "Double feed (two shells dump into receiver under carrier); shells hang inside magazine tube if latch spring tension excessive.",
      "maintenance": "Use Remington factory shell latch staking tool (F41180) to restake loose latches. Check for straightness; do not over-bend or crack spring steel.",
      "norm_x": 0.48,
      "norm_y": 0.5,
      "norm_r": 0.11
    },
    {
      "id": "rem870_extractor",
      "name": "Milled Tool Steel Extractor & Plunger",
      "callout_num": "Part #16",
      "oem_number": "Remington F16176 (Machined Non-MIM Police Part)",
      "assembly": "Breech Bolt Extraction Group",
      "tolerances": "Claw engagement depth: 0.045\". Spring tension: must snap briskly over rim of gauge case under light thumb pressure.",
      "malfunctions": "Fired hull stuck in hot chamber with torn rim; slip-over failure to extract on cheap steel-base promo hulls.",
      "maintenance": "Replace cast/MIM extractor with forged tool-steel Remington Police extractor. Hone rough chamber walls with 400-grit flex hone on cleaning rod chucked in drill.",
      "norm_x": 0.35,
      "norm_y": 0.34,
      "norm_r": 0.09
    }
  ],
  "Ruger_1022_Carbine": [
    {
      "id": "ruger_1022_bolt",
      "name": "Recoil Bolt with Hardened Firing Pin & Extractor",
      "callout_num": "Part #1",
      "oem_number": "Ruger B-10 (Bolt) / B-11 (Firing Pin)",
      "assembly": "Blowback Bolt & Firing Mechanism",
      "tolerances": "Headspace depth (rim recess in bolt face): 0.0425\" (match minimum) to 0.048\" (factory max). Firing pin protrusion: 0.035\" to 0.040\".",
      "malfunctions": "Light primer strikes; erratic ignition; stovepipe jams if extractor claw loses sharp edge or dirt packs in claw recess.",
      "maintenance": "Pin firing pin down with cross-roll pin to prevent pin from rising during strike. Surface grind bolt face to 0.043\" headspace for match-grade consistency.",
      "norm_x": 0.45,
      "norm_y": 0.36,
      "norm_r": 0.12
    },
    {
      "id": "ruger_1022_v_block",
      "name": "Barrel V-Block Clamp & Retaining Hex Screws",
      "callout_num": "Part #14",
      "oem_number": "Ruger B-69 (V-Block) / B-68 (Screws)",
      "assembly": "Barrel-to-Receiver Retention Group",
      "tolerances": "V-Block hex screw torque: 15 to 20 in-lbs (NEVER exceed 25 in-lbs to avoid pulling barrel downward out of bore axis). Barrel tenon fit: 0.0005\" slip/snug fit.",
      "malfunctions": "Barrel droop causing rifle to shoot low beyond scope elevation adjustment; loose screws causing erratic wandering groups.",
      "maintenance": "Tighten both screws alternately in 5 in-lb increments to keep clamping pressure uniform. Install Gunsmither elevation locking block if barrel droop persists.",
      "norm_x": 0.32,
      "norm_y": 0.44,
      "norm_r": 0.1
    },
    {
      "id": "ruger_1022_trigger_group",
      "name": "Polymer/Aluminum Trigger Housing & Sear Assembly",
      "callout_num": "Part #20",
      "oem_number": "Ruger B-7 (Trigger Housing Group)",
      "assembly": "Trigger & Disconnector Group",
      "tolerances": "Trigger pull: 4.5 to 6.0 lbs (factory) / 2.0 to 2.5 lbs (tuned target). Sear hook engagement: 0.018\" to 0.022\".",
      "malfunctions": "Trigger reset failure if trigger plunger spring binds; gritty pull if stamped sear face has shear burrs from stamping die.",
      "maintenance": "Polish trigger return plunger inside its tunnel. True sear notch with Arkansas hard translucent stone. Install Wolff reduced power trigger spring.",
      "norm_x": 0.52,
      "norm_y": 0.58,
      "norm_r": 0.12
    }
  ]
};

window.STATIC_CATEGORY_PARTS = {
  "Pistols": [
    {
      "id": "generic_barrel",
      "name": "Breech Locking Barrel & Feed Ramp",
      "callout_num": "Part #1",
      "oem_number": "Factory Spec Barrel",
      "assembly": "Barrel & Chamber Assembly",
      "tolerances": "Headspace: GO to NO-GO gauge clearance. Feed ramp angle: 32\u00b0 to 34\u00b0 mirror polish without rounding the chamber corner edge.",
      "malfunctions": "Nose-up feeding jams if ramp pitted or rough; failure to lock into battery if locking hood carbon fouled.",
      "maintenance": "Inspect throat for erosion or lead fouling. Mirror-polish feed ramp with felt bob and polishing paste.",
      "norm_x": 0.25,
      "norm_y": 0.3,
      "norm_r": 0.14
    },
    {
      "id": "generic_slide",
      "name": "Milled Steel Slide Assembly",
      "callout_num": "Part #2",
      "oem_number": "Breech Slide Assembly",
      "assembly": "Slide & Breech Face Group",
      "tolerances": "Slide-to-frame rail runout: 0.004\" to 0.008\" clearance. Breech face squareness: 90\u00b0 \u00b1 0\u00b015'.",
      "malfunctions": "Sluggish slide velocity; slide binding on frame rails if dirt packed into rail tracks.",
      "maintenance": "Apply one small drop of gun oil to each frame rail groove. Inspect breech face for firing pin hole cratering.",
      "norm_x": 0.5,
      "norm_y": 0.25,
      "norm_r": 0.18
    },
    {
      "id": "generic_trigger_sear",
      "name": "Trigger, Sear & Disconnector Group",
      "callout_num": "Part #3",
      "oem_number": "Fire Control Assembly",
      "tolerances": "Sear engagement: minimum 0.020\" overlap. Trigger pull weight: factory specification standard.",
      "malfunctions": "Double firing or failure to reset if disconnector spring weak or sear interface altered.",
      "maintenance": "Clean all pivot pins; stone sear primary facet square without rounding off edge. Apply moly paste to sear notch.",
      "norm_x": 0.5,
      "norm_y": 0.6,
      "norm_r": 0.14
    },
    {
      "id": "generic_recoil_spring",
      "name": "Recoil Spring & Guide Rod Assembly",
      "callout_num": "Part #4",
      "oem_number": "Recoil Counter-Recoil Assembly",
      "tolerances": "Spring free length within 10% of factory new spec. Standard rated poundage maintained.",
      "malfunctions": "Frame battering and failure to go into battery if spring fatigued or broken.",
      "maintenance": "Replace recoil spring every 3,000 to 5,000 rounds. Keep guide rod clean and lightly oiled.",
      "norm_x": 0.3,
      "norm_y": 0.4,
      "norm_r": 0.12
    },
    {
      "id": "generic_extractor",
      "name": "Spring Extractor & Plunger Assembly",
      "callout_num": "Part #5",
      "oem_number": "Extractor Claw Assembly",
      "tolerances": "Claw bite: full rim contact. Spring retention force: positive grip across full cycling stroke.",
      "malfunctions": "Stovepipes, case slipping off claw, or failure to extract from tight chamber.",
      "maintenance": "Remove and clean claw groove of brass shavings and carbon. Check claw face under 10x magnification.",
      "norm_x": 0.65,
      "norm_y": 0.28,
      "norm_r": 0.1
    }
  ],
  "Rifles & Carbines": [
    {
      "id": "generic_bolt_assembly",
      "name": "Breech Bolt & Rotary Locking Lugs",
      "callout_num": "Part #1",
      "oem_number": "Breech Bolt Assembly",
      "assembly": "Bolt & Action Lockup Group",
      "tolerances": "Headspace: GO to NO-GO gauge clearance. Lug engagement: minimum 80% contact on both locking surfaces checked with Dykem.",
      "malfunctions": "Ruptured cases or blown primers if headspace excessive; stiff bolt lift if lugs galling.",
      "maintenance": "Lube rear locking lug faces with high-pressure synthetic grease. Clean bolt face and extractor groove thoroughly.",
      "norm_x": 0.5,
      "norm_y": 0.35,
      "norm_r": 0.16
    },
    {
      "id": "generic_chamber_barrel",
      "name": "Barrel, Chamber & Muzzle Crown",
      "callout_num": "Part #2",
      "oem_number": "Precision Rifled Barrel",
      "assembly": "Barrel & Barrel Extension Group",
      "tolerances": "Muzzle crown: 11\u00b0 target crown or 90\u00b0 recessed step with zero burrs. Bore straightness: < 0.001\" runout.",
      "malfunctions": "Loss of accuracy and fliers if crown nicked; throat erosion increasing bullet jump.",
      "maintenance": "Use brass bore guide and coated rod from breech end. Never pull steel brush backward over crown.",
      "norm_x": 0.25,
      "norm_y": 0.32,
      "norm_r": 0.18
    },
    {
      "id": "generic_trigger_housing",
      "name": "Trigger Mechanism & Safety Assembly",
      "callout_num": "Part #3",
      "oem_number": "Fire Control & Safety Group",
      "tolerances": "Trigger pull weight: factory specification. Safety block: 100% mechanical isolation of sear movement.",
      "malfunctions": "Accidental discharge upon bump test if sear engagement inadequate or safety worn.",
      "maintenance": "Run drop test / mallet bump test with empty chamber. Do not allow oil to gum inside enclosed trigger box.",
      "norm_x": 0.52,
      "norm_y": 0.62,
      "norm_r": 0.14
    }
  ],
  "Shotguns": [
    {
      "id": "generic_shotgun_barrel",
      "name": "Shotgun Barrel with Choke & Locking Extension",
      "callout_num": "Part #1",
      "oem_number": "Smoothbore Barrel Assembly",
      "assembly": "Barrel & Extension Group",
      "tolerances": "Choke concentricity: within 0.002\" of bore centerline. Chamber length: matches hull marking (2\u00be\" or 3\").",
      "malfunctions": "Bulged barrel if fired with obstruction; stuck empty hulls if chamber rusted or pitted.",
      "maintenance": "Hone chamber smooth with 400-grit flex hone. Keep choke tube threads clean and coated with anti-seize grease.",
      "norm_x": 0.25,
      "norm_y": 0.32,
      "norm_r": 0.18
    },
    {
      "id": "generic_shotgun_bolt",
      "name": "Breech Bolt & Action Slide Assembly",
      "callout_num": "Part #2",
      "oem_number": "Breech Mechanism Group",
      "tolerances": "Headspace: 0.054\" to 0.068\" rim thickness. Locking block full engagement into barrel notch.",
      "malfunctions": "Failure to unlock or stiff pump action after firing heavy field loads.",
      "maintenance": "Check slide bar alignment. Lubricate bolt slide tracks with light machine oil.",
      "norm_x": 0.45,
      "norm_y": 0.4,
      "norm_r": 0.15
    }
  ]
};
