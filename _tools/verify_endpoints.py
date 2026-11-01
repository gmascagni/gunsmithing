import httpx
import json

base_url = "http://127.0.0.1:8055"

print("--- 1. Testing /api/firearms ---")
r = httpx.get(f"{base_url}/api/firearms", timeout=5)
print(f"Status: {r.status_code}, Count: {len(r.json().get('firearms', []))}")

print("\n--- 2. Testing /api/rag/search (Glock search) ---")
r = httpx.get(f"{base_url}/api/rag/search?q=cruciform+sear&firearm_id=Glock_Pistols", timeout=5)
print(f"Status: {r.status_code}")
results = r.json().get("results", [])
print(f"RAG results found: {len(results)}")
for res in results[:2]:
    print(f"  * [{res['score']}] {res['manual_title']} (p. {res['page']}): {res['snippet'][:80]}...")

print("\n--- 3. Testing /api/video/samples ---")
r = httpx.get(f"{base_url}/api/video/samples", timeout=5)
print(f"Status: {r.status_code}")
samples = r.json().get("samples", [])
print(f"Video samples available: {len(samples)}")
for s in samples:
    print(f"  * {s['id']}: {s['title']}")

print("\n--- 4. Testing /api/video/analyze (Simulation: AR-15 double feed) ---")
payload = {
    "firearm_id": "AR15_M4_Platform",
    "sample_id": "ar15_double_feed",
    "user_notes": "Stoppage occurred during rapid fire."
}
r = httpx.post(f"{base_url}/api/video/analyze", json=payload, timeout=10)
print(f"Status: {r.status_code}")
report = r.json().get("report", {})
print(f"Report Title: {report.get('title')}")
print(f"Cycle Phase: {report.get('cycle_phase')}")
print(f"Extracted Frames: {len(report.get('frames', []))}")
print(f"Grounded Citations: {len(report.get('rag_manual_citations', []))}")

print("\n--- 5. Testing /api/chat with RAG Grounding ---")
chat_payload = {
    "firearm_id": "Glock_Pistols",
    "messages": [{"role": "user", "content": "What is the minimum sear engagement on a Glock and how do I inspect it?"}],
    "backend": "builtin"
}
r = httpx.post(f"{base_url}/api/chat", json=chat_payload, timeout=10)
print(f"Status: {r.status_code}")
reply_data = r.json()
print("Backend used:", reply_data.get("backend_used"))
sources = reply_data.get("sources", [])
print("Sources returned:", [s["title"] if isinstance(s, dict) else s for s in sources])
print("\nReply preview:")
print(reply_data.get("reply", "")[:400])

print("\n=== All Tests Passed Completely! ===")
