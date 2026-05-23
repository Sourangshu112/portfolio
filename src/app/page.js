"use client"

import React from "react";
import { projects } from "./projectData";
// import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  // const router = useRouter()

  return (
    // <div className="p-10 bg-lime-100 flex-1">
    //   <h2 className="text-4xl font-bold m-10">
    //     Projects
    //   </h2>
    //   <div className=" flex flex-wrap">
    //     <div className="w-100 h-100 bg-amber-500 m-5"></div>
    //     <div className="w-100 h-100 bg-amber-500 m-5"></div>
    //     <div className="w-100 h-100 bg-amber-500 m-5"></div>
    //     <div className="w-100 h-100 bg-amber-500 m-5"></div>
    //     <div className="w-100 h-100 bg-amber-500 m-5"></div>
    //   </div>
    // </div>

    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Projects
          </h1>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image Section - Shows up to 2 images side-by-side */}
              <div className="flex h-48 sm:h-64 overflow-hidden bg-gray-100">
                  <div className="flex-1 border-r border-gray-200 last:border-r-0">
                    <img 
                      src={`./${project.id}/desktop/${project.desktopImages[0]}`} 
                      alt={`${project.name} preview`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col grow">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.name}
                </h2>
                
                <p className="text-gray-600 mb-6 grow">
                  {project.smallDesc || "No description provided."}
                </p>

                {/* Tech Stack - Limits to 5 items */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 5).map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        +{project.techStack.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Call to Action Button */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link 
                    href={`/${project.id}`}
                    className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200"
                  >
                    View Project Details
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}