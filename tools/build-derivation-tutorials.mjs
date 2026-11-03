#!/usr/bin/env node
// Run from any directory: node web/tools/build-derivation-tutorials.mjs
// No dependencies. The workbook remains the source of the 15 target equations.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';
import { tutorials } from './derivation-tutorial-content.mjs';

const web = fileURLToPath(new URL('../', import.meta.url));
const source = await readFile(path.join(web, 'derivation-practice.html'), 'utf8');
const start = source.indexOf('    const step =');
const end = source.indexOf("    const KEY =", start);
if (start < 0 || end < 0) throw new Error('Cannot locate workbook exercise definitions.');
const exercises = vm.runInNewContext(`${source.slice(start, end)}\nJSON.parse(JSON.stringify(exercises))`, {}, { timeout: 1000 });
const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const directory = id => `${id.replaceAll('-', '_')}_conversation_branches`;
const link = (href, label) => `<a href="${esc(href)}">${esc(label)}</a>`;
const paragraph = text => `<p>${esc(text)}</p>`;
const equation = text => `<div class="text-equation">${esc(text)
  .replace(/_(ext|rev|sys|surr|univ|actual|isothermal|system|total)\b/g, '<sub>$1</sub>')
  .replaceAll('aᵢ^νᵢ', 'aᵢ<sup>νᵢ</sup>')
  .replace(/∫\[([^→\]]+)→([^\]]+)\]/g, '∫<sub>$1</sub><sup>$2</sup>')}</div>`;
const section = (title, body, id = '') => `  <section class="section"${id ? ` id="${esc(id)}"` : ''}>\n    <h2>${esc(title)}</h2>\n${body}\n  </section>`;
const extraCSS = `
/* Extensions for the equation tutorials; base design follows the ideal gas reference. */
.skip-link{position:absolute;top:-100px;left:12px;background:white;padding:10px;z-index:10}
.skip-link:focus{top:10px}.head-links{display:flex;gap:14px;flex-wrap:wrap;font-size:12px}
.section,.branch-location{scroll-margin-top:25px}.text-equation{white-space:pre-wrap;overflow-wrap:anywhere;line-height:1.9;letter-spacing:0}
.text-equation sub,.text-equation sup{font-size:.7em}.article,.side-card{overflow-wrap:anywhere}
.premise-list{padding-left:21px}.premise-list li{margin-block:12px}.symbols{font-size:14px;color:var(--muted)}
.checkpoint{border:1px solid var(--line);border-radius:10px;padding:16px;margin-top:20px;background:#f7f9fd}
.checkpoint summary{cursor:pointer;font-weight:650;color:var(--accent)}.checkpoint p:last-child{margin-bottom:0}
.topic-group{margin-top:35px}.topic-group>h2{font-size:23px}.tutorial-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
.tutorial-card{display:block;background:white;padding:23px;border:1px solid var(--line);border-radius:14px;text-decoration:none;color:var(--ink)}
.tutorial-card:hover{border-color:var(--accent)}.tutorial-card h3{margin:7px 0 12px;font-size:19px;line-height:1.4}
.tutorial-card p{font-size:14px;color:var(--muted);margin:0}.tutorial-card .text-equation{font-size:17px;margin:13px 0}
.tutorial-card small{color:var(--accent)}.scope-note{max-width:760px;color:var(--muted)}.catalog-hero{padding-bottom:28px}
@media(max-width:560px){.head-inner{flex-wrap:wrap;padding-block:12px}.head-links{font-size:11px;gap:10px}.head-tag{display:none}.tutorial-grid{grid-template-columns:1fr}.tutorial-card{padding:19px}}
@media print{body{background:white}.site-header,.breadcrumbs,.side,.branch-location,.return-link,.skip-link{display:none}.wrapper{max-width:none;padding:0}.layout{display:block}.article{box-shadow:none;border:0;padding:0}.hero{padding-top:0}.section{break-inside:avoid}.text-equation{overflow:visible}.checkpoint{display:block}}
`;
const referenceCSS = await readFile(path.join(web, directory('ideal-gas'), 'assets/site.css'), 'utf8');

