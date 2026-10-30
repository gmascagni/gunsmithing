# Script to append PARTS_CATALOG to web_app/firearms_data.py
from typing import Dict, List, Any

parts_code = '''

# Comprehensive Component & Armorer Parts Catalog for Visual Identification
PARTS_CATALOG: Dict[str, List[Dict[str, Any]]] = {
    "Glock_Pistols": [
        {
            "id": "glock_cruciform",
            "name": "Trigger Bar with Cruciform Sear Shelf",
            "part_number": "SP 01148 / SP 33850",
            "assembly": "Trigger Mechanism & Frame",
            "function": "Mechanical bridge connecting trigger shoe to striker lug. As trigger is pulled, cruciform moves rearward along drop safety ramp until it drops into battery clearance shelf, releasing the striker.",
            "tolerances": "CRITICAL: Minimum 66% (2/3) sear overlap with striker lug verified through orange inspection plate (SP 02096). Connector clearance: 0.005\\\" to 0.010\\\".",
            "malfunctions": "Failure to reset (bent connector); accidental discharge or burst fire if sear surface is rounded or overlap < 66%.",
            "maintenance": "Apply 1/2 drop of oil strictly where bird-head wipes across connector ramp. Mirror polish with Flitz (25c trigger job); NEVER grind or stone sear shelf.",
            "manual_ref": "Glock Armorers Manual p. 42-48",
            "video_ref": "2mszC0g_yC4",
            "keywords": ["cruciform", "trigger bar", "sear", "trigger", "reset"]
        },
        {
            "id": "glock_connector",
            "name": "Trigger Connector (5.5 lb / Dot / 4.5 lb Minus)",
            "part_number": "SP 00343 (5.5) / SP 00721 (Minus) / SP 07965 (Dot)",
            "assembly": "Trigger Mechanism Housing",
            "function": "Cam surface that cams the trigger bar cruciform downward at break and guides it upward on reset.",
            "tolerances": "Outward bend angle must hold outward spring tension against trigger housing shelf with 0.005\\\" to 0.010\\\" clearance.",
            "malfunctions": "Connector bent inward causes trigger reset failure; bent outward causes excessive slide dragging or heavy, gritty break.",
            "maintenance": "Ensure contact ramp is mirror polished and lubricated with 1 drop of oil.",
            "manual_ref": "Glock Armorers Manual p. 45",
            "video_ref": "Qh_B14eQzT4",
            "keywords": ["connector", "trigger pull", "minus", "dot", "angle"]
        },
        {
            "id": "glock_striker",
            "name": "Firing Pin / Striker Assembly",
            "part_number": "SP 04270 (9mm) / SP 04557 (.40 S&W)",
            "assembly": "Slide Assembly",
            "function": "Linear inertia striker that ignites cartridge primer when released by trigger cruciform.",
            "tolerances": "Striker free-float: Must rattle audibly front-to-back when pistol is shaken with trigger held forward. Factory spring rate: 24N (5.5 lb).",
            "malfunctions": "Light primer strikes / failure to fire if striker channel is contaminated with oil or carbon sludge; sheared firing pin tip.",
            "maintenance": "MANDATORY: Keep firing pin channel, striker sleeve, and spring cups 100% DRY. Zero oil.",
            "manual_ref": "Glock Armorers Manual p. 28-32",
            "video_ref": "kYJjQn-B-Qc",
            "keywords": ["striker", "firing pin", "light strike", "cups", "spring"]
        },
        {
            "id": "glock_fps_plunger",
            "name": "Firing Pin Safety Plunger & Spring",
            "part_number": "SP 00084 (Plunger) / SP 00091 (Spring)",
            "assembly": "Slide Assembly",
            "function": "Passive mechanical block preventing striker from reaching primer unless trigger bar lifts plunger during trigger travel.",
            "tolerances": "Thumb test: Striker lug must NOT move forward past plunger until plunger is fully depressed. Surface must be free of carbon scoring.",
            "malfunctions": "Light strikes if spring binds; risk of drop discharge if plunger is seized in depressed position.",
            "maintenance": "Clean cavity dry with solvent and Q-tip; polish dome surface with felt bob. Do not oil.",
            "manual_ref": "Glock Armorers Manual p. 30",
            "video_ref": "F0f631Z8m08",
            "keywords": ["safety plunger", "firing pin safety", "drop safety", "plunger"]
        },
        {
            "id": "glock_extractor",
            "name": "Extractor & Extractor Depressor Plunger (EDP)",
            "part_number": "SP 01899 (9mm LCI Extractor) / SP 01176 (SLB Bearing)",
            "assembly": "Slide Assembly",
            "function": "Claw extracts spent cartridge from chamber; loaded chamber indicator (LCI) ridge protrudes outward when round is chambered.",
            "tolerances": "Spring-loaded bearing color code: Black for 9mm LCI; White for .40/.357 LCI. Metal EDP rod must face forward toward extractor claw.",
            "malfunctions": "Failure to extract (FTE), stovepipes, brass thrown into shooter's face from chipped claw or wrong SLB bearing.",
            "maintenance": "Clean carbon fouling behind extractor claw hook using bronze scraper; replace EDP spring every 10,000 rounds.",
            "manual_ref": "Glock Armorers Manual p. 34-36",
            "video_ref": "ZcM9w6bYQW0",
            "keywords": ["extractor", "edp", "bearing", "stovepipe", "fte"]
        },
        {
            "id": "glock_rsa",
            "name": "Recoil Spring Assembly (RSA)",
            "part_number": "SP 01533 (Gen 3) / SP 39956 (Gen 4/5 Dual)",
            "assembly": "Slide / Frame Interface",
            "function": "Absorbs slide recoil momentum and returns slide into full forward battery strip-feeding fresh round.",
            "tolerances": "Vertical Battery Test: Point pistol 45° upward, pull slide back 1/8\\\", release gently. Slide MUST fully lock into battery unassisted.",
            "malfunctions": "Failure to go into battery (FTRTB); cracked frame tabs or slide peening if spring is exhausted (>5k rounds).",
            "maintenance": "Replace Gen 1-3 RSA every 3,000–5,000 rounds; replace Gen 4/5 dual-nested RSA every 5,000–7,500 rounds.",
            "manual_ref": "Glock Armorers Manual p. 18",
            "video_ref": "pGobEpUO3Uc",
            "keywords": ["recoil spring", "rsa", "guide rod", "battery", "ftrtb"]
        },
        {
            "id": "glock_slide_stop",
            "name": "Slide Stop Lever & Wire Spring",
            "part_number": "SP 02919 (Gen 3/4) / SP 47249 (Gen 5 Ambi)",
            "assembly": "Frame Assembly",
            "function": "Locks slide open on empty magazine follower; acts as manual slide release.",
            "tolerances": "Wire spring MUST rest underneath the top locking block pin, not over it. Free downward spring tension must snap lever down freely.",
            "malfunctions": "Premature slide lock (locking open with rounds in mag) caused by misrouted wire spring; failure to lock open on empty mag.",
            "maintenance": "Always install top locking block pin FIRST, then slide stop lever, then bottom trigger pin.",
            "manual_ref": "Glock Armorers Manual p. 50",
            "video_ref": "oV0wDDFV0NY",
            "keywords": ["slide stop", "slide lock", "lever", "wire spring"]
        },
        {
            "id": "glock_ejector",
            "name": "Ejector Bar & Trigger Mechanism Housing",
            "part_number": "30274 (9mm Gen 4/5 Update) / 47021 (Gen 5)",
            "assembly": "Trigger Housing",
            "function": "Pivoted fixed ejector blade that impacts left rim of extracted cartridge case, kicking it out through the ejection port.",
            "tolerances": "Verify tip angle and secure staking into housing. Upgrade older erratic 336 ejectors to 30274 or 47021.",
            "malfunctions": "Erratic ejection, brass to face, stovepipes from chipped or bent ejector blade.",
            "maintenance": "Clean carbon from ejector root; inspect for loose staking in polymer trigger housing.",
            "manual_ref": "Glock Armorers Manual p. 46",
            "video_ref": "ZcM9w6bYQW0",
            "keywords": ["ejector", "30274", "brass to face", "housing"]
        }
    ],

    "Ruger_Firearms": [
        {
            "id": "ruger_1022_vblock",
            "name": "10/22 Barrel V-Block Clamp & Wedge Screws",
            "part_number": "B-69 (V-Block) / B-68 (Cap Screws)",
            "assembly": "Barrel / Receiver Joint",
            "function": "Patented wedge clamp securing the unthreaded barrel tenon into the cast receiver socket.",
            "tolerances": "TORQUE SPEC: 25 to 30 in-lbs tightened evenly in alternating 5 in-lb increments. Do NOT overtighten (>35 in-lbs causes barrel droop).",
            "malfunctions": "Vertical stringing or poor accuracy if clamp screws are loose; barrel droop causing failure to feed if over-torqued.",
            "maintenance": "Degrease tenon and receiver socket; apply blue thread locker to screws before torquing with Wheeler FAT wrench.",
            "manual_ref": "Ruger 10/22 Manual p. 14",
            "video_ref": "RkLq7oUaF88",
            "keywords": ["v-block", "barrel clamp", "torque", "barrel droop", "tenon"]
        },
        {
            "id": "ruger_1022_mag_spring",
            "name": "10/22 Rotary Spool Magazine Clock Spring",
            "part_number": "B-24 (Spring) / B-23 (Rotor)",
            "assembly": "Rotary Magazine",
            "function": "Pre-tensioned clock spring rotating the cartridge rotor to present rimfire cartridges directly into feed lips.",
            "tolerances": "PRELOAD SPEC: Rotate magazine rotor exactly 1-1/4 full turns (450 degrees) before cinching central allen nut.",
            "malfunctions": "Failure to feed, nose-down cartridge jam, sluggish follower rotation from weak spring tension or carbon buildup.",
            "maintenance": "Disassemble and clean polymer rotor dry; do NOT oil magazine interior (wet oil attracts wax/lead sludge).",
            "manual_ref": "Ruger 10/22 Manual p. 18",
            "video_ref": "wX-yV2kP7q0",
            "keywords": ["rotary magazine", "mag spring", "spool", "rotor", "feed"]
        },
        {
            "id": "ruger_1022_extractor",
            "name": "10/22 Bolt & Hardened Extractor",
            "part_number": "B-14 (Bolt) / B-11 (Extractor Claw)",
            "assembly": "Bolt Assembly",
            "function": "Grips rimfire cartridge rim during recoil travel; guides empty casing into frame ejector.",
            "tolerances": "Bolt Headspace (Rim Recess Depth): 0.0425\\\" to 0.0435\\\" match grade depth. Extractor hook angle must be < 90 degrees.",
            "malfunctions": "Stovepipes, spent cases left in chamber from rounded factory stamped extractor claw.",
            "maintenance": "Upgrade to wire-EDM hardened sharp-hook extractor (Volquartsen/Kidd); clean carbon ring in chamber.",
            "manual_ref": "Ruger 10/22 Manual p. 12",
            "video_ref": "RkLq7oUaF88",
            "keywords": ["extractor", "headspace", "bolt", "stovepipe"]
        },
        {
            "id": "ruger_mark_hammer_strut",
            "name": "Mark I–IV Hammer Strut & Mainspring Housing Cup",
            "part_number": "MS01100 (Hammer Strut) / MS01200 (Housing)",
            "assembly": "Mainspring & Grip Frame",
            "function": "Pivoting strut transmits compressed mainspring energy from the rear housing cup into the hammer.",
            "tolerances": "CRITICAL REASSEMBLY RULE: Tip of dangling hammer strut MUST seat squarely inside mainspring cup before closing housing latch.",
            "malfunctions": "PISTOL COMPLETELY SEIZED: If strut misses cup and lodges behind cross pin, bolt cannot move and gun locks up solid.",
            "maintenance": "Use gravity swing technique: tilt muzzle upward 60° to swing loose strut rearward into cup before snapping latch shut.",
            "manual_ref": "Ruger Mark I Manual p. 6-8",
            "video_ref": "b4Owh_qH_5k",
            "keywords": ["hammer strut", "mainspring housing", "takedown", "seized", "reassembly"]
        },
        {
            "id": "ruger_gp100_crane",
            "name": "GP100 Crane Latch & Triple-Locking Cylinder",
            "part_number": "GP03400 (Crane) / GP03500 (Cylinder)",
            "assembly": "Cylinder & Crane Assembly",
            "function": "Supports rotating cylinder; triple-locks into frame at crane latch, front ejector rod detent, and base pin.",
            "tolerances": "Barrel-to-Cylinder Gap (BCG): 0.004\\\" to 0.007\\\" (max 0.008\\\"). Cylinder Endshake (Axial Play): <= 0.002\\\" maximum.",
            "malfunctions": "Cylinder binding during double action rotation; spitting lead from excessive cylinder gap or endshake.",
            "maintenance": "Install stainless crane shims (0.002\\\") to remove endshake; remove carbon ring on cylinder front face.",
            "manual_ref": "Ruger GP100 Manual p. 15-20",
            "video_ref": "8V-w6Qz7fK0",
            "keywords": ["crane", "cylinder gap", "endshake", "revolver", "bcg"]
        }
    ],

    "Beretta_Pistols": [
        {
            "id": "beretta_locking_block",
            "name": "Falling Locking Block & Plunger",
            "part_number": "91428 (Gen 3 Radiused Kit) / 91429 (Plunger)",
            "assembly": "Barrel Assembly",
            "function": "Pivots downward under recoil to unlock slide from barrel lugs (Walther P38 heritage).",
            "tolerances": "LIFESPAN SPEC: Inspect for hairline cracks every 5,000 rounds under 10x loupe. Mandatory replacement every 15,000–20,000 rounds.",
            "malfunctions": "Slide jammed 1/4\\\" out of battery from sheared locking lug ear; catastrophic frame guide rail damage if run with broken block.",
            "maintenance": "Use only Gen 3 radiused profile blocks; lubricate locking lug wings with 1 drop of oil; replace recoil spring every 3k–5k rds.",
            "manual_ref": "Beretta 92F/FS Manual p. 24-28",
            "video_ref": "D-wHq_KzB_4",
            "keywords": ["locking block", "plunger", "lugs", "recoil", "fatigue"]
        },
        {
            "id": "beretta_trigger_bar_spring",
            "name": "Trigger Bar & Trigger Bar Spring",
            "part_number": "91436 (Trigger Bar) / 91437 (Spring)",
            "assembly": "Frame & Right Grip Panel",
            "function": "Connects trigger to hammer cocking notches; external wire spring holds trigger bar upward into slide engagement groove.",
            "tolerances": "Top leg of spring MUST rest in bottom notch of trigger bar; right grip panel must be snug (12 in-lbs) to prevent outward bowing.",
            "malfunctions": "'DEAD TRIGGER': Pulling trigger results in zero resistance and zero hammer movement when spring dislodges from groove.",
            "maintenance": "Check spring seating whenever right grip panel is removed; ensure grip screw bushings are torqued and thread-locked.",
            "manual_ref": "US Army TM 9-1005-317-10 p. 38",
            "video_ref": "yY3kE1pU8bQ",
            "keywords": ["trigger bar", "dead trigger", "trigger spring", "grip panel"]
        },
        {
            "id": "beretta_d_hammer_spring",
            "name": "Factory 92D Hammer Spring (DAO Mod)",
            "part_number": "EU00043 (Beretta 92D Spring)",
            "assembly": "Mainspring & Lanyard Loop Housing",
            "function": "Powers hammer fall; standard military spring is stiff (12 lbs DA). D-spring provides smooth duty pull.",
            "tolerances": "Double Action pull weight drops from 12.0 lbs to ~8.0-8.5 lbs while maintaining 100% primer ignition on military NATO primers.",
            "malfunctions": "Light strikes if non-factory ultra-light competition springs are installed; heavy stacking on factory standard spring.",
            "maintenance": "Drift lanyard loop roll pin from left to right; install D-spring with clean synthetic grease.",
            "manual_ref": "Beretta 92F/FS Manual p. 32",
            "video_ref": "0kHwFvLgT5s",
            "keywords": ["hammer spring", "d spring", "trigger pull", "mainspring", "dao"]
        },
        {
            "id": "beretta_decocker_drum",
            "name": "Ambidextrous Safety / Decocker Drum & Detent",
            "part_number": "91450 (Safety Lever) / 91452 (Detent Plunger)",
            "assembly": "Slide Assembly",
            "function": "Rotates two-piece firing pin rear section out of hammer path while decocking hammer safely.",
            "tolerances": "Detent spring must click positively into fire and safe detent notches without loose drifting under recoil vibration.",
            "malfunctions": "Pistol decocks itself into safe position during firing recoil from missing or weakened safety detent ball/spring.",
            "maintenance": "Detail strip slide using roll pin punch; capture tiny spring under right wing without launching across workbench.",
            "manual_ref": "US Army TM 9-1005-317-10 p. 44",
            "video_ref": "N6_YyW6n2Gg",
            "keywords": ["decocker", "safety", "drum", "detent", "slide safety"]
        }
    ],

    "Lewis_Automatic_Machine_Gun": [
        {
            "id": "lewis_striker_oprod",
            "name": "Striker (Firing Pin) & Piston Post Lug",
            "part_number": "Savage Part # 18 (Striker) / Part # 14 (Op-Rod)",
            "assembly": "Operating Rod / Piston Assembly",
            "function": "Rigid vertical post on piston rack; reaches primer during final 1/2\\\" forward travel as helical cam completes 4-lug bolt lockup.",
            "tolerances": "Striker Protrusion: 0.050\\\" to 0.060\\\" beyond bolt face at full battery. Hardness: 50–52 HRC tool steel.",
            "malfunctions": "Misfire / Dud (Position 1 stoppage) if striker tip is broken or chipped; primer piercing if protrusion > 0.065\\\".",
            "maintenance": "Drive out transverse taper pin to replace striker; machine replacement from O1 tool steel, oil-quench and temper.",
            "manual_ref": "1917 Savage Arms Lewis Handbook p. 41",
            "video_ref": "IkPNHiLMFL0",
            "keywords": ["striker", "firing pin", "op-rod", "piston post", "protrusion"]
        },
        {
            "id": "lewis_clock_spring",
            "name": "Archimedean Spiral Return Mainspring & Pinion",
            "part_number": "Savage Part # 34 (Spring) / Part # 32 (Pinion Gear)",
            "assembly": "Gear Casing & Receiver Bed",
            "function": "Stores energy as piston rack drives pinion rearward; unwinds to drive piston and bolt forward into battery.",
            "tolerances": "SPRING PULL SPEC: 12 to 14 lbs pull measured at cocking handle. Standard baseline: 2 to 2-1/2 full turns from complete slack.",
            "malfunctions": "Sluggish forward stroke (Position 2 stoppage) if under-tensioned; buffer battering or bolt bounce if over-tensioned.",
            "maintenance": "SAFETY RULE: Never release gear casing catch without holding pinion firmly; uncontrolled release shears teeth.",
            "manual_ref": "1917 Savage Arms Lewis Handbook p. 44",
            "video_ref": "I3ZA9rg8uKI",
            "keywords": ["clock spring", "pinion", "return spring", "gear casing", "tension"]
        },
        {
            "id": "lewis_gas_regulator",
            "name": "Two-Orifice Gas Regulator Cup",
            "part_number": "Savage Part # 48 (Gas Cup)",
            "assembly": "Front Gas Block & Barrel Shroud",
            "function": "Meters high-pressure combustion gas tapped from barrel port onto cupped head of operating piston.",
            "tolerances": "Two port settings: 'S' (Small - standard factory shooting) / 'L' (Large - adverse, cold, or carbon-fouled conditions).",
            "malfunctions": "Short recoil and failure to feed pan magazine if set on 'S' when heavily carbon fouled.",
            "maintenance": "Rotate regulator cup 180° to switch between 'S' and 'L'; scrape carbon with brass scraper; never use emery cloth on piston head.",
            "manual_ref": "1942 UK Stoppages Handbook p. 8",
            "video_ref": "Mnp4J-5UNZI",
            "keywords": ["gas regulator", "cup", "gas port", "short recoil", "fouling"]
        }
    ],

    "General_Gunsmithing": [
        {
            "id": "gunsmith_headspace_gauges",
            "name": "Precision Headspace Gauges (Go / No-Go / Field)",
            "part_number": "SAAMI / CIP Standard Calibration Gauges",
            "assembly": "Chamber & Breech Inspection",
            "function": "Measures distance from bolt breech face to chamber datum (rim, shoulder, or mouth).",
            "tolerances": "GO: Bolt MUST close without binding. NO-GO: Bolt must NOT close with light finger pressure. FIELD: If bolt closes, WEAPON IS DANGEROUS/UNSAFE.",
            "malfunctions": "Excessive headspace causes cartridge case head separation, high-pressure gas blowout, and catastrophic receiver fracture.",
            "maintenance": "Store in desiccated case with light oil; clean chamber thoroughly before inserting gauges; remove extractor and ejector for sensitive feel.",
            "manual_ref": "Practical Gunsmithing p. 55-62",
            "video_ref": "J98Fk7s2L_8",
            "keywords": ["headspace", "go gauge", "no-go", "field gauge", "case separation"]
        },
        {
            "id": "gunsmith_cerrosafe",
            "name": "Cerrosafe Low-Melt Chamber Casting Alloy",
            "part_number": "Bismuth-Lead-Tin-Cadmium Eutectic Alloy (Melts 160°–190°F)",
            "assembly": "Chamber Diagnosis & Reverse Engineering",
            "function": "Produces exact dimensional replica of unknown, worn, or altered rifle/shotgun chambers and throats.",
            "tolerances": "MEASUREMENT WINDOW: Cast shrinks initially to allow easy extraction. Measures 100.000% EXACT SIZE at EXACTLY 1 hour after pouring!",
            "malfunctions": "Taking measurements before 1 hour or after 24 hours gives inaccurate readings (+0.0025\\\" expansion after 24 hours).",
            "maintenance": "Plug bore 1/2\\\" forward of chamber with oiled patch; preheat chamber with heat gun; melt in clean ladle over hot plate.",
            "manual_ref": "Practical Gunsmithing p. 74-79",
            "video_ref": "vV1p8_oG9_Q",
            "keywords": ["cerrosafe", "chamber casting", "low-melt alloy", "throat"]
        },
        {
            "id": "gunsmith_target_crown",
            "name": "11-Degree Recessed Target Barrel Crowning Tool",
            "part_number": "Piloted Manson / PTG Crowning Tool",
            "assembly": "Muzzle & Rifling Exit",
            "function": "Cuts crisp, perpendicular muzzle crown concentric to the bore axis so propellant gas escapes symmetrically behind bullet base.",
            "tolerances": "Concentricity must be within 0.0005\\\" of true bore axis; zero burrs on rifling lands.",
            "malfunctions": "Dented or un-concentric muzzle crown creates asymmetrical gas jetting, destabilizing bullet and degrading grouping accuracy.",
            "maintenance": "Use high-lubricity sulfur-based cutting oil; turn pilot smoothly by hand or lathe under low RPM; deburr with brass ball and 600-grit clover compound.",
            "manual_ref": "Practical Gunsmithing p. 110-116",
            "video_ref": "eG_4kM_x900",
            "keywords": ["crown", "target crown", "muzzle", "accuracy", "rifling"]
        }
    ]
}
'''

with open('web_app/firearms_data.py', 'a', encoding='utf-8') as f:
    f.write(parts_code)

print('Appended PARTS_CATALOG successfully!')
