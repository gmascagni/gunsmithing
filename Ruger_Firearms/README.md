# Ruger Firearms — Gunsmith & Armorer Workshop Dossier

Comprehensive technical reference, armorer clearances, factory torque specifications, assembly tricks, and diagnostic troubleshooting matrices covering the **Ruger 10/22 Carbine**, **Ruger Mark Series Target Pistols (I, II, III, IV)**, and **Ruger GP100 Revolvers**.

---

## 1. System Architectures & Key Platforms

### A. Ruger 10/22 Carbine (.22 LR)
- **Action Type:** Blowback semi-automatic rimfire rifle with reciprocating bolt and modular aluminum or polymer trigger housing.
- **Barrel Interface:** Patented wedge V-block clamping system securing the unthreaded barrel tenon into the cast receiver without requiring barrel threading or press-fitting.
- **Feed System:** Rotary spool magazine with clockwork spiral spring; flush fit under receiver.

### B. Ruger Mark Series Pistols (.22 LR: Mark I, II, III, IV)
- **Mark I & Standard (1949–1982):** Stamped receiver halves welded together; bolt cycles inside cylindrical tubular receiver; bottom heel magazine latch; manual bolt hold-open.
- **Mark II (1982–2005):** Added automatic bolt lock on empty magazine, slide lock lever, scalloped rear receiver cutouts for bolt grasping.
- **Mark III (2004–2016):** Added loaded chamber indicator (LCI) paddle, push-button 1911-style magazine release, magazine disconnect safety mechanism.
- **Mark IV (2016–present):** Completely re-engineered receiver and frame. Solved the 65-year field-strip dilemma with a single rear push-button hinge pivot mechanism; redesigned 1-piece machined aluminum or stainless steel frame.

### C. Ruger GP100 Revolver (.357 Magnum / .38 Special / .327 Fed Mag)
- **Construction:** Solid-frame double-action revolver with modular subassemblies (no sideplate). Grip frame is an integral stud allowing custom rubber/wood grip ergonomics.
- **Triple-Locking Cylinder:** Cylinder locks positively into frame at crane latch, front ejector rod detent, and cylinder base pin.
- **Safety:** Transfer bar safety prevents hammer from striking firing pin unless trigger is held fully to the rear.

---

## 2. Factory Torques, Clearances & Armorer Tolerances

```
RUGER 10/22 V-BLOCK BARREL CLAMPING:
      Receiver Tenon
      [===========] ======> Barrel Shank
          \   /
           \V/  <-- V-Block Clamp (25 - 30 in-lbs alternating)
```

| Model | Component / Fastener | Factory Specification | Inspection Tool |
| :--- | :--- | :--- | :--- |
| **10/22** | Takedown Action Screw | $15 - 20\text{ in-lbs}$ (wood/poly) / $25\text{ in-lbs}$ (pillar) | Wheeler FAT Wrench / inch-lb torque driver |
| **10/22** | Barrel V-Block Screws | $25 - 30\text{ in-lbs}$ (tighten evenly in alternation) | $5/32''$ Hex bit torque driver |
| **10/22** | Receiver Scope Base Screws | $12 - 15\text{ in-lbs}$ with blue Loctite | $6-48$ hollow-ground driver bit |
| **10/22** | Bolt Headspace (Rim Recess) | $0.0425'' - 0.0435''$ depth | Rimfire depth micrometer |
| **Mark I–IV** | Bolt Face Recess Depth | $0.042'' - 0.044''$ | Depth micrometer |
| **Mark I–III** | Hammer Strut Free Float | Freely pivoting; tip unbent | Visual / finger test |
| **GP100** | Barrel-to-Cylinder Gap (BCG) | $0.004'' - 0.007''$ nominal (Max $0.008''$) | Flat feeler gauges between barrel cone & cylinder face |
| **GP100** | Cylinder Endshake (Axial Play) | $\le 0.002''$ maximum allowable | Feeler gauge differential (cylinder forward vs backward) |
| **GP100** | Cartridge Headspace | $0.060'' - 0.068''$ | Feeler gauge between case head / cylinder face & recoil shield |
| **GP100** | Firing Pin Protrusion | $0.048'' - 0.055''$ | Firing pin protrusion gauge with transfer bar held up |

