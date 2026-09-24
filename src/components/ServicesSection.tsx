import React, { useState } from 'react';
import { Home, Building2, Sparkles, Armchair, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { SERVICES_DATA, Service } from '../data/content';

interface ServicesSectionProps {
  onSelectServiceForConsult: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForConsult }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-9 h-9 stroke-[1.25]" />;
      case 'Building2':
        return <Building2 className="w-9 h-9 stroke-[1.25]" />;
      case 'Sparkles':
        return <Sparkles className="w-9 h-9 stroke-[1.25]" />;
      case 'Armchair':
        return <Armchair className="w-9 h-9 stroke-[1.25]" />;
      default:
        return <Home className="w-9 h-9 stroke-[1.25]" />;
    }
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#0B0C0F] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header with fine gold horizontal lines */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-[#D9B66F]/40" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#D9B66F] font-medium">
              WHAT WE DO
            </span>
            <span className="w-12 h-[1px] bg-[#D9B66F]/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5F1E9] tracking-tight mb-5">
            Spaces Shaped Around You
          </h2>

          <p className="text-[#B9B7B2] text-base leading-relaxed max-w-2xl mx-auto font-light">
            From the first architectural concept to the finishing details, we create environments that balance beauty, purpose, and lasting quality.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer bg-[#191B20] border border-[#D9B66F]/20 hover:border-[#D9B66F]/60 p-8 rounded-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#D9B66F]/5 relative overflow-hidden"
            >
              {/* Subtle top-right warm glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9B66F]/0 group-hover:bg-[#D9B66F]/5 rounded-bl-full transition-colors duration-500 pointer-events-none" />

              <div>
                {/* Gold Architectural Icon */}
                <div className="text-[#D9B66F] group-hover:text-[#F3D59A] transition-colors mb-8 inline-block">
                  {getIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-2xl font-normal text-[#F5F1E9] mb-4 group-hover:text-[#F3D59A] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#B9B7B2] font-light leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Text Link with Gold Arrow */}
              <div className="pt-4 border-t border-[#202228] flex items-center justify-between text-xs uppercase tracking-wider text-[#D9B66F] group-hover:text-[#F3D59A] transition-colors font-medium">
                <span>Explore {service.title.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 bg-[#0B0C0F]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#191B20] border border-[#D9B66F]/40 max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 z-20 text-[#85858A] hover:text-[#F5F1E9] p-2 bg-[#121419]/80 border border-[#D9B66F]/20 rounded-full transition-colors focus:outline-none"
              aria-label="Close service modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Service Image Banner */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191B20] via-[#191B20]/40 to-transparent" />
              <div className="absolute bottom-6 left-8 right-8">
                <span className="text-xs uppercase tracking-[0.25em] text-[#D9B66F] font-semibold">
                  Specialized Capability
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F1E9] mt-1 font-normal">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-8 sm:p-10 space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#D9B66F] font-semibold mb-2">
                  Overview &amp; Philosophy
                </h4>
                <p className="text-[#B9B7B2] text-base leading-relaxed font-light">
                  {selectedService.longDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#D9B66F] font-semibold mb-3">
                  Scope of Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-[#F5F1E9]">
                      <CheckCircle2 className="w-4 h-4 text-[#D9B66F] shrink-0 mt-0.5" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#202228] flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-6 py-3 border border-[#85858A]/30 text-xs uppercase tracking-wider text-[#B9B7B2] hover:text-[#F5F1E9] hover:border-[#F5F1E9] transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onSelectServiceForConsult(title);
                  }}
                  className="w-full sm:w-auto bg-[#D9B66F] hover:bg-[#F3D59A] text-[#0B0C0F] text-xs uppercase tracking-[0.16em] font-semibold px-8 py-3.5 flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Inquire About {selectedService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
