import React from 'react';
import { AlertCircle, DollarSign, Users, FileText, ExternalLink } from 'lucide-react';

const AdvertisingDisclosure: React.FC = () => {
  return (
    <div className="min-h-screen bg-light-gray py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-primary-blue/10 p-4 rounded-full">
              <AlertCircle className="h-12 w-12 text-primary-blue" />
            </div>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-neutral-slate text-center mb-6">
            Advertising Disclosure
          </h1>

          <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-neutral-slate mb-3 flex items-center">
              <AlertCircle className="h-6 w-6 text-amber-600 mr-2" />
              Important Notice About Our Service
            </h2>
            <p className="text-base text-neutral-slate font-semibold leading-relaxed">
              Cash Bear Loans is a loan marketplace and lead generator, NOT a direct lender.
              We connect consumers with licensed lending partners who may offer loan products.
              We receive compensation from our lending partners when you are connected with them
              and when a loan is successfully originated.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <div className="flex items-center mb-4">
                <DollarSign className="h-8 w-8 text-primary-blue mr-3" />
                <h2 className="text-2xl font-bold text-neutral-slate">How We Are Compensated</h2>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <p className="text-neutral-gray leading-relaxed">
                  We operate as an affiliate marketing platform and receive compensation in the following ways:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-gray ml-4">
                  <li>
                    <strong>Lead Generation Fees:</strong> We receive payment from lending partners when we
                    successfully connect them with potential borrowers who submit applications.
                  </li>
                  <li>
                    <strong>Referral Commissions:</strong> We may earn a commission when a loan is successfully
                    originated through one of our lending partners, typically ranging from $50 to $150 per funded loan.
                  </li>
                  <li>
                    <strong>Marketing Partnerships:</strong> Some lending partners pay us for advertising space
                    and prominent placement on our website.
                  </li>
                </ul>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <p className="text-neutral-slate font-semibold">
                    Important: The compensation we receive does NOT affect the loan terms, interest rates,
                    or fees you may be offered by lending partners. All loan terms are determined solely
                    by the lending partner based on their underwriting criteria.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-success-emerald mr-3" />
                <h2 className="text-2xl font-bold text-neutral-slate">Our Lending Partners</h2>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <p className="text-neutral-gray leading-relaxed">
                  We work with a network of licensed lending institutions across the United States.
                  When you submit an application through our platform:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-gray ml-4">
                  <li>Your information may be shared with multiple lending partners simultaneously</li>
                  <li>Each lending partner independently evaluates your application</li>
                  <li>Lending partners determine approval, loan amounts, and terms based on their own criteria</li>
                  <li>You are under no obligation to accept any loan offer you receive</li>
                  <li>Each lending partner is licensed and regulated in the states where they operate</li>
                </ul>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                  <p className="text-neutral-slate font-semibold">
                    All of our lending partners are required to be licensed, regulated, and compliant with
                    applicable federal and state lending laws, including the Truth in Lending Act (TILA),
                    Equal Credit Opportunity Act (ECOA), and state-specific lending regulations.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-warm-orange mr-3" />
                <h2 className="text-2xl font-bold text-neutral-slate">What This Means For You</h2>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-primary-blue rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-slate mb-1">We Are NOT the Lender</h3>
                      <p className="text-neutral-gray">
                        Cash Bear Loans does not make lending decisions, approve loans, or fund any loans.
                        We are a marketplace that connects you with licensed lenders.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-blue rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-slate mb-1">No Cost to You</h3>
                      <p className="text-neutral-gray">
                        Our service is free to consumers. You pay nothing to use our platform to find lending partners.
                        Our compensation comes from lending partners, not from borrowers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-blue rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-slate mb-1">Your Loan Terms Are Set by the Lender</h3>
                      <p className="text-neutral-gray">
                        The APR, fees, repayment terms, and all other loan conditions are determined by the
                        lending partner who extends you an offer, not by Cash Bear Loans.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-blue rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-slate mb-1">Your Information Is Shared</h3>
                      <p className="text-neutral-gray">
                        When you submit an application, your information will be shared with one or more
                        lending partners. You will be asked to provide explicit consent before this sharing occurs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-blue rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <span className="text-white text-sm font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-slate mb-1">No Guaranteed Approval</h3>
                      <p className="text-neutral-gray">
                        Submitting an application through our platform does not guarantee loan approval.
                        All lending decisions are made by our lending partners based on their underwriting criteria.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <ExternalLink className="h-8 w-8 text-purple-primary mr-3" />
                <h2 className="text-2xl font-bold text-neutral-slate">Third-Party Advertising</h2>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <p className="text-neutral-gray leading-relaxed">
                  Our website and services may be promoted through various advertising channels, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-gray ml-4">
                  <li>Google Ads and other search engine marketing platforms</li>
                  <li>Social media advertising (Facebook, Instagram, etc.)</li>
                  <li>Display advertising networks</li>
                  <li>Affiliate marketing partners</li>
                  <li>Email marketing campaigns</li>
                </ul>
                <p className="text-neutral-gray leading-relaxed">
                  All advertising complies with applicable regulations including Google Ads policies for
                  financial services, Federal Trade Commission (FTC) guidelines, and state consumer
                  protection laws.
                </p>
              </div>
            </section>

            <section>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-6">
                <h2 className="text-xl font-bold text-neutral-slate mb-4">Your Rights and Protections</h2>
                <div className="space-y-3 text-neutral-gray">
                  <p>
                    <strong>Transparency:</strong> We are committed to clear disclosure of our business model
                    and compensation arrangements.
                  </p>
                  <p>
                    <strong>Privacy:</strong> Your personal information is protected under our Privacy Policy
                    and is never sold to third parties for marketing purposes without your consent.
                  </p>
                  <p>
                    <strong>Choice:</strong> You have the right to opt out of communications and to choose
                    whether or not to accept any loan offer you receive.
                  </p>
                  <p>
                    <strong>Fair Lending:</strong> All lending partners must comply with fair lending laws
                    and cannot discriminate based on protected characteristics.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-8 pt-8 border-t-2 border-gray-200">
              <p className="text-sm text-neutral-gray leading-relaxed">
                <strong>Last Updated:</strong> January 2025
              </p>
              <p className="text-sm text-neutral-gray leading-relaxed mt-4">
                If you have questions about this disclosure or our business practices, please contact us at{' '}
                <a href="mailto:disclosure@cashbearloan.com" className="text-primary-blue hover:underline">
                  disclosure@cashbearloan.com
                </a>{' '}
                or call{' '}
                <a href="tel:1-800-CASH-BEAR-LOANS" className="text-primary-blue hover:underline">
                  1-800-CASH-BEAR-LOANS
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingDisclosure;
