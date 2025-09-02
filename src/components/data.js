export const glossary = [
  {
    term: "Qubit",
    description:
      "A qubit is the quantum version of a classical bit. Unlike bits, which can be 0 or 1, a qubit can exist in a superposition α|0⟩ + β|1⟩ where |α|² + |β|² = 1.",
    link: "https://en.wikipedia.org/wiki/Qubit"
  },
     {
    term: "Input θ (theta)",
    description:
      "θ (theta) is the polar angle on the Bloch sphere. It controls how much the qubit leans toward |0⟩ or |1⟩. θ=0° → |0⟩, θ=180° → |1⟩, θ=90° → equal superposition of |0⟩ and |1⟩.",
    link: "https://en.wikipedia.org/wiki/Bloch_sphere"
  },
  {
    term: "Input φ (phi)",
    description:
      "φ (phi) is the azimuthal angle on the Bloch sphere. It controls the relative phase between |0⟩ and |1⟩. Changing φ rotates the state around the Z-axis, affecting superpositions like |+⟩, |−⟩, |+i⟩, |−i⟩.",
    link: "https://en.wikipedia.org/wiki/Bloch_sphere"
  },
  {
    term: "Shots",
    description:
      "The number of times the qubit is measured in the computational (Z) basis. Higher shots give better statistical estimates of the probabilities of |0⟩ and |1⟩.",
    link: "https://en.wikipedia.org/wiki/Quantum_measurement"
  },
  {
    term: "State vector (Arrow)",
    description:
      "The arrow on the Bloch sphere represents the exact qubit state defined by θ and φ. Its tip points to coordinates (x, y, z) = (sinθ cosφ, sinθ sinφ, cosθ).",
    link: "https://en.wikipedia.org/wiki/Bloch_sphere"
  },
  {
    term: "Observed 0 / 1",
    description:
      "Simulated measurement results: how many times the qubit collapsed to |0⟩ or |1⟩ when measured. Probabilities match P(0)=cos²(θ/2), P(1)=sin²(θ/2).",
    link: "https://en.wikipedia.org/wiki/Quantum_measurement"
  },
  {
    term: "Amplitude α (|0⟩) and β (|1⟩)",
    description:
      "Complex numbers representing the contribution of |0⟩ and |1⟩ in the qubit state: |ψ⟩ = α|0⟩ + β|1⟩. Probabilities are |α|² and |β|².",
    link: "https://en.wikipedia.org/wiki/Qubit"
  },
  {
    term: "Density matrix ρ",
    description:
      "A mathematical representation of the qubit: ρ = |ψ⟩⟨ψ|. Encodes full quantum information, including amplitudes and coherences.",
    link: "https://en.wikipedia.org/wiki/Density_matrix"
  },
  {
    term: "Notes",
    description:
      "Global phase is omitted. The Bloch sphere provides a 3D visualization of a qubit, where the state vector shows both probability amplitudes and relative phase.",
    link: "https://en.wikipedia.org/wiki/Bloch_sphere"
  },
  {
    term: "Bloch Sphere",
    description:
      "The Bloch sphere provides a 3D representation of qubit states. Any pure qubit state is represented as a point on the sphere, defined by angles θ and φ.",
    link: "https://en.wikipedia.org/wiki/Bloch_sphere"
  },
  {
    term: "Ket Notation (|ψ⟩)",
    description:
      "Dirac's 'bra-ket' notation is a compact way to represent vectors in quantum mechanics. A ket |ψ⟩ represents a column vector describing a state.",
    link: "https://en.wikipedia.org/wiki/Bra%E2%80%93ket_notation"
  },
  {
    term: "Superposition",
    description:
      "Superposition means a quantum system can exist in multiple states at once. For a qubit, it means being partly |0⟩ and partly |1⟩ until measured.",
    link: "https://en.wikipedia.org/wiki/Quantum_superposition"
  },
  {
    term: "Amplitude (α, β)",
    description:
      "The coefficients α and β describe how much of |0⟩ and |1⟩ a qubit contains. Their magnitudes squared give measurement probabilities.",
    link: "https://en.wikipedia.org/wiki/Probability_amplitude"
  },
  {
    term: "Probability",
    description:
      "Probabilities in quantum mechanics are obtained by squaring the amplitudes: P(0) = |α|², P(1) = |β|². These always sum to 1.",
    link: "https://en.wikipedia.org/wiki/Born_rule"
  },
  {
    term: "Bloch Coordinates (x, y, z)",
    description:
      "On the Bloch sphere, a qubit state can be mapped to coordinates (x, y, z) with x = sinθ cosφ, y = sinθ sinφ, z = cosθ.",
    link: "https://en.wikipedia.org/wiki/Bloch_sphere#Mathematical_description"
  },
  {
    term: "Density Matrix",
    description:
      "The density matrix describes both pure and mixed quantum states. For pure states, ρ = |ψ⟩⟨ψ|. It is useful for describing noisy or open systems.",
    link: "https://en.wikipedia.org/wiki/Density_matrix"
  },
  {
    term: "Measurement",
    description:
      "Quantum measurement collapses a superposition into one of its basis states. The outcome probabilities follow the Born rule (|amplitude|²).",
    link: "https://en.wikipedia.org/wiki/Measurement_in_quantum_mechanics"
  },
  {
    term: "Born Rule",
    description:
      "The Born rule states that measurement probabilities are given by the squared magnitude of amplitudes. This connects abstract quantum states to real-world statistics.",
    link: "https://en.wikipedia.org/wiki/Born_rule"
  },
  {
    term: "Phase (φ)",
    description:
      "The phase determines relative oscillations between |0⟩ and |1⟩ components. While invisible in single probabilities, it impacts interference in multi-qubit systems.",
    link: "https://en.wikipedia.org/wiki/Phase_factor"
  },
  {
    term: "Polar Angle (θ)",
    description:
      "On the Bloch sphere, θ sets the balance between |0⟩ and |1⟩: P(0) = cos²(θ/2), P(1) = sin²(θ/2). θ = 0 → |0⟩, θ = π → |1⟩.",
    link: "https://en.wikipedia.org/wiki/Bloch_sphere#Mathematical_description"
  },
  {
    term: "Azimuth (φ)",
    description:
      "The azimuthal angle φ (phi) specifies rotation around the Z-axis on the Bloch sphere. It controls the relative phase between |0⟩ and |1⟩.",
    link: "https://en.wikipedia.org/wiki/Spherical_coordinate_system"
  },
  
  {
    term: "Measurement simulator(σ_z basis)",
    description:
      "section or tool being shown is likely related to a quantum computing or quantum mechanics simulator, specifically for measurements in the Pauli-Z (σ_z) basis.",
    link: "https://en.wikipedia.org/wiki/Simulation"
  },
  {
    term: "Shots",
    description:
      "Shots refers to the number of times a quantum circuit or quantum state is measured (repeated runs of the experiment) ",
      link: "https://en.wikipedia.org/wiki/Shots_Podcast_Network"
  },
  {
    term: "Observed 0:",
    description:
      "Out of 200 shots, the outcome |1⟩ was measured 46 times. The relative frequency (probability estimate) = 46 ÷ 200 = 0.230 → 23%.",
      link : "https://en.wikipedia.org/wiki/Parity_of_zero"
  },
    {
    term: "Observed 1:",
    description:
      "It is not a standard term; it suggests a user might be looking for the first Wikipedia entry on Observation or a specific observation from a previous interaction with the Wikipedia site. ",
      link : "https://en.wikipedia.org/wiki/Unit_of_observation"
  },
      {
    term: "Measure:",
    description:
      " Measure button simulates projective measurement, and the observed counts (0 and 1) show the probability distribution of outcomes after repeated measurements. ",
      link : "https://en.wikipedia.org/wiki/Measurement"
  },
];

