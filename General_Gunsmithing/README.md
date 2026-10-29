# General Gunsmithing — Workshop Technical Manual & Reference Guide

Master technical handbook and shop reference for professional gunsmiths, bench armorers, and custom firearm builders covering headspace measurement, chamber diagnostics, metal finishing, barrel crowning, action bedding, and fastener preservation.

---

## 1. Headspace Standards & Gauging Principles

Headspace is the distance measured from the breech face of the bolt to the datum feature on the chamber that arrests the forward travel of the cartridge case.

```
HEADSPACE DATUM MEASUREMENT POINTS:
  A. RIMMED (.303 Brit, 7.62x54R, .30-30, .357 Mag):
     Bolt Face |====================> [ Rim Face ] (Measures Rim Thickness)
  B. RIMLESS BOTTLENECK (.30-06, .308 Win, 5.56 NATO):
     Bolt Face |====================> [ Mid-Shoulder Datum Circle ]
  C. BELTED MAGNUM (.300 Win Mag, 7mm Rem Mag):
     Bolt Face |====================> [ Front Edge of Belt ]
  D. STRAIGHT-WALL RIMLESS (9mm Luger, .45 ACP):
     Bolt Face |====================> [ Chamber Mouth Step ] (Measures Case Length)
```

### The Three Gauge Standards:
1. **GO Gauge:** Represents the minimum chamber dimension that safely chambers factory ammunition manufactured to maximum SAAMI/CIP specifications. *The bolt must fully close and lock on the GO gauge without excessive force.*
2. **NO-GO Gauge:** Represents the maximum allowable headspace for a newly chambered firearm. *The bolt must NOT close on a NO-GO gauge with light finger pressure.*
3. **FIELD Gauge:** Represents the absolute maximum safe headspace for a serviceable, fired weapon before it must be condemned or re-barreled. *If the bolt closes on a FIELD gauge, the firearm is unsafe to fire due to severe risk of case head separation and high-pressure gas rupture.*

---

## 2. Chamber Casting with Cerrosafe Alloy

Cerrosafe is a bismuth-lead-tin-cadmium eutectic alloy formulated to exhibit unique thermal expansion/contraction properties, melting at a low $160^\circ\text{F} - 190^\circ\text{F}$ (well below the temperature of boiling water).

### The Critical Cerrosafe Measurement Timeline:
```
  Pour Time          30 Minutes               1 Hour                   24 Hours
     |-------------------|----------------------|--------------------------|
   Liquid              Shrinks                EXACT SIZE                Expands
                       (Allows removal)      (Take measurements!)       (+0.0025")
```

- **Pouring:** Thoroughly clean and degrease chamber. Push an oiled cotton patch into bore $1/2''$ forward of throat. Heat barrel breech gently with heat gun to prevent cold-shut lines. Melt Cerrosafe in clean ladle and pour steadily until chamber and $1/2''$ of bore is filled.
- **Extraction (15–30 min):** As it cools, Cerrosafe shrinks slightly. Tap casting gently out from the muzzle using a brass rod.
- **Measurement Window (Exactly 60 minutes after pouring):** At room temperature, the alloy has recovered to **100.000% of exact chamber dimensions**. Take all micrometer/caliper measurements now! After 24 hours, the cast expands by $+0.0025''$.

---

## 3. Metal Finishing & Restoration Standards

| Finish Type | Operating Temp | Chemical Reaction / Composition | Durability / Characteristics |
| :--- | :--- | :--- | :--- |
| **Traditional Slow Rust Bluing** | Ambient sweat box ($80^\circ\text{F}, 85\%\text{ RH}$) $\to$ Boiling water ($212^\circ\text{F}$) | Acid application induces ferric oxide ($\text{Fe}_2\text{O}_3$); boiling converts to ferrosoferric oxide ($\text{Fe}_3\text{O}_4$, magnetite). | Highest corrosion resistance of all chemical blues; velvety soft sheen; non-temper altering; ideal for double guns (soft-soldered ribs). |
| **Hot Caustic Salt Bluing** | $285^\circ\text{F} - 292^\circ\text{F}$ | Hot bath of sodium hydroxide ($\text{NaOH}$) and sodium nitrate ($\text{NaNO}_3$) oxidizing steel to black magnetite. | Deep satin/gloss black; fast batch processing (15–30 min); caustic hazard; will dissolve aluminum and melt soft-soldered ribs. |
| **Parkerizing (Phosphate)** | $190^\circ\text{F} - 205^\circ\text{F}$ | Manganese or Zinc phosphate dissolved in dilute phosphoric acid. | Matte grey/charcoal; porous crystalline structure holds heavy oil; standard military finish; extreme wear resistance. |
| **Cold Touch-Up Blue** | Room temperature | Selenium dioxide ($\text{SeO}_2$) and copper sulfate. | Thin chemical deposit; cosmetic touch-ups only; minimal corrosion resistance. |

---

## 4. Gunsmith Fasteners & Screwdriver Geometry

