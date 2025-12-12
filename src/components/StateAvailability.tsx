import React, { useState } from 'react';
import { MapPin, AlertCircle, CheckCircle, XCircle, Info } from 'lucide-react';

const StateAvailability: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>('');

  const stateCategories = {
    available: [
      'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
      'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
      'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
      'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
      'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
      'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
      'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
      'Wisconsin', 'Wyoming'
    ],
    restricted: [] as string[],
    notAvailable: [] as string[]
  };

  const getStateStatus = (state: string): 'available' | 'restricted' | 'notAvailable' => {
    if (stateCategories.available.includes(state)) return 'available';
    if (stateCategories.restricted.includes(state)) return 'restricted';
    return 'notAvailable';
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-primary-blue/10 p-4 rounded-2xl">
              <MapPin className="h-12 w-12 text-primary-blue" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-slate mb-4">
            State Availability & Regulations
          </h2>
          <p className="text-base lg:text-lg text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            Our lending partner network operates in compliance with state-specific regulations.
            Check if services are available in your state.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200 rounded-2xl p-6 lg:p-8 mb-12">
          <div className="flex items-start mb-6">
            <Info className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-primary-navy mb-2">Important State Information</h3>
              <p className="text-neutral-gray leading-relaxed">
                Loan terms, maximum loan amounts, and APR ranges may vary by state due to state-specific lending
                regulations. Some states have additional consumer protection requirements. Our lending partners
                are licensed and regulated in each state where they operate.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-4 border-2 border-success-emerald">
              <div className="flex items-center mb-2">
                <CheckCircle className="h-6 w-6 text-success-emerald mr-2" />
                <h4 className="font-bold text-neutral-slate">Available States</h4>
              </div>
              <p className="text-2xl font-bold text-success-emerald mb-1">50 States</p>
              <p className="text-sm text-neutral-gray">Full service availability</p>
            </div>

            <div className="bg-white rounded-xl p-4 border-2 border-warm-orange">
              <div className="flex items-center mb-2">
                <AlertCircle className="h-6 w-6 text-warm-orange mr-2" />
                <h4 className="font-bold text-neutral-slate">State Variations</h4>
              </div>
              <p className="text-2xl font-bold text-warm-orange mb-1">Yes</p>
              <p className="text-sm text-neutral-gray">Terms may vary by state</p>
            </div>

            <div className="bg-white rounded-xl p-4 border-2 border-primary-blue">
              <div className="flex items-center mb-2">
                <MapPin className="h-6 w-6 text-primary-blue mr-2" />
                <h4 className="font-bold text-neutral-slate">State Licensed</h4>
              </div>
              <p className="text-2xl font-bold text-primary-blue mb-1">100%</p>
              <p className="text-sm text-neutral-gray">All partners licensed</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 lg:p-8 mb-8">
          <h3 className="text-xl lg:text-2xl font-bold text-neutral-slate mb-6">State-Specific Loan Terms</h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-neutral-slate uppercase tracking-wider">
                    Example State
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-neutral-slate uppercase tracking-wider">
                    Max APR
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-neutral-slate uppercase tracking-wider">
                    Max Loan Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-neutral-slate uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-slate">California</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-gray">5.99% - 34.99%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-gray">$5,000</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-success-emerald">
                      Available
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-slate">New York</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-gray">5.99% - 24.99%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-gray">$5,000</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-success-emerald">
                      Available
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-slate">Texas</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-gray">5.99% - 34.99%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-gray">$5,000</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-success-emerald">
                      Available
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-slate">Florida</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-gray">5.99% - 34.99%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-gray">$5,000</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-success-emerald">
                      Available
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-slate">Illinois</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-gray">5.99% - 34.99%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-gray">$5,000</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-success-emerald">
                      Available
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-neutral-gray mt-4">
            Note: This table shows example states only. Terms shown are representative and actual terms
            offered by lending partners may vary. Contact us for specific information about your state.
          </p>
        </div>

        <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl p-6 lg:p-8">
          <h3 className="text-xl font-bold text-neutral-slate mb-4 flex items-center">
            <AlertCircle className="h-6 w-6 text-amber-600 mr-3" />
            State-Specific Disclosures
          </h3>
          <div className="space-y-4 text-neutral-gray">
            <p className="leading-relaxed">
              <strong className="text-neutral-slate">Licensing:</strong> Our lending partners maintain all required
              state licenses and registrations. License numbers are available upon request and are disclosed in
              loan documents.
            </p>
            <p className="leading-relaxed">
              <strong className="text-neutral-slate">Rate Caps:</strong> Some states impose maximum APR limits.
              Lending partners comply with all state-imposed rate caps and fee restrictions.
            </p>
            <p className="leading-relaxed">
              <strong className="text-neutral-slate">Consumer Protection:</strong> All loans comply with state
              consumer protection laws, including cooling-off periods, payment plan options, and collection
              practice restrictions where applicable.
            </p>
            <p className="leading-relaxed">
              <strong className="text-neutral-slate">Military Members:</strong> Special protections apply to
              active-duty military members and their dependents under the Military Lending Act (MLA),
              including a 36% APR cap under the Military Lending Act. Note: Our maximum APR for all consumers is 34.99%.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-gray mb-4">
            For detailed information about lending regulations and requirements in your specific state,
            please contact us or consult your state's financial regulatory authority.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-primary-blue text-white rounded-lg hover:bg-primary-navy transition-colors font-semibold"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Check Your State
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border-2 border-primary-blue text-primary-blue rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              <Info className="h-5 w-5 mr-2" />
              State Licensing Info
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateAvailability;
