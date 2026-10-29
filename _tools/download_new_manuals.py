import os
import subprocess
import urllib.parse

downloads = [
    # Glock
    ("Glock_Pistols", "Glock_Armorers_Manual_Gen_1_to_5.pdf", "https://archive.org/download/glock-armorers-manual-gen-1-5/Glock%20Armorer%27s%20Manual%20Gen%201-5.pdf"),
    ("Glock_Pistols", "Glock_Factory_Armorers_Manual.pdf", "https://archive.org/download/gunmanual_Glock_ARmorers_Manual/Glock%20ARmorers%20Manual.pdf"),
    
    # Ruger
    ("Ruger_Firearms", "Ruger_10_22_Carbine_Manual.pdf", "https://archive.org/download/gunmanual_10-22/10-22.pdf"),
    ("Ruger_Firearms", "Ruger_Mark_I_Standard_Pistol_Manual.pdf", "https://archive.org/download/firearms-ruger-mark-i-target--standard-model-pistol/rugermarkitargetstandardmodelpistol.pdf"),
    ("Ruger_Firearms", "Ruger_GP100_Revolver_Manual.pdf", "https://archive.org/download/gunmanual_Ruger_Gp100/Ruger%20Gp100.pdf"),
    
    # Beretta
    ("Beretta_Pistols", "Beretta_92F_92FS_9mm_Manual.pdf", "https://archive.org/download/firearms-beretta-92f-9mm-pistol/beretta92f9mmpistol.pdf"),
    ("Beretta_Pistols", "US_Army_TM_9_1005_317_10_M9_Pistol.pdf", "https://archive.org/download/milmanual-tm-9-1005-317-10---operators-manual-m9-9mm-handgun/tm_9-1005-317-10_-_operators_manual_m9_9mm_handgun.pdf"),
    
    # General Gunsmithing
    ("General_Gunsmithing", "The_Gunsmiths_Manual_Practical_Guide.pdf", "https://archive.org/download/gunsmithsmanualc00stel/gunsmithsmanualc00stel.pdf"),
    ("General_Gunsmithing", "Practical_Gunsmithing_American_Gunsmith.pdf", "https://archive.org/download/PracticalGunsmithingByTheEditorsOfAmericanGunsmith1996/Practical%20Gunsmithing%20by%20the%20Editors%20of%20American%20Gunsmith%20-%201996_text.pdf")
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
    cmd = ["curl.exe", "-L", "-o", dest_path, url, "--silent", "--show-error"]
    res = subprocess.run(cmd)
    if res.returncode == 0 and os.path.exists(dest_path):
        size_mb = round(os.path.getsize(dest_path) / (1024 * 1024), 2)
        print(f"[+] Downloaded: {fname} ({size_mb} MB)")
    else:
        print(f"[-] Failed: {fname}")
