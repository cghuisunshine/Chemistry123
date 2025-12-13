# Chapter 32 Tutorial — Solving Molecular Structure

## 32.1 The Electromagnetic Spectrum

### Key ideas
- The electromagnetic spectrum covers all photon energies: the UV-visible region excites electrons, IR induces vibrational transitions, and the radio-frequency region accesses nuclear spin states; chemists exploit different regions for different molecular information.
- A photon’s energy depends on frequency and wavelength (`E = hc/λ`), so higher-frequency (shorter wavelength) radiation carries more energy—a UV photon can promote an electron, while lower-energy IR photons stretch bonds.
- Choosing the appropriate region focuses on the physical process of interest: π-conjugated/aromatic systems respond in the UV-visible, functional groups show signature absorptions in the IR, and nuclei give NMR signals at radio frequencies.

### Important formulas & their meaning
- **Photon energy:** `E = hc/λ`. `h` is Planck’s constant and `c` is the speed of light, so a shorter wavelength (λ) increases the energy—this explains why UV light (λ ~ 200–400 nm) can excite electrons but IR (λ ~ 700 nm to 1 mm) cannot.
- **Frequency-wavelength relation:** `c = λν`. The speed of light is constant, so choosing either λ or frequency ν describes the same radiation; spectroscopy interprets molecular absorptions in whichever units are most convenient for the region.

### Short example(s)
- UV-visible spectroscopy reveals the conjugated π-system in benzene derivatives because their electron transitions absorb violet/UV light, while saturated hydrocarbons remain transparent at those wavelengths.
- Infrared spectroscopy targets bond vibrations (Section 32.2), so an O–H stretch absorbs around 3200–3600 cm⁻¹ and proves a hydroxyl group is present without breaking the molecule.

## 32.2 Infrared (IR) Spectroscopy

### Key ideas
- IR radiation does not ionize molecules but excites molecular vibrations; each functional group (C=O, O–H, N–H, C≡C) absorbs at characteristic energies (wavenumbers), providing a molecular fingerprint.
- The wavenumber (cm⁻¹) is the reciprocal of wavelength and represents the number of waves in a centimeter; higher wavenumbers correspond to higher energy vibrations (e.g., stronger or lighter bonds).
- Bond vibrations follow Hooke’s law (`ν = (1/2π)√(k/m)`), where `k` is bond stiffness and `m` is reduced mass; stiffer or lighter atom pairs vibrate at higher frequencies, which is why triple bonds appear above 2100 cm⁻¹ while single C–C stretches sit below 1500 cm⁻¹.

### Important formulas & their meaning
- **Wavenumber:** `ṽ = ν/c` (true frequency divided by speed of light), measured in cm⁻¹; this is the x-axis on most IR spectra, so a band at 1700 cm⁻¹ indicates a carbonyl.
- **Absorbance relation:** `A = -log10(T)` where `T` is transmittance, letting students convert the percentage of light that passes into an absorbance value that more directly reflects concentration.
- **Hooke’s law frequency:** `ν = (1/2π)√(k/m)`. The bond acts like a spring, so heavier atoms (higher m) or weaker bonds (lower k) give lower ν, helping students predict which region (high vs low wavenumber) a given functional group will appear.

### Short example(s)
- The C=O stretch in an aldehyde or ketone shows a strong absorption near 1700 cm⁻¹, while the fingerprint region (300–1400 cm⁻¹) contains complex bending vibrations used to validate a suspected identity.
- A broad band at 3200–3600 cm⁻¹ signals an O–H stretch, which distinguishes between alcohols and ethers in an IR spectrum.

## 32.3 Nuclear Magnetic Resonance (NMR) Spectroscopy

### Key ideas
- NMR observes nuclear spin transitions in a magnetic field; each nucleus experiences a slightly different local field due to shielding by electrons, giving rise to unique chemical shifts measured in parts per million (ppm) relative to a reference (TMS).
- The spectrum carries three structural clues: chemical shift (δ) reveals the chemical environment, integration shows how many hydrogens contribute to each signal, and coupling (J, in Hz) produces splitting patterns that reflect neighboring hydrogens (the n + 1 rule for spin-½ nuclei).
- Shielding/deshielding effects dictate δ: electron-rich groups push signals upfield (lower δ), while electronegative neighbors or π-systems pull them downfield (higher δ), providing diagnostic evidence of functional groups.

