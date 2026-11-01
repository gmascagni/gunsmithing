import sys
from pathlib import Path

# Add workspace to path
sys.path.append(str(Path(__file__).resolve().parent.parent))
from web_app.rag_engine import rag_engine

rag_engine.index_all(force_rebuild=True)
print(f"Total chunks indexed: {rag_engine.total_docs}")

# Test search 1: Glock sear engagement
res1 = rag_engine.search("sear engagement cruciform", firearm_id="Glock_Pistols", top_k=2)
print("\nTest 1 (Glock sear):")
for r in res1:
    print(f"  [{r['score']}] {r['manual_title']} (p. {r['page']}): {r['snippet'][:100]}")

# Test search 2: AR-15 headspace
res2 = rag_engine.search("headspace gauge bolt", firearm_id="AR15_M4_Platform", top_k=2)
print("\nTest 2 (AR15 headspace):")
for r in res2:
    print(f"  [{r['score']}] {r['manual_title']} (p. {r['page']}): {r['snippet'][:100]}")

# Test search 3: Benelli M4 gas piston
res3 = rag_engine.search("gas piston ARGO", firearm_id="Benelli_M4_Shotgun", top_k=2)
print("\nTest 3 (Benelli M4):")
for r in res3:
    print(f"  [{r['score']}] {r['manual_title']} (p. {r['page']}): {r['snippet'][:100]}")
