import React, { useState, lazy, Suspense, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import SEO from './components/SEO';
import Header from './components/Header';
import Hero from './components/Hero';
import UrgencySection from './components/UrgencySection';
import Benefits from './components/Benefits';
import SocialProof from './components/SocialProof';
import Eligibility from './components/Eligibility';
import ApplicationProcess from './components/ApplicationProcess';
import Footer from './components/Footer';
import { getOrganizationSchema, getLoanProductSchema, getWebsiteSchema } from './utils/structuredData';
import StickyBottomBar from './components/StickyBottomBar';
import FloatingCTA from './components/FloatingCTA';
import ContextualCTA from './components/ContextualCTA';
import { initDeferredAnalytics } from './utils/analytics';
import '../src/examples/testDataExample';

// Lazy load below-fold and modal components for better initial load
const LoanCalculator = lazy(() => import('./components/LoanCalculator'));
const PaymentPlans = lazy(() => import('./components/PaymentPlans'));
const TrustSection = lazy(() => import('./components/TrustSection'));
const Disclosures = lazy(() => import('./components/Disclosures'));
const FAQ = lazy(() => import('./components/FAQ'));
const QuickStartModal = lazy(() => import('./components/QuickStartModal'));
const ApplicationModal = lazy(() => import('./components/ApplicationModal'));
const SnowfallEffect = lazy(() => import('./components/SnowfallEffect'));
const StateAvailability = lazy(() => import('./components/StateAvailability'));

// Lazy load separate pages
const ApplyPage = lazy(() => import('./components/ApplyPage'));
const SupportPage = lazy(() => import('./components/SupportPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const AdvertisingDisclosure = lazy(() => import('./components/AdvertisingDisclosure'));
const TestDataDemo = lazy(() => import('./components/TestDataDemo'));

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'apply' | 'support' | 'contact' | 'disclosure' | 'testdata'>('home');
  const [showQuickStart, setShowQuickStart] = useState(false);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [loanAmount, setLoanAmount] = useState<string>('');
  const [loanPurpose, setLoanPurpose] = useState<string>('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickApply = () => {
    setShowQuickStart(true);
  };

  const handleQuickStartComplete = (amount: string, purpose: string) => {
    setLoanAmount(amount);
    setLoanPurpose(purpose);
    setShowQuickStart(false);
    setShowApplicationModal(true);
  };

  const navigateToApply = () => {
    setCurrentPage('apply');
    scrollToTop();
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  const navigateToSupport = () => {
    setCurrentPage('support');
  };

  const navigateToContact = () => {
    setCurrentPage('contact');
    scrollToTop();
  };

  const navigateToDisclosure = () => {
    setCurrentPage('disclosure');
    scrollToTop();
  };

  const navigateToTestData = () => {
    setCurrentPage('testdata');
    scrollToTop();
  };

  // Add navigation function to window for global access
  React.useEffect(() => {
    (window as any).navigateToApply = navigateToApply;
    (window as any).navigateToHome = navigateToHome;
    (window as any).navigateToSupport = navigateToSupport;
    (window as any).navigateToContact = navigateToContact;
    (window as any).navigateToDisclosure = navigateToDisclosure;
    (window as any).navigateToTestData = navigateToTestData;
  }, []);

  // Initialize deferred analytics loading
  useEffect(() => {
    initDeferredAnalytics();
  }, []);

  // Handle URL hash navigation for Google Ads Sitelinks
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.replace('#', '');

      if (!hash) return;

      // Special case: #apply opens the quick start modal
      if (hash === 'apply') {
        setTimeout(() => {
          setShowQuickStart(true);
        }, 500);
        return;
      }

      // Wait for lazy-loaded components to render
      setTimeout(() => {
        const element = document.getElementById(hash);

        if (element) {
          // Calculate offset for fixed header (approximately 80px)
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 1000);
    };

    // Handle on mount
    handleHashNavigation();

    // Handle hash changes
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  // Combine structured data for home page
  const homeStructuredData = [
    getOrganizationSchema(),
    getLoanProductSchema(),
    getWebsiteSchema()
  ];

  if (currentPage === 'apply') {
    return (
      <Suspense fallback={<div className="min-h-screen bg-light-gray flex items-center justify-center"><div className="text-primary-navy">Loading...</div></div>}>
        <SnowfallEffect />
        <ApplyPage />
        <Analytics />
        <SpeedInsights />
      </Suspense>
    );
  }

  if (currentPage === 'support') {
    return (
      <Suspense fallback={<div className="min-h-screen bg-light-gray flex items-center justify-center"><div className="text-primary-navy">Loading...</div></div>}>
        <SnowfallEffect />
        <SupportPage />
        <Analytics />
        <SpeedInsights />
      </Suspense>
    );
  }

  if (currentPage === 'contact') {
    return (
      <Suspense fallback={<div className="min-h-screen bg-light-gray flex items-center justify-center"><div className="text-primary-navy">Loading...</div></div>}>
        <SnowfallEffect />
        <ContactPage />
        <Analytics />
        <SpeedInsights />
      </Suspense>
    );
  }

  if (currentPage === 'disclosure') {
    return (
      <Suspense fallback={<div className="min-h-screen bg-light-gray flex items-center justify-center"><div className="text-primary-navy">Loading...</div></div>}>
        <SnowfallEffect />
        <AdvertisingDisclosure />
        <Analytics />
        <SpeedInsights />
      </Suspense>
    );
  }

  if (currentPage === 'testdata') {
    return (
      <Suspense fallback={<div className="min-h-screen bg-light-gray flex items-center justify-center"><div className="text-primary-navy">Loading...</div></div>}>
        <TestDataDemo />
        <Analytics />
        <SpeedInsights />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-light-gray snowflake-bg">
      <Suspense fallback={null}>
        <SnowfallEffect />
      </Suspense>
      <SEO
        title="Installment Loans - Apply Today | Cash Bear Loans"
        description="Get the installment loan you need for any purpose. Transparent terms, competitive rates, and simple application process. Apply today for your loan."
        keywords="installment loans, debt consolidation loans, home improvement loans, medical loans, emergency loans, bad credit loans, online loans"
        canonicalUrl="https://cashbearloan.com"
        ogTitle="Get Approved for $1,000-$5,000 Installment Loan Today"
        ogDescription="Fast approval, transparent terms, and competitive rates. Join 100,000+ customers who got the money they needed quickly and securely."
        structuredData={homeStructuredData}
      />
      <Header />
      <main id="main-content" role="main">
        <div id="hero">
          <Hero />
        </div>
        <div id="benefits">
          <Benefits />
        </div>
        <Suspense fallback={<div className="py-12 text-center">Loading calculator...</div>}>
          <div id="calculator">
            <LoanCalculator />
          </div>
        </Suspense>
        <div id="testimonials">
          <SocialProof />
        </div>
        <ContextualCTA variant="social" onApplyClick={handleQuickApply} />
        <Suspense fallback={<div className="py-12 text-center">Loading...</div>}>
          <div id="plans">
            <PaymentPlans />
          </div>
        </Suspense>
        <div id="eligibility">
          <Eligibility />
        </div>
        <div id="process">
          <ApplicationProcess />
        </div>
        <UrgencySection />
        <ContextualCTA variant="eligibility" onApplyClick={handleQuickApply} />
        <Suspense fallback={<div className="py-12 text-center">Loading...</div>}>
          <div id="faq">
            <FAQ />
          </div>
        </Suspense>
        <Suspense fallback={<div className="py-12 text-center">Loading...</div>}>
          <div id="trust">
            <TrustSection />
          </div>
        </Suspense>
        <Suspense fallback={<div className="py-12 text-center">Loading...</div>}>
          <div id="states">
            <StateAvailability />
          </div>
        </Suspense>
        <Suspense fallback={<div className="py-12 text-center">Loading...</div>}>
          <div id="disclosures">
            <Disclosures />
          </div>
        </Suspense>
      </main>
      <Footer />
      <FloatingCTA onApplyClick={handleQuickApply} />
      <StickyBottomBar />
      <Suspense fallback={null}>
        <QuickStartModal
          isOpen={showQuickStart}
          onClose={() => setShowQuickStart(false)}
          onComplete={handleQuickStartComplete}
        />
      </Suspense>
      <Suspense fallback={null}>
        <ApplicationModal
          isOpen={showApplicationModal}
          onClose={() => setShowApplicationModal(false)}
          initialAmount={loanAmount}
          initialPurpose={loanPurpose}
        />
      </Suspense>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;