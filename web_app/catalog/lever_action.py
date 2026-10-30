"""
Lever Action Rifles Catalog Module for Armorer's Workbench.
Covers the Winchester 1894, Marlin 336 / 1895, and Henry Repeating Arms lines.
"""

from typing import Dict, Any

LEVER_ACTION: Dict[str, Dict[str, Any]] = {
    "Winchester_Model_1894": {
        "name": "Winchester Model 1894",
        "subtitle": "The Premier American Deer Rifle (.30-30 Winchester & .32 Win Special)",
        "manufacturer": "Winchester Repeating Arms / USRAC",
        "category": "Rifles & Carbines",
        "action_type": "Lever-Action Tubular Magazine Repeating Rifle",
        "operating_actions": ["Lever Action", "Locking Bolt Cam", "Tubular Magazine"],
        "types": ["Rifles & Carbines", "American Classic Hunting", "Western Heritage"],
        "caliber_categories": [".30-30 Winchester", ".32 Winchester Special", ".38-55 WCF"],
        "era": "American Deer Hunting Legend (1894–Present)",
        "models": ["Model 94 Carbine (20\")", "Model 94 Trapper (16\")", "Model 94 Sporter (24\")", "Model 94 Big Bore (.375 Win)"],
        "calibers": [".30-30 Winchester", ".32 Win Special", ".38-55 Winchester"],
        "key_tasks": ["Cartridge Stop & Carrier Timing", "Vertical Locking Bolt Upward Slide Engagement", "Loading Gate Spring Tension Adjustment", "Link Pin & Finger Lever Stoning", "Top-Eject vs Angle-Eject Disassembly"],
        "specs": {
            "locking_system": "Vertical sliding steel locking bolt rises up behind the breech bolt, completely supporting chamber pressure",
            "cartridge_stop": "Spring-loaded stop on bottom of carrier prevents second round from escaping tubular magazine into action",
            "angle_eject_change": "1982 redesign altered ejection angle to 45° to allow low-profile scope mounting over bore center",
            "ammunition_safety": "FLAT POINT OR SOFT POINT BULLETS ONLY: Pointed spitzer bullets in tubular magazines can detonate primer of round ahead under recoil"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Double Feed from Magazine Tube (Round Under Carrier)",
                "short_desc": "Opening lever releases one round onto carrier, but a second round slips halfway out of tube beneath carrier, jamming lever solid",
                "causes": [
                    "Worn or chipped cartridge stop lug on front of carrier.",
                    "Loose carrier screw on left receiver wall.",
                    "Weak or broken carrier spring."
                ],
                "action": "Immediate Action: DO NOT force lever. Use brass probe to push protruding cartridge back into magazine tube while slightly lifting lever. Gunsmith Action: Remove carrier. Inspect cartridge stop shelf. Square worn face with needle file or install new carrier. Tighten carrier screw with blue Loctite."
            }
        ],
        "videos": [
            {
                "id": "w8Win94x9M2w",
                "title": "Winchester Model 94 Complete Disassembly, Cleaning & Assembly",
                "creator": "Mark Novak / Anvil Gunsmithing",
                "category": "Classic Lever Gunsmithing",
                "url": "https://www.youtube.com/watch?v=w8Win94x9M2w",
                "embed_url": "https://www.youtube-nocookie.com/embed/w8Win94x9M2w",
                "summary": "Teardown of the Winchester 94 action: link pin, locking bolt, loading gate spring, hammer assembly, and timing the carrier."
            }
        ]
    },

    "Marlin_336_1895": {
        "name": "Marlin Model 336 & 1895 Series",
        "subtitle": "Solid Top-Receiver Side-Eject Lever Action (.30-30 Win & .45-70 Government)",
        "manufacturer": "Marlin Firearms / Ruger-Marlin",
        "category": "Rifles & Carbines",
        "action_type": "Lever-Action Side-Ejecting Repeating Rifle",
        "operating_actions": ["Lever Action", "Solid-Top Side Eject", "Flat-Top Scope Ready"],
        "types": ["Rifles & Carbines", "Big Game Hunting", "Guide Gun"],
        "caliber_categories": [".30-30 Winchester", ".45-70 Government", ".35 Remington"],
        "era": "Modern Lever Standard (1948–Present)",
        "models": ["Model 336 (.30-30 Win)", "Model 1895 Guide Gun (.45-70 Govt)", "Model 1894 (.357 Mag / .44 Mag)", "Model 336 Dark Series"],
        "calibers": [".30-30 Winchester", ".45-70 Government", ".35 Remington", ".444 Marlin"],
        "key_tasks": ["'Marlin Jam' Carrier Snail Cam Stoning & Radius", "Two-Piece Firing Pin Interlock Service", "Crossbolt Safety O-Ring Replacement", "Flat-Top Receiver Scope Torquing", "Finger Lever Plunger Tension Tuning"],
        "specs": {
            "solid_top_receiver": "One-piece steel receiver with solid top strap and side ejection port, inherently rigid for optic mounting",
            "marlin_jam_prevention": "Bottom edge of lever cam must be radiused and polished to prevent gouging a sharp notch into the carrier cam surface",
            "two_piece_firing_pin": "Rear firing pin segment drops out of alignment until lever is closed and locking bolt pushes it straight into battery",
            "crossbolt_safety": "Transverse hammer-blocking crossbolt safety with captive rubber O-ring detent"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: The Infamous 'Marlin Jam' (Lever Frozen at Mid-Stroke)",
                "short_desc": "Cycling lever forward causes carrier to fail to lift; lever binds with heavy mechanical resistance",
                "causes": [
                    "Sharp lower cam on finger lever has battered and gouged a groove into the carrier cam snail.",
                    "Carrier drops into the groove and gets trapped, preventing lever from completing stroke."
                ],
                "action": "Gunsmith Action: MARLIN JAM CURE: Remove lever and carrier. Hand-stone the notch out of the carrier snail surface flat with India stone. Round and mirror-polish the sharp tip of the finger lever cam so it glides across the carrier smoothly rather than gouging."
            }
        ],
        "videos": [
            {
                "id": "m8Mar336x9M2w",
                "title": "Fixing the Marlin Jam & Complete Model 336 / 1895 Disassembly",
                "creator": "Brownells Gunsmithing Bench",
                "category": "Lever Action Repair",
                "url": "https://www.youtube.com/watch?v=m8Mar336x9M2w",
                "embed_url": "https://www.youtube-nocookie.com/embed/m8Mar336x9M2w",
                "summary": "Step-by-step disassembly of the Marlin 336/1895, diagnosing and fixing the carrier jam, two-piece firing pin service, and trigger stoning."
            }
        ]
    },

    "Henry_Lever_Action": {
        "name": "Henry Classic & Big Boy Lever Action",
        "subtitle": "American-Made Tubular & Side-Gate Lever Rifles (.357 Mag, .44 Mag, .45 Colt, .22 LR)",
        "manufacturer": "Henry Repeating Arms",
        "category": "Rifles & Carbines",
        "action_type": "Lever-Action Transfer Bar Repeating Rifle",
        "operating_actions": ["Lever Action", "Transfer Bar Safety", "Side-Gate & Tube Feed"],
        "types": ["Rifles & Carbines", "American Craftsmanship", "Cowboy Action"],
        "caliber_categories": [".357 Magnum", ".44 Magnum", ".45 Colt", ".22 LR", ".30-30 Win"],
        "era": "Modern American Tradition (1996–Present)",
        "models": ["Henry Big Boy Brass", "Big Boy Steel Side Gate", "Golden Boy .22 LR", "Henry All-Weather"],
        "calibers": [".357 Magnum", ".44 Magnum", ".45 Colt", ".22 LR", ".30-30 Winchester"],
        "key_tasks": ["Transfer Bar Alignment & Safety Check", "Dual Loading System (Side-Gate & Magazine Tube)", "Receiver Cover Disassembly (Golden Boy)", "Lever Latch Spring Adjustment", "Ejector Spring Inspection"],
        "specs": {
            "dual_loading_system": "Modern Big Boy models feature BOTH a receiver side-loading gate AND a removable inner brass tube for rapid unloading",
            "safety_system": "Internal transfer bar mechanism (no unsightly crossbolt safety or hammer half-cock required)",
            "golden_boy_construction": "Die-cast alloy receiver with polished brasslite cover sleeve; barrel threaded into inner steel receiver core",
            "smooth_action": "Factory hand-polished rack-and-pinion / lever linkage renowned for glass-smooth out-of-the-box cycling"
        },
        "stoppages": [
            {
                "position": "Stoppage 1: Side Loading Gate Stiff / Pinching Cartridge Rim",
                "short_desc": "Cartridges difficult to push into side gate; loading gate leaf spring snaps back aggressively on thumb",
                "causes": [
                    "Factory loading gate spring temper has heavy initial preload.",
                    "Gate opening edge has sharp stamped burr."
                ],
                "action": "Gunsmith Action: Disassemble receiver. Remove loading gate screw. Lightly polish the inside ramp of the gate window with 800-grit paper. Hand-stone the spring leaf thickness slightly (0.002\"–0.003\") to reduce insertion effort while maintaining positive gate closure."
            }
        ],
        "videos": [
            {
                "id": "h8HenBBx9M2w",
                "title": "Henry Big Boy Complete Disassembly, Cleaning & Action Tuning",
                "creator": "MidwayUSA / Larry Potterfield",
                "category": "Bench Disassembly",
                "url": "https://www.youtube.com/watch?v=h8HenBBx9M2w",
                "embed_url": "https://www.youtube-nocookie.com/embed/h8HenBBx9M2w",
                "summary": "Teardown of the Henry Big Boy action: removing the bolt, extractor, transfer bar safety, and side-loading gate mechanism."
            }
        ]
    }
}
