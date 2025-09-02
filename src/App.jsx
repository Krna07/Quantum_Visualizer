// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import VisualizerPage from './pages/VisualizerPage';
import GlossaryPage from './pages/GlossaryPage';
import "./app.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="how-it-works" element={<HowItWorksPage />} />
        <Route path="visualizer" element={<VisualizerPage />} />
        <Route path="glossary" element={<GlossaryPage />} />
      </Route>
    </Routes>
  );
}

export default App;