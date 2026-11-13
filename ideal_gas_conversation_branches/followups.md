# Reservoir counting and thermodynamic temperature

These notes accompany the [reservoir-energy explanation](remaining-energy.html) and the [temperature explanation](temperature-definition.html). Both return to their exact parent statements.

## Remaining energy and probability

For negligible system–reservoir interaction energy, E_total = epsilon_i + E_R. Omega_R(E) counts reservoir states, so fixing system microstate i leaves Omega_R(E_total - epsilon_i) compatible combined states. Equal probabilities for the accessible isolated combined states are the equilibrium postulate. Summing those probabilities derives p_i = Omega_R(E_total - epsilon_i) / Omega_total(E_total).

For four distinguishable two-level units S,A,B,C with total energy one quantum, S is excited in one state and unexcited in three. Their probabilities are 1/4 and 3/4. If an energy level contains g_S(epsilon) system states, its probability includes that degeneracy.

## Temperature: definition, identity, approximation

The relation (partial S_R / partial E_R) at fixed V,N = 1/T defines thermodynamic temperature in an entropy-based treatment. If temperature and entropy are already established, it follows from dE_R = T dS_R - p dV + mu dN at fixed V,N. These are two starting points for the same relation. The identity is not specific to a large reservoir. Here V,N mean the reservoir variables V_R,N_R. The local slope 1/T has units K^-1; at 300 K, a small 3 J increase gives approximately 0.010 J/K. For a finite change at fixed V_R,N_R, integrate dE_R/T with the local temperature; this does not imply E_R=T S_R. See [the finite-change explanation](fundamental-relation.html#finite-changes).

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
