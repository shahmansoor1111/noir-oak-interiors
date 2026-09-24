import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-24 lg:py-32 bg-[#0B0C0F] relative overflow-hidden">
      {/* Subtle background ambient lighting */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D9B66F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#D9B66F]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#D9B66F] font-semibold">
              CLIENT EXPERIENCES
            </span>
            <span className="w-8 h-[1px] bg-[#D9B66F]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5F1E9] tracking-tight">
            Designed Around Real Life
          </h2>
        </div>

        {/* Testimonial Box Card */}
        <div className="bg-[#121419] border border-[#D9B66F]/25 p-8 sm:p-12 lg:p-16 rounded-2xl relative shadow-2xl">
          {/* Decorative Serif Quote Icon */}
          <div className="text-[#D9B66F]/40 mb-6">
            <Quote className="w-12 h-12 stroke-[1.25]" />
          </div>

          {/* Testimonial Quote */}
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F5F1E9] font-normal leading-[1.35] tracking-tight mb-8">
            “{current.quote}”
          </blockquote>

          {/* Attribution & Context */}
          <div className="pt-6 border-t border-[#202228] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="font-serif text-xl text-[#F3D59A] font-medium">
                {current.attribution}
              </div>
              <div className="text-xs uppercase tracking-wider text-[#85858A] mt-1 flex items-center gap-2">
                <span>{current.role}</span>
                <span>·</span>
                <span>{current.location}</span>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-3 self-end sm:self-center">
              <button
                onClick={prevTestimonial}
                className="w-11 h-11 rounded-full border border-[#D9B66F]/30 hover:border-[#D9B66F] hover:bg-[#D9B66F]/10 flex items-center justify-center text-[#F5F1E9] transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9B66F]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-11 h-11 rounded-full border border-[#D9B66F]/30 hover:border-[#D9B66F] hover:bg-[#D9B66F]/10 flex items-center justify-center text-[#F5F1E9] transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9B66F]"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  currentIndex === idx ? 'w-8 bg-[#D9B66F]' : 'w-2 bg-[#202228] hover:bg-[#85858A]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
