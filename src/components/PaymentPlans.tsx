import React, { useState } from 'react';
import { Shield, CheckCircle, Clock, Heart, Calculator, TrendingUp, DollarSign, Star } from 'lucide-react';

const PaymentPlans: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState(2000);
  const [selectedTerm, setSelectedTerm] = useState(12);

  const handleApplyClick = () => {
    if ((window as any).navigateToApply) {
      (window as any).navigateToApply();
    }
  };

  const calculateMonthlyPayment = (amount: number, term: number) => {
    const aprRate = 0.15;
    const monthlyRate = aprRate / 12;
    const payment = (amount * monthlyRate * Math.pow(1 + monthlyRate, term)) /
                    (Math.pow(1 + monthlyRate, term) - 1);
    return Math.round(payment);
  };

  const paymentPlans = [
    {
      amount: 1000,
      term: 6,
      color: "from-accent-teal to-accent-cyan",
      title: "Quick Loan",
      description: "Perfect for small expenses"
    },
    {
      amount: 2500,
      term: 12,
      color: "from-warm-orange to-honey-primary",
      title: "Standard Loan",
      description: "Most popular choice",
      popular: true
    },
    {
      amount: 5000,
      term: 18,
      color: "from-coral-primary to-coral-accent",
      title: "Premium Loan",
      description: "Comprehensive funding options"
    }
  ];

  const monthlyPayment = calculateMonthlyPayment(selectedAmount, selectedTerm);
  const totalAmount = monthlyPayment * selectedTerm;
  const interestAmount = totalAmount - selectedAmount;

  return (
    <section className="py-20 bg-gradient-to-br from-light-gray via-warm-gray to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-success-emerald/10 rounded-full px-6 py-3 mb-6 border-2 border-success-emerald/30">
            <Shield className="h-6 w-6 text-success-emerald mr-3" />
            <span className="text-success-emerald font-bold text-lg">
              Checking rates will NOT affect your credit score
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-slate mb-6">
            <span className="text-gray-800">Easy, flexible</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-orange to-coral-primary font-black" style={{textShadow: '0 2px 8px rgba(255,255,255,0.8)'}}>
              payment options.
            </span>
          </h2>

          <p className="text-base lg:text-lg text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            Apply in minutes and get a quick decision — so you can address your financial needs without delay.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {paymentPlans.map((plan, index) => {
            const monthlyPmt = calculateMonthlyPayment(plan.amount, plan.term);
            return (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 border-2 ${plan.popular ? 'border-warm-orange shadow-2xl transform scale-105' : 'border-gray-200 hover:border-warm-orange/50'} transition-all duration-300 hover:shadow-xl group`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-warm-orange to-coral-primary text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center">
                      <Star className="h-4 w-4 mr-2 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Heart className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-neutral-slate mb-2">
                  {plan.title}
                </h3>
                <p className="text-neutral-gray mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 mb-2" style={{WebkitTextStroke: '1px rgba(0,0,0,0.1)'}}>
                    ${monthlyPmt}
                  </div>
                  <div className="text-gray-700 font-bold text-base">per month</div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-neutral-gray">
                    <CheckCircle className="h-5 w-5 text-success-emerald mr-3 flex-shrink-0" />
                    <span>Total loan: ${plan.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center text-neutral-gray">
                    <CheckCircle className="h-5 w-5 text-success-emerald mr-3 flex-shrink-0" />
                    <span>{plan.term} month term</span>
                  </div>
                  <div className="flex items-center text-neutral-gray">
                    <CheckCircle className="h-5 w-5 text-success-emerald mr-3 flex-shrink-0" />
                    <span>No hidden fees</span>
                  </div>
                  <div className="flex items-center text-neutral-gray">
                    <CheckCircle className="h-5 w-5 text-success-emerald mr-3 flex-shrink-0" />
                    <span>Quick approval</span>
                  </div>
                </div>

                <button
                  onClick={handleApplyClick}
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-warm-orange to-coral-primary text-white shadow-lg' : 'bg-gray-100 text-neutral-slate hover:bg-gradient-to-r hover:from-warm-orange hover:to-coral-primary hover:text-white'} py-4 rounded-xl font-bold text-lg transition-all duration-300`}
                >
                  Select Plan
                </button>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <div className="flex items-center mb-6">
                <Calculator className="h-8 w-8 text-warm-orange mr-3" />
                <h3 className="text-xl lg:text-2xl font-bold text-neutral-slate">
                  Calculate Your Monthly Payment
                </h3>
              </div>

              <p className="text-neutral-gray text-base mb-8 leading-relaxed">
                Find a payment plan that works for your budget. Adjust the loan amount and repayment term to see exactly what you'll pay each month—simple, transparent, and easy to understand.
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-light-gray to-white rounded-2xl p-6 border border-gray-200">
                  <label htmlFor="amount-slider" className="block text-neutral-slate font-bold mb-4 text-lg">
                    Loan Amount: ${selectedAmount.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    id="amount-slider"
                    min="500"
                    max="5000"
                    step="100"
                    value={selectedAmount}
                    onChange={(e) => setSelectedAmount(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #f97316 0%, #ec4899 ${((selectedAmount - 500) / (5000 - 500)) * 100}%, #e5e7eb ${((selectedAmount - 500) / (5000 - 500)) * 100}%, #e5e7eb 100%)`
                    }}
                    aria-label={`Loan amount: $${selectedAmount}`}
                  />
                  <div className="flex justify-between text-sm text-neutral-gray mt-2">
                    <span>$500</span>
                    <span>$5,000</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-light-gray to-white rounded-2xl p-6 border border-gray-200">
                  <label htmlFor="term-slider" className="block text-neutral-slate font-bold mb-4 text-lg">
                    Payment Term: {selectedTerm} months
                  </label>
                  <input
                    type="range"
                    id="term-slider"
                    min="6"
                    max="24"
                    step="6"
                    value={selectedTerm}
                    onChange={(e) => setSelectedTerm(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #14b8a6 0%, #10b981 ${((selectedTerm - 6) / (24 - 6)) * 100}%, #e5e7eb ${((selectedTerm - 6) / (24 - 6)) * 100}%, #e5e7eb 100%)`
                    }}
                    aria-label={`Payment term: ${selectedTerm} months`}
                  />
                  <div className="flex justify-between text-sm text-neutral-gray mt-2">
                    <span>6 months</span>
                    <span>24 months</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-warm-orange/10 to-coral-primary/10 rounded-3xl p-8 border-2 border-warm-orange/30">
                <div className="text-center mb-8">
                  <div className="text-gray-800 font-bold text-base mb-2">Your Estimated Monthly Payment</div>
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 mb-4" style={{WebkitTextStroke: '1px rgba(0,0,0,0.1)'}}>
                    ${monthlyPayment}
                  </div>
                  <div className="text-gray-800 font-semibold text-base">per month for {selectedTerm} months</div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-neutral-gray font-medium">Loan Amount</span>
                    <span className="text-neutral-slate font-bold text-lg">${selectedAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-neutral-gray font-medium">Estimated Interest</span>
                    <span className="text-neutral-slate font-bold text-lg">${interestAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-neutral-slate font-bold">Total Repayment</span>
                    <span className="text-warm-orange font-bold text-xl">${totalAmount.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={handleApplyClick}
                  className="w-full bg-gradient-to-r from-warm-orange to-coral-primary hover:from-coral-primary hover:to-warm-orange text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  Get This Payment Plan
                </button>

                <div className="mt-6 text-center">
                  <p className="text-sm text-neutral-gray mb-2">Representative APR of 15%. Actual rates may vary.</p>
                  <p className="text-xs text-success-emerald font-semibold">Checking for a payment plan won't impact your credit score</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Shield className="h-10 w-10 text-white mr-4" />
                <h3 className="text-xl lg:text-2xl font-bold text-white" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>Your Credit Score is Safe</h3>
              </div>
              <p className="text-white text-base leading-relaxed mb-6 font-medium" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>
                We understand how important your credit score is. Checking for a payment plan won't impact your credit score—we only perform a soft inquiry when you check rates. Simple, safe, and secure.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-honey-primary fill-current" />
                  ))}
                </div>
                <span className="text-white font-semibold text-base" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>Trusted by 100,000+ customers</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30">
                <Clock className="h-6 w-6 text-white mr-4 flex-shrink-0" />
                <div>
                  <div className="font-bold text-white text-base" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>Quick Decisions</div>
                  <div className="text-white font-medium text-sm" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>Get approved in minutes</div>
                </div>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30">
                <TrendingUp className="h-6 w-6 text-white mr-4 flex-shrink-0" />
                <div>
                  <div className="font-bold text-white text-base" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>Flexible Terms</div>
                  <div className="text-white font-medium text-sm" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>6 to 24 month options</div>
                </div>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30">
                <DollarSign className="h-6 w-6 text-white mr-4 flex-shrink-0" />
                <div>
                  <div className="font-bold text-white text-base" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>No Hidden Fees</div>
                  <div className="text-white font-medium text-sm" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>100% transparent pricing</div>
                </div>
              </div>
              <button
                onClick={handleApplyClick}
                className="w-full bg-white text-accent-teal hover:bg-gray-50 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl mt-6"
              >
                Check My Rates Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPlans;
