import React, { useState, useEffect } from 'react';
import { Lock, Shield, DollarSign } from 'lucide-react';

interface LoanApplicationUIProps {
  initialAmount?: string;
  initialPurpose?: string;
}

const LoanApplicationUI: React.FC<LoanApplicationUIProps> = ({ initialAmount, initialPurpose }) => {
  const [selectedAmount, setSelectedAmount] = useState(initialAmount ? Number(initialAmount) : 500);
  const [sliderAmount, setSliderAmount] = useState(initialAmount ? Number(initialAmount) : 500);

  useEffect(() => {
    if (initialAmount) {
      const amount = Number(initialAmount);
      setSelectedAmount(amount);
      setSliderAmount(amount);
    }
  }, [initialAmount]);

  const amountOptions = [500, 1000, 2000, 3000, 4000, 5000];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setSliderAmount(value);
    setSelectedAmount(value);
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setSliderAmount(amount);
    if ((window as any).navigateToApply) {
      (window as any).navigateToApply();
    }
  };

  const handleGetStarted = () => {
    if ((window as any).navigateToApply) {
      (window as any).navigateToApply();
    }
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 w-full max-w-sm sm:max-w-md shadow-2xl border-2 border-sage-primary/30 relative overflow-hidden">

      {/* Holiday Badge */}
      <div className="flex justify-center mb-4">
        <div className="bg-gradient-to-r from-warm-orange/10 to-coral-accent/10 border-2 border-warm-orange rounded-full px-4 py-2 shadow-md">
          <span className="text-sm sm:text-base font-bold text-warm-orange">🎁 Holiday Approval Rates: High</span>
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-2xl font-bold text-primary-navy mb-2">
          Calculate Your Holiday Loan 🎄
        </h2>
      </div>

      {/* Selected Amount Display */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-warm-orange via-sage-primary to-honey-primary bg-clip-text text-transparent mb-2">
          ${selectedAmount.toLocaleString()}
        </div>
        <div className="text-primary-navy text-xs sm:text-sm bg-gradient-to-r from-sage-primary/10 to-warm-orange/10 px-3 py-1 sm:px-4 sm:py-2 rounded-full inline-block border-2 border-sage-primary">
          For your financial needs
        </div>
      </div>

      {/* Vibrant Slider - Mobile Optimized with proper label */}
      <div className="mb-6 sm:mb-8">
        <div className="relative">
          <label htmlFor="loan-amount-slider" className="sr-only">
            Select loan amount from $500 to $5,000
          </label>
          <input
            type="range"
            id="loan-amount-slider"
            min="500"
            max="5000"
            step="100"
            value={sliderAmount}
            onChange={handleSliderChange}
            className="w-full h-3 sm:h-4 bg-gray-200 rounded-full appearance-none cursor-pointer slider-modern"
            style={{
              background: `linear-gradient(to right, #BC4749 0%, #6A994E ${((sliderAmount - 500) / (5000 - 500)) * 100}%, #e5e7eb ${((sliderAmount - 500) / (5000 - 500)) * 100}%, #e5e7eb 100%)`
            }}
            aria-label={`Loan amount: $${sliderAmount}`}
          />
          <div className="flex justify-between items-center text-xs text-primary-navy mt-3 sm:mt-4">
            <span className="bg-gradient-to-r from-sage-primary/10 to-warm-orange/10 px-2 py-1 sm:px-3 rounded-full border border-sage-primary font-medium">$500</span>
            <input
              type="number"
              min="500"
              max="5000"
              step="100"
              value={sliderAmount}
              onChange={(e) => {
                const value = Number(e.target.value);
                if (value >= 500 && value <= 5000) {
                  setSliderAmount(value);
                  setSelectedAmount(value);
                }
              }}
              className="w-20 sm:w-24 px-2 py-1 text-sm border-2 border-warm-orange rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-orange text-center font-semibold bg-white"
              aria-label="Enter exact loan amount"
            />
            <span className="bg-gradient-to-r from-sage-primary/10 to-warm-orange/10 px-2 py-1 sm:px-3 rounded-full border border-sage-primary font-medium">$5,000</span>
          </div>
        </div>
      </div>

      {/* Amount Selection Boxes - Mobile Grid with 6 options */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8">
        {amountOptions.map((amount) => (
          <button
            key={amount}
            onClick={() => handleAmountSelect(amount)}
            className={`py-2 sm:py-3 px-1 sm:px-2 rounded-lg sm:rounded-xl border-2 font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 cursor-pointer ${
              selectedAmount === amount
                ? 'bg-gradient-to-br from-warm-orange to-coral-accent border-transparent text-light-gray shadow-lg'
                : 'bg-white border-sage-primary text-primary-navy hover:border-warm-orange hover:bg-gradient-to-br hover:from-sage-primary/10 hover:to-warm-orange/10 hover:shadow-md'
            }`}
            aria-label={`Select loan amount of $${amount.toLocaleString()}`}
          >
            ${amount.toLocaleString()}
          </button>
        ))}
      </div>

      {/* PRIMARY CTA - Blushed Brick */}
      <div className="mb-4 sm:mb-6">
        <button
          onClick={handleGetStarted}
          className="w-full bg-gradient-to-r from-warm-orange to-coral-accent hover:from-coral-accent hover:to-warm-orange text-light-gray py-5 sm:py-7 rounded-xl sm:rounded-2xl font-black text-xl sm:text-3xl transition-all duration-300 transform hover:scale-[1.05] shadow-2xl hover:shadow-warm-orange/50 mb-3 relative overflow-hidden group border-2 border-light-gray/30"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 animate-pulse" />
            APPLY NOW
            <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 animate-pulse" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-coral-accent to-warm-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-light-gray/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </button>
        <p className="text-center text-primary-navy font-semibold text-sm sm:text-base">
          Soft credit check • No impact to your score
        </p>
      </div>

      {/* Security Notice */}
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-primary-navy bg-gradient-to-r from-sage-primary/10 to-honey-primary/10 rounded-lg sm:rounded-xl p-2 sm:p-3 border-2 border-sage-primary">
          <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-sage-primary to-honey-primary rounded-full shadow-md">
            <Lock className="h-3 w-3 sm:h-4 sm:w-4 text-light-gray" />
          </div>
          <span className="text-xs sm:text-sm font-medium">
            Secure loan application
          </span>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs text-primary-navy">
          <div className="flex items-center bg-gradient-to-r from-sage-primary/10 to-honey-primary/10 px-2 sm:px-3 py-1 sm:py-2 rounded-full border-2 border-sage-primary shadow-sm">
            <Shield className="h-2 w-2 sm:h-3 sm:w-3 text-sage-primary mr-1" />
            <span className="font-medium text-sage-primary">Secure & Private</span>
          </div>
          <div className="flex items-center bg-gradient-to-r from-warm-orange/10 to-coral-accent/10 px-2 sm:px-3 py-1 sm:py-2 rounded-full border-2 border-warm-orange shadow-sm">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-warm-orange rounded-full mr-1"></div>
            <span className="font-medium text-warm-orange">Fast Approval</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanApplicationUI;
