import os
import subprocess

downloads = [
    # AR-15 / M4
    ("AR15_M4_Platform", "TM_9_1005_319_23_M16A2_M4_Field_Maintenance.pdf", "https://archive.org/download/milmanual-tm-9-1005-319-23-m16a2-maintenance--repair-manual/tm_9-1005-319-23_m16a2_maintenance__repair_manual.pdf"),
    ("AR15_M4_Platform", "M16A2_M4_M4A1_Operators_Manual_TM_9_1005_319_10.pdf", "https://archive.org/download/operators-manual-for-rifle-5.56-mm/operators-manual-for-rifle-5.56-mm.pdf"),
    
    # Benelli M4
    ("Benelli_M4_Shotgun", "Benelli_M4_M1014_USMC_Technical_Manual.pdf", "https://archive.org/download/benelli-m-4-usmc-manual/benelli-m-4-usmc-manual.pdf"),
    
    # Mossberg 500 / 590
    ("Mossberg_500_590_Shotgun", "Mossberg_500_590_Military_Police_Manual.pdf", "https://archive.org/download/mossberg-500-505-510-535-590-835-manual/mossberg-500-505-510-535-590-835-manual.pdf"),
    
    # Sig P365
    ("Sig_P365_Pistols", "Sig_Sauer_P365_Armorer_Manual.pdf", "https://archive.org/download/sig-p-365-manual/sig-p-365-manual.pdf"),
    
    # Ruger 10/22
    ("Ruger_1022_Carbine", "Ruger_1022_Autoloading_Rifle_Armorer_Manual.pdf", "https://archive.org/download/instruction-manual-for-ruger-1022-autoloading-rifles-pm058-b-7-15-r28/instruction-manual-for-ruger-1022-autoloading-rifles-pm058-b-7-15-r28.pdf"),
    
    # Glock Gen 4
    ("Glock_Pistols", "Glock_Gen_4_Armorer_Manual_Update.pdf", "https://archive.org/download/glock-gen-4-armorers-manual/glock-gen-4-armorers-manual.pdf")
]

base_dir = r"c:\Users\gmasc\Downloads\Gun Manuals"

for folder, fname, url in downloads:
    dest_dir = os.path.join(base_dir, folder, "manuals")
    os.makedirs(dest_dir, exist_ok=True)
    dest_path = os.path.join(dest_dir, fname)
    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 10000:
        print(f"[OK] Already exists: {fname} ({round(os.path.getsize(dest_path)/(1024*1024), 2)} MB)")
        continue
    print(f"[*] Downloading {fname} to {folder}...")
    cmd = ["curl.exe", "-L", "-o", dest_path, url, "--max-time", "60", "--silent", "--show-error"]
    res = subprocess.run(cmd)
    if res.returncode == 0 and os.path.exists(dest_path) and os.path.getsize(dest_path) > 1000:
        size_mb = round(os.path.getsize(dest_path) / (1024 * 1024), 2)
        print(f"[+] Downloaded: {fname} ({size_mb} MB)")
    else:
        print(f"[-] Failed: {fname}")
