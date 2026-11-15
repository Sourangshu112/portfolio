import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#6c5a49]/50 bg-[#271f30]/90 py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9bc59d]">
        <p>© {new Date().getFullYear()} Sourangshu Ghosh. Built with React, Vite & Tailwind CSS.</p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-[#c8ad55] transition flex items-center gap-1">
            <Github size={15} /> GitHub
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="hover:text-[#c8ad55] transition flex items-center gap-1">
            <Linkedin size={15} /> LinkedIn
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-[#c8ad55] transition flex items-center gap-1">
            <Mail size={15} /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}