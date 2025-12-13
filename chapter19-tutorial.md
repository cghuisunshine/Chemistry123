# Chapter 19 Tutorial — Chemical Thermodynamics

## 19.1 Spontaneous Processes
### Key ideas
- Spontaneous changes proceed without outside intervention and are directional; their reverse processes are nonspontaneous.
- Spontaneity depends on factors such as temperature and pressure; e.g., water melts above 0 °C but freezes below it.
- Differences between the system and surroundings (e.g., heat flow) determine spontaneity, but spontaneity is not directly tied to speed.

### Important formulas & their meaning
- **Reversible process:** Requires infinitesimally small changes and can be reversed without changing surroundings, while real processes are irreversible due to finite gradients.

### Short example(s)
- An egg falling and breaking is spontaneous; its reverse (reassembling) is nonspontaneous. Rusting occurs slowly yet spontaneously while the reverse is never seen.

## 19.2 Entropy and the Second Law
### Key ideas
- The second law states that for any spontaneous process the total entropy change of universe (system + surroundings) is positive: `ΔS_univ > 0`.
- Entropy is a state function measuring dispersal of energy and/or matter.
- Entropy changes depend on heat flow and temperature, so `ΔS = q_rev/T` for a reversible process.

### Important formulas & their meaning
- **Entropy change of surroundings:** `ΔS_surr = -ΔH_sys/T` because heat lost by system is gained by surroundings.
- **Second law:** `ΔS_univ = ΔS_sys + ΔS_surr ≥ 0` identifies spontaneity.

### Short example(s)
- Freezing water at 0 °C lowers system entropy (freezing orders molecules), but the heat released increases surroundings entropy, and the net change determines spontaneity depending on temperature.

## 19.3 Molecular Interpretation and Third Law
### Key ideas
- Entropy relates to the number of microstates: `S = k ln W`; more possible arrangements (higher W) mean greater entropy.
- Heating increases accessible microstates (e.g., faster molecular vibrations or more rotational states), raising entropy.
- The third law states that perfect crystalline substances at absolute zero have zero entropy because there is only one microstate.

### Important formulas & their meaning
- **Boltzmann’s equation:** `S = k ln W` links microscopic arrangements to macroscopic entropy.
- **Temperature dependence:** Entropy increases when heat is added reversibly via `ΔS = ∫ dQ_rev/T`.

### Short example(s)
- Heating a solid gradually raises entropy as vibrational amplitudes grow, eventually melting to a liquid with higher W and higher S.

## 19.4 Entropy Changes in Chemical Reactions
### Key ideas
- Reaction entropy `ΔS_rxn` can be computed from standard molar entropies: `ΔS° = Σ S°_products − Σ S°_reactants`.
- Entropy increases when gases are formed, when the number of particles increases, or when disorder increases.

### Important formulas & their meaning
- **Standard entropy change:** `ΔS°_rxn = Σ n_p S°_p − Σ n_r S°_r`. Use tabulated molar entropies.

### Short example(s)
- Formation of gases from solids (e.g., decomposition) yields large positive `ΔS` and favors spontaneity at high T.

## 19.5 Gibbs Free Energy
### Key ideas
- Gibbs free energy `G = H − TS` determines spontaneity at constant T and P; `ΔG < 0` means spontaneous.
- `ΔG` combines enthalpy and entropy; exothermic, entropy-increasing processes are strongly spontaneous.

### Important formulas & their meaning
- **Gibbs equation:** `ΔG = ΔH − TΔS`. Temperature can tip the balance between enthalpy and entropy contributions.
- **Standard free energy:** `ΔG° = −RT ln K`; positive `ΔG°` means K < 1.

### Short example(s)
- For endothermic dissolution with `ΔS > 0`, increasing temperature makes `TΔS` large enough to drive negative `ΔG` and spontaneous dissolution.

## 19.6 Free Energy and Temperature
### Key ideas
- Plotting `ΔG` vs `T` reveals temperature at which reactions become spontaneous; `ΔG = 0` at the transition temperature.
- If `ΔH` and `ΔS` are nearly constant, the slope of a `ΔG` vs `T` line is `−ΔS`.

### Important formulas & their meaning
- **Temperature dependence:** `ΔG = ΔH − TΔS` implies linear `ΔG(T)` with slope `−ΔS`; intercept at `ΔH`.

### Short example(s)
- Reaction with positive `ΔH` but even larger `ΔS` becomes spontaneous above `T = ΔH/ΔS`.

## 19.7 Free Energy and Equilibrium Constants
### Key ideas
- `ΔG° = −RT ln K` links standard free energy change to equilibrium constant; `K` quantifies equilibrium composition.
- If `ΔG° < 0`, equilibrium lies to products (K > 1); if `ΔG° > 0`, reactants favored (K < 1).

### Important formulas & their meaning
- **Equilibrium constant relation:** `K = e^{−ΔG°/(RT)}` (or `ΔG° = −RT ln K`).
- **Nonstandard free energy:** `ΔG = ΔG° + RT ln Q`, connecting reaction quotient to spontaneity away from equilibrium.

### Short example(s)
- For `ΔG° = −40 kJ/mol` at 298 K, `K ≈ e^{+16} ≈ 9 × 10⁶`, so products are heavily favored in equilibrium.
