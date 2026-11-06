# Physical chemistry equation coverage audit

Audit and update date: 2026-11-06. The catalog also preserves the independently published Carnot tutorial, bringing it to 22 tutorials alongside the 21-exercise workbook. **Result: all 1,534 detected numbered expressions now have source excerpts in the HTML reference; 21 selected topics have authored guided derivations.**

No `derived*.html` files exist in `web/`. The updated targets are [derivation-practice.html](derivation-practice.html) and [derivation-tutorials.html](derivation-tutorials.html), together with their linked conversation branches. The new [derivation-formulas.html](derivation-formulas.html) adds source excerpts, search, chapter filters, saved notes, guided-tutorial links and an embedded complete-source reader.

The source is [Physical_Chemistry.pdf](Physical_Chemistry.pdf), Atkins and de Paula, *Physical Chemistry*, eighth edition: 1,085 PDF pages, 25 chapters, three appendices, and supporting material. The source PDF in the parent directory and this directory have the same SHA-256: `f07700d05bb2289658e58810042a38362dafd207f4a7b837b4e494976ef2ea42`.

## Findings

- The workbook originally contained 15 target derivations. It now contains **21**, and the tutorial catalog links to those same 21 topics. Their linked library contains 85 HTML explanation pages.
- Those targets are selected introductory chemistry topics. They are not a complete inventory of the physical chemistry textbook.
- Supporting equations in the follow-up pages broaden coverage. Examples include a Maxwell relation, an internal-pressure identity, the van der Waals model, Boltzmann entropy, a Kirchhoff correction, and buffer capacity. These must not be counted as missing just because they lack a workbook exercise.
- Every detected numbered expression across the 25 chapters is now included as an original-source excerpt, together with 84 numbered mathematics expressions and 42 numbered physics expressions from the appendices. A complete-source reader provides the unnumbered formulas, examples, figures, tables, units appendix and supporting material. Source access is distinct from an authored guided derivation.
- Entire subject areas still lack dedicated guided treatment, including spectroscopy, molecular structure, most statistical mechanics, materials, transport and complex kinetics. Quantum mechanics and surface processes now have introductory guided targets.
- Henderson–Hasselbalch is supplemental workbook material: its name was not found in the extracted textbook text. A supplemental formula does not establish coverage of a missing textbook chapter.

## Confirmed gaps closed by this update

These formulas were missing in the initial audit. They now appear both in the source reference and in six new guided topics with assumptions, meanings, units, examples, self-checks and authored follow-up pages. The two Clausius–Clapeyron forms belong to one topic. The expressions below use readable modern notation; the equation numbers identify the textbook expressions.

| Textbook equation | Formula added to the derivation library | Meaning / conditions |
| --- | --- | --- |
| 4.6 | `dp/dT = ΔtrsS / ΔtrsV = ΔtrsH / (T ΔtrsV)` | Clapeyron equation: slope of a pure-substance phase boundary, with molar transition quantities evaluated at coexistence. |
| 4.11 | `d ln p / dT = ΔvapH / (R T²)` | Clausius–Clapeyron: ideal vapour and negligible liquid molar volume. |
| 4.12 | `ln(p₂/p₁) = −(ΔvapH/R)(1/T₂ − 1/T₁)` | Integrated vapour-pressure relation, additionally treating the vaporization enthalpy as constant. This is distinct from the existing van ’t Hoff equation for reaction equilibrium. |
| 5.24 | `pA = xA pA*` | Raoult's law for an ideal solution. `xA` is the liquid mole fraction; `pA*` is the pure-component vapour pressure. |
| 8.13 | `−(ℏ²/2m) d²ψ/dx² + V(x)ψ = Eψ` | One-dimensional time-independent Schrödinger equation. |
| 22.29 | `ln k = ln A − Ea/(RT)`, equivalently `k = A exp(−Ea/RT)` | Arrhenius dependence of a rate constant on temperature. The existing first- and second-order integrations assume constant `k`; they do not supply this equation. |
| 25.4 | `θ = Kp/(1 + Kp)`, with `K = ka/kd` | Langmuir adsorption isotherm: equivalent independent adsorption sites and monolayer coverage. |

The Clapeyron/Clausius–Clapeyron source, Schrödinger source, and Arrhenius source were also inspected as rendered PDF pages to verify fractions, signs, exponents, and surrounding conditions.

