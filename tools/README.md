# Equation tutorial generator

Run `node tools/build-derivation-tutorials.mjs` from the web repository, or `node web/tools/build-derivation-tutorials.mjs` from its parent directory. No packages are needed.

The generator reads the exercise definitions in `derivation-practice.html`. Authored university-level follow-ups live in `derivation-tutorial-content.mjs`; each records a parent page and the section after which its question appears. It creates 14 directories with four static HTML pages, a local stylesheet, and a README each, plus the catalog. The provided ideal-gas directory supplies its original five pages and visual design; its original SVG equations are retained.

Generated tutorials work from `file://` or a local HTTP server. Keep each directory together when copying it. Rebuilding overwrites the 14 generated tutorials and the catalog; edit the authored source to preserve changes. The supplied ideal-gas pages are only given navigation links, if missing.
