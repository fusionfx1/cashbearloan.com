import React from 'react';
import { ArrowRight, CheckCircle, Star, TrendingUp, Clock, DollarSign, Users, Shield, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const handleQuickApply = () => {
    if ((window as any).navigateToApply) {
      (window as any).navigateToApply();
    }
  };

  return (
    <section className="relative bg-hero-gradient text-white overflow-hidden py-16 sm:py-20 lg:py-28">
      {/* Modern Geometric Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-primary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-warm-orange rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Hero Content */}
        <div className="text-center max-w-5xl mx-auto space-y-8 lg:space-y-12">

          {/* Primary Trust Badge - Above Headline */}
          <div className="flex items-center justify-center gap-2 animate-fadeInUp">
            <div className="flex items-center bg-gradient-to-r from-honey-primary to-warm-amber rounded-full px-6 py-3 shadow-2xl border-2 border-honey-primary/30">
              <div className="flex gap-0.5 mr-3">
                <Star className="h-5 w-5 text-white fill-current" />
                <Star className="h-5 w-5 text-white fill-current" />
                <Star className="h-5 w-5 text-white fill-current" />
                <Star className="h-5 w-5 text-white fill-current" />
                <Star className="h-5 w-5 text-white fill-current" />
              </div>
              <span className="text-base sm:text-lg font-bold text-white">Trusted by 17,000+ Pet Owners</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-6 animate-fadeInUp">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              Instant Payment Plans for
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-warm-orange via-honey-primary to-accent-cyan">
                Your Pet's Veterinary Care
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 font-medium leading-relaxed max-w-3xl mx-auto">
              Split your vet bill into simple monthly payments. 0% interest options available.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-3 animate-fadeInUp">
            <button
              onClick={handleQuickApply}
              className="group bg-cta-gradient text-white px-12 py-5 sm:px-14 sm:py-6 rounded-full text-xl sm:text-2xl font-bold hover:shadow-2xl hover:shadow-warm-orange/50 hover:scale-105 transition-all duration-300 flex items-center"
            >
              Check Your Rate
              <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm sm:text-base text-blue-200 font-medium">
              Checking eligibility will NOT affect your credit score.
            </p>
          </div>

          {/* Secondary Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Shield className="h-5 w-5 text-success-emerald mr-2" />
              <span className="text-sm sm:text-base font-bold">Bank-Level Security</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Zap className="h-5 w-5 text-honey-primary mr-2" />
              <span className="text-sm sm:text-base font-bold">Instant Approval</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <CheckCircle className="h-5 w-5 text-accent-cyan mr-2" />
              <span className="text-sm sm:text-base font-bold">No Hidden Fees</span>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 animate-fadeInUp">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="bg-gradient-to-br from-success-emerald to-sage-accent rounded-xl p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">No Hidden Fees</h3>
              <p className="text-blue-100 text-sm">Transparent pricing with no surprises. What you see is what you get.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="bg-gradient-to-br from-warm-orange to-coral-accent rounded-xl p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Decision</h3>
              <p className="text-blue-100 text-sm">Get approved in minutes with our streamlined application process.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="bg-gradient-to-br from-accent-cyan to-turquoise-light rounded-xl p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Terms</h3>
              <p className="text-blue-100 text-sm">Choose repayment terms that work for your budget and lifestyle.</p>
            </div>
          </div>

          {/* APR Disclosure */}
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 sm:p-8 border-2 border-white/40 text-left max-w-4xl mx-auto space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Complete Loan Terms Disclosure</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-sm text-blue-100 mb-1 font-semibold">APR Range</p>
                <p className="text-2xl font-bold">5.99% - 34.99%</p>
                <p className="text-sm text-blue-200 mt-2 font-bold">Maximum APR: 34.99%</p>
                <p className="text-xs text-blue-200 mt-1">(Below 36% regulatory threshold)</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-sm text-blue-100 mb-1 font-semibold">Repayment Terms</p>
                <p className="text-2xl font-bold">61 days - 72 months</p>
                <p className="text-xs text-blue-200 mt-2">Minimum 61 days repayment period</p>
              </div>
            </div>
            <div className="pt-4 border-t-2 border-white/30 bg-white/10 p-4 rounded-lg">
              <p className="text-base text-white font-bold mb-2">Representative Example (Required by TILA):</p>
              <p className="text-base text-white font-semibold">
                Loan Amount: $5,000 | APR: 21% | Term: 24 months
              </p>
              <p className="text-base text-white font-semibold mt-2">
                Monthly Payment: $254.12 | Total Cost: $6,098.88
              </p>
              <p className="text-sm text-blue-100 mt-2">
                (Total includes $1,098.88 in interest and fees over loan term)
              </p>
            </div>
            <div className="pt-4 border-t-2 border-white/30">
              <p className="text-sm text-white font-bold mb-2">
                Important: We Are a Loan Matching Service, Not a Direct Lender
              </p>
              <p className="text-sm text-blue-100">
                Cash Bear Loans connects you with licensed lending partners. All loan terms, rates, and fees are determined by the lender. Checking eligibility may result in a soft credit inquiry which does not affect your credit score. Approval and funding are not guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
