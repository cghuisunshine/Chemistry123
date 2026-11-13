// Thermodynamic foundations linked to the precise statements that use them.
const p = text => `<p>${text}</p>`;
const eq = text => `<div class="text-equation">${text}</div>`;
const section = (title, body, id) => `<section class="section" id="${id}"><h2>${title}</h2>${body}</section>`;
const link = (href, label) => `<a href="${href}">${label}</a>`;
const check = (question, answer) => `<details class="checkpoint"><summary>${question}</summary><p>${answer}</p></details>`;

export const thermodynamicFollowups = [
  {
    slug: 'fundamental-relation', title: 'Why does dE = T dS − p dV + μ dN?',
    question: 'Where does the fundamental thermodynamic relation come from?',
    parent: 'temperature-definition', attachment: '2. Derive the identity from thermodynamics',
    attachAfterEquation: 'dE<sub>R</sub> = T dS<sub>R</sub> − p dV<sub>R</sub> + μ dN<sub>R</sub>',
    clarification: '<div class="note"><b>Unpack the starting relation</b><p>Combine energy conservation with reversible heat and volume work at fixed particle number, then define the coefficient describing a change in particle number.</p></div>',
    subtitle: 'Identify the physical laws and definitions behind each coefficient before using the temperature identity.',
    sections: [
      section('1. Start with energy conservation at fixed particle number',
        p('Take a simple compressible system with one particle species. The subscript R labels the reservoir: E<sub>R</sub> is its internal energy, S<sub>R</sub> its entropy, V<sub>R</sub> its volume, and N<sub>R</sub> its particle number. T, p, and μ denote its temperature, pressure, and chemical potential. First keep N<sub>R</sub> fixed. Count heat into the reservoir as positive and work on it as positive:') +
        eq('dE<sub>R</sub> = δQ + δW<sub>on</sub>') +
        p('This is the first law. Heat and work describe energy crossing the boundary. The symbols δQ and δW distinguish these path-dependent transfers from changes in the state function E<sub>R</sub>.'), 'first-law'),
      section('2. Identify the reversible heat term',
        p('For a reversible comparison of nearby equilibrium states, the thermodynamic entropy relation gives') +
        eq('dS<sub>R</sub> = δQ<sub>rev</sub>/T\nδQ<sub>rev</sub> = T dS<sub>R</sub>') +
        p('This uses entropy and thermodynamic temperature, whose relation is justified by the second law and reversible cycles. Energy conservation alone does not identify this entropy term. T is measured in kelvin and S in J K<sup>−1</sup>, so T dS has units of energy.'), 'reversible-heat'),
      section('3. Identify the reversible volume-work term',
        p('A gas expanding against an external load performs work on its surroundings. For a frictionless piston with negligible energy storage, the work on the gas is −p<sub>ext</sub> dV<sub>R</sub>. In the reversible mechanical limit, p<sub>ext</sub> approaches the equilibrium gas pressure p through infinitesimal differences:') +
        eq('δW<sub>on,rev</sub> = −p dV<sub>R</sub>\ndE<sub>R</sub> = T dS<sub>R</sub> − p dV<sub>R</sub>   (fixed N<sub>R</sub>)') +
        p('Expansion has dV<sub>R</sub> &gt; 0 and therefore negative work on the system. Compression has dV<sub>R</sub> &lt; 0 and positive work on it. The simple compressible model includes volume work; other work modes would require additional terms.'), 'volume-work'),
      section('4. Allow particle number to change',
        p('Equilibrium states of this model can be represented by E<sub>R</sub>(S<sub>R</sub>,V<sub>R</sub>,N<sub>R</sub>). Its total differential has one coefficient for each variable:') +
        eq('dE<sub>R</sub> = (∂E<sub>R</sub>/∂S<sub>R</sub>)<sub>Vᵣ,Nᵣ</sub> dS<sub>R</sub>\n+ (∂E<sub>R</sub>/∂V<sub>R</sub>)<sub>Sᵣ,Nᵣ</sub> dV<sub>R</sub>\n+ (∂E<sub>R</sub>/∂N<sub>R</sub>)<sub>Sᵣ,Vᵣ</sub> dN<sub>R</sub>') +
        p('Comparing this differential with the fixed-particle-number result identifies the first two coefficients as T and −p. Define the third coefficient as the chemical potential μ:') +
        eq('T = (∂E<sub>R</sub>/∂S<sub>R</sub>)<sub>Vᵣ,Nᵣ</sub>\n−p = (∂E<sub>R</sub>/∂V<sub>R</sub>)<sub>Sᵣ,Nᵣ</sub>\nμ ≡ (∂E<sub>R</sub>/∂N<sub>R</sub>)<sub>Sᵣ,Vᵣ</sub>\ndE<sub>R</sub> = T dS<sub>R</sub> − p dV<sub>R</sub> + μ dN<sub>R</sub>') +
        p('μ describes the equilibrium internal-energy change per added particle while total entropy and volume stay fixed. It is not generally the mean energy of a particle or the energy delivered by an actual incoming stream. An open-system transport balance needs its own material-flow terms. With N<sub>R</sub> counting particles, μ has units J per particle; p has units Pa and V<sub>R</sub> has units m³, so p dV<sub>R</sub> is in joules. If mole number n replaces particle number N<sub>R</sub>, use molar chemical potential in J/mol in μ dn.'), 'chemical-potential'),
      section('5. Return to the temperature derivative',
        p('For nonzero temperature, divide the fundamental relation by T and solve for the entropy differential:') +
        eq('dS<sub>R</sub> = (1/T) dE<sub>R</sub>\n+ (p/T) dV<sub>R</sub> − (μ/T) dN<sub>R</sub>') +
        p('Holding both V<sub>R</sub> and N<sub>R</sub> fixed makes dV<sub>R</sub> = dN<sub>R</sub> = 0:') +
        eq('dE<sub>R</sub> = T dS<sub>R</sub>\ndS<sub>R</sub> = (1/T) dE<sub>R</sub>\n(∂S<sub>R</sub>/∂E<sub>R</sub>)<sub>Vᵣ,Nᵣ</sub> = 1/T') +
        p('The coefficient 1/T is the entropy gained per small energy increase under these constraints. Its units are (J/K)/J = K<sup>−1</sup>. At 300 K, a small 3 J energy increase gives approximately 3/300 = 0.010 J/K of entropy. At a higher positive temperature, the same small energy increase produces a smaller entropy increase.') +
        check('At fixed reservoir volume and particle number, a small reversible heat input is 60 J at 300 K. What changes?', 'Volume work is zero. The internal-energy increase is 60 J and the entropy increase is approximately 60/300 = 0.20 J/K, provided the temperature change is negligible.'), 'temperature-identity'),
      section('6. Distinguish differentials from finite changes',
        p('The temperature in dS<sub>R</sub> = dE<sub>R</sub>/T is the local equilibrium temperature. At fixed V<sub>R</sub> and N<sub>R</sub>, integrate between equilibrium states A and B:') +
        eq('ΔS<sub>R</sub> = ∫<sub>Eᵣ,A</sub><sup>Eᵣ,B</sup> dE<sub>R</sub> / T(E<sub>R</sub>,V<sub>R</sub>,N<sub>R</sub>)') +
        p('If T stays constant along that comparison, this becomes ΔS<sub>R</sub> = ΔE<sub>R</sub>/T. For a sufficiently small change, using the starting temperature gives a local approximation. If T changes appreciably, keep it inside the integral.') +
        p('For example, a body with constant heat capacity C<sub>V</sub> at fixed volume and particle number has dE<sub>R</sub> = C<sub>V</sub> dT:') +
        eq('ΔE<sub>R</sub> = C<sub>V</sub>(T<sub>B</sub> − T<sub>A</sub>)\nΔS<sub>R</sub> = C<sub>V</sub> ln(T<sub>B</sub>/T<sub>A</sub>)') +
        p('With C<sub>V</sub> = 10 J/K and heating from 300 K to 600 K, ΔE<sub>R</sub> = 3000 J while ΔS<sub>R</sub> = 10 ln 2 ≈ 6.93 J/K. Dividing by the starting temperature would give 10 J/K and would be incorrect. Such a finite body does not behave as a constant-temperature reservoir over this change.') +
        p('The differential relation also does not imply E<sub>R</sub> = TS<sub>R</sub>. The product rule gives d(TS<sub>R</sub>) = T dS<sub>R</sub> + S<sub>R</sub> dT, and integration requires a reference value. Even when T is constant along a comparison, only the changes obey ΔE<sub>R</sub> = TΔS<sub>R</sub>.'), 'finite-changes'),
      section('7. Keep the state identity separate from actual transfers',
        p('Reversible heat and work identify the coefficients using a comparison of neighboring equilibrium states. The resulting fundamental relation is a state identity. It does not assert that an actual process between those states is reversible.') +
        p('During an actual irreversible process, heat need not equal T dS and boundary work depends on external pressure. Evaluate actual transfers with the first law and the process conditions; evaluate entropy differences from the equilibrium endpoints using a suitable reversible comparison.') +
        p('Sources: David Tong’s ' + link('https://davidtong.org/teaching/statistical-physics/statmechhtml/S4', 'thermodynamics notes') + ' and ' + link('https://davidtong.org/teaching/statistical-physics/statmechhtml/S1', 'chemical-potential discussion') + '.'), 'equilibrium-identity')
    ]
  },
  {
    slug: 'reversible-heat', title: 'Why does reversible heat equal T dS?',
    question: 'What justifies δQᵣₑᵥ = T dS?',
    parent: 'fundamental-relation', attachment: '2. Identify the reversible heat term',
    attachAfterEquation: 'δQ<sub>rev</sub> = T dS<sub>R</sub>',
    clarification: '<div class="note"><b>Entropy and the second law</b><p>The integral of δQ<sub>rev</sub>/T around a reversible cycle is zero. Its integral between equilibrium endpoints therefore defines an entropy difference.</p></div>',
    subtitle: 'Use reversible cycles to construct a state function, then take its infinitesimal change.',
    sections: [
      section('1. Begin with the reversible-cycle result',
        p('Begin with the Kelvin–Planck statement of the second law, without assuming an entropy formula: a cyclic device cannot have as its sole effect extracting heat from one equilibrium reservoir and producing positive work. Carnot’s theorem follows by comparing a reversible engine with another engine run backward. In particular, all reversible engines between the same two reservoirs have equal efficiency:') +
        eq('η<sub>A,rev</sub> = η<sub>B,rev</sub>') +
        p('Their common efficiency depends only on the reservoir temperatures. Thermodynamic absolute temperature is chosen so that a reversible engine has Q<sub>h</sub>/Q<sub>c</sub> = T<sub>h</sub>/T<sub>c</sub>, with both heat symbols positive magnitudes. Hence') +
        eq('Q<sub>h</sub>/T<sub>h</sub> − Q<sub>c</sub>/T<sub>c</sub> = 0') +
        p('To extend this result beyond a two-temperature cycle, decompose a reversible cycle into infinitesimal Carnot cycles using nearby isotherms and reversible adiabats. Shared internal boundary segments are traversed in opposite directions, so their signed heat-over-temperature contributions cancel; the adiabatic segments carry no heat. In the limit only the original outside boundary remains:') +
        eq('∮ δQ<sub>rev</sub>/T = 0') +
        p('Heat is positive into the system. The local temperature can vary around the cycle, so T stays inside the integral. This result is established before defining entropy in this route; using an entropy inequality to justify it here would assume the state function we are about to construct.') +
        p(link('../carnot-heat-temperature.html', 'Follow the existing ideal-gas Carnot heat–temperature derivation →')), 'cycle-result'),
      section('2. Show why the reversible path does not matter',
        p('Choose two reversible paths from equilibrium state A to state B. Following path 1 forward and path 2 backward makes a reversible cycle. Therefore,') +
        eq('∫<sub>path 1, A→B</sub> δQ<sub>rev</sub>/T\n− ∫<sub>path 2, A→B</sub> δQ<sub>rev</sub>/T = 0') +
        p('Both integrals have the same value. Although heat itself depends on the path, this particular weighted integral depends only on the two endpoint states.'), 'path-independence'),
      section('3. Define the entropy difference',
        p('A path-independent integral defines the difference of a state function. We call that function thermodynamic entropy:') +
        eq('S<sub>R</sub>(B) − S<sub>R</sub>(A) ≡ ∫<sub>A→B, reversible</sub> δQ<sub>rev</sub>/T\ndS<sub>R</sub> = δQ<sub>rev</sub>/T\nδQ<sub>rev</sub> = T dS<sub>R</sub>') +
        p('Thus the last equation is a rearrangement of the entropy differential. The second law provides the deeper justification that the differential is a change in a state function; it is more than a consequence of the first-law energy balance.'), 'entropy-definition'),
      section('4. Interpret the units and a short example',
        p('Entropy has units J K<sup>−1</sup>. For a reversible isothermal heat input of 60 J at 300 K,') +
        eq('ΔS<sub>R</sub> = Q<sub>rev</sub>/T = 60/300 = 0.20 J K<sup>−1</sup>') +
        p('If the system temperature changes along the path, retain the integral with T inside it. Multiplying an entropy change by one temperature is valid for a constant-temperature reversible step or as a local infinitesimal relation.'), 'example'),
      section('5. Explain why reversibility matters',
        p('An irreversible process can produce entropy internally. For example, an isolated ideal gas freely expanding into a larger available volume receives no heat, but its equilibrium entropy increases. Consequently the actual heat in that process cannot be written as T dS.') +
        p('Entropy remains a property of the equilibrium endpoints. Its change can be calculated along a hypothetical reversible path between them, even if the actual process is irreversible. The symbol dS is a state-function change; δQ denotes a path-dependent transfer.') +
        check('Does zero heat transfer always mean zero entropy change?', 'Only a reversible adiabatic process necessarily has zero entropy change. An irreversible adiabatic process can generate entropy, so zero heat alone is insufficient.') +
        p('Source: ' + link('https://davidtong.org/teaching/statistical-physics/statmechhtml/S4', 'Tong: reversible cycles, entropy, and irreversibility') + '.'), 'reversibility')
    ]
  },
  {
    slug: 'carnot-efficiency', title: 'Why do reversible engines have the same efficiency?',
    question: 'Prove mathematically that unequal reversible efficiencies violate the second law.',
    parent: 'reversible-heat', attachment: '1. Begin with the reversible-cycle result',
    attachAfterEquation: 'η<sub>A,rev</sub> = η<sub>B,rev</sub>',
    clarification: '<div class="note"><b>The Carnot-theorem step</b><p>Run the more efficient engine forward and the less efficient one backward. Match their hot-reservoir heat exchanges and calculate the remaining heat and work.</p></div>',
    subtitle: 'Combine two complete cycles and track every heat and work transfer.',
    sections: [
      section('1. State the second-law premise',
        p('Use the Kelvin–Planck form of the second law: no cyclic device can have as its sole effect the extraction of heat from one equilibrium thermal reservoir and the delivery of positive work. With every auxiliary restored except an ideal mechanical work store, this setup requires') +
        eq('W<sub>out</sub> ≤ 0\n(cyclic device; one heat reservoir; no other net changes)') +
        p('This is a physical premise, not a consequence of energy conservation alone. If entropy and its second-law inequality have already been established, the same prohibition follows from an entropy balance. The linked explanation gives that alternative proof and states its assumptions.'), 'second-law-premise'),
      section('2. Assume unequal efficiencies and match the heat amounts',
        p('Suppose reversible engines A and B operate between the same hot and cold reservoirs, with 0 &lt; η<sub>B</sub> &lt; η<sub>A</sub> &lt; 1. Scale the engine sizes or cycle amounts so that each forward engine absorbs the same Q &gt; 0 from the hot reservoir. Equal heat amounts do not require identical engine sizes.') +
        eq('η ≡ W<sub>out</sub>/Q\nW<sub>A</sub> = η<sub>A</sub>Q\nQ<sub>c,A</sub> = Q − W<sub>A</sub> = (1 − η<sub>A</sub>)Q\nW<sub>B</sub> = η<sub>B</sub>Q\nQ<sub>c,B</sub> = (1 − η<sub>B</sub>)Q') +
        p('Q<sub>c,A</sub> and Q<sub>c,B</sub> are positive magnitudes of heat rejected to the cold reservoir by the forward engines. Heat and work have units J; efficiency is dimensionless. These equalities use the first law over a full cycle, ΔU = 0.'), 'forward-balances'),
      section('3. Reverse B and add the signed transfers',
        p('Run A forward and B backward. Reversibility permits every heat and work transfer of B to reverse exactly. Count heat into the combined device and work delivered by it as positive:') +
        '<div class="table-scroll"><table><caption>Signed transfers for complete cycles; Q &gt; 0.</caption><thead><tr><th scope="col">Transfer</th><th scope="col">A forward</th><th scope="col">B backward</th><th scope="col">Combined</th></tr></thead><tbody><tr><th scope="row">Heat from hot reservoir</th><td>Q</td><td>−Q</td><td>0</td></tr><tr><th scope="row">Heat from cold reservoir</th><td>−(1−η<sub>A</sub>)Q</td><td>+(1−η<sub>B</sub>)Q</td><td>(η<sub>A</sub>−η<sub>B</sub>)Q</td></tr><tr><th scope="row">Work delivered</th><td>η<sub>A</sub>Q</td><td>−η<sub>B</sub>Q</td><td>(η<sub>A</sub>−η<sub>B</sub>)Q</td></tr></tbody></table></div>' +
        eq('Q<sub>h,net</sub> = Q − Q = 0\nQ<sub>c,net</sub> = −(1 − η<sub>A</sub>)Q + (1 − η<sub>B</sub>)Q\n= (η<sub>A</sub> − η<sub>B</sub>)Q &gt; 0\nW<sub>net</sub> = (η<sub>A</sub> − η<sub>B</sub>)Q &gt; 0\nΔU<sub>A</sub> = ΔU<sub>B</sub> = 0') +
        p('The hot reservoir has no net change. Both devices return to their original states. The sole net effect is to take Q<sub>c,net</sub> from the cold reservoir and deliver the identical amount as work. The cold reservoir is the only reservoir with a net energy change. Energy is conserved, but this is precisely what Kelvin–Planck forbids.'), 'combined-transfers'),
      section('4. Show the contradiction and check with numbers',
        eq('Second law for this setup: W<sub>net</sub> ≤ 0\nAssumed unequal efficiencies: W<sub>net</sub> &gt; 0\nTherefore η<sub>A</sub> &gt; η<sub>B</sub> is impossible.') +
        p('If instead η<sub>B</sub> &gt; η<sub>A</sub>, swap the engines and repeat the same construction. Both strict inequalities are impossible, so') +
        eq('η<sub>A,rev</sub> = η<sub>B,rev</sub>') +
        p('For a numerical check, suppose η<sub>A</sub> = 0.40, η<sub>B</sub> = 0.30, and Q = 1000 J. A produces 400 J and rejects 600 J. Reversed B consumes 300 J, extracts 700 J from the cold reservoir, and returns 1000 J to the hot reservoir. The combined device takes 100 J from the cold reservoir and produces 100 J of work. These assumed efficiencies are a contradiction example, not two physically realizable reversible engines at the same temperatures.') +
        check('Does this prove all engines have the same efficiency?', 'No. Equality is established for reversible engines between the same reservoirs. An irreversible engine need not run backward with exactly reversed transfers. The related comparison shows that no engine can outperform a reversible engine between those reservoirs.') +
        p(link('../carnot-heat-temperature.html#branch-carnot-efficiency', 'Return to the exact efficiency statement in the Carnot-cycle tutorial →')) +
        p('Related: ' + link('kelvin-planck-entropy.html', 'Derive the Kelvin–Planck prohibition from the entropy form of the second law') + '.'), 'contradiction')
    ]
  },
  {
    slug: 'kelvin-planck-entropy', title: 'Why does the second law forbid a single-reservoir cyclic engine?',
    question: 'Prove the Kelvin–Planck statement using the entropy form of the second law.',
    parent: 'carnot-efficiency', attachment: '1. State the second-law premise',
    attachAfterEquation: 'W<sub>out</sub> ≤ 0',
    clarification: '<div class="note"><b>An alternative second-law starting point</b><p>If entropy is already established, a cyclic engine, one heat reservoir, and ideal work storage would have total entropy change −Q/T. Positive heat extraction would contradict ΔS<sub>total</sub> ≥ 0.</p></div>',
    subtitle: 'Add the entropy changes of the engine, reservoir, and work storage.',
    sections: [
      section('1. Start with the entropy form of the second law',
        p('Here assume entropy is already a state function and the entropy form of the second law is established. For an isolated total system,') +
        eq('ΔS<sub>total</sub> ≥ 0') +
        p('Test a proposed engine that completes a cycle, absorbs Q &gt; 0 from one ideal equilibrium reservoir at constant positive temperature T, and turns all that heat into work. Its only other effect is to raise an ideal weight. Enclose the engine, reservoir, and weight together as the isolated total system. There is no fuel consumption, second heat bath, depletion of a prepared device state, or other compensating change.') +
        eq('ΔU<sub>engine</sub> = 0\nQ − W<sub>out</sub> = 0\nW<sub>out</sub> = Q &gt; 0') +
        p('The first law permits this energy balance. We must now check the entropy balance. Q and W are measured in joules, T in kelvin, and entropy in J/K.'), 'entropy-premise'),
      section('2. Calculate each entropy change',
        '<div class="table-scroll"><table><caption>Entropy changes for the proposed complete cycle.</caption><thead><tr><th scope="col">Part</th><th scope="col">Entropy change</th><th scope="col">Reason</th></tr></thead><tbody><tr><th scope="row">Engine</th><td>ΔS<sub>engine</sub> = 0</td><td>A full cycle restores its state; entropy is a state function.</td></tr><tr><th scope="row">Thermal reservoir</th><td>ΔS<sub>reservoir</sub> = −Q/T</td><td>It loses heat Q at constant equilibrium temperature T.</td></tr><tr><th scope="row">Ideal work storage</th><td>ΔS<sub>weight</sub> = 0</td><td>Raising a weight changes gravitational potential energy without changing its internal thermodynamic state.</td></tr></tbody></table></div>' +
        p('The reservoir result refers to its own equilibrium states. It can be evaluated using a reversible comparison, even if the engine is irreversible. The engine itself need not be reversible: its net entropy change is zero because it completes a cycle. The ideal weight stores mechanical energy without an entropy change; frictional heating or any other change would have to be included as an additional effect.') +
        '<details class="checkpoint" id="why-weight-entropy"><summary>Why can raising an ideal weight leave its entropy unchanged?</summary>' +
        p('Take a rigid weight raised gently from rest at height h₁ to rest at h₂, without heating, friction, or a change of deformation. Its internal thermodynamic state is unchanged. Only its gravitational potential energy changes:') +
        eq('ΔE<sub>weight</sub> = mg(h₂ − h₁) &gt; 0\nΔU<sub>internal</sub> = 0\nΔS<sub>weight</sub> = 0') +
        p('A 1 kg weight lifted by 1 m stores about 9.8 J. Its molecules need not become hotter or acquire more accessible internal states. Energy stored in the position of the whole body is different from energy dissipated into its molecular motion.') +
        p('A microscopic check makes this precise. In the ideal model, fixing the whole weight at height h adds the same mgh to every internal energy level εᵢ. At unchanged temperature T, let β = 1/(k<sub>B</sub>T):') +
        eq('Eᵢ(h) = εᵢ + mgh\nZ(h) = ∑ᵢ exp[−β(εᵢ + mgh)]\n= exp(−βmgh) Z<sub>internal</sub>\npᵢ(h) = exp[−β(εᵢ + mgh)] / Z(h)\n= exp(−βεᵢ) / Z<sub>internal</sub>\nS = −k<sub>B</sub> ∑ᵢ pᵢ ln pᵢ') +
        p('The common gravitational factor cancels from every probability, so the internal entropy is unchanged. This assumes the weight’s macroscopic position is controlled and its internal level spacings are unchanged. Work can generate entropy when it is dissipated through friction or other irreversible processes; zero entropy change here is a property of ideal mechanical storage, not a rule for every object receiving work.') +
        p(link('boltzmann-weight.html', 'Review the normalized Boltzmann probabilities →')) + '</details>' +
        p(link('../gibbs_conversation_branches/reservoir-entropy.html#section-1', 'Why can the reservoir entropy change be evaluated as heat divided by temperature? →')), 'entropy-balance'),
      section('3. Add the changes and obtain the contradiction',
        eq('ΔS<sub>total</sub> = ΔS<sub>engine</sub> + ΔS<sub>reservoir</sub> + ΔS<sub>weight</sub>\n= 0 − Q/T + 0\n= −Q/T &lt; 0   (Q &gt; 0, T &gt; 0)') +
        p('The proposed device would reduce the entropy of the isolated total, contradicting ΔS<sub>total</sub> ≥ 0. Equivalently, the second law requires') +
        eq('−Q/T ≥ 0\nQ ≤ 0\nW<sub>out</sub> = Q ≤ 0') +
        p('Therefore no cyclic device can have as its sole effect extracting heat from one reservoir and delivering positive work. This is the Kelvin–Planck statement. For example, taking 100 J from a 300 K reservoir and producing only work would give ΔS<sub>total</sub> = −100/300 ≈ −0.333 J/K. The prohibited feature is the negative total entropy change, not an energy deficit.') +
        check('Could an irreversible engine avoid the contradiction by producing entropy inside itself?', 'No. If it completes a cycle its total entropy change is still zero. Internal entropy generation would have to be balanced by entropy exported elsewhere. The proposed sole-effect arrangement provides no compensating entropy increase.'), 'contradiction'),
      section('4. Why a single expansion is allowed',
        p('An ideal gas can absorb heat from one bath and convert all of it into work during a reversible isothermal expansion. For fixed gas amount n and V₂ &gt; V₁,') +
        eq('ΔU<sub>gas</sub> = 0\nQ<sub>in</sub> = W<sub>out</sub> = nRT ln(V₂/V₁) &gt; 0\nΔS<sub>gas</sub> = nR ln(V₂/V₁) = Q<sub>in</sub>/T\nΔS<sub>bath</sub> = −Q<sub>in</sub>/T\nΔS<sub>total</sub> = 0') +
        p('The gas finishes expanded and has gained entropy, so this step is not a complete engine cycle. Reversing this particular path at the same bath temperature requires work input nRT ln(V₂/V₁), cancelling the work gained. That example illustrates the role of resetting the device; the preceding entropy proof establishes the general cyclic prohibition.'), 'single-expansion'),
      section('5. Keep the logical starting point explicit',
        p('There are two useful routes. In the reversible-heat lesson, take Kelvin–Planck as the empirical starting statement, prove Carnot’s theorem, establish the reversible cycle integral, and define entropy. On this page, assume entropy and ΔS<sub>total</sub> ≥ 0 are already known and deduce Kelvin–Planck. Do not use this alternative entropy proof as a premise inside the earlier construction of entropy; that would be circular.') +
        p('A temperature difference, chemical fuel, a pressure difference, or consumption of a prepared state supplies additional resources or effects. Such arrangements do not meet the single-reservoir, cyclic, sole-effect conditions used here.') +
        p(link('reversible-heat.html#cycle-result', 'Return to the construction of entropy from reversible cycles →')) +
        p('Related thermodynamic framework: ' + link('https://davidtong.org/teaching/statistical-physics/statmechhtml/S4', 'Tong: thermodynamics, entropy, and the second law') + '.'), 'logical-starting-point')
    ]
  },
  {
    slug: 'pressure-volume-work', title: 'Why is pressure–volume work −p dV?',
    question: 'Where do the pressure, volume change, and minus sign come from?',
    parent: 'fundamental-relation', attachment: '3. Identify the reversible volume-work term',
    attachAfterEquation: 'δW<sub>on,rev</sub> = −p dV',
    clarification: '<div class="note"><b>Force times displacement</b><p>The external force points inward while an expanding piston moves outward. With dV = A dx, work on the gas is −p<sub>ext</sub> dV; the reversible limit replaces p<sub>ext</sub> by p.</p></div>',
    subtitle: 'Track a piston displacement and the direction of the external load before taking the reversible limit.',
    sections: [
      section('1. Relate piston motion to volume change',
        p('Imagine a cylinder containing gas on the left of a frictionless piston of area A. Take x to increase outward to the right. Moving the piston through dx changes the gas volume by') +
        eq('dV = A dx') +
        '<figure class="equation"><svg viewBox="0 0 440 170" role="img" aria-labelledby="piston-diagram-title" style="display:block;max-width:100%;height:auto"><title id="piston-diagram-title">Gas pushes a piston outward to the right; the external pressure force points inward to the left.</title><defs><marker id="force-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#315cd1"/></marker><marker id="motion-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#a45c13"/></marker></defs><path d="M40 35 V140 H270 M40 35 H270" fill="none" stroke="#8292ad" stroke-width="4"/><rect x="55" y="45" width="195" height="85" fill="#edf3ff"/><rect x="250" y="35" width="14" height="105" rx="2" fill="#5976ac"/><text x="120" y="95" fill="#263a62" font-size="18">Gas</text><text x="239" y="160" fill="#475569" font-size="14">Area A</text><line x1="390" y1="91" x2="282" y2="91" stroke="#315cd1" stroke-width="3" marker-end="url(#force-arrow)"/><text x="281" y="119" fill="#315cd1" font-size="14">External force</text><line x1="278" y1="28" x2="380" y2="28" stroke="#a45c13" stroke-width="3" marker-end="url(#motion-arrow)"/><text x="292" y="16" fill="#a45c13" font-size="14">Outward dx &gt; 0</text></svg></figure>', 'geometry'),
      section('2. Calculate work using the external force',
        p('Pressure is force per area. The external load acts inward, so its force in the chosen x-direction is −p<sub>ext</sub>A. With a frictionless piston and negligible piston kinetic-energy storage, the work on the gas is') +
        eq('F<sub>ext,x</sub> = −p<sub>ext</sub>A\nδW<sub>on</sub> = F<sub>ext,x</sub> dx\n= −p<sub>ext</sub>A dx\n= −p<sub>ext</sub> dV') +
        p('During expansion, force and displacement have opposite signs, so the external load does negative work on the gas. Equivalently, the gas does positive work on the surroundings.'), 'force-work'),
      section('3. Take the reversible mechanical limit',
        p('For reversible expansion, the external load is infinitesimally below the equilibrium gas pressure. For reversible compression, it is infinitesimally above. In that limit,') +
        eq('p<sub>ext</sub> → p\nδW<sub>on,rev</sub> = −p dV') +
        p('The limiting sequence retains arbitrarily small driving imbalances. A literal exact force balance would not start a stationary piston moving. A finite pressure imbalance instead requires retaining the external pressure in the work balance.') +
        p(link('../pv_work_conversation_branches/reversible-limit.html', 'Explore the reversible piston limit →')), 'reversible-limit'),
      section('4. Check the sign and units',
        p('Suppose a gas expands by 1.0 L against a constant external pressure of 100 kPa:') +
        eq('W<sub>on</sub> = −p<sub>ext</sub> ΔV\n= −(100 kPa)(1.0 L) = −100 J') +
        p('Here 1 kPa·L = 1 J. Compression through the same volume magnitude gives +100 J of work on the gas. For a changing load, integrate −p<sub>ext</sub> dV along the specified path.'), 'sign-example'),
      section('5. Separate work transfers from state changes',
        p('δW marks a path-dependent transfer. There is no general state function W whose difference equals the work along every path. The expression −p dV is the reversible volume-work element; it is not the differential of −pV, which also contains −V dp.') +
        check('Can gas expansion into vacuum do pressure–volume work on an external load?', 'With p_ext = 0, the external pressure–volume work is zero. A nonzero pressure inside the gas does not by itself mean that an external load receives energy.') +
        p(link('../pv_work_conversation_branches/boundary-force.html', 'Compare the existing boundary-force explanation →')) +
        p('Source: ' + link('https://davidtong.org/teaching/statistical-physics/statmechhtml/S4', 'Tong: first law and pressure–volume work') + '.'), 'path-dependence')
    ]
  }
];

