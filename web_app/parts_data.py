"""
Armorer's Workbench - Comprehensive Exploded Schematic Parts Database.
Provides detailed part callouts, OEM numbers, assembly groupings, critical gunsmith tolerances,
malfunction diagnostics, and armorer maintenance protocols for firearms across all categories.
"""

from typing import Dict, Any, List

PARTS_DATABASE: Dict[str, List[Dict[str, Any]]] = {
    "Lewis_Automatic_Machine_Gun": [
        {
            "id": "lewis_return_spring",
            "name": "Gear Casing & Flat Clockwork Return Spring Assembly",
            "callout_num": "Part #18",
            "oem_number": "BSA-LMG-18 / Savage 102",
            "assembly": "Return Mechanism & Pinion Group",
            "tolerances": "Spring Tension: 12 to 14 lbs pull measured at cocking handle. Baseline winding: exactly 2 to 2½ complete rotations from neutral dead-slack. Gear teeth runout: < 0.003\".",
            "malfunctions": "Sluggish forward stroke; failure to strip heavy .303 rimmed cartridge from magazine drum; sheared pinion gear teeth if released without tension key holding teeth.",
            "maintenance": "NEVER release spring tension uncontrolled. Lubricate internal spiral leaves with medium petroleum grease (graphite blend). Replace mainspring if pull drops below 10 lbs after 2.5 turns.",
            "norm_x": 0.48, "norm_y": 0.58, "norm_r": 0.12
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
            "norm_x": 0.35, "norm_y": 0.42, "norm_r": 0.14
        },
        {
            "id": "lewis_striker",
            "name": "Striker (Firing Pin) & Retaining Pin",
            "callout_num": "Part #14",
            "oem_number": "BSA-LMG-14 / Savage 107",
            "assembly": "Operating Rod & Ignition Assembly",
            "tolerances": "Firing pin protrusion beyond breech face: 0.052\" to 0.060\". Tip radius: 0.045\" hemispherical. Rockwell hardness: 50–52 HRC on tip, annealed body.",
            "malfunctions": "Pierced primers if protrusion exceeds 0.062\"; light strikes or misfires if tip mushroomed or oprod post pocket worn egg-shaped.",
            "maintenance": "Inspect tip under 10x magnifier for crater pitting. Hand-stone tip radius if mushroomed. Ensure free pivot play on oprod post without binding.",
            "norm_x": 0.42, "norm_y": 0.38, "norm_r": 0.09
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
            "norm_x": 0.52, "norm_y": 0.36, "norm_r": 0.11
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
            "norm_x": 0.62, "norm_y": 0.28, "norm_r": 0.10
        },
        {
            "id": "lewis_barrel_radiator",
            "name": "Barrel with Aluminum Radiator & Cooling Casing",
            "callout_num": "Part #1",
            "oem_number": "BSA-LMG-01 / Savage 101",
            "assembly": "Barrel & Forced Draught Cooling Group",
            "tolerances": "Barrel-to-receiver torque: 75 to 85 ft-lbs with barrel clamp. Radiator fin-to-shroud clearance: 0.015\" circumferential air gap.",
            "malfunctions": "Thermal barrel droop or wandering zero if radiator shroud loose; gas port gas leakage causing erratic cyclic rate.",
            "maintenance": "Blow out longitudinal cooling fins with compressed air. Ensure front barrel gas gland threads are tight and pinned. Clean muzzle blast induction cup.",
            "norm_x": 0.22, "norm_y": 0.35, "norm_r": 0.15
        }
    ],
    "Glock_Pistols": [
        {
            "id": "glock_trigger_bar",
            "name": "Cruciform Trigger Bar & Striker Lug Plate",
            "callout_num": "Part #26",
            "oem_number": "SP 00357 (Gen 1-4) / SP 39701 (Gen 5)",
            "assembly": "Trigger Mechanism & Fire Control Group",
            "tolerances": "Cruciform sear engagement: ≥ 66% (minimum 2/3 overlap) on striker foot, inspected through orange armorer inspection plate (SP 02096). Connector gap: 0.005\" to 0.010\" clearance between top lip and housing.",
            "malfunctions": "Double-firing or failure to reset if engagement < 66%; spongy or creep-heavy trigger break if disconnector cam ramp is burred or dry.",
            "maintenance": "Inspect cruciform sear surface for rounding or uneven wear. Polish disconnector cam and sear face with 0.5-micron diamond compound (do not grind through nickel plating). Wipe dry; never grease striker sear interface.",
            "norm_x": 0.48, "norm_y": 0.55, "norm_r": 0.12
        },
        {
            "id": "glock_striker_assembly",
            "name": "Firing Pin (Striker) Assembly with Spring & Maritime Cups",
            "callout_num": "Part #4",
            "oem_number": "SP 00049 / Spring SP 00063 / Cups SP 00070",
            "assembly": "Slide Ignition & Striker Mechanism",
            "tolerances": "Firing pin protrusion: 0.045\" to 0.055\" through breech face rectangular aperture. Striker spring free length: 1.625\" (replace if < 1.450\"). Spring weight: 5.5 lbs (standard silver spring).",
            "malfunctions": "Light primer strikes if firing pin channel is oiled or carbon fouled (hydraulic drag); pierced primers if tip has burr; broken spring cups causing striker binding.",
            "maintenance": "NEVER LUBRICATE FIRING PIN CHANNEL OR LINER. Must be 100% dry and solvent-free. Run the 'Glock rattle test' (cocked, hold weapon and shake—striker must freely rattle inside slide channel).",
            "norm_x": 0.58, "norm_y": 0.22, "norm_r": 0.13
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
            "norm_x": 0.68, "norm_y": 0.26, "norm_r": 0.10
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
            "norm_x": 0.42, "norm_y": 0.44, "norm_r": 0.11
        },
        {
            "id": "glock_recoil_spring",
            "name": "Captured Recoil Spring Assembly (RSA)",
            "callout_num": "Part #3",
            "oem_number": "SP 02457 (G19 Gen 3) / SP 08703 (G19 Gen 4/5 Dual)",
            "assembly": "Recoil & Counter-Recoil Group",
            "tolerances": "Recoil spring weight: 18 lbs standard (Gen 3) / 16.5 lbs dual-spring assembly (Gen 4/5). Free length: minimum 3.0\" on single-spring rods.",
            "malfunctions": "Slide hangs out of battery 1/8\" when dirty; battering of polymer frame recoil lugs if spring fatigued (> 5,000 rounds).",
            "maintenance": "Perform Glock 45° test: unload, cock, pull trigger, point gun 45° upwards, pull slide back 1/4\" and release slowly. Slide must close into full battery without pushing.",
            "norm_x": 0.28, "norm_y": 0.30, "norm_r": 0.12
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
            "norm_x": 0.25, "norm_y": 0.24, "norm_r": 0.13
        }
    ],
    "AR15_M4_Platform": [
        {
            "id": "ar15_bolt_carrier_group",
            "name": "Bolt Carrier Group (BCG) with Gas Key & Cam Pin",
            "callout_num": "Assembly #1",
            "oem_number": "Mil-Spec 8448512 / 8448507",
            "assembly": "Direct Impingement Operating Engine",
            "tolerances": "Gas key staking: Grade 8 fasteners torqued to 50–55 in-lbs, dual-point metal displacement staking on each screw head. Cam pin hole wear: < 0.004\" elongation.",
            "malfunctions": "Short-stroking / fail to eject if gas key leaks or screws back out; bolt carrier tilt wear on buffer tube buffer lip.",
            "maintenance": "Verify gas rings stagger (gaps not aligned). Test: stand BCG vertical on bolt face—carrier must not drop under its own weight. Clean gas key interior with pipe cleaner.",
            "norm_x": 0.45, "norm_y": 0.35, "norm_r": 0.14
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
            "norm_x": 0.55, "norm_y": 0.34, "norm_r": 0.10
        },
        {
            "id": "ar15_fire_control_group",
            "name": "Fire Control Group (Hammer, Trigger, Sear & Disconnector)",
            "callout_num": "Assembly #3",
            "oem_number": "Mil-Spec 8448582 (Trigger) / 8448612 (Hammer)",
            "assembly": "Lower Receiver Fire Control Group",
            "tolerances": "Trigger pull: 5.5 to 8.5 lbs (Mil-Spec duty). Sear engagement overlap: 0.025\" to 0.035\". Disconnector clearance to hammer hook: 0.003\" to 0.008\" when trigger held back.",
            "malfunctions": "Hammer follow (accidental burst or dead trigger) if disconnector spring installed upside down (large flared coil MUST face downward into trigger recess).",
            "maintenance": "Stone primary hammer hook flat without changing 90° angle. Light moly grease on hammer notch and disconnector nose. Ensure hammer spring legs rest on trigger pin grooves.",
            "norm_x": 0.48, "norm_y": 0.62, "norm_r": 0.12
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
            "norm_x": 0.25, "norm_y": 0.28, "norm_r": 0.15
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
            "norm_x": 0.72, "norm_y": 0.45, "norm_r": 0.13
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
            "maintenance": "Turn bushing in slide by hand or bushing wrench. Deburr inside bottom bevel so barrel clears during 1° link-down unlocked stroke.",
            "norm_x": 0.20, "norm_y": 0.32, "norm_r": 0.11
        },
        {
            "id": "1911_sear_hammer",
            "name": "Sear, Hammer & Disconnector Match Group",
            "callout_num": "Part #18 & #20",
            "oem_number": "Colt 50165 (Sear) / 50161 (Hammer)",
            "assembly": "Fire Control & Match Ignition Group",
            "tolerances": "Sear nose primary angle: 90° to hammer hooks with 0.020\" to 0.022\" hook height. Escape angle bevel: 45° across rear 1/3 of sear nose. Trigger pull: 3.5 to 4.5 lbs.",
            "malfunctions": "Hammer follow to half-cock notch when slide slams home (sear bounce); trigger creep or gritty break if hooks uneven.",
            "maintenance": "Use trueing jig with 0.020\" feeler gauge. Stone hooks square to 90°. Tune 3-leaf sear spring: left leaf = sear (18-20 oz), middle leaf = disconnector/trigger (16-18 oz).",
            "norm_x": 0.58, "norm_y": 0.48, "norm_r": 0.12
        },
        {
            "id": "1911_extractor",
            "name": "Internal Spring-Steel Extractor (Tuned)",
            "callout_num": "Part #12",
            "oem_number": "Colt 50148",
            "assembly": "Slide & Breechface Group",
            "tolerances": "Tension: 24 to 28 oz claw retention force on a rimmed dummy round. Hook-to-breechface clearance: 0.075\" to 0.080\". Claw bevel: 0.015\" radius at bottom locating pad.",
            "malfunctions": "Failure to extract; stovepipe; round hangs on 45° feed angle if hook digs into cartridge rim bevel.",
            "maintenance": "Remove and hand-radius bottom front corner of claw so rim slides upward smoothly under extractor during feeding. Adjust bow curvature with extractor tension gauge.",
            "norm_x": 0.65, "norm_y": 0.28, "norm_r": 0.09
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
            "norm_x": 0.38, "norm_y": 0.42, "norm_r": 0.10
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
            "norm_x": 0.36, "norm_y": 0.38, "norm_r": 0.12
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
            "norm_x": 0.52, "norm_y": 0.52, "norm_r": 0.11
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
            "norm_x": 0.28, "norm_y": 0.36, "norm_r": 0.12
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
            "norm_x": 0.42, "norm_y": 0.38, "norm_r": 0.13
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
            "norm_x": 0.48, "norm_y": 0.50, "norm_r": 0.11
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
            "norm_x": 0.35, "norm_y": 0.34, "norm_r": 0.09
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
            "norm_x": 0.45, "norm_y": 0.36, "norm_r": 0.12
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
            "norm_x": 0.32, "norm_y": 0.44, "norm_r": 0.10
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
            "norm_x": 0.52, "norm_y": 0.58, "norm_r": 0.12
        }
    ]
}

