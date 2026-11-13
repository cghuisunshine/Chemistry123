import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { statisticalFollowups, statisticalNotes } from './ideal-gas-statistical-followups.mjs';
import { thermodynamicFollowups, thermodynamicNotes } from './ideal-gas-thermodynamic-followups.mjs';

const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const p = text => `<p>${text}</p>`;
const eq = text => `<div class="text-equation">${text}</div>`;
const section = (title, body, id) => `<section class="section" id="${id}"><h2>${title}</h2>${body}</section>`;
const link = (href, label) => `<a href="${href}">${label}</a>`;
const derivative = '<figure class="equation"><img src="assets/eq/72e318cc8106.svg" alt="At fixed volume and particle number, the derivative of reservoir entropy with respect to reservoir energy equals one over temperature."></figure>';

export const idealGasFollowups = [
  {
    slug: 'remaining-energy', title: 'Why total energy minus epsilon?',
    question: 'Why count the reservoir at the remaining energy?', parent: 'counting',
    parentTitle: 'State counting', attachment: 'Fix one particular molecular microstate',
    subtitle: 'Energy conservation fixes which reservoir states can accompany one chosen system microstate.',
    sections: [
      section('1. The argument belongs to the reservoir',
        p('The symbol Ω<sub>R</sub>(E) is <b>defined</b> to count reservoir microstates at reservoir energy E. A system microstate i has energy ε<sub>i</sub>. If the system and reservoir exchange energy while their total stays fixed, and their interaction energy is negligible,') +
        eq('E<sub>total</sub> = ε<sub>i</sub> + E<sub>R</sub>\nE<sub>R</sub> = E<sub>total</sub> − ε<sub>i</sub>') +
        p('For example, with 10 energy units in total and 3 in the small system, the reservoir has 7. Its count is Ω<sub>R</sub>(7), evaluated at the energy it actually has. Ω<sub>R</sub>(3) would count the reservoir at a different energy.'), 'remaining-energy'),
      section('2. The probability formula is derived',
        p('The <b>equilibrium postulate</b> assigns equal probability to every accessible microstate of the isolated combined system. Each combined state specifies both the small system and the reservoir. Fixing i leaves Ω<sub>R</sub>(E<sub>total</sub> − ε<sub>i</sub>) compatible reservoir states. Summing their equal probabilities gives') +
        eq('p<sub>i</sub> = Ω<sub>R</sub>(E<sub>total</sub> − ε<sub>i</sub>) / Ω<sub>total</sub>(E<sub>total</sub>)\nΩ<sub>total</sub>(E<sub>total</sub>) = ∑<sub>j</sub> Ω<sub>R</sub>(E<sub>total</sub> − ε<sub>j</sub>)') +
        p('The denominator is the same for every i. Therefore p<sub>i</sub> ∝ Ω<sub>R</sub>(E<sub>total</sub> − ε<sub>i</sub>). This is a <b>derived result</b>, conditional on the postulate and the energy constraint. It still depends on ε<sub>i</sub>, through the energy left for the reservoir.'), 'counting-probability'),
      section('3. Count four complete states',
        p('Take four distinguishable two-level units, with energies 0 and Δ. Unit S is the small system; A, B, and C form the reservoir. Fix the total energy at one quantum, Δ. The accessible combined states differ by which unit holds that quantum.') +
        '<div class="table-scroll"><table><caption>All four combined microstates are equally likely.</caption><thead><tr><th>Excited unit</th><th>System energy</th><th>Reservoir energy</th></tr></thead><tbody><tr><td>S</td><td>Δ</td><td>0</td></tr><tr><td>A</td><td>0</td><td>Δ</td></tr><tr><td>B</td><td>0</td><td>Δ</td></tr><tr><td>C</td><td>0</td><td>Δ</td></tr></tbody></table></div>' +
        eq('P(E<sub>S</sub> = 0) = 3/4\nP(E<sub>S</sub> = Δ) = 1/4') +
        p('This is exact counting in a small example. A reservoir large enough to maintain a constant temperature is a further assumption used for the Boltzmann approximation.'), 'four-states'),
      section('4. A microstate and an energy level differ',
        p('The formula above fixes <b>one system microstate</b>. If g<sub>S</sub>(ε) different system microstates share an energy ε, add their probabilities:') +
        eq('P(E<sub>S</sub> = ε) ∝ g<sub>S</sub>(ε) Ω<sub>R</sub>(E<sub>total</sub> − ε)') +
        p('For a large thermal reservoir, this becomes P(E<sub>S</sub> = ε) ∝ g<sub>S</sub>(ε)e<sup>−ε/(k<sub>B</sub>T)</sup>. The degeneracy factor belongs to an energy-level probability. For continuous energy, use a density of states and an energy interval.'), 'energy-levels'),
      section('5. Continue to entropy and temperature',
        p('To turn the reservoir count into an exponential weight, use S<sub>R</sub> = k<sub>B</sub> ln Ω<sub>R</sub> and expand the entropy of a large reservoir. The slope used in that expansion is 1/T.') +
        p(link('entropy.html', 'Follow the entropy-to-exponential argument →') + '<br>' + link('temperature-definition.html', 'Is the temperature slope a definition or a derivation? →')) +
        p('Sources: ' + link('https://schwartz.scholars.harvard.edu/sites/g/files/omnuum7046/files/schwartz/files/7-ensembles_0.pdf', 'Harvard: ensembles and reservoir counting') + ' · ' + link('https://farside.ph.utexas.edu/teaching/sm1/Thermalhtml/node74.html', 'UT Austin: canonical probability') + '.'), 'continue')
    ]
  },
  {
    slug: 'temperature-definition', title: 'Is the temperature relation a definition or a derivation?',
    question: 'Why does the entropy derivative equal 1/T?', parent: 'entropy',
    parentTitle: 'The entropy substitution', attachment: '3. Why does the derivative equal 1/T?',
    subtitle: 'Separate the definition of thermodynamic temperature, an equivalent thermodynamic identity, and the later approximation.',
    sections: [
      section('1. Identify this particular equation', derivative +
        p('S<sub>R</sub> is reservoir entropy, E<sub>R</sub> is reservoir energy, and the subscript V,N in the original equation means that reservoir volume and particle number stay fixed while energy changes. We write these constraints explicitly as V<sub>R</sub>,N<sub>R</sub> below. R labels the reservoir; the relation also applies to other equilibrium systems with the stated constraints.') +
        p('In an <b>entropy-based statistical mechanics treatment</b>, this relation defines thermodynamic temperature: temperature is the reciprocal of the entropy–energy slope. If temperature and entropy have already been introduced thermodynamically, the same equation follows as an identity.'), 'definition'),
      section('2. Derive the identity from thermodynamics',
        p('For equilibrium states of a simple compressible system with one particle species, start with the fundamental thermodynamic relation:') +
        eq('dE<sub>R</sub> = T dS<sub>R</sub> − p dV<sub>R</sub> + μ dN<sub>R</sub>') +
        p('Here V<sub>R</sub> and N<sub>R</sub> are the reservoir volume and particle number; T, p, and μ are its temperature, pressure, and chemical potential. At fixed V<sub>R</sub> and N<sub>R</sub>, dV<sub>R</sub> = dN<sub>R</sub> = 0. Hence') +
        eq('dE<sub>R</sub> = T dS<sub>R</sub>\ndS<sub>R</sub> = (1/T) dE<sub>R</sub>\n(∂S<sub>R</sub>/∂E<sub>R</sub>)<sub>Vᵣ,Nᵣ</sub> = 1/T') +
        p('The coefficient of dE<sub>R</sub> is the required partial derivative. Equivalently, along a reversible path at fixed V<sub>R</sub>,N<sub>R</sub> with only pressure–volume work, dS<sub>R</sub> = δQ<sub>rev</sub>/T and δQ<sub>rev</sub> = dE<sub>R</sub>.'), 'thermodynamic-identity'),
      section('3. Read the slope physically',
        p('For a sufficiently small energy change under these constraints, ΔS<sub>R</sub> ≈ ΔE<sub>R</sub>/T. At 300 K, a 3 J increase corresponds to approximately 0.01 J K<sup>−1</sup> of entropy, provided the temperature change is negligible.') +
        p('For a finite change at fixed reservoir volume and particle number, ΔS<sub>R</sub> = ∫ dE<sub>R</sub>/T. Keep T inside the integral if it varies. The local differential does not imply E<sub>R</sub> = TS<sub>R</sub>. ' + link('fundamental-relation.html#finite-changes', 'See the finite-change example and product-rule explanation →')) +
        p('At thermal equilibrium, total entropy is stationary with respect to energy transferred between two subsystems. Their entropy–energy slopes match; therefore their temperatures match. This helps explain why this derivative describes thermal contact.'), 'meaning'),
      section('4. The approximation occurs in the Taylor expansion',
        p('Expand reservoir entropy around an energy E<sub>0</sub>, at fixed V<sub>R</sub>,N<sub>R</sub>. The first-order term uses the derivative evaluated at that state:') +
        eq('S<sub>R</sub>(E<sub>0</sub> − ε)\n≈ S<sub>R</sub>(E<sub>0</sub>) − ε(∂S<sub>R</sub>/∂E<sub>R</sub>)<sub>E₀,Vᵣ,Nᵣ</sub>\n= S<sub>R</sub>(E<sub>0</sub>) − ε/T') +
        p('The temperature relation is a <b>thermodynamic identity</b>. Dropping the quadratic and higher Taylor terms is the <b>approximation</b>. A large reservoir makes its temperature change negligible over the relevant energy exchanges.') +
        p(link('entropy-taylor-expansion.html', 'See the Taylor substitutions, signs, and reference-state derivative →')) +
        eq('S<sub>R</sub> = k<sub>B</sub> ln Ω<sub>R</sub>\n(∂ ln Ω<sub>R</sub>/∂E<sub>R</sub>)<sub>Vᵣ,Nᵣ</sub> = 1/(k<sub>B</sub>T) ≡ β\np<sub>i</sub> = e<sup>−βεᵢ</sup>/Z') +
        p('S has units J K<sup>−1</sup>, so ∂S/∂E has units K<sup>−1</sup>. By contrast, β has units J<sup>−1</sup>; the factor k<sub>B</sub> is essential.'), 'approximation'),
      section('5. Keep the starting points separate',
        '<div class="note"><b>Three different roles</b><p>The reservoir probability formula is derived by counting. The entropy–energy derivative defines temperature in one approach and follows from established thermodynamics in another. The Boltzmann reservoir calculation then makes a first-order approximation.</p></div>' +
        p(link('remaining-energy.html', 'Return to the reservoir counting explanation →') + '<br>' + link('entropy.html#branch-temperature-definition', 'Continue from the original entropy argument →')) +
        p('Sources: David Tong’s ' + link('https://davidtong.org/teaching/statistical-physics/statmechhtml/S1', 'statistical mechanics notes') + ' introduce the entropy-based definition; his ' + link('https://davidtong.org/teaching/statistical-physics/statmechhtml/S4', 'thermodynamics notes') + ' give the thermodynamic framework.'), 'starting-points')
    ]
  },
  ...statisticalFollowups,
  ...thermodynamicFollowups
];

