import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, FileDown } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-[#271f30]/85 border-b border-[#6c5a49]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-[#6c5a49]/40 border border-[#c8ad55] flex items-center justify-center text-[#c8ad55]">
            <Terminal size={18} />
          </div>
          <div>
            <span className="font-bold text-[#d0fcb3] tracking-tight block leading-none">
              Sourangshu Ghosh
            </span>
            <span className="text-[11px] font-mono text-[#9bc59d]">
              Full-Stack & Systems
            </span>
          </div>
        </Link>

        {isHome ? (
          <nav className="hidden md:flex items-center gap-6 text-sm text-[#9bc59d]">
            <a href="#about" className="hover:text-[#c8ad55] transition">About</a>
            <a href="#projects" className="hover:text-[#c8ad55] transition">Projects</a>
            <a href="#skills" className="hover:text-[#c8ad55] transition">Skills</a>
            <a href="#cv-builder" className="hover:text-[#c8ad55] transition">CV Builder</a>
          </nav>
        ) : (
          <Link to="/" className="text-sm text-[#9bc59d] hover:text-[#c8ad55] transition">
            Return to Home
          </Link>
        )}

        <a
          href={isHome ? '#cv-builder' : '/#cv-builder'}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#c8ad55] text-[#271f30] font-semibold text-xs sm:text-sm hover:opacity-90 transition"
        >
          <FileDown size={16} />
          <span>Download CV</span>
        </a>
      </div>
    </header>
  );
}