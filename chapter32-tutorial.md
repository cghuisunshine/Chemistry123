# Chapter 32: Solving Molecular Structure

### 32.1 The Electromagnetic Spectrum
#### Key ideas
- All molecules interact with electromagnetic radiation, but each region of the spectrum excites different parts of a molecule. Organic chemists rely on the UV-visible region for electronic transitions, the IR region for bond vibrations, and the radio-frequency region for nuclear-spin transitions.
- Modern spectroscopic techniques are usually non-destructive: milligram or microgram quantities are enough, and the sample can often be recovered.
- Absorption only occurs when the photon energy exactly matches the spacing between two energy levels—this creates a characteristic spectrum that acts as a molecular fingerprint.

#### Important formulas & their meaning
1. **Photon wavelength and energy gap:**
   \[\lambda = \dfrac{hc}{E_2 - E_1}\]
   - \(\lambda\): wavelength of the absorbed light (metres or nanometres).
   - \(h\): Planck’s constant (\(6.63 \times 10^{-34}\) J·s).
   - \(c\): speed of light (\(3.00 \times 10^8\) m·s⁻¹).
   - \(E_2 - E_1\): energy difference between excited and ground states (joules).
   **Meaning:** The light that a molecule absorbs directly reflects how big that energy gap is; shorter wavelengths mean bigger gaps.

2. **Beer–Lambert law:**
   \[A = \varepsilon c l\]
   - \(A\): absorbance (dimensionless), measured by the spectrometer.
   - \(\varepsilon\): molar extinction coefficient (L·mol⁻¹·cm⁻¹) that is specific to the absorbing transition and wavelength.
   - \(c\): concentration in mol·L⁻¹.
   - \(l\): path length of the cuvette (cm).
   **Meaning:** For a fixed path length, absorbance rises linearly with how many molecules are in the beam, so spectra can be translated into concentrations.

3. **Transmittance to absorbance:**
   \[A = -\log_{10}(T)\]
   - \(T\): fraction of light that passes through the sample (between 0 and 1).
   **Meaning:** Because absorbance is a logarithmic measure, even small changes in transmittance translate into measurable absorbance.

#### Short example(s)
- Measuring the absorbance of an aqueous 4-aminobenzoic acid solution gives \(A = 0.21\). Applying \(A = -\log_{10}(T)\) yields \(T = 10^{-0.21} \approx 0.62\), so about 62% of the light is transmitted and 38% is absorbed.
- The same chapter uses a UV-visible spectrum of naphthalene (\(\varepsilon = 300\) L·mol⁻¹·cm⁻¹, \(l = 1.0\) cm) to show that measuring absorbance allows one to plug values into Beer–Lambert’s law and solve for the unknown concentration.

### 32.2 Infrared (IR) Spectroscopy
#### Key ideas
- IR radiation promotes vibrations (stretching, bending) of covalent bonds; each functional group vibrates at a predictable energy range, so IR can flag but not fully solve structures.
- Spectra plot percent transmittance (%T) against wavenumber (\(\tilde{\nu} = 1/\lambda\) in cm⁻¹). The fingerprint region (300–1400 cm⁻¹) is complex but diagnostic when comparing to known compounds.
- Only bonds that change dipole moment (for example, O–H, C=O, N–H) are IR-active, so symmetric nonpolar stretches may be silent.
- Samples can be measured neat, as mulls with nujol, or directly on ATR (attenuated total reflectance) windows, keeping the technique non-destructive.

#### Important formulas & their meaning
1. **Hooke’s law for bond vibrations:**
   \[F_s = -k x\]
   - \(F_s\): restoring force in newtons (N).
   - \(k\): force constant or bond “stiffness” (N·m⁻¹).
   - \(x\): displacement from equilibrium (m).
   **Meaning:** A stronger bond (larger \(k\)) resists distortion more strongly, which raises its vibrational frequency.

2. **Fundamental vibrational frequency:**
   \[\nu = \dfrac{1}{2\pi} \sqrt{\dfrac{k}{\mu}}\]
   - \(\nu\): vibrational frequency (s⁻¹).
   - \(\mu\): reduced mass of the two atoms (
   kg), \(\mu = \dfrac{m_1 m_2}{m_1 + m_2}\).
   **Meaning:** Bonds between light atoms (small \(\mu\)) and large force constants vibrate faster and absorb at higher wavenumbers (higher energy).

3. **Wavenumber definition:**
   \[\tilde{\nu} = \dfrac{1}{\lambda} = \dfrac{\nu}{c}\] (in cm⁻¹).
   **Meaning:** Wavenumber is directly proportional to energy and is the quantity IR spectroscopists plot on the x-axis.

4. **Transmittance to absorbance reminder:**
   \[A = -\log_{10}(T)\]
   **Meaning in IR:** Sharp, strong bands (like the C=O stretch near 1700 cm⁻¹) show up as deep dips in %T and correspond to high absorbance values.

