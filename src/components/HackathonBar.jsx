import React from 'react';
import { Award } from 'lucide-react';

export default function HackathonBar() {
  return (
    <section className="py-3 px-4 rounded-xl bg-[#6c5a49]/20 border border-[#6c5a49]/60 flex flex-wrap items-center justify-between gap-3 text-xs">
      <div className="flex items-center gap-2 text-[#c8ad55] font-mono uppercase tracking-wider shrink-0">
        <Award size={15} />
        <span>Competitive Engineering & Bootcamps:</span>
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#9bc59d]">
        <span>Smart India Hackathon (SIH 2026 & 2025)</span>
        <span className="text-[#6c5a49]">•</span>
        <span>ISRO Bharatiya Antariksh Hackathon</span>
        <span className="text-[#6c5a49]">•</span>
        <span>AICTE IDE Bootcamp (Phase II)</span>
        <span className="text-[#6c5a49]">•</span>
        <span>IIT Kharagpur KDSH</span>
      </div>
    </section>
  );
}