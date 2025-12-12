import React from 'react';
import { DollarSign, Clock, Shield, TrendingUp, CheckCircle, Star, Heart, Zap, Award, Lock } from 'lucide-react';
import { siteContent } from '../content/text';

const Benefits: React.FC = () => {
  const handleApplyClick = () => {
    if ((window as any).navigateToApply) {
      (window as any).navigateToApply();
    }
  };

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast Approval",
      description: "Get your decision in minutes:",
      bullets: [
        "3-minute application process",
        "Instant preliminary decision",
        "Funds as soon as next business day"
      ],
      gradient: "from-warm-orange to-warm-amber"
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your information is protected:",
      bullets: [
        "256-bit SSL encryption",
        "Secure data storage",
        "Privacy guaranteed"
      ],
      gradient: "from-success-emerald to-sage-primary"
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No surprises, ever:",
      bullets: [
        "Clear APR rates shown upfront",
        "No hidden fees or charges",
        "Know your payment before you commit"
      ],
      gradient: "from-accent-cyan to-accent-teal"
    },
    {
      icon: TrendingUp,
      title: "Build Your Credit",
      description: "Improve your financial future:",
      bullets: [
        "On-time payments reported to bureaus",
        "Flexible payment options",
        "Financial wellness resources"
      ],
      gradient: "from-purple-primary to-magenta-primary"
    }
  ];

  const stats = [
    { number: "100K+", label: "Satisfied Customers", icon: Star, color: "text-honey-primary" },
    { number: "4.9/5", label: "Average Rating", icon: Award, color: "text-warm-orange" },
    { number: "24/7", label: "Customer Support", icon: Clock, color: "text-accent-cyan" },
    { number: "$1B+", label: "Loans Funded", icon: DollarSign, color: "text-success-emerald" }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-light-gray via-white to-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center bg-warm-orange/10 rounded-full px-6 py-2 mb-4">
            <Heart className="h-5 w-5 text-warm-orange mr-2" />
            <span className="text-warm-orange font-bold text-sm uppercase tracking-wide">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-navy">
            Lending Made Simple, Honest & Fast
          </h2>
          <p className="text-base lg:text-lg text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing personal lending with transparent terms, fast approvals, and customer-first service.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-3xl border-2 border-gray-100 hover:border-accent-cyan hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color === 'text-honey-primary' ? 'from-honey-primary to-honey-accent' : stat.color === 'text-warm-orange' ? 'from-warm-orange to-warm-amber' : stat.color === 'text-accent-cyan' ? 'from-accent-cyan to-turquoise-primary' : 'from-success-emerald to-sage-primary'} rounded-2xl mb-4 shadow-lg`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-black text-primary-navy mb-2">{stat.number}</div>
                <div className="text-neutral-gray font-semibold text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-accent-cyan hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary-navy mb-3 group-hover:text-accent-cyan transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-gray leading-relaxed text-base mb-4 font-medium">
                      {benefit.description}
                    </p>
                    <ul className="space-y-3">
                      {benefit.bullets.map((bullet, bIndex) => (
                        <li key={bIndex} className="flex items-start text-neutral-slate text-sm font-medium">
                          <CheckCircle className="h-5 w-5 text-success-emerald mr-3 mt-0.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-hero-gradient rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Lock className="h-8 w-8 text-accent-cyan mr-3" />
                <h3 className="text-2xl lg:text-3xl font-black">Trusted by 100,000+ Customers</h3>
              </div>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Join thousands of satisfied customers who chose us for their financial needs. Experience the difference of working with a lender that truly cares about your success.
              </p>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 text-honey-primary fill-current" />
                ))}
                <span className="text-white font-bold ml-2 text-lg">4.9 out of 5</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all">
                <CheckCircle className="h-7 w-7 text-success-emerald mr-4 flex-shrink-0" />
                <span className="text-white font-semibold text-lg">A+ BBB Rating</span>
              </div>
              <div className="flex items-center bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all">
                <CheckCircle className="h-7 w-7 text-success-emerald mr-4 flex-shrink-0" />
                <span className="text-white font-semibold text-lg">Licensed Nationwide</span>
              </div>
              <div className="flex items-center bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all">
                <CheckCircle className="h-7 w-7 text-success-emerald mr-4 flex-shrink-0" />
                <span className="text-white font-semibold text-lg">Secure & Confidential</span>
              </div>
              <button
                onClick={handleApplyClick}
                className="w-full bg-cta-gradient text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 mt-4"
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
