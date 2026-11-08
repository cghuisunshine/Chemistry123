// Follow-ups to the entropy and equipartition statements in the original tutorial.
const p = text => `<p>${text}</p>`;
const eq = text => `<div class="text-equation">${text}</div>`;
const section = (title, body, id) => `<section class="section" id="${id}"><h2>${title}</h2>${body}</section>`;
const link = (href, label) => `<a href="${href}">${label}</a>`;
const check = (question, answer) => `<details class="checkpoint"><summary>${question}</summary><p>${answer}</p></details>`;

export const statisticalFollowups = [
  {
    slug: 'entropy-taylor-expansion', title: 'How is the reservoir entropy expanded?',
    question: 'Where do the minus sign and the reference entropy come from?',
    parent: 'entropy', attachment: '4. Why does an exponential probability appear?',
    attachAfter: 'assets/eq/84925bb16e5a.svg',
    clarification: '<div class="note"><b>The missing Taylor step</b><p>Hold V,N fixed, use E<sub>total</sub> as the reference energy, and substitute the change h = −ε. The reference entropy S₀ = S<sub>R</sub>(E<sub>total</sub>) is constant; the first-order term is −ε/T.</p></div>',
    subtitle: 'Apply the Taylor formula with a negative energy change, then identify the entropy slope with reciprocal temperature.',
    sections: [
      section('1. Start with the ordinary Taylor formula',
        p('For a smooth function f near a reference point a, Taylor expansion writes its nearby value in terms of its value and derivatives at a:') +
        eq('f(a + h) = f(a) + h f′(a) + (h²/2) f″(a) + …') +
        p('The first-order approximation keeps only the constant and linear terms. The derivatives are evaluated at the reference point a, not at the shifted point a + h.'), 'taylor-formula'),
      section('2. Substitute the reservoir variables',
        p('Hold volume V and particle number N fixed. Entropy is then a function of the reservoir energy alone for this calculation. The small system gains energy ε<sub>s</sub>, so the reservoir loses that amount:') +
        eq('f(E<sub>R</sub>) = S<sub>R</sub>(E<sub>R</sub>, V, N)\na = E<sub>total</sub>\nh = −ε<sub>s</sub>\nS₀ ≡ S<sub>R</sub>(E<sub>total</sub>, V, N)') +
        p('S₀ is the name given to the reservoir entropy at the chosen reference energy. It is a reference value for the reservoir, held fixed while comparing different small-system microstates.'), 'substitution'),
      section('3. Keep track of the signs and the evaluation point',
        eq('S<sub>R</sub>(E<sub>total</sub> − ε<sub>s</sub>)\n= S₀ − ε<sub>s</sub> S<sub>R</sub>′(E<sub>total</sub>)\n+ (ε<sub>s</sub>²/2) S<sub>R</sub>″(E<sub>total</sub>) + …') +
        p('The linear term is negative because h = −ε<sub>s</sub>. In the quadratic term, h² = ε<sub>s</sub>², so the coefficient has a plus sign; the value of the second derivative may still be negative. Primes here mean energy derivatives with V,N fixed.') +
        eq('S<sub>R</sub>(E<sub>total</sub> − ε<sub>s</sub>)\n≈ S₀ − ε<sub>s</sub>(∂S<sub>R</sub>/∂E<sub>R</sub>)<sub>V,N</sub> evaluated at E<sub>R</sub> = E<sub>total</sub>'), 'first-order'),
      section('4. Use the temperature identity',
        p('At the reference state, the entropy–energy slope is 1/T. Consequently,') +
        eq('S<sub>R</sub>(E<sub>total</sub> − ε<sub>s</sub>) ≈ S₀ − ε<sub>s</sub>/T') +
        p('This is the expression used in the Boltzmann derivation. Its approximation is the removal of higher Taylor terms. A sufficiently large thermal reservoir has nearly unchanged temperature during the relevant exchanges, making the local linear approximation useful.') +
        p(link('temperature-definition.html', 'Why does the derivative equal 1/T? →')) +
        check('What if the reservoir gains a small positive energy δE instead?', 'Use h = +δE. The first-order expression is S_R(E_total + δE) ≈ S₀ + δE/T, with T evaluated at the reference state.'), 'temperature-step'),
      section('5. Convert entropy into the Boltzmann weight',
        eq('Ω<sub>R</sub> = exp(S<sub>R</sub>/k<sub>B</sub>)\nΩ<sub>R</sub>(E<sub>total</sub> − ε<sub>s</sub>)\n≈ exp(S₀/k<sub>B</sub>) exp(−ε<sub>s</sub>/(k<sub>B</sub>T))') +
        p('The first factor is the same for every small-system state. It cancels in normalized probabilities. The remaining factor is the state’s Boltzmann weight.') +
        p(link('boltzmann-weight.html', 'What is a statistical weight for? →')) +
        p('Source: ' + link('https://farside.ph.utexas.edu/teaching/sm1/Thermalhtml/node74.html', 'UT Austin: canonical probability and reservoir expansion') + '.'), 'boltzmann-connection')
    ]
  },
  {
    slug: 'boltzmann-weight', title: 'What does Boltzmann weight mean?',
    question: 'What is the weight for, and why this exponential?',
    parent: 'equipartition', attachment: '2. Turn the reservoir count into a probability weight',
    attachAfter: 'assets/eq/c44335f867ee.svg',
    clarification: '<div class="note"><b>Weight means relative probability</b><p>The factor exp(−Eᵢ/(k<sub>B</sub>T)) assigns an unnormalized probability weight to one microstate. Divide by the sum of all state weights to obtain its probability.</p></div>',
    subtitle: 'Compare microscopic states using relative weights, then normalize them into probabilities.',
    sections: [
      section('1. A weight is a relative probability score',
        p('A particular system microstate i has energy E<sub>i</sub>. Its Boltzmann weight is a dimensionless number:') +
        eq('w<sub>i</sub> ≡ exp(−E<sub>i</sub>/(k<sub>B</sub>T))\nZ ≡ ∑<sub>j</sub> w<sub>j</sub>\np<sub>i</sub> = w<sub>i</sub>/Z') +
        p('The word weight here refers to relative likelihood. The weights do not have to sum to one; probabilities do. Z is the partition function, the sum of all microstate weights.') +
        eq('p<sub>i</sub>/p<sub>j</sub> = w<sub>i</sub>/w<sub>j</sub>\n= exp(−(E<sub>i</sub> − E<sub>j</sub>)/(k<sub>B</sub>T))'), 'meaning'),
      section('2. Count the reservoir states that support each system state',
        p('Assume weak coupling so energies add, equilibrium equal probabilities for the isolated combined system, and a large thermal reservoir. Fixing microstate i leaves reservoir energy E<sub>total</sub> − E<sub>i</sub>. Counting compatible combined states gives') +
        eq('p<sub>i</sub> ∝ Ω<sub>R</sub>(E<sub>total</sub> − E<sub>i</sub>)') +
        p('For an ordinary positive-temperature reservoir, giving more energy to the small system leaves fewer compatible reservoir states. That is the physical origin of the preference for individual lower-energy microstates.') +
        p(link('remaining-energy.html', 'Derive the compatible-state counting formula →')), 'reservoir-count'),
      section('3. Derive the exponential weight',
        eq('S<sub>R</sub> = k<sub>B</sub> ln Ω<sub>R</sub>\nS<sub>R</sub>(E<sub>total</sub> − E<sub>i</sub>) ≈ S₀ − E<sub>i</sub>/T\nΩ<sub>R</sub>(E<sub>total</sub> − E<sub>i</sub>)\n≈ exp(S₀/k<sub>B</sub>) exp(−E<sub>i</sub>/(k<sub>B</sub>T))') +
        p('The factor exp(S₀/k<sub>B</sub>) is shared by all states. It cancels on division by the sum of weights. The remaining state-dependent factor is exp(−E<sub>i</sub>/(k<sub>B</sub>T)). The physical assumptions entered in the counting argument and the large-reservoir approximation.') +
        p(link('entropy-taylor-expansion.html', 'Derive the entropy expansion step by step →')), 'exponential'),
      section('4. Normalize a two-state example',
        p('Suppose there are exactly two nondegenerate states with energies 0 and k<sub>B</sub>T. At that temperature,') +
        eq('w₀ = 1,  w₁ = exp(−1) ≈ 0.368\nZ = 1 + exp(−1)\np₀ ≈ 0.731,  p₁ ≈ 0.269') +
        p('The higher-energy state is about 36.8% as likely as the lower-energy state; its normalized probability is about 26.9%. A probability ratio and a probability are different quantities.') +
        check('Does adding the same constant energy E* to every state change these probabilities?', 'Every weight is multiplied by the same factor exp(−E*/(k_B T)). That factor cancels against the same factor in Z, so the probabilities are unchanged.'), 'example'),
      section('5. Use the correct state-counting measure',
        p('If g states share the same energy E, their total energy-level weight is g exp(−E/(k<sub>B</sub>T)). For continuous variables, the weight enters a density and probability is obtained by integration. An energy density also needs a density-of-states factor.') +
        p('In Cartesian momentum space the classical phase-space measure is uniform. For fixed mass, p = mv has a constant Jacobian, so equal infinitesimal Cartesian velocity volumes acquire the same measure factor. Putting the quadratic kinetic energy into the Boltzmann weight therefore gives the Gaussian velocity density.') +
        p(link('gaussian-velocity.html', 'Derive the Gaussian velocity component density →')) +
        p('Sources: ' + link('https://farside.ph.utexas.edu/teaching/sm1/Thermalhtml/node74.html', 'canonical probability') + ' and ' + link('https://farside.ph.utexas.edu/teaching/355/Surveyhtml/node242.html', 'Maxwell velocity distribution') + '.'), 'density')
    ]
  },
  {
    slug: 'gaussian-velocity', title: 'Why is a velocity component Gaussian?',
    question: 'Why does f(vₓ) have the form C exp(−a vₓ²)?',
    parent: 'equipartition', attachment: '3. Calculate the energy in one direction',
    attachAfter: 'assets/eq/51b77a91c569.svg',
    clarification: '<div class="note"><b>Why a Gaussian?</b><p>The Boltzmann factor is exponential in energy, and translational kinetic energy is quadratic in velocity. Integrating over the other two velocity components leaves C exp(−a vₓ²).</p></div>',
    subtitle: 'A quadratic kinetic energy inside the Boltzmann factor produces the Gaussian shape.',
    sections: [
      section('1. State the physical assumptions',
        p('Consider a classical, nonrelativistic gas at thermal equilibrium with T &gt; 0, in the gas’s rest frame. The translational kinetic energy of a molecule of mass m is') +
        eq('E = (m/2)(v<sub>x</sub>² + v<sub>y</sub>² + v<sub>z</sub>²)') +
        p('Classical momentum states are counted with a uniform phase-space measure. Changing from momentum to velocity gives d³p = m³ d³v; the constant factor m³ changes only normalization.') +
        p(link('boltzmann-weight.html', 'What does the Boltzmann weight mean? →')), 'assumptions'),
      section('2. Substitute kinetic energy into the Boltzmann factor',
        eq('F(v<sub>x</sub>, v<sub>y</sub>, v<sub>z</sub>) = A exp(−E/(k<sub>B</sub>T))\na ≡ m/(2k<sub>B</sub>T)\nF = A exp(−a(v<sub>x</sub>² + v<sub>y</sub>² + v<sub>z</sub>²))\n= A exp(−av<sub>x</sub>²) exp(−av<sub>y</sub>²) exp(−av<sub>z</sub>²)') +
        p('a is just shorthand. Its units are inverse velocity squared, so avₓ² is dimensionless. The exponential factorizes because the kinetic energy is a sum of three separate squared components.'), 'factorization'),
      section('3. Sum over the unobserved velocity components',
        p('To ask only about vₓ, allow every possible vᵧ and v<sub>z</sub>. Summing a continuous range means integrating:') +
        eq('f(v<sub>x</sub>) = ∫<sub>−∞</sub><sup>∞</sup> ∫<sub>−∞</sub><sup>∞</sup> F(v<sub>x</sub>,v<sub>y</sub>,v<sub>z</sub>) dv<sub>y</sub> dv<sub>z</sub>\n= A exp(−av<sub>x</sub>²)\n  × ∫<sub>−∞</sub><sup>∞</sup> exp(−av<sub>y</sub>²) dv<sub>y</sub>\n  × ∫<sub>−∞</sub><sup>∞</sup> exp(−av<sub>z</sub>²) dv<sub>z</sub>\n= C exp(−av<sub>x</sub>²)') +
        p('Both integrals are constants with respect to vₓ. Absorb them and A into C. An exponential of a negative squared variable is the Gaussian form. Its shape has been derived from the equilibrium weight and the kinetic-energy formula.'), 'marginal'),
      section('4. Determine C from total probability one',
        eq('1 = ∫<sub>−∞</sub><sup>∞</sup> f(v<sub>x</sub>) dv<sub>x</sub>\n= C ∫<sub>−∞</sub><sup>∞</sup> exp(−av<sub>x</sub>²) dv<sub>x</sub>\n= C √(π/a)\nC = √(a/π) = √(m/(2πk<sub>B</sub>T))') +
        p('C fixes the overall scale; a sets the width. Higher temperature makes a smaller and broadens the distribution. At a given temperature, a larger molecular mass narrows it.'), 'normalization'),
      section('5. Interpret the density and recover equipartition',
        p('f(vₓ) is a probability density, with units inverse velocity. The probability for a finite interval [u₁,u₂] is ∫ from u₁ to u₂ of f(vₓ) dvₓ. For a tiny interval of width δv, this is approximately f(vₓ)δv.') +
        eq('⟨v<sub>x</sub>⟩ = 0\n⟨v<sub>x</sub>²⟩ = 1/(2a) = k<sub>B</sub>T/m\n⟨mv<sub>x</sub>²/2⟩ = k<sub>B</sub>T/2') +
        p('Opposite components ±vₓ have the same energy, so the curve is symmetric about zero. The variance follows by differentiating the Gaussian integral with respect to a, or by the integration-by-parts argument on the parent page. The three-dimensional speed distribution has an additional state-counting factor because it groups many directions together.') +
        check('Is the height f(0) the probability of exactly vₓ = 0?', 'For a continuous distribution, the probability of one exact point is zero. A finite interval has a probability given by the area under the density curve, not its height alone.') +
        p('Source: ' + link('https://farside.ph.utexas.edu/teaching/355/Surveyhtml/node242.html', 'UT Austin: Maxwell velocity distribution') + '.'), 'interpretation')
    ]
  }
];