const validate = (e, branches) => {
  if (!Array.isArray(branches) || branches.length !== 3) throw new Error(`${e.id}: expected three authored branches`);
  const pages = new Map(branches.map(b => [b.slug, b]));
  if (pages.size !== branches.length || pages.has('index')) throw new Error(`${e.id}: duplicate page slug`);
  for (const branch of branches) {
    const parent = branch.parent === 'index' ? null : pages.get(branch.parent);
    if (branch.parent !== 'index' && !parent) throw new Error(`${e.id}: missing parent`);
    const count = parent ? parent.sections.length : e.steps.length;
    if (branch.after < 0 || branch.after >= count) throw new Error(`${e.id}/${branch.slug}: invalid attachment`);
    const seen = new Set([branch.slug]);
    let ancestor = parent;
    while (ancestor) {
      if (seen.has(ancestor.slug)) throw new Error(`${e.id}: branch cycle`);
      seen.add(ancestor.slug);
      ancestor = pages.get(ancestor.parent);
    }
  }
};
const branchCard = branch => `<div class="branch-location" id="branch-${esc(branch.slug)}">
  <a class="branch-card" href="${esc(branch.slug)}.html">
    <span class="branch-text"><span class="branch-prompt">↳ Follow-up: <em>${esc(branch.question)}</em></span>
    <strong>${esc(branch.title)}</strong><span class="branch-description">Follow the argument, then return to this exact statement.</span></span>
    <span class="branch-arrow" aria-hidden="true">↗</span>
  </a>
</div>`;
const attached = (branches, parent, after) => branches.filter(b => b.parent === parent && b.after === after).map(branchCard).join('\n');
const chainFor = (page, branches) => {
  const ancestors = [];
  let current = page;
  while (current) {
    ancestors.unshift(current);
    current = branches.find(b => b.slug === current.parent);
  }
  return ancestors;
};
const shell = ({ title, subtitle, question, content, e, page, branches = [], catalog = false }) => {
  const ancestors = page ? chainFor(page, branches) : [];
  const crumbs = catalog ? '<b>All equation tutorials</b>' : `${link('../derivation-tutorials.html', 'Equation tutorials')}<span class="sep">›</span>${page ? link('index.html', e.title) : `<b>${esc(e.title)}</b>`}${ancestors.map((a, i) => `<span class="sep">›</span>${i === ancestors.length - 1 ? `<b>${esc(a.title)}</b>` : link(`${a.slug}.html`, a.title)}`).join('')}`;
  const history = catalog ? '' : [{ slug: 'index', title: e.title }, ...ancestors].map((a, i, all) => `<div class="history-row${i === all.length - 1 ? ' current' : ''}"><span class="circle">${i + 1}</span><span>${i === all.length - 1 ? esc(a.title) : link(`${a.slug}.html`, a.title)}</span></div>`).join('\n');
  const toc = catalog ? '' : `<aside class="side" aria-label="Reasoning path">
    <div class="side-card"><div class="side-label">Your reasoning path</div>${history}</div>
    <div class="side-card"><div class="side-label">Starting knowledge</div><p>University calculus, vectors, energy, and elementary probability. Thermodynamic and chemical concepts are introduced where used.</p><p>A branch opens beside the claim it explains. Its return link restores that exact place.</p></div>
    <div class="side-card"><div class="side-label">Continue studying</div><p>${link(`../derivation-practice.html#${e.id}`, 'Practice this derivation →')}</p><p>${link('../derivation-tutorials.html', 'Browse all 15 equations →')}</p></div>
  </aside>`;
  const returnLink = page ? `<a class="return-link" href="${esc(page.parent)}.html#branch-${esc(page.slug)}">← Return to the exact statement: ${esc(page.question)}</a>` : '';
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <meta name="description" content="${esc(subtitle)}">
  <title>${esc(title)} · Chemistry Inquiry</title>
  ${catalog ? `<style>\n${referenceCSS}\n${extraCSS}\n  </style>` : '<link rel="stylesheet" href="assets/site.css">'}
</head>
<body>
  <a class="skip-link" href="#main">Skip to explanation</a>
  <header class="site-header"><div class="head-inner">
    <a class="wordmark" href="${catalog ? 'derivation-tutorials.html' : '../derivation-tutorials.html'}"><i aria-hidden="true">∑</i> Chemistry Inquiry</a>
    <nav class="head-links" aria-label="Study navigation">${link(catalog ? 'derivation-practice.html' : `../derivation-practice.html#${e.id}`, 'Derivation practice')}${link(catalog ? 'index.html' : '../index.html', 'Chem 123 guide')}</nav>
  </div></header>
  <div class="wrapper">
    <nav class="breadcrumbs" aria-label="Breadcrumb trail">${crumbs}</nav>
    <div${catalog ? '' : ' class="layout"'}>
      <main class="document" id="main">
        <div class="hero${catalog ? ' catalog-hero' : ''}"><div class="question">${catalog ? '15 equations' : page ? 'Follow-up' : 'Start with the equation'} <q>${esc(question)}</q></div><h1>${esc(title)}</h1><p class="subtitle">${esc(subtitle)}</p></div>
        ${catalog ? content : `<article class="article">\n${content}\n        </article>`}
        ${returnLink}
        <p class="footer">Chemistry Inquiry · Read the main argument, follow a question, return to its source. Works offline.</p>
      </main>
      ${toc}
    </div>
  </div>
</body>
</html>
`.replace(/[ \t]+$/gm, '');
};

let generated = 0;
for (const e of exercises) {
  if (e.id === 'ideal-gas') continue;
  const branches = tutorials[e.id];
  validate(e, branches);
  const folder = path.join(web, directory(e.id));
  await mkdir(path.join(folder, 'assets'), { recursive: true });
  await writeFile(path.join(folder, 'assets/site.css'), `${referenceCSS}\n${extraCSS}`);
  const intro = section('The equation and what it means', `${equation(e.target)}${paragraph(e.goal)}<p class="symbols"><b>Symbols and units.</b> ${esc(e.symbols)}</p>`);
  const premises = section('What can we start from?', `<ul class="premise-list">${e.roots.map(([kind, text]) => `<li><b>${esc(kind)}.</b> ${esc(text)}</li>`).join('')}</ul><div class="note"><b>Prerequisites</b><p>We assume basic university mathematics and physics: differentiation, integration, vectors, energy conservation, and elementary probability. The chemical definitions and thermodynamic premises are stated explicitly; an empirical rate law or model is not proved by rearranging it.</p></div>`);
  const steps = e.steps.map((step, i) => section(`${i + 1}. ${step.title}`, `${paragraph(step.prompt)}${equation(step.equation)}${paragraph(step.why)}${attached(branches, 'index', i)}`, `step-${i + 1}`)).join('\n');
  const conditions = section('Conditions and limits', `<ul class="premise-list">${e.conditions.map(c => `<li>${esc(c)}</li>`).join('')}</ul>${paragraph(e.boundary)}<div class="note"><b>Common misconception</b>${paragraph(e.trap)}${paragraph(e.trapWhy)}</div>`);
  const example = section('Check the result', `${paragraph(e.example)}<details class="checkpoint"><summary>${esc(e.quiz.q)}</summary>${paragraph(e.quiz.why)}</details><p>${link(`../derivation-practice.html#${e.id}`, 'Try the guided or blank-page derivation →')}</p>`);
  await writeFile(path.join(folder, 'index.html'), shell({ title: e.title, subtitle: e.goal, question: e.target.split('\n')[0], content: [intro, premises, steps, conditions, example].join('\n'), e, branches }));
  generated++;
  for (const page of branches) {
    const content = page.sections.map((item, i) => section(item.title, `${item.body}\n${attached(branches, page.slug, i)}`, `section-${i + 1}`)).join('\n');
    await writeFile(path.join(folder, `${page.slug}.html`), shell({ title: page.title, subtitle: page.question, question: page.question, content, e, page, branches }));
    generated++;
  }
  const manifest = [`${e.title.toUpperCase()} — Conversation branches`, '='.repeat(54), '', 'Open index.html directly in a browser. No network, libraries, or server required.', '', 'Prerequisites: basic university calculus, vectors, energy, and probability.', 'Thermodynamic and chemical definitions are introduced explicitly.', '', 'Pages and exact return locations:', '  index.html — main equation and worked derivation', ...branches.map(page => `  ${page.slug}.html — ${page.title}\n    returns to ${page.parent}.html#branch-${page.slug}`), '', 'Start with the main explanation. Branch links sit beside the claims they explain.', 'A deeper page returns to its parent statement, preserving your reasoning path.', '', 'Practice: ../derivation-practice.html#' + e.id, 'All equations: ../derivation-tutorials.html', '', 'Content source: ../tools/derivation-tutorial-content.mjs', 'Rebuild from the repository root: node tools/build-derivation-tutorials.mjs', ''].join('\n');
  await writeFile(path.join(folder, 'README.txt'), manifest);
}

