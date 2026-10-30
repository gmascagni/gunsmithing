"""
Technical specifications, diagnostic stoppage matrices, and curated masterclass video references
for each firearm and gunsmithing platform in the technical repository.
"""

from typing import Dict, Any
from web_app.catalog import FIREARMS_CATALOG

# Master Firearms Metadata Dictionary
FIREARMS_METADATA: Dict[str, Dict[str, Any]] = FIREARMS_CATALOG
PARTS_CATALOG: Dict[str, Any] = {}

__all__ = ["FIREARMS_METADATA", "PARTS_CATALOG"]
