"""
Armorer RAG Engine: Master Gunsmith Grounding & Retrieval Engine.
Indexes and retrieves authentic technical manuals, military TMs, factory armorers guides,
specifications, schematic component callouts, and stoppage matrices across all platforms.
"""

import os
import sys
import re
import json
import math
from pathlib import Path
from typing import List, Dict, Any, Optional, Tuple

import fitz  # PyMuPDF

BASE_DIR = Path(__file__).resolve().parent.parent
if str(BASE_DIR) not in sys.path:
    sys.path.insert(0, str(BASE_DIR))

CACHE_DIR = BASE_DIR / "web_app" / "cache"
CACHE_FILE = CACHE_DIR / "rag_index.json"

try:
    from web_app.firearms_data import FIREARMS_METADATA
except ImportError:
    from firearms_data import FIREARMS_METADATA

try:
    from web_app.parts_data import PARTS_DATABASE
except ImportError:
    PARTS_DATABASE = {}

# Universal Gunsmith Domain Ontology & Thesaurus
GUNSMITH_ONTOLOGY = {
    # Malfunctions & Diagnostics
    "stovepipe": ["stovepipe", "ejection", "port", "casing", "sideways", "extractor", "claw", "ejector", "hook"],
    "double_feed": ["double", "feed", "cartridges", "magazine", "lips", "follower", "ramp", "jam"],
    "fte": ["extract", "extractor", "casing", "chamber", "carbon", "ring", "plunger", "hook", "burr", "stuck"],
    "failure_to_extract": ["extract", "extractor", "casing", "chamber", "carbon", "ring", "plunger", "hook"],
    "ftej": ["eject", "ejector", "nose", "angle", "clearance", "port", "stovepipe", "bar", "spring"],
    "failure_to_eject": ["eject", "ejector", "nose", "clearance", "port", "stovepipe", "ejector", "bar"],
    "misfire": ["light", "strike", "misfire", "primer", "protrusion", "striker", "firing", "pin", "spring", "carbon"],
    "light_strike": ["light", "strike", "misfire", "primer", "protrusion", "striker", "firing", "pin", "indent"],
    "slam_fire": ["slam", "fire", "premature", "percussion", "firing", "pin", "free", "floating", "inertia"],
    "out_of_battery": ["battery", "locking", "lug", "rotation", "disconnector", "disconnect", "gap", "battery"],
    "push_off": ["push", "off", "sear", "hammer", "notch", "engagement", "single", "action", "full", "cock"],
    "barrel_droop": ["droop", "v-block", "clamp", "torque", "screws", "wedge", "cant", "elevation", "bedding"],
    "keyholing": ["keyholing", "yaw", "tumbling", "rifling", "twist", "crown", "muzzle", "throat", "erosion"],
    "squib": ["squib", "bore", "obstruction", "bullet", "lodged", "powder", "primer", "barrel"],
    "cylinder_bind": ["cylinder", "bind", "endshake", "ejector", "rod", "crane", "ratchet", "expansion"],
    "lead_spitting": ["cylinder", "gap", "forcing", "cone", "timing", "alignment", "revolver", "spitting"],
    "pierced_primer": ["pierced", "primer", "firing", "pin", "protrusion", "cratering", "flow", "chamfer"],

    # Common Operations, Tolerances & Assemblies
    "headspace": ["headspace", "go", "no-go", "field", "gauge", "rimless", "rimmed", "datum", "breech", "closing"],
    "v-block": ["v-block", "clamp", "torque", "screws", "10-15", "in-lbs", "barrel", "tenon", "droop"],
    "torque": ["in-lbs", "ft-lbs", "torque", "inch-pounds", "wrench", "staking", "tighten", "specification"],
    "gas_key": ["carrier", "key", "gas", "key", "staking", "torque", "50-58", "in-lbs", "carrier", "screws"],
    "castle_nut": ["castle", "nut", "receiver", "extension", "buffer", "tube", "staking", "38-42", "ft-lbs"],
    "cruciform": ["cruciform", "sear", "drop", "safety", "shelf", "66%", "engagement", "trigger", "bar", "plate"],
    "rotary_magazine": ["rotary", "magazine", "clock", "spring", "1-1/4", "turns", "450", "degrees", "rotor", "hex"],
    "locking_block": ["locking", "block", "wings", "d-spring", "dogbone", "pin", "falling", "block", "beretta"],
    "cleaning": ["solvent", "carbon", "brush", "lube", "oil", "grease", "patches", "copper", "bore", "clean"],
    "disassembly": ["field", "strip", "detail", "strip", "takedown", "pin", "punch", "unscrew", "drift", "remove"],
}

