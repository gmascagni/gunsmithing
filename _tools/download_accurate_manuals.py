import os
import subprocess
import urllib.parse

downloads = [
    ("AR15_M4_Platform", "TM_9_1005_319_10_M16_M4_Operators_Manual.pdf", "operators-manual-for-rifle-5.56-mm", "TM_9-1005-319-10.pdf"),
    ("Benelli_M4_Shotgun", "Benelli_M4_USMC_Technical_Manual.pdf", "benelli-m-4-usmc-manual", "Benelli M4 (USMC Manual).pdf"),
    ("Sig_P365_Pistols", "Sig_Sauer_P365_Armorer_Manual.pdf", "sig-p-365-manual", "SIG-p365-manual.pdf"),
    ("Ruger_1022_Carbine", "Ruger_1022_Autoloading_Rifle_Armorer_Manual.pdf", "instruction-manual-for-ruger-1022-autoloading-rifles-pm058-b-7-15-r28", "1022.pdf"),
    ("Glock_Pistols", "Glock_Gen_4_Armorer_Manual_Update.pdf", "glock-gen-4-armorers-manual", "Glock Gen4 Armorer's Manual.pdf"),
    ("Sig_P320_M17_Pistols", "Sig_M17_M18_US_Service_Evaluation_Manual.pdf", "fbimsp-m18-pistol-evaluation", "MSP-M18-Pistol-Evaluation_FINAL_Redacted_Outdoor_Life.pdf")
]

base_dir = r"c:\Users\gmasc\Downloads\Gun Manuals"

for folder, dest_name, item_id, remote_file in downloads:
    dest_dir = os.path.join(base_dir, folder, "manuals")
    os.makedirs(dest_dir, exist_ok=True)
    dest_path = os.path.join(dest_dir, dest_name)
    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 10000:
        print(f"[OK] Already exists: {dest_name} ({round(os.path.getsize(dest_path)/(1024*1024), 2)} MB)")
        continue
    encoded_file = urllib.parse.quote(remote_file)
    url = f"https://archive.org/download/{item_id}/{encoded_file}"
    print(f"[*] Downloading {dest_name} from {url}...")
    cmd = ["curl.exe", "-L", "-o", dest_path, url, "--max-time", "120", "--silent", "--show-error"]
    res = subprocess.run(cmd)
    if res.returncode == 0 and os.path.exists(dest_path) and os.path.getsize(dest_path) > 1000:
        size_mb = round(os.path.getsize(dest_path) / (1024 * 1024), 2)
        print(f"[+] Downloaded: {dest_name} ({size_mb} MB)")
    else:
        print(f"[-] Failed: {dest_name}")
