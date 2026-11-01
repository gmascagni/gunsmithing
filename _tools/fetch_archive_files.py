import requests

items = [
    ("AR15_M4_Platform", "operators-manual-for-rifle-5.56-mm"),
    ("Benelli_M4_Shotgun", "benelli-m-4-usmc-manual"),
    ("Sig_P365_Pistols", "sig-p-365-manual"),
    ("Ruger_1022_Carbine", "instruction-manual-for-ruger-1022-autoloading-rifles-pm058-b-7-15-r28"),
    ("Glock_Pistols", "glock-gen-4-armorers-manual"),
    ("Sig_P320_M17_Pistols", "fbimsp-m18-pistol-evaluation")
]

for folder, item_id in items:
    url = f"https://archive.org/metadata/{item_id}/files"
    try:
        r = requests.get(url, timeout=10).json()
        pdf_files = [f["name"] for f in r.get("result", []) if f.get("name", "").endswith(".pdf")]
        print(f"{folder} ({item_id}): {pdf_files[:3]}")
    except Exception as e:
        print(f"Error {item_id}: {e}")
