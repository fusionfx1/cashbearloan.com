import React from 'react';
import { X } from 'lucide-react';
import LoanApplicationUI from './LoanApplicationUI';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAmount?: string;
  initialPurpose?: string;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  initialAmount,
  initialPurpose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full my-8 animate-slide-up">
        <div className="sticky top-0 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-white px-6 py-4 flex items-center justify-between rounded-t-3xl z-10">
          <div>
            <h2 className="text-2xl font-bold">Complete Your Application</h2>
            <p className="text-sm text-white/90">Takes just 5 minutes</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <LoanApplicationUI initialAmount={initialAmount} initialPurpose={initialPurpose} />
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;
