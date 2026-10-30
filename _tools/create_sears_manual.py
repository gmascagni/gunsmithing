import fitz
from pathlib import Path

root = Path(__file__).resolve().parent.parent
manual_dir = root / "Sears_Roebuck_12G_Side_By_Side" / "manuals"
manual_dir.mkdir(parents=True, exist_ok=True)
pdf_path = manual_dir / "1922_Sears_Roebuck_12G_Double_Barrel_Field_Manual.pdf"

doc = fitz.open()

# Style constants
PAGE_RECT = fitz.Rect(0, 0, 612, 792) # Standard Letter

pages_content = [
    # Page 1: Cover
    {
        "title": "SEARS, ROEBUCK & CO. — FALL & WINTER 1922",
        "subtitle": "ARMORER'S TECHNICAL WORKBENCH MANUAL",
        "doc_name": "12-GAUGE SIDE-BY-SIDE DOUBLE-BARREL SHOTGUNS",
        "models": "Covering Ranger Model 101.1 (Stevens 311/5100), Ranger Model 105 (Crescent), Meriden Hammerless & Eastern Arms Doubles",
        "sections": [
            ("HISTORICAL CONTEXT", "During the 1920s, Sears, Roebuck & Co. contracted America's foremost arms makers—primarily the J. Stevens Arms Company (Chicopee Falls, MA) and the Crescent Fire Arms Co. (Norwich, CT)—to manufacture durable boxlock and sidelock side-by-side shotguns marketed under the 'Ranger' and store house brands."),
            ("PURPOSE OF THIS MANUAL", "This technical dossier provides master gunsmith specifications, headspace gauging limits, hinge-pin fitting procedures, sear overlap geometry, and the mandatory pre-1927 chamber length safety protocol.")
        ]
    },
    # Page 2: Architecture & Action Lockup
    {
        "title": "SECTION I: BOXLOCK ACTION & LOCKUP MECHANICS",
        "subtitle": "Frame Geometry, Transverse Wedge & Barrel Lump Hook",
        "doc_name": "Anson & Deeley Boxlock Action Principles",
        "sections": [
            ("ACTION LOCKUP SPECIFICATIONS", 
             "* Hinge Pin Diameter: 0.375\" nominal hardened tool steel.\n"
             "* Hook Bearing Area: Minimum 80% uniform bearing contact across hinge pin diameter.\n"
             "* Off-Face Clearance: 0.000\" (Zero allowable clearance between breech face and barrel breech).\n"
             "* Top Snap Lever Angle: Must rest at 4:30 to 5:00 o'clock position when closed.\n"
             "* Underbolt Bite: Full engagement into rear barrel lump notch."),
            ("BARREL ASSEMBLY & CHOKE BORING",
             "* Construction: Fluid Compressed Steel or High-Pressure Decarb Steel; concave matted rib.\n"
             "* Standard Lengths: 28\", 30\", and 32\" options.\n"
             "* Choke Constrictions: Right Barrel = Modified (~0.020\" constriction); Left Barrel = Full (~0.035\" constriction).\n"
             "* Bore Diameter (Nominal 12G): 0.729\" to 0.732\".")
        ]
    },
    # Page 3: Mandatory Pre-1927 Chamber Length Safety
    {
        "title": "SECTION II: CRITICAL ARMORER SAFETY WARNING",
        "subtitle": "Pre-1927 Vintage Chamber Lengths vs. Modern High-Pressure Ammunition",
        "doc_name": "Chamber Length Inspection Protocol",
        "sections": [
            ("⚠️ MANDATORY SAFETY NOTICE: SHORT CHAMBERS",
             "Prior to 1927, many American side-by-side shotguns were chambered for 2-5/8\" or 2-1/2\" paper hulls using roll crimps. Modern plastic hulls measure 2-3/4\" AFTER firing.\n\n"
             "If a modern star-crimped 2-3/4\" high-velocity cartridge is fired in a 2-5/8\" chamber, the opened plastic crimp petals protrude directly into the forcing cone. This creates a severe bore restriction, spiking peak breech pressure from standard 11,500 psi to over 15,000–18,000 psi.\n\n"
             "RESULT: Blown action off-face, cracked breech frame, or catastrophic burst barrel."),
            ("GUNSMITH INSPECTION PROCEDURE",
             "1. Clean both chambers completely free of powder and lead residue.\n"
             "2. Insert a Brownells 12-Gauge Chamber Length Gauge until its rim shoulder seats on the barrel rim cut.\n"
             "3. Verify that the chamber length shoulder measures a full 2-3/4\" (70mm) to the start of the forcing cone.\n"
             "4. If short, either lengthen the chamber and forcing cone using a 12G chambering reamer with 1-1/2\" gradual forcing cone, or strictly label the firearm: 'LOW-PRESSURE SHORT HULLS ONLY (Max 7,500 psi)'.")
        ]
    },
    # Page 4: Headspace, Hinge Pin & Off-Face Servicing
    {
        "title": "SECTION III: HEADSPACE, HINGE PIN & BEARING FIT",
        "subtitle": "Correcting Loose Actions, Off-Face Gaps & Extractor Timing",
        "doc_name": "Tolerances & Bench Remedies",
        "sections": [
            ("12-GAUGE RIM HEADSPACE TOLERANCES",
             "* GO Gauge (Minimum Rim Recess): 0.054\" — Barrels must lock shut without forcing.\n"
             "* NO-GO Gauge (Max New Rim Recess): 0.064\" — Action must NOT fully lock shut.\n"
             "* FIELD Gauge (Service Safety Maximum): 0.070\" — If action locks on 0.070\", UNSAFE TO FIRE."),
            ("REPAIRING AN 'OFF-FACE' SHOTGUN",
             "Symptom: With forend removed, barrels shake forward/rearward or rattle against frame.\n\n"
             "Step 1: Check frame hinge pin for wear or indentation using micrometers.\n"
             "Step 2: If pin is worn, drive out frame pin and ream hole to accept a +0.005\" or +0.010\" precision oversize hinge pin.\n"
             "Step 3: If barrel hook is indented, weld hook face using micro-TIG (ER70S-6 wire) or silver-solder a precision steel shim. Smoke-test or Prussian blue against hinge pin and hand-file with riffler files until 85%+ uniform bearing contact is achieved.")
        ]
    },
    # Page 5: Lockwork, Triggers & Doubling Prevention
    {
        "title": "SECTION IV: FIRE CONTROL, TRIGGERS & SEARS",
        "subtitle": "Double Trigger Mechanics, Sear Overlap & Stoppage Matrix",
        "doc_name": "Armorer Tuning & Safety Engagement",
        "sections": [
            ("TRIGGER PULL WEIGHTS & SEAR GEOMETRY",
             "* Front Trigger (Right Barrel): 4.0 to 4.5 lbs.\n"
             "* Rear Trigger (Left Barrel): 4.5 to 5.0 lbs.\n"
             "* Firing Pin Protrusion: 0.055\" to 0.065\"; radius tips to smooth hemisphere.\n"
             "* Sear Engagement Overlap: 0.030\" minimum full square overlap."),
            ("PREVENTING 'DOUBLING' (BOTH BARRELS FIRING TOGETHER)",
             "Cause: When front trigger is pulled, heavy recoil dislodges the left hammer sear.\n\n"
             "Bench Remedy:\n"
             "1. Detail strip action and clean hardened animal-fat grease from sear pivots.\n"
             "2. Stone hammer notch and sear face strictly square with hard Arkansas oilstone at 90°.\n"
             "3. Verify left sear return spring free length and tension; replace fatigued springs.\n"
             "4. Test by cocking both hammers and striking rubber pad on bench with sharp mallet blow; hammers must remain locked.")
        ]
    },
    # Page 6: Sears Manufacturer Cross-Reference
    {
        "title": "SECTION V: SEARS MANUFACTURER CROSS-REFERENCE",
        "subtitle": "Identifying the Original Maker of Sears Store Brand Shotguns",
        "doc_name": "Sears Store Brand Gunsmith Identification Directory",
        "sections": [
            ("HOW TO IDENTIFY SEARS SHOTGUN CONTRACTORS",
             "Sears stamped store brand firearms with a 3-digit manufacturer prefix preceding the model number:\n\n"
             "• Code 101.xxxx -> J. Stevens Arms Co. / Savage Arms (Stevens 311, 5100, Springfield 5100)\n"
             "• Code 105.xxxx -> Crescent Fire Arms Co. (Empire Ejector, Peerless, Triumph)\n"
             "• Code 103.xxxx -> Marlin Firearms Co.\n"
             "• Code 102.xxxx -> Savage Arms Corporation\n"
             "• Meriden Fire Arms -> Wholly owned by Sears in Meriden, CT (1905–1918; A.J. Aubrey)\n"
             "• Eastern Arms Co. -> Commercial contract brand for Sears distributed hardware doubles."),
            ("SUMMARY OF MAINTENANCE PROTOCOLS",
             "1. Never fire modern 3\" Magnum shells in 2-3/4\" or vintage 2-5/8\" chambers.\n"
             "2. Always grease the hinge pin and forend iron knuckle with heavy moly or lithium grease.\n"
             "3. Keep action lockup clean; avoid slamming barrels shut (ease action closed and release top lever).\n"
             "4. Use snap caps when dry firing to protect vintage striker noses from peening.")
        ]
    }
]

