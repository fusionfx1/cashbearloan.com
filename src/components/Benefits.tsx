import React from 'react';
import { DollarSign, Clock, Shield, TrendingUp, CheckCircle, Star, Heart, Zap } from 'lucide-react';
import { siteContent } from '../content/text';

const Benefits: React.FC = () => {
  const handleApplyClick = () => {
    if ((window as any).navigateToApply) {
      (window as any).navigateToApply();
    }
  };

  const benefits = [
    {
      icon: DollarSign,
      title: siteContent.benefits.features[3].title,
      description: siteContent.benefits.features[3].description,
      bullets: siteContent.benefits.features[3].bullets,
      color: "from-accent-cyan to-accent-teal"
    },
    {
      icon: Clock,
      title: siteContent.benefits.features[1].title,
      description: siteContent.benefits.features[1].description,
      bullets: siteContent.benefits.features[1].bullets,
      color: "from-warm-orange to-honey-primary"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your information is protected:",
      bullets: [
        "Bank-level security encryption",
        "Data stays confidential",
        "Privacy guaranteed"
      ],
      color: "from-success-emerald to-sage-primary"
    },
    {
      icon: TrendingUp,
      title: siteContent.benefits.features[0].title,
      description: siteContent.benefits.features[0].description,
      bullets: siteContent.benefits.features[0].bullets,
      color: "from-coral-primary to-coral-accent"
    }
  ];

  const stats = [
    { number: "100K+", label: "Happy Customers", icon: Star },
    { number: "4.9/5", label: "Customer Rating", icon: Star },
    { number: "24/7", label: "Online Support", icon: Clock },
    { number: "99%", label: "Approval Rate", icon: Shield }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <DollarSign className="h-8 w-8 text-rose-500 mr-3" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-slate">
              Why Choose Our Installment Loans?
            </h2>
          </div>
          <p className="text-base lg:text-lg text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            We're committed to helping you achieve your financial goals with transparent, affordable installment loans designed for your needs.
          </p>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-light-gray to-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 card-hover">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-warm-orange to-coral-primary rounded-xl mb-4 shadow-md">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-neutral-slate mb-1">{stat.number}</div>
                <div className="text-neutral-gray font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-neutral-slate mb-3 group-hover:text-coral-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-gray leading-relaxed text-base mb-3">
                      {benefit.description}
                    </p>
                    <ul className="space-y-2">
                      {benefit.bullets.map((bullet, bIndex) => (
                        <li key={bIndex} className="flex items-start text-neutral-gray text-sm">
                          <CheckCircle className="h-4 w-4 text-success-emerald mr-2 mt-0.5 flex-shrink-0" />
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

        {/* Enhanced Trust Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-navy to-accent-teal rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-coral-accent mr-3" />
                <h3 className="text-xl lg:text-2xl font-bold">Trusted by 100,000+ Customers</h3>
              </div>
              <p className="text-blue-100 text-base mb-6 leading-relaxed">
                Join over 100,000 customers who have successfully used our installment loans to achieve
                their financial goals and improve their lives. When you need funds, we're here to help.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-honey-primary fill-current" />
                  ))}
                </div>
                <span className="text-blue-100 font-medium">4.9/5 Average Rating</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <CheckCircle className="h-6 w-6 text-success-emerald mr-3 flex-shrink-0" />
                <span className="text-blue-100 font-medium">BBB A+ rated lender</span>
              </div>
              <div className="flex items-center bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <CheckCircle className="h-6 w-6 text-success-emerald mr-3 flex-shrink-0" />
                <span className="text-blue-100 font-medium">Licensed in 50 states</span>
              </div>
              <div className="flex items-center bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <CheckCircle className="h-6 w-6 text-success-emerald mr-3 flex-shrink-0" />
                <span className="text-blue-100 font-medium">Bank-level security</span>
              </div>
              <div className="flex items-center bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20 mt-4">
                <Heart className="h-6 w-6 text-rose-400 mr-3 flex-shrink-0" />
                <span className="text-blue-100 font-medium">Your success is our priority</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;