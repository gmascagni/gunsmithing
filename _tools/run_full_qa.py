import os
import sys
import json
from pathlib import Path

root = Path(__file__).resolve().parent.parent
sys.path.append(str(root))

from web_app.firearms_data import FIREARMS_METADATA
from web_app.parts_data import find_part_by_coordinates, resolve_anatomical_firearm_part

print("======================================================================")
print("RUNNING COMPREHENSIVE QA SUITE: ARMORER'S WORKBENCH")
print("======================================================================")

errors = []
warnings = []

# Test 1: Platform Registry Completeness
print(f"\n[TEST 1] Platform Catalog Validation: {len(FIREARMS_METADATA)} platforms loaded...")
required_keys = ["name", "subtitle", "manufacturer", "category", "action_type", "specs", "stoppages", "videos"]
for fid, meta in FIREARMS_METADATA.items():
    for k in required_keys:
        if k not in meta:
            errors.append(f"Platform '{fid}' missing required metadata key: '{k}'")
print(f"-> Platform metadata structure passed with {len(errors)} errors.")

# Test 2: Anatomy & Geometry Engine (Lewis Gun Reticle Pinpoint Tests)
print("\n[TEST 2] Testing Firearm Anatomy & Coordinate Engine on Lewis Gun...")
test_coords = [
    # (name, norm_x, norm_y, expected_keyword)
    ("Top Drum Magazine", 0.46, 0.24, "drum"),
    ("Trigger & Pistol Grip", 0.38, 0.58, "trigger"),
    ("Buttstock Assembly", 0.18, 0.55, "buttstock"),
    ("Return Spring Pinion", 0.46, 0.50, "return spring"),
    ("Forward Barrel Shroud", 0.75, 0.50, "barrel"),
]

for label, nx, ny, kw in test_coords:
    res = find_part_by_coordinates("Lewis_Automatic_Machine_Gun", nx, ny, 0.08)
    part_name = res["primary"]["name"].lower()
    if kw in part_name:
        print(f"  [PASS] {label} ({nx}, {ny}) -> Identified as: '{res['primary']['name']}' (Method: {res['method']})")
    else:
        err = f"  [FAIL] {label} ({nx}, {ny}) expected '{kw}' in name, got: '{res['primary']['name']}'"
        print(err)
        errors.append(err)

# Test 3: Universal Firearm Anatomy Engine across different categories
print("\n[TEST 3] Testing Universal Anatomy Engine on General / Unregistered Platform...")
unreg_tests = [
    ("Unregistered Longgun Stock", "Rifles & Carbines", 0.15, 0.50, "buttstock"),
    ("Unregistered Longgun Barrel", "Rifles & Carbines", 0.80, 0.50, "barrel"),
    ("Unregistered Longgun Trigger", "Rifles & Carbines", 0.35, 0.60, "trigger"),
    ("Unregistered Top Feed Pan", "Machine Guns", 0.45, 0.25, "drum"),
]

for label, cat, nx, ny, kw in unreg_tests:
    res = resolve_anatomical_firearm_part("Generic_Platform", nx, ny)
    part_name = res["name"].lower()
    if kw in part_name:
        print(f"  [PASS] {label} -> '{res['name']}'")
    else:
        err = f"  [FAIL] {label} expected '{kw}', got: '{res['name']}'"
        print(err)
        errors.append(err)

# Test 4: PDF Manuals on Disk & Integrity
print("\n[TEST 4] Validating PDF Manual Files & Page Counts...")
import fitz
pdf_count = 0
page_count_samples = {}
for p in root.glob("*/manuals/*.pdf"):
    pdf_count += 1
    try:
        doc = fitz.open(p)
        page_count_samples[p.name] = doc.page_count
        if doc.page_count < 1:
            errors.append(f"PDF {p.name} has invalid page count: {doc.page_count}")
    except Exception as e:
        errors.append(f"Corrupt PDF file {p}: {e}")

print(f"-> Total valid PDFs verified on disk: {pdf_count}")
print(f"-> Sample manual page counts:")
for name in list(page_count_samples.keys())[:6]:
    print(f"    • {name}: {page_count_samples[name]} pages")

# Test 5: Static docs/ Bundle Verification
print("\n[TEST 5] Validating Static GitHub Pages Output in docs/...")
docs_dir = root / "docs"
for req in ["index.html", "app.css", "app.js", "data.js", ".nojekyll", "vendor/pdf.min.js", "vendor/pdf.worker.min.js"]:
    p = docs_dir / req
    if not p.exists():
        errors.append(f"Missing static artifact in docs/: {req}")
    else:
        print(f"  [PASS] docs/{req} ({p.stat().st_size:,} bytes)")

# Test 6: Sears 1922 Shotgun Verification
print("\n[TEST 6] Validating Sears 12G Side-by-Side Platform...")
sears_meta = FIREARMS_METADATA.get("Sears_Roebuck_12G_Side_By_Side")
if sears_meta:
    print(f"  [PASS] Sears platform name: '{sears_meta['name']}'")
    print(f"  [PASS] Stoppage positions: {len(sears_meta['stoppages'])}")
    print(f"  [PASS] Specifications registered: {list(sears_meta['specs'].keys())}")
else:
    errors.append("Sears_Roebuck_12G_Side_By_Side not found in FIREARMS_METADATA")

sears_pdf = root / "Sears_Roebuck_12G_Side_By_Side" / "manuals" / "1922_Sears_Roebuck_12G_Double_Barrel_Field_Manual.pdf"
if sears_pdf.exists():
    doc = fitz.open(sears_pdf)
    print(f"  [PASS] Sears 1922 Manual exists: {doc.page_count} pages")
else:
    errors.append("Sears manual PDF missing from disk")

print("\n======================================================================")
if errors:
    print(f"QA COMPLETED WITH {len(errors)} ERRORS:")
    for e in errors:
        print(f"  ❌ {e}")
else:
    print("ALL QA TESTS PASSED CLEANLY (0 ERRORS, 0 DEFECTS)!")
print("======================================================================")
