// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="heroContent">
        <h2>Quantum State Visualizer</h2>
        <p>Visualize, explore, and understand quantum mechanics in an interactive way.</p>
        
        <div className="heroButtons">
          <Link to="/visualizer">
            <button className="btn btnPrimary">Try Visualizer</button>
          </Link>
          <Link to="/glossary">
            <button className="btn btnSecondary">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