export const statisticalNotes = `
## Explicit Taylor substitution

At fixed V,N, substitute f=S_R, a=E_total, h=-epsilon_s into f(a+h)=f(a)+h f'(a)+h^2 f''(a)/2+…. Define S_0=S_R(E_total,V,N). The first-order derivative is evaluated at E_R=E_total. The linear term is negative; the quadratic coefficient is positive but its second derivative may be negative. Dropping second and higher terms gives S_R(E_total-epsilon_s) approximately S_0-epsilon_s/T. See [the Taylor follow-up](entropy-taylor-expansion.html).

## Boltzmann weight and normalization

w_i=exp(-E_i/(k_B T)) is a dimensionless relative probability score for one microstate. Z=sum_j w_j and p_i=w_i/Z. Reservoir counting and the first-order entropy expansion produce this weight; the common factor exp(S_0/k_B) cancels. Two nondegenerate states at energies 0 and k_B T have probabilities about 0.731 and 0.269. A degenerate energy level needs its state count, and a continuous variable needs its integration measure. See [the weight follow-up](boltzmann-weight.html).

## The Gaussian velocity density

For a classical nonrelativistic equilibrium gas in its rest frame, E=m(v_x^2+v_y^2+v_z^2)/2. The Cartesian momentum-to-velocity Jacobian is constant for fixed mass. Put the kinetic energy in the Boltzmann factor and integrate over v_y,v_z to obtain f(v_x)=C exp(-a v_x^2), where a=m/(2k_B T) and C=sqrt(a/pi). Integrating the density over an interval gives its probability. Symmetry gives mean zero; variance k_B T/m gives mean x kinetic energy k_B T/2. See [the Gaussian follow-up](gaussian-velocity.html).

Source: [UT Austin Maxwell velocity distribution](https://farside.ph.utexas.edu/teaching/355/Surveyhtml/node242.html).
`;