---

## 3. The Ruger Mark Series Reassembly Guide ("Taming the Jigsaw")

> [!IMPORTANT]
> The primary cause of locked or jammed Ruger Mark I, II, and III pistols during reassembly is **incorrect hammer strut orientation**. When closing the mainspring housing, the dangling hammer strut must nest directly into the mainspring housing plunger cup. If the strut misses the cup and lodges against the cross pin, the bolt cannot be retracted and the gun will seize.

### Step-by-Step Fail-Safe Procedure for Mark I/II/III:
1. **Seat Receiver onto Frame:** Hook front receiver lug onto frame pin, swing receiver down, and tap gently rearward with a plastic mallet until receiver stop pin hole aligns with frame hole.
2. **Rotate Hammer Forward:** Insert empty magazine (Mark III only), pull trigger, and push hammer all the way forward into fired position.
3. **Insert Mainspring Bolt Stop Pin:** Push the bolt stop pin up through the frame and receiver from the bottom until its top protrudes flush above the top receiver hole.
4. **The Gravity Swing Technique:**
   - Point pistol muzzle **$45^\circ$ UPWARD** and pull trigger (allows hammer to pivot rearward toward cocked).
   - Point pistol muzzle **$45^\circ$ DOWNWARD** and pull trigger (allows hammer to drop forward).
   - Now, tilt pistol with muzzle pointing **UPWARD at $60^\circ$ to $90^\circ$** so gravity swings the loose hammer strut rearward toward the backstrap.
5. **Close the Housing Latch:** As you swing the mainspring housing closed into the grip frame, feel for spring resistance during the last $1/2''$ of travel.
   - If resistance is felt: The hammer strut has properly engaged the mainspring cup! Snap the latch shut.
   - If latch closes loose with zero spring tension: The strut missed the cup. Open the latch, tilt muzzle up, and retry.

---

## 4. Comprehensive Stoppage & Troubleshooting Matrix

### Ruger 10/22 Carbine
| Malfunction | Root Cause | Armorer Inspection | Corrective Action |
| :--- | :--- | :--- | :--- |
| **Stovepipe / Extraction Failure** | 1. Chipped factory stamped extractor.<br>2. Dirty extractor spring cavity.<br>3. Loose or canted V-block. | Inspect hook sharpness under $10\times$ loupe. Check claw angle ($<90^\circ$). | Replace with wire-EDM hardened tool-steel extractor (Volquartsen/Kidd). Deep clean bolt pocket. |
| **Failure to Feed (Nose Up/Jam)** | 1. Loose rotary magazine clock spring.<br>2. Action screw over-torqued into stock.<br>3. Barrel droop from uneven V-block tension. | Check magazine rotor tension ($1.25$ turns). Measure action screw torque ($>25$ in-lbs distorts receiver). | Re-tension magazine spring. Torque action screw to $18\text{ in-lbs}$. Re-torque V-block to $28\text{ in-lbs}$ evenly. |
| **Light Primer Strikes** | 1. Firing pin stop pin missing/damaged.<br>2. Hammer strut washer upside down.<br>3. Bolt not seating fully forward into battery. | Remove bolt; verify firing pin rebound spring and stop pin. Check hammer strut notch. | Install hammer strut washer with notch facing UPWARD. Deburr chamber mouth (ironing chamber rim dings). |

