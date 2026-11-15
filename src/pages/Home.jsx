import React, { useState } from 'react';
import projectsData from '../data/projects.json';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import SkillMatrix from '../components/SkillMatrix';
import CVBuilder from '../components/CVBuilder';
import HackathonBar from '../components/HackathonBar';

const CATEGORIES = ['All', 'Mobile & Cloud', 'Desktop & Systems', 'Algorithms & Web', 'Robotics & AI'];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 py-10">
      {/* 01 // HERO (Portrait Placeholder + Chatbot UI) */}
      <HeroSection />

      {/* 02 // UNIFORM PROJECT GRID */}
      <section id="projects" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#6c5a49]/50 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#c8ad55]">
              02 // Engineering Portfolio
            </span>
            <h2 className="text-2xl font-bold text-[#d0fcb3] mt-1">Featured Projects</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  activeCategory === category
                    ? 'bg-[#c8ad55] text-[#271f30] font-semibold'
                    : 'bg-[#6c5a49]/30 text-[#9bc59d] hover:bg-[#6c5a49]/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 03 // INTERACTIVE SKILL MATRIX */}
      <SkillMatrix />

      {/* 04 // MASTER CV BUILDER (PDF ONLY) */}
      <CVBuilder projects={projectsData} />

      {/* 05 // COMPACT 1-LINE HACKATHON BAR */}
      <HackathonBar />
    </div>
  );
}