export const followupCatalog = `<section class="note" id="reservoir-followups"><h2>From reservoir states to molecular velocities</h2><p>Follow ${idealGasFollowups.length} connected explanations of the assumptions, counting, and mathematical steps behind the Boltzmann distribution.</p><ul>${idealGasFollowups.map(page => `<li>${link(`ideal_gas_conversation_branches/${page.slug}.html`, esc(page.title))}</li>`).join('')}</ul><p>Each explanation returns to the exact statement it expands in the original ideal-gas reasoning path.</p><p>${link('ideal_gas_conversation_branches/fundamental-relation.html#finite-changes', 'When can we replace differentials with finite changes?')}</p></section>`;

const branch = page => `<div class="branch-location" id="branch-${page.slug}"><a class="branch-card" href="${page.slug}.html"><span class="branch-text"><span class="branch-prompt">↳ Follow-up question</span><strong>${esc(page.title)}</strong><span class="branch-description">${esc(page.subtitle)}</span></span><span class="branch-arrow" aria-hidden="true">↗</span></a></div>`;

const shell = page => {
  const originalPath = [ ['index', 'PV = nRT'], ['newton', 'Collisions'], ['equipartition', 'Average energy'], ['counting', 'State counting'], ['entropy', 'Entropy and the Boltzmann factor'] ];
  const ancestors = [];
  const seen = new Set([page.slug]);
  let parentSlug = page.parent;
  while (parentSlug) {
    if (seen.has(parentSlug)) throw new Error(`Follow-up cycle at ${parentSlug}`);
    seen.add(parentSlug);
    const originalIndex = originalPath.findIndex(([slug]) => slug === parentSlug);
    if (originalIndex >= 0) {
      ancestors.unshift(...originalPath.slice(0, originalIndex + 1));
      break;
    }
    const parent = idealGasFollowups.find(item => item.slug === parentSlug);
    if (!parent) throw new Error(`Unknown follow-up parent: ${parentSlug}`);
    ancestors.unshift([parent.slug, parent.title]);
    parentSlug = parent.parent;
  }
  const history = [...ancestors, [page.slug, page.title]];
  const related = idealGasFollowups.filter(item => item.slug !== page.slug).map(item => p(link(`${item.slug}.html`, esc(item.title)))).join('');
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="${esc(page.subtitle)}"><title>${esc(page.title)} · Chemistry Inquiry</title><link rel="stylesheet" href="assets/site.css"><style>
.text-equation{white-space:pre-wrap;overflow-wrap:anywhere;line-height:1.9;letter-spacing:0}.text-equation sub,.text-equation sup{font-size:.7em}.checkpoint{border:1px solid var(--line);border-radius:10px;padding:16px;margin-top:20px;background:#f7f9fd}.checkpoint summary{cursor:pointer;font-weight:650;color:var(--accent)}.table-scroll{overflow-x:auto;margin:24px 0}table{width:100%;border-collapse:collapse;font-size:14px;text-align:left}caption{text-align:left;color:var(--muted);padding-bottom:10px}th,td{border-bottom:1px solid var(--line);padding:10px}th{background:#f7f9fd}.section{scroll-margin-top:24px}.skip-link{position:absolute;top:-100px;left:15px;background:white;padding:10px;z-index:10}.skip-link:focus{top:10px}.head-links{display:flex;flex-wrap:wrap;gap:12px;font-size:12px}@media(max-width:560px){.head-inner{flex-wrap:wrap;padding-block:12px}.head-links{font-size:11px}.question{flex-wrap:wrap}.question q{max-width:100%}.side{display:block}.side-card{margin-bottom:12px}}@media print{.site-header,.breadcrumbs,.side,.return-link,.skip-link{display:none}.layout{display:block}.article{box-shadow:none;border:0}.section{break-inside:avoid}}
</style></head><body><a class="skip-link" href="#main">Skip to explanation</a><header class="site-header"><div class="head-inner"><a class="wordmark" href="../derivation-tutorials.html"><i aria-hidden="true">∑</i> Chemistry Inquiry</a><nav class="head-links" aria-label="Study navigation">${link('../derivation-tutorials.html', 'Equation tutorials')}${link('../derivation-formulas.html', 'Textbook formulas')}${link('../index.html', 'Chem 123 guide')}</nav></div></header><div class="wrapper"><nav class="breadcrumbs" aria-label="Reasoning path">${ancestors.map(([slug,title]) => link(`${slug}.html`, title)).join('<span class="sep">›</span>')}<span class="sep">›</span><b>${esc(page.title)}</b></nav><div class="layout"><main class="document" id="main"><div class="hero"><div class="question">Follow-up <q>${esc(page.question)}</q></div><h1>${esc(page.title)}</h1><p class="subtitle">${esc(page.subtitle)}</p></div><article class="article">${page.sections.join('\n')}</article><a class="return-link" href="${page.parent}.html#branch-${page.slug}">← Return to the exact statement: ${esc(page.attachment)}</a><p class="footer">Chemistry Inquiry · Compatible states, explicit assumptions, and connected explanations. Works offline.</p></main><aside class="side" aria-label="Study navigation"><div class="side-card"><div class="side-label">Your reasoning path</div>${history.map(([slug,title],i) => `<div class="history-row${slug === page.slug ? ' current' : ''}"><span class="circle">${i+1}</span><span>${slug === page.slug ? esc(title) : link(`${slug}.html`, esc(title))}</span></div>`).join('')}</div><div class="side-card"><div class="side-label">Related questions</div>${related}</div></aside></div></div></body></html>\n`;
};

export async function writeIdealGasFollowups(web) {
  const folder = path.join(web, 'ideal_gas_conversation_branches');
  for (const page of idealGasFollowups) {
    const file = path.join(folder, `${page.parent}.html`);
    let html = await readFile(file, 'utf8');
    const marker = `<!-- followup:${page.slug} -->`;
    html = html.replace(new RegExp(`${marker}[\\s\\S]*?<!-- /followup:${page.slug} -->`, 'g'), '');
    let attached = false;
    html = html.replace(/<section\b[^>]*>[\s\S]*?<\/section>/g, part => {
      if (!part.includes(`<h2>${page.attachment}</h2>`)) return part;
      attached = true;
      const clarification = page.clarification ?? (page.slug === 'temperature-definition'
        ? '<div class="note"><b>Definition or derived identity?</b><p>In an entropy-based approach, (∂S<sub>R</sub>/∂E<sub>R</sub>)<sub>V,N</sub> = 1/T defines thermodynamic temperature. When temperature and entropy have already been introduced through thermodynamics, the same equation follows as an identity. The later Taylor truncation is a separate approximation.</p></div>' : '');
      const insertion = `${marker}${clarification}${branch(page)}<!-- /followup:${page.slug} -->`;
      if (page.attachAfterEquation) {
        const statement = part.indexOf(page.attachAfterEquation);
        const boundary = part.indexOf('</div>', statement);
        if (statement < 0 || boundary < 0) throw new Error(`Cannot locate ${page.slug} equation`);
        const position = boundary + '</div>'.length;
        return part.slice(0, position) + insertion + part.slice(position);
      }
      if (page.attachAfter) {
        const statement = part.indexOf(page.attachAfter);
        const boundary = part.indexOf('</figure>', statement);
        if (statement < 0 || boundary < 0) throw new Error(`Cannot locate ${page.slug} statement`);
        const position = boundary + '</figure>'.length;
        return part.slice(0, position) + insertion + part.slice(position);
      }
      return part.replace('</section>', insertion + '</section>');
    });
    if (!attached) throw new Error(`Cannot attach ${page.slug}: parent statement changed`);
    await writeFile(file, html);
    await writeFile(path.join(folder, `${page.slug}.html`), shell(page));
  }
  // Preserve the standalone Carnot lesson and attach the general engine proof
  // immediately after its efficiency equation, with a stable return anchor.
  const carnotFile = path.join(web, 'carnot-heat-temperature.html');
  let carnot = await readFile(carnotFile, 'utf8');
  carnot = carnot.replace(/<!-- followup:carnot-efficiency -->[\s\S]*?<!-- \/followup:carnot-efficiency -->/g, '');
  const efficiencyEquation = '<div class="text-equation">η = W<sub>net</sub>/Q<sub>h</sub> = 1 − T<sub>c</sub>/T<sub>h</sub></div>';
  if (!carnot.includes(efficiencyEquation)) throw new Error('Cannot attach the engine proof: Carnot efficiency statement changed');
  const engineProof = idealGasFollowups.find(page => page.slug === 'carnot-efficiency');
  const engineBranch = branch(engineProof).replace('href="carnot-efficiency.html"', 'href="ideal_gas_conversation_branches/carnot-efficiency.html"');
  carnot = carnot.replace(efficiencyEquation, efficiencyEquation + '<!-- followup:carnot-efficiency -->' + engineBranch + '<!-- /followup:carnot-efficiency -->');
  await writeFile(carnotFile, carnot);
  const notes = `# Reservoir counting and thermodynamic temperature\n\nThese notes accompany the [reservoir-energy explanation](remaining-energy.html) and the [temperature explanation](temperature-definition.html). Both return to their exact parent statements.\n\n## Remaining energy and probability\n\nFor negligible system–reservoir interaction energy, E_total = epsilon_i + E_R. Omega_R(E) counts reservoir states, so fixing system microstate i leaves Omega_R(E_total - epsilon_i) compatible combined states. Equal probabilities for the accessible isolated combined states are the equilibrium postulate. Summing those probabilities derives p_i = Omega_R(E_total - epsilon_i) / Omega_total(E_total).\n\nFor four distinguishable two-level units S,A,B,C with total energy one quantum, S is excited in one state and unexcited in three. Their probabilities are 1/4 and 3/4. If an energy level contains g_S(epsilon) system states, its probability includes that degeneracy.\n\n## Temperature: definition, identity, approximation\n\nThe relation (partial S_R / partial E_R) at fixed V,N = 1/T defines thermodynamic temperature in an entropy-based treatment. If temperature and entropy are already established, it follows from dE_R = T dS_R - p dV + mu dN at fixed V,N. These are two starting points for the same relation. The identity is not specific to a large reservoir. Here V,N mean the reservoir variables V_R,N_R. The local slope 1/T has units K^-1; at 300 K, a small 3 J increase gives approximately 0.010 J/K. For a finite change at fixed V_R,N_R, integrate dE_R/T with the local temperature; this does not imply E_R=T S_R. See [the finite-change explanation](fundamental-relation.html#finite-changes).\n\nExpanding S_R(E_0 - epsilon) to first order gives S_R(E_0) - epsilon/T. Dropping the higher terms is the approximation. Combining this with S_R = k_B ln Omega_R gives beta = 1/(k_B T), and normalization gives p_i = exp(-beta epsilon_i)/Z.\n\nSources: [Harvard reservoir counting](https://schwartz.scholars.harvard.edu/sites/g/files/omnuum7046/files/schwartz/files/7-ensembles_0.pdf), [Tong statistical mechanics](https://davidtong.org/teaching/statistical-physics/statmechhtml/S1), [Tong thermodynamics](https://davidtong.org/teaching/statistical-physics/statmechhtml/S4).\n\nAuthored HTML and these companion notes are maintained in ../tools/ideal-gas-followups.mjs. Rebuild with node tools/build-derivation-tutorials.mjs.\n`;
  await writeFile(path.join(folder, 'followups.md'), notes + statisticalNotes + thermodynamicNotes);
}
