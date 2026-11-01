import requests

queries = [
    ('Sig P320 M17', '"Sig Sauer" AND ("P320" OR "M17" OR "M18" OR "P365") AND mediatype:texts'),
    ('Remington 870', '"Remington 870" AND (manual OR armorer OR maintenance) AND mediatype:texts'),
    ('Beretta M9 92FS', '("TM 9-1005-317" OR "Beretta 92FS" OR "M9 pistol") AND mediatype:texts'),
    ('Ruger Manuals', '("Ruger 10/22" OR "Ruger Mark" OR "Ruger Precision") AND mediatype:texts')
]

for label, q in queries:
    url = f"https://archive.org/advancedsearch.php?q=({q})&fl[]=identifier,title,year&rows=5&output=json"
    try:
        r = requests.get(url, timeout=10).json()
        print(f"\n=== {label} ===")
        for d in r.get('response', {}).get('docs', []):
            print(f"{d.get('identifier')} | {d.get('title')}")
    except Exception as e:
        print(f"Error {label}: {e}")
