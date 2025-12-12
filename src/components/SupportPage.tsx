import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  MapPin, 
  HelpCircle, 
  FileText, 
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  User,
  CreditCard,
  Calculator,
  Search,
  Star
} from 'lucide-react';
import SEO from './SEO';
import { getBreadcrumbSchema, getFAQSchema } from '../utils/structuredData';

const SupportPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });

  const handleApplyClick = () => {
    if ((window as any).navigateToApply) {
      (window as any).navigateToApply();
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with a loan specialist",
      contact: "1-800-CASH-BEAR-LOANS",
      hours: "Mon-Fri 9AM-6PM EST",
      color: "from-blue-500 to-blue-600",
      urgent: true
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed help via email",
      contact: "support@cashbearloan.com",
      hours: "Response within 2 hours",
      color: "from-green-500 to-green-600",
      urgent: false
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available on website",
      hours: "Mon-Fri 9AM-6PM EST",
      color: "from-purple-500 to-purple-600",
      urgent: false
    }
  ];

  const supportCategories = [
    {
      icon: CreditCard,
      title: "Loan Applications",
      description: "Help with applying for loans",
      topics: [
        "Application status",
        "Required documents",
        "Eligibility requirements",
        "Application troubleshooting"
      ]
    },
    {
      icon: Calculator,
      title: "Payments & Billing",
      description: "Payment questions and issues",
      topics: [
        "Make a payment",
        "Payment schedule",
        "Late payment fees",
        "Payment methods"
      ]
    },
    {
      icon: User,
      title: "Account Management",
      description: "Manage your loan account",
      topics: [
        "Login issues",
        "Update personal info",
        "Account statements",
        "Close account"
      ]
    },
    {
      icon: FileText,
      title: "Security & Privacy",
      description: "Security and privacy concerns",
      topics: [
        "Data protection",
        "Fraud prevention",
        "Privacy policy",
        "Report suspicious activity"
      ]
    }
  ];

  const quickAnswers = [
    {
      question: "How do I check my application status?",
      answer: "You can check your application status by calling 1-800-CASH-BEAR-LOANS or logging into your account online."
    },
    {
      question: "What documents do I need to apply?",
      answer: "You'll need a valid ID, proof of income, bank statements, and Social Security number."
    },
    {
      question: "How long does approval take?",
      answer: "Most applications receive a decision within 24 hours, with funds available within 1-2 business days after approval."
    },
    {
      question: "Can I pay off my loan early?",
      answer: "Yes, you can pay off your loan early without prepayment penalties, which can save you money on interest."
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', contactForm);
    alert('Thank you for contacting us! We\'ll respond within 2 hours.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const breadcrumbData = getBreadcrumbSchema([
    { name: "Home", url: "https://cashbearloan.com" },
    { name: "Support", url: "https://cashbearloan.com/support" }
  ]);

  const faqData = getFAQSchema(quickAnswers);

  const combinedStructuredData = [breadcrumbData, faqData];

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray to-white">
      <SEO
        title="Customer Support & Help Center | Cash Bear Loans"
        description="Get help with your loan application, account management, and general inquiries. Our dedicated support team is available 7 days a week to assist you."
        keywords="customer support, help center, loan support, application help, account assistance, contact support, customer service, loan questions"
        canonicalUrl="https://cashbearloan.com/support"
        ogTitle="Customer Support - We're Here to Help"
        ogDescription="Need assistance? Our support team is available 7 days a week to help with applications, payments, and account management."
        structuredData={combinedStructuredData}
      />
      
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <button 
                onClick={() => (window as any).navigateToHome?.()}
                className="flex items-center text-gray-700 hover:text-primary-blue mr-6 transition-colors"
                aria-label="Go back to home page"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back
              </button>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 mr-4">
                  <img src="/bear-icon.svg" alt="Cash Bear Loans Logo" className="h-full w-full" />
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#2F7BFF] to-[#FF4B8E] bg-clip-text text-transparent">
                    Cash Bear Loans
                  </span>
                  <div className="text-sm text-gray-600 font-medium">Support Center</div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-success-emerald/10 rounded-full px-4 py-2">
                <Clock className="h-4 w-4 text-success-emerald mr-2" />
                <span className="text-success-emerald font-bold text-sm">24/7 Support Available</span>
              </div>
              <button 
                onClick={handleApplyClick}
                className="bg-cta-gradient hover:shadow-lg hover:shadow-purple-primary/25 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How Can We Help You?
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Our dedicated support team is here to assist you with any questions about your loan application, 
            account management, or general inquiries.
          </p>
          
          {/* Quick Apply CTA */}
          <div className="bg-cta-gradient rounded-2xl p-6 text-white max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl font-bold mb-3">Ready to Apply for a Loan?</h2>
            <p className="text-blue-100 mb-4">
              Get pre-approved in minutes with our simple online application process.
            </p>
            <button 
              onClick={handleApplyClick}
              className="bg-white text-primary-blue px-8 py-3 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Application
            </button>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl mb-4 shadow-lg relative`}>
                    <IconComponent className="h-8 w-8 text-white" />
                    {method.urgent && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-warm-orange rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-700 mb-4">{method.description}</p>
                  <div className="bg-light-gray rounded-xl p-4 mb-4">
                    <div className="font-bold text-primary-blue text-lg">{method.contact}</div>
                    <div className="text-gray-600 text-sm">{method.hours}</div>
                  </div>
                  {method.urgent && (
                    <div className="bg-warm-orange/10 text-warm-orange px-3 py-1 rounded-full text-sm font-medium">
                      Fastest Response
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Do You Need Help With?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-xl p-6 border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedCategory === category.title 
                      ? 'border-primary-blue bg-blue-50' 
                      : 'border-gray-200 hover:border-primary-blue'
                  }`}
                  onClick={() => setSelectedCategory(selectedCategory === category.title ? null : category.title)}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-cta-gradient p-3 rounded-xl mr-3 shadow-md">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{category.description}</p>
                  
                  {selectedCategory === category.title && (
                    <div className="space-y-2 animate-fadeInUp">
                      {category.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center text-sm text-primary-blue">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          {topic}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Answers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Quick Answers
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {quickAnswers.map((qa, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start mb-3">
                  <HelpCircle className="h-5 w-5 text-primary-blue mr-3 mt-1 flex-shrink-0" />
                  <h3 className="font-bold text-gray-900">{qa.question}</h3>
                </div>
                <p className="text-gray-700 ml-8">{qa.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form with proper labels */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="support-name" className="block text-sm font-medium text-gray-800 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="support-name"
                    name="name"
                    required
                    value={contactForm.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:outline-none transition-colors text-gray-900"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="support-email" className="block text-sm font-medium text-gray-800 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="support-email"
                    name="email"
                    required
                    value={contactForm.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:outline-none transition-colors text-gray-900"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="support-phone" className="block text-sm font-medium text-gray-800 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="support-phone"
                    name="phone"
                    value={contactForm.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:outline-none transition-colors text-gray-900"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="support-category" className="block text-sm font-medium text-gray-800 mb-2">
                    Category *
                  </label>
                  <select
                    id="support-category"
                    name="category"
                    required
                    value={contactForm.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:outline-none transition-colors text-gray-900"
                  >
                    <option value="">Select a category</option>
                    <option value="application">Loan Application</option>
                    <option value="payment">Payment & Billing</option>
                    <option value="account">Account Management</option>
                    <option value="security">Security & Privacy</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="support-message" className="block text-sm font-medium text-gray-800 mb-2">
                  Message *
                </label>
                <textarea
                  id="support-message"
                  name="message"
                  required
                  rows={5}
                  value={contactForm.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:outline-none transition-colors resize-none text-gray-900"
                  placeholder="Please describe your question or issue in detail..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-cta-gradient hover:shadow-xl hover:shadow-purple-primary/25 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Additional Resources */}
          <div className="space-y-8">
            {/* Apply Now CTA */}
            <div className="bg-gradient-to-br from-success-emerald to-success-green rounded-2xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Need a Loan Today?</h3>
                <p className="text-green-100 mb-6">
                  Don't wait! Apply now and get approved in minutes with our fast, secure process.
                </p>
                <button 
                  onClick={handleApplyClick}
                  className="bg-white text-success-emerald px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Apply for Loan Now
                </button>
              </div>
            </div>

            {/* Office Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-primary-blue mr-3" />
                Our Office
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-gray-900">Cash Bear Loans</div>
                  <div className="text-gray-700">2551 Interstate 45 N</div>
                  <div className="text-gray-700">Conroe, TX 77304, United States</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-2">Business Hours:</div>
                  <div className="text-gray-700 text-sm space-y-1">
                    <div>Monday - Friday: 8:00 AM - 8:00 PM EST</div>
                    <div>Saturday: 9:00 AM - 6:00 PM EST</div>
                    <div>Sunday: 10:00 AM - 4:00 PM EST</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="h-6 w-6 text-success-emerald mr-3" />
                Helpful Resources
              </h3>
              <div className="space-y-4">
                <button 
                  onClick={handleApplyClick}
                  className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group w-full text-left"
                >
                  <Calculator className="h-5 w-5 text-primary-blue mr-3" />
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-primary-blue">Start Application</div>
                    <div className="text-sm text-gray-600">Begin your loan application process</div>
                  </div>
                </button>
                <a href="#" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <Search className="h-5 w-5 text-primary-blue mr-3" />
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-primary-blue">Application Status</div>
                    <div className="text-sm text-gray-600">Check your application progress</div>
                  </div>
                </a>
                <a href="#" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <HelpCircle className="h-5 w-5 text-primary-blue mr-3" />
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-primary-blue">FAQ</div>
                    <div className="text-sm text-gray-600">Frequently asked questions</div>
                  </div>
                </a>
                <a href="#" className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                  <img src="/icon.png" alt="Security" className="h-5 w-5 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-primary-blue">Privacy & Security</div>
                    <div className="text-sm text-gray-600">Learn about data protection</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Customer Satisfaction */}
            <div className="bg-gradient-to-br from-purple-primary to-purple-accent rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 text-warm-amber fill-current" />
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">4.9/5 Customer Satisfaction</h3>
                <p className="text-purple-100 mb-4">
                  Based on 10,000+ verified customer reviews
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-purple-100 text-sm">of customers would recommend us</div>
                </div>
                <button 
                  onClick={handleApplyClick}
                  className="bg-white text-purple-primary px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Join Our Happy Customers
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Banner */}
      <div className="bg-warm-orange text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center text-center">
            <AlertCircle className="h-6 w-6 mr-3" />
            <div>
              <div className="font-bold">Need Immediate Assistance?</div>
              <div className="text-orange-100">Call our 24/7 emergency line: +1 206-202-5115</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;