### Important formulas & their meaning
- **Chemical shift:** `δ = (νsample - νreference)/νspectrometer × 10⁶`. Because δ is normalized to the spectrometer frequency, it is instrument-independent and always reported in ppm.
- **n + 1 rule:** A proton with `n` equivalent hydrogens on adjacent atoms splits into `n + 1` peaks (doublet, triplet, quartet, etc.), so students count neighbors to anticipate signal multiplicity and deduce connectivity.
- **Coupling constant (J):** The spacing between split peaks, measured in hertz, is constant for a coupled set; identical J values across two signals signify they belong to the same spin system, guiding molecule assembly.

### Short example(s)
- In diethyl ether’s ¹H NMR, the CH₂ groups adjacent to oxygen appear as quartet/triplet patterns because each CH₂ sees three hydrogens on the neighboring CH₃ and vice versa, illustrating coupling with J ~ 7 Hz.
- A vinyl proton next to a carbonyl appears at δ ~ 6–7 ppm (deshielded) due to both the π-system and the electron-withdrawing C=O, while an aliphatic methyl resonates near δ ~ 0.9 ppm, showing how δ differentiates functional groups.

## 32.4 Mass Spectrometry

### Key ideas
- Mass spectrometry (MS) ionizes a tiny sample, often by electron impact (EI), and measures the mass-to-charge ratio (m/z) of the resulting ions to determine molecular mass and fragmentation patterns.
- The spectrum displays the molecular ion peak ([M]•⁺) for the intact molecule, the base peak (most intense signal) for the most stable fragment, and additional peaks that reveal how the molecule breaks apart.
- Isotopic patterns (e.g., Cl has [M] and [M + 2] peaks at ~3:1, Br at 1:1) provide unmistakable signatures for certain elements, while suites of fragments indicate functional groups or even straight-chain lengths.

### Important formulas & their meaning
- **Mass-to-charge ratio:** `m/z`, with z usually 1 for EI spectra, equals the mass of the ion; students read the x-axis to find the molecular ion and deduce the molecular weight directly from `m/z`.
- **Relative abundance:** Intensities are expressed relative to the base peak (set at 100%), so comparing peaks (e.g., [M] vs [M − 15]) helps spot logical fragments and the stability of cations.
- **Isotopic fingerprint:** Recognizing that chlorine (³⁵Cl/³⁷Cl) or bromine (⁷⁹Br/⁸¹Br) create characteristic `M:M+2` ratios lets students confirm halogenated structures even before other spectra are consulted.

### Short example(s)
- The EI mass spectrum of an alcohol often shows a base peak at `[M − 18]` due to loss of H₂O, whereas the molecular ion peak at m/z equal to the molecular weight confirms the parent formula.
- A compound with chlorine shows two intense peaks separated by 2 units with relative intensities ~3:1, so seeing m/z 98 and 100 at that ratio signals a Cl atom in the molecule.

## 32.5 Compound Identification Using Spectra

### Key ideas
- Structure elucidation uses a combination of data: IR for functional groups, NMR for connectivity and proton count, MS for mass/formula, plus chemical observations to narrow possibilities.
- The workflow starts with an educated guess (“first skim”), then iteratively checks each spectrum to accept, reject, or refine the proposed structure until all evidence aligns.
- Practicing pattern recognition (e.g., IR peaks for carbonyls, NMR splitting/δ for specific environments, MS fragments) builds intuition so you can match spectra to unknowns quickly.

### Important formulas & their meaning
- **Degree of unsaturation (DU):** `DU = C – H/2 + N/2 + 1` (adjusted for halogens/oxygen) helps predict rings/pi bonds from molecular formula obtained via MS; combined with IR/NMR data, it reveals whether the compound is aromatic, cyclic, or saturated.
- **Spectroscopic triangulation:** Use IR to flag functional groups, MS to fix the molecular weight, and NMR (chemical shift + integration + coupling) to assign each atom—multiple clues reduce ambiguity and confirm the structure.

### Short example(s)
- If MS gives a molecular weight of 150, IR shows a strong carbonyl at 1715 cm⁻¹, and NMR shows a singlet integrating to three hydrogens at δ ~2.1 ppm plus a quartet at δ ~4.1 ppm, you can piece together ethyl acetate confidently.
- A forensic chemist combines NMR integrations to determine the number of each hydrogen type, uses IR to confirm functional groups, and matches MS fragments to a suspected drug, illustrating the iterative identification strategy.
