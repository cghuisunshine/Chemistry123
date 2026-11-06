#!/usr/bin/env python3
"""Build exact source-equation excerpts and a searchable offline reference.

Requires Poppler (pdftotext, pdftoppm); Python standard library only.
Run from any directory. Cached excerpts make subsequent builds inexpensive.
"""
from __future__ import annotations

import argparse
import concurrent.futures
import csv
import hashlib
import html
import json
from pathlib import Path
import re
import subprocess
import tempfile
import xml.etree.ElementTree as ET

WEB = Path(__file__).resolve().parents[1]
NS = {'x': 'http://www.w3.org/1999/xhtml'}
CHAPTERS = [
  ('1', 'The properties of gases', 35), ('2', 'The First Law', 60),
  ('3', 'The Second Law', 108), ('4', 'Physical transformations of pure substances', 149),
  ('5', 'Simple mixtures', 168), ('6', 'Phase diagrams', 206),
  ('7', 'Chemical equilibrium', 232), ('8', 'Quantum theory: introduction and principles', 275),
  ('9', 'Quantum theory: techniques and applications', 309),
  ('10', 'Atomic structure and atomic spectra', 352), ('11', 'Molecular structure', 394),
  ('12', 'Molecular symmetry', 436), ('13', 'Rotational and vibrational spectroscopy', 462),
  ('14', 'Electronic spectroscopy', 513), ('15', 'Magnetic resonance', 545),
  ('16', 'Statistical thermodynamics: concepts', 592),
  ('17', 'Statistical thermodynamics: applications', 621), ('18', 'Molecular interactions', 652),
  ('19', 'Macromolecules and aggregates', 684), ('20', 'The solid state', 729),
  ('21', 'Molecules in motion', 779), ('22', 'The rates of chemical reactions', 823),
  ('23', 'The kinetics of complex reactions', 862), ('24', 'Molecular reaction dynamics', 901),
  ('25', 'Processes at solid surfaces', 941), ('A1', 'Quantities, units and conventions', 991),
  ('A2', 'Mathematical techniques', 995), ('A3', 'Essential concepts of physics', 1011),
  ('data', 'Data, exercises, answers and index', 1020),
]
# Authored names supplement source section headings for useful subject searches.
NAMES = {
  '1.8': 'Ideal-gas equation', '1.16': 'Compressibility factor',
  '1.19': 'Virial equation', '1.21a': 'van der Waals equation',
  '1.21b': 'van der Waals equation: molar form',
  '2.26': 'Ideal-gas heat-capacity difference', '3.16': 'Entropy of a phase transition',
  '4.6': 'Clapeyron equation', '4.11': 'Clausius–Clapeyron equation',
  '4.12': 'Integrated Clausius–Clapeyron equation', '5.24': "Raoult's law",
  '5.26': "Henry's law", '7.11': 'Reaction Gibbs energy and reaction quotient',
  '7.17': 'Gibbs energy and equilibrium constant', '7.23': "van ’t Hoff equation",
  '7.25': "Integrated van ’t Hoff equation", '7.29': 'Nernst equation',
  '8.13': 'Time-independent Schrödinger equation',
  '22.12b': 'Integrated first-order rate law', '22.13': 'First-order half-life',
  '22.15b': 'Integrated second-order rate law', '22.16': 'Second-order half-life',
  '22.29': 'Arrhenius equation', '25.4': 'Langmuir adsorption isotherm',
}


