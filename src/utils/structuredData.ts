// Structured Data schemas for different pages
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Cash Bear Loans",
  "alternateName": "Cash Bear Loans",
  "description": "Licensed lender providing transparent personal installment loans to help you achieve your financial goals.",
  "url": "https://cashbearloan.com",
  "logo": "https://cashbearloan.com/bear-icon.svg",
  "image": "https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
  "telephone": "1-800-CASH-BEAR-LOANS",
  "email": "support@cashbearloan.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2551 Interstate 45 N",
    "addressLocality": "Conroe",
    "addressRegion": "TX",
    "postalCode": "77304",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "35.1595",
    "longitude": "-84.8766"
  },
  "openingHours": [
    "Mo-Fr 09:00-18:00"
  ],
  "priceRange": "$1,000 - $5,000",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Bank Transfer, ACH",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "serviceType": "Personal Installment Loans",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Personal Installment Loan Products",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "LoanOrCredit",
          "name": "Personal Installment Loan",
          "description": "Flexible installment loans for personal expenses with transparent terms and competitive rates",
          "amount": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "minValue": 1000,
            "maxValue": 5000
          },
          "loanTerm": "12-60 months"
        },
        "priceSpecification": {
          "@type": "CompoundPriceSpecification",
          "price": "5.99-35.99",
          "priceCurrency": "USD",
          "unitText": "APR"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "10000",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sarah M."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "When I needed funds for an emergency expense, Cash Bear Loans approved me for $3,500 in just hours! The process was smooth and transparent. Highly recommend!"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/CashBearLoans",
    "https://www.twitter.com/CashBearLoans",
    "https://www.linkedin.com/company/cashbearloans"
  ]
});

export const getLoanProductSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LoanOrCredit",
  "name": "Personal Installment Loan",
  "description": "Flexible installment loans for personal expenses with transparent terms, competitive rates, and simple application process",
  "provider": {
    "@type": "FinancialService",
    "name": "Cash Bear Loans"
  },
  "amount": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "minValue": 1000,
    "maxValue": 5000
  },
  "loanTerm": "12-60 months",
  "interestRate": {
    "@type": "QuantitativeValue",
    "minValue": 5.99,
    "maxValue": 35.99,
    "unitText": "APR"
  },
  "feesAndCommissionsSpecification": "Origination fees may apply (0% to 8% of financing amount)",
  "eligibilityRequirement": [
    "Be at least 18 years old",
    "U.S. citizen or permanent resident",
    "Have a valid Social Security number",
    "Maintain an active checking account",
    "Provide proof of steady income"
  ],
  "applicationProcess": {
    "@type": "HowTo",
    "name": "How to Apply for Personal Installment Loan",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Complete Application",
        "text": "Fill out our secure online application with your personal and financial information",
        "timeRequired": "PT5M"
      },
      {
        "@type": "HowToStep",
        "name": "Review & Verification",
        "text": "We'll review your application and verify your information",
        "timeRequired": "PT1D"
      },
      {
        "@type": "HowToStep",
        "name": "Receive Funds",
        "text": "Once approved, funds are typically available within 1-2 business days",
        "timeRequired": "PT2D"
      }
    ]
  }
});

export const getFAQSchema = (faqs: Array<{question: string; answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const getBreadcrumbSchema = (items: Array<{name: string; url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Cash Bear Loans",
  "alternateName": "Cash Bear Loans",
  "url": "https://cashbearloan.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://cashbearloan.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
});