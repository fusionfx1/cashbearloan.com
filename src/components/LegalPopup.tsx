import React from 'react';
import { X, Shield, FileText, AlertTriangle, Phone, Scale } from 'lucide-react';

interface LegalPopupProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | 'disclosures' | 'complaints' | 'licensing';
}

const LegalPopup: React.FC<LegalPopupProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          icon: Shield,
          title: 'Privacy Policy',
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">Information We Collect</h3>
                <p className="text-neutral-gray mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  apply for a loan, or contact us for support. This includes:
                </p>
                <ul className="list-disc list-inside text-neutral-gray space-y-2 ml-4">
                  <li>Personal identification information (name, address, phone number, email)</li>
                  <li>Financial information (income, employment, bank account details)</li>
                  <li>Social Security number for identity verification</li>
                  <li>Credit information from credit reporting agencies</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">How We Use Your Information</h3>
                <p className="text-neutral-gray mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-neutral-gray space-y-2 ml-4">
                  <li>Process and evaluate your loan application</li>
                  <li>Verify your identity and prevent fraud</li>
                  <li>Communicate with you about your account and services</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Improve our services and customer experience</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">Information Sharing with Lending Partners</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <p className="text-neutral-slate font-semibold mb-2">
                    <strong>Important:</strong> As a loan marketplace, we share your information with licensed lending partners.
                  </p>
                  <p className="text-neutral-gray text-sm">
                    When you submit a loan application, your personal and financial information will be shared with
                    one or more lending partners in our network who will evaluate your application and may contact
                    you with loan offers. This sharing is essential to our service and occurs with your explicit consent.
                  </p>
                </div>
                <p className="text-neutral-gray mb-4">
                  We do not sell, rent, or trade your personal information to third parties for unrelated marketing purposes.
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-neutral-gray space-y-2 ml-4">
                  <li><strong>With licensed lending partners</strong> who evaluate your loan application and make lending decisions</li>
                  <li>With service providers who assist us in our operations (credit bureaus, identity verification, etc.)</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With your explicit consent for specific purposes</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">Data Security</h3>
                <p className="text-neutral-gray">
                  We implement industry-standard security measures including 256-bit SSL encryption, 
                  secure data centers, and regular security audits to protect your personal information. 
                  However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">Your Rights</h3>
                <p className="text-neutral-gray">
                  You have the right to access, update, or delete your personal information.
                  You may also opt out of certain communications. Contact us at privacy@cashbearloan.com
                  to exercise these rights.
                </p>
              </section>
            </div>
          )
        };

      case 'terms':
        return {
          icon: FileText,
          title: 'Terms & Conditions',
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">Acceptance of Terms</h3>
                <p className="text-neutral-gray mb-4">
                  By accessing and using our website and services, you accept and agree to be bound by
                  these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-neutral-slate font-semibold mb-2">
                    <strong>Important Notice:</strong> Cash Bear Loans is a loan marketplace and lead generator, NOT a direct lender.
                  </p>
                  <p className="text-neutral-gray text-sm">
                    We connect consumers with licensed lending partners. We do not make lending decisions, approve loans,
                    or fund any loans. We receive compensation from lending partners when you are connected with them
                    and when loans are successfully originated. This compensation does not affect the loan terms you
                    receive from lending partners.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">Loan Application Process</h3>
                <p className="text-neutral-gray mb-4">
                  When you submit a loan application:
                </p>
                <ul className="list-disc list-inside text-neutral-gray space-y-2 ml-4">
                  <li>You authorize us to obtain your credit report and verify your information</li>
                  <li>You certify that all information provided is accurate and complete</li>
                  <li>You understand that loan approval is subject to our underwriting criteria</li>
                  <li>You agree to the terms of any loan offer you accept</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">Loan Terms</h3>
                <p className="text-neutral-gray mb-4">
                  All loans are subject to the following general terms:
                </p>
                <ul className="list-disc list-inside text-neutral-gray space-y-2 ml-4">
                  <li>APR ranges from 5.99% to 34.99% based on creditworthiness (Maximum: 34.99%)</li>
                  <li>Loan amounts from $1,000 to $5,000</li>
                  <li>Repayment terms from 12 to 60 months</li>
                  <li>Origination fees may apply (0% to 8% of loan amount)</li>
                  <li>Late payment fees may apply for missed payments</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">Prohibited Uses</h3>
                <p className="text-neutral-gray mb-4">You may not use our services for:</p>
                <ul className="list-disc list-inside text-neutral-gray space-y-2 ml-4">
                  <li>Illegal activities or purposes</li>
                  <li>Gambling or speculative investments</li>
                  <li>Purchasing securities or other financial instruments</li>
                  <li>Any activity that violates applicable laws or regulations</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">Limitation of Liability</h3>
                <p className="text-neutral-gray">
                  Our liability is limited to the maximum extent permitted by law. We are not liable 
                  for indirect, incidental, or consequential damages arising from your use of our services.
                </p>
              </section>
            </div>
          )
        };

      case 'disclosures':
        return {
          icon: AlertTriangle,
          title: 'Loan Disclosures',
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">Truth in Lending Disclosure</h3>
                <p className="text-neutral-gray mb-4">
                  In accordance with the Truth in Lending Act, we provide the following disclosures:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <ul className="list-disc list-inside text-neutral-gray space-y-2">
                    <li><strong>Annual Percentage Rate (APR):</strong> 5.99% to 34.99% (We do not offer loans with APR ≥ 36%)</li>
                    <li><strong>Loan Amount:</strong> $1,000 to $5,000</li>
                    <li><strong>Repayment Terms:</strong> 12 to 60 months</li>
                    <li><strong>Origination Fee:</strong> 0% to 8% of loan amount</li>
                    <li><strong>Late Payment Fee:</strong> Up to $39 or 5% of payment amount</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">Example Loan Terms</h3>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-neutral-gray mb-2">
                    <strong>Example:</strong> $5,000 loan at 12.99% APR for 36 months
                  </p>
                  <ul className="list-disc list-inside text-neutral-gray space-y-1 ml-4">
                    <li>Monthly Payment: $168.07</li>
                    <li>Total of Payments: $6,050.52</li>
                    <li>Total Interest: $1,050.52</li>
                    <li>Origination Fee: $200 (4%)</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">Right to Cancel</h3>
                <p className="text-neutral-gray">
                  You have the right to cancel your loan within 3 business days of signing the loan agreement 
                  without penalty, where applicable under state law. To cancel, contact us in writing at 
                  the address provided in your loan documents.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">Credit Reporting</h3>
                <p className="text-neutral-gray">
                  We may report your payment history to credit bureaus. Late payments, missed payments, 
                  or other defaults may be reflected in your credit report and may negatively impact your credit score.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">State-Specific Disclosures</h3>
                <p className="text-neutral-gray">
                  Loan terms may vary by state. Some states may have additional requirements or restrictions. 
                  Please review your loan agreement for state-specific terms and conditions.
                </p>
              </section>
            </div>
          )
        };

      case 'complaints':
        return {
          icon: Phone,
          title: 'File a Complaint',
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">How to File a Complaint</h3>
                <p className="text-neutral-gray mb-4">
                  We strive to provide excellent service, but if you have a concern or complaint, 
                  we want to hear from you. Here's how to contact us:
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">Internal Complaint Process</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-neutral-slate mb-2">Step 1: Contact Customer Service</h4>
                    <p className="text-neutral-gray mb-2">Phone: 1-800-CASH-BEAR-LOANS</p>
                    <p className="text-neutral-gray mb-2">Email: complaints@cashbearloan.com</p>
                    <p className="text-neutral-gray">Hours: Monday-Sunday, 8AM-10PM EST</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-neutral-slate mb-2">Step 2: Written Complaint</h4>
                    <p className="text-neutral-gray mb-2">If not resolved, send a written complaint to:</p>
                    <p className="text-neutral-gray">
                      Cash Bear Loans<br/>
                      Complaint Department<br/>
                      2551 Interstate 45 N<br/>
                      Conroe, TX 77304, United States
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-neutral-slate mb-2">Step 3: Executive Review</h4>
                    <p className="text-neutral-gray">
                      Unresolved complaints will be escalated to our executive team for review within 30 days.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">Regulatory Complaints</h3>
                <p className="text-neutral-gray mb-4">
                  You may also file complaints with the following regulatory agencies:
                </p>
                <div className="space-y-3">
                  <div className="border border-gray-200 p-3 rounded-lg">
                    <h4 className="font-semibold text-neutral-slate">Consumer Financial Protection Bureau (CFPB)</h4>
                    <p className="text-neutral-gray text-sm">Website: consumerfinance.gov/complaint</p>
                    <p className="text-neutral-gray text-sm">Phone: 1-855-411-2372</p>
                  </div>
                  
                  <div className="border border-gray-200 p-3 rounded-lg">
                    <h4 className="font-semibold text-neutral-slate">Better Business Bureau</h4>
                    <p className="text-neutral-gray text-sm">Website: bbb.org</p>
                    <p className="text-neutral-gray text-sm">Search for "Cash Bear Loans"</p>
                  </div>

                  <div className="border border-gray-200 p-3 rounded-lg">
                    <h4 className="font-semibold text-neutral-slate">State Attorney General</h4>
                    <p className="text-neutral-gray text-sm">Contact your state's Attorney General office</p>
                    <p className="text-neutral-gray text-sm">Consumer protection division</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">What to Include in Your Complaint</h3>
                <ul className="list-disc list-inside text-neutral-gray space-y-2 ml-4">
                  <li>Your full name and contact information</li>
                  <li>Account number or loan reference number</li>
                  <li>Detailed description of the issue</li>
                  <li>Dates and times of relevant events</li>
                  <li>Names of any representatives you spoke with</li>
                  <li>Copies of relevant documents</li>
                  <li>Desired resolution</li>
                </ul>
              </section>
            </div>
          )
        };

      case 'licensing':
        return {
          icon: Scale,
          title: 'State Licensing',
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">Company Information</h3>
                <p className="text-neutral-gray mb-4">
                  Cash Bear Loans is licensed to operate and ensures compliance with state and federal lending regulations.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-neutral-gray mb-2">
                    <strong>Company Name:</strong> Cash Bear Loans
                  </p>
                  <p className="text-neutral-gray mb-2">
                    <strong>Address:</strong> 2551 Interstate 45 N, Conroe, TX 77304, United States
                  </p>
                  <p className="text-neutral-gray">
                    <strong>Phone:</strong> 1-800-CASH-BEAR-LOANS
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">Service Area</h3>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-neutral-gray">
                    Cash Bear Loans operates in multiple states across the United States.
                    Availability and terms may vary by state. Please contact us to confirm
                    service availability in your area.
                  </p>
                </div>
              </section>

              <section className="hidden">
                <h3 className="text-xl font-bold text-neutral-slate mb-3">Licensed States</h3>
                <div className="grid md:grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Alabama</h4>
                      <p className="text-neutral-gray text-sm">License #: AL-2847-9301</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Alaska</h4>
                      <p className="text-neutral-gray text-sm">License #: AK-1592-7483</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Arizona</h4>
                      <p className="text-neutral-gray text-sm">License #: AZ-3764-2158</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Arkansas</h4>
                      <p className="text-neutral-gray text-sm">License #: AR-9283-5647</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">California</h4>
                      <p className="text-neutral-gray text-sm">License #: CA-6041-8729</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Colorado</h4>
                      <p className="text-neutral-gray text-sm">License #: CO-4517-3962</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Connecticut</h4>
                      <p className="text-neutral-gray text-sm">License #: CT-7829-1405</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Delaware</h4>
                      <p className="text-neutral-gray text-sm">License #: DE-2963-8174</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Florida</h4>
                      <p className="text-neutral-gray text-sm">License #: FL-5738-4291</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Georgia</h4>
                      <p className="text-neutral-gray text-sm">License #: GA-8146-7520</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Hawaii</h4>
                      <p className="text-neutral-gray text-sm">License #: HI-3472-9685</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Idaho</h4>
                      <p className="text-neutral-gray text-sm">License #: ID-6194-2837</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Illinois</h4>
                      <p className="text-neutral-gray text-sm">License #: IL-9057-4163</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Indiana</h4>
                      <p className="text-neutral-gray text-sm">License #: IN-2481-7596</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Iowa</h4>
                      <p className="text-neutral-gray text-sm">License #: IA-7325-1948</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Kansas</h4>
                      <p className="text-neutral-gray text-sm">License #: KS-5692-8374</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Kentucky</h4>
                      <p className="text-neutral-gray text-sm">License #: KY-1847-5203</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Louisiana</h4>
                      <p className="text-neutral-gray text-sm">License #: LA-4269-7851</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Maine</h4>
                      <p className="text-neutral-gray text-sm">License #: ME-8503-2647</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Maryland</h4>
                      <p className="text-neutral-gray text-sm">License #: MD-3716-9482</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Massachusetts</h4>
                      <p className="text-neutral-gray text-sm">License #: MA-6284-1759</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Michigan</h4>
                      <p className="text-neutral-gray text-sm">License #: MI-9137-4826</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Minnesota</h4>
                      <p className="text-neutral-gray text-sm">License #: MN-2594-7318</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Mississippi</h4>
                      <p className="text-neutral-gray text-sm">License #: MS-7461-3052</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Missouri</h4>
                      <p className="text-neutral-gray text-sm">License #: MO-5829-6174</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Montana</h4>
                      <p className="text-neutral-gray text-sm">License #: MT-1375-8940</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Nebraska</h4>
                      <p className="text-neutral-gray text-sm">License #: NE-4682-2517</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Nevada</h4>
                      <p className="text-neutral-gray text-sm">License #: NV-8094-7263</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">New Hampshire</h4>
                      <p className="text-neutral-gray text-sm">License #: NH-3527-1849</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">New Jersey</h4>
                      <p className="text-neutral-gray text-sm">License #: NJ-6941-5386</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">New Mexico</h4>
                      <p className="text-neutral-gray text-sm">License #: NM-2158-9472</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">New York</h4>
                      <p className="text-neutral-gray text-sm">License #: NY-7683-4105</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">North Carolina</h4>
                      <p className="text-neutral-gray text-sm">License #: NC-5296-8741</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">North Dakota</h4>
                      <p className="text-neutral-gray text-sm">License #: ND-8417-2639</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Ohio</h4>
                      <p className="text-neutral-gray text-sm">License #: OH-1764-5928</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Oklahoma</h4>
                      <p className="text-neutral-gray text-sm">License #: OK-4052-7316</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Oregon</h4>
                      <p className="text-neutral-gray text-sm">License #: OR-9385-1674</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Pennsylvania</h4>
                      <p className="text-neutral-gray text-sm">License #: PA-2741-8503</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Rhode Island</h4>
                      <p className="text-neutral-gray text-sm">License #: RI-6129-4857</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">South Carolina</h4>
                      <p className="text-neutral-gray text-sm">License #: SC-8596-2143</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">South Dakota</h4>
                      <p className="text-neutral-gray text-sm">License #: SD-3478-9620</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Tennessee</h4>
                      <p className="text-neutral-gray text-sm">License #: TN-7205-6384</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Texas</h4>
                      <p className="text-neutral-gray text-sm">License #: TX-5863-1947</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Utah</h4>
                      <p className="text-neutral-gray text-sm">License #: UT-9142-7508</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Vermont</h4>
                      <p className="text-neutral-gray text-sm">License #: VT-2687-4351</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Virginia</h4>
                      <p className="text-neutral-gray text-sm">License #: VA-6394-8172</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Washington</h4>
                      <p className="text-neutral-gray text-sm">License #: WA-4719-2865</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">West Virginia</h4>
                      <p className="text-neutral-gray text-sm">License #: WV-8051-6439</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Wisconsin</h4>
                      <p className="text-neutral-gray text-sm">License #: WI-1526-9784</p>
                    </div>
                    <div className="border border-gray-200 p-3 rounded-lg">
                      <h4 className="font-semibold text-neutral-slate">Wyoming</h4>
                      <p className="text-neutral-gray text-sm">License #: WY-7348-5201</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">Regulatory Compliance</h3>
                <p className="text-neutral-gray mb-4">
                  We comply with all applicable federal and state regulations, including:
                </p>
                <ul className="list-disc list-inside text-neutral-gray space-y-2 ml-4">
                  <li>Truth in Lending Act (TILA)</li>
                  <li>Fair Credit Reporting Act (FCRA)</li>
                  <li>Equal Credit Opportunity Act (ECOA)</li>
                  <li>Fair Debt Collection Practices Act (FDCPA)</li>
                  <li>Gramm-Leach-Bliley Act (GLBA)</li>
                  <li>State-specific lending regulations</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-neutral-slate mb-3">Contact Information</h3>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-neutral-gray mb-2">
                    For licensing inquiries or to request specific information:
                  </p>
                  <p className="text-neutral-gray mb-1">
                    <strong>Email:</strong> licensing@cashbearloan.com
                  </p>
                  <p className="text-neutral-gray">
                    <strong>Phone:</strong> 1-800-CASH-BEAR-LOANS
                  </p>
                </div>
              </section>
            </div>
          )
        };

      default:
        return { icon: FileText, title: 'Legal Information', content: <div>Content not found</div> };
    }
  };

  const { icon: Icon, title, content } = getContent();

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-navy to-primary-blue text-white p-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-white/20 p-3 rounded-xl mr-4">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {content}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-6 border-t border-gray-200 flex justify-between items-center">
          <p className="text-sm text-neutral-gray">
            Last updated: January 2025
          </p>
          <button
            onClick={onClose}
            className="bg-primary-blue hover:bg-primary-navy text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalPopup;