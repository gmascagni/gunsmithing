import requests

queries = [
    ("Ruger in firearmsmanuals", 'collection:firearmsmanuals AND Ruger'),
    ("Beretta Armorer / Maintenance", 'title:("TM 9-1005-317" OR "Beretta 92" OR "M9" OR "Beretta") AND (maintenance OR armorer OR unit OR manual OR direct)'),
    ("General Gunsmithing", 'title:(Gunsmithing OR "Gunsmith" OR "Howe" OR "Kuhnhausen" OR "Modern Gunsmith") AND mediatype:texts')
]

for label, q in queries:
    url = f"https://archive.org/advancedsearch.php?q=({q})&fl[]=identifier,title,year,downloads&sort[]=downloads+desc&rows=10&output=json"
    try:
        r = requests.get(url, timeout=10).json()
        print(f"\n==================== {label} ====================")
        for d in r.get('response', {}).get('docs', []):
            print(str(d.get('identifier')) + " | " + str(d.get('title')))
    except Exception as e:
        print(f"Error {label}: {e}")