### Ruger Mark Series Pistols
| Malfunction | Root Cause | Armorer Inspection | Corrective Action |
| :--- | :--- | :--- | :--- |
| **Pistol Completely Seized After Assembly** | Hammer strut lodged outside mainspring cup behind cross pin. | Bolt cannot move back; mainspring housing feels rock-solid. | Drift out mainspring housing pivot pin or insert bent probe to lift strut into cup. Follow Section 3 gravity swing technique. |
| **Magazine Does Not Drop Free (Mk III)** | Factory magazine safety disconnect spring binding against frame wall. | Magazine binds after eject button pressed. | Install aftermarket Mark II style hammer bushing (Tandemkross/Volquartsen) to eliminate disconnect drag. |
| **Failure to Extract fired casing** | Dirty chamber ring (carbon ring buildup at rimfire case mouth). | Swab chamber with cotton patch; feel resistance at 0.700" depth. | Clean chamber with bronze .224 chamber brush and carbon-cutting solvent (Bore Tech / Hoppes). |

### Ruger GP100 Revolver
| Malfunction | Root Cause | Armorer Inspection | Corrective Action |
| :--- | :--- | :--- | :--- |
| **Cylinder Binds During Double Action Rotation** | 1. Excessive cylinder endshake ($>0.002''$) dragging on barrel cone.<br>2. Lead/carbon fouling on front face of cylinder.<br>3. Loose ejector rod. | Measure barrel-cylinder gap while holding cylinder forward vs backward. | Clean cylinder face with lead removal cloth. Install stainless crane shims ($0.002''$) to eliminate endshake. |
| **Failure to Carry Up / Cylinder Mismatch** | Worn extractor star ratchet teeth or worn cylinder hand pawl. | Cock hammer very slowly in single action; observe if cylinder locks before hammer engages full sear. | Stone or replace hand (pawl); adjust ratchet contact surface to restore synchronized timing. |
| **Light Strikes on Magnum Primers** | Bubba spring job installed overly light hammer spring without extended firing pin. | Measure trigger pull ($<8$ lbs DA usually misfires on hard CCI magnum primers). | Install 10 lb or 12 lb factory/Wolff hammer spring or install extended firing pin ($0.055''$ protrusion). |

---

## 5. Curated Video References

Complete video guides with professional timestamps and armorer notes are indexed in [videos/video_index.md](file:///c:/Users/gmasc/Downloads/Gun%20Manuals/Ruger_Firearms/videos/video_index.md).

- **10/22 Detail Disassembly & Modular Strip:** [MidwayUSA / Larry Potterfield](https://www.youtube.com/watch?v=F3aJ2Y4m0Xo)
- **10/22 Extractor Tuning & Headspace:** [Brownells Gun Techs](https://www.youtube.com/watch?v=RkLq7oUaF88)
- **Ruger Mark Series Reassembly Masterclass:** [GunBlue490 Takedown Guide](https://www.youtube.com/watch?v=b4Owh_qH_5k)
- **GP100 Detail Disassembly & Modular Strip:** [GunBlue490 Armorer Guide](https://www.youtube.com/watch?v=u1j9qG-Z-84)
- **Revolver Timing, Gap & Endshake Tuning:** [MidwayUSA Workshop](https://www.youtube.com/watch?v=8V-w6Qz7fK0)

---

## 6. Manuals & Schematics Archive

- **Manuals:**
  - [Ruger 10/22 Carbine Manual](file:///c:/Users/gmasc/Downloads/Gun%20Manuals/Ruger_Firearms/manuals/Ruger_10_22_Carbine_Manual.pdf) (22 pages, exploded parts breakdown & operation)
  - [Ruger Mark I Standard Pistol Manual](file:///c:/Users/gmasc/Downloads/Gun%20Manuals/Ruger_Firearms/manuals/Ruger_Mark_I_Standard_Pistol_Manual.pdf) (11 pages, original factory instructions & parts)
  - [Ruger GP100 Revolver Manual](file:///c:/Users/gmasc/Downloads/Gun%20Manuals/Ruger_Firearms/manuals/Ruger_GP100_Revolver_Manual.pdf) (37 pages, assembly diagrams & service guidelines)
- **Extracted High-Res Schematics:**
  - 51 high-resolution plates stored in [Ruger_Firearms/schematics/](file:///c:/Users/gmasc/Downloads/Gun%20Manuals/Ruger_Firearms/schematics/).