## Existing target coverage

“Represented” below means the target argument is present. It does not mean every equation in the corresponding chapter is included or that all numerical examples have received a fresh correctness review.

| Workbook target | Relevant source location | Assessment |
| --- | --- | --- |
| Pressure–volume work | 2.5, 2.6, 2.8 | Represented: general boundary work and constant external pressure. |
| Ideal-gas equation | 1.8 | Represented, with separate molecular-model follow-ups. |
| Constant-pressure heat / enthalpy | 2.18, 2.19a–b | Represented, including the closed-system / PV-work conditions. |
| Ideal-gas heat-capacity difference | 2.26 | Represented, with sample and molar conventions distinguished. |
| Reversible isothermal work | 2.9–2.11 | Represented. |
| Ideal-gas entropy change | 3.13, 3.19 and Example 3.2 | Represented as a combined temperature/volume relation, with constant heat capacity stated. |
| Gibbs energy and spontaneity | 3.30–3.32 | Represented for the stated temperature, pressure, and work constraints. |
| Reaction Gibbs energy and quotient | 7.11, 7.13b, 7.15 | Represented using dimensionless activities. |
| Gibbs energy and equilibrium constant | 7.16–7.17 | Represented. |
| Temperature dependence of equilibrium | 7.23–7.25 | Represented in differential and constant-enthalpy integrated forms. |
| First-order rate law and half-life | 22.12a–b, 22.13 | Represented. |
| Second-order rate law and half-life | 22.15a–c, 22.16 | Represented for the single-concentration squared disappearance law; the unequal-reactant law in 22.19 is a separate gap. |
| Henderson–Hasselbalch | Related activity and acid-equilibrium definitions; no named occurrence found in source extraction | Supplemental workbook derivation. |
| Weak-acid equilibrium | 21.31–21.34 | Related quadratic represented with an explicit standard-concentration convention; conductivity relations from this section are not thereby covered. |
| Nernst equation | 7.27–7.30 | Represented, including the Gibbs-energy relation and equilibrium connection. |
| Clapeyron equation | 4.6 | Added: chemical-potential equilibrium, phase-boundary slope and transition enthalpy. |
| Clausius–Clapeyron equation | 4.11–4.12 | Added: ideal-vapour reduction, integration and variable-enthalpy follow-up. |
| Raoult's law | 5.24 | Added: explicit ideal-solution premise, vapour composition and real-solution limits. |
| Schrödinger equation | 8.13 | Added: quantum postulates and operators, free-particle verification, boundary conditions and infinite-well follow-up. |
| Arrhenius equation | 22.29 | Added: logarithmic plot, activation energy and two-temperature relation. |
| Langmuir isotherm | 25.4 | Added: site-rate balance, saturation, fitting and dissociative-adsorption follow-up. |

## Chapter coverage and remaining work

The source-reference layer covers detected numbered expressions in every chapter. The table records the initial guided-treatment gaps; those remaining areas now have source excerpts, while dedicated guided arguments may still be absent. Supporting formulas may occur in branches even where no primary target is listed.

