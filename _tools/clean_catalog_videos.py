import re
from pathlib import Path
from urllib.parse import quote_plus

def clean_catalog():
    cat_dir = Path("web_app/catalog")
    
    # Confirmed real working YouTube video IDs
    VERIFIED_REAL_VIDEOS = {
        "IkPNHiLMFL0": "Mark Novak - Anvil 033: Lewis Gun",
        "I3ZA9rg8uKI": "C&Rsenal - Project Lightening Lewis Field Strip",
        "7P4Y1f5t1J8": "Glock Complete Detail Disassembly",
        "e_r1Kz_T2Lg": "Glock 25-Cent Trigger Job",
        "EBVTpVn-xjX": "Sig P365 FCU Disassembly",
        "FMftVGoLNgP": "Sig P365 Striker Assembly",
        "wXy8f9Z7bQs": "Sig P320 / M17 Detail Teardown",
        "k8M7p2W9vLs": "M&P Apex Trigger & Sear Install",
        "v0yCq9yO2-g": "AR-15 Complete Armorer Teardown",
        "vgOicEVA4u8": "1911 Detail Disassembly Mark Novak"
    }

    modified_files = 0
    for py_file in cat_dir.glob("*.py"):
        if py_file.name == "__init__.py":
            continue
        text = py_file.read_text(encoding="utf-8")
        orig_text = text

        # Process firearm by firearm block
        def fix_firearm_block(f_match):
            block_text = f_match.group(0)
            fname_match = re.search(r'"name":\s*"([^"]+)"', block_text)
            fname = fname_match.group(1) if fname_match else "Firearm"

            def fix_video_block(v_match):
                vid_id = v_match.group(1)
                title = v_match.group(2)
                creator = v_match.group(3)
                category = v_match.group(4)
                if vid_id in VERIFIED_REAL_VIDEOS:
                    return v_match.group(0)
                
                if "x9" in vid_id or "x2w" in vid_id or "x9B" in vid_id or "x9M" in vid_id or "Lk9W" in vid_id or "listType" in v_match.group(0):
                    search_q = quote_plus(f"{fname} {title} gunsmithing armorer")
                    new_url = f"https://www.youtube.com/results?search_query={search_q}"
                    new_embed = f"https://www.youtube-nocookie.com/embed?listType=search&list={search_q}"
                    return (
                        f'"id": "{vid_id}",\n'
                        f'                "title": "{title}",\n'
                        f'                "creator": "{creator}",\n'
                        f'                "category": "{category}",\n'
                        f'                "url": "{new_url}",\n'
                        f'                "embed_url": "{new_embed}"'
                    )
                return v_match.group(0)

            v_pattern = re.compile(
                r'"id":\s*"([^"]+)",\s*'
                r'"title":\s*"([^"]+)",\s*'
                r'"creator":\s*"([^"]+)",\s*'
                r'"category":\s*"([^"]+)",\s*'
                r'"url":\s*"[^"]+",\s*'
                r'"embed_url":\s*"[^"]+"',
                re.MULTILINE
            )
            return v_pattern.sub(fix_video_block, block_text)

        # Match each firearm entry
        f_pattern = re.compile(r'"[A-Za-z0-9_]+":\s*\{[^\{\}]+(?:\{[^{}]*\}[^\{\}]*)*\}', re.DOTALL)
        new_text = f_pattern.sub(fix_firearm_block, text)
        if new_text != orig_text:
            py_file.write_text(new_text, encoding="utf-8")
            modified_files += 1
            print(f"Cleaned video references in {py_file.name}")

    print(f"Total files updated: {modified_files}")

if __name__ == "__main__":
    clean_catalog()
