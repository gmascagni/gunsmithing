"""
Armorer RAG Engine: High-Performance Grounding & Retrieval Engine.
Indexes and retrieves authentic technical manuals, military TMs, factory armorers guides,
specifications, and stoppage matrices across all platforms.
"""

import os
import re
import json
import math
from pathlib import Path
from typing import List, Dict, Any, Optional, Tuple

import fitz # PyMuPDF

BASE_DIR = Path(__file__).resolve().parent.parent
CACHE_DIR = BASE_DIR / "web_app" / "cache"
CACHE_FILE = CACHE_DIR / "rag_index.json"

try:
    from web_app.firearms_data import FIREARMS_METADATA
except ImportError:
    from firearms_data import FIREARMS_METADATA


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
        """Simple clean tokenization for BM25 search."""
        return [w.lower() for w in re.findall(r"\b[a-zA-Z0-9_\-\.]{2,}\b", text)]

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
                    print(f"[RAG] Loaded {self.total_docs} technical chunks from cache.")
                    return
            except Exception as e:
                print(f"[RAG] Failed to load cache: {e}. Rebuilding index...")

        print("[RAG] Building technical manual index across all platforms...")
        self.chunks = []

        # 1. Index curated specs, stoppages, and assemblies from FIREARMS_METADATA
        for fid, meta in FIREARMS_METADATA.items():
            fname = meta.get("name", fid)
            mfg = meta.get("manufacturer", "")
            sub = meta.get("subtitle", "")

            # Index Specifications
            specs = meta.get("specs", {})
            if specs:
                specs_text = f"Platform: {fname} ({mfg})\nSubtitle: {sub}\nKey Armorer Tolerances & Specifications:\n"
                for k, v in specs.items():
                    specs_text += f"- {k.replace('_', ' ').title()}: {v}\n"
                self.chunks.append({
                    "id": f"{fid}_specs",
                    "firearm_id": fid,
                    "manual_filename": "Factory_Armorer_Dossier",
                    "manual_title": f"{fname} Technical Specifications & Tolerances",
                    "page": 1,
                    "section": "Specifications & Tolerances",
                    "text": specs_text,
                    "tokens": self.tokenize(specs_text)
                })

            # Index Stoppages
            stoppages = meta.get("stoppages", [])
            for s_idx, s in enumerate(stoppages):
                pos = s.get("position", "")
                s_desc = s.get("short_desc", "")
                remedy = s.get("remedy", "")
                causes = s.get("root_causes", "")
                stop_text = (
                    f"Platform: {fname} Malfunction Diagnostic\n"
                    f"Stoppage Position: {pos}\n"
                    f"Immediate Indicator: {s_desc}\n"
                    f"Probable Causes: {causes}\n"
                    f"Immediate Armorer Remedy: {remedy}\n"
                )
                self.chunks.append({
                    "id": f"{fid}_stop_{s_idx}",
                    "firearm_id": fid,
                    "manual_filename": "Factory_Stoppage_Matrix",
                    "manual_title": f"{fname} Malfunction & Diagnostic Matrix",
                    "page": s_idx + 1,
                    "section": f"Stoppage: {pos}",
                    "text": stop_text,
                    "tokens": self.tokenize(stop_text)
                })

        # 2. Extract and index PDF pages from each platform's manuals folder
        for firearm_dir in sorted(BASE_DIR.iterdir()):
            if not firearm_dir.is_dir() or firearm_dir.name.startswith((".", "_")) or firearm_dir.name in ["web_app", "docs"]:
                continue
            manuals_dir = firearm_dir / "manuals"
            if not manuals_dir.exists():
                continue

            fid = firearm_dir.name
            fname = FIREARMS_METADATA.get(fid, {}).get("name", fid.replace("_", " "))

            for pdf_path in sorted(manuals_dir.glob("*.pdf")):
                try:
                    doc = fitz.open(pdf_path)
                    doc_title = pdf_path.stem.replace("_", " ")
                    # Extract up to 100 pages per manual to balance depth and memory
                    max_pages = min(len(doc), 120)
                    for page_idx in range(max_pages):
                        page = doc[page_idx]
                        raw_text = page.get_text().strip()
                        if not raw_text or len(raw_text) < 40:
                            continue

                        # Clean up text
                        clean_lines = [ln.strip() for ln in raw_text.splitlines() if ln.strip()]
                        clean_text = "\n".join(clean_lines)

                        # Check for section headers (capitalized first line)
                        header = clean_lines[0] if clean_lines else f"Page {page_idx + 1}"
                        if len(header) > 60:
                            header = header[:60] + "..."

                        chunk_text = (
                            f"Document: {doc_title} (Page {page_idx + 1})\n"
                            f"Platform: {fname}\n"
                            f"Section: {header}\n\n"
                            f"{clean_text}"
                        )

                        self.chunks.append({
                            "id": f"{fid}_{pdf_path.name}_{page_idx+1}",
                            "firearm_id": fid,
                            "manual_filename": pdf_path.name,
                            "manual_title": doc_title,
                            "page": page_idx + 1,
                            "section": header,
                            "text": chunk_text[:2500], # Cap chunk length
                            "tokens": self.tokenize(chunk_text[:2500])
                        })
                except Exception as e:
                    print(f"[RAG] Error reading {pdf_path.name}: {e}")

        # Compute document frequencies and average length for BM25
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

        # Save to cache file (without tokens to keep JSON lean)
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
            print(f"[RAG] Successfully built and cached index ({self.total_docs} chunks).")
        except Exception as e:
            print(f"[RAG] Warning: could not write cache file: {e}")

    def score_bm25(self, query_tokens: List[str], chunk_tokens: List[str], k1: float = 1.2, b: float = 0.75) -> float:
        """Standard BM25 scoring function."""
        score = 0.0
        doc_len = len(chunk_tokens)
        if doc_len == 0 or self.total_docs == 0:
            return 0.0

        for q in query_tokens:
            if q not in self.doc_freq:
                continue
            df = self.doc_freq[q]
            # IDF formula with smoothing
            idf = math.log((self.total_docs - df + 0.5) / (df + 0.5) + 1.0)
            tf = chunk_tokens.count(q)
            numerator = tf * (k1 + 1.0)
            denominator = tf + k1 * (1.0 - b + b * (doc_len / (self.avg_doc_len or 1.0)))
            score += idf * (numerator / denominator)

        return score

    def search(
        self,
        query: str,
        firearm_id: Optional[str] = None,
        top_k: int = 4
    ) -> List[Dict[str, Any]]:
        """Searches indexed manuals and dossiers with BM25 and firearm platform boosting."""
        if not self.initialized:
            self.index_all()

        query_tokens = self.tokenize(query)
        if not query_tokens:
            return []

        results = []
        for c in self.chunks:
            # Reconstruct tokens if loaded from cache without 'tokens' field
            c_tokens = c.get("tokens")
            if c_tokens is None:
                c_tokens = self.tokenize(c["text"])
                c["tokens"] = c_tokens

            base_score = self.score_bm25(query_tokens, c_tokens)
            if base_score <= 0.0:
                continue

            # Platform affinity boost: prioritize active firearm
            final_score = base_score
            if firearm_id and c["firearm_id"] == firearm_id:
                final_score *= 2.2 # Heavy boost for matching platform
            elif firearm_id and c["firearm_id"] in ["General_Gunsmithing"]:
                final_score *= 1.2 # Moderate boost for general gunsmithing manuals

            # Bonus for exact multi-token substring matches in text
            lower_text = c["text"].lower()
            if query.lower() in lower_text:
                final_score += 15.0
            for t in query_tokens:
                if len(t) >= 4 and t in lower_text:
                    final_score += 1.5

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
        """Builds a formatted Markdown citation block for direct LLM system prompt injection."""
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