#### Short example(s)
- Butan-1-ol’s IR spectrum features a broad, strong absorption in the 3200–3500 cm⁻¹ region because of O–H stretching, and a sharp C–H stretch just below 3000 cm⁻¹. The broadness comes from hydrogen bonding, while the depth reflects the large dipole change.
- In contrast, propanone’s C–H stretch is weak because the dipole change is smaller, but its C=O stretch appears as a strong band around 1700 cm⁻¹, perfect for confirming carbonyl-containing functional groups.
- Conjugation of a C=C double bond with another π system lowers the effective force constant, shifting the absorption from 1620–1640 cm⁻¹ down toward 1600 cm⁻¹; that is why aromatic C=C stretches lie slightly lower than isolated alkenes.

### 32.3 Nuclear Magnetic Resonance (NMR) Spectroscopy
#### Key ideas
- NMR detects nuclei with non-zero spin (for example, ¹H and ¹³C) suspended in a strong magnetic field generated by a superconducting magnet. The energy difference between parallel and anti-parallel orientations leads to resonance when radiofrequency radiation matches that gap.
- Each nucleus “feels” the applied field plus the local magnetic field from nearby electrons. Shielding lowers the resonance frequency (upfield), while deshielding raises it (downfield). Chemical shift (δ) standardizes these differences on a ppm scale referenced to tetramethylsilane (TMS).
- A proton network produces information in three ways: (1) the chemical shift tells you about neighboring functional groups, (2) the integration (area) reports the relative number of hydrogens, and (3) spin–spin coupling splits signals into patterns (multiplicities) that reveal how many neighbouring hydrogens are present (n + 1 rule).
- ¹³C spectra usually decouple the hydrogens, leaving singlets that help count distinct carbon environments without overwhelming splitting patterns.

#### Important formulas & their meaning
1. **Effective magnetic field:**
   \[B_{\text{effective}} = B_{\text{applied}} - B_{\text{local}}\]
   - \(B_{\text{applied}}\): external magnetic field strength (tesla, T).
   - \(B_{\text{local}}\): induced field from surrounding electrons.
   **Meaning:** Electrons either oppose or add to the applied field, changing how much energy is required to flip a nucleus.

2. **Chemical shift:**
   \[\delta = \dfrac{\text{frequency shift from TMS (Hz)}}{\text{operating frequency of spectrometer (MHz)}}\]
   - δ is dimensionless and reported in ppm.
   **Meaning:** δ lets you compare spectra acquired on different instruments because it normalizes frequency shifts to the spectrometer frequency.

3. **Multiplicity via the (n + 1) rule:**
   - A hydrogen signal coupling with \(n\) equivalent neighbours splits into \(n + 1\) peaks.
   - Coupling constants (\(J\)) are measured in Hz and remain identical for both partners in a coupling pair, so matching J values links signals to each other.

#### Short example(s)
- Methyl acetate’s ¹H spectrum contains a triplet/ quartet pair (the ethyl group) plus a singlet for the methyl attached to the carbonyl. Integration ratios of 2 : 3 : 3 and the splitting patterns identify the ethyl fragment, while the singlet at 2.0 ppm signals the acetyl methyl that has no coupling partners.
- The ¹³C spectrum of methyl acetate shows three signals because all three carbon environments are magnetically unique. The carbonyl appears downfield near 170 ppm, the methoxy carbon near 60 ppm, and the methyl carbon near 21 ppm.
- The diethyl ether example highlights how coupling constants pin down connectivity: the quartet/triplet pair shares the same \(J\) value, identifying the CH₃–CH₂–O fragment.

### 32.4 Mass Spectrometry
#### Key ideas
- Electron impact ionization (EIMS) sprays the gaseous sample with high-energy electrons, producing molecular ions (M⁺) and fragment cations. Only charged species are detected; neutral radicals fly away unseen.
- A mass spectrum plots relative abundance versus mass-to-charge ratio (m/z). Usually \(z = +1\), so m/z equals the mass of the ion in unified atomic mass units (u). The most intense peak is the base peak and highlights the most stable fragment.
- Isotopic patterns ([M + 1]⁺, [M + 2]⁺) reveal halogens: chlorine gives a 3 : 1 ratio for M : [M + 2], bromine gives nearly equal intensities, and iodine typically shows a fragment at m/z 127.
- High-resolution mass spectrometry records exact masses to four decimal places so different formulas with the same nominal mass (for example, C₃H₈ vs. CO₂) can be told apart.

#### Important formulas & their meaning
1. **Mass-to-charge ratio:**
   \[\dfrac{m}{z} = \dfrac{\text{mass of ion (u)}}{\text{charge (number of elementary charges)}}\]
   **Meaning:** For singly charged ions, m/z simply equals the measured mass. For multiply charged ions (common in ESI), the m/z value decreases by the number of charges (e.g., M/2 for +2 ions).