# Generic Component Taxonomy Fallback for Platforms without specific custom maps
DEFAULT_CATEGORY_PARTS: Dict[str, List[Dict[str, Any]]] = {
    "Pistols": [
        {
            "id": "generic_barrel",
            "name": "Breech Locking Barrel & Feed Ramp",
            "callout_num": "Part #1",
            "oem_number": "Factory Spec Barrel",
            "assembly": "Barrel & Chamber Assembly",
            "tolerances": "Headspace: GO to NO-GO gauge clearance. Feed ramp angle: 32° to 34° mirror polish without rounding the chamber corner edge.",
            "malfunctions": "Nose-up feeding jams if ramp pitted or rough; failure to lock into battery if locking hood carbon fouled.",
            "maintenance": "Inspect throat for erosion or lead fouling. Mirror-polish feed ramp with felt bob and polishing paste.",
            "norm_x": 0.25, "norm_y": 0.30, "norm_r": 0.14
        },
        {
            "id": "generic_slide",
            "name": "Milled Steel Slide Assembly",
            "callout_num": "Part #2",
            "oem_number": "Breech Slide Assembly",
            "assembly": "Slide & Breech Face Group",
            "tolerances": "Slide-to-frame rail runout: 0.004\" to 0.008\" clearance. Breech face squareness: 90° ± 0°15'.",
            "malfunctions": "Sluggish slide velocity; slide binding on frame rails if dirt packed into rail tracks.",
            "maintenance": "Apply one small drop of gun oil to each frame rail groove. Inspect breech face for firing pin hole cratering.",
            "norm_x": 0.50, "norm_y": 0.25, "norm_r": 0.18
        },
        {
            "id": "generic_trigger_sear",
            "name": "Trigger, Sear & Disconnector Group",
            "callout_num": "Part #3",
            "oem_number": "Fire Control Assembly",
            "tolerances": "Sear engagement: minimum 0.020\" overlap. Trigger pull weight: factory specification standard.",
            "malfunctions": "Double firing or failure to reset if disconnector spring weak or sear interface altered.",
            "maintenance": "Clean all pivot pins; stone sear primary facet square without rounding off edge. Apply moly paste to sear notch.",
            "norm_x": 0.50, "norm_y": 0.60, "norm_r": 0.14
        },
        {
            "id": "generic_recoil_spring",
            "name": "Recoil Spring & Guide Rod Assembly",
            "callout_num": "Part #4",
            "oem_number": "Recoil Counter-Recoil Assembly",
            "tolerances": "Spring free length within 10% of factory new spec. Standard rated poundage maintained.",
            "malfunctions": "Frame battering and failure to go into battery if spring fatigued or broken.",
            "maintenance": "Replace recoil spring every 3,000 to 5,000 rounds. Keep guide rod clean and lightly oiled.",
            "norm_x": 0.30, "norm_y": 0.40, "norm_r": 0.12
        },
        {
            "id": "generic_extractor",
            "name": "Spring Extractor & Plunger Assembly",
            "callout_num": "Part #5",
            "oem_number": "Extractor Claw Assembly",
            "tolerances": "Claw bite: full rim contact. Spring retention force: positive grip across full cycling stroke.",
            "malfunctions": "Stovepipes, case slipping off claw, or failure to extract from tight chamber.",
            "maintenance": "Remove and clean claw groove of brass shavings and carbon. Check claw face under 10x magnification.",
            "norm_x": 0.65, "norm_y": 0.28, "norm_r": 0.10
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
            "norm_x": 0.50, "norm_y": 0.35, "norm_r": 0.16
        },
        {
            "id": "generic_chamber_barrel",
            "name": "Barrel, Chamber & Muzzle Crown",
            "callout_num": "Part #2",
            "oem_number": "Precision Rifled Barrel",
            "assembly": "Barrel & Barrel Extension Group",
            "tolerances": "Muzzle crown: 11° target crown or 90° recessed step with zero burrs. Bore straightness: < 0.001\" runout.",
            "malfunctions": "Loss of accuracy and fliers if crown nicked; throat erosion increasing bullet jump.",
            "maintenance": "Use brass bore guide and coated rod from breech end. Never pull steel brush backward over crown.",
            "norm_x": 0.25, "norm_y": 0.32, "norm_r": 0.18
        },
        {
            "id": "generic_trigger_housing",
            "name": "Trigger Mechanism & Safety Assembly",
            "callout_num": "Part #3",
            "oem_number": "Fire Control & Safety Group",
            "tolerances": "Trigger pull weight: factory specification. Safety block: 100% mechanical isolation of sear movement.",
            "malfunctions": "Accidental discharge upon bump test if sear engagement inadequate or safety worn.",
            "maintenance": "Run drop test / mallet bump test with empty chamber. Do not allow oil to gum inside enclosed trigger box.",
            "norm_x": 0.52, "norm_y": 0.62, "norm_r": 0.14
        }
    ],
    "Shotguns": [
        {
            "id": "generic_shotgun_barrel",
            "name": "Shotgun Barrel with Choke & Locking Extension",
            "callout_num": "Part #1",
            "oem_number": "Smoothbore Barrel Assembly",
            "assembly": "Barrel & Extension Group",
            "tolerances": "Choke concentricity: within 0.002\" of bore centerline. Chamber length: matches hull marking (2¾\" or 3\").",
            "malfunctions": "Bulged barrel if fired with obstruction; stuck empty hulls if chamber rusted or pitted.",
            "maintenance": "Hone chamber smooth with 400-grit flex hone. Keep choke tube threads clean and coated with anti-seize grease.",
            "norm_x": 0.25, "norm_y": 0.32, "norm_r": 0.18
        },
        {
            "id": "generic_shotgun_bolt",
            "name": "Breech Bolt & Action Slide Assembly",
            "callout_num": "Part #2",
            "oem_number": "Breech Mechanism Group",
            "tolerances": "Headspace: 0.054\" to 0.068\" rim thickness. Locking block full engagement into barrel notch.",
            "malfunctions": "Failure to unlock or stiff pump action after firing heavy field loads.",
            "maintenance": "Check slide bar alignment. Lubricate bolt slide tracks with light machine oil.",
            "norm_x": 0.45, "norm_y": 0.40, "norm_r": 0.15
        }
    ]
}


