import React from 'react';
import { CheckCircle, User, Heart } from 'lucide-react';
import { siteContent } from '../content/text';

const Eligibility: React.FC = () => {
  const handleApplyClick = () => {
    if ((window as any).navigateToApply) {
      (window as any).navigateToApply();
    }
  };

  const requirementCategories = siteContent.eligibility.requirementCategories;

  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Heart className="h-8 w-8 text-rose-500 mr-3" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-gray">
                Installment Loan Eligibility
              </h2>
            </div>
            <p className="text-base lg:text-lg text-neutral-gray mb-8 leading-relaxed">
              {siteContent.eligibility.description}
            </p>

            <div className="space-y-6">
              {requirementCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h3 className="text-lg font-bold text-neutral-slate mb-3">{category.category}</h3>
                  <div className="space-y-2 ml-2">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success-green mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-gray">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <p className="font-semibold text-neutral-gray mb-2">Important Note:</p>
              <p className="text-sm text-neutral-gray">
                Meeting these requirements does not guarantee approval. Final approval is subject to 
                credit review, income verification, and compliance with applicable lending regulations. 
                Terms and rates vary based on creditworthiness and other factors.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-6">
              <Heart className="h-12 w-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl lg:text-2xl font-semibold text-neutral-gray">
                Ready to Get Your Loan?
              </h3>
            </div>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-blue mb-2">$1,000 - $5,000</div>
                <p className="text-neutral-gray">Loan amounts available</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success-green mb-2">12 - 60 months</div>
                <p className="text-neutral-gray">Flexible payment terms</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cta-purple mb-2">5.99% - 34.99%</div>
                <p className="text-neutral-gray">APR range* (Max: 34.99%)</p>
              </div>
            </div>
            
            <button 
              onClick={handleApplyClick}
              className="w-full bg-success-green hover:bg-green-700 text-white py-4 rounded-lg font-semibold text-lg mt-6 transition-colors"
            >
              Check My Eligibility
            </button>
            
            <p className="text-xs text-neutral-gray text-center mt-4">
              *APR ranges shown are for informational purposes and may not reflect the rate you qualify for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;