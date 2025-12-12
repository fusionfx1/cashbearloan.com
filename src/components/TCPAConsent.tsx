import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react';

interface TCPAConsentProps {
  onConsentChange: (consents: ConsentState) => void;
  phoneNumber?: string;
  email?: string;
}

export interface ConsentState {
  tcpaConsent: boolean;
  dataSharing: boolean;
  marketingEmails: boolean;
  marketingSMS: boolean;
  termsAccepted: boolean;
  privacyAccepted: boolean;
}

const TCPAConsent: React.FC<TCPAConsentProps> = ({ onConsentChange, phoneNumber, email }) => {
  const [consents, setConsents] = useState<ConsentState>({
    tcpaConsent: false,
    dataSharing: false,
    marketingEmails: false,
    marketingSMS: false,
    termsAccepted: false,
    privacyAccepted: false
  });

  const handleConsentChange = (key: keyof ConsentState, value: boolean) => {
    const newConsents = { ...consents, [key]: value };
    setConsents(newConsents);
    onConsentChange(newConsents);
  };

  const allRequiredConsentsGiven = consents.tcpaConsent && consents.dataSharing &&
                                    consents.termsAccepted && consents.privacyAccepted;

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
        <div className="flex items-start mb-4">
          <AlertCircle className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-primary-navy mb-2">Required Consents & Authorizations</h3>
            <p className="text-sm text-neutral-gray">
              Please review and provide the following required consents to proceed with your loan application.
              These consents are necessary for us to connect you with our lending partners.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-primary-blue transition-colors">
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              checked={consents.tcpaConsent}
              onChange={(e) => handleConsentChange('tcpaConsent', e.target.checked)}
              className="mt-1 h-5 w-5 text-primary-blue border-gray-300 rounded focus:ring-primary-blue flex-shrink-0"
              required
            />
            <div className="ml-4 flex-1">
              <div className="flex items-center mb-2">
                <Phone className="h-5 w-5 text-primary-blue mr-2" />
                <span className="font-bold text-neutral-slate">TCPA Consent (Required)</span>
              </div>
              <p className="text-sm text-neutral-gray leading-relaxed">
                By providing your phone number{phoneNumber && ` (${phoneNumber})`}, you expressly consent to receive
                telemarketing calls, text messages, artificial or prerecorded voice messages, and emails from Cash Bear Loans
                and our lending partners at the number and email address you provided. You understand that these calls and
                messages may be made using an automatic telephone dialing system, and that your consent is not required
                as a condition of purchasing any goods or services. You agree that calls and messages may be made to
                the phone number you provided even if it is a wireless number. Message and data rates may apply.
                You may revoke this consent at any time by contacting us at 1-800-CASH-BEAR-LOANS or unsubscribe@cashbearloan.com.
              </p>
            </div>
          </label>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-primary-blue transition-colors">
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              checked={consents.dataSharing}
              onChange={(e) => handleConsentChange('dataSharing', e.target.checked)}
              className="mt-1 h-5 w-5 text-primary-blue border-gray-300 rounded focus:ring-primary-blue flex-shrink-0"
              required
            />
            <div className="ml-4 flex-1">
              <div className="flex items-center mb-2">
                <MessageSquare className="h-5 w-5 text-success-emerald mr-2" />
                <span className="font-bold text-neutral-slate">Data Sharing Authorization (Required)</span>
              </div>
              <p className="text-sm text-neutral-gray leading-relaxed">
                I authorize Cash Bear Loans to share my personal information, including but not limited to my name,
                contact information, Social Security number, employment information, and financial information with
                one or more licensed lending partners for the purpose of evaluating my loan application. I understand
                that each lending partner will independently review my information and may contact me directly with
                loan offers. I acknowledge that Cash Bear Loans is a loan marketplace, not a lender, and that any
                loan offers I receive will come from licensed third-party lending partners.
              </p>
            </div>
          </label>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-primary-blue transition-colors">
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              checked={consents.termsAccepted}
              onChange={(e) => handleConsentChange('termsAccepted', e.target.checked)}
              className="mt-1 h-5 w-5 text-primary-blue border-gray-300 rounded focus:ring-primary-blue flex-shrink-0"
              required
            />
            <div className="ml-4 flex-1">
              <div className="flex items-center mb-2">
                <CheckCircle className="h-5 w-5 text-warm-orange mr-2" />
                <span className="font-bold text-neutral-slate">Terms & Conditions (Required)</span>
              </div>
              <p className="text-sm text-neutral-gray leading-relaxed">
                I have read, understand, and agree to the{' '}
                <a href="#" className="text-primary-blue hover:underline font-semibold">Terms and Conditions</a>
                {' '}and{' '}
                <a href="#" className="text-primary-blue hover:underline font-semibold">Advertising Disclosure</a>.
                I understand that Cash Bear Loans is compensated by lending partners when loans are originated.
              </p>
            </div>
          </label>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-primary-blue transition-colors">
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              checked={consents.privacyAccepted}
              onChange={(e) => handleConsentChange('privacyAccepted', e.target.checked)}
              className="mt-1 h-5 w-5 text-primary-blue border-gray-300 rounded focus:ring-primary-blue flex-shrink-0"
              required
            />
            <div className="ml-4 flex-1">
              <div className="flex items-center mb-2">
                <CheckCircle className="h-5 w-5 text-purple-primary mr-2" />
                <span className="font-bold text-neutral-slate">Privacy Policy (Required)</span>
              </div>
              <p className="text-sm text-neutral-gray leading-relaxed">
                I have read and agree to the{' '}
                <a href="#" className="text-primary-blue hover:underline font-semibold">Privacy Policy</a>.
                I understand how my personal information will be collected, used, and shared.
              </p>
            </div>
          </label>
        </div>

        <div className="bg-gray-50 border-2 border-gray-300 rounded-xl p-5">
          <h4 className="font-bold text-neutral-slate mb-3 flex items-center">
            <Mail className="h-5 w-5 text-primary-blue mr-2" />
            Optional Marketing Communications
          </h4>

          <div className="space-y-3">
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={consents.marketingEmails}
                onChange={(e) => handleConsentChange('marketingEmails', e.target.checked)}
                className="mt-1 h-5 w-5 text-primary-blue border-gray-300 rounded focus:ring-primary-blue flex-shrink-0"
              />
              <div className="ml-4">
                <span className="font-semibold text-neutral-slate">Email Marketing (Optional)</span>
                <p className="text-sm text-neutral-gray">
                  I would like to receive promotional emails about loan products, financial tips, and special offers.
                  I can unsubscribe at any time.
                </p>
              </div>
            </label>

            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={consents.marketingSMS}
                onChange={(e) => handleConsentChange('marketingSMS', e.target.checked)}
                className="mt-1 h-5 w-5 text-primary-blue border-gray-300 rounded focus:ring-primary-blue flex-shrink-0"
              />
              <div className="ml-4">
                <span className="font-semibold text-neutral-slate">SMS Marketing (Optional)</span>
                <p className="text-sm text-neutral-gray">
                  I would like to receive promotional text messages about loan products and special offers.
                  Message and data rates may apply. I can opt out at any time by texting STOP.
                </p>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border-2 border-success-emerald rounded-xl p-5">
        <div className="flex items-start">
          <CheckCircle className={`h-6 w-6 mr-3 flex-shrink-0 mt-1 ${allRequiredConsentsGiven ? 'text-success-emerald' : 'text-gray-400'}`} />
          <div>
            <h4 className="font-bold text-neutral-slate mb-2">Your Rights</h4>
            <ul className="text-sm text-neutral-gray space-y-1 list-disc list-inside">
              <li>You may revoke any consent at any time by contacting us</li>
              <li>Revoking consent does not affect previously authorized actions</li>
              <li>You are not required to provide optional marketing consents</li>
              <li>Your information is protected under our Privacy Policy</li>
              <li>You have the right to request deletion of your personal data</li>
            </ul>
          </div>
        </div>
      </div>

      {!allRequiredConsentsGiven && (
        <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-4">
          <p className="text-sm font-semibold text-neutral-slate flex items-center">
            <AlertCircle className="h-5 w-5 text-amber-600 mr-2" />
            All required consents must be provided to proceed with your application.
          </p>
        </div>
      )}
    </div>
  );
};

export default TCPAConsent;
