import React from 'react';
import { Shield, Phone, Mail, MapPin, Lock, Star, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/bear-icon.svg" alt="Cash Bear Loans" className="h-10 w-10 mr-3" />
              <span className="text-2xl font-black">Cash Bear Loans</span>
            </div>
            <p className="text-blue-200 mb-4 leading-relaxed">
              Your trusted partner for fast, transparent, and affordable installment loans.
            </p>
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 text-honey-primary fill-current mr-1" />
              ))}
              <span className="text-sm text-blue-200 ml-2">4.9/5 Rating</span>
            </div>
            {/* Social Media */}
            <div className="flex space-x-3 mt-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent-cyan rounded-full flex items-center justify-center transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent-cyan rounded-full flex items-center justify-center transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent-cyan rounded-full flex items-center justify-center transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent-cyan rounded-full flex items-center justify-center transition-all">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent-cyan">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-accent-cyan mr-3 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:18002274232" className="hover:text-accent-cyan transition-colors font-semibold">
                    1-800-CASH-BEAR-LOANS
                  </a>
                  <p className="text-xs text-blue-200">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-accent-cyan mr-3 flex-shrink-0" />
                <a href="mailto:support@cashbearloan.com" className="hover:text-accent-cyan transition-colors font-semibold">
                  support@cashbearloan.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-accent-cyan mr-3 mt-1 flex-shrink-0" />
                <div className="text-blue-200">
                  <p className="font-semibold text-white">Cash Bear Loans, LLC</p>
                  <p>2551 Interstate 45 N</p>
                  <p>Conroe, TX 77304, USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent-cyan">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#calculator" className="hover:text-accent-cyan transition-colors font-medium">Loan Calculator</a></li>
              <li><a href="#eligibility" className="hover:text-accent-cyan transition-colors font-medium">Check Eligibility</a></li>
              <li><a href="#application" className="hover:text-accent-cyan transition-colors font-medium">Apply Now</a></li>
              <li><a href="#faq" className="hover:text-accent-cyan transition-colors font-medium">FAQ</a></li>
              <li><a href="#rates" className="hover:text-accent-cyan transition-colors font-medium">Rates & Terms</a></li>
            </ul>
          </div>

          {/* Security & Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent-cyan">Security & Legal</h3>
            <div className="space-y-4">
              <div className="flex items-center bg-white/10 rounded-lg p-3">
                <Lock className="h-5 w-5 text-success-emerald mr-3 flex-shrink-0" />
                <span className="text-sm font-semibold">256-bit SSL Encryption</span>
              </div>
              <div className="text-sm space-y-2">
                <a href="#privacy" className="block hover:text-accent-cyan transition-colors font-medium">Privacy Policy</a>
                <a href="#terms" className="block hover:text-accent-cyan transition-colors font-medium">Terms & Conditions</a>
                <a href="#disclosures" className="block hover:text-accent-cyan transition-colors font-medium">Loan Disclosures</a>
                <a href="#complaints" className="block hover:text-accent-cyan transition-colors font-medium">File a Complaint</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-sm text-blue-200">
              <p className="mb-2 font-semibold text-white">
                © 2025 Cash Bear Loans, LLC. All rights reserved.
              </p>
              <p>
                Licensed lender in participating states. Loans originated by Cash Bear Loans, LLC.
              </p>
            </div>
            <div className="text-sm text-blue-200 md:text-right">
              <p className="mb-2 font-semibold text-white">
                Licensed in all participating states
              </p>
              <p>
                This website is not an offer to lend. Loan approval subject to credit review.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="bg-white/10 rounded-2xl p-6 mb-6">
            <h3 className="text-2xl font-bold mb-4 text-accent-cyan">Legal Disclaimer & Loan Terms</h3>
            <div className="text-sm text-blue-100 leading-relaxed space-y-4">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="font-bold text-base mb-2 text-white">Annual Percentage Rate (APR):</p>
                  <p>Maximum APR: 34.99%. APRs range from 5.99% to 34.99% based on creditworthiness. We do not offer loans with APR of 36% or higher to U.S. consumers.</p>
                </div>
                <div>
                  <p className="font-bold text-base mb-2 text-white">Repayment Terms:</p>
                  <p>Minimum repayment period is 61 days. Maximum repayment period is 72 months.</p>
                </div>
              </div>
              <div>
                <p className="font-bold text-base mb-2 text-white">Representative Example:</p>
                <p>If you borrow $5,000 over a 24-month term at a 21% APR, the monthly payment is $254.12. Total repayment amount: $6,098.88. This includes the principal amount plus $1,098.88 in interest and fees.</p>
              </div>
              <div>
                <p className="font-bold text-base mb-2 text-white">Physical Address:</p>
                <p>Cash Bear Loans, LLC<br/>2551 Interstate 45 N<br/>Conroe, TX 77304, United States</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Disclaimer */}
        <div className="border-t border-white/20 mt-6 pt-6">
          <div className="text-xs text-blue-200 leading-relaxed">
            <p className="mb-3">
              <strong className="text-white">Important Disclosure:</strong> The operator of this website is not a lender, loan broker, or agent for any lender or loan broker.
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
