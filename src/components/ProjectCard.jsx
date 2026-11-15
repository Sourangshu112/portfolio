import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group h-[310px] flex flex-col justify-between p-6 rounded-xl bg-[#6c5a49]/25 border border-[#6c5a49] hover:border-[#c8ad55] transition-all duration-200"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#271f30] text-[#c8ad55] border border-[#c8ad55]/40">
            {project.category}
          </span>
          <ArrowUpRight
            size={18}
            className="text-[#9bc59d] group-hover:text-[#c8ad55] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
          />
        </div>

        <h3 className="text-lg font-bold text-[#d0fcb3] group-hover:text-[#c8ad55] transition line-clamp-1">
          {project.title}
        </h3>

        <p className="text-sm text-[#9bc59d] line-clamp-3 leading-relaxed">
          {project.shortDescription}
        </p>
      </div>

      <div className="pt-4 border-t border-[#6c5a49]/50 flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#271f30]/90 text-[#d0fcb3]"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}