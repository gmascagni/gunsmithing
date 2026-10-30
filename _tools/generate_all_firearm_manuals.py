"""
Armorer Manual & Technical Dossier PDF Generator.
Generates comprehensive, professional multi-page Technical Manuals (PDF)
for all 52 firearms in the Armorer's Workbench repository.
"""

import sys
from pathlib import Path

# Add root and web_app to sys.path
sys.path.append(str(Path(__file__).resolve().parent.parent))
from web_app.firearms_data import FIREARMS_METADATA

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether
)

root = Path(__file__).resolve().parent.parent

def generate_manual_pdf(fid: str, meta: dict, dest_pdf: Path):
    doc = SimpleDocTemplate(
        str(dest_pdf),
        pagesize=letter,
        rightMargin=0.5 * inch,
        leftMargin=0.5 * inch,
        topMargin=0.5 * inch,
        bottomMargin=0.5 * inch
    )

    styles = getSampleStyleSheet()

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=colors.HexColor('#0f172a'),
        spaceAfter=4
    )
    subtitle_style = ParagraphStyle(
        'DocSub',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=15,
        textColor=colors.HexColor('#b45309'),
        spaceAfter=12
    )
    h2_style = ParagraphStyle(
        'SectionH2',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=17,
        textColor=colors.HexColor('#1e293b'),
        spaceBefore=10,
        spaceAfter=6
    )
    body_style = ParagraphStyle(
        'BodyDark',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=colors.HexColor('#334155')
    )
    table_label_style = ParagraphStyle(
        'TableLabel',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#0f172a')
    )
    table_val_style = ParagraphStyle(
        'TableVal',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#334155')
    )

    story = []

    # 1. Header Banner
    story.append(Paragraph(f"ARMORER'S BENCH TECHNICAL MANUAL", ParagraphStyle(
        'HeaderPre', fontName='Helvetica-Bold', fontSize=8, textColor=colors.HexColor('#64748b'), spaceAfter=2
    )))
    story.append(Paragraph(meta.get("name", fid), title_style))
    story.append(Paragraph(f"{meta.get('manufacturer', '')} • {meta.get('subtitle', '')}", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#d97706'), spaceAfter=10))

    # 2. General Identification & Key Tasks
    info_data = [
        [Paragraph("Manufacturer:", table_label_style), Paragraph(meta.get("manufacturer", "General"), table_val_style),
         Paragraph("Category:", table_label_style), Paragraph(meta.get("category", "Firearms"), table_val_style)],
        [Paragraph("Action Type:", table_label_style), Paragraph(meta.get("action_type", "Standard"), table_val_style),
         Paragraph("Era / Service:", table_label_style), Paragraph(meta.get("era", "Modern"), table_val_style)],
        [Paragraph("Calibers:", table_label_style), Paragraph(", ".join(meta.get("calibers", [])), table_val_style),
         Paragraph("Covered Models:", table_label_style), Paragraph(", ".join(meta.get("models", [])[:6]), table_val_style)],
    ]
    info_table = Table(info_data, colWidths=[1.1*inch, 2.5*inch, 1.1*inch, 2.8*inch])
    info_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#f8fafc')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#cbd5e1')),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('TOPPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(info_table)
    story.append(Spacer(1, 10))

    # 3. Core Gunsmith Disciplines / Key Tasks
    if meta.get("key_tasks"):
        story.append(Paragraph("KEY ARMORER TASKS &amp; BENCH OPERATIONS", h2_style))
        tasks_text = " • ".join(meta["key_tasks"])
        story.append(Paragraph(f"<b>Core Procedures:</b> {tasks_text}", body_style))
        story.append(Spacer(1, 8))

    # 4. Technical Specifications Table
    if meta.get("specs"):
        story.append(Paragraph("CRITICAL ARMORER TOLERANCES &amp; SPECIFICATIONS", h2_style))
        spec_rows = [
            [Paragraph("SPECIFICATION / CLEARANCE", table_label_style), Paragraph("ARMORER TOLERANCE &amp; BENCH SPECIFICATION", table_label_style)]
        ]
        for k, v in meta["specs"].items():
            k_clean = k.replace("_", " ").upper()
            spec_rows.append([
                Paragraph(f"<b>{k_clean}</b>", table_label_style),
                Paragraph(str(v), table_val_style)
            ])
        spec_table = Table(spec_rows, colWidths=[2.2*inch, 5.3*inch])
        spec_table.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#e2e8f0')),
            ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#cbd5e1')),
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('TOPPADDING', (0,0), (-1,-1), 4),
            ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ]))
        story.append(spec_table)
        story.append(Spacer(1, 12))

    # 5. Malfunction Diagnostics & Immediate Action Stoppages
    if meta.get("stoppages"):
        story.append(Paragraph("IMMEDIATE ACTION &amp; MALFUNCTION DIAGNOSTIC MATRIX", h2_style))
        stoppage_rows = [
            [Paragraph("MALFUNCTION CONDITION", table_label_style),
             Paragraph("PROBABLE CAUSES", table_label_style),
             Paragraph("ARMORER BENCH REMEDY", table_label_style)]
        ]
        for s in meta["stoppages"]:
            causes_html = "<br/>".join([f"• {c}" for c in s.get("causes", [])])
            stoppage_rows.append([
                Paragraph(f"<b>{s.get('position', '')}</b><br/><font color='#64748b'>{s.get('short_desc', '')}</font>", table_label_style),
                Paragraph(causes_html, table_val_style),
                Paragraph(f"<font color='#b45309'><b>{s.get('action', '')}</b></font>", table_val_style)
            ])
        stoppage_table = Table(stoppage_rows, colWidths=[2.1*inch, 2.7*inch, 2.7*inch])
        stoppage_table.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#fef3c7')),
            ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#fde68a')),
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('TOPPADDING', (0,0), (-1,-1), 4),
            ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ]))
        story.append(stoppage_table)
        story.append(Spacer(1, 12))

    # 6. Bench Video Reference Guides
    if meta.get("videos"):
        story.append(Paragraph("CURATED BENCH VIDEO REFERENCES", h2_style))
        vid_rows = [
            [Paragraph("PROCEDURE TITLE", table_label_style),
             Paragraph("INSTRUCTOR / CREATOR", table_label_style),
             Paragraph("TECHNICAL PROCEDURE SUMMARY", table_label_style)]
        ]
        for v in meta["videos"]:
            vid_rows.append([
                Paragraph(f"<b>{v.get('title', '')}</b>", table_label_style),
                Paragraph(v.get("creator", ""), table_val_style),
                Paragraph(v.get("summary", ""), table_val_style)
            ])
        vid_table = Table(vid_rows, colWidths=[2.2*inch, 1.8*inch, 3.5*inch])
        vid_table.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
            ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#cbd5e1')),
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('TOPPADDING', (0,0), (-1,-1), 4),
            ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ]))
        story.append(vid_table)

    doc.build(story)

def main():
    generated_count = 0
    for fid, meta in FIREARMS_METADATA.items():
        fdir = root / fid
        manuals_dir = fdir / "manuals"
        schematics_dir = fdir / "schematics"
        manuals_dir.mkdir(parents=True, exist_ok=True)
        schematics_dir.mkdir(parents=True, exist_ok=True)

        # Standard technical manual name
        manual_name = f"Armorer_Technical_Manual_{fid}.pdf"
        dest_pdf = manuals_dir / manual_name
        
        # Always generate or update if only 1 manual or none
        pdf_list = list(manuals_dir.glob("*.pdf"))
        if not dest_pdf.exists() or len(pdf_list) == 0:
            generate_manual_pdf(fid, meta, dest_pdf)
            generated_count += 1
            print(f"Generated PDF manual: {dest_pdf.relative_to(root)}")

    print(f"\nDone! Generated {generated_count} armorer manuals across all {len(FIREARMS_METADATA)} platforms.")

if __name__ == "__main__":
    main()
