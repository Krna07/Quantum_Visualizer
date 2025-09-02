// src/components/Footer.jsx
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import "../app.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="socialLinks">
          <a href="#"><Github /></a>
          <a href="#"><Linkedin /></a>
          <a href="#"><Twitter /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Quantum State Visualizer. All rights reserved.</p>
        <p>Created by a passionate developer.</p>
      </div>
    </footer>
  );
};

export default Footer;