2. **[M + nH]ⁿ⁺ species (ESI example):**
   - When a molecule picks up \(n\) protons, its signal appears at \((M + n)/n\) (in u/e). This is why bio-molecules often show multiple peaks in series (e.g., [M + 5H]⁵⁺).
   **Meaning:** Multiply charged ions let you detect large masses with mass analyzers that have limited m/z ranges.

#### Short example(s)
- Diethyl ether’s EI spectrum peaks at m/z = 74 (M⁺) with a base peak at m/z = 31 corresponding to the CH₂OH⁺ fragment. The measured fragments match the decomposition pathways shown in the textbook figure.
- 4-Bromoaniline’s spectrum shows molecular ion (m/z ≈ 171) and [M + 2] signals of equal intensity because bromine’s ⁷⁹Br and ⁸¹Br isotopes are nearly equally abundant.
- An ESI spectrum containing [M + 5H]⁵⁺, [M + 4H]⁴⁺, etc., demonstrates how the same molecule can produce multiple peaks that all point to the same molecular weight (divided by the charge). Coupling that data with the known isotope patterns identifies the halogens.

### 32.5 Compound Identification Using Spectra
#### Key ideas
- Solving a molecular structure is an iterative puzzle: combine empirical formula (from microanalysis and mass spec) with IR, NMR, and wet chemistry clues until every observation fits one structure.
- Calculate the index of hydrogen deficiency (IHD) to count rings and π bonds, using a saturated hydrocarbon reference for the same number of carbons and adjusting for heteroatoms (halogens subtract H, nitrogen adds H, oxygen/sulfur ignored).
- Wet chemical tests (Na to detect alcohols, NaHCO₃ for carboxylic acids, DNP for carbonyls, Ag mirror for aldehydes, Lassaigne for nitrogen, acid anhydride for amines) complement instrumental data.
- Follow a checklist: molecular formula ⇒ IHD ⇒ IR functional groups ⇒ ¹H NMR shifts, integration, multiplicity ⇒ 13C pattern and mass spec fragments.

#### Important formulas & their meaning
1. **Index of hydrogen deficiency (IHD):**
   \[\text{IHD} = \dfrac{(2n + 2) - H_{\text{actual}}}{2}\]
   - \(n\): number of carbon atoms.
   - \(H_{\text{actual}}\): hydrogens from the molecular formula after accounting for halogens and nitrogens (subtract 1 H per halogen; add 1 H per nitrogen).
   **Meaning:** Every ring or π bond removes two hydrogens relative to the fully saturated alkane. An IHD of 1 means exactly one double bond or ring is present.

2. **Sodium + alcohol:**
   \[2\,ROH + 2\,Na \rightarrow 2\,RO^- + 2\,Na^+ + H_2(g)\]
   **Meaning:** Bubbling hydrogen indicates a free alcohol.

3. **Sodium bicarbonate + carboxylic acid:**
   \[RCOOH + HCO_3^- (aq) \rightarrow RCOO^- (aq) + H_2O + CO_2(g)\]
   **Meaning:** Effervescence (CO₂) tells you a carboxylic acid is present.

4. **DNP test for carbonyls:**
   \[R_2C=O + H_2NR' \rightarrow R_2C=NR' + H_2O\]
   **Meaning:** Formation of a brightly colored precipitate indicates a ketone or aldehyde.

5. **Silver mirror for aldehydes:**
   \[RCHO + 2Ag^+ + 3OH^- \rightarrow RCOO^- + 2Ag + 2H_2O\]
   **Meaning:** The redox reaction produces metallic silver, distinguishing aldehydes from ketones.

6. **Amine acylation (visibility for amine tests):**
   \[RNH_2 + (CH_3CO)_2O \rightarrow RNHCOCH_3 + CH_3COOH\]
   **Meaning:** Amines form amides with acetic anhydride, supporting their identification.

#### Short example(s)
- For C₄H₈O₂, the reference alkane is C₄H₁₀. \((2×4 + 2) - 8 = 2\), so IHD = 1. The strong IR band at ~1750 cm⁻¹ and the lack of an O–H stretch point to an ester; ¹H NMR (triplet/quartet plus singlets) and ¹³C data confirm ethyl acetate.
- Microanalysis yielding C₇H₈O plus an O–H stretch suggests benzyl alcohol rather than phenol if the compound is insoluble in NaOH. Using the proposed functional groups, you can refine the structure until it explains every observation (IR, NMR, microanalysis, wet tests).
- The flowchart shown in the chapter guides whether a sample reacts with Br₂, Na, NaOH, DNP, Ag⁺, or acetic anhydride—each positive response narrows the functional group possibilities.
