import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, FileText, Image as ImageIcon, Video } from 'lucide-react';
import projectsData from '../data/projects.json';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold text-[#c8ad55]">Project Not Found</h2>
        <Link to="/" className="inline-flex items-center gap-2 text-[#9bc59d] hover:text-[#d0fcb3]">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      <div className="space-y-4 border-b border-[#6c5a49]/50 pb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[#9bc59d] hover:text-[#c8ad55] transition"
        >
          <ArrowLeft size={16} /> Back to All Projects
        </Link>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#c8ad55]">
              {project.category}
            </span>
            <h1 className="text-3xl font-bold text-[#d0fcb3] mt-1">{project.title}</h1>
          </div>

          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#c8ad55] text-[#271f30] font-semibold text-sm hover:opacity-90 transition"
            >
              <Github size={16} /> View Source
            </a>
          )}
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#6c5a49]/40 text-[#d0fcb3] border border-[#6c5a49]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* SECTION 1: DESCRIPTION */}
      <section className="bg-[#6c5a49]/20 border border-[#6c5a49]/60 rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 text-[#c8ad55] font-semibold text-lg">
          <FileText size={20} />
          <h2>1. Description & Architecture</h2>
        </div>
        <p className="text-[#d0fcb3]/90 leading-relaxed">{project.description.overview}</p>
        <p className="text-[#9bc59d] leading-relaxed">{project.description.architecture}</p>
        <ul className="list-disc list-inside space-y-1.5 text-sm text-[#d0fcb3]/90 pt-2">
          {project.description.outcomes.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* SECTION 2: IMAGES */}
      <section className="bg-[#6c5a49]/20 border border-[#6c5a49]/60 rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 text-[#c8ad55] font-semibold text-lg">
          <ImageIcon size={20} />
          <h2>2. Project Images & Screenshots</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.images.map((img, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden border border-[#6c5a49] bg-[#271f30]/80 flex flex-col"
            >
              <div className="h-52 flex items-center justify-center bg-[#271f30] text-[#9bc59d] text-xs font-mono p-4 text-center">
                [Placeholder: Drop screenshot at {img.url}]
              </div>
              <div className="p-3 text-xs text-[#9bc59d] border-t border-[#6c5a49]/50">
                {img.caption}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: DEMO VIDEO */}
      <section className="bg-[#6c5a49]/20 border border-[#6c5a49]/60 rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 text-[#c8ad55] font-semibold text-lg">
          <Video size={20} />
          <h2>3. Demo Video</h2>
        </div>
        {project.demoVideo?.embedUrl ? (
          <div className="aspect-video w-full rounded-lg overflow-hidden border border-[#6c5a49]">
            <iframe
              src={project.demoVideo.embedUrl}
              title={project.title}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="aspect-video w-full rounded-lg border border-dashed border-[#c8ad55]/50 bg-[#271f30]/60 flex flex-col items-center justify-center p-6 text-center">
            <Video size={32} className="text-[#c8ad55] mb-2" />
            <p className="text-sm text-[#d0fcb3]">Video Embed Placeholder</p>
            <p className="text-xs text-[#9bc59d] mt-1">{project.demoVideo?.caption}</p>
          </div>
        )}
      </section>
    </div>
  );
}