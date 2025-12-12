import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  MapPin, 
  ArrowLeft,
  CheckCircle,
  User,
  Send,
  Star,
  AlertCircle,
  FileText,
  HelpCircle
} from 'lucide-react';
import SEO from './SEO';
import { getBreadcrumbSchema } from '../utils/structuredData';

const ContactPage: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    urgency: 'normal'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleApplyClick = () => {
    if ((window as any).navigateToApply) {
      (window as any).navigateToApply();
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission logic here
    setTimeout(() => {
      setIsSubmitted(false);
      setContactForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        urgency: 'normal'
      });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us Now",
      description: "Speak directly with our loan specialists",
      contact: "1-800-CASH-BEAR-LOANS",
      hours: "Monday - Friday",
      time: "9AM - 6PM EST",
      color: "from-blue-500 to-blue-600",
      urgent: true,
      action: "tel:18002274232"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed assistance via email",
      contact: "support@cashbearloan.com",
      hours: "Response within 2 hours",
      time: "24/7 Monitoring",
      color: "from-green-500 to-green-600",
      urgent: false,
      action: "mailto:support@cashbearloan.com"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team instantly",
      contact: "Available on website",
      hours: "Monday - Friday",
      time: "9AM - 6PM EST",
      color: "from-purple-500 to-purple-600",
      urgent: false,
      action: "#"
    }
  ];

  const quickTopics = [
    {
      icon: FileText,
      title: "Application Status",
      description: "Check your loan application progress"
    },
    {
      icon: User,
      title: "Account Issues",
      description: "Login problems or account access"
    },
    {
      icon: HelpCircle,
      title: "General Questions",
      description: "Questions about our loan products"
    },
    {
      icon: AlertCircle,
      title: "Technical Support",
      description: "Website or technical difficulties"
    }
  ];

  const breadcrumbData = getBreadcrumbSchema([
    { name: "Home", url: "https://cashbearloan.com" },
    { name: "Contact Us", url: "https://cashbearloan.com/contact" }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray to-white">
      <SEO
        title="Contact Us - Get Help & Support | Cash Bear Loans"
        description="Contact Cash Bear Loans for loan assistance, application support, and customer service. Available 7 days a week with multiple contact options."
        keywords="contact us, customer service, loan support, contact information, phone support, email support, live chat, customer assistance"
        canonicalUrl="https://cashbearloan.com/contact"
        ogTitle="Contact Cash Bear Loans - We're Here to Help"
        ogDescription="Need assistance? Contact our support team via phone, email, or live chat. Available 7 days a week to help with all your loan needs."
        structuredData={breadcrumbData}
      />
      
      {/* Header - Mobile Optimized */}
      <header className="bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center">
              <button 
                onClick={() => (window as any).navigateToHome?.()}
                className="flex items-center text-gray-700 hover:text-primary-blue mr-4 sm:mr-6 transition-colors"
                aria-label="Go back to home page"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Back</span>
              </button>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4">
                  <img src="/bear-icon.svg" alt="Cash Bear Loans Logo" className="h-full w-full" />
                </div>
                <div>
                  <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-[#2F7BFF] to-[#FF4B8E] bg-clip-text text-transparent">
                    Cash Bear Loans
                  </span>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">Contact Us</div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden sm:flex items-center bg-success-emerald/10 rounded-full px-3 sm:px-4 py-1 sm:py-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-success-emerald mr-1 sm:mr-2" />
                <span className="text-success-emerald font-bold text-xs sm:text-sm">24/7 Support</span>
              </div>
              <button 
                onClick={handleApplyClick}
                className="bg-cta-gradient hover:shadow-lg hover:shadow-purple-primary/25 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section - Mobile Optimized */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            We're Here to Help
          </h1>
          <p className="text-base sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8">
            Have questions about your loan application or need assistance? Our dedicated support team 
            is ready to help you every step of the way.
          </p>
          
          {/* Quick Apply CTA - Mobile Optimized */}
          <div className="bg-gradient-to-r from-pink-600 to-orange-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white max-w-2xl mx-auto mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>Need a Loan? Apply Now!</h2>
            <p className="text-white mb-3 sm:mb-4 text-base sm:text-lg font-medium" style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>
              Get pre-approved in minutes with our simple, secure application process.
            </p>
            <button 
              onClick={handleApplyClick}
              className="bg-white text-primary-blue px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-base sm:text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Application
            </button>
          </div>
        </div>

        {/* Contact Methods - Mobile Stack */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${method.color} rounded-xl sm:rounded-2xl mb-3 sm:mb-4 shadow-lg relative`}>
                    <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    {method.urgent && (
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-warm-orange rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">{method.description}</p>
                  
                  <div className="bg-light-gray rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                    <div className="font-bold text-primary-blue text-sm sm:text-lg mb-1">{method.contact}</div>
                    <div className="text-gray-600 text-xs sm:text-sm">{method.hours}</div>
                    <div className="text-gray-600 text-xs">{method.time}</div>
                  </div>
                  
                  <a
                    href={method.action}
                    className={`inline-block bg-gradient-to-r ${method.color} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    style={{textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}
                  >
                    Contact Now
                  </a>
                  
                  {method.urgent && (
                    <div className="mt-2 sm:mt-3">
                      <div className="bg-warm-orange/10 text-warm-orange px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        Fastest Response
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Topics - Mobile Grid */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            What Can We Help You With?
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickTopics.map((topic, index) => {
              const IconComponent = topic.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 hover:border-primary-blue hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className="text-center">
                    <div className="bg-cta-gradient p-2 sm:p-3 rounded-lg sm:rounded-xl mb-3 sm:mb-4 inline-block shadow-md group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-primary-blue transition-colors text-sm sm:text-base">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">{topic.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form - Mobile Optimized with proper labels */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
              <Send className="h-5 w-5 sm:h-6 sm:w-6 text-primary-blue mr-2 sm:mr-3" />
              Send Us a Message
            </h2>
            
            {isSubmitted ? (
              <div className="text-center py-8 sm:py-12">
                <div className="bg-success-emerald/10 rounded-full p-4 sm:p-6 w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 sm:h-12 sm:w-12 text-success-emerald" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-success-emerald mb-2">Message Sent!</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Thank you for contacting us. We'll respond within 2 hours during business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-800 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      value={contactForm.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:outline-none transition-colors text-sm sm:text-base text-gray-900"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-800 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={contactForm.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:outline-none transition-colors text-sm sm:text-base text-gray-900"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-800 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:outline-none transition-colors text-sm sm:text-base text-gray-900"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-urgency" className="block text-sm font-medium text-gray-800 mb-2">
                      Urgency Level
                    </label>
                    <select
                      id="contact-urgency"
                      name="urgency"
                      value={contactForm.urgency}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:outline-none transition-colors text-sm sm:text-base text-gray-900"
                    >
                      <option value="normal">Normal</option>
                      <option value="urgent">Urgent</option>
                      <option value="emergency">Emergency</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-800 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    required
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:outline-none transition-colors text-sm sm:text-base text-gray-900"
                    placeholder="Brief description of your inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-800 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:outline-none transition-colors resize-none text-sm sm:text-base text-gray-900"
                    placeholder="Please provide details about your question or concern..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-cta-gradient hover:shadow-xl hover:shadow-purple-primary/25 text-white py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center"
                >
                  <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Additional Information - Mobile Stack */}
          <div className="space-y-6 sm:space-y-8">
            {/* Office Information */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary-blue mr-2 sm:mr-3" />
                Our Office
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Cash Bear Loans</div>
                  <div className="text-gray-700 text-sm sm:text-base">2551 Interstate 45 N</div>
                  <div className="text-gray-700 text-sm sm:text-base">Conroe, TX 77304, United States</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Business Hours:</div>
                  <div className="text-gray-700 text-xs sm:text-sm space-y-1">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 8:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>10:00 AM - 4:00 PM EST</span>
                    </div>
                  </div>
                </div>
                <div className="bg-success-emerald/10 rounded-lg p-3 sm:p-4 border border-success-emerald/20">
                  <div className="flex items-center text-success-emerald">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    <span className="font-semibold text-sm sm:text-base">Emergency Support: 24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Satisfaction */}
            <div className="bg-gradient-to-br from-purple-primary to-purple-accent rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
              <div className="text-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 sm:h-6 sm:w-6 text-warm-amber fill-current" />
                  ))}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">4.9/5 Customer Satisfaction</h3>
                <p className="text-purple-100 mb-3 sm:mb-4 text-sm sm:text-base">
                  Based on 10,000+ verified customer reviews
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                  <div className="text-xl sm:text-2xl font-bold">98%</div>
                  <div className="text-purple-100 text-xs sm:text-sm">of customers would recommend us</div>
                </div>
                <button 
                  onClick={handleApplyClick}
                  className="bg-white text-purple-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Join Our Happy Customers
                </button>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-warm-orange to-warm-amber rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
              <div className="text-center">
                <AlertCircle className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Emergency Assistance</h3>
                <p className="text-orange-100 mb-3 sm:mb-4 text-sm sm:text-base">
                  Need immediate help with your loan or account?
                </p>
                <a
                  href="tel:18002274232"
                  className="bg-white text-warm-orange px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-base sm:text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block"
                >
                  Call Emergency Line
                </a>
                <div className="text-orange-100 text-xs sm:text-sm mt-2 sm:mt-3">
                  Available 24/7 for urgent matters
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;