ARMORER_HEADER_KEYWORDS = re.compile(
    r"\b(WARNING|CAUTION|DANGER|NOTE|IMPORTANT|DISASSEMBLY|ASSEMBLY|CLEANING|"
    r"LUBRICATION|MAINTENANCE|INSPECTION|STOPPAGE|MALFUNCTION|SPECIFICATIONS|"
    r"TOLERANCES|PARTS LIST|EXPLODED VIEW|TO LOAD|TO UNLOAD|UNJAMMING|"
    r"SIGHT ADJUSTMENT|HEADSPACE|TRIGGER|BARREL|BOLT|RECEIVER|MAGAZINE|"
    r"OPERATION|NOMENCLATURE|REPAIR|SAFETY|TORQUE|V-BLOCK)\b",
    re.IGNORECASE
)


class ArmorerRAGEngine:
    def __init__(self):
        self.chunks: List[Dict[str, Any]] = []
        self.doc_freq: Dict[str, int] = {}
        self.total_docs: int = 0
        self.avg_doc_len: float = 0.0
        self.initialized = False
        self.ensure_cache_dir()

    def ensure_cache_dir(self):
        CACHE_DIR.mkdir(parents=True, exist_ok=True)

    def tokenize(self, text: str) -> List[str]:
        """Tokenization preserving model numbers, calibers, and decimal tolerances."""
        return [w.lower() for w in re.findall(r"\b[a-zA-Z0-9_\-\.\/]{2,}\b", text)]

    def extract_pdf_chunks(self, pdf_path: Path, fid: str, fname: str, mfg: str) -> List[Dict[str, Any]]:
        chunks = []
        try:
            doc = fitz.open(pdf_path)
        except Exception as e:
            print(f"[RAG] Warning reading {pdf_path.name}: {e}")
            return []

        doc_title = pdf_path.stem.replace("_", " ")
        max_pages = min(len(doc), 150)
        active_section = "General Description & Armorer Overview"
        overlap_buffer = ""

        for page_idx in range(max_pages):
            page = doc[page_idx]
            blocks = page.get_text("blocks")
            if not blocks:
                continue

            page_text_blocks = []
            for b in blocks:
                if b[6] != 0:  # text blocks only
                    continue
                b_txt = b[4].strip()
                if not b_txt or len(b_txt) < 3:
                    continue

                lines = [ln.strip() for ln in b_txt.splitlines() if ln.strip()]
                if not lines:
                    continue
                first_line = lines[0]

                # Detect armorer section headers
                if len(first_line) < 80 and not first_line.isdigit():
                    m = ARMORER_HEADER_KEYWORDS.search(first_line)
                    if m:
                        clean_h = re.sub(r"[\u2010-\u2015\u2022\u00ae\u2122\ufffd]", " ", first_line).strip()
                        clean_h = " ".join(clean_h.split())
                        if len(clean_h) >= 4 and not clean_h.lower().startswith("state-by-state"):
                            active_section = clean_h

                page_text_blocks.append(b_txt)

            if not page_text_blocks:
                continue

            full_page_text = "\n\n".join(page_text_blocks)
            if len(full_page_text) < 40:
                continue

            # If page text fits within standard single chunk, emit immediately
            if len(full_page_text) <= 1500:
                header_lead = f"Platform: {fname} ({mfg})\nDocument: {doc_title} (Page {page_idx + 1})\nSection: {active_section}\n\n"
                content = (overlap_buffer + "\n" + full_page_text).strip() if overlap_buffer else full_page_text
                chunk_body = (header_lead + content)[:2200]
                chunks.append({
                    "id": f"{fid}_{pdf_path.name}_p{page_idx+1}_c1",
                    "firearm_id": fid,
                    "manual_filename": pdf_path.name,
                    "manual_title": doc_title,
                    "page": page_idx + 1,
                    "section": active_section,
                    "text": chunk_body,
                    "tokens": self.tokenize(chunk_body)
                })
                overlap_buffer = f"[Context: {active_section}] " + full_page_text[-180:]
            else:
                # Procedural multi-block chunking with 150-char sliding lookback window
                paragraphs = full_page_text.split("\n\n")
                current_chunk = []
                curr_len = 0
                sub_idx = 1

                for p in paragraphs:
                    p_clean = p.strip()
                    if not p_clean:
                        continue
                    if curr_len + len(p_clean) > 1300 and current_chunk:
                        body_text = "\n\n".join(current_chunk)
                        if overlap_buffer:
                            body_text = overlap_buffer + "\n\n" + body_text
                        header_lead = f"Platform: {fname} ({mfg})\nDocument: {doc_title} (Page {page_idx + 1})\nSection: {active_section} [Part {sub_idx}]\n\n"
                        full_body = (header_lead + body_text)[:2200]
                        chunks.append({
                            "id": f"{fid}_{pdf_path.name}_p{page_idx+1}_c{sub_idx}",
                            "firearm_id": fid,
                            "manual_filename": pdf_path.name,
                            "manual_title": doc_title,
                            "page": page_idx + 1,
                            "section": f"{active_section} [Part {sub_idx}]",
                            "text": full_body,
                            "tokens": self.tokenize(full_body)
                        })
                        overlap_buffer = f"[Context: {active_section}] " + body_text[-180:]
                        current_chunk = [p_clean]
                        curr_len = len(p_clean)
                        sub_idx += 1
                    else:
                        current_chunk.append(p_clean)
                        curr_len += len(p_clean)

                if current_chunk:
                    body_text = "\n\n".join(current_chunk)
                    if overlap_buffer:
                        body_text = overlap_buffer + "\n\n" + body_text
                    header_lead = f"Platform: {fname} ({mfg})\nDocument: {doc_title} (Page {page_idx + 1})\nSection: {active_section} [Part {sub_idx}]\n\n"
                    full_body = (header_lead + body_text)[:2200]
                    chunks.append({
                        "id": f"{fid}_{pdf_path.name}_p{page_idx+1}_c{sub_idx}",
                        "firearm_id": fid,
                        "manual_filename": pdf_path.name,
                        "manual_title": doc_title,
                        "page": page_idx + 1,
                        "section": f"{active_section} [Part {sub_idx}]",
                        "text": full_body,
                        "tokens": self.tokenize(full_body)
                    })
                    overlap_buffer = f"[Context: {active_section}] " + body_text[-180:]

        return chunks

    def index_all(self, force_rebuild: bool = False):
        """Builds or loads the indexed technical chunks from cache or PDFs."""
        if not force_rebuild and CACHE_FILE.exists():
            try:
                with open(CACHE_FILE, "r", encoding="utf-8") as f:
                    data = json.load(f)
                    self.chunks = data.get("chunks", [])
                    self.doc_freq = data.get("doc_freq", {})
                    self.total_docs = len(self.chunks)
                    self.avg_doc_len = data.get("avg_doc_len", 50.0)
                    self.initialized = True
                    print(f"[RAG] Loaded {self.total_docs} Master Armorer chunks from cache.")
                    return
            except Exception as e:
                print(f"[RAG] Cache load failed: {e}. Rebuilding index...")

        print("[RAG] Building Master Gunsmith technical index across all 53 platforms...")
        self.chunks = []

        # 1. Curated Specifications & Factory Tolerances
        for fid, meta in FIREARMS_METADATA.items():
            fname = meta.get("name", fid)
            mfg = meta.get("manufacturer", "Workshop")
            sub = meta.get("subtitle", "")
            specs = meta.get("specs", {})
            if specs:
                lines = [f"Platform: {fname} ({mfg}) Factory Armorer Specifications & Tolerances"]
                lines.append(f"Subtitle: {sub}")
                lines.append("Bench Tolerances & Critical Dimensions:")
                for k, v in specs.items():
                    label = k.replace("_", " ").title()
                    lines.append(f"- {label}: {v}")
                text_block = "\n".join(lines)
                self.chunks.append({
                    "id": f"{fid}_specs",
                    "firearm_id": fid,
                    "manual_filename": "Factory_Armorer_Dossier",
                    "manual_title": f"{fname} Factory Specifications & Tolerances",
                    "page": 1,
                    "section": "Specifications & Tolerances",
                    "text": text_block,
                    "tokens": self.tokenize(text_block)
                })

        # 2. Curated Diagnostic Stoppage Matrices
        for fid, meta in FIREARMS_METADATA.items():
            fname = meta.get("name", fid)
            stoppages = meta.get("stoppages", [])
            for s_idx, s in enumerate(stoppages):
                pos = s.get("position", f"Stoppage {s_idx+1}")
                s_desc = s.get("short_desc", "")
                remedy = s.get("action", "") or s.get("remedy", "")
                raw_causes = s.get("causes", "") or s.get("root_causes", "")
                causes = "; ".join(raw_causes) if isinstance(raw_causes, list) else str(raw_causes)
                text_block = (
                    f"Platform: {fname} Malfunction Diagnostic Matrix\n"
                    f"Stoppage Position: {pos}\n"
                    f"Symptom / Indicator: {s_desc}\n"
                    f"Probable Mechanical Causes: {causes}\n"
                    f"Armorer Corrective Action: {remedy}\n"
                )
                self.chunks.append({
                    "id": f"{fid}_stop_{s_idx+1}",
                    "firearm_id": fid,
                    "manual_filename": "Factory_Stoppage_Matrix",
                    "manual_title": f"{fname} Malfunction Diagnostics ({pos})",
                    "page": s_idx + 1,
                    "section": f"Diagnostic: {pos}",
                    "text": text_block,
                    "tokens": self.tokenize(text_block)
                })

        # 3. Schematic Component Callouts & Maintenance Protocols (PARTS_DATABASE)
        for fid, parts_list in PARTS_DATABASE.items():
            fname = FIREARMS_METADATA.get(fid, {}).get("name", fid.replace("_", " "))
            for p in parts_list:
                c_name = p.get("name", "Component")
                c_num = p.get("callout_num", "")
                c_oem = p.get("oem_number", "")
                c_ass = p.get("assembly", "Subassembly")
                c_tol = p.get("tolerances", "")
                c_mal = p.get("malfunctions", "")
                c_mnt = p.get("maintenance", "")
                part_text = (
                    f"Platform: {fname} Component Specification & Schematic Callout\n"
                    f"Component Name: {c_name} ({c_num})\n"
                    f"OEM Part Number: {c_oem}\n"
                    f"Subassembly Group: {c_ass}\n"
                    f"Critical Tolerances & Fitting: {c_tol}\n"
                    f"Associated Malfunctions: {c_mal}\n"
                    f"Master Armorer Maintenance Protocol: {c_mnt}\n"
                )
                self.chunks.append({
                    "id": f"{fid}_{p.get('id', c_num)}",
                    "firearm_id": fid,
                    "manual_filename": "Schematic_Parts_Directory",
                    "manual_title": f"{fname} Component Guide: {c_name}",
                    "page": 1,
                    "section": f"Schematic Callout: {c_num} ({c_name})",
                    "text": part_text,
                    "tokens": self.tokenize(part_text)
                })

        # 4. Ingest and Procedurally Chunk All Manual PDFs
        for platform_dir in sorted(BASE_DIR.iterdir()):
            if not platform_dir.is_dir() or platform_dir.name.startswith((".", "_")) or platform_dir.name in ["web_app", "docs", "node_modules"]:
                continue
            manuals_dir = platform_dir / "manuals"
            if not manuals_dir.exists():
                continue

            fid = platform_dir.name
            meta = FIREARMS_METADATA.get(fid, {})
            fname = meta.get("name", fid.replace("_", " "))
            mfg = meta.get("manufacturer", "Workshop")

            for pdf_path in sorted(manuals_dir.glob("*.pdf")):
                pdf_chunks = self.extract_pdf_chunks(pdf_path, fid, fname, mfg)
                self.chunks.extend(pdf_chunks)

        # Compute BM25 statistics
        self.total_docs = len(self.chunks)
        total_len = 0
        self.doc_freq = {}
        for c in self.chunks:
            toks = set(c["tokens"])
            total_len += len(c["tokens"])
            for t in toks:
                self.doc_freq[t] = self.doc_freq.get(t, 0) + 1

        self.avg_doc_len = (total_len / self.total_docs) if self.total_docs > 0 else 50.0
        self.initialized = True

        # Cache index
        try:
            cache_payload = {
                "total_docs": self.total_docs,
                "avg_doc_len": self.avg_doc_len,
                "doc_freq": self.doc_freq,
                "chunks": [
                    {k: v for k, v in c.items() if k != "tokens"}
                    for c in self.chunks
                ]
            }
            with open(CACHE_FILE, "w", encoding="utf-8") as f:
                json.dump(cache_payload, f)
            print(f"[RAG] Successfully built and cached Master index ({self.total_docs} chunks).")
        except Exception as e:
            print(f"[RAG] Warning: could not write cache file: {e}")

    def score_bm25(self, query_tokens: List[str], chunk_tokens: List[str], k1: float = 1.2, b: float = 0.75) -> float:
        """Standard BM25 scoring function with length normalization."""
        score = 0.0
        doc_len = len(chunk_tokens)
        if doc_len == 0 or self.total_docs == 0:
            return 0.0

        for q in query_tokens:
            if q not in self.doc_freq:
                continue
            df = self.doc_freq[q]
            idf = 1.0 + (self.total_docs - df + 0.5) / (df + 0.5)
            idf_val = math.log(max(1.0, idf))
            tf = chunk_tokens.count(q)
            numerator = tf * (k1 + 1.0)
            denominator = tf + k1 * (1.0 - b + b * (doc_len / (self.avg_doc_len or 1.0)))
            score += idf_val * (numerator / denominator)

        return score

    def search(
        self,
        query: str,
        firearm_id: Optional[str] = None,
        top_k: int = 4
    ) -> List[Dict[str, Any]]:
        """Searches indexed manuals and dossiers using BM25, ontology expansion, and platform affinity."""
        if not self.initialized:
            self.index_all()

        query_tokens = self.tokenize(query)
        if not query_tokens:
            return []

        # Universal Gunsmith Ontology Query Expansion
        expanded_tokens = list(query_tokens)
        for q in query_tokens:
            if q in GUNSMITH_ONTOLOGY:
                expanded_tokens.extend(GUNSMITH_ONTOLOGY[q])
            for k, v in GUNSMITH_ONTOLOGY.items():
                if k in q:
                    expanded_tokens.extend(v)

        results = []
        for c in self.chunks:
            c_tokens = c.get("tokens")
            if c_tokens is None:
                c_tokens = self.tokenize(c["text"])
                c["tokens"] = c_tokens

            base_score = self.score_bm25(expanded_tokens, c_tokens)
            if base_score <= 0.0:
                continue

            # Platform affinity boost: prioritize active firearm
            final_score = base_score
            if firearm_id:
                if c["firearm_id"] == firearm_id:
                    final_score *= 3.5
                elif c["firearm_id"] in ["General_Gunsmithing"]:
                    final_score *= 1.2
                else:
                    final_score *= 0.25

            # Multi-token exact phrase match bonus
            lower_text = c["text"].lower()
            if query.lower() in lower_text:
                final_score += 25.0
            for t in query_tokens:
                if len(t) >= 4 and t in lower_text:
                    final_score += 2.0

            snippet_lines = [ln.strip() for ln in c["text"].splitlines() if ln.strip() and not ln.startswith("Document:")]
            snippet = " ".join(snippet_lines[:5])
            if len(snippet) > 300:
                snippet = snippet[:300] + "..."

            results.append({
                "id": c["id"],
                "firearm_id": c["firearm_id"],
                "manual_filename": c["manual_filename"],
                "manual_title": c["manual_title"],
                "page": c["page"],
                "section": c["section"],
                "snippet": snippet,
                "full_text": c["text"],
                "score": round(final_score, 2),
                "url": f"/api/manuals/{c['firearm_id']}/{c['manual_filename']}#page={c['page']}"
            })

        results.sort(key=lambda x: x["score"], reverse=True)
        return results[:top_k]

    def get_grounding_prompt(self, query: str, firearm_id: str, top_k: int = 3) -> Tuple[str, List[Dict[str, Any]]]:
        """Builds formatted Markdown citation block for LLM system prompt injection."""
        matches = self.search(query=query, firearm_id=firearm_id, top_k=top_k)
        if not matches:
            return "", []

        prompt_block = (
            "### PRIMARY ARMORER TECHNICAL SOURCE CITATIONS (RAG GROUNDING):\n"
            "The following excerpts are authentic technical manuals, factory armorer course documents, and military TMs retrieved specifically for this query. "
            "You MUST base your technical tolerances, torque specs, disassembly order, and safety warnings on these grounded passages. "
            "Always cite the document name and page number when quoting specifications:\n\n"
        )

        sources = []
        for i, m in enumerate(matches, 1):
            prompt_block += (
                f"--- SOURCE CITATION [{i}]: {m['manual_title']} (Page {m['page']}) ---\n"
                f"Platform: {m['firearm_id']}\n"
                f"Section: {m['section']}\n"
                f"Passage: {m['full_text'][:800]}\n\n"
            )
            sources.append({
                "title": f"{m['manual_title']} (p. {m['page']})",
                "manual_filename": m["manual_filename"],
                "page": m["page"],
                "url": m["url"],
                "firearm_id": m["firearm_id"]
            })

        return prompt_block, sources


# Global singleton instance
rag_engine = ArmorerRAGEngine()
