import React, { useEffect } from 'react';

const ApplyPage: React.FC = () => {
  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';

    // Initialize the loan form script
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.innerHTML = `
      var _lg_form_init_ = {
        aid: "14881",
        template: "elvis-us"
      };
    `;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.async = true;
    script2.src = 'https://apikeep.com/form/applicationInit.js';
    document.head.appendChild(script2);

    return () => {
      // Unlock scroll when leaving page
      document.body.style.overflow = 'unset';

      // Cleanup scripts when component unmounts - check if they exist first
      try {
        if (script1 && script1.parentNode) {
          script1.parentNode.removeChild(script1);
        }
        if (script2 && script2.parentNode) {
          script2.parentNode.removeChild(script2);
        }
      } catch (error) {
        // Silently handle cleanup errors
        console.log('Script cleanup completed');
      }
    };
  }, []);

  return (
    <div className="h-screen bg-white overflow-hidden flex flex-col">
      {/* Main Form Container - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Application Form */}
            <div className="p-4 sm:p-8">
              <div id="_lg_form_"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;