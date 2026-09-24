import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { HERO_DATA } from '../data/content';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onDiscoverStudio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onDiscoverStudio
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-start overflow-hidden pt-28 pb-16"
    >
      {/* Background Cinematic Interior Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_DATA.image}
          alt="Noir & Oak contemporary luxury living room with warm architectural lighting"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
          priority-hint="high"
        />
        {/* Layered Architectural Gradient Scrims: Darkened Left for Typographic Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0F] via-[#0B0C0F]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0F] via-transparent to-[#0B0C0F]/40" />
        {/* Subtle warm golden ambient radial glow in the center-right */}
        <div className="absolute right-1/4 top-1/3 w-96 h-96 bg-[#D9B66F]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#D9B66F]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#D9B66F] font-semibold">
              {HERO_DATA.eyebrow}
            </span>
          </div>

          {/* Main Heading with Italic Second Line */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-normal leading-[1.08] text-[#F5F1E9] tracking-tight mb-8">
            {HERO_DATA.headingLine1}
            <br />
            <span className="italic font-normal text-[#F3D59A] block mt-1">
              {HERO_DATA.headingLine2}
            </span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-base sm:text-lg text-[#B9B7B2] font-light leading-relaxed max-w-xl mb-10">
            {HERO_DATA.supportingText}
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-12">
            <button
              onClick={onExploreProjects}
              className="bg-[#D9B66F] hover:bg-[#F3D59A] text-[#0B0C0F] font-semibold text-xs uppercase tracking-[0.2em] px-8 py-4 transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg shadow-[#0B0C0F]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D59A]"
            >
              <span>{HERO_DATA.primaryCta}</span>
              <ArrowRight className="w-4 h-4 text-[#0B0C0F] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onDiscoverStudio}
              className="border border-[#D9B66F]/40 hover:border-[#D9B66F] hover:bg-[#D9B66F]/10 text-[#F5F1E9] text-xs uppercase tracking-[0.2em] font-medium px-8 py-4 transition-all duration-300 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B66F]"
            >
              <span>{HERO_DATA.secondaryCta}</span>
            </button>
          </div>

          {/* Micro-copy pill/metadata unboxed */}
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-[#85858A]">
            <span>Residential</span>
            <span className="text-[#D9B66F]/60">·</span>
            <span>Commercial</span>
            <span className="text-[#D9B66F]/60">·</span>
            <span>Bespoke Interiors</span>
          </div>
        </div>
      </div>

      {/* Refined Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[#85858A] pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#85858A]/80">Scroll</span>
        <ChevronDown className="w-4 h-4 text-[#D9B66F]/70 animate-bounce" />
      </div>
    </section>
  );
};
