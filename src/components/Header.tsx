import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleApply = () => {
    if ((window as any).navigateToApply) {
      (window as any).navigateToApply();
    }
  };

  return (
    <>
      <a
        href="#main-content"
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-success-emerald text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b-2 border-accent-teal/20 sticky top-0 z-50" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => (window as any).navigateToHome?.()}
            >
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 mr-3">
                <img src="/bear-icon.svg" alt="Cash Bear Loans Logo" className="w-full h-full" />
              </div>
              <div>
                <h1 className="text-lg sm:text-2xl font-black text-primary-navy">
                  Cash Bear Loans
                </h1>
                <div className="text-xs text-accent-cyan font-bold tracking-wide">Smart Lending Solutions</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" role="navigation">
              <button onClick={() => scrollToSection('benefits')} className="text-neutral-slate hover:text-primary-blue font-semibold transition-colors">
                Benefits
              </button>
              <button onClick={() => scrollToSection('calculator')} className="text-neutral-slate hover:text-primary-blue font-semibold transition-colors">
                Calculator
              </button>
              <button
                onClick={handleApply}
                className="bg-cta-gradient text-white px-6 py-3 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center"
              >
                Apply Now
                <ChevronRight className="ml-1 h-5 w-5" />
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-primary-navy hover:text-accent-cyan transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 animate-slide-up">
              <nav className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('benefits')} className="text-left text-neutral-slate hover:text-primary-blue font-semibold py-2 transition-colors">
                  Benefits
                </button>
                <button onClick={() => scrollToSection('calculator')} className="text-left text-neutral-slate hover:text-primary-blue font-semibold py-2 transition-colors">
                  Calculator
                </button>
                <button
                  onClick={handleApply}
                  className="bg-cta-gradient text-white px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center mt-2"
                >
                  Apply Now
                  <ChevronRight className="ml-1 h-5 w-5" />
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
