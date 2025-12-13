# Chapter 14 Tutorial — Chemical Kinetics

## 14.1 Factors That Affect Reaction Rates
### Key ideas
- Reaction rate measures how fast product forms or reactant disappears; it increases when molecules collide more often and with enough energy.
- Physical state, concentration, temperature, and the presence of a catalyst are the four main levers chemists use to control rate.
- More surface area (for solids) or higher concentration raises collision frequency; higher temperature raises kinetic energy; catalysts provide alternative pathways with lower activation energy.

### Important formulas & their meaning
- **Collision idea:** Rate ∝ frequency of effective collisions between reactant molecules. Raising temperature or concentration increases this frequency, which is why warming milk speeds spoilage.
- **Catalyst effect:** A catalyst doesn’t appear in the stoichiometry but lowers activation energy, so at equal temperature the rate constant `k` is larger for catalyzed pathways.

### Short example(s)
- Steel wool burns vigorously in pure O₂ because the high oxygen concentration greatly increases the collision rate, whereas the same wool burns slowly in air (20% O₂).

## 14.2 Reaction Rates
### Key ideas
- Reaction rate is the change in concentration (M) per unit time (s), usually expressed as `−Δ[A]/Δt` for reactants or `+Δ[B]/Δt` for products.
- Rates may be average over a time span or instantaneous at a single moment (tangent to concentration vs time curve).
- Stoichiometry connects rates of consumption and formation.

### Important formulas & their meaning
- **Rate expression:** `<rate> = Δ[product]/Δt` (Equation 14.1); for A → B, `rate = −Δ[A]/Δt = +Δ[B]/Δt`. Negative sign because [A] decreases.
- **Stoichiometric conversion:** Use coefficients to relate rates, e.g., `rate = −(1/2)Δ[NO₂]/Δt` if `2 NO₂ → products`.

### Short example(s)
- In an experiment following `A → B`, [A] falls from 1.00 M to 0.54 M in 20 s, so `rate = (−0.46 M)/(20 s) = −0.023 M/s` (magnitude 0.023 M/s).

## 14.3 Concentration and Rate Laws
### Key ideas
- The rate law links rate to concentrations via orders: `rate = k[A]^m[B]^n`. Orders `m` and `n` are determined experimentally, not from coefficients.
- The overall order is the sum of individual orders and influences how strongly rate responds to concentration changes.
- The rate constant `k` depends on temperature and activation energy.

### Important formulas & their meaning
- **Rate law:** `rate = k[A]^m[B]^n`. Doubling [A] doubles rate if `m = 1`, quadruples it if `m = 2`, etc.
- **Initial rates method:** `rate_initial ∝ [A]^m`; compare experiments to solve for `m` and `n`, then plug in to find `k`.

### Short example(s)
- If doubling [NO] quadruples the rate while [Cl₂] is constant, the order with respect to NO is 2; if doubling [Cl₂] doubles rate, Cl₂ is first order. The final rate law might be `rate = k[NO]^2[Cl₂]`.

## 14.4 The Change of Concentration with Time
### Key ideas
- Integrated rate laws describe how concentrations change over time: zero-order `[A]_t = [A]_0 − kt`, first-order `[A]_t = [A]_0 e^{−kt}`, second-order `1/[A]_t = 1/[A]_0 + kt`.
- Half-life `t_½` is the time for concentration to fall to half its initial value; for first-order reactions `t_½ = ln 2 / k` and is independent of `[A]_0`.
- Graphical tests of linearity (e.g., plot ln[A] vs t for first-order) help identify the correct integrated law.

### Important formulas & their meaning
- **First-order integrated law:** `[A]_t = [A]_0 e^{−kt}`; plotting `ln[A]` vs `t` gives a straight line with slope `−k`.
- **Half-life (first-order):** `t_½ = 0.693/k`, allowing quick estimation of rate constants from experimental half-lives.

### Short example(s)
- A reactant decays from 1.00 M to 0.50 M in 14.0 s with first-order kinetics, so `k = 0.693/t_½ = 0.0496 s⁻¹`; the concentration at 28 s will be 0.25 M.

## 14.5 Temperature and Rate
### Key ideas
- Raising temperature increases the rate constant `k` by giving more molecules the activation energy needed for reaction.
- The Arrhenius equation, `k = A e^{−E_a/(RT)}`, quantifies the temperature dependence, where `E_a` is activation energy and `A` is the pre-exponential factor.
- Plotting `ln k` vs `1/T` yields a straight line whose slope `−E_a/R` gives the activation energy.

### Important formulas & their meaning
- **Arrhenius equation:** `k = A e^{−E_a/(RT)}` (Equation 14.2). Higher `E_a` makes rate more sensitive to temperature changes.
- **Two-temperature form:** `ln(k₂/k₁) = −E_a/R · (1/T₂ − 1/T₁)` lets you compute `E_a` or predict rates at new temperatures.

### Short example(s)
- If `k` doubles when T increases from 300 K to 310 K, plugging into Arrhenius gives an estimate of `E_a` (~50 kJ/mol) and lets you predict rates at other temperatures.

## 14.6 Reaction Mechanisms
### Key ideas
- A reaction mechanism is a sequence of elementary steps whose sum equals the overall balanced equation.
- The slowest step (rate-determining step) controls the observed rate law; intermediate species appear in mechanisms but not in the overall equation.
- Elementary reactions follow molecularity: unimolecular (A → products), bimolecular (A + B → products), etc.

### Important formulas & their meaning
- **Rate law from mechanism:** The rate law equals the rate expression of the rate-determining elementary step; if the step involves `A + B`, then `rate ∝ [A][B]`.
- **Pre-equilibrium/steady-state:** When a fast equilibrium precedes the slow step, substitute `[intermediate]` from the equilibrium expression into rate law to obtain a rate in terms of stable species.

### Short example(s)
- In the mechanism `NO₂ + NO₂ ⇌ NO₃ + NO` (fast) followed by `NO₃ + NO → 2 NO₂` (slow), the rate law is derived from the slow step but uses the equilibrium concentration of NO₃.

## 14.7 Catalysis
### Key ideas
- Catalysts provide alternate pathways with lower activation energies, raising `k` without being consumed; they appear in the mechanism but cancel out overall.
- Homogeneous catalysts share phase with reactants (e.g., acid catalysis), while heterogeneous catalysts are solids providing surfaces for reactions.
- Enzymes are biological catalysts with high specificity; inhibitors and poisons can block active sites or alter shape.

### Important formulas & their meaning
- **Catalyst effect on Arrhenius:** Lower `E_a` increases `k` sharply since `k` depends exponentially on `−E_a/(RT)`.
- **Turnover number (qualitative):** Measures the number of times a catalyst cycles per second; high turnovers are desirable for efficient catalysis.

### Short example(s)
- Platinum catalyzes hydrogen production by adsorbing H₂ and facilitating dissociation; enzymes like sucrase lower `E_a` for sucrose hydrolysis in the gut.
