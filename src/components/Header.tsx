import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      <a
        href="#main-content"
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-success-emerald text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      <header className="bg-white shadow-lg border-b-4 border-warm-orange sticky top-0 z-50" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-14 sm:h-16">
            <div className="flex items-center cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => (window as any).navigateToHome?.()}>
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mr-2 sm:mr-3">
                <img src="/bear-icon.svg" alt="Cash Bear Loans Logo" className="w-full h-full" />
              </div>
              <div>
                <h1 className="text-base sm:text-xl font-bold text-primary-navy">
                  Cash Bear Loans
                </h1>
                <div className="text-xs text-neutral-gray font-medium">Fast & Transparent</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
