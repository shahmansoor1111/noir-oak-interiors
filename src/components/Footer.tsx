import React, { useState } from 'react';
import { ArrowUp, Instagram, Linkedin, Globe, Mail, Phone, MapPin, X } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation, onNavigate }) => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#07080A] border-t border-[#D9B66F]/15 pt-20 pb-12 relative text-left">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* 4 Columns Desktop Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#191B20]">
            {/* Column 1: Brand (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-[#D9B66F]/40 flex items-center justify-center bg-[#121419]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h4v16H4zM16 4h4v16h-4zM8 4h8l-8 16h8" stroke="#D9B66F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg tracking-[0.22em] text-[#F5F1E9] font-medium leading-tight">
                    NOIR &amp; OAK
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.28em] text-[#85858A]">
                    Interior Design Studio
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#85858A] font-light leading-relaxed max-w-sm">
                Thoughtfully designed interiors for the way you live, work, and experience space. Balancing architectural rigor, bespoke materiality, and warm comfort.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                {[
                  { name: 'Instagram', icon: <Instagram className="w-4 h-4" />, href: 'https://instagram.com' },
                  { name: 'LinkedIn', icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com' },
                  { name: 'Architecture Portal', icon: <Globe className="w-4 h-4" />, href: '#' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-[#202228] hover:border-[#D9B66F]/60 rounded-full flex items-center justify-center text-[#85858A] hover:text-[#D9B66F] transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Explore Navigation (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs uppercase tracking-[0.22em] text-[#D9B66F] font-semibold">
                Explore
              </h4>
              <ul className="space-y-2.5 text-sm">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'services', label: 'Services' },
                  { id: 'studio', label: 'Studio' },
                  { id: 'process', label: 'Process' },
                  { id: 'contact', label: 'Contact' }
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => onNavigate(link.id)}
                      className="text-[#B9B7B2] hover:text-[#F3D59A] transition-colors font-light text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs uppercase tracking-[0.22em] text-[#D9B66F] font-semibold">
                Specialties
              </h4>
              <ul className="space-y-2.5 text-sm">
                {[
                  'Residential Design',
                  'Commercial Spaces',
                  'Architectural Lighting',
                  'Furniture & Styling',
                  'Spatial Masterplanning'
                ].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => onNavigate('services')}
                      className="text-[#B9B7B2] hover:text-[#F3D59A] transition-colors font-light text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact & Consult (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs uppercase tracking-[0.22em] text-[#D9B66F] font-semibold">
                Get in Touch
              </h4>
              <div className="space-y-3 text-sm text-[#B9B7B2] font-light">
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#D9B66F] shrink-0 mt-0.5" />
                  <a href="mailto:concierge@noiroakinteriors.com" className="hover:text-[#F5F1E9] transition-colors">
                    concierge@noiroakinteriors.com
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#D9B66F] shrink-0 mt-0.5" />
                  <a href="tel:+12125550198" className="hover:text-[#F5F1E9] transition-colors">
                    +1 (212) 555-0198
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D9B66F] shrink-0 mt-0.5" />
                  <span>840 Madison Avenue, Suite 600, New York, NY 10021</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full bg-[#191B20] hover:bg-[#D9B66F] text-[#D9B66F] hover:text-[#0B0C0F] border border-[#D9B66F]/40 text-xs uppercase tracking-widest font-semibold py-3 px-4 transition-all duration-300 text-center block"
                >
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#85858A]">
            <p>
              &copy; {currentYear} Noir &amp; Oak Interiors. All rights reserved. Architectural and bespoke interior design.
            </p>

            <div className="flex items-center gap-6">
              <button
                onClick={() => setShowPrivacyModal(true)}
                className="hover:text-[#D9B66F] transition-colors"
              >
                Privacy Policy
              </button>
              <span>·</span>
              <button
                onClick={() => setShowTermsModal(true)}
                className="hover:text-[#D9B66F] transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div
          className="fixed inset-0 z-50 bg-[#0B0C0F]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setShowPrivacyModal(false)}
        >
          <div
            className="bg-[#121419] border border-[#D9B66F]/30 max-w-2xl w-full p-8 rounded-xl shadow-2xl relative max-h-[80vh] overflow-y-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-5 right-5 text-[#85858A] hover:text-[#F5F1E9]"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif text-2xl text-[#F5F1E9] mb-4">Privacy Policy</h3>
            <div className="space-y-4 text-sm text-[#B9B7B2] font-light leading-relaxed">
              <p>
                At Noir &amp; Oak Interiors, we hold your personal and architectural confidentiality in the highest regard. Any information provided through our consultation request form—including names, email addresses, property locations, and design preferences—is collected strictly for the purpose of communicating regarding design proposals and scheduling consultations.
              </p>
              <p>
                We do not sell, rent, or distribute client information to third-party marketing vendors. Client project files, floor plans, and photography are handled in strict compliance with non-disclosure and privacy protocols.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTermsModal && (
        <div
          className="fixed inset-0 z-50 bg-[#0B0C0F]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setShowTermsModal(false)}
        >
          <div
            className="bg-[#121419] border border-[#D9B66F]/30 max-w-2xl w-full p-8 rounded-xl shadow-2xl relative max-h-[80vh] overflow-y-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowTermsModal(false)}
              className="absolute top-5 right-5 text-[#85858A] hover:text-[#F5F1E9]"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif text-2xl text-[#F5F1E9] mb-4">Terms of Service</h3>
            <div className="space-y-4 text-sm text-[#B9B7B2] font-light leading-relaxed">
              <p>
                All design renderings, architectural concepts, technical drawings, and photographs displayed on this site represent intellectual work created or curated by Noir &amp; Oak Interiors.
              </p>
              <p>
                Project timelines, budget estimations, and contractor coordination discussions conducted during initial consultations are exploratory and formalized through custom written service agreements tailored to each individual commission.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
