# Reservoir counting and thermodynamic temperature

These notes accompany the [reservoir-energy explanation](remaining-energy.html) and the [temperature explanation](temperature-definition.html). Both return to their exact parent statements.

## Remaining energy and probability

For negligible system–reservoir interaction energy, E_total = epsilon_i + E_R. Omega_R(E) counts reservoir states, so fixing system microstate i leaves Omega_R(E_total - epsilon_i) compatible combined states. Equal probabilities for the accessible isolated combined states are the equilibrium postulate. Summing those probabilities derives p_i = Omega_R(E_total - epsilon_i) / Omega_total(E_total).

For four distinguishable two-level units S,A,B,C with total energy one quantum, S is excited in one state and unexcited in three. Their probabilities are 1/4 and 3/4. If an energy level contains g_S(epsilon) system states, its probability includes that degeneracy.

## Temperature: definition, identity, approximation

The relation (partial S_R / partial E_R) at fixed V,N = 1/T defines thermodynamic temperature in an entropy-based treatment. If temperature and entropy are already established, it follows from dE_R = T dS_R - p dV + mu dN at fixed V,N. These are two starting points for the same relation. The identity is not specific to a large reservoir.

Expanding S_R(E_0 - epsilon) to first order gives S_R(E_0) - epsilon/T. Dropping the higher terms is the approximation. Combining this with S_R = k_B ln Omega_R gives beta = 1/(k_B T), and normalization gives p_i = exp(-beta epsilon_i)/Z.

Sources: [Harvard reservoir counting](https://schwartz.scholars.harvard.edu/sites/g/files/omnuum7046/files/schwartz/files/7-ensembles_0.pdf), [Tong statistical mechanics](https://davidtong.org/teaching/statistical-physics/statmechhtml/S1), [Tong thermodynamics](https://davidtong.org/teaching/statistical-physics/statmechhtml/S4).

Authored HTML and these companion notes are maintained in ../tools/ideal-gas-followups.mjs. Rebuild with node tools/build-derivation-tutorials.mjs.

## Explicit Taylor substitution

At fixed V,N, substitute f=S_R, a=E_total, h=-epsilon_s into f(a+h)=f(a)+h f'(a)+h^2 f''(a)/2+…. Define S_0=S_R(E_total,V,N). The first-order derivative is evaluated at E_R=E_total. The linear term is negative; the quadratic coefficient is positive but its second derivative may be negative. Dropping second and higher terms gives S_R(E_total-epsilon_s) approximately S_0-epsilon_s/T. See [the Taylor follow-up](entropy-taylor-expansion.html).

## Boltzmann weight and normalization

w_i=exp(-E_i/(k_B T)) is a dimensionless relative probability score for one microstate. Z=sum_j w_j and p_i=w_i/Z. Reservoir counting and the first-order entropy expansion produce this weight; the common factor exp(S_0/k_B) cancels. Two nondegenerate states at energies 0 and k_B T have probabilities about 0.731 and 0.269. A degenerate energy level needs its state count, and a continuous variable needs its integration measure. See [the weight follow-up](boltzmann-weight.html).

## The Gaussian velocity density

For a classical nonrelativistic equilibrium gas in its rest frame, E=m(v_x^2+v_y^2+v_z^2)/2. The Cartesian momentum-to-velocity Jacobian is constant for fixed mass. Put the kinetic energy in the Boltzmann factor and integrate over v_y,v_z to obtain f(v_x)=C exp(-a v_x^2), where a=m/(2k_B T) and C=sqrt(a/pi). Integrating the density over an interval gives its probability. Symmetry gives mean zero; variance k_B T/m gives mean x kinetic energy k_B T/2. See [the Gaussian follow-up](gaussian-velocity.html).

Source: [UT Austin Maxwell velocity distribution](https://farside.ph.utexas.edu/teaching/355/Surveyhtml/node242.html).
