import React from 'react';
import { Clock, TrendingUp, Users, Zap, Star, CheckCircle } from 'lucide-react';

const UrgencySection: React.FC = () => {

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 text-gray-800 relative overflow-hidden">
      {/* Soft Background Effects */}
      <div className="absolute inset-0">
        {/* Gentle gradient orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full opacity-40 animate-pulse blur-2xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-r from-teal-200/30 to-cyan-200/30 rounded-full opacity-35 animate-bounce blur-xl"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-full opacity-30 animate-pulse blur-xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 sm:w-56 sm:h-56 bg-gradient-to-r from-emerald-200/30 to-green-200/30 rounded-full opacity-25 animate-bounce blur-2xl"></div>
        
        {/* Soft floating particles */}
        <div className="absolute top-1/4 left-1/2 w-2 h-2 sm:w-3 sm:w-3 bg-amber-300/60 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/5 w-1 h-1 sm:w-2 sm:h-2 bg-rose-300/60 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-cyan-300/60 rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight text-gray-800">
              Fast, Simple Approval Process
            </h2>

            {/* Factual Speed Messaging */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Application Speed */}
              <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-4 rounded-xl shadow-md">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-emerald-700 mb-2">5 Minutes</div>
                  <div className="text-gray-800 font-bold text-base mb-2">Application Process</div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Quick online form with no paperwork required
                  </p>
                </div>
              </div>

              {/* Decision Speed */}
              <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-blue-400 to-cyan-500 p-4 rounded-xl shadow-md">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-blue-700 mb-2">24 Hours</div>
                  <div className="text-gray-800 font-bold text-base mb-2">Decision Timeframe</div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Most applicants receive a decision within one business day
                  </p>
                </div>
              </div>

              {/* Funding Speed */}
              <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-4 rounded-xl shadow-md">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-amber-700 mb-2">1-2 Days</div>
                  <div className="text-gray-800 font-bold text-base mb-2">Typical Funding Time</div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Funds typically available within 1-2 business days after approval
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto">
            <div className="bg-white/85 backdrop-blur-lg rounded-2xl p-6 border border-emerald-300 shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <div className="bg-gradient-to-r from-emerald-400 to-green-500 p-3 rounded-full shadow-md mr-3">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <span className="text-xl font-bold text-emerald-700">
                    High Customer Satisfaction
                  </span>
                  <div className="flex items-center mt-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="h-3 w-3 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-800 text-sm leading-relaxed text-center font-medium">
                <span className="font-bold text-emerald-700">4.9/5 average rating</span> from over 100,000 customers nationwide
              </p>
            </div>

            <div className="bg-white/85 backdrop-blur-lg rounded-2xl p-6 border border-blue-300 shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <div className="bg-gradient-to-r from-blue-400 to-cyan-500 p-3 rounded-full shadow-md mr-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <span className="text-xl font-bold text-blue-700">
                    Trusted Lender
                  </span>
                  <div className="flex items-center mt-1">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-xs text-gray-600 ml-1">BBB A+ Rated</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-800 text-sm leading-relaxed text-center font-medium">
                Licensed lender serving customers in all 50 states
              </p>
            </div>
          </div>

          {/* Removed large competing CTA - urgency messaging only */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <p className="text-center text-gray-700 text-base sm:text-lg font-semibold bg-white/70 backdrop-blur-sm rounded-xl px-6 py-3 border border-gray-200">
              Scroll up to complete your application
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UrgencySection;