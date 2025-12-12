import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ComplianceBannerProps {
  onNavigateToDisclosure?: () => void;
}

const ComplianceBanner: React.FC<ComplianceBannerProps> = ({ onNavigateToDisclosure }) => {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b-2 border-amber-400 sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-start gap-3 flex-1 max-w-5xl mx-auto">
            <AlertCircle className="h-7 w-7 text-amber-700 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-base lg:text-lg font-extrabold text-neutral-slate leading-tight">
                <span className="text-amber-800">REQUIRED DISCLOSURE:</span> Not a Lender - Loan Matching Service Only
              </p>
              <p className="text-sm lg:text-base text-neutral-slate mt-2 leading-tight font-semibold">
                Maximum APR: 34.99% | Repayment Terms: 61 days - 72 months | Representative Example: $5,000 loan at 21% APR for 24 months = $254.12/month, Total: $6,098.88
              </p>
              <p className="text-xs lg:text-sm text-neutral-gray mt-1 leading-tight">
                We connect consumers with licensed lenders. All terms are determined by the lender. Loans must comply with state and federal regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceBanner;
