import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/content';
import { ProjectDetailModal } from './ProjectDetailModal';

interface PortfolioSectionProps {
  onConsultAboutProject: (projectTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onConsultAboutProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [showAll, setShowAll] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['ALL', 'RESIDENTIAL', 'KITCHEN DESIGN', 'BEDROOM DESIGN', 'COMMERCIAL', 'FURNITURE & STYLING'];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (activeCategory === 'ALL') return true;
    return proj.category.toUpperCase() === activeCategory;
  });

  // If not expanded and "ALL" selected, show the 3 core featured projects; otherwise display filtered set or expanded set
  const displayedProjects = showAll || activeCategory !== 'ALL'
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#121419] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#D9B66F]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#D9B66F] font-semibold">
              SELECTED WORK
            </span>
            <span className="w-8 h-[1px] bg-[#D9B66F]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5F1E9] tracking-tight mb-5">
            Spaces Worth Experiencing
          </h2>

          <p className="text-[#B9B7B2] text-base leading-relaxed max-w-2xl mx-auto font-light">
            A collection of thoughtfully designed interiors, each shaped by its architecture, its materials, and the people who inhabit it.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAll(true);
                }}
                className={`text-xs uppercase tracking-widest px-4 py-2 rounded-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-[#D9B66F] text-[#0B0C0F] font-semibold shadow-md'
                    : 'bg-[#191B20] text-[#B9B7B2] hover:text-[#F5F1E9] border border-[#D9B66F]/15 hover:border-[#D9B66F]/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 3-Column Desktop Grid for Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-[#191B20] border border-[#D9B66F]/15 hover:border-[#D9B66F]/50 rounded-xl overflow-hidden transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#D9B66F]/5"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0B0C0F]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191B20] via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Subtle category tag top-left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] uppercase tracking-[0.24em] text-[#F5F1E9] bg-[#0B0C0F]/80 backdrop-blur-sm border border-[#D9B66F]/30 px-3 py-1 font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-[#F5F1E9] mb-3 group-hover:text-[#F3D59A] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#B9B7B2] font-light leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#202228] flex items-center justify-between text-xs uppercase tracking-wider text-[#D9B66F] group-hover:text-[#F3D59A] font-medium">
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects / Toggle Expanded CTA */}
        {activeCategory === 'ALL' && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 border border-[#D9B66F]/40 hover:border-[#D9B66F] hover:bg-[#D9B66F]/10 text-[#F5F1E9] hover:text-[#F3D59A] text-xs uppercase tracking-[0.22em] font-medium px-8 py-4 transition-all duration-300"
            >
              <span>{showAll ? 'Show Fewer Projects' : 'View All Projects'}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onConsultAboutProject={onConsultAboutProject}
      />
    </section>
  );
};
