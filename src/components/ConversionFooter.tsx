import React from 'react';
import { Phone, Mail, ArrowRight, Clock, CheckCircle, Heart } from 'lucide-react';
import LegalLinks from './LegalLinks';

const ConversionFooter: React.FC = () => {
  const handleApplyClick = () => {
    if ((window as any).navigateToApply) {
      (window as any).navigateToApply();
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#1e3a5f] via-[#2c5282] to-[#0891b2] text-white">
      {/* Secondary CTA Section - Simplified */}
      <div className="bg-gradient-to-br from-slate-700 to-slate-800 py-12 border-t border-slate-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-blue-100 mb-6 leading-relaxed">
            Ready to get started? <strong>Fast approval process</strong> with transparent terms.
          </p>

          <div className="flex justify-center mb-6">
            <button
              onClick={handleApplyClick}
              className="group bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50 px-8 py-3 rounded-lg font-semibold text-base transition-all duration-300 flex items-center justify-center"
            >
              Back to Application
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-xs text-blue-200">
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>Fast Process</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-3 w-3 mr-1" />
              <span>Soft Credit Check</span>
            </div>
            <div className="flex items-center">
              <Heart className="h-3 w-3 mr-1" />
              <span>Customer First</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/bear-icon.svg" alt="Cash Bear Loans" className="h-8 w-8 mr-3" />
              <span className="text-xl font-bold">Cash Bear Loans</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-success-green mr-2" />
                <span>BBB A+ Rated</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-success-green mr-2" />
                <span>Licensed in 50 States</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-success-green mr-2" />
                <span>75,000+ Customers Helped</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-blue-400 mr-3" />
                <div>
                  <a href="tel:18002274232" className="hover:text-blue-400 transition-colors font-bold">
                    1-800-CASH-BEAR-LOANS
                  </a>
                  <p className="text-xs text-gray-400">7 Days a Week, 8AM-10PM EST</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-blue-400 mr-3" />
                <a href="mailto:support@cashbearloan.com" className="hover:text-blue-400 transition-colors">
                  support@cashbearloan.com
                </a>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-base font-semibold mb-4">Legal & Security</h3>
            <LegalLinks />
          </div>
        </div>

        {/* Google Ads Compliance - Legal Disclaimer Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="bg-white/10 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-white">Legal Disclaimer & Loan Terms</h3>
            <div className="text-sm text-white leading-relaxed space-y-3">
              <div>
                <p className="font-bold text-base mb-1">Annual Percentage Rate (APR):</p>
                <p>The Maximum APR is 34.99%. APRs range from 5.99% to 34.99% depending on creditworthiness.</p>
              </div>
              <div>
                <p className="font-bold text-base mb-1">Repayment Terms:</p>
                <p>Minimum repayment period is 61 days. Maximum repayment period is 72 months.</p>
              </div>
              <div>
                <p className="font-bold text-base mb-1">Representative Example:</p>
                <p>If you borrow $5,000 over a 24-month term at a 21% APR, the monthly payment is $254.12. Total repayment amount: $6,098.88. This includes the principal amount plus $1,098.88 in interest and fees.</p>
              </div>
              <div>
                <p className="font-bold text-base mb-1">Physical Address:</p>
                <p>Cash Bear Loans, LLC<br/>2551 Interstate 45 N<br/>Conroe, TX 77304, United States</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div>
              <p className="mb-2">
                © 2025 Cash Bear Loans. All rights reserved.
              </p>
            </div>
            <div className="md:text-right">
              <p className="mb-2">
                Maximum APR: 34.99%. We do not offer loans with APR ≥ 36% to U.S. consumers. Your rate depends on credit profile.
              </p>
              <p>
                This website is not an offer to lend. Approval subject to credit review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ConversionFooter;