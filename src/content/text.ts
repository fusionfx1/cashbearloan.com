export const siteContent = {
  // Site Meta Information
  meta: {
    title: "Personal Installment Loans - Fast & Transparent | Cash Bear Loans",
    description: "Get approved for personal loans up to $5,000 with Cash Bear Loans. Texas-based lender offering transparent terms, competitive rates from 5.99% APR, and fast funding in 1-2 days.",
    companyName: "Cash Bear Loans",
    tagline: "Fast. Transparent. Trusted."
  },

  // Header Navigation
  header: {
    navigation: [
      { label: "Calculator", href: "#calculator" },
      { label: "Benefits", href: "#benefits" },
      { label: "Reviews", href: "#testimonials" },
      { label: "FAQ", href: "#faq" }
    ],
    ctaButton: "Check My Rate"
  },

  // Hero Section
  hero: {
    badge: "Texas-Based Lender You Can Trust",
    headline: {
      amount: "$1,000 - $5,000",
      title: "Smart Loans from a Lender That Has Your Back",
      subtitle: "Get Your Cash Fast with Transparent Terms"
    },
    description: "Life happens. Whether it's car repairs, medical bills, home improvements, or consolidating debt, we're here to help. Check your rate in minutes without impacting your credit score. Fast approval, transparent terms, and funding in 1-2 business days.",
    socialProof: [
      { icon: "star", text: "4.9/5 Rating" },
      { icon: "users", text: "100,000+ Customers" },
      { icon: "trending", text: "98% Satisfaction" }
    ],
    benefits: [
      {
        title: "Lightning-Fast Approval",
        subtitle: "Decision in 24 Hours or Less",
        color: "success"
      },
      {
        title: "No Hidden Surprises",
        subtitle: "All Fees Disclosed Upfront",
        color: "warm"
      },
      {
        title: "Quick Funding",
        subtitle: "Cash in 1-2 Business Days",
        color: "accent"
      },
      {
        title: "Predictable Payments",
        subtitle: "Fixed Monthly Amount",
        color: "purple"
      }
    ],
    guarantees: [
      "Competitive APR from 5.99% to 34.99% based on your credit profile. We do not offer loans with APR of 36% or higher to U.S. consumers.",
      "Proud to serve customers nationwide from our Conroe, Texas headquarters"
    ]
  },

  // Loan Application UI
  loanApplication: {
    badges: ["FAST PERSONAL LOANS"],
    title: "How much cash do you need?",
    subtitle: "Choose your amount and get started in minutes",
    amountOptions: [1000, 2000, 3000, 4000, 5000],
    ctaButton: "CHECK MY RATE",
    security: {
      encryption: "256-bit SSL encryption protects your data",
      indicators: [
        { text: "Secure & Private", color: "success" },
        { text: "Fast Approval", color: "warm" }
      ]
    }
  },

  // Urgency Section
  urgency: {
    badge: "APPLY TODAY",
    headline: "Get Your Cash When You Need It Most",
    description: "Competitive rates starting at 5.99% APR for qualified borrowers. Maximum APR is 34.99%. Your actual rate is based on your unique credit profile and financial situation. We do not offer loans with APR of 36% or higher.",
    timer: {
      title: "Offer Expires In:",
      units: ["Hours", "Minutes", "Seconds"]
    },
    alerts: [
      {
        title: "Fast Decisions",
        description: "We know you need answers fast. Most applicants get a decision within 24 hours of applying."
      },
      {
        title: "Complete Transparency",
        description: "No fine print headaches. Every term, rate, and fee is clearly explained before you commit to anything."
      }
    ],
    ctaButton: "GET STARTED NOW",
    disclaimer: "* APR ranges from 5.99% to 34.99%. Maximum APR: 34.99%. We do not offer loans with APR ≥ 36% to U.S. consumers. Rates shown are for qualified borrowers only. Subject to credit approval, income verification, and underwriting. Terms and conditions apply. Borrowing money costs money."
  },

  // Loan Calculator
  calculator: {
    title: "See Your Potential Monthly Payment",
    description: "Get a clear picture of what you'll pay each month. Our calculator gives you real numbers so you can plan with confidence. Checking rates won't affect your credit score.",
    controls: {
      loanAmount: {
        label: "Loan Amount",
        min: 1000,
        max: 5000,
        step: 500
      },
      paymentTerm: {
        label: "Payment Term", 
        min: 12,
        max: 60,
        step: 6,
        unit: "months"
      }
    },
    results: {
      title: "Your Estimated Monthly Payment",
      fields: [
        "Monthly Payment",
        "Total Payment", 
        "Total Interest",
        "Loan Amount",
        "APR",
        "Term"
      ]
    },
    ctaButton: "Get My Personalized Rate",
    disclaimer: "This is an estimate only. Your actual APR and payment may differ based on your credit profile, income verification, and other underwriting factors."
  },

  // Benefits Section
  benefits: {
    title: "Why Choose Cash Bear Loans?",
    description: "We're not just another lender. We're your financial partner committed to transparency, fair rates, and treating you with respect every step of the way.",
    stats: [
      { number: "100K+", label: "Happy Customers" },
      { number: "4.9/5", label: "Customer Rating" },
      { number: "24/7", label: "Online Support" },
      { number: "99%", label: "Approval Rate" }
    ],
    features: [
      {
        title: "Repayment Terms That Work for You",
        description: "Your budget is unique. Your loan should be too:",
        bullets: [
          "12 to 60 month flexible payment plans",
          "Choose the monthly payment that fits your life",
          "No penalty for paying off early"
        ]
      },
      {
        title: "Lightning-Fast Process",
        description: "Time matters when you need cash:",
        bullets: [
          "Complete application in under 5 minutes",
          "Decisions typically within 24 hours",
          "Funds deposited in 1-2 business days"
        ]
      },
      {
        title: "Your Money, Your Choice",
        description: "Use your loan however you need:",
        bullets: [
          "Medical bills and prescriptions",
          "Car or home repairs",
          "Debt consolidation to simplify payments",
          "Emergency expenses or unexpected costs"
        ]
      },
      {
        title: "Total Transparency, Zero Surprises",
        description: "We believe in honest lending:",
        bullets: [
          "Every fee disclosed upfront, no exceptions",
          "Your exact APR shown before you sign",
          "Plain English terms, no confusing jargon"
        ]
      }
    ],
    trustSection: {
      title: "Join 100,000+ Satisfied Customers",
      description: "Real people getting real help with their financial needs. Based in Texas, trusted nationwide.",
      badges: [
        "BBB A+ Rating",
        "Licensed in 50 states",
        "Bank-level security"
      ]
    }
  },

  // Social Proof Section
  socialProof: {
    title: "Real Stories from Real People We've Helped",
    description: "These aren't made-up testimonials. These are actual customers who trusted Cash Bear Loans when they needed financial support.",
    stats: [
      { number: "100,000+", label: "Happy Customers" },
      { number: "4.9/5", label: "Customer Rating" },
      { number: "98%", label: "Approval Rate" },
      { number: "$2.5B+", label: "Loans Funded" }
    ],
    testimonials: [
      {
        name: "Maria G.",
        location: "Houston, TX",
        rating: 5,
        text: "My car broke down and I needed it fixed fast for work. Cash Bear Loans approved me for $3,500 in less than a day. The payment plan is totally manageable and they were so helpful throughout the process.",
        amount: "$3,500",
        purpose: "Car Repair"
      },
      {
        name: "James T.",
        location: "Conroe, TX",
        rating: 5,
        text: "As a local, I'm proud we have Cash Bear Loans right here in Conroe. Used $4,200 to consolidate credit card debt. The APR was way better than my cards and now I have one simple payment.",
        amount: "$4,200",
        purpose: "Debt Consolidation"
      },
      {
        name: "Angela S.",
        location: "Dallas, TX",
        rating: 5,
        text: "Medical bills were piling up after an unexpected surgery. Got $5,000 approved with transparent terms and no hidden fees. The customer service team answered all my questions patiently. Highly recommend!",
        amount: "$5,000",
        purpose: "Medical Expenses"
      },
      {
        name: "Robert K.",
        location: "Denver, CO",
        rating: 5,
        text: "Needed funds for urgent home repairs after storm damage. The application took 5 minutes and I had $3,800 in my account within 48 hours. No runaround, just straightforward honest lending.",
        amount: "$3,800",
        purpose: "Home Repairs"
      }
    ],
    trustBadges: {
      title: "Trusted & Secure",
      items: [
        { title: "BBB A+ Rating", subtitle: "Better Business Bureau" },
        { title: "Licensed Lender", subtitle: "All 50 States" },
        { title: "4.9/5 Rating", subtitle: "100,000+ Customers" }
      ]
    },
    ctaButton: "Start Your Application"
  },

  // Eligibility Section
  eligibility: {
    title: "Do You Qualify? (Most People Do!)",
    description: "We believe in giving people a fair chance. Our requirements are straightforward, and we evaluate every application on its own merits.",
    requirementCategories: [
      {
        category: "Personal Requirements",
        items: [
          "Be at least 18 years old",
          "U.S. citizen or permanent resident",
          "Have a valid Social Security number"
        ]
      },
      {
        category: "Financial Requirements",
        items: [
          "Maintain an active checking account",
          "Provide proof of steady income",
          "Meet minimum income requirements"
        ]
      },
      {
        category: "Verification",
        items: [
          "Pass credit verification",
          "Complete identity verification"
        ]
      }
    ],
    requirements: [
      "Be at least 18 years old",
      "U.S. citizen or permanent resident",
      "Have a valid Social Security number",
      "Maintain an active checking account",
      "Provide proof of steady income",
      "Meet minimum income requirements",
      "Pass credit and identity verification"
    ],
    loanDetails: {
      amounts: "$1,000 - $5,000",
      terms: "12 - 60 months",
      apr: "5.99% - 34.99%"
    },
    ctaButton: "See If I Qualify",
    disclaimer: "Meeting these requirements does not guarantee loan approval. Final approval is subject to credit review, income verification, and compliance with applicable lending regulations. Terms and rates vary based on creditworthiness and other factors."
  },

  // Application Process
  applicationProcess: {
    title: "Get Your Cash in 3 Simple Steps",
    description: "No hoops to jump through. No endless paperwork. Just a straightforward process designed to get you funded fast.",
    steps: [
      {
        title: "Apply Online",
        description: "Quick and secure application:",
        bullets: [
          "Basic info about you and your finances",
          "Completely secure with bank-level encryption",
          "Most people finish in under 5 minutes"
        ],
        time: "Under 5 minutes"
      },
      {
        title: "Get Approved",
        description: "Fast decision process:",
        bullets: [
          "Instant soft credit check (won't hurt your score)",
          "We verify your income and identity",
          "Decision typically within 24 hours"
        ],
        time: "24 hours or less"
      },
      {
        title: "Receive Your Cash",
        description: "Money when you need it:",
        bullets: [
          "Funds sent directly to your bank account",
          "Usually arrives in 1-2 business days",
          "Use it for whatever you need"
        ],
        time: "1-2 business days"
      }
    ],
    finalCta: {
      title: "Ready to Get the Cash You Need?",
      description: "Join thousands who've trusted Cash Bear Loans for fast, transparent lending. Our secure process protects your information at every step.",
      button: "Get Started Now"
    }
  },

  // Trust Section
  trust: {
    title: "Why Over 100,000 People Trust Cash Bear Loans",
    description: "We're not perfect, but we're honest. We treat your money with respect and believe you deserve transparent lending without tricks or traps.",
    certifications: [
      {
        title: "BBB A+ Rating",
        description: "Accredited business with the Better Business Bureau",
        badge: "A+"
      },
      {
        title: "Licensed Lender",
        description: "Licensed and regulated in all 50 states",
        badge: "50 States"
      },
      {
        title: "Bank-Level Security",
        description: "256-bit SSL encryption protects your data",
        badge: "SSL Secured"
      },
      {
        title: "Customer Rated",
        description: "4.9/5 stars from over 100,000 verified customers",
        badge: "4.9/5"
      }
    ],
    guarantees: [
      "Every Fee Disclosed Upfront - No surprises on your bill",
      "Plain English Contracts - If you can't understand it, we'll explain it",
      "Your Privacy is Sacred - We never sell or share your personal data",
      "Fully Licensed & Regulated - Operating legally in all 50 states",
      "Real People, Real Help - Speak to a human, not a robot",
      "Bank-Level Security - Your data is encrypted and protected 24/7"
    ],
    contact: {
      title: "Have Questions? We Have Answers.",
      description: "Our loan specialists are real people who actually want to help. No pressure, no sales pitch, just honest guidance.",
      phone: "1-800-CASH-BEAR-LOANS",
      phoneHours: "Mon-Fri 9AM-6PM EST",
      email: "support@cashbearloan.com",
      emailResponse: "Response within 2 hours",
      address: {
        company: "Cash Bear Loans, LLC",
        street: "2551 Interstate 45 N",
        city: "Conroe, TX 77304, United States"
      },
      ctaTitle: "Ready to Get Your Loan?",
      ctaDescription: "Join thousands of customers who got the money they needed quickly and securely.",
      ctaButton: "Talk to a Loan Specialist"
    }
  },

  // FAQ Section
  faq: {
    title: "Your Questions Answered (Honestly)",
    description: "No confusing jargon. No dodging the tough questions. Here's what you really want to know about Cash Bear Loans.",
    questions: [
      {
        question: "What exactly is a personal installment loan?",
        answer: "Think of it like this: You borrow a specific amount of money, and you pay it back in fixed monthly chunks over a set period of time.\n\nWhy people like them:\n• Your interest rate never changes (no surprises)\n• You know exactly what you'll pay each month\n• You know exactly when you'll be done paying\n• Way more predictable than credit cards"
      },
      {
        question: "What can I use the money for?",
        answer: "Whatever you need. We don't police how you spend your money.\n\nCommon uses:\n• Emergency medical bills or prescriptions\n• Car repairs to get back on the road\n• Home repairs (AC broke? Roof leaking?)\n• Consolidating credit card debt\n• Unexpected expenses that life throws at you\n• Major purchases you need to finance\n\nIt's your money once it's approved. Use it how you see fit."
      },
      {
        question: "Do I qualify? What do you need from me?",
        answer: "Most people qualify. Here's what we need:\n\nPersonal stuff:\n• You must be 18 or older\n• Valid Social Security number\n• U.S. citizen or permanent resident\n\nFinancial stuff:\n• An active checking account\n• Proof you have steady income\n• Meet our minimum income threshold\n• We'll check your credit and verify your identity\n\nBad credit? Don't worry. We look at the whole picture, not just your credit score."
      },
      {
        question: "How fast can I actually get my money?",
        answer: "Here's the realistic timeline:\n\n• Filling out the application: Under 5 minutes\n• Getting a decision: Typically within 24 hours\n• Money in your account: 1-2 business days after approval\n\nSo from start to cash in hand, most people see funds within 2-3 days total."
      },
      {
        question: "Will this hurt my credit score?",
        answer: "Not when you're just checking your rate.\n\nHere's how it works:\n• Checking your rate = Soft inquiry (no impact on your score)\n• Actually applying for the loan = Hard inquiry (tiny temporary dip)\n\nThe hard inquiry might lower your score by a few points for a few months, but it's usually not a big deal. And if you get approved and make your payments on time, you'll actually help your credit in the long run."
      },
      {
        question: "What if I can't make a payment?",
        answer: "Life happens. We get it.\n\nHere's what to do:\n• Call us IMMEDIATELY at 1-800-CASH-BEAR-LOANS\n• Be honest about your situation\n• We might be able to work out a payment plan\n\nThe worst thing you can do is ghost us. Late fees add up and it hurts your credit. But if you talk to us before you miss a payment, we can usually figure something out together."
      },
      {
        question: "Can I pay it off early?",
        answer: "Absolutely! And we won't punish you for it.\n\n• Zero prepayment penalties (seriously)\n• You'll save money on interest\n• Just call us to get your current payoff amount\n• Pay it whenever you're ready\n\nSome lenders charge you extra for paying early. We think that's ridiculous. If you have the money to pay us off, we're happy for you."
      },
      {
        question: "Why did I get this APR? How is it calculated?",
        answer: "Your APR is personalized based on your financial situation. Here's what we look at:\n\n• Your credit score (higher = better rate)\n• Your income level (more income = lower risk)\n• Your debt-to-income ratio (less debt = better rate)\n• The amount you're borrowing\n• How long you want to pay it back\n\nBasically, the less risky you appear, the better rate you get. It's not personal, it's just math."
      },
    ],
    supportCta: {
      title: "Didn't Find Your Answer?",
      description: "No problem. Our team is standing by to answer any question you have. No judgment, no pressure, just real answers from real people.",
      button: "Ask Us Anything"
    }
  },

  // Footer
  footer: {
    finalCta: {
      title: "Ready to Get Started?",
      description: "Join over 100,000 customers who trusted us with their financial needs. Fast approval, transparent terms, and cash when you need it.",
      button: "START MY APPLICATION",
      features: [
        "Quick Application Process",
        "APR: 5.99% - 34.99% (Max)",
        "Transparent Terms"
      ]
    },
    company: {
      name: "Cash Bear Loans",
      description: "Texas-based licensed lender providing transparent, fast personal loans to help you handle life's unexpected expenses.",
      achievements: [
        "BBB A+ Rated",
        "Licensed in 50 States",
        "100,000+ Happy Customers"
      ]
    },
    contact: {
      title: "Contact Us",
      phone: {
        number: "1-800-CASH-BEAR-LOANS",
        hours: "Mon-Fri 9AM-6PM EST"
      },
      email: "support@cashbearloan.com"
    },
    legal: {
      title: "Legal & Security",
      links: [
        "Privacy Policy",
        "Terms & Conditions", 
        "Loan Disclosures",
        "File a Complaint",
        "State Licensing"
      ]
    },
    copyright: {
      company: "© 2025 Cash Bear Loans, LLC. All rights reserved.",
      license: "Licensed lender in participating states.",
      rates: "APR ranges from 5.99% to 34.99%. Maximum APR: 34.99%. We do not offer loans with APR of 36% or higher to U.S. consumers.",
      disclaimer: "This website is not an offer to lend. Loan approval subject to credit review."
    }
  },

  // Apply Page
  applyPage: {
    header: {
      backButton: "Back",
      security: "Secure"
    },
    form: {
      title: "Your Personal Loan Application",
      subtitle: "Takes less than 5 minutes. Your info is encrypted and secure."
    },
    footer: {
      stats: [
        { value: "3-5 min", label: "Application Time" },
        { value: "Fast", label: "Decision" },
        { value: "24 Hours", label: "Funding" }
      ],
      disclaimer: "By submitting this application, you agree to our Terms & Conditions and Privacy Policy. Checking your rate will not impact your credit score."
    }
  },

  // Support Page
  supportPage: {
    title: "How Can We Help You Today?",
    description: "Real people, real help. Whether you have questions about your application, need help with payments, or just want to talk through your options, we're here for you.",
    quickApply: {
      title: "Need a Loan? Let's Get You Started",
      description: "Quick application, honest terms, real people to help you.",
      button: "Apply Now"
    },
    contactMethods: [
      {
        title: "Call Us",
        description: "Speak with a loan specialist",
        contact: "1-800-CASH-BEAR-LOANS",
        hours: "Mon-Fri 9AM-6PM EST",
        urgent: true
      },
      {
        title: "Email Support",
        description: "Get detailed help via email",
        contact: "support@cashbearloan.com",
        hours: "Response within 2 hours",
        urgent: false
      },
      {
        title: "Live Chat",
        description: "Chat with our support team",
        contact: "Available on website",
        hours: "Mon-Fri 9AM-6PM EST",
        urgent: false
      }
    ],
    categories: [
      {
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
        title: "Security & Privacy",
        description: "Security and privacy concerns",
        topics: [
          "Data protection",
          "Fraud prevention",
          "Privacy policy",
          "Report suspicious activity"
        ]
      }
    ],
    quickAnswers: [
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
    ]
  },

  // Common Terms
  common: {
    buttons: {
      apply: "Apply Now",
      getStarted: "Get Started",
      learnMore: "Learn More",
      checkRates: "Check My Rate",
      submit: "Submit",
      close: "Close",
      back: "Back",
      next: "Next",
      previous: "Previous"
    },
    labels: {
      required: "Required",
      optional: "Optional",
      loading: "Loading...",
      error: "Error",
      success: "Success"
    },
    loanTerms: {
      apr: "APR",
      amount: "Loan Amount",
      term: "Payment Term",
      payment: "Monthly Payment",
      total: "Total Payment",
      interest: "Total Interest"
    }
  }
};

export type SiteContent = typeof siteContent;