import React, { useState } from 'react';
import { AlertCircle, X, ExternalLink } from 'lucide-react';

interface ComplianceBannerProps {
  onNavigateToDisclosure?: () => void;
}

const ComplianceBanner: React.FC<ComplianceBannerProps> = ({ onNavigateToDisclosure }) => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return null;
  }

  const handleDisclosureClick = () => {
    if (onNavigateToDisclosure) {
      onNavigateToDisclosure();
    }
  };

  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b-2 border-amber-300 sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm lg:text-base font-bold text-neutral-slate leading-tight">
                <span className="text-amber-700">Important Disclosure:</span> Not a direct lender. Marketing partner only. Maximum APR: 34.99%.
              </p>
              <p className="text-xs lg:text-sm text-neutral-gray mt-1 leading-tight">
                All partner lenders comply with Google Ads policies and state lending regulations.
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsDismissed(true)}
            className="text-neutral-gray hover:text-neutral-slate transition-colors flex-shrink-0 p-1"
            aria-label="Dismiss disclosure banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplianceBanner;