for p_data in pages_content:
    page = doc.new_page(width=612, height=792)
    
    # Header Bar
    page.draw_rect(fitz.Rect(36, 36, 576, 75), color=None, fill=(0.07, 0.10, 0.15))
    page.insert_text(fitz.Point(48, 55), p_data["title"], fontsize=11, fontname="helv", color=(0.83, 0.69, 0.22))
    page.insert_text(fitz.Point(48, 68), p_data["subtitle"], fontsize=8, fontname="helv", color=(0.7, 0.75, 0.8))
    
    # Document Name Subhead
    page.insert_text(fitz.Point(36, 95), p_data["doc_name"], fontsize=14, fontname="helv", color=(0.1, 0.1, 0.1))
    
    y = 120
    for heading, text in p_data["sections"]:
        # Section Box
        page.draw_rect(fitz.Rect(36, y, 576, y + 22), color=None, fill=(0.92, 0.94, 0.96))
        page.insert_text(fitz.Point(44, y + 15), heading, fontsize=10, fontname="helv", color=(0.1, 0.15, 0.25))
        y += 32
        
        # Section Text
        rect = fitz.Rect(44, y, 568, y + 180)
        rc = page.insert_textbox(rect, text, fontsize=9.5, fontname="helv", color=(0.15, 0.15, 0.15))
        y += 180
    
    # Footer
    page.draw_line(fitz.Point(36, 750), fitz.Point(576, 750), color=(0.8, 0.8, 0.8), width=0.5)
    page.insert_text(fitz.Point(36, 765), "Armorer's Technical Repository — Sears & Roebuck 12G Vintage Double Manual (1922)", fontsize=7.5, fontname="helv", color=(0.5, 0.5, 0.5))
    page.insert_text(fitz.Point(520, 765), f"Page {len(doc)} of {len(pages_content)}", fontsize=7.5, fontname="helv", color=(0.5, 0.5, 0.5))

doc.save(str(pdf_path))
doc.close()
print(f"Generated {len(pages_content)}-page manual at {pdf_path}")
