"""
Extract Schematics & Illustrations from Gun Manual PDFs
Uses PyMuPDF (pymupdf / fitz) to extract high-resolution figures, schematics, and plates.
"""

import sys
import os
import argparse

try:
    import fitz  # PyMuPDF
except ImportError:
    print("Error: PyMuPDF is not installed. Run: pip install pymupdf")
    sys.exit(1)

def extract_schematics(pdf_path, output_dir, min_size_kb=20):
    if not os.path.exists(pdf_path):
        print(f"Error: File not found: {pdf_path}")
        return

    os.makedirs(output_dir, exist_ok=True)
    doc = fitz.open(pdf_path)
    base_name = os.path.splitext(os.path.basename(pdf_path))[0]
    extracted_count = 0

    print(f"[*] Scanning '{pdf_path}' ({len(doc)} pages)...")

    for page_num in range(len(doc)):
        page = doc[page_num]
        image_list = page.get_images(full=True)

        for img_idx, img_info in enumerate(image_list):
            xref = img_info[0]
            try:
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]

                if len(image_bytes) >= min_size_kb * 1024:
                    extracted_count += 1
                    out_filename = f"{base_name}_p{page_num + 1:03d}_{img_idx + 1:02d}.{image_ext}"
                    out_filepath = os.path.join(output_dir, out_filename)
                    with open(out_filepath, "wb") as f:
                        f.write(image_bytes)
            except Exception as e:
                print(f"Warning extracting image xref {xref}: {e}")

    print(f"[+] Extracted {extracted_count} schematic plates to: {output_dir}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Extract schematics and illustrations from PDF gun manuals.")
    parser.add_argument("pdf", help="Path to input PDF manual")
    parser.add_argument("-o", "--output", default="./schematics", help="Output directory for extracted images")
    parser.add_argument("-s", "--min-size", type=int, default=20, help="Minimum image size in KB to extract (default: 20)")
    args = parser.parse_args()

    extract_schematics(args.pdf, args.output, args.min_size)