| Chapter | Subject | Primary workbook targets | Remaining coverage to reconcile |
| --- | --- | --- | --- |
| 1 | Properties of gases | Ideal gas | Compressibility factor, virial expansion, critical constants, corresponding states. The van der Waals model already appears in a branch. |
| 2 | First Law | PV work; enthalpy; heat capacities; isothermal work | Adiabatic relations, calorimetry, thermochemical sums, expansivity/compressibility, Joule–Thomson relations. A Kirchhoff correction already appears in a branch. |
| 3 | Second Law | Gas entropy; Gibbs spontaneity | Carnot efficiency, phase-transition entropy, third-law entropy calculations, remaining thermodynamic derivatives. Selected fundamental and Maxwell relations already occur in branches. |
| 4 | Pure-substance physical transformations | Clapeyron; Clausius–Clapeyron (added) | Other phase-transition relations; source excerpts included. |
| 5 | Simple mixtures | Raoult's law (added) | Partial molar properties, mixing functions, Henry law, colligative properties, activity coefficients. General activity definitions are already present. |
| 6 | Phase diagrams | None | Gibbs phase rule, lever rule, two- and three-component phase relationships. |
| 7 | Chemical equilibrium | Reaction Gibbs energy; K; van ’t Hoff; Nernst | Extent/composition relations, pressure effects, electrode applications and temperature coefficients, remaining equilibrium identities. |
| 8 | Quantum principles | Schrödinger equation (added) | Remaining quantization, radiation, de Broglie and uncertainty arguments; source excerpts included. |
| 9 | Quantum applications | None | Particle in a box, tunnelling, harmonic oscillator, angular momentum and rigid rotor. |
| 10 | Atomic structure and spectra | None | Hydrogenic wavefunctions/energies, angular momentum coupling, atomic spectra. |
| 11 | Molecular structure | None | Valence-bond and molecular-orbital expressions, overlap and secular equations, computational models. |
| 12 | Molecular symmetry | None | Group/character relationships, reduction of representations, symmetry selection rules. |
| 13 | Rotational/vibrational spectroscopy | None | Rotational and vibrational energy levels, line positions/intensities, Raman relations. |
| 14 | Electronic spectroscopy | None | Electronic transitions, absorption/emission, laser relations. |
| 15 | Magnetic resonance | None | Resonance frequencies, chemical shifts, spin coupling, relaxation. |
| 16 | Statistical thermodynamics: concepts | None | Boltzmann populations, molecular/canonical partition functions, ensembles. Boltzmann entropy alone is already present in branches. |
| 17 | Statistical thermodynamics: applications | None | Partition-function calculations of energy, entropy, heat capacity and equilibrium constants. |
| 18 | Molecular interactions | None | Electric moments, polarizability, intermolecular potentials, dielectric and interaction relations. |
| 19 | Macromolecules and aggregates | None | Polymer statistics, chain dimensions, solution/aggregation relations. |
| 20 | Solid state | None | Lattices, diffraction/Bragg relation, electronic and magnetic material properties. |
| 21 | Molecules in motion | Weak-acid quadratic (related subsection) | Speed distributions, collisions, diffusion/Fick laws, viscosity, conductivity and ion mobility. The ideal-gas molecular argument covers only a small subset. |
| 22 | Reaction rates | First- and second-order decay; Arrhenius (added) | Other rate laws, unequal-reactant integration, reversible/consecutive reactions, mechanisms and approximations. |
| 23 | Complex reactions | None | Chain reactions, polymerization, enzyme kinetics, photochemistry and biological kinetics. |
| 24 | Molecular reaction dynamics | None | Collision and transition-state theories, reaction cross-sections, electron transfer. |
| 25 | Solid surfaces | Langmuir isotherm (added) | Other adsorption models, surface kinetics/catalysis, electrode kinetics and related electrochemical processes. |
| Appendices 1–3 | Units; mathematics; physics | Some prerequisites are used | No systematic appendix-formula reconciliation has been completed. |
| Examples, problems, data and answers | Distributed across the source | A few independently authored examples | Unnumbered expressions, table relationships, worked intermediate steps and exercise-specific formulas need separate review if “all formulas” includes them. |

## Numbered-equation inventory and limits

[derivation-equation-inventory.tsv](derivation-equation-inventory.tsv) records 1,534 detected numbered expressions: 1,408 from chapters 1–25 and 126 from the mathematics/physics appendices. Each row links to an included local source excerpt and its complete-source context. Text extraction supplies search context and headings; exact mathematics is rendered from the source rather than retyped from unreliable extracted text.

The extraction accepts parenthesized or bracketed equation labels in the body of their own chapter/appendix, with a right-side label position. It excludes preface reproductions and cross-chapter self-test answers. It retains suffixes such as `a` and `b`. Each inventory entry is marked `source_excerpt_included`; this status does not mean it has a dedicated guided exercise. Guided targets link their explicit source equation numbers in both directions.

All detected entries have source images, but automatic label detection is not a proof that every equation label or unnumbered expression was recovered. The complete-source reader retains access to all source content. No percentage of guided coverage is reported: tutorial topics, individual numbered expressions and unnumbered formulas are different counting units.

The reference layer makes the detected numbered formulas available inside the web materials, and the six new guided topics close the representative gaps identified above. Providing a fresh step-by-step derivation for every expression, or a separate native-text transcription of every unnumbered formula, remains distinct work and is not claimed here.
