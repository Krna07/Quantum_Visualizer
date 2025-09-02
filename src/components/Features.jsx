// src/components/Features.jsx
import React from "react";
import { Zap, Cpu, BookOpen } from "lucide-react";

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="sectionHeader">
          <h2>Features</h2>
          <p>Explore the powerful features of the Quantum State Visualizer</p>
        </div>

        <div className="featuresGrid">
          <div className="featureCard">
            <div className="featureIcon"><Zap /></div>
            <h3>Interactive Visuals</h3>
            <p>Understand quantum concepts with dynamic visualizations.</p>
          </div>

          <div className="featureCard">
            <div className="featureIcon"><Cpu /></div>
            <h3>Real Computations</h3>
            <p>Run simulations powered by quantum-inspired algorithms.</p>
          </div>

          <div className="featureCard">
            <div className="featureIcon"><BookOpen /></div>
            <h3>Glossary Support</h3>
            <p>Learn quantum terms with our integrated glossary.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