def extract(pdf: Path, bbox: Path):
  if not bbox.exists():
    subprocess.run(['pdftotext', '-bbox-layout', str(pdf), str(bbox)], check=True)
  xml = re.sub('[\x00-\x08\x0b\x0c\x0e-\x1f]', '', bbox.read_text())
  pages = ET.fromstring(xml).findall('.//x:page', NS)
  rows = []
  sections = {}
  label_pattern = re.compile(r'[\[(]((?:A[123]|[1-9]|1\d|2[0-5]))\.(\d+[a-z]?)[\])]°?')
  for number, page in enumerate(pages, 1):
    chapter_index = next((i for i, c in enumerate(CHAPTERS)
      if c[2] <= number < (CHAPTERS[i + 1][2] if i + 1 < len(CHAPTERS) else len(pages) + 1)), None)
    if chapter_index is None:
      continue
    chapter, title, _ = CHAPTERS[chapter_index]
    if chapter == 'data':
      continue
    lines = sorted(page.findall('.//x:line', NS), key=lambda x: (float(x.get('yMin')), float(x.get('xMin'))))
    for line in lines:
      text = ' '.join(w.text or '' for w in line.findall('x:word', NS))
      heading = re.match(rf'^{chapter}\.\d+\s+[A-Z][^=\d]{{3,100}}$', text)
      # Section headings use larger type than inline cross-references or contents lists.
      if heading and float(line.get('yMax')) - float(line.get('yMin')) >= 9.5:
        sections[chapter] = text
      for word in line.findall('x:word', NS):
        match = label_pattern.fullmatch(word.text or '')
        if not match or match[1] != chapter or float(word.get('xMin')) < 200:
          continue
        label = f'{chapter}.{match[2]}'
        y = float(word.get('yMin'))
        equation_lines = [ln for ln in lines if abs(float(ln.get('yMin')) - y) < 25
          and any(re.search(r'[=≠≤≥∝→↔]', w.text or '') for w in ln.findall('x:word', NS))
          and float(ln.get('xMin')) < float(word.get('xMin')) - 25]
        # Keep the whole equation column, extending left whenever a nearby
        # mathematical line reaches farther. Without a reliable line, keep full width.
        left = max(24, float(word.get('xMin')) - 340) if equation_lines else 30
        if equation_lines:
          left = max(20, min(left, min(float(ln.get('xMin')) for ln in equation_lines) - 14))
        right = min(558, float(word.get('xMax')) + 18) if equation_lines else 558
        top = max(48, y - 60)
        height = min(140, 726 - top)
        nearby = [candidate for candidate in lines
          if y - 95 < float(candidate.get('yMin')) < y + 70]
        context = ' '.join(' '.join(w.text or '' for w in ln.findall('x:word', NS)) for ln in nearby)
        rows.append({
          'label': label, 'chapter': chapter, 'chapterTitle': title,
          'title': NAMES.get(label, sections.get(chapter, title)),
          'section': sections.get(chapter, title), 'page': number,
          'x': float(word.get('xMin')), 'y': y,
          'crop': [int(left * 2), int(top * 2), int((right - left) * 2), int(height * 2)],
          'imageWidth': int((right - left) * 2), 'imageHeight': int(height * 2),
          'image': f'assets/textbook-equations/eq-{label}.png',
          'context': context[:1800],
        })
  labels = [r['label'] for r in rows]
  if len(labels) != len(set(labels)):
    raise ValueError('Repeated labels require review before building')
  if not set(NAMES) <= set(labels):
    raise ValueError(f'Expected source labels missing: {set(NAMES) - set(labels)}')
  return rows, len(pages)


def render_excerpt(args):
  pdf, row, force = args
  image = WEB / row['image']
  if image.exists() and not force:
    return
  image.parent.mkdir(parents=True, exist_ok=True)
  # Generous context avoids losing superscripts, fractions or multi-line expressions.
  # The full source remains available from every card for longer displays.
  left, top, width, height = row['crop']
  subprocess.run(['pdftoppm', '-f', str(row['page']), '-l', str(row['page']),
    '-r', '144', '-x', str(left), '-y', str(top), '-W', str(width),
    '-H', str(height), '-png', '-singlefile', str(pdf), str(image.with_suffix(''))],
    check=True, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE)


def main():
  parser = argparse.ArgumentParser(description=__doc__)
  parser.add_argument('--pdf', type=Path, default=WEB / 'Physical_Chemistry.pdf')
  parser.add_argument('--bbox', type=Path)
  parser.add_argument('--force-images', action='store_true')
  options = parser.parse_args()
  pdf = options.pdf.resolve()
  with tempfile.TemporaryDirectory(prefix='chemistry-equations-') as temporary:
    bbox = options.bbox or Path(temporary) / 'source.html'
    rows, count = extract(pdf, bbox)
  print(f'Indexed {len(rows)} numbered expressions; rendering exact source excerpts.', flush=True)
  with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    for i, _ in enumerate(pool.map(render_excerpt, [(pdf, r, options.force_images) for r in rows]), 1):
      if i % 100 == 0:
        print(f'Prepared {i}/{len(rows)} excerpts.', flush=True)
  data = {'source': 'Physical_Chemistry.pdf', 'sourceSha256': hashlib.sha256(pdf.read_bytes()).hexdigest(),
    'sourcePages': count, 'chapters': [{'id': c, 'title': t, 'page': p} for c, t, p in CHAPTERS],
    'equations': rows}
  (WEB / 'tools/textbook-equations.json').write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')
  with (WEB / 'derivation-equation-inventory.tsv').open('w', newline='') as target:
    writer = csv.writer(target, delimiter='\t')
    writer.writerow(['chapter', 'equation_label', 'pdf_page_1_based', 'source_href', 'image', 'reference_status', 'derivation_status'])
    for row in rows:
      writer.writerow([row['chapter'], row['label'], row['page'], f'Physical_Chemistry.pdf#page={row["page"]}',
        row['image'], 'source_excerpt_included', 'see_linked_workbook_targets'])
  print(f'Built {len(rows)} excerpts, searchable metadata and updated inventory.', flush=True)


if __name__ == '__main__':
  main()
