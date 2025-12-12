import React, { useState } from 'react';
import LegalPopup from './LegalPopup';

const LegalLinks: React.FC = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const openPopup = (type: string) => {
    setActivePopup(type);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <>
      {/* Legal Links - can be used in footer or anywhere */}
      <div className="space-y-2">
        <button
          onClick={() => openPopup('privacy')}
          className="block hover:text-blue-400 transition-colors text-left"
        >
          Privacy Policy
        </button>
        <button
          onClick={() => openPopup('terms')}
          className="block hover:text-blue-400 transition-colors text-left"
        >
          Terms & Conditions
        </button>
        <button
          onClick={() => openPopup('disclosures')}
          className="block hover:text-blue-400 transition-colors text-left"
        >
          Loan Disclosures
        </button>
        <button
          onClick={() => openPopup('complaints')}
          className="block hover:text-blue-400 transition-colors text-left"
        >
          File a Complaint
        </button>
        <button
          onClick={() => openPopup('licensing')}
          className="block hover:text-blue-400 transition-colors text-left"
        >
          State Licensing
        </button>
      </div>

      {/* Popups */}
      <LegalPopup
        isOpen={activePopup === 'privacy'}
        onClose={closePopup}
        type="privacy"
      />
      <LegalPopup
        isOpen={activePopup === 'terms'}
        onClose={closePopup}
        type="terms"
      />
      <LegalPopup
        isOpen={activePopup === 'disclosures'}
        onClose={closePopup}
        type="disclosures"
      />
      <LegalPopup
        isOpen={activePopup === 'complaints'}
        onClose={closePopup}
        type="complaints"
      />
      <LegalPopup
        isOpen={activePopup === 'licensing'}
        onClose={closePopup}
        type="licensing"
      />
    </>
  );
};

export default LegalLinks;