"""
Gunsmith Armory Master Firearms Catalog.
Aggregates all 50+ curated firearm platforms and workshop disciplines.
"""

from typing import Dict, Any

from .striker_pistols import STRIKER_PISTOLS
from .hammer_pistols import HAMMER_PISTOLS
from .revolvers import REVOLVERS
from .msr_rifles import MSR_RIFLES
from .bolt_action import BOLT_ACTION
from .lever_action import LEVER_ACTION
from .shotguns import SHOTGUNS
from .battle_historic import BATTLE_HISTORIC
from .workshop import WORKSHOP

# Master aggregated dictionary of all firearms
FIREARMS_CATALOG: Dict[str, Dict[str, Any]] = {
    **STRIKER_PISTOLS,
    **HAMMER_PISTOLS,
    **REVOLVERS,
    **MSR_RIFLES,
    **BOLT_ACTION,
    **LEVER_ACTION,
    **SHOTGUNS,
    **BATTLE_HISTORIC,
    **WORKSHOP
}

__all__ = ["FIREARMS_CATALOG"]