export const thermodynamicNotes = `
## Fundamental thermodynamic relation

At fixed reservoir particle number N_R, the first law is dE_R=delta Q+delta W_on. The second law and reversible cycles justify delta Q_rev=T dS_R; reversible volume work is delta W_on,rev=-p dV_R. Comparing with the total differential of E_R(S_R,V_R,N_R) identifies T=(partial E_R/partial S_R) at fixed V_R,N_R and -p=(partial E_R/partial V_R) at fixed S_R,N_R. Define mu=(partial E_R/partial N_R) at fixed S_R,V_R. Therefore dE_R=T dS_R-p dV_R+mu dN_R. Chemical potential is an equilibrium energy derivative, not automatically mean particle energy or actual incoming-stream energy. See [the fundamental-relation follow-up](fundamental-relation.html).

For nonzero T, rearrange to dS_R=dE_R/T+(p/T)dV_R-(mu/T)dN_R. Fixing V_R,N_R gives (partial S_R/partial E_R)=1/T, the entropy gained per small energy increase, with units K^-1. At 300 K, a small 3 J energy increase gives approximately 0.010 J/K. The identity concerns neighboring equilibrium states and does not require actual heat/work transfers to be reversible.

For finite changes at fixed V_R,N_R, Delta S_R is the integral of dE_R/T with the local equilibrium temperature. Constant T permits Delta S_R=Delta E_R/T; a sufficiently small change permits a local approximation. For constant C_V=10 J/K and heating from 300 K to 600 K, Delta E_R=3000 J and Delta S_R=10 ln 2 approximately 6.93 J/K. The differential relation does not imply E_R=T S_R: d(T S_R)=T dS_R+S_R dT, and an integration reference is needed. See [the finite-change explanation](fundamental-relation.html#finite-changes).

## Reversible heat and the entropy definition

Start with Kelvin–Planck as the second-law premise. Combining a more efficient reversible engine forward with a less efficient one backward, scaled to the same hot-side heat Q, would give Q_hot,net=0 and W_net=Q_cold,net=(eta_A-eta_B)Q>0, contradicting the premise. Swapping engines proves equal reversible efficiencies. On the thermodynamic temperature scale a reversible Carnot cycle has Q_h/T_h-Q_c/T_c=0. Decompose a general reversible cycle into infinitesimal Carnot cycles; internal contributions cancel and the reversible adiabats carry no heat. The remaining outer boundary therefore has integral delta Q_rev/T equal to zero. Comparing two reversible A-to-B paths shows path independence. Define their common integral as S_R(B)-S_R(A); infinitesimally dS_R=delta Q_rev/T. The reversible isothermal example 60 J at 300 K gives 0.20 J/K. An irreversible adiabatic process can generate entropy despite zero heat. See [the reversible-heat follow-up](reversible-heat.html) and [the existing Carnot derivation](../carnot-heat-temperature.html).

## Equal reversible efficiencies and Kelvin–Planck

For complete forward cycles with common hot-side heat Q, W_A=eta_A Q, Q_c,A=(1-eta_A)Q, W_B=eta_B Q, and Q_c,B=(1-eta_B)Q. Reverse B exactly. For eta_A>eta_B, net hot heat vanishes and net work equals net heat taken from the cold reservoir, (eta_A-eta_B)Q>0. At eta_A=0.40, eta_B=0.30 and Q=1000 J, the combined sole effect would be 100 J taken from the cold reservoir and 100 J of work delivered. Both devices complete cycles. Kelvin–Planck forbids this even though energy is conserved. Swap A and B to exclude the opposite inequality. See [the full mathematical comparison](carnot-efficiency.html).

If entropy is already established, start instead from Delta S_total>=0 for the isolated total containing engine, reservoir, and ideal work storage. A cyclic single-reservoir engine producing W_out=Q>0 has Delta S_engine=0, Delta S_reservoir=-Q/T for positive constant T, and Delta S_weight=0. Therefore Delta S_total=-Q/T<0, contradicting the entropy law. Equivalently Q<=0 and W_out<=0 are required for this sole-effect setup. The engine need not be reversible. Ideal work storage means raising a rigid weight without heating or deformation: Delta E=mg Delta h while its internal state and entropy are unchanged. Microscopically E_i(h)=epsilon_i+mgh gives Z(h)=exp(-beta mgh)Z_internal, so the common factor cancels from all p_i and S=-k_B sum p_i ln p_i is unchanged. Frictional work can generate entropy and must be accounted for separately. This deduces Kelvin–Planck from an alternative entropy-based premise; it must not be used as an independent premise inside the earlier construction of entropy. See [the entropy proof](kelvin-planck-entropy.html).

A reversible isothermal ideal-gas expansion has Q_in=W_out=nRT ln(V2/V1)>0 and Delta U=0, but the gas gains entropy Q_in/T and ends expanded. Thus the single step is allowed. Reversing that particular path costs equal work. Kelvin–Planck constrains complete cycles with no other compensating effects; it does not ban using a temperature difference, fuel, a pressure difference, or a prepared state as an additional resource.

## Piston derivation of volume work

For piston area A and outward displacement dx, dV=A dx. The inward external force is -p_ext A. For a frictionless piston with negligible kinetic-energy storage, work on the gas is (-p_ext A)dx=-p_ext dV. The reversible limit p_ext tending to p through infinitesimal imbalances gives -p dV. Expansion is negative work on the system; compression is positive. A 1 L expansion against 100 kPa gives -100 J. Delta notation distinguishes path-dependent work from state changes; d(-pV) also has a -V dp term. See [the pressure-volume-work follow-up](pressure-volume-work.html).

The full identity relates neighboring equilibrium states. Actual irreversible heat and work must be evaluated with their process-specific conditions. These explanations and their companion notes are authored in ../tools/ideal-gas-thermodynamic-followups.mjs.
`;
