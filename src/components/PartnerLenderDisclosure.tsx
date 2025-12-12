import React from 'react';
import { Shield, CheckCircle, Award, Scale } from 'lucide-react';

const PartnerLenderDisclosure: React.FC = () => {
  const partners = [
    {
      name: 'National Consumer Lending',
      license: 'NMLS #1234567',
      states: '50 States',
      rating: 'A+',
      features: ['BBB Accredited', 'FDIC Member', 'Licensed in All States']
    },
    {
      name: 'Freedom Financial Network',
      license: 'NMLS #2345678',
      states: '48 States',
      rating: 'A',
      features: ['State Licensed', 'TILA Compliant', '10+ Years Operating']
    },
    {
      name: 'American Credit Services',
      license: 'NMLS #3456789',
      states: '45 States',
      rating: 'A+',
      features: ['Regulated Lender', 'Consumer Protection', 'Transparent Terms']
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-light-gray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-primary-blue/10 p-4 rounded-2xl">
              <Shield className="h-12 w-12 text-primary-blue" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-slate mb-4">
            Our Licensed Lending Partners
          </h2>
          <p className="text-base lg:text-lg text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            We connect you with a network of licensed, regulated lending institutions.
            All partners comply with federal and state lending regulations.
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6 lg:p-8 mb-12">
          <h3 className="text-xl lg:text-2xl font-bold text-primary-navy mb-4 flex items-center">
            <Award className="h-6 w-6 mr-3 text-primary-blue" />
            How We Select Lending Partners
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-success-emerald mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-neutral-slate">Licensed & Regulated</p>
                <p className="text-sm text-neutral-gray">All partners must be licensed in states where they operate</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-success-emerald mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-neutral-slate">Consumer Protection</p>
                <p className="text-sm text-neutral-gray">Compliance with TILA, ECOA, and state consumer laws</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-success-emerald mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-neutral-slate">Transparent Terms</p>
                <p className="text-sm text-neutral-gray">Clear disclosure of all fees, rates, and loan terms</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-success-emerald mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-neutral-slate">Proven Track Record</p>
                <p className="text-sm text-neutral-gray">Established lenders with positive customer reviews</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-success-gradient text-white text-xl font-bold px-4 py-2 rounded-lg">
                  {partner.rating}
                </div>
                <Scale className="h-8 w-8 text-primary-blue" />
              </div>

              <h3 className="text-xl font-bold text-neutral-slate mb-2">
                {partner.name}
              </h3>

              <div className="space-y-2 mb-4">
                <p className="text-sm text-neutral-gray">
                  <span className="font-semibold">License:</span> {partner.license}
                </p>
                <p className="text-sm text-neutral-gray">
                  <span className="font-semibold">Operating In:</span> {partner.states}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-xs font-semibold text-neutral-slate mb-2">Key Features:</p>
                <div className="space-y-1">
                  {partner.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-success-emerald rounded-full mr-2"></div>
                      <p className="text-xs text-neutral-gray">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl p-6 lg:p-8">
          <h3 className="text-xl lg:text-2xl font-bold text-neutral-slate mb-4">Important Information About Partner Lenders</h3>
          <div className="space-y-4 text-neutral-gray">
            <div className="flex items-start">
              <div className="bg-primary-blue rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <p className="leading-relaxed">
                <strong className="text-neutral-slate">Independent Decisions:</strong> Each lending partner independently
                evaluates your application and makes their own lending decisions based on their underwriting criteria.
              </p>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-blue rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <p className="leading-relaxed">
                <strong className="text-neutral-slate">Variable Terms:</strong> Loan terms including APR, fees, and
                repayment schedules are determined by each lending partner and may vary based on your creditworthiness
                and state regulations.
              </p>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-blue rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <p className="leading-relaxed">
                <strong className="text-neutral-slate">Data Sharing:</strong> When you submit an application, your
                information will be shared with one or more lending partners who will contact you directly with loan
                offers if you qualify.
              </p>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-blue rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                <span className="text-white text-sm font-bold">4</span>
              </div>
              <p className="leading-relaxed">
                <strong className="text-neutral-slate">Compensation Disclosure:</strong> We receive compensation from
                lending partners when you are connected with them and when loans are originated. This does not affect
                the loan terms you receive.
              </p>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-blue rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                <span className="text-white text-sm font-bold">5</span>
              </div>
              <p className="leading-relaxed">
                <strong className="text-neutral-slate">Your Rights:</strong> You have the right to review all loan terms
                before accepting any offer, and you are never obligated to accept a loan from any lending partner.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-gray">
            Note: The lending partners shown are examples. Actual partners available to you may vary based on your
            state of residence and individual qualifications. All partners are required to comply with applicable
            federal and state lending laws.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerLenderDisclosure;
