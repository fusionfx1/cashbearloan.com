import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Heart } from 'lucide-react';
import { siteContent } from '../content/text';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = siteContent.faq.questions;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContactClick = () => {
    if ((window as any).navigateToContact) {
      (window as any).navigateToContact();
    }
  };

  return (
    <section className="py-16 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <HelpCircle className="h-12 w-12 text-blue-700" aria-hidden="true" />
          </div>
          <h2 id="faq-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Installment Loans FAQ
          </h2>
          <p className="text-base lg:text-lg text-gray-600">
            Get answers to common questions about our installment loans and application process.
          </p>
        </div>

        <div className="space-y-4" role="list">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg" role="listitem">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <h3 className="text-base font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-700 flex-shrink-0" aria-hidden="true" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-700 flex-shrink-0" aria-hidden="true" />
                )}
              </button>
              {openIndex === index && (
                <div
                  className="px-6 pb-4"
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <div className="text-gray-600 text-base leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gray-50 rounded-xl p-8">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-rose-500 mr-3" />
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">
              Still Have Questions About Installment Loans?
            </h3>
          </div>
          <p className="text-gray-600 text-base mb-6">
            Our loan specialists are here to help you understand your options and guide you through the process.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={handleContactClick}
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Contact Loan Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;