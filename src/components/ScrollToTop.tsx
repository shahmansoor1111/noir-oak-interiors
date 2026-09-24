import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-[#121419]/90 backdrop-blur-md border border-[#D9B66F]/40 hover:border-[#D9B66F] text-[#D9B66F] hover:text-[#0B0C0F] hover:bg-[#D9B66F] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B66F]"
      aria-label="Scroll to top of page"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};
