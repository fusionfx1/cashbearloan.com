import React, { useState } from 'react';
import { Calculator, Info, DollarSign, Calendar, Percent, TrendingUp, CreditCard } from 'lucide-react';

const LoanCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(5000);
  const [loanTerm, setLoanTerm] = useState(24);
  
  const handleApplyClick = () => {
    if ((window as any).navigateToApply) {
      (window as any).navigateToApply();
    }
  };
  
  // Example calculation (simplified for demonstration)
  const apr = 12.99; // Example APR
  const monthlyRate = apr / 100 / 12;
  const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / 
                        (Math.pow(1 + monthlyRate, loanTerm) - 1);
  const totalPayment = monthlyPayment * loanTerm;
  const totalInterest = totalPayment - loanAmount;

  const loanUses = [
    { purpose: "Debt Consolidation", amount: "$1,000 - $5,000", icon: "💳" },
    { purpose: "Home Improvements", amount: "$1,000 - $5,000", icon: "🏠" },
    { purpose: "Medical Bills", amount: "$1,000 - $5,000", icon: "🏥" },
    { purpose: "Auto Repairs", amount: "$500 - $5,000", icon: "🚗" },
    { purpose: "Wedding Expenses", amount: "$1,000 - $5,000", icon: "💒" },
    { purpose: "Emergency Expenses", amount: "$1,000 - $5,000", icon: "🚨" },
    { purpose: "Vacation/Travel", amount: "$1,000 - $5,000", icon: "✈️" },
    { purpose: "Major Purchase", amount: "$1,000 - $5,000", icon: "🛍️" }
  ];

  return (
    <section id="calculator" className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="bg-gradient-to-br from-warm-orange to-coral-primary p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg">
              <Calculator className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Installment Loan Payment Calculator
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Calculate your monthly payment for your installment loan.
          </p>
          <div className="mt-4 max-w-3xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 font-semibold">
                <strong>Important:</strong> This calculator provides estimates only. Actual terms, APR (5.99% - 34.99%, Max: 34.99%),
                and payments may vary based on creditworthiness, income verification, and other underwriting factors.
                Your specific rate and terms will be disclosed during the application process.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border border-gray-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Calculator Controls - Mobile Optimized */}
              <div className="p-6 sm:p-8 lg:p-12 space-y-6 sm:space-y-8">
                <div>
                  <div className="flex items-center mb-3 sm:mb-4">
                    <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-coral-primary mr-2" />
                    <label htmlFor="loan-amount-range" className="text-base sm:text-lg font-bold text-gray-800">
                      Loan Amount
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      id="loan-amount-range"
                      min="1000"
                      max="5000"
                      step="100"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full h-3 sm:h-4 bg-gray-200 rounded-full appearance-none cursor-pointer slider-mobile"
                      style={{
                        background: `linear-gradient(to right, #f97316 0%, #ec4899 ${((loanAmount - 1000) / (5000 - 1000)) * 100}%, #e5e7eb ${((loanAmount - 1000) / (5000 - 1000)) * 100}%, #e5e7eb 100%)`
                      }}
                      aria-label="Select loan amount"
                      aria-valuemin={1000}
                      aria-valuemax={5000}
                      aria-valuenow={loanAmount}
                    />
                    <div className="flex justify-between items-center text-xs sm:text-sm text-gray-600 mt-3">
                      <span>$1,000</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg sm:text-2xl text-coral-primary">${loanAmount.toLocaleString()}</span>
                        <input
                          type="number"
                          min="1000"
                          max="5000"
                          step="100"
                          value={loanAmount}
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value >= 1000 && value <= 5000) {
                              setLoanAmount(value);
                            }
                          }}
                          className="w-20 sm:w-24 px-2 py-1 text-sm border-2 border-coral-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-primary"
                          aria-label="Enter exact loan amount"
                        />
                      </div>
                      <span>$5,000</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-success-emerald mr-2" />
                    <label htmlFor="loan-term-range" className="text-base sm:text-lg font-bold text-gray-800">
                      Payment Term
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      id="loan-term-range"
                      min="12"
                      max="60"
                      step="6"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="w-full h-3 sm:h-4 bg-gray-200 rounded-full appearance-none cursor-pointer slider-mobile"
                      style={{
                        background: `linear-gradient(to right, #10b981 0%, #84cc16 ${((loanTerm - 12) / (60 - 12)) * 100}%, #e5e7eb ${((loanTerm - 12) / (60 - 12)) * 100}%, #e5e7eb 100%)`
                      }}
                      aria-label="Select payment term in months"
                      aria-valuemin={12}
                      aria-valuemax={60}
                      aria-valuenow={loanTerm}
                    />
                    <div className="flex justify-between items-center text-xs sm:text-sm text-gray-600 mt-3">
                      <span>12 months</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg sm:text-2xl text-success-emerald">{loanTerm} months</span>
                        <input
                          type="number"
                          min="12"
                          max="60"
                          step="6"
                          value={loanTerm}
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value >= 12 && value <= 60) {
                              setLoanTerm(value);
                            }
                          }}
                          className="w-16 sm:w-20 px-2 py-1 text-sm border-2 border-success-emerald rounded-lg focus:outline-none focus:ring-2 focus:ring-success-emerald"
                          aria-label="Enter exact payment term"
                        />
                      </div>
                      <span>60 months</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 mt-4">
                      {[12, 24, 36, 48].map((term) => (
                        <button
                          key={term}
                          onClick={() => setLoanTerm(term)}
                          className={`py-2 px-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                            loanTerm === term
                              ? 'bg-success-emerald text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                          aria-label={`Select ${term} months term`}
                        >
                          {term}mo
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-rose-50 to-teal-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-coral-primary/30">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <Percent className="h-4 w-4 sm:h-5 sm:w-5 text-coral-primary mr-2" />
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">Example APR: {apr}%</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Your actual APR may vary based on credit profile and other factors.
                  </p>
                </div>

                {/* Common Loan Uses Section */}
                <div className="bg-gradient-to-r from-orange-50 to-rose-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-warm-orange/30">
                  <div className="flex items-center mb-4">
                    <CreditCard className="h-5 w-5 text-warm-orange mr-2" />
                    <h3 className="font-bold text-gray-800 text-base lg:text-lg">Common Loan Uses</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {loanUses.map((use, index) => (
                      <div key={index} className="flex items-center justify-between bg-white/70 rounded-lg p-2 sm:p-3 border border-gray-200/50">
                        <div className="flex items-center">
                          <span className="text-lg mr-2">{use.icon}</span>
                          <span className="text-gray-700 text-sm font-medium">{use.purpose}</span>
                        </div>
                        <span className="text-coral-primary font-semibold text-xs sm:text-sm">{use.amount}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-teal-50 rounded-lg border border-accent-teal">
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-accent-teal mr-2" />
                      <p className="text-xs sm:text-sm text-teal-700 font-medium">
                        Whatever your financial needs, our installment loans can help you achieve your goals with flexible terms and competitive rates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Panel - Mobile Optimized */}
              <div className="bg-gradient-to-br from-orange-600 to-pink-600 p-6 sm:p-8 lg:p-12 text-white">
                <div className="flex items-center justify-center mb-6 sm:mb-8">
                  <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-white mr-3" />
                  <h3 className="text-xl lg:text-2xl font-bold text-center text-white" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>Your Monthly Payment</h3>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-white/25 backdrop-blur-md rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/40">
                    <div className="text-center">
                      <div className="text-3xl sm:text-5xl font-bold mb-2 text-white" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>${monthlyPayment.toFixed(2)}</div>
                      <div className="text-white text-base sm:text-lg font-semibold" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>Monthly Payment</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-white/25 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-white/40">
                      <div className="text-xl sm:text-3xl font-bold text-white" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>${totalPayment.toFixed(0)}</div>
                      <div className="text-white text-sm sm:text-base font-semibold" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>Total Payment</div>
                    </div>
                    <div className="bg-white/25 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-white/40">
                      <div className="text-xl sm:text-3xl font-bold text-white" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>${totalInterest.toFixed(0)}</div>
                      <div className="text-white text-sm sm:text-base font-semibold" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>Total Interest</div>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-white/30 text-sm sm:text-base">
                      <span className="text-white font-medium" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>Loan Amount:</span>
                      <span className="font-bold text-white" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>${loanAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/30 text-sm sm:text-base">
                      <span className="text-white font-medium" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>APR:</span>
                      <span className="font-bold text-white" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>{apr}%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 text-sm sm:text-base">
                      <span className="text-white font-medium" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>Term:</span>
                      <span className="font-bold text-white" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>{loanTerm} months</span>
                    </div>
                  </div>

                  <button
                    onClick={handleApplyClick}
                    className="w-full bg-white/80 text-gray-700 hover:bg-white border-2 border-white/50 hover:border-white px-6 sm:px-10 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 mt-4 sm:mt-6"
                  >
                    Return to Application
                  </button>
                </div>
                
                <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-white/25 backdrop-blur-md rounded-lg sm:rounded-xl border border-white/40">
                  <div className="flex items-start">
                    <Info className="h-4 w-4 sm:h-5 sm:w-5 text-white mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-white font-semibold leading-relaxed" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>
                      <strong>Estimate Only:</strong> Your actual APR (5.99% - 34.99%) and payment may differ significantly
                      based on your credit profile, income verification, and other underwriting factors. All loan terms
                      will be clearly disclosed before you accept any offer. Borrowing money costs money.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;