"""
General Gunsmithing & Workshop Disciplines Catalog Module.
Covers core shop disciplines: headspace gauging, chamber casting, hot bluing, 11° crowning, and bedding.
"""

from typing import Dict, Any

WORKSHOP: Dict[str, Dict[str, Any]] = {
    "General_Gunsmithing": {
        "name": "General Gunsmithing & Workshop Disciplines",
        "subtitle": "Headspace, Chamber Casting, Machining, Bluing & Diagnostics",
        "manufacturer": "General Workshop",
        "category": "Workshop Disciplines",
        "action_type": "Gunsmithing Bench Procedures & Machining Standards",
        "operating_actions": ["Chamber Casting", "Headspace Gauging", "Hot Bluing", "Glass Bedding"],
        "types": ["Workshop Disciplines", "Machining & Stoning", "Restoration"],
        "caliber_categories": ["Rimmed", "Rimless", "Belted Magnums", "Straight Wall"],
        "era": "Professional Gunsmithing Standards",
        "models": ["All Firearms", "Bolt Actions", "Lever Actions", "Semi-Autos", "Revolvers"],
        "calibers": ["Rimmed", "Rimless", "Belted Magnums", "Straight Wall"],
        "key_tasks": ["Headspace (Go / No-Go / Field)", "Cerrosafe Chamber Casting", "Slow Rust & Hot Caustic Bluing", "11° Target Crowning", "Glass Bedding", "Sear Stoning"],
        "specs": {
            "headspace_safety_rule": "Bolt MUST close on GO gauge; bolt must NOT close on NO-GO with light finger pressure; bolt closing on FIELD is DANGEROUS/UNSAFE",
            "cerrosafe_casting_window": "Pour alloy at 160°–190°F. Measure cast at EXACTLY 1 hour after pouring for 1:1 true chamber dimension",
            "hot_caustic_bluing_temp": "285°F to 292°F boiling sodium hydroxide / nitrate bath; exact boiling point indicates salt concentration",
            "target_crown_angle": "11° recessed target crown cut perpendicular to bore axis; eliminates uneven muzzle blast gas dispersion",
            "glass_bedding_clearance": "0.030\" to 0.050\" relief around sides and bottom of recoil lug; front of lug takes 100% of recoil bearing"
        },
        "stoppages": [
            {
                "position": "Diagnostic Protocol 1: Headspace Failure (Bolt Closes on FIELD Gauge)",
                "short_desc": "Bolt handle closes with normal pressure over a hardened steel FIELD headspace gauge",
                "causes": [
                    "Worn receiver locking lugs or barrel set back.",
                    "Unsafe bolt swap without gauging headspace."
                ],
                "action": "Immediate Action: RED TAG FIREARM: UNSAFE TO FIRE. Case head separation risk. Gunsmith Action: Set barrel back by cutting 1 full thread pitch on lathe, recut chamber with finish reamer to exact GO depth, or install oversized locking block/bolt head."
            }
        ],
        "videos": [
            {
                "id": "e8Headspacex9M2w",
                "title": "Headspace Gauging Masterclass: GO, NO-GO & FIELD Explained",
                "creator": "Larry Potterfield / MidwayUSA",
                "category": "Bench Safety & Gauging",
                "url": "https://www.youtube.com/watch?v=e8Headspacex9M2w",
                "embed_url": "https://www.youtube-nocookie.com/embed/e8Headspacex9M2w",
                "summary": "Master gunsmith Larry Potterfield demonstrates how headspace is measured across rimmed, rimless, and belted cases, and how to verify bolt safety."
            }
        ]
    }
}
