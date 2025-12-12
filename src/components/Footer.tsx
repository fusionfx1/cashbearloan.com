import React from 'react';
import { Shield, Phone, Mail, MapPin, Lock, Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[#386641] via-[#6A994E] to-[#A7C957] text-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/bear-icon.svg" alt="Cash Bear Loans" className="h-8 w-8 mr-3" />
              <span className="text-xl font-bold">Cash Bear Loans</span>
            </div>
            <p className="text-gray-300 mb-4">
              Providing transparent and responsible installment loans to help you achieve your financial goals.
            </p>
            <div className="flex items-center mb-2">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span className="text-sm text-gray-300 ml-2">4.9/5 Customer Rating</span>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-cyan-400 mr-3" />
                <div>
                  <a href="tel:18002274232" className="hover:text-cyan-300 transition-colors">
                    1-800-CASH-BEAR-LOANS
                  </a>
                  <p className="text-xs text-gray-300">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-cyan-400 mr-3" />
                <a href="mailto:support@cashbearloan.com" className="hover:text-cyan-300 transition-colors">
                  support@cashbearloan.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-cyan-400 mr-3 mt-1" />
                <div>
                  <p>Cash Bear Loans, LLC</p>
                  <p>2551 Interstate 45 N</p>
                  <p>Conroe, TX 77304, United States</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#calculator" className="hover:text-cyan-300 transition-colors">Loan Calculator</a></li>
              <li><a href="#eligibility" className="hover:text-cyan-300 transition-colors">Check Eligibility</a></li>
              <li><a href="#application" className="hover:text-cyan-300 transition-colors">Apply Now</a></li>
              <li><a href="#faq" className="hover:text-cyan-300 transition-colors">FAQ</a></li>
              <li><a href="#rates" className="hover:text-cyan-300 transition-colors">Rates & Terms</a></li>
            </ul>
          </div>

          {/* Security & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Security & Legal</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Lock className="h-4 w-4 text-green-400 mr-2" />
                <span className="text-sm">256-bit SSL Encryption</span>
              </div>
              <div className="text-sm space-y-1">
                <a href="#privacy" className="block hover:text-cyan-300 transition-colors">Privacy Policy</a>
                <a href="#terms" className="block hover:text-cyan-300 transition-colors">Terms & Conditions</a>
                <a href="#disclosures" className="block hover:text-cyan-300 transition-colors">Loan Disclosures</a>
                <a href="#complaints" className="block hover:text-cyan-300 transition-colors">File a Complaint</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-sm text-gray-300">
              <p className="mb-2">
                © 2025 Cash Bear Loans, LLC. All rights reserved.
              </p>
              <p>
                Licensed lender in participating states. Loans originated by Cash Bear Loans, LLC.
              </p>
            </div>
            <div className="text-sm text-gray-300 md:text-right">
              <p className="mb-2">
                Licensed lender in participating states
              </p>
              <p>
                This website is not an offer to lend. Loan approval subject to credit review and verification.
              </p>
            </div>
          </div>
        </div>

        {/* Google Ads Compliance - Legal Disclaimer Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="bg-white/10 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-white">Legal Disclaimer & Loan Terms</h3>
            <div className="text-sm text-white leading-relaxed space-y-3">
              <div>
                <p className="font-bold text-base mb-1">Annual Percentage Rate (APR):</p>
                <p>The Maximum APR is 34.99%. APRs range from 5.99% to 34.99% depending on creditworthiness. We do not offer loans with APR of 36% or higher to U.S. consumers.</p>
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

        <div className="border-t border-white/20 mt-6 pt-6">
          <div className="text-xs text-gray-300 leading-relaxed">
            <p className="mb-2">
              <strong>Important Disclosure:</strong> The operator of this website is not a lender, loan broker, or agent for any lender or loan broker.
              We are an advertising referral service to qualified participating lenders that may be able to provide amounts between $1,000 and $25,000.
              Not all lenders can provide these amounts and there is no guarantee that you will be accepted by an independent, participating lender.
            </p>
            <p>
              This service does not constitute an offer or solicitation for loan products which are excluded by any state law.
              This is not a solicitation for a particular loan and is not an offer to lend. We do not endorse or charge you for any service or product.
              Any compensation received is paid by participating lenders and only for advertising services provided.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;