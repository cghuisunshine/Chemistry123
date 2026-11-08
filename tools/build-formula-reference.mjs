import { readFile, writeFile } from 'node:fs/promises';
import { followupCatalog } from './ideal-gas-followups.mjs';

export async function buildFormulaReference(web, exercises) {
  const data = JSON.parse(await readFile(new URL('textbook-equations.json', import.meta.url), 'utf8'));
  const targets = exercises.map(({id, title, target, sources = [], href = `${id.replaceAll('-', '_')}_conversation_branches/index.html`, practiceHref = `derivation-practice.html#${id}`}) => ({id, title, target, sources, href, practiceHref}));
  const covered = new Set(targets.flatMap(t => t.sources));
  for (const label of covered) {
    if (!data.equations.some(e => e.label === label)) throw new Error(`Missing source reference ${label}`);
  }
  const payload = JSON.stringify({...data, targets}).replaceAll('<', '\\u003c');
  const inventory = [
    ['chapter','equation_label','pdf_page_1_based','source_href','image','sprite_y','excerpt_width','excerpt_height','reference_status','guided_derivations'].join('\t'),
    ...data.equations.map(e => [e.chapter,e.label,e.page,`Physical_Chemistry.pdf#page=${e.page}`,e.image,e.spriteY,e.imageWidth,e.imageHeight,
      'source_excerpt_included',targets.filter(t => t.sources.includes(e.label)).map(t => t.id).join(',') || 'reference_only'].join('\t'))
  ].join('\n') + '\n';
  await writeFile(new URL('../derivation-equation-inventory.tsv', import.meta.url), inventory);
  const output = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Search numbered physical chemistry equations across all 25 chapters and the mathematics and physics appendices, with exact source excerpts and guided derivations.">
  <title>Textbook equation reference · Chemistry Inquiry</title>
  <style>
    :root{color-scheme:light;--ink:#20283c;--muted:#63718a;--accent:#315cd1;--line:#dce3ef;--bg:#f8f9fb}
    *{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.65 system-ui,-apple-system,sans-serif}a{color:var(--accent);text-underline-offset:3px}button,input,select,textarea{font:inherit}button,summary{cursor:pointer}a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible,summary:focus-visible{outline:3px solid #91aaff;outline-offset:3px}[hidden]{display:none!important}.wrap{max-width:1100px;margin:auto;padding:0 26px}header{background:white;border-bottom:1px solid var(--line)}.head{min-height:72px;display:flex;justify-content:space-between;gap:20px;align-items:center}.brand{color:var(--ink);font-weight:750;text-decoration:none}.nav{display:flex;gap:20px;font-size:13px;flex-wrap:wrap}main{padding-block:38px!important}h1{font-size:clamp(31px,5vw,49px);line-height:1.16;letter-spacing:-.04em;margin:10px 0 18px}h2{font-size:23px;line-height:1.4}h3{font-size:20px;line-height:1.4;margin:8px 0 14px}.eyebrow{font-size:12px;font-weight:750;letter-spacing:.08em;text-transform:uppercase;color:var(--accent)}.intro{max-width:850px;color:var(--muted)}.stats{display:flex;gap:10px;flex-wrap:wrap;margin:22px 0}.stats span{border:1px solid var(--line);border-radius:20px;padding:4px 12px;font-size:13px;background:white}.notice{padding:18px 22px;border:1px solid #d6dfef;background:#f0f4fc;border-radius:12px;font-size:14px;margin:22px 0}.toolbar{display:flex;gap:12px;align-items:end;flex-wrap:wrap;margin:30px 0 15px}.field{display:grid;gap:5px;flex:1;min-width:200px}.field label{font-size:12px;font-weight:650}input,select,textarea{border:1px solid #c4cede;border-radius:8px;background:white;color:var(--ink);padding:10px 12px;min-width:0}input,select{width:100%}button,.button{display:inline-block;border:1px solid #bfcbdf;border-radius:8px;background:white;color:var(--accent);padding:9px 14px;text-decoration:none;font-size:13px;line-height:1.6}button:hover,.button:hover{background:#edf2ff}button:disabled{opacity:.45;cursor:default}.count{font-size:13px;color:var(--muted)}.pager{display:flex;gap:10px;align-items:center;justify-content:space-between;margin:18px 0}.pager span{font-size:13px;color:var(--muted)}.card{background:white;border:1px solid var(--line);padding:24px;border-radius:14px;margin:18px 0;scroll-margin-top:15px}.meta{font-size:12px;color:var(--muted)}.excerpt{overflow-x:auto;background:white;border:1px solid #edf0f6;border-radius:8px;margin:18px 0}.excerpt svg{display:block;width:100%;min-width:660px;height:auto}.actions{display:flex;flex-wrap:wrap;gap:10px;align-items:center}.card details{border-top:1px solid var(--line);margin-top:20px;padding-top:16px}.card summary{color:var(--accent);font-size:14px;font-weight:650}.card details p{font-size:14px;color:var(--muted)}textarea{width:100%;min-height:150px;line-height:1.7;resize:vertical;display:block}.save-state{font-size:12px;color:var(--muted)}.source-reader{background:white;border:1px solid var(--line);padding:24px;border-radius:14px;margin:30px 0;scroll-margin-top:15px}.source-reader iframe{width:100%;height:75vh;min-height:450px;border:1px solid var(--line);border-radius:8px;margin-top:18px}.source-tools{display:flex;align-items:end;gap:12px;flex-wrap:wrap}.source-tools .field{flex:2}.source-tools .page-field{flex:0 1 100px;min-width:80px}.source-reader>p{font-size:14px;color:var(--muted)}.status{min-height:25px;font-size:13px;color:var(--accent)}.empty{padding:30px;border:1px dashed #c4cede;border-radius:12px}.skip{position:absolute;left:15px;top:-100px;background:white;padding:12px;z-index:10}.skip:focus{top:12px}footer{font-size:12px;color:var(--muted);border-top:1px solid var(--line);padding-top:22px;margin-top:35px}.source-open{margin-left:auto}.note-label{display:block;font-size:13px;margin-bottom:7px}
    @media(max-width:600px){.wrap{padding-inline:15px}.head{align-items:flex-start;flex-direction:column;padding-block:15px;gap:9px}.nav{gap:12px;font-size:12px}main{padding-top:25px!important}.card,.source-reader{padding:17px}.toolbar{gap:9px}.field{min-width:100%;flex-basis:100%}.source-tools .field{min-width:100%}.source-tools .page-field{min-width:80px;flex-basis:90px}.pager span{font-size:12px}h3{font-size:18px}.source-open{margin-left:0}.notice{padding:15px}.source-reader iframe{min-height:380px}}
    @media print{header,.toolbar,.pager,.actions,.source-reader,details,footer{display:none}.card{break-inside:avoid}.excerpt svg{min-width:0}.wrap{max-width:none;padding:0}body{background:white}}
  </style>
</head>
<body>
  <a class="skip" href="#main">Skip to equations</a>
  <header><div class="wrap head"><a class="brand" href="derivation-tutorials.html">∑ Chemistry Inquiry</a><nav class="nav" aria-label="Study navigation"><a href="derivation-tutorials.html">Guided tutorials</a><a href="derivation-practice.html">Derivation practice</a><a href="index.html">Chem 123 guide</a></nav></div></header>
  <main class="wrap" id="main">
    <div class="eyebrow">Physical chemistry · Source &amp; reasoning</div>
    <h1>Find the formula.<br>Follow its assumptions.</h1>
    <p class="intro">Browse the textbook's numbered expressions, then open a guided derivation where one is available. Each excerpt preserves the original fractions, symbols, subscripts and surrounding text.</p>
    <div class="stats"><span>${data.equations.length.toLocaleString('en')} numbered expressions</span><span>25 chapters + mathematics &amp; physics appendices</span><span>${targets.length} guided derivations</span></div>
    <div class="notice"><strong>Two ways to study.</strong> The equation index contains source excerpts; the linked tutorials supply authored step-by-step arguments. Unnumbered formulas, worked examples, tables and all other source material are available in the full source reader. The automatic index is not a claim that every unnumbered expression has been transcribed.</div>
    ${followupCatalog.replace('class="note"', 'class="notice"')}
    <button id="show-source" class="source-open">Open the full source reader</button>
    <section class="source-reader" id="source-reader" aria-labelledby="source-title" hidden>
      <h2 id="source-title">Read the complete source</h2>
      <p>Use this reader for an equation's full derivation, longer displays, unnumbered formulas, examples and tables. If your browser does not show the embedded PDF, use “Open PDF separately”.</p>
      <div class="source-tools"><div class="field"><label for="source-chapter">Jump to a chapter or appendix</label><select id="source-chapter"></select></div><div class="field page-field"><label for="source-page">PDF location</label><input id="source-page" type="number" min="1" max="${data.sourcePages}" value="35"></div><button id="source-go">Go</button><button id="source-previous" aria-label="Previous source page">←</button><button id="source-next" aria-label="Next source page">→</button><a class="button" id="source-external" href="Physical_Chemistry.pdf#page=35" target="_blank" rel="noopener">Open PDF separately ↗</a><button id="hide-source">Close reader</button></div>
      <iframe id="source-frame" title="Physical chemistry textbook source" loading="lazy"></iframe>
    </section>
    <section aria-label="Find a textbook equation">
      <div class="toolbar"><div class="field"><label for="formula-search">Search equation number, name or surrounding text</label><input id="formula-search" type="search" placeholder="e.g. 4.11, Arrhenius, diffusion, harmonic oscillator"></div><div class="field"><label for="formula-chapter">Chapter or appendix</label><select id="formula-chapter"><option value="all">All chapters &amp; appendices</option></select></div><button id="clear-filters">Clear filters</button></div>
      <p class="count" id="formula-count" aria-live="polite"></p>
      <div class="pager"><button id="previous">← Previous</button><span id="page-status"></span><button id="next">Next →</button></div>
      <div id="formula-list"></div>
      <div class="pager"><button id="previous-bottom">← Previous</button><span id="page-status-bottom"></span><button id="next-bottom">Next →</button></div>
    </section>
    <p class="status" id="status" role="status" aria-live="polite"></p>
    <noscript><p>Enable JavaScript to search the equation index, or <a href="Physical_Chemistry.pdf">read the complete source PDF</a>.</p></noscript>
    <footer>Source: Atkins &amp; de Paula, Physical Chemistry, eighth edition. Excerpts and source reader work offline when this HTML, its assets and the PDF are kept together. <a href="derivation-equation-audit.md">Coverage notes</a> · <a href="derivation-equation-inventory.tsv">Download equation inventory</a></footer>
  </main>
  <script id="equation-data" type="application/json">${payload}</script>
  <script>
    'use strict';
    const data = JSON.parse(document.getElementById('equation-data').textContent);
    const byId = id => document.getElementById(id);
    const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const normalize = text => text.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[’‘]/g, "'").toLowerCase();
    const searchable = data.equations.map(e => normalize([e.label,e.title,e.section,e.chapterTitle,e.context].join(' ')));
    const pageSize = 20;
    let page = 0;
    let sourcePage = 35;
    let sourceReturnId = '';
    let notes = {};
    let storageOK = true;
    try { const parsed = JSON.parse(localStorage.getItem('chemistry-textbook-equations-v1') || '{}'); if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) notes = parsed; } catch { storageOK = false; }
    const chapterName = c => (c.id.startsWith('A') ? 'Appendix ' + c.id.slice(1) : c.id === 'data' ? 'Supporting material' : 'Chapter ' + c.id) + ' · ' + c.title;
    byId('source-chapter').innerHTML = data.chapters.map(c => '<option value="' + c.page + '">' + esc(chapterName(c)) + '</option>').join('');
    byId('formula-chapter').insertAdjacentHTML('beforeend', data.chapters.filter(c => data.equations.some(e => e.chapter === c.id)).map(c => '<option value="' + c.id + '">' + esc(chapterName(c)) + '</option>').join(''));
    const matched = () => {
      const query = normalize(byId('formula-search').value.trim());
      const chapter = byId('formula-chapter').value;
      return data.equations.filter((e,i) => (chapter === 'all' || e.chapter === chapter) && (!query || searchable[i].includes(query)));
    };
    const render = () => {
      const items = matched();
      const pages = Math.max(1,Math.ceil(items.length/pageSize));
      page = Math.min(Math.max(0,page),pages-1);
      const visible = items.slice(page*pageSize,(page+1)*pageSize);
      byId('formula-count').textContent = items.length + ' of ' + data.equations.length + ' numbered expressions' + (items.length ? ' · showing ' + (page*pageSize+1) + '–' + Math.min((page+1)*pageSize,items.length) : ' · try a broader search');
      byId('formula-list').innerHTML = visible.length ? visible.map(e => {
        const guides = data.targets.filter(t => t.sources.includes(e.label));
        return '<article class="card" id="eq-' + e.label + '"><div class="meta">' + esc(e.chapter.startsWith('A') ? 'Appendix ' + e.chapter.slice(1) : 'Chapter ' + e.chapter) + ' · ' + esc(e.chapterTitle) + '</div><h3>Equation ' + e.label + ' · ' + esc(e.title) + '</h3><div class="excerpt"><svg role="img" aria-label="Original textbook excerpt containing equation ' + e.label + ': ' + esc(e.title) + '. Read the complete source for context." viewBox="' + e.spriteX + ' ' + e.spriteY + ' ' + e.imageWidth + ' ' + e.imageHeight + '" width="' + e.imageWidth + '" height="' + e.imageHeight + '"><image href="' + e.image + '" width="' + e.spriteWidth + '" height="' + e.spriteHeight + '"></image></svg></div><div class="actions"><button data-source="' + e.page + '">Read in context</button>' + guides.map(t => '<a class="button" href="' + t.href + '">Guided explanation</a>' + (t.practiceHref ? '<a class="button" href="' + t.practiceHref + '">Practice derivation</a>' : '')).join('') + '<button data-copy="' + e.label + '">Copy reference</button><a class="button" href="#eq-' + e.label + '">Link to equation</a></div><details><summary>Write your own reasoning</summary><p>Identify the definitions and model assumptions. Explain the symbols and units, derive the result where possible, and check a limiting case. A postulate or measured law should be named as a starting point. These notes are self-assessed.</p><label class="note-label" for="note-' + e.label + '">Your notes for equation ' + e.label + '</label><textarea id="note-' + e.label + '" data-note="' + e.label + '" placeholder="Starting points… Conditions… Argument… Units and limiting case…">' + esc(typeof notes[e.label] === 'string' ? notes[e.label] : '') + '</textarea><p class="save-state">' + (storageOK ? 'Notes save in this browser.' : 'Browser storage is unavailable; copy your notes before leaving.') + '</p></details></article>';
      }).join('') : '<div class="empty">No matching expressions. Try an equation number, choose all chapters, or use the complete source reader for unnumbered formulas.</div>';
      for (const suffix of ['', '-bottom']) {
        byId('previous'+suffix).disabled = page === 0;
        byId('next'+suffix).disabled = page >= pages-1;
        byId('page-status'+suffix).textContent = 'Results ' + (page+1) + ' / ' + pages;
      }
    };
    const openSource = requested => {
      sourcePage = Math.min(data.sourcePages,Math.max(1,Math.trunc(Number(requested))||35));
      const href = 'Physical_Chemistry.pdf#page=' + sourcePage;
      byId('source-reader').hidden = false;
      byId('source-page').value = sourcePage;
      byId('source-frame').src = href;
      byId('source-external').href = href;
      const c = [...data.chapters].reverse().find(c => c.page <= sourcePage);
      if (c) byId('source-chapter').value = c.page;
      byId('source-previous').disabled = sourcePage === 1;
      byId('source-next').disabled = sourcePage === data.sourcePages;
      byId('source-reader').scrollIntoView({block:'start'});
    };
    const followHash = () => {
      const label = location.hash.slice(1).replace(/^eq-/,'');
      const equation = data.equations.find(e => e.label === label);
      if (!equation) return;
      byId('formula-search').value = '';
      byId('formula-chapter').value = equation.chapter;
      page = Math.floor(matched().findIndex(e => e.label === label)/pageSize);
      render();
      requestAnimationFrame(() => byId('eq-'+label)?.scrollIntoView({block:'start'}));
    };
    for (const id of ['formula-search','formula-chapter']) byId(id).addEventListener(id === 'formula-search' ? 'input' : 'change', () => { page=0; render(); });
    byId('clear-filters').addEventListener('click', () => { byId('formula-search').value=''; byId('formula-chapter').value='all'; page=0; render(); });
    for (const suffix of ['', '-bottom']) {
      byId('previous'+suffix).addEventListener('click', () => { page--; render(); byId('formula-search').scrollIntoView({block:'start'}); });
      byId('next'+suffix).addEventListener('click', () => { page++; render(); byId('formula-search').scrollIntoView({block:'start'}); });
    }
    byId('formula-list').addEventListener('click', async event => {
      const source = event.target.closest('[data-source]');
      if (source) { sourceReturnId=source.closest('.card').id; openSource(source.dataset.source); }
      const copy = event.target.closest('[data-copy]');
      if (copy) {
        const e = data.equations.find(e => e.label === copy.dataset.copy);
        const citation = 'Atkins & de Paula, Physical Chemistry, 8th ed., equation ' + e.label + ' (' + e.title + ').';
        try { await navigator.clipboard.writeText(citation); byId('status').textContent='Equation reference copied.'; }
        catch { byId('status').textContent='Copy this reference: ' + citation; }
      }
    });
    byId('formula-list').addEventListener('input', event => {
      if (!event.target.matches('[data-note]')) return;
      notes[event.target.dataset.note] = event.target.value;
      try { localStorage.setItem('chemistry-textbook-equations-v1',JSON.stringify(notes)); }
      catch { storageOK=false; event.target.nextElementSibling.textContent='Browser storage is unavailable; copy your notes before leaving.'; }
    });
    byId('show-source').addEventListener('click', () => { sourceReturnId=''; openSource(sourcePage); });
    byId('hide-source').addEventListener('click', () => {
      byId('source-reader').hidden=true;
      const card = sourceReturnId && byId(sourceReturnId);
      if (card) { card.querySelector('[data-source]').focus({preventScroll:true}); card.scrollIntoView({block:'start'}); }
      else byId('show-source').focus();
    });
    byId('source-go').addEventListener('click', () => openSource(byId('source-page').value));
    byId('source-page').addEventListener('keydown', e => { if(e.key === 'Enter') openSource(e.target.value); });
    byId('source-chapter').addEventListener('change', e => openSource(e.target.value));
    byId('source-previous').addEventListener('click', () => openSource(sourcePage-1));
    byId('source-next').addEventListener('click', () => openSource(sourcePage+1));
    window.addEventListener('hashchange', followHash);
    render();
    followHash();
  </script>
</body>
</html>
`;
  await writeFile(new URL('../derivation-formulas.html', import.meta.url), output);
  return {equations: data.equations.length, linkedLabels: covered.size};
}
