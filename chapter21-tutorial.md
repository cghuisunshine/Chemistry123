# Chapter 21 Tutorial — Nuclear Chemistry

## 21.1 Radioactivity and Nuclear Equations
### Key ideas
- Nuclear chemistry tracks changes that start in the nucleus instead of in the electron cloud; unstable nuclei emit particles or photons to reach a lower-energy state.
- Every isotope of an element shares the same atomic number (number of protons) but can have different mass numbers (total protons plus neutrons); we rely on isotopic notation such as ²³⁸₉₂U to show both.
- Nuclides are nuclei with a specific proton and neutron count; radionuclides are radioactive nuclides, and radioisotopes are the atoms that contain them.
- Nuclear equations must balance both mass numbers and atomic numbers because nucleons and charge are conserved during the reaction.

### Important formulas & their meaning
- **Balanced nuclear equation form (e.g., alpha emission):** A
  _Z X → A−4
  _{Z−2} Y + ⁴₂He. Mass numbers (A) and atomic numbers (Z) are matched on both sides; the helium nucleus (alpha particle) carries two protons and two neutrons, so subtracting it leaves the remaining nucleus with A−4 and Z−2.
- **Beta emission:** n → p + e⁻ (or ₁₀n → ₁₁H + ₀⁻₁e). A neutron converts to a proton while emitting a high-energy electron (beta particle); atomic number increases by 1, mass number stays the same.
- **Positron emission:** p → n + e⁺ (or ₁₁H → ₁₀n + ₀⁺₁e). A proton becomes a neutron while releasing a positron, so the atomic number drops by 1 without changing the mass number.
- **Electron capture:** A nucleus absorbs an inner-shell electron (₀⁻₁e), turning a proton into a neutron (₁₁H + ₀⁻₁e → ₁₀n). This lowers the atomic number by 1 while the mass number stays fixed.

### Short example(s)
- Radium-226 (²²⁶₈₈Ra) undergoes alpha decay to produce radon-222: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He. Both sides have mass number 226 and atomic number 88, so the reaction is properly balanced while radon-222 is left with four fewer nucleons.

## 21.2 Patterns of Nuclear Stability
### Key ideas
- The belt of stability plots proton number versus neutron number; stable nuclei follow it, while neutron-rich nuclides lie above and proton-rich ones below.
- Light elements tend to be stable with roughly equal numbers of protons and neutrons, but heavier elements require more neutrons to shield proton repulsion (neutron-to-proton ratio grows toward ~1.5 for heavy nuclei).
- Even numbers of protons or neutrons provide extra stability, so nuclei with odd counts are more likely to be radioactive; above Z=83 (bismuth) no stable isotopes exist and alpha emission dominates.
- Predicting decay involves comparing where a nuclide sits relative to the belt: too many neutrons → beta emission, too few neutrons (proton-rich) → positron emission or electron capture, heavy nuclei → alpha emission.

### Important formulas & their meaning
- **Neutron-to-proton guidance:** Stable ratios ≈ 1:1 for Z≤20 and increase toward ≈1.5 for heavy nuclei because each extra neutron adds the strong nuclear force without bringing additional Coulombic repulsion; no units, but a simple ratio (n/p) helps forecast decay modes.
- **Decay-type changes (Table 21.3):**
  - Alpha: ΔZ = −2, ΔA = −4 (AₓX → A−4_{Z−2}Y + ⁴₂He)
  - Beta: ΔZ = +1, ΔA = 0 (AₓX → A_{Z+1}Y + ₀⁻₁e)
  - Positron: ΔZ = −1, ΔA = 0 (AₓX → A_{Z−1}Y + ₀⁺₁e)
  - Electron capture: ΔZ = −1, ΔA = 0 (AₓX + ₀⁻₁e → A_{Z−1}Y)
  These simple arithmetic changes show how the nucleus shifts along proton or neutron axes without altering the total nucleon count.

