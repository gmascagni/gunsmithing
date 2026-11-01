import httpx

try:
    r = httpx.get('http://127.0.0.1:11434/api/tags', timeout=2)
    models = [m['name'] for m in r.json().get('models', [])]
    print(f"Ollama Status: ONLINE")
    print(f"Loaded Models: {models}")
except Exception as e:
    print(f"Ollama Status: OFFLINE ({e})")
