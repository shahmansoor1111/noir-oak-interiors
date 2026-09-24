import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { StudioSection } from './components/StudioSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { StatisticsSection } from './components/StatisticsSection';
import { ConsultationFormSection } from './components/ConsultationFormSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>();
  const [modalProject, setModalProject] = useState<string | undefined>();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenConsultation = (serviceTitle?: string, projectTitle?: string) => {
    setModalService(serviceTitle);
    setModalProject(projectTitle);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0C0F] text-[#F5F1E9] selection:bg-[#D9B66F] selection:text-[#0B0C0F] flex flex-col font-sans">
      {/* 1. Premium Navigation / Header */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      <main className="flex-grow">
        {/* 2. Cinematic Hero Section */}
        <HeroSection
          onExploreProjects={() => scrollToSection('projects')}
          onDiscoverStudio={() => scrollToSection('studio')}
        />

        {/* 3. Services Section */}
        <ServicesSection
          onSelectServiceForConsult={(serviceTitle) => handleOpenConsultation(serviceTitle)}
        />

        {/* 4. Featured Projects Portfolio */}
        <PortfolioSection
          onConsultAboutProject={(projectTitle) => handleOpenConsultation(undefined, projectTitle)}
        />

        {/* 5. Studio Introduction and Philosophy */}
        <StudioSection
          onDiscoverApproach={() => scrollToSection('process')}
        />

        {/* 6. Design Process */}
        <ProcessSection />

        {/* 7. Client Testimonials */}
        <TestimonialsSection />

        {/* 8. Achievements and Statistics */}
        <StatisticsSection />

        {/* 9 & 10. Consultation Call-To-Action & Functional Consultation Form */}
        <ConsultationFormSection
          prefilledService={modalService}
          prefilledProject={modalProject}
          onExploreWork={() => scrollToSection('projects')}
        />
      </main>

      {/* 10. Professional Footer */}
      <Footer
        onOpenConsultation={() => handleOpenConsultation()}
        onNavigate={(id) => scrollToSection(id)}
      />

      {/* Floating Scroll to Top */}
      <ScrollToTop />

      {/* Fast Direct Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setModalService(undefined);
          setModalProject(undefined);
        }}
        initialService={modalService}
        initialProject={modalProject}
      />
    </div>
  );
}
