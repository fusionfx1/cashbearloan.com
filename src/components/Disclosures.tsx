import React, { useState } from 'react';
import { AlertTriangle, FileText, Lock } from 'lucide-react';
import LegalPopup from './LegalPopup';

const Disclosures: React.FC = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const openPopup = (type: string) => {
    setActivePopup(type);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <section id="disclosures-section" className="py-16 bg-light-gray" aria-labelledby="disclosures-section-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="h-12 w-12 text-primary-blue" aria-hidden="true" />
          </div>
          <h2 id="disclosures-section-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-slate mb-4">
            Important Disclosures & Transparency
          </h2>
          <p className="text-base lg:text-lg text-neutral-gray max-w-2xl mx-auto">
            We believe in complete transparency. Here's everything you need to know about our lending practices and your rights as a borrower.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-primary-blue mr-3" aria-hidden="true" />
              <h3 className="text-xl lg:text-2xl font-semibold text-neutral-slate">APR & Terms</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-neutral-slate mb-2">Annual Percentage Rate (APR)</h4>
                <p className="text-neutral-gray text-sm">
                  APR ranges from 5.99% to 34.99% depending on creditworthiness, loan amount, and term length. Maximum APR: 34.99%. We do not offer loans with APR of 36% or higher to U.S. consumers.
                  Your specific rate will be disclosed before you accept any loan offer.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-slate mb-2">Origination Fee</h4>
                <p className="text-neutral-gray text-sm">
                  Origination fees range from 0% to 8% of the loan amount and are deducted from loan proceeds.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-slate mb-2">Late Payment</h4>
                <p className="text-neutral-gray text-sm">
                  Late fees may apply if payments are not received by the due date. We'll clearly disclose all fee structures.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Lock className="h-8 w-8 text-success-emerald mr-3" aria-hidden="true" />
              <h3 className="text-xl lg:text-2xl font-semibold text-neutral-slate">Your Rights</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-neutral-slate mb-2">Truth in Lending Act (TILA)</h4>
                <p className="text-neutral-gray text-sm">
                  We comply with federal TILA requirements, providing clear disclosure of loan terms, 
                  APR, payment amounts, and total cost of credit.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-slate mb-2">Right to Cancel</h4>
                <p className="text-neutral-gray text-sm">
                  You have the right to cancel your loan within 3 business days of signing without penalty, 
                  as permitted by applicable state law.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-slate mb-2">Privacy Protection</h4>
                <p className="text-neutral-gray text-sm">
                  Your personal information is protected under our comprehensive privacy policy and federal regulations.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-8 w-8 text-warm-orange mr-3" aria-hidden="true" />
              <h3 className="text-xl lg:text-2xl font-semibold text-neutral-slate">Important Notes</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-neutral-slate mb-2">State Regulations</h4>
                <p className="text-neutral-gray text-sm">
                  Loans are subject to state-specific regulations and may not be available in all states. 
                  Terms may vary based on your state of residence.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-slate mb-2">Credit Impact</h4>
                <p className="text-neutral-gray text-sm">
                  Checking rates may result in a soft credit inquiry, which does not affect your credit score.
                  If you proceed with a full application, a hard credit inquiry will be performed, which may
                  temporarily impact your credit score.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-slate mb-2">Responsible Borrowing</h4>
                <p className="text-neutral-gray text-sm">
                  Only borrow what you can afford to repay. Consider your budget and financial situation carefully.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <div className="text-center">
            <div className="mb-4">
              <AlertTriangle className="h-8 w-8 text-amber-600 mx-auto" />
            </div>
            <h3 className="text-base font-bold text-neutral-slate mb-4">
              Important: Read Before Applying
            </h3>
            <p className="text-neutral-gray mb-4 font-medium">
              Borrowing money costs money. Only borrow what you can afford to repay. Consider all costs including APR, origination fees, and late payment penalties.
            </p>
            <p className="text-neutral-gray mb-6">
              For complete loan terms, conditions, and state-specific information, please review our full documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => openPopup('terms')}
                className="inline-flex items-center px-6 py-3 border border-primary-blue text-primary-blue rounded-lg hover:bg-primary-blue hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
                aria-describedby="terms-description"
              >
                <FileText className="h-4 w-4 mr-2" aria-hidden="true" />
                Terms & Conditions
              </button>
              <span id="terms-description" className="sr-only">Opens terms and conditions in a popup window</span>
              
              <button 
                onClick={() => openPopup('privacy')}
                className="inline-flex items-center px-6 py-3 border border-primary-blue text-primary-blue rounded-lg hover:bg-primary-blue hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
                aria-describedby="privacy-description"
              >
                <Lock className="h-4 w-4 mr-2" aria-hidden="true" />
                Privacy Policy
              </button>
              <span id="privacy-description" className="sr-only">Opens privacy policy in a popup window</span>
            </div>
          </div>
        </div>
      </div>

      {/* Popups */}
      <LegalPopup
        isOpen={activePopup === 'terms'}
        onClose={closePopup}
        type="terms"
      />
      <LegalPopup
        isOpen={activePopup === 'privacy'}
        onClose={closePopup}
        type="privacy"
      />
    </section>
  );
};

export default Disclosures;