import re
from pathlib import Path

html = Path("web_app/static/index.html").read_text(encoding="utf-8")
js = Path("web_app/static/app.js").read_text(encoding="utf-8")

element_ids = re.findall(r'document\.getElementById\(["\']([^"\']+)["\']\)', js)
missing = []
for eid in set(element_ids):
    if f'id="{eid}"' not in html and f"id='{eid}'" not in html:
        missing.append(eid)
print("Missing IDs in index.html:", missing)