// Preserve the supplied ideal-gas tutorial and its SVG mathematics. Add only
// navigation to the surrounding workbook, once, so it belongs to this library.
for (const name of ['index', 'newton', 'equipartition', 'counting', 'entropy']) {
  const file = path.join(web, directory('ideal-gas'), `${name}.html`);
  let html = await readFile(file, 'utf8');
  if (!html.includes('aria-label="Equation library"')) {
    const navigation = '<nav aria-label="Equation library" style="font-size:13px;margin:20px 0">' + link('../derivation-tutorials.html', '← All equation tutorials') + ' · ' + link('../derivation-practice.html#ideal-gas', 'Practice this derivation →') + '</nav>';
    html = html.replace('<p class="footer">', `${navigation}<p class="footer">`);
    await writeFile(file, html);
  }
}

const groups = [...new Set(exercises.map(e => e.topic))];
const cards = groups.map(topic => `<section class="topic-group"><h2>${esc(topic)}</h2><div class="tutorial-grid">${exercises.filter(e => e.topic === topic).map(e => `<a class="tutorial-card" href="${directory(e.id)}/index.html"><small>${String(exercises.indexOf(e) + 1).padStart(2, '0')} · ${e.id === 'ideal-gas' ? '5' : '4'} linked explanations</small><h3>${esc(e.title)}</h3>${equation(e.target)}${paragraph(e.goal)}<small>Open the explanation and follow its questions →</small></a>`).join('\n')}</div></section>`).join('\n');
const catalogContent = `<p class="scope-note">Start with the equation you want to understand. Each tutorial contains a worked argument, explicit assumptions, symbols and units, examples, and deeper proof pages linked beside the claims they explain. Every branch has a return link to its precise parent statement.</p><p class="scope-note">Assumed background: basic university calculus, vectors, energy conservation, and elementary probability. Thermodynamics, chemical potentials, reaction kinetics, and acid–base concepts are introduced as needed. The ideal-gas tutorial preserves the supplied reference; the other 14 tutorials follow the same visual and branching pattern.</p>${cards}`;
await writeFile(path.join(web, 'derivation-tutorials.html'), shell({ title: 'Follow the equation. Follow the question.', subtitle: 'Conversation-style derivations for every equation in the Chemistry 123 workbook.', question: 'One argument at a time', content: catalogContent, catalog: true }));
await writeFile(path.join(web, 'tools/README.md'), `# Equation tutorial generator\n\nRun \`node tools/build-derivation-tutorials.mjs\` from the web repository, or \`node web/tools/build-derivation-tutorials.mjs\` from its parent directory. No packages are needed.\n\nThe generator reads the exercise definitions in \`derivation-practice.html\`. Authored university-level follow-ups live in \`derivation-tutorial-content.mjs\`; each records a parent page and the section after which its question appears. It creates 14 directories with four static HTML pages, a local stylesheet, and a README each, plus the catalog. The provided ideal-gas directory supplies its original five pages and visual design; its original SVG equations are retained.\n\nGenerated tutorials work from \`file://\` or a local HTTP server. Keep each directory together when copying it. Rebuilding overwrites the 14 generated tutorials and the catalog; edit the authored source to preserve changes. The supplied ideal-gas pages are only given navigation links, if missing.\n`);
console.log(`Built ${generated} new explanation pages, catalog, and navigation for the 5 ideal-gas pages.`);
