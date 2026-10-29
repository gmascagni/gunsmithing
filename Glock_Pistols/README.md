# Glock Safe-Action Pistols — Gunsmith & Armorer Workshop Dossier

Comprehensive technical reference, armorer tolerances, field and detail disassembly instructions, diagnostics, troubleshooting matrix, and schematic index for Glock Gen 1 through Gen 5 pistols.

---

## 1. System Overview & Generations Architecture

The Glock Safe-Action system is a short-recoil operated, striker-fired semi-automatic handgun built around a polymer frame with steel slide inserts and a cold hammer-forged barrel.

### Generation Identification & Architectural Evolution

| Generation | Production | Key Design Characteristics | Armorer Service Distinctions |
| :--- | :--- | :--- | :--- |
| **Gen 1** | 1982–1988 | "Pebble" grip texture, 2-pin frame, single flat recoil spring. | Early non-captured recoil spring; pencil barrels. |
| **Gen 2** | 1988–1998 | Checkered front/back straps; introduced 3-pin frame (.40 S&W locking block reinforcement pin). | 3-pin configuration became standard for 9mm/40/357. |
| **Gen 3** | 1998–present | Added finger grooves, thumb rests, and universal accessory rail; loaded chamber indicator (LCI) extractor. | Universal standard; dual-pin locking block; standard trigger return tension spring. |
| **Gen 4** | 2010–2020 | Rough Textured Frame (RTF4), reversible magazine catch, modular backstrap system, dual-nested recoil spring. | Larger slide nose ring; redesigned trigger housing and connector angle; 30274 ejector update. |
| **Gen 5** | 2017–present | Removed finger grooves, flared magwell, ambidextrous slide stop, Glock Marksman Barrel (GMB, traditional rifling), nDLC finish. | Returned to 2-pin frame (reinforced locking block); captive trigger spring assembly; ramped safety plunger; teardrop striker tip. |

---

## 2. Technical Specifications & Critical Armorer Tolerances

```
CRUCIFORM SEAR ENGAGEMENT (INSPECTION COVER PLATE TEST):
   =============================================
   [ Striker Lug ]  ---> |████████████████| (Cruciform Sear Plate)
   ---------------------------------------------
   MINIMUM OVERLAP REQUIREMENT: >= 66% (2/3 full contact)
   FAILURE CONDITION: < 66% overlap -> Risk of accidental discharge or full-auto slip
```

| Component / Feature | Factory Specification | Inspection Standard / Tool |
| :--- | :--- | :--- |
| **Cruciform Sear Engagement** | $\ge 66\%$ (minimum 2/3 overlap) | Glock Orange Armorer Inspection Plate (`SP 02096`) under magnification |
| **Connector Bend Angle / Gap** | $0.005'' - 0.010''$ frame clearance | Feeler gauge between connector tab and trigger mechanism housing |
| **Striker Free Float** | Audible rattle when shaken front-to-back | Shake test with trigger forward (striker must move freely) |
| **Firing Pin Safety Plunger** | Positive block; flush when depressed | Thumb depression test: striker must not protrude until plunger is depressed |
| **Slide Rail Clearance** | Nominal lateral play $0.012'' - 0.024''$ | Dial indicator / feeler gauges across front/rear sub-rail inserts |
| **Recoil Spring Assembly Lifespan** | 3,000 to 5,000 rounds (Gen 1–3) / 5,000 to 7,500 (Gen 4–5) | Free length test: point pistol $45^\circ$ upward, dry fire, pull slide back $0.1''$, release. Must return into full battery unassisted |
| **Trigger Pull Weight (Factory)** | 5.5 lbs (Standard 5.5 connector) / 4.5 lbs (Dot/Minus) | Lyman digital trigger pull gauge |

---

## 3. Mandatory Lubrication Protocol (The "5-Drop Rule")

