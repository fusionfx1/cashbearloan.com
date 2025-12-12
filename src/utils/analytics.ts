// Deferred analytics loading to improve initial page load performance
// Analytics will load after the page becomes interactive

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

let analyticsLoaded = false;

export const loadAnalytics = () => {
  if (analyticsLoaded || typeof window === 'undefined') {
    return;
  }

  analyticsLoaded = true;

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  // Load Google Tag Manager script
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-3Y5RK0JLFM';

  script.onload = () => {
    window.gtag('js', new Date());
    window.gtag('config', 'G-3Y5RK0JLFM', {
      page_path: window.location.pathname,
    });
  };

  document.head.appendChild(script);
};

// Load analytics after page interactive or after 3 seconds (whichever comes first)
export const initDeferredAnalytics = () => {
  if (typeof window === 'undefined') return;

  const loadAfterInteractive = () => {
    if (document.readyState === 'complete') {
      // Page is already interactive, load after a short delay
      setTimeout(loadAnalytics, 1000);
    } else {
      // Wait for page to be fully loaded
      window.addEventListener('load', () => {
        setTimeout(loadAnalytics, 1000);
      });
    }
  };

  // Also load on user interaction (earlier than the timeout)
  const events = ['mousedown', 'touchstart', 'keydown', 'scroll'];
  const loadOnInteraction = () => {
    loadAnalytics();
    events.forEach(event => {
      document.removeEventListener(event, loadOnInteraction);
    });
  };

  events.forEach(event => {
    document.addEventListener(event, loadOnInteraction, { once: true, passive: true });
  });

  // Fallback: load after 3 seconds if no interaction
  setTimeout(loadAfterInteractive, 3000);
};