> [!CAUTION]
> **Never use standard tapered hardware/mechanic screwdrivers on firearm screws!** Standard tapered drivers exert wedge force upward on the screw slot, causing the bit to "cam-out" and burr or shear the screw head.

```
FASTENER TOOL FIT:
  Hardware Tapered Bit (BURRS SCREWS):      Gunsmith Hollow-Ground Bit (PERFECT FIT):
           \      /                                     |      |
            \    /   <-- Wedge angle                     |      |  <-- Parallel flanks
             \  /                                       |======|  (Fills slot completely)
```

### Standard Firearm Thread Pitches:
- **6-48 UNS:** Universal industry standard for rifle scope base mounts, sight ramps, and bead sights.
- **8-40 UNS:** Heavy-duty mount thread for magnum rifles, shotguns, and high-recoil optic rails.
- **Torque Guidelines:**
  - $6-48$ screws into steel receiver: $12 - 15\text{ in-lbs}$ with medium (blue) thread locker.
  - $8-40$ screws into steel receiver: $20 - 25\text{ in-lbs}$.
  - Optic ring cross-bolts: $25 - 30\text{ in-lbs}$ (steel) / $15 - 18\text{ in-lbs}$ (aluminum).
  - Scope ring cap screws: $15 - 18\text{ in-lbs}$ (never exceed scope tube crush rating).

---

## 5. Comprehensive Gunsmith Diagnostic & Repair Matrix

| Problem / Malfunction | Root Cause | Diagnostic Test | Professional Gunsmith Solution |
| :--- | :--- | :--- | :--- |
| **Stuck Fired Cartridge Case in Chamber** | 1. Severe chamber pitting or rust.<br>2. Extreme overpressure load.<br>3. Dirty fluted chamber. | Attempt extraction with brass rod; case rim shears off. | Pour Cerrosafe down bore against stuck case to create solid plug, or tap out using tight-fitting hardwood dowel / brass rod from muzzle with Kroil penetrant. |
| **Broken / Sheared Screw Below Receiver Surface** | Over-torqued fastener or improper thread locker. | Screw head snapped flush with receiver surface. | Clamp receiver in milling vise; center-punch dead center with optical punch; drill reverse pilot hole with left-hand drill bit (often backs screw out directly); extract with spiral screw extractor. |
| **Rifle Barrel Crown Damaged (Poor Accuracy)** | Dented muzzle rim from dropped rifle or cleaning rod wear. | Inspect bore exit under $20\times$ loupe; observe gas wash star pattern at muzzle. | Re-cut muzzle face perpendicular to bore axis; cut fresh $11^\circ$ recessed target crown using piloted Manson crowning tool with cutting oil. |
| **Trigger Creep & Gritty Pull** | Rough machine milling marks on sear and hammer notch engagement surfaces. | Measure trigger break on trigger force gauge; feel rough staging steps. | Stone sear and hammer notch using Norton Hard Translucent Arkansas stone in true-angle jig. Remove only microscopic peaks; **do NOT alter the $90^\circ$ engagement geometry**. |

---

## 6. Curated Video References

Complete video guides with professional timestamps and armorer notes are indexed in [videos/video_index.md](file:///c:/Users/gmasc/Downloads/Gun%20Manuals/General_Gunsmithing/videos/video_index.md).

- **Headspace Gauging Demystified (Go, No-Go, Field):** [Mark Novak / Anvil](https://www.youtube.com/watch?v=J98Fk7s2L_8)
- **Chamber Casting with Cerrosafe Alloy:** [Mark Novak / Anvil](https://www.youtube.com/watch?v=vV1p8_oG9_Q)
- **Traditional Slow Rust Bluing Masterclass:** [Mark Novak / Anvil](https://www.youtube.com/watch?v=48S-1jJ9t0k)
- **Cutting an 11-Degree Target Barrel Crown:** [MidwayUSA / Larry Potterfield](https://www.youtube.com/watch?v=eG_4kM_x900)
- **Rifle Action Glass Bedding & Pillars:** [Brownells Gun Techs](https://www.youtube.com/watch?v=VwK9T_P22o4)

---

## 7. Manuals & Schematics Archive

- **Manuals:**
  - [Practical Gunsmithing by American Gunsmith Editors](file:///c:/Users/gmasc/Downloads/Gun%20Manuals/General_Gunsmithing/manuals/Practical_Gunsmithing_American_Gunsmith.pdf) (260 pages, comprehensive bench reference on rifles, shotguns, handguns, tools, and metalwork)
  - [The Gunsmith's Manual - Practical Guide by Stelle & Harrison](file:///c:/Users/gmasc/Downloads/Gun%20Manuals/General_Gunsmithing/manuals/The_Gunsmiths_Manual_Practical_Guide.pdf) (394 pages, classic historic reference on metal treatments, hardening, tempering, and toolmaking)
- **Extracted High-Res Schematics:**
  - 267 high-resolution plates stored in [General_Gunsmithing/schematics/](file:///c:/Users/gmasc/Downloads/Gun%20Manuals/General_Gunsmithing/schematics/).
