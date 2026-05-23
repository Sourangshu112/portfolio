"use client"

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { projects } from '../projectData';

export default function ProjectDetails() {
  const params = useParams();
  const id  = params.id;

  // Prevent errors during Next.js initial hydration

  // Find the specific project
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-12 lg:p-16 max-w-screen mx-auto">
      
      {/* Top Left: Project Name & Description */}
      <div className="mb-8 md:mb-12 mt-4 md:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 md:mb-4 leading-tight">
          {project.name}
        </h1>
        {project.detailDesc && (
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            {project.detailDesc}
          </p>
        )}
      </div>

      {/* Desktop Images Row */}
      {project.desktopImages?.length > 0 && (
        <div className="mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Desktop View</h2>
          {/* Scroll container */}
          <div className="flex flex-nowrap gap-4 md:gap-6 overflow-x-auto pb-4 sm:pb-6 snap-x snap-mandatory hide-scrollbar">
            {project.desktopImages.map((img, idx) => (
              <img 
                key={idx} 
                src={`${project.id}/desktop/${img}`} 
                alt={`${project.name} desktop view ${idx + 1}`} 
                // w-[85vw] on mobile makes it fill 85% of the screen, leaving a hint of the next image!
                className="w-[85vw] sm:w-125 md:w-200 h-auto object-cover rounded-xl shadow-md border border-gray-100 shrink-0 snap-center"
              />
            ))}
          </div>
        </div>
      )}

      {/* Mobile Images Row */}
      {project.mobileImages?.length > 0 && (
        <div className="mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Mobile View</h2>
          <div className="flex flex-nowrap gap-4 md:gap-6 overflow-x-auto pb-4 sm:pb-6 snap-x snap-mandatory hide-scrollbar">
            {project.mobileImages.map((img, idx) => (
              <img 
                key={idx} 
                src={`${project.id}/mobile/${img}`} 
                alt={`${project.name} mobile view ${idx + 1}`} 
                // w-[55vw] on mobile makes them easy to swipe through
                className="w-[55vw] sm:w-62.5 md:w-75 h-auto object-cover rounded-xl shadow-md border border-gray-100 shrink-0 snap-center"
              />
            ))}
          </div>
        </div>
      )}

      {/* Tech Stack Section */}
      <div className="mb-8 md:mb-12 border-t border-gray-100 pt-6 md:pt-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {project.techStack.map((tech, idx) => (
            <span 
              key={idx} 
              // Slightly smaller text and padding on mobile
              className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-100 text-gray-800 text-xs sm:text-sm font-semibold rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      {/* flex-col on mobile stacks them, sm:flex-row puts them side-by-side on larger screens */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 md:mt-8 pb-10">
        
        {project.link && (
          <Link 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            // w-full on mobile, auto on desktop. justify-center keeps contents centered.
            className="w-full sm:w-auto justify-center px-6 md:px-8 py-3.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
          >
            Visit Live Page
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        )}

        {project.githubLink && (
          <Link 
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto justify-center px-6 md:px-8 py-3.5 sm:py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Code on GitHub
          </Link>
        )}
      </div>

    </div>
  );
}