// src/components/HowItWorks.jsx
import React from "react";
import "../app.css";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="howItWorks">
      <div className="container">
        <div className="sectionHeader">
          <h2>How It Works</h2>
          <p>Follow these steps to start exploring quantum mechanics</p>
        </div>

        <div className="howItWorksContent">
          {/* Text Steps */}
          <div className="howItWorksText">
            <div className="stepCard">
              <span className="stepNumber">1</span>
              <p>Select a quantum state</p>
            </div>
            <div className="stepCard">
              <span className="stepNumber">2</span>
              <p>Visualize it in 3D</p>
            </div>
            <div className="stepCard">
              <span className="stepNumber">3</span>
              <p>Learn from glossary</p>
            </div>
          </div>

          {/* Demo Video */}
          <div className="howItWorksCard howItWorksDemo">
            <video
              src="/video1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="howItWorksVideo"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
