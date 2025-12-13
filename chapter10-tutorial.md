# Chapter 10 Tutorial — Gases

## 10.1 Characteristics of Gases
### Key ideas
- Gases consist of widely spaced molecules that behave similarly even when composed of very different species because the molecules rarely interact.
- A gas expands to fill its container, is highly compressible, and any mixture of gases is homogeneous because the particles occupy only about 0.1% of the volume—they act independently.
- Vapors are gaseous forms of substances that are liquids or solids under ordinary conditions.

### Important formulas & their meaning
- **Volume equals container volume:** In practice, any gas fills the space available, so the macroscopic volume of the gas is the same as the vessel that holds it; this is why gases expand spontaneously and why their densities are low.
- **Homogeneous mixing:** Because the intermolecular distances are so large, the partial volume occupied by each gas is negligible and different gases form one uniform phase.

### Short example(s)
- Air is almost all N₂ and O₂ yet behaves as a single gaseous material for pressure and volume measurements even though O₂ supports life and N₂ does not.

## 10.2 Pressure
### Key ideas
- Gas pressure arises from molecular impacts on container walls; pressure is a macroscopic measure of how many collisions occur and how forceful they are.
- Atmospheric pressure results from the weight of a ~10,000 kg column of air above each square meter, and devices such as the barometer and manometer compare gas pressure with that benchmark.
- Standard atmospheric pressure is 1 atm ≈ 760 mm Hg ≈ 101.3 kPa, and medical and industrial gauges convert between multiple units (Pa, bar, atm, psi).

### Important formulas & their meaning
- **Pressure definition,** `P = F/A` (Equation 10.1): Pressure is the force exerted per unit area; increasing force (more collisions) or reducing area raises pressure, so compressing a gas or heating it increases P.
- **Hydrostatic pressure in a fluid column:** `P = ρgh` gives the extra pressure from a liquid column (used in barometers, diver problems, and manometers). Here ρ is density, g is gravitational acceleration, and h the fluid height.

### Short example(s)
- A diver 31.0 m below water experiences `P_total = 98 kPa` (atmospheric) plus `ρgh ≈ 300 kPa`, for a total pressure around 398 kPa (Sample Exercise 10.1).
- In a mercury manometer, the difference `h` between the two arms tells how much the sample pressure differs from the atmosphere; e.g., 797.3 torr was found when a 136.4 mm vs 103.8 mm difference is measured (Sample Exercise 10.2).

## 10.3 The Gas Laws
### Key ideas
- Boyle’s law relates pressure and volume at constant temperature: squeezing a gas halves its volume if the pressure doubles.
- Charles’s law links volume and absolute temperature at constant pressure: heating a balloon raises T in kelvins and causes its volume to rise proportionally.
- Avogadro’s law ties volume to amount (moles); doubling the moles at fixed P and T doubles the volume, so equal volumes of gases at the same conditions contain the same number of molecules (e.g., 22.4 L = 1 mol at STP).

### Important formulas & their meaning
- **Boyle’s law:** `P₁V₁ = P₂V₂` at constant n and T. This expresses that pressure is inversely proportional to volume, so reducing volume raises collisions per unit time and thus pressure (Equation 10.7).
- **Charles’s law:** `V₁/T₁ = V₂/T₂` at constant n and P, which shows that volume tracks absolute temperature directly (Equation 10.3).
- **Avogadro’s law:** `V ∝ n` at constant P and T (Equation 10.4). Equal molar ratios map to equal volume ratios in reactions (e.g., 2 L H₂ + 1 L O₂ → 2 L H₂O vapor).

### Short example(s)
- Allowing a weather balloon to ascend shows Boyle’s law: as altitude increases and atmospheric pressure decreases, the balloon expands (Figure 10.5).
- Injecting gas into a sealed cylinder at constant T and V increases pressure because the number of moles goes up while volume stays fixed (Sample Exercise 10.3).

## 10.4 The Ideal Gas Equation
### Key ideas
- The ideal gas equation `PV = nRT` combines Boyle’s, Charles’s, and Avogadro’s laws by introducing the gas constant R and tying pressure, volume, temperature, and amount together.
- Deviations from the ideal relation are usually tiny at moderate pressures, but engineers must account for real-gas behavior when pressures climb above ~1 MPa.
- Rearranging the ideal gas law gives practical expressions for density and molar mass, and the combined gas law lets you handle any simultaneous change in P, V, and T.

### Important formulas & their meaning
- **Ideal gas law:** `PV = nRT` (Equation 10.5). n is moles, T is absolute temperature, and R must be chosen so units match (0.08206 L·atm/mol·K or 8.314 m³·Pa/mol·K, etc.). This formula allows solving for any one variable given the others.
- **Density form:** `d = PM/RT` (Equation 10.10) gives the density of a gas in terms of molar mass M; `M = dRT/P` (Equation 10.11) enables molar mass determination from measured density, P, and T.
- **Combined gas law:** `P₁V₁/T₁ = P₂V₂/T₂` (Equation 10.8) handles simultaneous changes in P, V, and T when n is constant.

### Short example(s)
- Collecting CO₂ at 131.72 kPa and 31 °C in a 250 mL flask gives `n = PV/RT ≈ 0.013 mol` (Sample Exercise 10.4).
- A tennis ball with 144 cm³ volume filled with 0.33 g N₂ at 24 °C has a pressure found by rearranging `PV = nRT` after computing moles from mass and molar mass (Practice Exercise hint).

