import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WarmParticleCanvas from './components/WarmParticleCanvas';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

export default function App() {
  return (
    <div className="min-h-screen relative bg-[#271f30] text-[#d0fcb3] selection:bg-[#c8ad55] selection:text-[#271f30]">
      <WarmParticleCanvas />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}