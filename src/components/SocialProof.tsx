import React from 'react';
import { Star, Quote, CheckCircle, Award, Users, TrendingUp, Heart } from 'lucide-react';

const SocialProof: React.FC = () => {
  const handleApplyClick = () => {
    if ((window as any).navigateToApply) {
      (window as any).navigateToApply();
    }
  };

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Austin, TX",
      rating: 5,
      text: "Perfect timing for the holidays! Got $5,000 approved in 30 minutes for gifts and travel. The process was incredibly easy and stress-free.",
      amount: "$5,000",
      purpose: "Holiday Shopping",
      petType: ""
    },
    {
      name: "Mike R.",
      location: "Denver, CO",
      rating: 5,
      text: "Used the loan to cover unexpected expenses during the holiday season. The fixed monthly payment fits perfectly in my budget. Highly recommend!",
      amount: "$3,200",
      purpose: "Holiday Expenses",
      petType: ""
    },
    {
      name: "Jennifer L.",
      location: "Miami, FL",
      rating: 5,
      text: "Needed extra cash for family travel and gifts. Got approved for $4,500 within 24 hours with transparent terms. Made my holidays stress-free!",
      amount: "$4,500",
      purpose: "Holiday Travel",
      petType: ""
    },
    {
      name: "David K.",
      location: "Phoenix, AZ",
      rating: 5,
      text: "Fast approval for unexpected bills during the holiday rush. Transparent terms, no hidden fees, and great customer service throughout.",
      amount: "$2,800",
      purpose: "Emergency Bills",
      petType: ""
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "75,000+",
      label: "Customers Helped",
      color: "from-accent-cyan to-accent-teal"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Average Rating",
      color: "from-honey-primary to-warm-amber"
    },
    {
      icon: Heart,
      number: "98%",
      label: "Customer Satisfaction",
      color: "from-coral-primary to-coral-accent"
    },
    {
      icon: Award,
      number: "A+",
      label: "BBB Rating",
      color: "from-success-emerald to-sage-primary"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-coral-primary to-coral-accent p-4 rounded-2xl shadow-lg">
              <Heart className="h-10 w-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Join 75,000+ Satisfied Customers
          </h2>
          <p className="text-base lg:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Real customers, real stories. See how we've helped thousands achieve their financial goals.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 shadow-lg`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-br from-warm-orange to-coral-primary p-3 rounded-full mr-4">
                  <Quote className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-honey-primary fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600 font-medium">Verified Customer</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 mb-4 leading-relaxed text-base">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-success-emerald">{testimonial.amount}</span> • {testimonial.purpose}
                </div>
                <div className="flex items-center text-success-emerald">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-cyan-700 rounded-3xl p-8 lg:p-12 text-white text-center">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-8 w-8 text-coral-accent mr-3" />
            <h3 className="text-xl lg:text-2xl font-bold text-white" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>Trusted & Secure Installment Loans</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center bg-white/15 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <Award className="h-8 w-8 text-yellow-300 mr-3" />
              <div className="text-left">
                <div className="font-bold text-white text-base" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>BBB A+ Rating</div>
                <div className="text-white text-sm font-medium" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>Better Business Bureau</div>
              </div>
            </div>
            <div className="flex items-center justify-center bg-white/15 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <CheckCircle className="h-8 w-8 text-green-300 mr-3" />
              <div className="text-left">
                <div className="font-bold text-white text-base" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>Fast Approval</div>
                <div className="text-white text-sm font-medium" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>Fast Decisions</div>
              </div>
            </div>
            <div className="flex items-center justify-center bg-white/15 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <Heart className="h-8 w-8 text-pink-300 mr-3" />
              <div className="text-left">
                <div className="font-bold text-white text-base" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>Customer First</div>
                <div className="text-white text-sm font-medium" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>75,000+ Customers Helped</div>
              </div>
            </div>
          </div>

          <button
            onClick={handleApplyClick}
            className="bg-gradient-to-r from-coral-primary to-warm-orange hover:from-warm-orange hover:to-coral-primary text-white px-12 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse"
          >
            Get Your Loan Today!
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;