> [!CAUTION]
> **NEVER lubricate the firing pin channel, striker sleeve, or firing pin safety cavity.** Oil in the striker channel attracts brass shavings and carbon powder, forming a sludge that creates hydrodynamic drag, resulting in light primer strikes and failure to fire.

Apply exactly **five drops** of clean gun oil:
1. **Drop 1 & 2:** One drop split evenly across the two rear slide guide grooves.
2. **Drop 3 & 4:** One drop split evenly across the two front slide guide grooves.
3. **Drop 5:** One drop spread on the exterior surface of the barrel hood and barrel tube circumference.
4. **Half Drop (Crucial):** One tiny drop on the point where the trigger bar cruciform bird-head wipes across the connector cam ramp.

---

## 4. Complete Armorer Detail Disassembly Guide

### Phase A: Slide Detail Stripping
1. **Field Strip First:** Clear firearm, point in safe direction, verify empty chamber/magwell, pull trigger, retract slide 1/8", pull down both slide lock tabs, push slide forward off frame. Remove recoil spring assembly and barrel.
2. **Remove Slide Cover Plate:** Push firing pin spacer sleeve forward with a 3/32" armorer punch to relieve spring tension against the slide cover plate. Slide the backplate downward off the slide.
3. **Remove Firing Pin Assembly:** Withdraw the complete striker assembly (firing pin, cups, spring, and spacer sleeve) straight out rearward.
4. **Remove Extractor Depressor Assembly:** Extract the extractor depressor plunger, spring, and spring-loaded bearing (SLB) out the back.
5. **Remove Extractor & Safety Plunger:** Depress the round firing pin safety plunger with your thumb; pivot the extractor out of its ejection port socket. Release plunger and pull plunger with its tiny coil spring straight out.

### Phase B: Frame Detail Stripping (Gen 3 / 4)
1. **Remove Locking Block Pin (Top Pin):** Push from left to right using a 3/32" punch. *Always remove this top pin first to relieve upward spring pressure on the trigger pin below.*
2. **Remove Trigger Pin (Bottom Large Pin):** Wiggle the slide stop lever back and forth while applying light thumb pressure with the punch to align the internal wire spring detent. Push out left-to-right.
3. **Remove Slide Stop Lever:** Lift slide stop lever up and out.
4. **Remove Locking Block:** Pry gently upward from beneath the locking block ears using an armorer tool.
5. **Remove Trigger Mechanism Housing Pin (Rear Pin):** Push rear pin out from either side.
6. **Remove Trigger Mechanism & Bar:** Lift the trigger housing straight up while guiding the trigger bar and shoe out of the frame channel.
7. **Disengage Trigger Bar & Connector:** Twist trigger bar cruciform counter-clockwise $90^\circ$ to release the trigger spring hook; pry connector gently outward from the rear housing notch.

---

## 5. Comprehensive Stoppage & Troubleshooting Matrix

