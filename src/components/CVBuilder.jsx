import React, { useState } from 'react';
import { FileDown, CheckSquare, Square } from 'lucide-react';

const PRESETS = [
  { id: 'all', label: 'Master CV (All 6 Projects)' },
  { id: 'fullstack', label: 'Full-Stack & Software (1-Page Track)' },
  { id: 'robotics', label: 'Robotics & Edge-AI (1-Page Track)' }
];

export default function CVBuilder({ projects }) {
  const [selectedIds, setSelectedIds] = useState(projects.map((p) => p.id));
  const [activePreset, setActivePreset] = useState('all');

  const applyPreset = (presetId) => {
    setActivePreset(presetId);
    if (presetId === 'all') {
      setSelectedIds(projects.map((p) => p.id));
    } else {
      setSelectedIds(
        projects.filter((p) => p.tracks.includes(presetId)).map((p) => p.id)
      );
    }
  };

  const toggleProject = (id) => {
    setActivePreset('custom');
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedProjects = projects.filter((p) => selectedIds.includes(p.id));

  const handleDownloadPDF = () => {
    const printWindow = window.open('', '_blank', 'width=900,height=1000');
    if (!printWindow) return;

    const projectHtml = selectedProjects
      .map(
        (p) => `
        <div style="margin-bottom: 12px;">
          <div style="display:flex; justify-content:space-between; font-weight:bold; font-size:13px;">
            <span>${p.title}</span>
            <span style="font-style:italic; font-weight:normal; font-size:11px;">${p.techStack.join(', ')}</span>
          </div>
          <ul style="margin: 4px 0 0 18px; padding:0; font-size:12px; line-height:1.45;">
            <li>${p.description.overview}</li>
            ${p.description.outcomes.map((o) => `<li>${o}</li>`).join('')}
          </ul>
        </div>`
      )
      .join('');

    printWindow.document.write(`
      <html>
        <head>
          <title>Sourangshu_Ghosh_CV</title>
          <style>
            body { font-family: Georgia, serif; color: #111; padding: 32px; max-width: 800px; margin: 0 auto; }
            h1 { margin: 0; font-size: 24px; text-align: center; }
            .sub { text-align: center; font-size: 12px; margin-bottom: 16px; }
            h2 { font-size: 13px; text-transform: uppercase; border-bottom: 1px solid #222; padding-bottom: 3px; margin-top: 16px; margin-bottom: 8px; }
            p, li { font-size: 12px; line-height: 1.45; margin: 2px 0; }
          </style>
        </head>
        <body>
          <h1>Sourangshu Ghosh</h1>
          <div class="sub">West Bengal, India | B.Tech in Electrical Engineering (Expected 2028)</div>
          <h2>Education</h2>
          <p><strong>Ghani Khan Choudhury Institute of Engineering & Technology (GKCIET)</strong> — B.Tech in Electrical Engineering (MAKAUT)</p>
          <p><strong>Higher Secondary (CBSE) & Secondary (ICSE)</strong> — West Bengal, India</p>
          <h2>Technical Skills</h2>
          <p><strong>Languages & Frameworks:</strong> Python, JavaScript (ES6+), SQL, React, React Native, Next.js, Electron, Django REST, Flask, Tailwind CSS</p>
          <p><strong>Databases, AI & Systems:</strong> PostgreSQL, SQLite, Firebase, Google OR-Tools (CP-SAT), ROS 2, Gazebo, YOLO, Socket.IO, AWS EC2, Docker</p>
          <h2>Selected Projects</h2>
          ${projectHtml}
          <h2>Hackathons & Bootcamps</h2>
          <p>Smart India Hackathon (SIH 2026 & 2025) | ISRO Bharatiya Antariksh Hackathon | AICTE IDE Bootcamp Phase II | IIT Kharagpur KDSH</p>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <section id="cv-builder" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#6c5a49]/50 pb-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#c8ad55]">
            04 // Interactive CV Customizer
          </span>
          <h2 className="text-2xl font-bold text-[#d0fcb3] mt-1">
            Tailor & Download Resume as PDF
          </h2>
        </div>

        <button
          onClick={handleDownloadPDF}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#c8ad55] text-[#271f30] font-bold text-sm hover:opacity-90 transition cursor-pointer"
        >
          <FileDown size={18} />
          <span>Download as PDF</span>
        </button>
      </div>

      {/* Role Track Presets + Project Checkboxes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 p-5 rounded-xl bg-[#6c5a49]/25 border border-[#6c5a49] space-y-5">
          <div className="space-y-2">
            <p className="text-xs font-mono uppercase text-[#c8ad55]">
              1. Choose Role Preset
            </p>
            <div className="flex flex-col gap-2">
              {PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => applyPreset(preset.id)}
                  className={`text-left px-3.5 py-2 rounded-lg text-xs font-medium transition ${
                    activePreset === preset.id
                      ? 'bg-[#c8ad55] text-[#271f30] font-bold'
                      : 'bg-[#271f30] text-[#9bc59d] hover:text-[#d0fcb3]'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-[#6c5a49]/50">
            <p className="text-xs font-mono uppercase text-[#c8ad55]">
              2. Toggle Individual Projects ({selectedProjects.length} Selected)
            </p>
            <div className="space-y-1.5">
              {projects.map((p) => {
                const checked = selectedIds.includes(p.id);
                return (
                  <button
                    key={p.id}
                    onClick={() => toggleProject(p.id)}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#271f30]/70 hover:bg-[#271f30] text-left text-xs text-[#d0fcb3] transition"
                  >
                    {checked ? (
                      <CheckSquare size={15} className="text-[#c8ad55] shrink-0" />
                    ) : (
                      <Square size={15} className="text-[#6c5a49] shrink-0" />
                    )}
                    <span className="truncate">{p.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Live CV Preview Sheet */}
        <div className="lg:col-span-7 p-6 rounded-xl bg-[#271f30] border border-[#6c5a49] space-y-4">
          <div className="border-b border-[#6c5a49] pb-3 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#d0fcb3]">Sourangshu Ghosh</h3>
              <p className="text-xs text-[#9bc59d]">
                B.Tech Electrical Engineering (GKCIET, Expected 2028) • West Bengal, India
              </p>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#6c5a49]/40 text-[#c8ad55]">
              Live PDF Preview
            </span>
          </div>

          <div className="space-y-3 max-h-[320px] overflow-y-auto pr-2">
            {selectedProjects.map((proj) => (
              <div
                key={proj.id}
                className="p-3.5 rounded-lg bg-[#6c5a49]/20 border border-[#6c5a49]/60 space-y-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-[#c8ad55]">{proj.title}</h4>
                  <span className="text-[11px] font-mono text-[#9bc59d]">
                    {proj.techStack.slice(0, 4).join(', ')}
                  </span>
                </div>
                <ul className="list-disc list-inside text-xs text-[#d0fcb3]/90 space-y-1">
                  {proj.description.outcomes.map((outcome, index) => (
                    <li key={index}>{outcome}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}