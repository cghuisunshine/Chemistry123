# Chapter 16 Tutorial — Statistical thermodynamics 1 the concepts

16 Statistical thermodynamics 1: the concepts The distribution of molecular Statistical thermodynamics provides the link between the microscopic properties of matter states and its bulk properties. Two key ideas are introduced in this chapter.

## 16.1 Configurations And Weights

### Key ideas
- Although the total energy is constant at E, it is not possible to be deﬁnite about how that energy is shared between the molecules.
- The problem we address in this section is the calculation of the populations of states for any type of molecule in any mode of motion at any temperature.
- The only restric- tion is that the molecules should be independent, in the sense that the total energy of the system is a sum of their individual energies.
- We are discounting (at this stage) the possibility that in a real system a contribution to the total energy may arise from interactions between molecules.
- We also adopt the principle of equal a priori prob- abilities, the assumption that all possibilities for the distribution of energy are equally probable.

### Important formulas & their meaning
- **Formula:** `take ε0, the lowest state, as the zero of energy (ε0 = 0), and measure all other energies`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `Fig. 16.2 The 18 molecules shown here can N = 18`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `multinomial coeﬃcient (see Appendix 2). W= (16.1)`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `0! = 1. the conﬁguration {N − 2,2,0, . . . }.`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `N(N − 1) . . . 1 = N! ways of selecting the balls for distribution over the bins.`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `N = 20; therefore the weight is`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.

### Short example(s)
- between the two conﬁgurations would show properties characteristic almost exclus-
- Illustration 16.1 Calculating the weight of a distribution

## 16.2 The molecular partition function

### Key ideas
- Whenever calculating a partition function, the energies of the levels are expressed relative to 0 for the state of lowest energy.
- Answer From eqn 13.31, the energy levels of a linear rotor are hcBJ(J + 1), with J = 0, 1, 2, .
- Therefore, gJ εJ ∞ 5 6 7 5 6 7 q= ∑ (2J + 1)e −βhcBJ(J+1) J=0 The sum can be evaluated numerically by supplying the value of B (from spectro- scopy or calculation) and the temperature.
- [q = 1 + 2e−βε] (a) An interpretation of the partition function 3e Some insight into the signiﬁcance of a partition function can be obtained by con- 2e sidering how q depends on the temperature.
- When T is close to zero, the parameter e β = 1/kT is close to inﬁnity.

### Important formulas & their meaning
- **Formula:** `pi = (16.7)`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `q= ∑ e−βε i`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `q= ∑ gi e−βε i`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `J = 0, 1, 2, . . . . The state of lowest energy has zero energy, so no adjustment need`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `q= ∑ (2J + 1)e −βhcBJ(J+1)`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `J=0`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.

### Short example(s)
- Example 16.1 Writing a partition function
- Self-test 16.2 Write the partition function for a two-level system, the lower state

## 16.3 The Internal Energy

### Key ideas
- The internal energy and the entropy The importance of the molecular partition function is that it contains all the informa- tion needed to calculate the thermodynamic properties of a system of independent particles.
- In this respect, q plays a role in statistical thermodynamics very similar to that played by the wavefunction in quantum mechanics: q is a kind of thermal wavefunction.
- 16.11 The total energy of a two-level This function is plotted in Fig.
- The graph at the top shows the slow rise away from zero energy at low temperatures; the slope of the graph There are several points in relation to eqn 16.29 that need to be made.
- Because at T = 0 is 0 (that is, the heat capacity is ε0 = 0 (remember that we measure all energies from the lowest available level), zero at T = 0).

### Important formulas & their meaning
- **Formula:** `E= ∑ ni εi (16.27)`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `E=`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `εi e−βεi = − e−βεi`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `∑ dβ e−βε = − q dβ ∑ e−βε = − q dβ`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `E=− i i`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `From the two-level partition function q = 1 + e−βε, we can deduce that the total`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.

