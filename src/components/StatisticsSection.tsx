import React from 'react';
import { STATS_DATA } from '../data/content';

export const StatisticsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#0B0C0F] border-y border-[#D9B66F]/15 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-[#D9B66F]/20">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center p-4 lg:px-8 ${
                idx > 0 && idx % 2 === 0 ? 'pt-8 sm:pt-4' : ''
              }`}
            >
              {/* Numerical Value */}
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F1E9] font-normal tracking-tight mb-2 tabular-nums">
                <span className="text-[#F5F1E9]">{stat.value.replace('+', '').replace('%', '')}</span>
                <span className="text-[#D9B66F] font-light">{stat.suffix}</span>
              </div>

              {/* Label */}
              <div className="font-serif text-base sm:text-lg text-[#F3D59A] font-medium mb-1">
                {stat.label}
              </div>

              {/* Descriptive context */}
              <p className="text-xs text-[#85858A] font-light max-w-[220px]">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