| Symptom / Malfunction | Probable Root Cause | Armorer Diagnostic Procedure | Corrective Action |
| :--- | :--- | :--- | :--- |
| **Failure to Fire (FTF) / Light Strikes** | 1. Oil/carbon fouling in striker channel.<br>2. Chipped firing pin tip.<br>3. Weak striker spring.<br>4. Trigger bar cruciform dragging on frame. | 1. Perform striker shake test (listen for metallic rattle).<br>2. Disassemble striker and inspect tip for erosion or fracture.<br>3. Test trigger bar clearance with feeler gauge. | 1. Clean firing pin channel completely dry with solvent & Q-tips (no oil).<br>2. Replace firing pin assembly.<br>3. Install fresh 24N (5.5 lb) factory striker spring. |
| **Failure to Extract / Stovepipe (FTE)** | 1. Chipped or rounded extractor claw.<br>2. Wrong spring-loaded bearing installed (SLB for LCI vs non-LCI).<br>3. Weak extractor plunger spring.<br>4. Bent or loose ejector bar. | 1. Inspect claw under $10\times$ loupe.<br>2. Verify SLB color code: Black for 9mm LCI, White for .40/.357 LCI.<br>3. Check ejector for loose staking or wobble. | 1. Replace extractor with OEM cast/machined claw.<br>2. Install correct SLB.<br>3. Upgrade ejector to Gen 4/5 30274 or 47021 spec. |
| **Failure to Return to Battery (FTRTB)** | 1. Exhausted recoil spring assembly (RSA).<br>2. Fouled chamber throat or lead fouling.<br>3. Outward connector bend angle too severe, pinching slide. | 1. $45^\circ$ vertical lockup battery test.<br>2. Drop Plunk test with live dummy round in clean barrel.<br>3. Remove slide and test connector drag. | 1. Replace RSA.<br>2. Deep clean chamber throat with bronze brush.<br>3. Adjust connector inward so gap is $0.005'' - 0.010''$. |
| **Failure to Reset Trigger / Double Click** | 1. Broken or dislodged trigger return spring.<br>2. Connector bent inward too far (failing to push trigger bar down).<br>3. Trigger shoe binding in frame. | 1. Rack slide while holding trigger; feel for tactile snap.<br>2. Inspect trigger spring orientation ("S" hook must curl up/down properly in Gen 1–4). | 1. Re-hook or replace trigger return spring.<br>2. Bend connector slightly outward until bottom lip contacts housing shelf. |
| **Pistol Fires on Trigger Reset (Full-Auto Burst)** | 1. **DANGEROUS:** Striker lug to cruciform engagement $< 66\%$.<br>2. Bubba/amateur trigger polish rounded the sear shelf.<br>3. Improper aftermarket connector installed. | 1. Install orange armorer inspection plate.<br>2. Measure overlap between striker lug and cruciform shelf with feeler gauge/loupe. | 1. **IMMEDIATELY REPLACE** trigger bar with OEM factory part.<br>2. Restore factory 5.5 lb connector.<br>3. Verify $\ge 66\%$ engagement before test firing. |

---

## 6. Curated Video References

Complete video guides with professional timestamps and armorer notes are indexed in [videos/video_index.md](file:///c:/Users/gmasc/Downloads/Gun%20Manuals/Glock_Pistols/videos/video_index.md).

- **Slide Detail Strip & Plunger Inspection:** [Brownells Armorer Video](https://www.youtube.com/watch?v=kYJjQn-B-Qc)
- **Frame Detail Strip (Gen 3, 4 & 5):** [GlockStore Tutorial](https://www.youtube.com/watch?v=oV0wDDFV0NY)
- **Safe-Action 3-Stage Armorer Inspection:** [Midwest Gun Works](https://www.youtube.com/watch?v=F0f631Z8m08)
- **Connector Angle Tuning & Clearance:** [Johnny Glocks](https://www.youtube.com/watch?v=Qh_B14eQzT4)
- **25¢ Trigger Polish Masterclass:** [Gunsmith Training Guide](https://www.youtube.com/watch?v=2mszC0g_yC4)

---

## 7. Manuals & Schematics Archive

- **Manuals:**
  - [Glock Armorers Manual Gen 1 to 5](file:///c:/Users/gmasc/Downloads/Gun%20Manuals/Glock_Pistols/manuals/Glock_Armorers_Manual_Gen_1_to_5.pdf) (140 pages, factory armorer course text)
  - [Glock Factory Armorers Manual](file:///c:/Users/gmasc/Downloads/Gun%20Manuals/Glock_Pistols/manuals/Glock_Factory_Armorers_Manual.pdf) (60 pages, technical specifications & schematics)
- **Extracted High-Res Schematics:**
  - 197 high-resolution plates stored in [Glock_Pistols/schematics/](file:///c:/Users/gmasc/Downloads/Gun%20Manuals/Glock_Pistols/schematics/).
