import React from 'react';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';

interface ContextualCTAProps {
  variant: 'benefits' | 'social' | 'eligibility';
  onApplyClick: () => void;
}

const ContextualCTA: React.FC<ContextualCTAProps> = ({ variant, onApplyClick }) => {
  const getContent = () => {
    switch (variant) {
      case 'benefits':
        return {
          title: 'Ready to Experience These Benefits?',
          description: 'Start your application now and get approved in as little as 24 hours',
          buttonText: 'Get Started',
          icon: CheckCircle,
          gradient: 'from-emerald-500 to-teal-600',
          highlights: ['No hidden fees', 'Fast approval', 'Flexible terms']
        };
      case 'social':
        return {
          title: 'Join Thousands of Satisfied Customers',
          description: 'See why 75,000+ people chose us for their loan needs',
          buttonText: 'Apply Now',
          icon: Zap,
          gradient: 'from-blue-500 to-cyan-600',
          highlights: ['4.9/5 rating', 'BBB A+ rated', '98% satisfaction']
        };
      case 'eligibility':
        return {
          title: 'Check Your Eligibility Now',
          description: 'Find out if you qualify in minutes without affecting your credit score',
          buttonText: 'Check Eligibility',
          icon: ArrowRight,
          gradient: 'from-purple-500 to-indigo-600',
          highlights: ['Soft credit check', 'Instant decision', 'No obligation']
        };
    }
  };

  const content = getContent();
  const IconComponent = content.icon;

  return (
    <div className="my-12 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-200 shadow-xl">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${content.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
            <IconComponent className="h-10 w-10 text-white" />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              {content.title}
            </h3>
            <p className="text-gray-600 mb-3">
              {content.description}
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {content.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center bg-white rounded-full px-3 py-1 text-sm border border-gray-200">
                  <CheckCircle className="h-3 w-3 text-emerald-600 mr-1" />
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={onApplyClick}
              className={`group bg-gradient-to-r ${content.gradient} hover:shadow-2xl text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2`}
            >
              {content.buttonText}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextualCTA;