### Short example(s)
- Technetium-99m is metastable (n/p ≈ 1.18) and sits near the belt; instead of alpha or beta particles it releases gamma rays to reach the ground state, which keeps the proton and neutron counts unchanged while the emitted photon carries excess energy.

## 21.3 Rates of Radioactive Decay
### Key ideas
- Radioactive decay follows first-order kinetics, so each nuclide has a characteristic half-life (t₁/₂) that is independent of temperature, pressure, or chemical state.
- Half-lives range from microseconds (short-lived synthetic isotopes) to billions of years (e.g., ²³⁸U), which explains why some radionuclides persist in nature while others do not.
- Radiometric dating (carbon-14 for organic matter, uranium-lead for rocks) treats decay as a nuclear clock by measuring how much parent has turned into daughter nuclides.
- Activity (disintegrations per unit time) is proportional to the number of radioactive nuclei; the becquerel (Bq) equals one decay per second, and the curie (Ci) equals 3.7×10¹⁰ decays per second.

### Important formulas & their meaning
- **Rate law:** Rate = kN. The decay constant k has units of inverse time (s⁻¹, yr⁻¹, etc.), and N is the current number of radioactive nuclei; doubling N doubles the activity.
- **Half-life and decay constant:** k = 0.693 / t₁/₂. A longer half-life means a smaller k, so decay is slower; the dimensionless numerator 0.693 equals ln(2).
- **First-order decay:** ln(N_t / N₀) = −k t. The natural log of the fraction remaining (N_t/N₀) equals −k times time, so measuring any two quantities lets you solve for the third.
- **Activity ratio substitution:** Nt/N0 can represent the mass or activity ratio because both scale with the number of nuclei; for example, 5 mCi remaining out of 15 mCi initial gives Nt/N0 = 0.333.

### Short example(s)
- A 1.000 mg sample of cobalt-60 (t₁/₂ = 5.27 yr) decays to 0.125 mg after 15.81 yr (three half-lives). Each half-life halves the mass (1.000 → 0.500 → 0.250 → 0.125), so after three half-lives only 12.5% remains and the activity shrinks by the same factor.

## 21.4 Detection of Radioactivity
### Key ideas
- Film badges reveal cumulative exposure because ionizing radiation darkens photographic emulsions similarly to X-rays; darker spots indicate more dose.
- Geiger counters register individual ionizing events: incoming radiation ionizes gas (commonly argon), generating free electrons that trigger a voltage pulse counted as one detection, so more pulses → more radiation.
- Scintillation counters use phosphors (e.g., ZnS) that emit flashes of light when struck by radiation; photomultipliers amplify and count the flashes, making them sensitive gamma-ray detectors for medical imaging.
- Radiotracers take advantage of identical chemistry for isotopes: inserting a tiny amount of a radioisotope into a system lets us follow the element through reactions or physiology, as in positron emission tomography (PET).

### Important formulas & their meaning
- **PET annihilation signature:** e⁺ + e⁻ → 2 γ (two 511 keV gamma rays traveling 180° apart). The simultaneous detection of back-to-back gamma rays pinpoints the decay location and allows 3D mapping of metabolic activity in the body.

### Short example(s)
- Carbon-11 (t₁/₂ = 20.4 min) is attached to glucose for PET brain scans; when the tracer decays by positron emission, the positron annihilates with an electron to give two gamma rays, and the PET scanner reconstructs where the brain consumed the labeled glucose.

