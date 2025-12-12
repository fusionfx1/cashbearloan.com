import React, { useState } from 'react';
import { RefreshCw, Copy, Check } from 'lucide-react';
import {
  generateRandomContactInfo,
  generateMultipleContacts,
  RandomContactInfo
} from '../utils/testDataGenerator';

const TestDataDemo: React.FC = () => {
  const [contact, setContact] = useState<RandomContactInfo>(generateRandomContactInfo());
  const [contacts, setContacts] = useState<RandomContactInfo[]>(generateMultipleContacts(5));
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleRefresh = () => {
    setContact(generateRandomContactInfo());
  };

  const handleRefreshMultiple = () => {
    setContacts(generateMultipleContacts(5));
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const CopyButton: React.FC<{ text: string; field: string }> = ({ text, field }) => (
    <button
      onClick={() => copyToClipboard(text, field)}
      className="ml-2 p-1 hover:bg-gray-100 rounded transition-colors"
      title="Copy to clipboard"
    >
      {copiedField === field ? (
        <Check className="h-4 w-4 text-green-600" />
      ) : (
        <Copy className="h-4 w-4 text-gray-500" />
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Random Test Data Generator
          </h1>
          <p className="text-lg text-gray-600">
            Generate valid US addresses and phone numbers for testing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Single Contact</h2>
              <button
                onClick={handleRefresh}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
                Generate New
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-600 block mb-1">
                  Full Name
                </label>
                <div className="flex items-center bg-gray-50 px-4 py-3 rounded-lg">
                  <span className="flex-1 font-mono">
                    {contact.firstName} {contact.lastName}
                  </span>
                  <CopyButton
                    text={`${contact.firstName} ${contact.lastName}`}
                    field="name"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600 block mb-1">
                  Phone Number
                </label>
                <div className="flex items-center bg-gray-50 px-4 py-3 rounded-lg">
                  <span className="flex-1 font-mono">{contact.phone}</span>
                  <CopyButton text={contact.phone} field="phone" />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600 block mb-1">
                  Email
                </label>
                <div className="flex items-center bg-gray-50 px-4 py-3 rounded-lg">
                  <span className="flex-1 font-mono text-sm">{contact.email}</span>
                  <CopyButton text={contact.email} field="email" />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600 block mb-1">
                  Street Address
                </label>
                <div className="flex items-center bg-gray-50 px-4 py-3 rounded-lg">
                  <span className="flex-1 font-mono">{contact.address.street}</span>
                  <CopyButton text={contact.address.street} field="street" />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600 block mb-1">
                  City
                </label>
                <div className="flex items-center bg-gray-50 px-4 py-3 rounded-lg">
                  <span className="flex-1 font-mono">{contact.address.city}</span>
                  <CopyButton text={contact.address.city} field="city" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-600 block mb-1">
                    State
                  </label>
                  <div className="flex items-center bg-gray-50 px-4 py-3 rounded-lg">
                    <span className="flex-1 font-mono">{contact.address.state}</span>
                    <CopyButton text={contact.address.state} field="state" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600 block mb-1">
                    ZIP Code
                  </label>
                  <div className="flex items-center bg-gray-50 px-4 py-3 rounded-lg">
                    <span className="flex-1 font-mono">{contact.address.zipCode}</span>
                    <CopyButton text={contact.address.zipCode} field="zip" />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600 block mb-1">
                  Full Address
                </label>
                <div className="flex items-center bg-gray-50 px-4 py-3 rounded-lg">
                  <span className="flex-1 font-mono text-sm">
                    {contact.address.fullAddress}
                  </span>
                  <CopyButton text={contact.address.fullAddress} field="fullAddress" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Multiple Contacts</h2>
              <button
                onClick={handleRefreshMultiple}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
                Generate New
              </button>
            </div>

            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {contacts.map((c, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="font-semibold text-gray-900 mb-2">
                    {c.firstName} {c.lastName}
                  </div>
                  <div className="text-sm space-y-1 text-gray-600">
                    <div className="flex items-center">
                      <span className="font-mono">{c.phone}</span>
                      <CopyButton text={c.phone} field={`phone-${index}`} />
                    </div>
                    <div className="flex items-center">
                      <span className="font-mono text-xs">{c.email}</span>
                      <CopyButton text={c.email} field={`email-${index}`} />
                    </div>
                    <div className="flex items-center">
                      <span className="font-mono text-xs">{c.address.fullAddress}</span>
                      <CopyButton text={c.address.fullAddress} field={`address-${index}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Usage Example</h2>
          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
            <pre className="text-sm">
{`import {
  generateRandomContactInfo,
  generateRandomPhone,
  generateRandomAddress,
  generateMultipleContacts
} from './utils/testDataGenerator';

// Generate a single contact
const contact = generateRandomContactInfo();
console.log(contact.firstName); // "James"
console.log(contact.phone);     // "(555) 123-4567"
console.log(contact.address.fullAddress);

// Generate just a phone number
const phone = generateRandomPhone();
console.log(phone); // "(212) 555-1234"

// Generate just an address
const address = generateRandomAddress();
console.log(address.fullAddress);

// Generate multiple contacts
const contacts = generateMultipleContacts(10);
console.log(contacts.length); // 10`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDataDemo;
