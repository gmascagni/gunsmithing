# Gunsmith Technical Manual & Video Repository

Welcome to the gunsmithing technical repository. This repository is structured to provide gunsmiths, armorers, and technicians with a standardized, comprehensive library of service manuals, exploded schematics, factory repair handbooks, stoppage troubleshooting guides, and bench video demonstrations for firearms maintenance, repair, and restoration.

---

## 1. Repository Directory Standard

To ensure seamless scaling as hundreds of firearms are added to the shop's archive, each weapon model follows this modular layout:

```text
Gun Manuals/
├── 00_REPOSITORY_INDEX.md                     # Master catalog and external resource index
├── _tools/                                    # Automation utilities for repository management
│   ├── fetch_archive_manual.ps1               # Automated downloader for Internet Archive manuals
│   └── extract_pdf_schematics.py              # Automated extractor for high-res plates/schematics
│
└── [Firearm_Make_and_Model]/                  # Standardized firearm directory
    ├── README.md                              # Complete Gunsmith Workshop Dossier & Tech Guide
    ├── manuals/                               # Original PDF service/factory manuals and armorers guides
    ├── schematics/                            # High-resolution exploded views, oiling charts, plates
    └── videos/
        └── video_index.md                     # Curated YouTube links, timestamps, and workshop notes
```

---

## 2. Master Guide to Online Gun Manual Repositories

When sourcing documentation for new weapons, gunsmiths can consult these primary digital archives:

### A. Internet Archive (`archive.org`)
* **`collection:firearmsmanuals`**: Over 2,200+ digitized factory, owner, and armorer manuals (maintained by Manuallibrary / Textfiles).
  * Direct URL: `https://archive.org/details/firearmsmanuals`
* **British Government Military Publications**: Comprehensive WWI and WWII British War Office small arms manuals, musketry handbooks, and armorer instructions.
  * Direct URL: `https://archive.org/details/british-government-military-publications`
* **Vickers MG Collection & Research Association**: Digitized repository focusing on automatic weapons (Lewis, Vickers, Bren, Hotchkiss, Besa).
  * Direct URL: `https://archive.org/details/@vickersmg`
* **US War Department / Ordnance Department Archives**: Official technical manuals (TM), field manuals (FM), and Base Shop Data.

### B. Specialized Firearms Reference Libraries
1. **Steve's Pages (stevespages.com)**:
   * Legendary gunsmithing cache hosting thousands of factory owner manuals, shop manuals, and exploded views.
2. **Forgotten Weapons Archive (forgottenweapons.com)**:
   * Ian McCollum’s extensive repository of rare historical manuals, factory patents, and military field trials.
3. **Numrich Gun Parts (gunpartscorp.com)**:
   * Indispensable for gunsmiths: exploded parts diagrams, factory schematic keys, and cross-reference part numbers.
4. **BiggerHammer Military Manuals (biggerhammer.net/manuals/)**:
   * Classic repository of US military Technical Manuals (`TM 9-...`) and depot repair standards.
5. **Midwest Gun Works & Brownells Schematics**:
   * OEM factory schematics and part trees for modern, vintage, and commercial firearms.
6. **Vickers MG Collection Blog (vickersmg.blog)**:
   * In-depth scholarly and mechanical documentation on light and heavy machine guns.

---

## 3. Automation Tools

Two scripts are provided in `_tools/` to accelerate capturing new firearms:

### Search & Download from Internet Archive:
```powershell
# Search for manuals by firearm name
.\_tools\fetch_archive_manual.ps1 -Search "Browning Auto 5"

# Download a manual item directly by its Archive.org identifier
.\_tools\fetch_archive_manual.ps1 -Identifier "gunmanual_Savage_Lewis_Machinegun" -OutputDir ".\Lewis_Automatic_Machine_Gun\manuals"
```

### Extract Schematics from Downloaded PDFs:
```powershell
python .\_tools\extract_pdf_schematics.py ".\Lewis_Automatic_Machine_Gun\manuals\1917_Savage_Arms_Lewis_Machine_Gun_Handbook.pdf" -o ".\Lewis_Automatic_Machine_Gun\schematics"
```

---

## 4. Current Firearms Catalog

| Category | Firearm Model | Status | Downloaded Manuals | Extracted Schematics | Curated Videos | Workshop Guide |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| **Light Machine Guns** | **Lewis Automatic Machine Gun** (.303 & .30-06) | **Complete** | 8 Manuals (119 MB) | 59 Plates | 9 Videos | [View Dossier](file:///c:/Users/gmasc/Downloads/Gun%20Manuals/Lewis_Automatic_Machine_Gun/README.md) |

---

## 5. Standard Gunsmithing Manual Taxonomy

When adding manuals for any firearm, classify them into one of these five tiers:
1. **Tier 1 — Factory Armorers / Depot Maintenance Manuals:** Deepest level of technical detail (tolerances, spring tensions, gauge dimensions, heat treating, machining repair).
2. **Tier 2 — Military Field Manuals & Training Regs:** Operator handling, field stripping, 4-position stoppages, immediate action, zeroing.
3. **Tier 3 — Factory Schematics & Parts Lists:** Exploded diagrams, part numbers, screw thread pitches, interchangeable subassemblies.
4. **Tier 4 — Commercial Operator Handbooks:** Consumer-level maintenance, basic cleaning, lubrication points, assembly.
5. **Tier 5 — Bench & Video Tutorials:** Video recordings of takedown, specialized tooling, lathe/mill repairs, 3D cycling animations.