def find_part_by_coordinates(firearm_id: str, norm_x: float, norm_y: float, norm_r: float = 0.08) -> Dict[str, Any]:
    """
    Intelligently identifies the firearm component closest to or containing the circled coordinate.
    """
    parts_list = PARTS_DATABASE.get(firearm_id)
    if not parts_list:
        # Fallback to category defaults
        for cat_name, p_list in DEFAULT_CATEGORY_PARTS.items():
            parts_list = p_list
            break
            
    if not parts_list:
        return {}

    # Calculate Euclidean distance from circled center (norm_x, norm_y) to each known part's coordinate
    best_match = None
    min_dist = float("inf")
    nearby = []

    for p in parts_list:
        px = p.get("norm_x", 0.5)
        py = p.get("norm_y", 0.5)
        # Weight x and y slightly according to aspect ratio
        dist = ((norm_x - px) ** 2 + (norm_y - py) ** 2) ** 0.5
        
        nearby.append({
            "part": p,
            "distance": round(dist, 4)
        })

        if dist < min_dist:
            min_dist = dist
            best_match = p

    nearby.sort(key=lambda item: item["distance"])
    
    # Return primary best match plus up to 3 alternate nearby candidates
    return {
        "primary": best_match,
        "distance": round(min_dist, 4),
        "alternates": [item["part"] for item in nearby if item["part"]["id"] != best_match["id"]][:3]
    }
