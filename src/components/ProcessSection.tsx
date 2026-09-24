import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/content';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-24 lg:py-32 bg-[#121419] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#D9B66F]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#D9B66F] font-semibold">
              FROM VISION TO REALITY
            </span>
            <span className="w-8 h-[1px] bg-[#D9B66F]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5F1E9] tracking-tight mb-5">
            A Thoughtful Journey
          </h2>

          <p className="text-[#B9B7B2] text-base leading-relaxed max-w-2xl mx-auto font-light">
            Every successful project follows a clear, collaborative process designed to turn your ideas into a beautifully considered space.
          </p>
        </div>

        {/* Desktop 4-Step Horizontal Timeline */}
        <div className="hidden lg:block relative mb-16">
          {/* Connecting Gold Line */}
          <div className="absolute top-7 left-12 right-12 h-[1px] bg-gradient-to-r from-[#D9B66F]/10 via-[#D9B66F]/40 to-[#D9B66F]/10 -z-0" />

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer p-6 rounded-lg transition-all duration-300 bg-[#191B20] border ${
                    isSelected
                      ? 'border-[#D9B66F] shadow-xl shadow-[#D9B66F]/10 -translate-y-2'
                      : 'border-[#D9B66F]/20 hover:border-[#D9B66F]/50 hover:-translate-y-1'
                  }`}
                >
                  {/* Step Number Dot Indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl text-[#D9B66F] font-light">
                      {step.number}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-[#85858A] bg-[#121419] px-2.5 py-1 border border-[#202228]">
                      {step.timeline}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#F5F1E9] font-normal mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#B9B7B2] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden relative border-l-2 border-[#D9B66F]/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.number} className="relative group">
              {/* Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#D9B66F] border-4 border-[#121419]" />

              <div className="bg-[#191B20] border border-[#D9B66F]/20 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-serif text-2xl text-[#D9B66F] font-light">
                    {step.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#85858A]">
                    {step.timeline}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-[#F5F1E9] font-normal mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-[#B9B7B2] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
