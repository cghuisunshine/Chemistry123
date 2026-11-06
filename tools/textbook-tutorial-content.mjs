// Follow-up arguments for the textbook gaps identified in the coverage audit.
const p = text => `<p>${text}</p>`;
const eq = text => `<div class="text-equation">${text}</div>`;
const s = (title, ...body) => ({ title, body: body.join('\n') });
const b = (slug, title, question, parent, after, sections) => ({ slug, title, question, parent, after, sections });

export const textbookTutorials = {
  clapeyron: [
    b('chemical-potential', 'Why are phase chemical potentials equal?', 'What prevents a molecule from preferring one phase?', 'index', 0, [
      s('Transfer a small amount', p('At fixed temperature and pressure, transfer dn moles of a pure substance from phase α to phase β while conserving the total amount. The Gibbs change is the difference in chemical potentials times dn.'), eq('dG = (μ<sub>β</sub> − μ<sub>α</sub>) dn'), p('If this difference were negative, transfer to β would lower G. If positive, the reverse transfer would lower G. At interior equilibrium neither direction is favoured.')),
      s('Move to a neighbouring coexistence state', eq('μ<sub>α</sub> = μ<sub>β</sub>\ndμ<sub>α</sub> = dμ<sub>β</sub>'), p('The second equality describes movement along the coexistence curve. At an arbitrary displacement away from that curve, the two chemical potentials need not stay equal. This is why the resulting derivative is the slope of a phase boundary.'))
    ]),
    b('slope-and-units', 'What does the sign of the boundary slope mean?', 'Why can melting have a negative pressure slope?', 'index', 2, [
      s('Compare the competing preferences', p('An endothermic transition has positive ΔHₘ and hence positive ΔSₘ at coexistence. Higher temperature favours that higher-entropy phase. Increasing pressure favours the phase with smaller molar volume. These preferences determine whether pressure must rise or fall to compensate for an increase in temperature.'), eq('dp/dT = ΔHₘ/(TΔVₘ)')),
      s('Use the same transition direction', p('For ice melting near ordinary pressure, liquid water has smaller molar volume than ice. Thus ΔfusVₘ is negative, while ΔfusHₘ is positive. The melting curve has negative slope. Reversing the transition changes the signs of both ΔHₘ and ΔVₘ, leaving the ratio unchanged.'), eq('(J mol⁻¹)/(K m³ mol⁻¹) = Pa K⁻¹'), p('The reciprocal slope dT/dp has units K Pa⁻¹. Do not exchange these slopes without taking a reciprocal.'))
    ]),
    b('scope-of-clapeyron', 'Where does the exact equation stop applying?', 'Can we divide by a zero transition volume?', 'chemical-potential', 1, [
      s('Use a pure-substance boundary', p('The compact differential dμ = Vₘ dp − Sₘ dT applies to each pure phase. In a multicomponent mixture the chemical potentials depend on composition as well, so additional terms enter when composition changes. A phase diagram for a mixture cannot generally be described by this pure-substance slope alone.')),
      s('Handle limiting points carefully', p('The derivative form divides by ΔVₘ. At a liquid–vapour critical point the phases become identical and both ΔHₘ and ΔVₘ tend to zero. Substitution gives an indeterminate ratio, not an infinite or zero slope by itself. A limiting equation of state or appropriate response data are needed.'))
    ])
  ],
  'clausius-clapeyron': [
    b('volume-approximation', 'Why replace the transition volume by RT/p?', 'Which physical approximation creates the simple law?', 'index', 0, [
      s('Start with an exact difference', eq('Δ<sub>vap</sub>Vₘ = Vₘ,g − Vₘ,l'), p('Vaporization replaces a mole of liquid by a mole of vapour. At low vapour density the gas molar volume is much larger than the liquid molar volume. Neglecting the latter gives ΔVₘ ≈ Vₘ,g.')),
      s('Make a separate gas approximation', eq('Vₘ,g ≈ RT/p\ndp/dT ≈ pΔ<sub>vap</sub>Hₘ/(RT²)'), p('The ideal-vapour approximation is distinct from neglecting liquid volume. Both can fail near a critical point, where liquid and vapour densities approach one another. The exact Clapeyron equation remains the starting point when these substitutions fail.'))
    ]),
    b('variable-latent-heat', 'What if vaporization enthalpy changes with temperature?', 'Which step actually needs a constant latent heat?', 'index', 2, [
      s('Retain the integral', eq('ln(p₂/p₁) = (1/R)∫<sub>T₁</sub><sup>T₂</sup> Δ<sub>vap</sub>Hₘ(T) dT/T²'), p('The differential equation already allows temperature-dependent enthalpy. Pulling ΔHₘ outside this integral is the extra approximation behind the familiar two-temperature expression.')),
      s('A simple correction model', p('Suppose along the considered coexistence interval ΔvapHₘ(T) is adequately approximated by H₁ + b(T − T₁), where b has units J mol⁻¹ K⁻¹. Integration gives:'), eq('ln(p₂/p₁) = [(H₁ − bT₁)(1/T₁ − 1/T₂)\n+ b ln(T₂/T₁)]/R'), p('The expression reduces to the constant-enthalpy result when b = 0. Treat b as a specified fit over the interval; pressure-dependent enthalpy corrections require additional care.'))
    ]),
    b('phase-or-reaction', 'Why does this resemble the van ’t Hoff equation?', 'Does the same-looking formula describe the same quantity?', 'volume-approximation', 1, [
      s('Recognize their common thermodynamics', eq('phase change: d ln p/dT = Δ<sub>vap</sub>Hₘ/(RT²)\nchemical reaction: d ln K/dT = ΔᵣH°/(RT²)'), p('Both connect equilibrium to a change in enthalpy. But p is a coexistence vapour pressure, whereas K is a dimensionless activity-based reaction quotient at equilibrium. Their standard states and physical approximations differ.')),
      s('Check the sign with a numerical ratio', p('Using 40.0 kJ mol⁻¹, T₁ = 300 K and T₂ = 310 K gives ln(p₂/p₁) = 0.517 and p₂/p₁ = 1.68. A positive latent heat means the equilibrium vapour pressure rises on heating. Taking logarithms of the ratio also avoids any dependence on whether both pressures were reported in Pa or kPa.'))
    ])
  ],
  raoult: [
    b('ideal-solution-premise', 'Where does the liquid chemical-potential formula come from?', 'Is Raoult’s law proved without an ideal-solution model?', 'index', 0, [
      s('State the model explicitly', eq('μ<sub>A</sub>(l) = μ<sub>A</sub>*(l) + RT ln x<sub>A</sub>'), p('This is the ideal-solution premise used by the derivation. It may be motivated statistically by ideal mixing or established through measured solution behaviour. The present algebra does not establish that every real liquid follows it.')),
      s('Read the free-energy lowering', p('For 0 &lt; xA &lt; 1, ln xA is negative. Mixing therefore lowers A’s chemical potential relative to pure A at the same conditions. Equilibrium with vapour can be restored at a lower A partial pressure. The formula applies to each component of an ideal solution, not just to the component in excess.'))
    ]),
    b('vapour-composition', 'Why are liquid and vapour compositions different?', 'Does a liquid containing 40% A make vapour containing 40% A?', 'index', 2, [
      s('Add the component pressures', eq('p = x<sub>A</sub>p<sub>A</sub>* + (1 − x<sub>A</sub>)p<sub>B</sub>*\ny<sub>A</sub> = p<sub>A</sub>/p = x<sub>A</sub>p<sub>A</sub>*/p'), p('xA is a liquid mole fraction. yA is a vapour mole fraction, using the ideal-gas partial-pressure relation. The more volatile component is enriched in the vapour.')),
      s('Work a binary example', p('Let xA = 0.40, pA* = 50 kPa and pB* = 20 kPa at the same temperature. Then pA = 20 kPa, pB = 12 kPa and total p = 32 kPa. The vapour has yA = 20/32 = 0.625. A 40% liquid composition therefore gives a 62.5% vapour composition in this model.'))
    ]),
    b('activities-and-henry', 'What changes for a real solution or dilute solute?', 'When do activity corrections or Henry’s law replace the ideal result?', 'ideal-solution-premise', 0, [
      s('Use a pure-liquid reference activity', eq('μ<sub>A</sub> = μ<sub>A</sub>* + RT ln a<sub>A</sub>\na<sub>A</sub> = γ<sub>A</sub>x<sub>A</sub>\np<sub>A</sub> ≈ γ<sub>A</sub>x<sub>A</sub>p<sub>A</sub>*'), p('The last relation retains ideal vapour and negligible liquid-pressure corrections. For an ideal solution γA = 1. The activity coefficient uses the same pure-liquid standard state as the chemical potential.')),
      s('Distinguish the dilute-solute reference', eq('Henry model: p<sub>B</sub> ≈ K<sub>H</sub>x<sub>B</sub> as x<sub>B</sub> → 0'), p('KH is a measured limiting proportionality constant for a solute in a particular solvent; it need not equal the pure-solute vapour pressure pB*. Different Henry-law conventions use concentration instead of mole fraction and consequently have different units.'))
    ])
  ],
  schrodinger: [
    b('quantum-premise', 'Is this a derivation of quantum mechanics?', 'Which statements are postulates rather than algebra?', 'index', 1, [
      s('Separate a physical model from its consequences', p('The wavefunction description, the energy-eigenstate condition and the momentum operator are quantum premises. Combining the specified operators produces the displayed differential equation, but this construction does not prove the premises from Newton’s laws. Experiments motivate and test the quantum theory.')),
      s('Connect stationary and dynamical equations', eq('iℏ ∂Ψ/∂t = ĤΨ\nΨ(x,t) = ψ(x)exp(−iEt/ℏ)\nĤψ = Eψ'), p('For a time-independent Hamiltonian, insert this separated form into the time-dependent postulate. The common time factor cancels. Its magnitude is one, so |Ψ|² = |ψ|² is independent of time for this single energy eigenstate. A superposition can have time-dependent probability density.'))
    ]),
    b('infinite-well', 'How do walls produce discrete energies?', 'What determines the allowed values of k?', 'index', 2, [
      s('Solve inside an infinite square well', p('Let V = 0 for 0 &lt; x &lt; L, with impenetrable walls. For positive E, define k² = 2mE/ℏ². The spatial solution inside is A sin(kx) + B cos(kx). The wall at x = 0 forces B = 0.'), eq('ψ(0) = ψ(L) = 0\nsin(kL) = 0 ⇒ k = nπ/L,  n = 1,2,…')),
      s('Normalize and read the energy', eq('ψₙ(x) = √(2/L) sin(nπx/L)\nEₙ = n²π²ℏ²/(2mL²)'), p('The probability integral over the well is one because the integral of sin²(nπx/L) is L/2. n = 0 would give the zero function and cannot be normalized. Doubling L divides every energy by four; the allowed energies arise from the equation together with the wall conditions.'))
    ]),
    b('probability-and-units', 'What does the wavefunction actually measure?', 'Why must its normalization and dimensions be specified?', 'quantum-premise', 1, [
      s('Interpret a probability density', eq('∫ |ψ(x)|² dx = 1\nProb(a ≤ x ≤ b) = ∫<sub>a</sub><sup>b</sup> |ψ(x)|² dx'), p('In one dimension |ψ|² has units inverse length, so ψ has units length to the power −1/2. A value of |ψ|² at one point is a density, not itself a finite probability. The dimensions change with the dimensionality and coordinate measure of the problem.')),
      s('Distinguish normalization models', p('A plane wave has constant |ψ|² and cannot be normalized by an ordinary integral over the whole infinite line. On a specified periodic interval of length L, the constant magnitude can instead be 1/√L, with allowed k = 2πn/L. A localized free particle can be represented by a normalizable wave packet. These boundary models describe different physical situations.'))
    ])
  ],
  arrhenius: [
    b('logarithms-and-units', 'Can we take a logarithm of a rate constant with units?', 'How should an Arrhenius plot be labelled?', 'index', 0, [
      s('Make the numerical convention explicit', eq('ln(k/k<sub>ref</sub>) = ln(A/k<sub>ref</sub>) − Eₐ/(RT)'), p('Choose kref with the same dimensions as k, for example 1 s⁻¹ for a first-order rate constant. The common shorthand ln k means the logarithm of the numerical value in a stated unit. A must have those same units.')),
      s('Check which quantities depend on the unit choice', p('Switching from seconds to minutes adds the same constant to both logarithmic axes values and the fitted intercept. It does not change the slope versus 1/T or the activation energy. A ratio k₂/k₁ is dimensionless when both rate constants use the same definition and unit.'))
    ]),
    b('activation-energy', 'How is activation energy different from reaction enthalpy?', 'Does an exothermic reaction necessarily have a small rate barrier?', 'index', 1, [
      s('Compare endpoints with a rate dependence', p('Reaction enthalpy compares product and reactant states. Arrhenius activation energy describes the temperature sensitivity of the rate constant. A reaction can release energy overall while proceeding slowly because a transition region is difficult to reach. A catalyst changes the kinetic pathway without changing the equilibrium free-energy difference.')),
      s('Use a local definition beyond a straight line', eq('Eₐ(T) = RT² d ln(k/k<sub>ref</sub>)/dT'), p('This derivative defines an apparent activation energy even when the Arrhenius plot is curved. A temperature-dependent prefactor or changing mechanism can cause such curvature. Treating this derivative as one constant over a large interval then introduces an extra approximation.'))
    ]),
    b('two-temperature-check', 'Predict a rate change without knowing A', 'How do signs and energy units affect the prediction?', 'logarithms-and-units', 1, [
      s('Subtract the same model at two temperatures', eq('ln(k₂/k₁) = −(Eₐ/R)(1/T₂ − 1/T₁)'), p('For positive activation energy, raising T makes the inverse-temperature difference negative and the logarithmic rate ratio positive. Use Kelvin and keep Ea consistent with the energy unit in R.')),
      s('Calculate and interpret the ratio', p('For Ea = 50,000 J mol⁻¹, T₁ = 300 K and T₂ = 310 K, the logarithmic ratio is approximately 0.647 and k₂/k₁ is approximately 1.91. This is a prediction for k. It is the same factor for reaction rate only if the concentration factors and other rate-law conditions are held fixed.'))
    ])
  ],
  langmuir: [
    b('site-counting', 'Why do the rates contain θ and 1 − θ?', 'What is being counted by each kinetic factor?', 'index', 0, [
      s('Count empty and occupied sites', p('Let N be the fixed total number of equivalent adsorption sites. Nθ are occupied and N(1 − θ) are empty. Gas collisions occur at a frequency proportional to pressure at fixed temperature; only collisions at vacant sites can adsorb in the model.'), eq('adsorption rate ∝ pN(1 − θ)\ndesorption rate ∝ Nθ')),
      s('Cancel the same site count', p('Write the proportionality constants as ka and kd. Equating the rates and cancelling N gives ka p(1 − θ) = kd θ. The model assumes the desorption probability per occupied site does not depend on neighbouring occupancy. Interactions between adsorbates would invalidate that simple coefficient.'))
    ]),
    b('half-coverage-and-fitting', 'How can an isotherm estimate K and total capacity?', 'What does a half-covered surface tell us?', 'index', 2, [
      s('Use a direct physical landmark', eq('θ = 1/2 ⇒ Kp = 1 ⇒ p<sub>half</sub> = 1/K'), p('A larger K means half coverage is reached at lower pressure at this temperature. Because K is defined here using pressure rather than a dimensionless gas activity, its units are inverse pressure.')),
      s('Relate coverage to a measured uptake', eq('V = V<sub>max</sub>Kp/(1 + Kp)\np/V = 1/(KV<sub>max</sub>) + p/V<sub>max</sub>'), p('If measured adsorbed volume V is proportional to coverage under a consistent reporting convention, Vmax is the monolayer capacity. A p/V versus p plot has slope 1/Vmax and intercept 1/(KVmax). A nonlinear fit to V(p) can be preferable when measurement errors are not uniform after transformation.'))
    ]),
    b('dissociative-adsorption', 'What if one gas molecule occupies two sites?', 'Why is the simple isotherm specific to nondissociative adsorption?', 'site-counting', 1, [
      s('Change the elementary event', p('For dissociative adsorption A₂(g) + 2* ⇌ 2A*, a simple independent-site mean-field model uses an adsorption factor p(1 − θ)² and a recombination-desorption factor θ². Adjacent-site statistics and interactions are neglected in this approximation.'), eq('kₐp(1 − θ)² = k<sub>d</sub>θ²')),
      s('Solve the changed balance', eq('θ/(1 − θ) = √(Kp)\nθ = √(Kp)/[1 + √(Kp)]'), p('The square-root pressure dependence differs from the nondissociative Langmuir expression. A similar-looking surface problem therefore needs its own explicit site stoichiometry and rate model; one cannot automatically reuse θ = Kp/(1 + Kp).'))
    ])
  ]
};
