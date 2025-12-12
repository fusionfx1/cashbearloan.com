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

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 animate-fadeInUp">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Star className="h-5 w-5 text-honey-primary mr-2 fill-current" />
              <span className="text-sm sm:text-base font-bold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Users className="h-5 w-5 text-accent-cyan mr-2" />
              <span className="text-sm sm:text-base font-bold">100,000+ Funded</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Shield className="h-5 w-5 text-success-emerald mr-2" />
              <span className="text-sm sm:text-base font-bold">Bank-Level Security</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-6 animate-fadeInUp">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              Get Your Loan in
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-warm-orange via-honey-primary to-accent-cyan">
                Minutes, Not Days
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 font-medium leading-relaxed max-w-3xl mx-auto">
              Fast, transparent installment loans from $1,000 to $25,000. Get approved today and receive funds as soon as tomorrow.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp">
            <button
              onClick={handleQuickApply}
              className="group bg-cta-gradient text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full text-lg sm:text-xl font-bold hover:shadow-2xl hover:shadow-warm-orange/50 hover:scale-105 transition-all duration-300 flex items-center"
            >
              Apply in 3 Minutes
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full text-lg sm:text-xl font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              Calculate Payment
            </button>
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
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/30 text-left max-w-4xl mx-auto space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Loan Terms at a Glance</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-blue-100 mb-1">APR Range</p>
                <p className="text-lg font-bold">5.99% - 34.99%</p>
                <p className="text-xs text-blue-200 mt-1">Maximum APR: 34.99%</p>
              </div>
              <div>
                <p className="text-sm text-blue-100 mb-1">Repayment Terms</p>
                <p className="text-lg font-bold">61 days - 72 months</p>
                <p className="text-xs text-blue-200 mt-1">Choose what fits your budget</p>
              </div>
            </div>
            <div className="pt-4 border-t border-white/20">
              <p className="text-sm text-blue-100 font-semibold">Representative Example:</p>
              <p className="text-sm text-white mt-2">
                $5,000 loan at 21% APR for 24 months = $254.12/month. Total repayment: $6,098.88 (includes $1,098.88 in interest and fees)
              </p>
            </div>
            <div className="pt-4 border-t border-white/20">
              <p className="text-xs text-blue-100">
                We are a loan marketplace connecting you with licensed lending partners. Checking eligibility may result in a soft credit inquiry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