### Short example(s)
- tion needed to calculate the thermodynamic properties of a system of independent
- Illustration 16.4 The energy of a two-level system

## 16.4 The Statistical Entropy

### Key ideas
- 16.4 The statistical entropy If it is true that the partition function contains all thermodynamic information, then it must be possible to use it to calculate the entropy as well as the internal energy.
- Thus, as the temperature is lowered, the value of W, and hence of S, decreases because fewer conﬁgurations are compatible with the total energy.
- In the limit T → 0, W = 1, so ln W = 0, because only one conﬁguration (every molecule in the lowest level) is compatible with E = 0.
- It follows that S → 0 as T → 0, which is compatible with the Third Law of thermodynamics, that the entropies of all perfect crystals approach the same value as T → 0 (Section 3.4).
- Is there a Self-test 16.6 Evaluate the molar entropy of N two-level systems and plot the temperature at which this coeﬃcient passes through a maximum?

### Important formulas & their meaning
- **Formula:** `U = U(0) − N B E B − E = U(0) +`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `S = k ln W [16.34]`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `because fewer conﬁgurations are compatible with the total energy. In the limit T → 0,`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `W = 1, so ln W = 0, because only one conﬁguration (every molecule in the lowest level)`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `is compatible with E = 0. It follows that S → 0 as T → 0, which is compatible with the`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `same value as T → 0 (Section 3.4).`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.

### Short example(s)
- it must be possible to use it to calculate the entropy as well as the internal energy.
- Calculate the entropy of a collection of N independent harmonic oscillators, and

## 16.5 The Canonical Ensemble

### Key ideas
- N, V, 16.5 The canonical ensemble T The crucial new concept we need when treating systems of interacting particles is the ‘ensemble’.
- All the identical closed 20 systems are regarded as being in thermal contact with one another, so they can exchange energy.
- The total energy of all the systems is L and, because they are in thermal equilibrium with one another, they all have the same temperature, T.
- This imaginary collection of replications of the actual system with a common temperature is called the canonical ensemble.
- 16.14 A representation of the canonical The word ‘canon’ means ‘according to a rule’.

### Important formulas & their meaning
- **Formula:** `single, most probable, conﬁguration. In the thermodynamic limit of Ñ → ∞, this`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `M= (16.36)`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `=`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `Q= ∑ e−βE`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `of a member is E = L/Ñ. We use this quantity to calculate the internal energy of the sys-`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `U = U(0) + E = U(0) + L/Ñ as Ñ→∞ (16.38)`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.

### Short example(s)
- example, in a gas the identities of the molecules moving slowly or quickly can change
- of a member is E = L/Ñ. We use this quantity to calculate the internal energy of the sys-

## 16.7 Independent Molecules

### Key ideas
- Therefore, instead of summing over the states i of the system, we can sum over all the individual states i of molecule 1, all the states i of molecule 2, and so on.
- Suppose that molecule 1 is in some state a, molecule 2 is in b, and molecule 3 is in c, then one member of the ensemble has an energy E = εa + εb + εc.
- This member, however, is indistinguishable from one formed by putting molecule 1 in state b, molecule 2 in state c, and molecule 3 in state a, or some other permutation.
- There are six such permutations in all, and N!
- The detailed argument is quite involved, but at all except very low temperatures it turns out that the correction factor is 1/N!.

### Important formulas & their meaning
- **Formula:** `U = U(0) − = U(0) − (16.41)`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `weight W of each member of the ensemble, M = W Ñ. Hence, we can calculate S from`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `S = k ln W = k ln M 1/Ñ = ln M (16.42)`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `S= + k ln Q (16.43)`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `Q = qN (16.44)`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.
- **Formula:** `Ei = εi(1) + εi(2) + · · · + εi(N)`. This relation links the quantities shown; treat it as a compact statement of how changing one variable constrains the others.

### Short example(s)
- weight W of each member of the ensemble, M = W Ñ. Hence, we can calculate S from
