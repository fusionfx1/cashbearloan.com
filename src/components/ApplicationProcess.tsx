import React from 'react';
import { Clock, CheckCircle, DollarSign, Heart, Zap } from 'lucide-react';
import { siteContent } from '../content/text';

const ApplicationProcess: React.FC = () => {
  const handleApplyClick = () => {
    if ((window as any).navigateToApply) {
      (window as any).navigateToApply();
    }
  };

  const steps = siteContent.applicationProcess.steps;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-rose-500 mr-3" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-slate">
              Simple Installment Loan Process
            </h2>
          </div>
          <p className="text-base lg:text-lg text-neutral-gray max-w-2xl mx-auto">
            {siteContent.applicationProcess.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const icons = [Zap, CheckCircle, DollarSign];
            const IconComponent = icons[index];
            return (
              <div key={index} className="relative animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-blue to-accent-teal rounded-full mb-4 relative shadow-lg">
                    <IconComponent className="h-10 w-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-neutral-slate mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-gray mb-3 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-2 mb-4 text-left max-w-xs mx-auto">
                    {step.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="flex items-start text-neutral-gray text-sm">
                        <CheckCircle className="h-4 w-4 text-success-emerald mr-2 mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="inline-block bg-success-emerald/10 text-success-emerald px-3 py-1 rounded-full text-sm font-medium border border-success-emerald/20">
                    {step.time}
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full">
                    <div className="w-full border-t-2 border-dashed border-neutral-gray/30 transform translate-x-4"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-cta-gradient rounded-2xl p-8 text-white text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-rose-300 mr-3" />
            <h3 className="text-xl lg:text-2xl font-bold">Ready to Get Your Loan?</h3>
          </div>
          <p className="text-blue-100 text-base mb-6 max-w-2xl mx-auto">
            Start your application today and take the first step toward achieving your financial goals.
            Our secure process protects your information every step of the way.
          </p>
          <button
            onClick={handleApplyClick}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Start Loan Application
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;