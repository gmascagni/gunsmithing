// Static firearms repository data for GitHub Pages deployment
window.STATIC_FIREARMS_DATA = {
  "Lewis_Automatic_Machine_Gun": {
    "id": "Lewis_Automatic_Machine_Gun",
    "name": "Lewis Automatic Machine Gun",
    "subtitle": "Model 1914 / 1917 / 1918 (.303 British & .30-06 Springfield)",
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
    ],
    "manuals": [
      {
        "id": "1917_American_Machinist_Manufacture_of_the_Lewis_Machine_Gun.pdf",
        "title": "1917 American Machinist Manufacture of the Lewis Machine Gun",
        "filename": "1917_American_Machinist_Manufacture_of_the_Lewis_Machine_Gun.pdf",
        "size_mb": 9.5,
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1917_American_Machinist_Manufacture_of_the_Lewis_Machine_Gun.pdf",
        "local_url": "/api/manuals/Lewis_Automatic_Machine_Gun/1917_American_Machinist_Manufacture_of_the_Lewis_Machine_Gun.pdf"
      },
      {
        "id": "1917_British_Instruction_on_the_Lewis_Automatic_Machine_Gun.pdf",
        "title": "1917 British Instruction on the Lewis Automatic Machine Gun",
        "filename": "1917_British_Instruction_on_the_Lewis_Automatic_Machine_Gun.pdf",
        "size_mb": 4.58,
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1917_British_Instruction_on_the_Lewis_Automatic_Machine_Gun.pdf",
        "local_url": "/api/manuals/Lewis_Automatic_Machine_Gun/1917_British_Instruction_on_the_Lewis_Automatic_Machine_Gun.pdf"
      },
      {
        "id": "1917_Savage_Arms_Lewis_Machine_Gun_Handbook.pdf",
        "title": "1917 Savage Arms Lewis Machine Gun Handbook",
        "filename": "1917_Savage_Arms_Lewis_Machine_Gun_Handbook.pdf",
        "size_mb": 3.09,
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1917_Savage_Arms_Lewis_Machine_Gun_Handbook.pdf",
        "local_url": "/api/manuals/Lewis_Automatic_Machine_Gun/1917_Savage_Arms_Lewis_Machine_Gun_Handbook.pdf"
      },
      {
        "id": "1918_RAF_Instructional_Notes_on_the_Lewis_Gun.pdf",
        "title": "1918 RAF Instructional Notes on the Lewis Gun",
        "filename": "1918_RAF_Instructional_Notes_on_the_Lewis_Gun.pdf",
        "size_mb": 2.98,
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1918_RAF_Instructional_Notes_on_the_Lewis_Gun.pdf",
        "local_url": "/api/manuals/Lewis_Automatic_Machine_Gun/1918_RAF_Instructional_Notes_on_the_Lewis_Gun.pdf"
      },
      {
        "id": "1940_UK_Armourers_Handbook_Part_III_Light_Machine_Guns.pdf",
        "title": "1940 UK Armourers Handbook Part III Light Machine Guns",
        "filename": "1940_UK_Armourers_Handbook_Part_III_Light_Machine_Guns.pdf",
        "size_mb": 53.29,
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1940_UK_Armourers_Handbook_Part_III_Light_Machine_Guns.pdf",
        "local_url": "/api/manuals/Lewis_Automatic_Machine_Gun/1940_UK_Armourers_Handbook_Part_III_Light_Machine_Guns.pdf"
      },
      {
        "id": "1940_UK_Guns_for_the_Home_Guard_Lewis.pdf",
        "title": "1940 UK Guns for the Home Guard Lewis",
        "filename": "1940_UK_Guns_for_the_Home_Guard_Lewis.pdf",
        "size_mb": 20.7,
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1940_UK_Guns_for_the_Home_Guard_Lewis.pdf",
        "local_url": "/api/manuals/Lewis_Automatic_Machine_Gun/1940_UK_Guns_for_the_Home_Guard_Lewis.pdf"
      },
      {
        "id": "1942_Manual_of_Modern_Automatic_Guns.pdf",
        "title": "1942 Manual of Modern Automatic Guns",
        "filename": "1942_Manual_of_Modern_Automatic_Guns.pdf",
        "size_mb": 3.81,
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1942_Manual_of_Modern_Automatic_Guns.pdf",
        "local_url": "/api/manuals/Lewis_Automatic_Machine_Gun/1942_Manual_of_Modern_Automatic_Guns.pdf"
      },
      {
        "id": "1942_UK_How_to_Remedy_and_Prevent_Stoppages.pdf",
        "title": "1942 UK How to Remedy and Prevent Stoppages",
        "filename": "1942_UK_How_to_Remedy_and_Prevent_Stoppages.pdf",
        "size_mb": 15.83,
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Lewis_Automatic_Machine_Gun/manuals/1942_UK_How_to_Remedy_and_Prevent_Stoppages.pdf",
        "local_url": "/api/manuals/Lewis_Automatic_Machine_Gun/1942_UK_How_to_Remedy_and_Prevent_Stoppages.pdf"
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
  "Glock_Pistols": {
    "id": "Glock_Pistols",
    "name": "Glock Safe-Action Pistols",
    "subtitle": "Generations 1\u20135 (9x19mm, .40 S&W, .45 ACP, 10mm Auto)",
    "specs": {
      "cruciform_sear_engagement": "\u2265 66% (minimum 2/3 sear overlap) verified via orange armorer inspection cover plate (SP 02096)",
      "connector_gap": "0.005\" to 0.010\" clearance between connector top tab and trigger housing wall",
      "trigger_pull_weight": "5.5 lbs (Standard 5.5 connector) / 4.5 lbs (Dot/Minus connector)",
      "lubrication_discipline": "Strict 5-Drop rule; ZERO lubricant in striker channel, striker sleeve, or safety plunger hole",
      "recoil_spring_lifespan": "3,000\u20135,000 rounds (Gen 1\u20133 flat spring) / 5,000\u20137,500 rounds (Gen 4\u20135 dual-nested assembly)",
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
          "Disconnected, broken, or incorrectly oriented trigger return spring (Gen 1\u20134 coil spring).",
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
        "title": "The Famous 25\u00a2 Glock Trigger Polish Job",
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
    ],
    "manuals": [
      {
        "id": "Glock_Armorers_Manual_Gen_1_to_5.pdf",
        "title": "Glock Armorers Manual Gen 1 to 5",
        "filename": "Glock_Armorers_Manual_Gen_1_to_5.pdf",
        "size_mb": 22.48,
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Glock_Pistols/manuals/Glock_Armorers_Manual_Gen_1_to_5.pdf",
        "local_url": "/api/manuals/Glock_Pistols/Glock_Armorers_Manual_Gen_1_to_5.pdf"
      },
      {
        "id": "Glock_Factory_Armorers_Manual.pdf",
        "title": "Glock Factory Armorers Manual",
        "filename": "Glock_Factory_Armorers_Manual.pdf",
        "size_mb": 6.35,
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
  "Ruger_Firearms": {
    "id": "Ruger_Firearms",
    "name": "Ruger Firearms Technical Collection",
    "subtitle": "10/22 Carbine, Mark I\u2013IV Target Pistols & GP100 Revolvers",
    "specs": {
      "10_22_takedown_action_screw": "15 to 20 in-lbs (wood/synthetic stock) / 25 in-lbs (pillar bedding)",
      "10_22_v_block_clamp_screws": "25 to 30 in-lbs (tighten evenly in alternation; do NOT overtighten to avoid barrel droop)",
      "10_22_bolt_headspace_depth": "0.0425\" to 0.0435\" rim recess depth (precision match spec)",
      "mark_series_bolt_headspace": "0.042\" to 0.044\" rim recess depth",
      "gp100_barrel_cylinder_gap": "0.004\" to 0.007\" nominal feeler gauge clearance (0.008\" maximum service limit)",
      "gp100_cylinder_endshake": "\u2264 0.002\" maximum allowable axial play",
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
        "action": "Armorer Remedy: Scrape wax from extractor pocket with brass pick; install wire-EDM hardened sharp-hook extractor (Volquartsen / Kidd); verify V-block torqued evenly to 25\u201330 in-lbs."
      },
      {
        "position": "10/22 Rotary Magazine Feed Failure / Nose-Dive",
        "short_desc": "Cartridge tip strikes below chamber mouth; rotor fails to advance round into feedway",
        "causes": [
          "Weak rotor clock spring tension.",
          "Powder residue and bullet wax binding the 10-round polymer rotor flutes."
        ],
        "action": "Armorer Remedy: Disassemble magazine, scrub rotor flutes with solvent, pre-load spiral spring exactly 1-1/4 turns (450\u00b0) counter-clockwise before tightening central hex nut."
      },
      {
        "position": "Ruger Mark I/II/III Locked Bolt / Jammed Reassembly",
        "short_desc": "Pistol reassembled but bolt cannot be retracted or trigger will not trip sear",
        "causes": [
          "Hammer strut missed the mainspring housing plunger cup and lodged against frame cross-pin."
        ],
        "action": "Armorer Remedy: NEVER force bolt with hammer. Invert pistol muzzle 45\u00b0 upward, pull trigger to drop hammer forward, point muzzle upward so strut dangles freely into the mainspring housing cup, then latch closed."
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
        "summary": "Disassembling the 10-round rotary spool magazine and pre-loading the rotor clock spring by exactly 1-1/4 turns (450\u00b0) before cinching the central nut."
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
    ],
    "manuals": [
      {
        "id": "Ruger_10_22_Carbine_Manual.pdf",
        "title": "Ruger 10 22 Carbine Manual",
        "filename": "Ruger_10_22_Carbine_Manual.pdf",
        "size_mb": 2.18,
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Ruger_Firearms/manuals/Ruger_10_22_Carbine_Manual.pdf",
        "local_url": "/api/manuals/Ruger_Firearms/Ruger_10_22_Carbine_Manual.pdf"
      },
      {
        "id": "Ruger_GP100_Revolver_Manual.pdf",
        "title": "Ruger GP100 Revolver Manual",
        "filename": "Ruger_GP100_Revolver_Manual.pdf",
        "size_mb": 1.77,
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Ruger_Firearms/manuals/Ruger_GP100_Revolver_Manual.pdf",
        "local_url": "/api/manuals/Ruger_Firearms/Ruger_GP100_Revolver_Manual.pdf"
      },
      {
        "id": "Ruger_Mark_I_Standard_Pistol_Manual.pdf",
        "title": "Ruger Mark I Standard Pistol Manual",
        "filename": "Ruger_Mark_I_Standard_Pistol_Manual.pdf",
        "size_mb": 1.58,
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Ruger_Firearms/manuals/Ruger_Mark_I_Standard_Pistol_Manual.pdf",
        "local_url": "/api/manuals/Ruger_Firearms/Ruger_Mark_I_Standard_Pistol_Manual.pdf"
      }
    ],
    "schematics": [
      {
        "id": "Ruger_10_22_Carbine_Manual_p001_01.png",
        "title": "Ruger 10 22 Carbine Manual p001 01",
        "filename": "Ruger_10_22_Carbine_Manual_p001_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_10_22_Carbine_Manual_p001_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_10_22_Carbine_Manual_p001_01.png"
      },
      {
        "id": "Ruger_10_22_Carbine_Manual_p002_01.png",
        "title": "Ruger 10 22 Carbine Manual p002 01",
        "filename": "Ruger_10_22_Carbine_Manual_p002_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_10_22_Carbine_Manual_p002_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_10_22_Carbine_Manual_p002_01.png"
      },
      {
        "id": "Ruger_10_22_Carbine_Manual_p003_01.png",
        "title": "Ruger 10 22 Carbine Manual p003 01",
        "filename": "Ruger_10_22_Carbine_Manual_p003_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_10_22_Carbine_Manual_p003_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_10_22_Carbine_Manual_p003_01.png"
      },
      {
        "id": "Ruger_10_22_Carbine_Manual_p004_01.png",
        "title": "Ruger 10 22 Carbine Manual p004 01",
        "filename": "Ruger_10_22_Carbine_Manual_p004_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_10_22_Carbine_Manual_p004_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_10_22_Carbine_Manual_p004_01.png"
      },
      {
        "id": "Ruger_10_22_Carbine_Manual_p005_01.png",
        "title": "Ruger 10 22 Carbine Manual p005 01",
        "filename": "Ruger_10_22_Carbine_Manual_p005_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_10_22_Carbine_Manual_p005_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_10_22_Carbine_Manual_p005_01.png"
      },
      {
        "id": "Ruger_10_22_Carbine_Manual_p006_01.png",
        "title": "Ruger 10 22 Carbine Manual p006 01",
        "filename": "Ruger_10_22_Carbine_Manual_p006_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_10_22_Carbine_Manual_p006_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_10_22_Carbine_Manual_p006_01.png"
      },
      {
        "id": "Ruger_10_22_Carbine_Manual_p007_01.png",
        "title": "Ruger 10 22 Carbine Manual p007 01",
        "filename": "Ruger_10_22_Carbine_Manual_p007_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_10_22_Carbine_Manual_p007_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_10_22_Carbine_Manual_p007_01.png"
      },
      {
        "id": "Ruger_10_22_Carbine_Manual_p008_01.png",
        "title": "Ruger 10 22 Carbine Manual p008 01",
        "filename": "Ruger_10_22_Carbine_Manual_p008_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_10_22_Carbine_Manual_p008_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_10_22_Carbine_Manual_p008_01.png"
      },
      {
        "id": "Ruger_10_22_Carbine_Manual_p009_01.png",
        "title": "Ruger 10 22 Carbine Manual p009 01",
        "filename": "Ruger_10_22_Carbine_Manual_p009_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_10_22_Carbine_Manual_p009_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_10_22_Carbine_Manual_p009_01.png"
      },
      {
        "id": "Ruger_10_22_Carbine_Manual_p010_01.png",
        "title": "Ruger 10 22 Carbine Manual p010 01",
        "filename": "Ruger_10_22_Carbine_Manual_p010_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_10_22_Carbine_Manual_p010_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_10_22_Carbine_Manual_p010_01.png"
      },
      {
        "id": "Ruger_10_22_Carbine_Manual_p011_01.png",
        "title": "Ruger 10 22 Carbine Manual p011 01",
        "filename": "Ruger_10_22_Carbine_Manual_p011_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_10_22_Carbine_Manual_p011_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_10_22_Carbine_Manual_p011_01.png"
      },
      {
        "id": "Ruger_10_22_Carbine_Manual_p012_01.png",
        "title": "Ruger 10 22 Carbine Manual p012 01",
        "filename": "Ruger_10_22_Carbine_Manual_p012_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_10_22_Carbine_Manual_p012_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_10_22_Carbine_Manual_p012_01.png"
      },
      {
        "id": "Ruger_10_22_Carbine_Manual_p013_01.png",
        "title": "Ruger 10 22 Carbine Manual p013 01",
        "filename": "Ruger_10_22_Carbine_Manual_p013_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_10_22_Carbine_Manual_p013_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_10_22_Carbine_Manual_p013_01.png"
      },
      {
        "id": "Ruger_10_22_Carbine_Manual_p014_01.png",
        "title": "Ruger 10 22 Carbine Manual p014 01",
        "filename": "Ruger_10_22_Carbine_Manual_p014_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_10_22_Carbine_Manual_p014_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_10_22_Carbine_Manual_p014_01.png"
      },
      {
        "id": "Ruger_10_22_Carbine_Manual_p015_01.png",
        "title": "Ruger 10 22 Carbine Manual p015 01",
        "filename": "Ruger_10_22_Carbine_Manual_p015_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_10_22_Carbine_Manual_p015_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_10_22_Carbine_Manual_p015_01.png"
      },
      {
        "id": "Ruger_10_22_Carbine_Manual_p016_01.png",
        "title": "Ruger 10 22 Carbine Manual p016 01",
        "filename": "Ruger_10_22_Carbine_Manual_p016_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_10_22_Carbine_Manual_p016_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_10_22_Carbine_Manual_p016_01.png"
      },
      {
        "id": "Ruger_10_22_Carbine_Manual_p017_01.png",
        "title": "Ruger 10 22 Carbine Manual p017 01",
        "filename": "Ruger_10_22_Carbine_Manual_p017_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_10_22_Carbine_Manual_p017_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_10_22_Carbine_Manual_p017_01.png"
      },
      {
        "id": "Ruger_10_22_Carbine_Manual_p018_01.png",
        "title": "Ruger 10 22 Carbine Manual p018 01",
        "filename": "Ruger_10_22_Carbine_Manual_p018_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_10_22_Carbine_Manual_p018_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_10_22_Carbine_Manual_p018_01.png"
      },
      {
        "id": "Ruger_10_22_Carbine_Manual_p019_01.png",
        "title": "Ruger 10 22 Carbine Manual p019 01",
        "filename": "Ruger_10_22_Carbine_Manual_p019_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_10_22_Carbine_Manual_p019_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_10_22_Carbine_Manual_p019_01.png"
      },
      {
        "id": "Ruger_10_22_Carbine_Manual_p020_01.png",
        "title": "Ruger 10 22 Carbine Manual p020 01",
        "filename": "Ruger_10_22_Carbine_Manual_p020_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_10_22_Carbine_Manual_p020_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_10_22_Carbine_Manual_p020_01.png"
      },
      {
        "id": "Ruger_10_22_Carbine_Manual_p021_01.png",
        "title": "Ruger 10 22 Carbine Manual p021 01",
        "filename": "Ruger_10_22_Carbine_Manual_p021_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_10_22_Carbine_Manual_p021_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_10_22_Carbine_Manual_p021_01.png"
      },
      {
        "id": "Ruger_10_22_Carbine_Manual_p022_01.png",
        "title": "Ruger 10 22 Carbine Manual p022 01",
        "filename": "Ruger_10_22_Carbine_Manual_p022_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_10_22_Carbine_Manual_p022_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_10_22_Carbine_Manual_p022_01.png"
      },
      {
        "id": "Ruger_GP100_Revolver_Manual_p011_01.png",
        "title": "Ruger GP100 Revolver Manual p011 01",
        "filename": "Ruger_GP100_Revolver_Manual_p011_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_GP100_Revolver_Manual_p011_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_GP100_Revolver_Manual_p011_01.png"
      },
      {
        "id": "Ruger_GP100_Revolver_Manual_p012_01.png",
        "title": "Ruger GP100 Revolver Manual p012 01",
        "filename": "Ruger_GP100_Revolver_Manual_p012_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_GP100_Revolver_Manual_p012_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_GP100_Revolver_Manual_p012_01.png"
      },
      {
        "id": "Ruger_GP100_Revolver_Manual_p014_01.png",
        "title": "Ruger GP100 Revolver Manual p014 01",
        "filename": "Ruger_GP100_Revolver_Manual_p014_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_GP100_Revolver_Manual_p014_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_GP100_Revolver_Manual_p014_01.png"
      },
      {
        "id": "Ruger_GP100_Revolver_Manual_p014_02.png",
        "title": "Ruger GP100 Revolver Manual p014 02",
        "filename": "Ruger_GP100_Revolver_Manual_p014_02.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_GP100_Revolver_Manual_p014_02.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_GP100_Revolver_Manual_p014_02.png"
      },
      {
        "id": "Ruger_GP100_Revolver_Manual_p016_01.png",
        "title": "Ruger GP100 Revolver Manual p016 01",
        "filename": "Ruger_GP100_Revolver_Manual_p016_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_GP100_Revolver_Manual_p016_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_GP100_Revolver_Manual_p016_01.png"
      },
      {
        "id": "Ruger_GP100_Revolver_Manual_p016_02.png",
        "title": "Ruger GP100 Revolver Manual p016 02",
        "filename": "Ruger_GP100_Revolver_Manual_p016_02.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_GP100_Revolver_Manual_p016_02.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_GP100_Revolver_Manual_p016_02.png"
      },
      {
        "id": "Ruger_GP100_Revolver_Manual_p016_03.png",
        "title": "Ruger GP100 Revolver Manual p016 03",
        "filename": "Ruger_GP100_Revolver_Manual_p016_03.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_GP100_Revolver_Manual_p016_03.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_GP100_Revolver_Manual_p016_03.png"
      },
      {
        "id": "Ruger_GP100_Revolver_Manual_p016_04.png",
        "title": "Ruger GP100 Revolver Manual p016 04",
        "filename": "Ruger_GP100_Revolver_Manual_p016_04.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_GP100_Revolver_Manual_p016_04.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_GP100_Revolver_Manual_p016_04.png"
      },
      {
        "id": "Ruger_GP100_Revolver_Manual_p017_01.png",
        "title": "Ruger GP100 Revolver Manual p017 01",
        "filename": "Ruger_GP100_Revolver_Manual_p017_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_GP100_Revolver_Manual_p017_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_GP100_Revolver_Manual_p017_01.png"
      },
      {
        "id": "Ruger_GP100_Revolver_Manual_p021_01.png",
        "title": "Ruger GP100 Revolver Manual p021 01",
        "filename": "Ruger_GP100_Revolver_Manual_p021_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_GP100_Revolver_Manual_p021_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_GP100_Revolver_Manual_p021_01.png"
      },
      {
        "id": "Ruger_GP100_Revolver_Manual_p021_03.png",
        "title": "Ruger GP100 Revolver Manual p021 03",
        "filename": "Ruger_GP100_Revolver_Manual_p021_03.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_GP100_Revolver_Manual_p021_03.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_GP100_Revolver_Manual_p021_03.png"
      },
      {
        "id": "Ruger_GP100_Revolver_Manual_p030_01.png",
        "title": "Ruger GP100 Revolver Manual p030 01",
        "filename": "Ruger_GP100_Revolver_Manual_p030_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_GP100_Revolver_Manual_p030_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_GP100_Revolver_Manual_p030_01.png"
      },
      {
        "id": "Ruger_GP100_Revolver_Manual_p032_01.png",
        "title": "Ruger GP100 Revolver Manual p032 01",
        "filename": "Ruger_GP100_Revolver_Manual_p032_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_GP100_Revolver_Manual_p032_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_GP100_Revolver_Manual_p032_01.png"
      },
      {
        "id": "Ruger_GP100_Revolver_Manual_p034_03.png",
        "title": "Ruger GP100 Revolver Manual p034 03",
        "filename": "Ruger_GP100_Revolver_Manual_p034_03.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_GP100_Revolver_Manual_p034_03.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_GP100_Revolver_Manual_p034_03.png"
      },
      {
        "id": "Ruger_Mark_I_Standard_Pistol_Manual_p001_01.png",
        "title": "Ruger Mark I Standard Pistol Manual p001 01",
        "filename": "Ruger_Mark_I_Standard_Pistol_Manual_p001_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_Mark_I_Standard_Pistol_Manual_p001_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_Mark_I_Standard_Pistol_Manual_p001_01.png"
      },
      {
        "id": "Ruger_Mark_I_Standard_Pistol_Manual_p002_01.png",
        "title": "Ruger Mark I Standard Pistol Manual p002 01",
        "filename": "Ruger_Mark_I_Standard_Pistol_Manual_p002_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_Mark_I_Standard_Pistol_Manual_p002_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_Mark_I_Standard_Pistol_Manual_p002_01.png"
      },
      {
        "id": "Ruger_Mark_I_Standard_Pistol_Manual_p003_01.png",
        "title": "Ruger Mark I Standard Pistol Manual p003 01",
        "filename": "Ruger_Mark_I_Standard_Pistol_Manual_p003_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_Mark_I_Standard_Pistol_Manual_p003_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_Mark_I_Standard_Pistol_Manual_p003_01.png"
      },
      {
        "id": "Ruger_Mark_I_Standard_Pistol_Manual_p004_01.png",
        "title": "Ruger Mark I Standard Pistol Manual p004 01",
        "filename": "Ruger_Mark_I_Standard_Pistol_Manual_p004_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_Mark_I_Standard_Pistol_Manual_p004_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_Mark_I_Standard_Pistol_Manual_p004_01.png"
      },
      {
        "id": "Ruger_Mark_I_Standard_Pistol_Manual_p005_01.png",
        "title": "Ruger Mark I Standard Pistol Manual p005 01",
        "filename": "Ruger_Mark_I_Standard_Pistol_Manual_p005_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_Mark_I_Standard_Pistol_Manual_p005_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_Mark_I_Standard_Pistol_Manual_p005_01.png"
      },
      {
        "id": "Ruger_Mark_I_Standard_Pistol_Manual_p006_01.png",
        "title": "Ruger Mark I Standard Pistol Manual p006 01",
        "filename": "Ruger_Mark_I_Standard_Pistol_Manual_p006_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_Mark_I_Standard_Pistol_Manual_p006_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_Mark_I_Standard_Pistol_Manual_p006_01.png"
      },
      {
        "id": "Ruger_Mark_I_Standard_Pistol_Manual_p007_01.png",
        "title": "Ruger Mark I Standard Pistol Manual p007 01",
        "filename": "Ruger_Mark_I_Standard_Pistol_Manual_p007_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_Mark_I_Standard_Pistol_Manual_p007_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_Mark_I_Standard_Pistol_Manual_p007_01.png"
      },
      {
        "id": "Ruger_Mark_I_Standard_Pistol_Manual_p008_01.png",
        "title": "Ruger Mark I Standard Pistol Manual p008 01",
        "filename": "Ruger_Mark_I_Standard_Pistol_Manual_p008_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_Mark_I_Standard_Pistol_Manual_p008_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_Mark_I_Standard_Pistol_Manual_p008_01.png"
      },
      {
        "id": "Ruger_Mark_I_Standard_Pistol_Manual_p009_01.png",
        "title": "Ruger Mark I Standard Pistol Manual p009 01",
        "filename": "Ruger_Mark_I_Standard_Pistol_Manual_p009_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_Mark_I_Standard_Pistol_Manual_p009_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_Mark_I_Standard_Pistol_Manual_p009_01.png"
      },
      {
        "id": "Ruger_Mark_I_Standard_Pistol_Manual_p010_01.png",
        "title": "Ruger Mark I Standard Pistol Manual p010 01",
        "filename": "Ruger_Mark_I_Standard_Pistol_Manual_p010_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_Mark_I_Standard_Pistol_Manual_p010_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_Mark_I_Standard_Pistol_Manual_p010_01.png"
      },
      {
        "id": "Ruger_Mark_I_Standard_Pistol_Manual_p011_01.png",
        "title": "Ruger Mark I Standard Pistol Manual p011 01",
        "filename": "Ruger_Mark_I_Standard_Pistol_Manual_p011_01.png",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_Mark_I_Standard_Pistol_Manual_p011_01.png",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_Mark_I_Standard_Pistol_Manual_p011_01.png"
      },
      {
        "id": "Ruger_GP100_Revolver_Manual_p001_02.jpeg",
        "title": "Ruger GP100 Revolver Manual p001 02",
        "filename": "Ruger_GP100_Revolver_Manual_p001_02.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_GP100_Revolver_Manual_p001_02.jpeg",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_GP100_Revolver_Manual_p001_02.jpeg"
      },
      {
        "id": "Ruger_GP100_Revolver_Manual_p008_01.jpeg",
        "title": "Ruger GP100 Revolver Manual p008 01",
        "filename": "Ruger_GP100_Revolver_Manual_p008_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_GP100_Revolver_Manual_p008_01.jpeg",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_GP100_Revolver_Manual_p008_01.jpeg"
      },
      {
        "id": "Ruger_GP100_Revolver_Manual_p008_02.jpeg",
        "title": "Ruger GP100 Revolver Manual p008 02",
        "filename": "Ruger_GP100_Revolver_Manual_p008_02.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_GP100_Revolver_Manual_p008_02.jpeg",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_GP100_Revolver_Manual_p008_02.jpeg"
      },
      {
        "id": "Ruger_GP100_Revolver_Manual_p031_01.jpeg",
        "title": "Ruger GP100 Revolver Manual p031 01",
        "filename": "Ruger_GP100_Revolver_Manual_p031_01.jpeg",
        "url": "https://raw.githubusercontent.com/gmascagni/gunsmithing/main/Ruger_Firearms/schematics/Ruger_GP100_Revolver_Manual_p031_01.jpeg",
        "local_url": "/api/schematics/Ruger_Firearms/Ruger_GP100_Revolver_Manual_p031_01.jpeg"
      }
    ]
  },
  "Beretta_Pistols": {
    "id": "Beretta_Pistols",
    "name": "Beretta 92 / M9 Series Pistols",
    "subtitle": "92FS, M9, 96, Brigadier & Inox (9x19mm NATO & .40 S&W)",
    "specs": {
      "operating_system": "Short recoil falling locking block (Walther P38 heritage) with non-tilting straight-line barrel",
      "locking_block_service_life": "Inspect every 5,000 rds; replace every 15,000\u201320,000 rds (Gen 3 radiused block)",
      "recoil_spring_lifespan": "3,000 to 5,000 rounds replacement interval",
      "trigger_pull_standard": "11.5\u201312.5 lbs Double Action / 4.5\u20135.0 lbs Single Action",
      "trigger_pull_d_spring": "8.0\u20138.5 lbs Double Action with factory 92D spring (100% primer ignition reliability)",
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
    ],
    "manuals": [
      {
        "id": "Beretta_92F_92FS_9mm_Manual.pdf",
        "title": "Beretta 92F 92FS 9mm Manual",
        "filename": "Beretta_92F_92FS_9mm_Manual.pdf",
        "size_mb": 3.34,
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/Beretta_Pistols/manuals/Beretta_92F_92FS_9mm_Manual.pdf",
        "local_url": "/api/manuals/Beretta_Pistols/Beretta_92F_92FS_9mm_Manual.pdf"
      },
      {
        "id": "US_Army_TM_9_1005_317_10_M9_Pistol.pdf",
        "title": "US Army TM 9 1005 317 10 M9 Pistol",
        "filename": "US_Army_TM_9_1005_317_10_M9_Pistol.pdf",
        "size_mb": 0.6,
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
  "General_Gunsmithing": {
    "id": "General_Gunsmithing",
    "name": "General Gunsmithing & Workshop Disciplines",
    "subtitle": "Headspace, Chamber Casting, Machining, Bluing & Diagnostics",
    "specs": {
      "headspace_safety_rule": "Bolt MUST close on GO gauge; bolt must NOT close on NO-GO with light finger pressure; bolt closing on FIELD is DANGEROUS/UNSAFE",
      "cerrosafe_casting_window": "Pour alloy at 160\u00b0\u2013190\u00b0F. Measure cast at EXACTLY 1 hour after pouring for 1:1 true chamber dimension",
      "barrel_target_crown": "11-degree or recessed target crown cut strictly concentric to bore axis",
      "action_glass_bedding": "Stress-free epoxy action bedding using aluminum pillars; 0.030\" tape clearance around barrel shank",
      "sear_stoning_rule": "Never alter primary sear engagement angle (keep 90\u00b0); use hard Arkansas stones only to eliminate machine marks",
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
          "Caustic tank temperature outside operating range (must be 285\u00b0\u2013292\u00b0F).",
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
        "summary": "Casting unknown chambers with Cerrosafe (160\u00b0-190\u00b0F), bore plugging, pouring, and the crucial 1-hour dimension measurement window."
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
        "summary": "Operating hot bluing tanks at 285\u00b0-292\u00b0F using sodium hydroxide and nitrate salts with boil-over precautions."
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
        "summary": "Using Norton hard Arkansas stones and fixture jigs to stone sears without altering critical 90\u00b0 angles."
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
    ],
    "manuals": [
      {
        "id": "Practical_Gunsmithing_American_Gunsmith.pdf",
        "title": "Practical Gunsmithing American Gunsmith",
        "filename": "Practical_Gunsmithing_American_Gunsmith.pdf",
        "size_mb": 44.42,
        "url": "https://github.com/gmascagni/gunsmithing/raw/main/General_Gunsmithing/manuals/Practical_Gunsmithing_American_Gunsmith.pdf",
        "local_url": "/api/manuals/General_Gunsmithing/Practical_Gunsmithing_American_Gunsmith.pdf"
      },
      {
        "id": "The_Gunsmiths_Manual_Practical_Guide.pdf",
        "title": "The Gunsmiths Manual Practical Guide",
        "filename": "The_Gunsmiths_Manual_Practical_Guide.pdf",
        "size_mb": 21.27,
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
