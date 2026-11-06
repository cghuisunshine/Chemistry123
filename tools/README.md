# Equation tutorials and textbook reference

Run `node tools/build-derivation-tutorials.mjs` from the web repository, or `node web/tools/build-derivation-tutorials.mjs` from its parent. Node uses no additional packages.

The workbook in `derivation-practice.html` defines 21 guided targets and their textbook equation references. Authored follow-ups live in `derivation-tutorial-content.mjs` and `textbook-tutorial-content.mjs`. The generator validates branch attachment and source labels, builds 20 directories with four HTML pages each, and preserves the supplied five-page ideal-gas tutorial. Edit authored sources before rebuilding generated files.

`build-formula-reference.mjs` generates `derivation-formulas.html` from `textbook-equations.json`, with search, chapter filters, exact source excerpts, saved self-assessment notes and a complete PDF reader for unnumbered expressions and supporting material. It distinguishes source reference entries from authored guided derivations.

To regenerate source metadata, the inventory and PNG excerpts, run `python3 tools/build-textbook-equations.py`, then rerun the Node generator. This uses the Python standard library and Poppler's `pdftotext` and `pdftoppm`. It is specific to the eighth-edition source PDF: chapter starts and its SHA-256 are recorded in the metadata. Existing excerpt images are cached; use `--force-images` after changing the PDF or extraction bounds. The index detects numbered labels, not every unnumbered formula; the complete source remains available in the reader.

All pages work offline with their local assets and `Physical_Chemistry.pdf` present. Neither a server nor a network library is required. Preview through `python3 -m http.server 8000` for browser checks. Workbook progress retains the original storage key and exercise IDs; reference notes use a separate key.