## 10.5 Gas Mixtures and Partial Pressures
### Key ideas
- Dalton’s law states that the total pressure of a gas mixture equals the sum of the partial pressures each component would exert alone (Equation 10.12). Each gas behaves independently.
- Mole fractions (`Xᵢ = nᵢ/n_total`) relate the amount of a component to its share of the total pressure: `Pᵢ = Xᵢ P_total` (Equation 10.16).
- Partial pressures are additive, so adding more gas increases total pressure even if composition stays the same.

### Important formulas & their meaning
- **Dalton’s law:** `P_total = Σ Pᵢ` (Equation 10.12). The partial pressure Pᵢ is found by treating each gas with the ideal gas law using its mole count.
- **Mole fraction and partial pressure:** `Pᵢ = Xᵢ P_total` where `Xᵢ = nᵢ/n_total` (Equations 10.14–10.16).

### Short example(s)
- A 15.0 L vessel at 0 °C with 6.00 g O₂ and 9.00 g CH₄ yields partial pressures `P_O₂ ≈ 28.45 kPa`, `P_CH₄ ≈ 85.19 kPa`, and total pressure ≈ 113.64 kPa (Sample Exercise 10.10).
- In a synthetic plant atmosphere (1.5% CO₂, 18.0% O₂, 80.5% Ar), the partial pressure of O₂ at 99.33 kPa total is `0.18 × 99.33 ≈ 17.88 kPa`, which then gives moles with `n = PV/RT` (Sample Exercise 10.11).

## 10.6 The Kinetic-Molecular Theory of Gases
### Key ideas
- The kinetic-molecular theory assumes random motion, negligible molecular volume and forces, and that average kinetic energy is proportional to temperature; pressure stems from molecular collisions.
- Molecular speed distributions broaden as temperature rises, with key speeds being the most probable (u_mp), average (u_av), and root-mean-square (u_rms).
- The theory explains the gas laws: increasing V at constant T reduces collision frequency (Boyle), while raising T at constant V increases molecular speed and collision force (Charles).

### Important formulas & their meaning
- **Average kinetic energy:** `KE_avg = ½ m u_rms²` and `u_rms ∝ √T` reflect how molecular motion links to temperature (Equation 10.20).
- **Ideal gas derivation:** Pressure scales with `nT/V`, so substituting `nRT/V` yields `PV = nRT` (Equation 10.19) and gives molecular perspective on the macroscopic law.

### Short example(s)
- Compressing O₂ at constant temperature leaves average kinetic energy unchanged, but collisions per unit area rise, so pressure goes up (Sample Exercise 10.12).
- Kinetic theory predicts that both u_mp and u_rms increase from about 4.0 × 10² m/s at 0 °C to 5.0 × 10² m/s at 100 °C, consistent with the shift of the Maxwell distribution (Figure 10.13).

## 10.7 Molecular Effusion and Diffusion
### Key ideas
- Graham’s law states that effusion rate is inversely proportional to the square root of molar mass: lighter gases escape faster through pinholes because their molecules move quicker (Equations 10.22–10.23).
- Diffusion describes the spread of gas molecules through a volume; collisions shorten the mean free path, slowing net progress despite high molecular speeds.
- Mean free path is inversely related to pressure: high pressure gives frequent collisions and a short path, while low pressure lengthens the path.

### Important formulas & their meaning
- **Graham’s law for effusion rates:** `r₁/r₂ = √(M₂/M₁)` (Equation 10.22) and equivalently `r ∝ u_rms`, so doubling molar mass reduces effusion rate by about 1/√2.
- **Root-mean-square speed:** `u_rms = √(3RT/M)` (Equation 10.20) shows lighter gases have higher rms speeds, explaining why helium leaks faster than argon.

### Short example(s)
- Helium effuses through tiny pores faster than argon, so helium-filled balloons lose gas more quickly (Figure 10.16).
- An unknown diatomic gas with effusion rate 0.355 × that of O₂ has molar mass `M = 32.0/0.126 ≈ 254 g/mol`, so the gas is I₂ (Sample Exercise 10.14).

## 10.8 Real Gases: Deviations from Ideal Behavior
### Key ideas
- Real gases deviate from `PV = nRT` because molecules occupy finite volume and exert intermolecular attractions; deviations grow at high pressure and low temperature.
- Plotting `PV/RT` vs. P shows values near 1 at low pressures but rising or falling once attractions or volume become significant (Figures 10.19–10.21).
- van der Waals introduced corrective constants `a` (attractions) and `b` (volume) to adjust pressure and volume so the equation matches real gases better.

### Important formulas & their meaning
- **Deviation indicator:** `PV/RT ≠ 1` for real gases (Equation 10.24); values below 1 signal attractive forces, and values above 1 signal excluded volume effects.
- **van der Waals equation:** `(P + a n²/V²)(V − nb) = nRT` (Equation 10.25). The `a` term raises P to counteract attractions, while `b` reduces V to account for finite molecular size.

### Short example(s)
- Ten moles of Cl₂ in 22.41 L at 0 °C would ideally exert 1.013 MPa, but using van der Waals constants (a = 658, b = 0.0562) gives about 908.9 kPa due to attractions dominating excluded volume (Sample Exercise 10.15).
- Nitrogen behaves more ideally at high temperatures: raising T from 200 to 1000 K reduces the negative deviation of `PV/RT` from 1 because thermal motion overcomes intermolecular attractions (Figure 10.21).
