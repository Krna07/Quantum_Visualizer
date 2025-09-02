// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Atom } from "lucide-react";
import "../app.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Brand */}
        <Link to="/" className="navbarBrand">
          <Atom size={32} />
          <h1>Quantum State Visualizer</h1>
        </Link>

        {/* Desktop Nav Links */}
        <div className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/visualizer">Visualizer</Link>
          <Link to="/glossary">Glossary</Link>
        </div>

        {/* Desktop CTA */}
        <div className="navbarAction">
          <Link to={"/visualizer"} className="navbarActionButton">
            <Atom size={18} /> Try Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobileMenuButton"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="mobileMenu">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/features" onClick={() => setIsOpen(false)}>Features</Link>
          <Link to="/how-it-works" onClick={() => setIsOpen(false)}>How It Works</Link>
          <Link to="/visualizer" onClick={() => setIsOpen(false)}>Visualizer</Link>
          <Link to="/glossary" onClick={() => setIsOpen(false)}>Glossary</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
