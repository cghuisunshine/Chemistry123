# Chapter 20 Tutorial — Electrochemistry

## 20.1 Oxidation States and Redox Reactions
### Key ideas
- Assign oxidation numbers to identify species that change oxidation state; oxidation involves losing electrons, reduction involves gaining them.
- The oxidizing agent is reduced and accepts electrons; the reducing agent is oxidized and donates electrons.
- Redox reactions underpin corrosion, batteries, and many industrial processes.

### Important formulas & their meaning
- **Half-reactions:** Separate the redox reaction into oxidation (anode) and reduction (cathode) steps with electrons explicitly shown.
- **Oxidation number rules:** Sum of oxidation states equals charge; free elements 0; O usually -2, H +1, etc.

### Short example(s)
- Zn + 2 H⁺ → Zn²⁺ + H₂: Zn is oxidized (0 to +2) reducing H⁺ (from +1 to 0). Zn metal is the reducing agent, H⁺ the oxidizing agent.

## 20.2 Balancing Redox Equations
### Key ideas
- Use half-reaction method (in acidic or basic solution) to balance electron transfer, charges, and atoms.
- Multiply half-reactions by integers so electrons cancel, then add to get the overall balanced equation.

### Important formulas & their meaning
- **Half-reaction balancing steps:** Balance atoms other than O/H, add H₂O for O, H⁺ for H, and e⁻ for charges; if basic, add OH⁻.

### Short example(s)
- MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺: Balance permanganate and iron half-reactions, multiply so electrons cancel, combine, and add spectator H₂O/H⁺.

## 20.3 Voltaic Cells
### Key ideas
- Voltaic (galvanic) cells convert spontaneous redox reactions into electric current using separate half-cells connected by salt bridge.
- Anode is negative (oxidation); cathode positive (reduction); electrons flow through external circuit.

### Important formulas & their meaning
- **Cell notation:** `Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)` places anode on left, cathode on right.
- **Electron flow:** e⁻ move from anode to cathode; salt bridge maintains charge balance by allowing ion movement.

### Short example(s)
- Daniell cell uses Zn/Zn²⁺ at anode and Cu/Cu²⁺ at cathode, producing ~1.10 V across the external circuit.

## 20.4 Standard Cell Potentials
### Key ideas
- Standard cell potential `E°_cell` is the difference between standard reduction potentials of cathode and anode: `E°_cell = E°_cathode − E°_anode`.
- Positive `E°_cell` indicates spontaneously occurring redox reaction under standard conditions (1 M, 1 atm, 25 °C).

### Important formulas & their meaning
- **E°_cell formula:** Use tables of standard reduction potentials; if you reverse a half-reaction you change the sign of its potential.
- **Additive potentials:** When combining half-reactions, add their `E°` values (after adjusting sign for oxidation if needed) to get overall cell voltage.

### Short example(s)
- Cu²⁺/Cu has `E° = +0.34 V`, Zn²⁺/Zn `E° = −0.76 V`; so `E°_cell = +0.34 − (−0.76) = +1.10 V` for Zn|Cu cell.

## 20.5 Free Energy and Redox Reactions
### Key ideas
- Relationship between `ΔG°` and `E°`: `ΔG° = −nFE°`, connecting electrochemical potential to thermodynamics.
- A positive `E°` implies negative `ΔG°` and a spontaneous reaction.

### Important formulas & their meaning
- **Faraday’s constant:** `F ≈ 96485 C/mol`; `ΔG°` in Joules relates to `E°` in volts and number of electrons transferred `n`.

### Short example(s)
- For `n = 2` and `E° = 1.10 V`, `ΔG° = −2·96485·1.10 ≈ −212 kJ`, signifying spontaneity.

## 20.6 Cell Potentials under Nonstandard Conditions
### Key ideas
- Nernst equation relates cell potential to concentrations/pressures: `E = E° − (0.0592/n) log Q` at 25 °C.
- Reaction quotient `Q` uses nonstandard concentrations; as cell discharges Q changes and E decreases.

### Important formulas & their meaning
- **Nernst equation:** `E = E° − (RT/nF) ln Q` or simplified `E = E° − (0.0592/n) log Q` in base-10.

### Short example(s)
- If `E° = 1.10 V`, `n = 2`, and `Q = 10`, then `E = 1.10 − (0.0592/2) log 10 ≈ 1.07 V`.

## 20.7 Batteries and Fuel Cells
### Key ideas
- Batteries are assemblies of voltaic cells; fuel cells continuously oxidize fuels (like H₂) using external fuel and oxidant feeds.
- Rechargeable (secondary) batteries reverse direction when external voltage is applied; primary batteries are single-use.

### Important formulas & their meaning
- **Cell stacking:** Voltages add when cells in series; capacity adds when in parallel.

### Short example(s)
- Lead-acid battery uses Pb/PbO₂ plates in H₂SO₄; combustion of H₂ in fuel cell yields water plus electricity.

## 20.8 Corrosion
### Key ideas
- Corrosion is unwanted redox, e.g., iron oxidizing to rust; occurs at anodic sites with oxygen reduction at cathodic sites.
- Prevented by coatings, galvanization, cathodic protection, or sacrificial anodes.

### Important formulas & their meaning
- **Rusting reactions:** `Fe → Fe²⁺ + 2e⁻`; `O₂ + 4H⁺ + 4e⁻ → 2H₂O`. Net reaction leads to Fe₂O₃·nH₂O.

### Short example(s)
- Galvanized steel uses Zn sacrificial anode; Zn oxidizes preferentially, protecting Fe.

## 20.9 Electrolysis
### Key ideas
- Electrolysis drives non-spontaneous redox by applying external voltage; electrons flow opposite to galvanic cells.
- Important for metal refining (e.g., Al from Al₂O₃), electroplating, and water splitting.

### Important formulas & their meaning
- **Applied voltage requirement:** Must exceed `E°_cell` for reaction; includes overpotentials.
- **Coulombic relationships:** `m = (I·t·M)/(n·F)` links current/time to moles produced/consumed.

### Short example(s)
- In molten NaCl electrolysis, chloride oxidizes at anode to Cl₂, sodium reduces at cathode; requires external power (>2.71 V).
