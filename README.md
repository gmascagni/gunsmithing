# Armorer's Workbench & Gunsmithing Technical Repository

[![FastAPI](https://img.shields.io/badge/FastAPI-0.100%2B-009688.svg?style=flat&logo=fastapi)](https://fastapi.tiangolo.com/)
[![Local LLM](https://img.shields.io/badge/Local%20LLM-Ollama%20%7C%20LM%20Studio-blue.svg?style=flat)](https://ollama.com/)
[![Mobile Responsive](https://img.shields.io/badge/Mobile-iPhone%20%26%20Android%20Ready-brightgreen.svg?style=flat)]()
[![Firearms Data](https://img.shields.io/badge/Firearms%20Data-Lewis%20LMG%20Complete-gold.svg?style=flat)]()
[![License](https://img.shields.io/badge/License-Public%20Domain%20%2F%20Open-green.svg?style=flat)]()

A comprehensive technical repository and interactive AI-assisted workbench designed for gunsmiths, armorers, and historic firearms restorers. Built to store, search, and preview original military/factory technical manuals, high-resolution exploded schematics, stoppage diagnostic matrices, and bench video demonstrations.

---

## 🛠️ Key Features

- **Live Multi-Mode Workshop Previewer:**
  - **Document Viewer:** In-browser PDF reader for authentic historical & factory armorer manuals.
  - **Schematic Inspector:** Interactive canvas with Pan & Zoom controls for high-resolution plate diagrams.
  - **Embedded Video Workshop:** Curated bench video guides (field stripping, parts machining, 3D cycle animations, military training).
  - **Armorer Specs & Stoppages:** Interactive 4-Position Stoppage diagnostic matrix and shop tolerances.
- **Local AI Gunsmith Assistant:**
  - Direct bridge to local LLMs via **Ollama** (`http://127.0.0.1:11434`) or **LM Studio** (`http://127.0.0.1:1234/v1`).
  - Context-injected technical data (spring tensions, striker protrusions, headspace, gas porting).
  - Built-in fallback expert knowledge engine when offline.
- **Mobile & Tablet Optimized:**
  - Responsive layout for smartphones (iPhone/Android) and tablets (iPad).
  - Bottom navigation bar: View Switcher between Library, Workbench Viewer, and AI Assistant.
  - Multi-touch pinch-to-zoom and drag on exploded schematics.
  - **Instant QR Code & Wi-Fi Linking:** Access directly from your workbench phone without cables.
- **Real-Time Global Search:** Instant cross-category search across manuals, video timestamps, specs, and stoppage symptoms.
- **Extensible Architecture:** Standardized folder structure designed to scale to hundreds of firearms.

---

## 🚀 Quick Start

### 1. Requirements
- Python 3.10+
- `fastapi`, `uvicorn`, `httpx`, `pymupdf`, `qrcode`, `requests`

```bash
pip install fastapi uvicorn httpx pymupdf qrcode requests
```

### 2. Launch the Workbench
Double-click `run_workbench.bat` or run from terminal:

```bash
python -m uvicorn web_app.server:app --host 0.0.0.0 --port 8055
```

- **Desktop Browser:** 👉 `http://127.0.0.1:8055`
- **Mobile / Tablet (Same Wi-Fi):** Open `http://<your-lan-ip>:8055` (or click **Mobile Link** in the top header and scan the QR code with your phone camera!).

---

## 📂 Repository Directory Layout

```text
gunsmithing/
├── 00_REPOSITORY_INDEX.md                     # Master catalog & external archives guide
├── README.md                                  # Repository documentation
├── run_workbench.bat                          # One-click Windows desktop launcher
│
├── _tools/                                    # Automation utilities
│   ├── fetch_archive_manual.ps1               # Automated Internet Archive downloader
│   └── extract_pdf_schematics.py              # Automated PDF schematic extractor
│
├── web_app/                                   # Armorer's Workbench Web Application
│   ├── server.py                              # FastAPI backend & Local LLM proxy
│   └── static/
│       ├── index.html                         # Workbench UI
│       ├── app.css                            # Dark industrial theme
│       └── app.js                             # Interactive client logic
│
└── Lewis_Automatic_Machine_Gun/               # Lewis LMG Workshop Package
    ├── README.md                              # Complete Workshop Dossier & Armorer specs
    ├── manuals/                               # 8 Primary technical manuals (119 MB)
    │   ├── 1917_Savage_Arms_Lewis_Machine_Gun_Handbook.pdf
    │   ├── 1917_British_Instruction_on_the_Lewis_Automatic_Machine_Gun.pdf
    │   ├── 1940_UK_Armourers_Handbook_Part_III_Light_Machine_Guns.pdf
    │   ├── 1917_American_Machinist_Manufacture_of_the_Lewis_Machine_Gun.pdf
    │   ├── 1918_RAF_Instructional_Notes_on_the_Lewis_Gun.pdf
    │   ├── 1942_UK_How_to_Remedy_and_Prevent_Stoppages.pdf
    │   ├── 1940_UK_Guns_for_the_Home_Guard_Lewis.pdf
    │   └── 1942_Manual_of_Modern_Automatic_Guns.pdf
    ├── schematics/                            # 59 Extracted high-res plates
    └── videos/
        └── video_index.md                     # Curated YouTube bench videos
```

---

## 📖 Initial Firearm: Lewis Light Machine Gun

The repository launches with complete technical coverage for the **Lewis Light Machine Gun** (.303 British & .30-06 Springfield):

- **Armorer Specifications:**
  - *Mainspring Tension:* 12 to 14 lbs pull at cocking handle (~2 to 2.5 full turns of gear casing from slack).
  - *Striker Protrusion:* 0.050" to 0.060" through bolt face at full battery.
  - *Gas Regulator Ports:* 'S' (Small - normal operation) / 'L' (Large - foul/cold conditions).
  - *Headspace (.303):* 0.058" GO / 0.064" NO-GO / 0.070" FIELD.
- **The 4-Position Stoppage System:** Complete diagnostic matrix for Position 1 (Fully Forward), Position 2 (1"–2" Mid-Stroke), Position 3 (Near Rear), and Position 4 (Jammed Full Rear).
- **Curated Video Guides:**
  - *Anvil 033 (Mark Novak):* Machining replacement striker & op-rod repair.
  - *C&Rsenal Project Lightening:* Complete step-by-step field stripping & spring tension release.
  - *World of Guns:* Interactive 3D mechanical breakdown of all 62+ parts.

---

## 🌐 External Manual Archive Directory

For researching and downloading manuals for additional firearms, refer to `00_REPOSITORY_INDEX.md`:
- **Internet Archive (`archive.org`):** `collection:firearmsmanuals` (2,200+ manuals), British Government Military Publications, Vickers MG Association.
- **Steve's Pages (`stevespages.com`):** Extensive archive of factory manuals and exploded views.
- **Forgotten Weapons (`forgottenweapons.com`):** Rare military trials and factory patents.
- **Numrich Gun Parts (`gunpartscorp.com`):** Schematics, part keys, and cross-reference numbers.
- **BiggerHammer (`biggerhammer.net/manuals/`):** US military technical and depot maintenance manuals.

---

## 📜 License & Acknowledgments

All historical military manuals, Ordnance documents, and engineering texts included in this repository are in the **Public Domain**. Web application code is open-source under the MIT License.
