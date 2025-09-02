import React, { useState } from "react";
import { glossary } from "./data.js";
import "./QuantumStateVisualizer.css"; 

function GlossaryItem({ term, description, link }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="section-card">
      <div
        className="section-title"
        style={{ cursor: "pointer" }}
        onClick={() => setOpen(!open)}
      >
        {term} {open ? "▼" : "▶"}
      </div>
      {open && (
        <div className="notes">
          <p>{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007bff", textDecoration: "underline" }}
          >
            🔗 Learn more on Wikipedia
          </a>
        </div>
      )}
    </div>
  );
}

export default function QuantumGlossary() {
  return (
    <div className="app-container">
      <div className="main-grid glossary-layout">
        
        {/* Left column = glossary */}
        <div className="column glossary-list">
          <h1 className="title">Quantum Glossary</h1>
          {glossary.map((item, index) => (
            <GlossaryItem
              key={index}
              term={item.term}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>

        {/* Right column = video */}
        <div className="column glossary-video">
          <div className="video-wrapper">
            <video
              src="/video1.mp4"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
        </div>

      </div>
    </div>
  );
}
