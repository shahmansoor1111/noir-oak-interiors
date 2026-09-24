import React, { useEffect, useState } from 'react';
import { X, ArrowRight, MapPin, Calendar, Maximize2, Layers } from 'lucide-react';
import { Project } from '../data/content';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onConsultAboutProject: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onConsultAboutProject
}) => {
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (project) {
      setActiveImage(project.image);
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0B0C0F]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-[#121419] border border-[#D9B66F]/40 max-w-5xl w-full max-h-[92vh] overflow-y-auto rounded-xl shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 text-[#85858A] hover:text-[#F5F1E9] p-2.5 bg-[#0B0C0F]/80 border border-[#D9B66F]/25 rounded-full transition-colors focus:outline-none"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Showcase */}
        <div className="relative w-full h-80 sm:h-96 lg:h-[450px] overflow-hidden bg-[#0B0C0F]">
          <img
            src={activeImage || project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-opacity duration-300"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121419] via-transparent to-[#0B0C0F]/40" />

          {/* Title and Category Overlay */}
          <div className="absolute bottom-6 left-6 sm:left-10 right-6 sm:right-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D9B66F] font-semibold">
              {project.category}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F1E9] font-normal mt-1 tracking-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Gallery Thumbnails */}
        {project.gallery && project.gallery.length > 1 && (
          <div className="px-6 sm:px-10 pt-4 flex gap-3 overflow-x-auto pb-2">
            {project.gallery.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(imgUrl)}
                className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded overflow-hidden shrink-0 border-2 transition-all ${
                  activeImage === imgUrl ? 'border-[#D9B66F] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={imgUrl}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>
        )}

        {/* Modal Content */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Metadata Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-[#202228] text-xs">
            {project.location && (
              <div className="flex items-center gap-2 text-[#B9B7B2]">
                <MapPin className="w-4 h-4 text-[#D9B66F] shrink-0" />
                <span>{project.location}</span>
              </div>
            )}
            {project.year && (
              <div className="flex items-center gap-2 text-[#B9B7B2]">
                <Calendar className="w-4 h-4 text-[#D9B66F] shrink-0" />
                <span>Completed {project.year}</span>
              </div>
            )}
            {project.dimensions && (
              <div className="flex items-center gap-2 text-[#B9B7B2]">
                <Maximize2 className="w-4 h-4 text-[#D9B66F] shrink-0" />
                <span>{project.dimensions}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-[#B9B7B2]">
              <Layers className="w-4 h-4 text-[#D9B66F] shrink-0" />
              <span>Full Interior Scope</span>
            </div>
          </div>

          {/* Design Concept */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#D9B66F] font-semibold mb-3">
              Design Concept &amp; Approach
            </h3>
            <p className="text-[#F5F1E9]/90 text-base leading-relaxed font-light">
              {project.concept}
            </p>
          </div>

          {/* Materials & Finishes */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#D9B66F] font-semibold mb-3">
              Materials &amp; Finishes Palette
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.materials.map((mat, idx) => (
                <span
                  key={idx}
                  className="text-xs text-[#B9B7B2] bg-[#191B20] border border-[#D9B66F]/20 px-3 py-1.5 rounded-sm"
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Footer */}
          <div className="pt-6 border-t border-[#202228] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 border border-[#85858A]/30 text-xs uppercase tracking-wider text-[#B9B7B2] hover:text-[#F5F1E9] hover:border-[#F5F1E9] transition-colors"
            >
              Back to Portfolio
            </button>
            <button
              onClick={() => {
                const title = project.title;
                onClose();
                onConsultAboutProject(title);
              }}
              className="w-full sm:w-auto bg-[#D9B66F] hover:bg-[#F3D59A] text-[#0B0C0F] text-xs uppercase tracking-[0.18em] font-semibold px-8 py-3.5 flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#D9B66F]/10"
            >
              <span>Consult on Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
