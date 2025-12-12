import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Clock, TrendingUp } from 'lucide-react';

interface FloatingCTAProps {
  onApplyClick: () => void;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ onApplyClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const [isScrollingFast, setIsScrollingFast] = useState(false);

  let lastScrollY = 0;
  let scrollTimeout: NodeJS.Timeout;

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDelta = Math.abs(currentScrollY - lastScrollY);

          setIsScrollingFast(scrollDelta > 50);

          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            setIsScrollingFast(false);
          }, 150);

          lastScrollY = currentScrollY;

          const heroSection = document.querySelector('#main-content');
          const benefitsSection = document.querySelector('#benefits');
          const testimonialsSection = document.querySelector('#testimonials');
          const footer = document.querySelector('footer');

          if (!heroSection) {
            ticking = false;
            return;
          }

          const heroBottom = heroSection.getBoundingClientRect().bottom;
          const footerTop = footer?.getBoundingClientRect().top || Infinity;
          const windowHeight = window.innerHeight;

          if (heroBottom < 0 && footerTop > windowHeight + 100) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }

          if (benefitsSection) {
            const benefitsRect = benefitsSection.getBoundingClientRect();
            if (benefitsRect.top < windowHeight / 2 && benefitsRect.bottom > windowHeight / 2) {
              setCurrentSection('benefits');
              ticking = false;
              return;
            }
          }

          if (testimonialsSection) {
            const testimonialsRect = testimonialsSection.getBoundingClientRect();
            if (testimonialsRect.top < windowHeight / 2 && testimonialsRect.bottom > windowHeight / 2) {
              setCurrentSection('testimonials');
              ticking = false;
              return;
            }
          }

          setCurrentSection('general');
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const getMessage = () => {
    switch (currentSection) {
      case 'benefits':
        return 'Get These Benefits';
      case 'testimonials':
        return 'Join 75,000+ Customers';
      default:
        return 'Apply Now';
    }
  };

  const getIcon = () => {
    switch (currentSection) {
      case 'benefits':
        return <CheckCircle className="h-5 w-5" />;
      case 'testimonials':
        return <TrendingUp className="h-5 w-5" />;
      default:
        return <ArrowRight className="h-5 w-5" />;
    }
  };

  if (!isVisible || isScrollingFast) return null;

  return (
    <div className="fixed top-20 right-4 sm:right-6 lg:right-8 z-40 animate-fade-in">
      <button
        onClick={onApplyClick}
        className="group bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-3 rounded-full font-bold text-base transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center gap-2"
      >
        <span>{getMessage()}</span>
        {getIcon()}
      </button>

      <div className="mt-2 bg-white rounded-lg shadow-lg px-4 py-2 text-xs text-gray-600 flex items-center gap-2 animate-fade-in">
        <Clock className="h-3 w-3 text-emerald-600" />
        <span className="font-semibold">5 min application</span>
      </div>
    </div>
  );
};

export default FloatingCTA;
