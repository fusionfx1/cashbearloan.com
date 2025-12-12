import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Star, TrendingUp, Clock, DollarSign, Users, Sparkles, Heart } from 'lucide-react';
import LoanApplicationUI from './LoanApplicationUI';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-light-gray snowflake-bg text-primary-navy overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-5 w-20 h-20 sm:w-32 sm:h-32 bg-warm-orange/5 rounded-full"></div>
        <div className="absolute top-20 right-10 w-16 h-16 sm:w-24 sm:h-24 bg-success-emerald/5 rounded-full"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 sm:w-20 sm:h-20 bg-honey-primary/5 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-First Layout: Form First on Mobile, Side-by-Side on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start">

          {/* Modern Loan Application UI - Mobile First (Top), Desktop Right */}
          <div className="order-1 lg:order-2 w-full flex justify-center">
            <LoanApplicationUI />
          </div>

          {/* Content Section - Mobile Second (Bottom), Desktop Left */}
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Social Proof Stats - Rustic Theme */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 lg:gap-4">
              <div className="flex items-center frosted-glass rounded-full px-3 py-2 sm:px-4 border-2 border-warm-orange shadow-md">
                <Star className="h-4 w-4 text-warm-orange mr-2 fill-current" />
                <span className="text-sm sm:text-base font-bold text-warm-orange">4.9/5 Rating</span>
              </div>
              <div className="flex items-center frosted-glass rounded-full px-3 py-2 sm:px-4 border-2 border-success-emerald shadow-md">
                <Users className="h-4 w-4 text-success-emerald mr-2" />
                <span className="text-sm sm:text-base font-bold text-success-emerald">100,000+ Customers</span>
              </div>
              <div className="flex items-center frosted-glass rounded-full px-3 py-2 sm:px-4 border-2 border-honey-primary shadow-md">
                <CheckCircle className="h-4 w-4 text-honey-primary mr-2" />
                <span className="text-sm sm:text-base font-bold text-honey-primary">Fast Approval Process</span>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-4 mb-6 lg:mb-8">
                <p className="text-sm lg:text-base font-bold text-primary-navy">
                  Loan Marketplace - We connect you with licensed lending partners
                </p>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 lg:mb-8">
                <span className="text-primary-navy">Smart Loans from a Lender That Has Your Back.</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-orange via-sage-primary to-honey-primary">
                  Get Your Cash Fast with Transparent Terms.
                </span>
              </h1>

              <p className="text-lg lg:text-2xl text-neutral-slate font-bold leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-4">
                Life happens. Whether it's car repairs, medical bills, or consolidating debt, we're here to help. Check your rate without impacting your credit score.
              </p>
              <p className="text-base lg:text-lg text-neutral-gray leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-4">
                Fast approval. Transparent terms. Funding in 1-2 business days.
              </p>

              {/* APR Range and Representative Example - Enhanced for Google Ads Compliance */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-5 sm:p-6 border-3 border-primary-blue max-w-2xl mx-auto lg:mx-0 mb-6 lg:mb-8 shadow-xl">
                <h2 className="text-lg lg:text-xl font-bold text-primary-navy mb-4">Loan Terms</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-3 h-3 bg-success-emerald rounded-full mt-1.5 mr-3"></div>
                    <p className="text-base sm:text-lg text-neutral-slate font-bold">
                      <span className="text-success-emerald">APR Range:</span> 5.99% - 34.99% (Maximum APR: 34.99%)
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-3 h-3 bg-primary-blue rounded-full mt-1.5 mr-3"></div>
                    <p className="text-base sm:text-lg text-neutral-slate font-bold">
                      <span className="text-primary-blue">Repayment Terms:</span> 61 days - 72 months
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-3 h-3 bg-warm-orange rounded-full mt-1.5 mr-3"></div>
                    <p className="text-sm sm:text-base text-neutral-slate font-semibold">
                      <span className="font-bold">Representative Example:</span> $5,000 loan at 21% APR for 24 months = $254.12/month. Total repayment: $6,098.88 (includes $1,098.88 in interest and fees)
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-3 h-3 bg-purple-primary rounded-full mt-1.5 mr-3"></div>
                    <p className="text-sm sm:text-base text-neutral-slate font-semibold">
                      <span className="font-bold">Origination Fees:</span> 0% - 8% of loan amount (disclosed before acceptance)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-4 max-w-2xl mx-auto lg:mx-0 mb-6 lg:mb-8">
                <p className="text-sm lg:text-base text-neutral-slate font-bold leading-relaxed">
                  Checking eligibility may result in a soft credit inquiry. Lending partners determine final approval and terms.
                  We are compensated by lending partners when loans are originated.
                </p>
              </div>

              {/* Google Ads Compliance Disclaimer */}
              <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-4 max-w-2xl mx-auto lg:mx-0 mb-6 lg:mb-8">
                <p className="text-sm lg:text-base text-primary-navy font-bold leading-relaxed">
                  <span className="text-blue-700">Google Ads Compliance:</span> We do not offer or advertise personal loans with APR of 36% or higher to U.S. consumers. Maximum APR: 34.99%.
                </p>
              </div>
            </div>

            {/* Key Benefits - Rustic Earthy Theme */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              <div className="flex items-center frosted-glass rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 border-2 border-success-emerald hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-success-emerald to-sage-accent rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-light-gray" />
                </div>
                <div>
                  <div className="text-primary-navy font-bold text-base lg:text-lg">No Hidden Fees</div>
                  <div className="text-success-emerald font-bold text-sm sm:text-base">100% Transparent</div>
                </div>
              </div>

              <div className="flex items-center frosted-glass rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 border-2 border-warm-orange hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-warm-orange to-coral-accent rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-light-gray" />
                </div>
                <div>
                  <div className="text-primary-navy font-bold text-base lg:text-lg">Quick Process</div>
                  <div className="text-warm-orange font-bold text-sm sm:text-base">Apply Anytime</div>
                </div>
              </div>

              <div className="flex items-center frosted-glass rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 border-2 border-honey-primary hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-honey-primary to-sage-accent rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                  <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-primary-navy" />
                </div>
                <div>
                  <div className="text-primary-navy font-bold text-base lg:text-lg">Fast Approval Process</div>
                  <div className="text-honey-primary font-bold text-sm sm:text-base">Funds Available Quickly</div>
                </div>
              </div>

              <div className="flex items-center frosted-glass rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 border-2 border-sage-primary hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-sage-primary to-honey-primary rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                  <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-light-gray" />
                </div>
                <div>
                  <div className="text-primary-navy font-bold text-base lg:text-lg">Your Goals First</div>
                  <div className="text-sage-primary font-bold text-sm sm:text-base">Every Dollar Counts</div>
                </div>
              </div>
            </div>

            {/* Important Disclosure Section */}
            <div className="frosted-glass rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-gray-200 shadow-lg">
              <div className="text-center lg:text-left space-y-2 sm:space-y-3">
                <div className="flex items-center justify-center lg:justify-start">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-gray mr-2" />
                  <span className="text-neutral-slate font-semibold text-sm sm:text-base">APR ranges from 5.99% to 34.99%. We do not offer loans with APR ≥ 36%</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-warm-orange mr-2 fill-current" />
                  <span className="text-warm-orange font-bold text-sm sm:text-base">Trusted by 100,000+ customers nationwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
