import React, { useState } from 'react';
import skillsData from '../data/skills.json';
import { Cpu } from 'lucide-react';

export default function SkillMatrix() {
  const [selectedGroup, setSelectedGroup] = useState(skillsData[0].id);

  const currentCategory = skillsData.find((g) => g.id === selectedGroup) || skillsData[0];

  return (
    <section id="skills" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#6c5a49]/50 pb-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#c8ad55]">
            03 // Interactive Skill Matrix
          </span>
          <h2 className="text-2xl font-bold text-[#d0fcb3] mt-1">
            Technical Stack & Applied Context
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {skillsData.map((group) => (
            <button
              key={group.id}
              onClick={() => setSelectedGroup(group.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                selectedGroup === group.id
                  ? 'bg-[#c8ad55] text-[#271f30] font-semibold'
                  : 'bg-[#6c5a49]/30 text-[#9bc59d] hover:bg-[#6c5a49]/50'
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentCategory.skills.map((skill) => (
          <div
            key={skill.name}
            className="p-4 rounded-xl bg-[#6c5a49]/20 border border-[#6c5a49] hover:border-[#c8ad55] transition flex flex-col justify-between space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#d0fcb3] text-sm flex items-center gap-2">
                <Cpu size={15} className="text-[#c8ad55]" />
                {skill.name}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#271f30] text-[#c8ad55] border border-[#c8ad55]/30">
                {skill.level}
              </span>
            </div>
            <p className="text-xs text-[#9bc59d] leading-relaxed">
              {skill.context}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}