import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ['home', 'services', 'projects', 'studio', 'process', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0C0F]/90 backdrop-blur-md border-b border-[#D9B66F]/15 py-4 shadow-2xl'
            : 'bg-transparent border-b border-[#D9B66F]/10 py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Zone */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-3 group text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9B66F]"
            aria-label="Noir & Oak Interiors Home"
          >
            {/* Minimalist Architectural Monogram Logo */}
            <div className="w-10 h-10 border border-[#D9B66F]/40 flex items-center justify-center bg-[#121419] group-hover:border-[#D9B66F] transition-colors duration-300">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h4v16H4zM16 4h4v16h-4zM8 4h8l-8 16h8" stroke="#D9B66F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.22em] text-[#F5F1E9] font-medium group-hover:text-[#F3D59A] transition-colors leading-tight">
                NOIR &amp; OAK
              </span>
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#85858A] group-hover:text-[#D9B66F] transition-colors">
                Interior Design Studio
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links (Clean Typography) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {[
              { id: 'home', label: 'Home' },
              { id: 'services', label: 'Services' },
              { id: 'projects', label: 'Projects' },
              { id: 'studio', label: 'Studio' },
              { id: 'contact', label: 'Contact' }
            ].map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-[13px] uppercase tracking-[0.18em] transition-colors duration-200 relative py-1 focus:outline-none focus-visible:text-[#D9B66F] ${
                    isActive ? 'text-[#F3D59A]' : 'text-[#B9B7B2] hover:text-[#F5F1E9]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D9B66F]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Zone */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="bg-[#D9B66F] hover:bg-[#F3D59A] text-[#0B0C0F] text-xs uppercase tracking-[0.16em] font-semibold px-6 py-3 transition-all duration-200 flex items-center gap-2 group shadow-sm hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D59A]"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="bg-[#D9B66F] text-[#0B0C0F] text-[11px] uppercase tracking-wider font-semibold px-3 py-2"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F1E9] hover:text-[#D9B66F] border border-[#D9B66F]/20 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#0B0C0F]/95 backdrop-blur-xl flex flex-col pt-24 px-8 pb-10 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-6 text-center my-auto">
            {[
              { id: 'home', label: 'Home' },
              { id: 'services', label: 'Services' },
              { id: 'projects', label: 'Projects' },
              { id: 'studio', label: 'Studio' },
              { id: 'process', label: 'Process' },
              { id: 'contact', label: 'Contact & Inquiries' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-serif text-2xl tracking-widest text-[#F5F1E9] hover:text-[#D9B66F] transition-colors py-2 border-b border-[#191B20]"
              >
                {link.label}
              </button>
            ))}

            <div className="pt-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-[#D9B66F] hover:bg-[#F3D59A] text-[#0B0C0F] text-sm uppercase tracking-widest font-semibold py-4 flex items-center justify-center gap-2"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-4 text-xs text-[#85858A] tracking-wider">
              <span>NOIR &amp; OAK · LUXURY INTERIOR DESIGN</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
