import React, { useState } from 'react';
import { X, DollarSign, Target, ArrowRight } from 'lucide-react';

interface QuickStartModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (amount: string, purpose: string) => void;
}

const QuickStartModal: React.FC<QuickStartModalProps> = ({ isOpen, onClose, onComplete }) => {
  const [amount, setAmount] = useState('2000');
  const [purpose, setPurpose] = useState('');

  const purposes = [
    'Debt Consolidation',
    'Home Repairs',
    'Medical Expenses',
    'Car Repairs',
    'Emergency Expenses',
    'Home Improvements',
    'Major Purchase',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount && purpose) {
      onComplete(amount, purpose);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        <div className="sticky top-0 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-4 flex items-center justify-between rounded-t-3xl">
          <h2 className="text-2xl font-bold">Quick Start - Get Your Loan</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          <p className="text-gray-600 mb-8 text-lg">
            Let's start with two quick questions to personalize your loan options
          </p>

          <div className="mb-8">
            <label className="block text-lg font-bold text-gray-900 mb-4 flex items-center">
              <DollarSign className="h-6 w-6 text-emerald-600 mr-2" />
              How much do you need?
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-gray-700">$</span>
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full mb-4"
              />
              <input
                type="number"
                min="500"
                max="5000"
                step="100"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-10 pr-4 py-4 text-3xl font-bold border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-colors"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">Amount between $500 and $5,000</p>
          </div>

          <div className="mb-8">
            <label className="block text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Target className="h-6 w-6 text-emerald-600 mr-2" />
              What will you use it for?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {purposes.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPurpose(p)}
                  className={`px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    purpose === p
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-gray-200'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 font-semibold">Your loan request:</span>
              <span className="text-2xl font-bold text-emerald-600">${amount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-semibold">Purpose:</span>
              <span className="text-lg font-bold text-gray-900">{purpose || 'Not selected'}</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={!amount || !purpose}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white px-8 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 disabled:transform-none flex items-center justify-center gap-2"
          >
            Continue to Full Application
            <ArrowRight className="h-6 w-6" />
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            Checking eligibility will not affect your credit score
          </p>
        </form>
      </div>
    </div>
  );
};

export default QuickStartModal;
