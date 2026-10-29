import requests

items = [
    "glock-armorers-manual-gen-1-5",
    "gunmanual_Glock_ARmorers_Manual",
    "gunmanual_10-22",
    "firearms-ruger-mark-i-target--standard-model-pistol",
    "gunmanual_Ruger_Gp100",
    "firearms-beretta-92f-9mm-pistol",
    "milmanual-tm-9-1005-317-10---operators-manual-m9-9mm-handgun",
    "PracticalGunsmithingByTheEditorsOfAmericanGunsmith1996",
    "gunsmithsmanualc00stel"
]

for item_id in items:
    try:
        r = requests.get(f"https://archive.org/metadata/{item_id}", timeout=10).json()
        title = r.get('metadata', {}).get('title', 'Unknown')
        pdfs = [f for f in r.get('files', []) if f.get('name', '').endswith('.pdf')]
        print(f"\nID: {item_id}")
        print(f"Title: {title}")
        for p in pdfs[:2]:
            size_mb = round(int(p.get('size', 0)) / (1024*1024), 2)
            print(f"  - {p.get('name')} ({size_mb} MB)")
    except Exception as e:
        print(f"Error {item_id}: {e}")
