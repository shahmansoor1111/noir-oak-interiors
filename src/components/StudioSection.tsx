import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PHILOSOPHY_PRINCIPLES } from '../data/content';

interface StudioSectionProps {
  onDiscoverApproach: () => void;
}

export const StudioSection: React.FC<StudioSectionProps> = ({ onDiscoverApproach }) => {
  return (
    <section id="studio" className="py-24 lg:py-32 bg-[#0B0C0F] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Atmospheric Architectural Detail Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-[#D9B66F]/25 p-2 bg-[#121419]">
              <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded">
                <img
                  src="/src/assets/images/studio_philosophy_detail_1790149676860.jpg"
                  alt="Noir & Oak architectural materials: honed travertine, oiled oak, and champagne brass"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-2 bg-gradient-to-t from-[#0B0C0F]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <p className="font-serif italic text-[#F3D59A] text-lg sm:text-xl">
                  “Materiality speaks before a word is spoken.”
                </p>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#85858A] mt-1 block">
                  Noir &amp; Oak Materiality Archive
                </span>
              </div>
            </div>

            {/* Subtle architectural offset accent box behind */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-[#D9B66F]/10 rounded-lg -z-10 pointer-events-none" />
          </div>

          {/* Right Column: Editorial Studio Content & Principles */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#D9B66F]" />
              <span className="text-xs uppercase tracking-[0.28em] text-[#D9B66F] font-semibold">
                OUR PHILOSOPHY
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5F1E9] tracking-tight mb-6">
              Beauty in Every Detail.
            </h2>

            {/* Paragraphs */}
            <p className="text-base sm:text-lg text-[#B9B7B2] font-light leading-relaxed mb-4">
              We believe exceptional interiors begin with understanding how people live, work, and connect. Every space we design is an opportunity to bring architecture, materials, and everyday experiences into harmony.
            </p>

            <p className="text-base text-[#85858A] font-light leading-relaxed mb-10">
              Our approach combines considered planning, tactile materials, thoughtful lighting, and timeless design principles to create interiors that feel both distinctive and deeply personal.
            </p>

            {/* Studio Principles List (Clean Editorial Numbering) */}
            <div className="space-y-6 mb-10 border-t border-[#202228] pt-8">
              {PHILOSOPHY_PRINCIPLES.map((principle) => (
                <div key={principle.number} className="flex items-start gap-5 group">
                  <span className="font-serif text-2xl text-[#D9B66F] font-light tracking-wide shrink-0">
                    {principle.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-[#F5F1E9] font-normal mb-1 group-hover:text-[#F3D59A] transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-[#B9B7B2] font-light leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={onDiscoverApproach}
                className="bg-[#D9B66F] hover:bg-[#F3D59A] text-[#0B0C0F] text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 transition-all duration-300 inline-flex items-center gap-3 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D59A]"
              >
                <span>Discover Our Approach</span>
                <ArrowRight className="w-4 h-4 text-[#0B0C0F]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
