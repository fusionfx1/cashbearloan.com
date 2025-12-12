/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        // Typography Scale - Standardized font sizes for consistent hierarchy
        // H1 (Page Headlines): text-4xl (mobile) → text-5xl (tablet) → text-6xl (desktop)
        // H2 (Section Headers): text-3xl (mobile) → text-4xl (tablet) → text-5xl (desktop)
        // H3 (Subsection Headers): text-xl (mobile) → text-2xl (desktop)
        // Body Text: text-base (mobile) → text-lg (desktop)
        // Supporting Text: text-sm
        // Fine Print: text-xs
        //
        // Note: Use responsive classes for proper scaling:
        // Example: className="text-4xl md:text-5xl lg:text-6xl"
      },
      colors: {
        // Modern Fintech Theme - Professional & Trustworthy
        'primary-navy': '#0A2463',      // Deep Navy - primary headings
        'primary-blue': '#1E3A8A',      // Royal Blue - professional
        'accent-teal': '#06B6D4',       // Vibrant Cyan - secondary accents
        'accent-cyan': '#0EA5E9',       // Sky Blue - trust and innovation
        'warm-orange': '#F97316',       // Vibrant Orange - primary CTA
        'warm-amber': '#FB923C',        // Bright Amber - action
        'success-emerald': '#10B981',   // Emerald Green - success states
        'success-green': '#22C55E',     // Green - positive outcomes
        'purple-primary': '#7C3AED',    // Vivid Purple - premium
        'purple-accent': '#A78BFA',     // Light Purple - subtle accents
        'neutral-slate': '#1E293B',     // Dark Slate - body text
        'neutral-gray': '#64748B',      // Slate Gray - secondary text
        'light-gray': '#F8FAFC',        // Off-White - section backgrounds
        'warm-gray': '#F1F5F9',         // Cool Gray - warmth
        'cta-gradient-start': '#F97316', // Orange start
        'cta-gradient-end': '#EA580C',   // Darker Orange end
        'warning-orange': '#F59E0B',     // Amber - urgency
        'alert-amber': '#FBBF24',        // Yellow - attention
        'coral-primary': '#EF4444',      // Red - excitement
        'coral-accent': '#F87171',       // Light Red - energy
        'sage-primary': '#10B981',       // Emerald - natural vitality
        'sage-accent': '#34D399',        // Light Emerald - growth
        'honey-primary': '#FBBF24',      // Golden Yellow - optimism
        'honey-accent': '#FCD34D',       // Bright Yellow - hope
        'turquoise-primary': '#14B8A6',  // Teal - trust
        'turquoise-light': '#2DD4BF',    // Light Teal - energy
        'magenta-primary': '#EC4899',    // Pink - excitement
        'magenta-light': '#F472B6',      // Light Pink - friendliness
        'lime-primary': '#84CC16',       // Lime - vitality
        'lime-light': '#A3E635',         // Bright Lime - growth
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0A2463 0%, #1E3A8A 50%, #0EA5E9 100%)',
        'warm-gradient': 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
        'success-gradient': 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
        'coral-gradient': 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)',
        'cta-gradient': 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
        'alert-gradient': 'linear-gradient(135deg, #FBBF24 0%, #FCD34D 100%)',
        'care-gradient': 'linear-gradient(135deg, #06B6D4 0%, #0EA5E9 100%)',
        'healing-gradient': 'linear-gradient(135deg, #10B981 0%, #22C55E 100%)',
        'vibrant-gradient': 'linear-gradient(135deg, #7C3AED 0%, #EC4899 50%, #F97316 100%)',
        'turquoise-gradient': 'linear-gradient(135deg, #14B8A6 0%, #2DD4BF 100%)',
        'lime-gradient': 'linear-gradient(135deg, #84CC16 0%, #A3E635 100%)',
        'magenta-gradient': 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)',
        'rainbow-gradient': 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 50%, #10B981 100%)',
      },
    },
  },
  plugins: [],
};