## 21.5 Energy Changes in Nuclear Reactions
### Key ideas
- Einstein’s equation E = mc² shows that a tiny change in mass (m) can release a huge amount of energy (E) because the speed of light (c ≈ 3.00×10⁸ m/s) is enormous; nuclear reactions exploit this mass defect.
- Binding energy is the energy needed to split a nucleus into its individual nucleons; the difference between the sum of separate nucleon masses and the nuclear mass (mass defect) is converted to this binding energy.
- Binding energy per nucleon rises to a maximum near iron-56 and falls off for both lighter and heavier nuclei; splitting heavy nuclei (fission) or combining light nuclei (fusion) moves toward the peak and releases energy.
- Fission chain reactions (e.g., ²³⁵U + n → ¹⁴¹Ba + ⁹²Kr + 3 n) generate additional neutrons that sustain other fissions, so controlling neutron flux (via moderators and control rods) keeps power plants stable.
- Fusion (e.g., ¹H + ¹H → ²H + e⁺ + ν) powers stars but requires temperatures on the order of 10⁷–10⁸ K and magnetic or inertial confinement to overcome electrostatic repulsion.

### Important formulas & their meaning
- **Energy from mass defect:** ∆E = ∆m c². ∆m (in kilograms) is the mass lost when reactants become products, and c is the speed of light; the result ∆E (in joules) quantifies how much energy is liberated or absorbed.
- **Mass defect calculation:** ∆m = Σ m(products) − Σ m(reactants). Mass numbers are often quoted in atomic mass units (u), where 1 u = 1.6605×10⁻²⁷ kg, so convert ∆m to kilograms before plugging into E = mc².
- **Fission energy example:** Splitting ¹²³⁵U yields ~3.5×10⁻¹¹ J per nucleus (≈ 200 MeV), so a mole (6.02×10²³ nuclei) releases on the order of 2×10¹³ J, vastly exceeding typical chemical reactions.

### Short example(s)
- Uranium-238 alpha decay (²³⁸U → ²³⁴Th + ⁴He) loses 0.0046 g per mole, which converts via ∆E = ∆m c² into ≈4.1×10¹¹ J per mole—enough to power ~10,000 homes for a year. In reactors, a controlled chain reaction uses moderators (water or graphite) to slow neutrons and control rods (boron/cadmium) to absorb excess ones while the heat drives turbines.

## 21.6 Radiation in the Environment and Living Systems
### Key ideas
- Natural background radiation comes from cosmic rays, rocks/soil, and radioisotopes inside our bodies (e.g., potassium-40); the average yearly dose in the U.S. is roughly 3.6 mSv, with radon contributing about 2 mSv.
- Ionizing radiation (alpha, beta, gamma, X-rays) can strip electrons from water, forming hydroxyl radicals (·OH) that rapidly damage DNA and other biomolecules, often triggering cancer or other long-term effects.
- The biological impact depends on dose (energy per kilogram), dose rate, radiation type, and whether the source is internal; alpha particles are most harmful inside the body because they deposit energy over a very short path.
- Radiation therapy deliberately targets tumors with gamma (or other) radiation, often using short-lived isotopes (¹³¹I, ⁶⁰Co, ¹⁹²Ir) and shielding to spare healthy tissue.

### Important formulas & their meaning
- **Hydroxyl radical formation:** H₂O⁺ + H₂O → H₃O⁺ + ·OH. The oxidized water molecule transfers a proton to another water, creating the reactive hydroxyl radical that can attack biomolecules.
- **Effective dose (rem):** rem = rad × RBE. The absorbed dose in rads (1 rad = 0.01 J/kg) is scaled by the radiation’s relative biological effectiveness (RBE) so alpha radiation (RBE ≈ 10) counts more than gamma/beta (RBE ≈ 1).
- **Sievert relation:** 1 Sv = 100 rem. The sievert is the SI unit for effective dose and already includes the damage weighting, so it shares the same biological meaning as rem but uses joule-based units.

### Short example(s)
- A typical dental X-ray (~5 mSv) is much lower than the 6 Sv (6000 mSv) that would likely be fatal; meanwhile, potassium-40 in 1.00 g of KCl contains 9.45×10¹⁷ ⁴⁰K ions, but only 0.0117% of the potassium is radioactive, so it takes tens of millions of years for 1% to decay, making its contribution to background radiation steady and safe.
