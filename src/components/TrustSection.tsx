import React from 'react';
import { Shield, Lock, Award, CheckCircle, Star, Phone, Mail, MapPin, DollarSign } from 'lucide-react';
import { siteContent } from '../content/text';

const TrustSection: React.FC = () => {
  const handleApplyClick = () => {
    if ((window as any).navigateToApply) {
      (window as any).navigateToApply();
    }
  };

  const certifications = [
    {
      icon: Award,
      title: "BBB A+ Rating",
      description: "Accredited business with the Better Business Bureau",
      badge: "A+"
    },
    {
      icon: Shield,
      title: "Licensed Lender",
      description: "Licensed and regulated in all 50 states",
      badge: "50 States"
    },
    {
      icon: Lock,
      title: "Bank-Level Security",
      description: "256-bit SSL encryption protects your data",
      badge: "SSL Secured"
    },
    {
      icon: Star,
      title: "Customer Rated",
      description: "4.9/5 stars from over 100,000 verified customers",
      badge: "4.9/5"
    }
  ];

  const guarantees = [
    "No Hidden Fees - All costs disclosed upfront",
    "Transparent Terms - Clear, easy-to-understand agreements",
    "Privacy Protected - Your information never sold or shared",
    "Licensed & Regulated - Compliant with all state and federal laws",
    "Customer First - Real people available to help",
    "Secure Process - Bank-level encryption throughout"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-success-gradient p-4 rounded-2xl shadow-lg">
              <DollarSign className="h-10 w-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-slate mb-6">
            Your Financial Success is Our Priority
          </h2>
          <p className="text-base lg:text-lg text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            We're committed to transparent, responsible lending. Here's why 100,000+ customers trust us with their financial needs.
          </p>
        </div>

        {/* Enhanced Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-light-gray to-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-cta-gradient rounded-2xl mb-4 shadow-lg">
                  <IconComponent className="h-10 w-10 text-white" />
                  <div className="absolute -top-2 -right-2 bg-success-emerald text-white text-xs font-bold px-2 py-1 rounded-full">
                    {cert.badge}
                  </div>
                </div>
                <h3 className="text-base font-bold text-neutral-slate mb-2">{cert.title}</h3>
                <p className="text-neutral-gray text-sm leading-relaxed">{cert.description}</p>
              </div>
            );
          })}
        </div>

        {/* Enhanced Guarantees Section */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 lg:p-12 mb-16 border border-blue-100">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-neutral-slate mb-4">Our Commitments to You</h3>
            <p className="text-base text-neutral-gray">
              We stand behind our service with these commitments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {guarantees.map((guarantee, index) => {
              const [title, description] = guarantee.split(' - ');
              return (
                <div key={index} className="flex items-start bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                  <CheckCircle className="h-6 w-6 text-success-emerald mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-neutral-slate">{title}</div>
                    <div className="text-sm text-neutral-gray">{description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fixed Contact Information with proper colors */}
        <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-cyan-700 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <DollarSign className="h-8 w-8 text-cyan-300 mr-3" />
                <h3 className="text-xl lg:text-2xl font-bold text-white" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>Questions About Installment Loans?</h3>
              </div>
              <p className="text-white text-base mb-6 leading-relaxed font-medium" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>
                {siteContent.trust.contact.description}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-cyan-300 mr-4" />
                  <div>
                    <div className="font-bold text-lg text-white" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>1-800-CASH-BEAR-LOANS</div>
                    <div className="text-white text-sm font-medium" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>Mon-Fri 9AM-6PM PST</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-cyan-300 mr-4" />
                  <div>
                    <div className="font-bold text-white" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>support@cashbearloan.com</div>
                    <div className="text-white text-sm font-medium" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>Response within 2 hours</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-cyan-300 mr-4 mt-1" />
                  <div>
                    <div className="font-bold text-white" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>Cash Bear Loans, LLC</div>
                    <div className="text-white font-medium" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>2551 Interstate 45 N</div>
                    <div className="text-white font-medium" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>Conroe, TX 77304, United States</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30">
                <h4 className="text-xl lg:text-2xl font-bold mb-4 text-white" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>Ready to Get Your Loan?</h4>
                <p className="text-white mb-6 font-medium text-base" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>
                  Join thousands of customers who got the money they needed quickly and securely.
                </p>
                <button
                  onClick={handleApplyClick}
                  className="bg-cta-gradient hover:shadow-xl hover:shadow-purple-primary/30 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get My Installment Loan Now!
                </button>
                <div className="mt-4 text-sm text-white font-semibold" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>
                  ✓ APR ranges from 5.99% to 34.99% (Maximum: 34.99%)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;