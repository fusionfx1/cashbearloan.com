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
        // Rustic Earthy Christmas Theme
        'primary-navy': '#386641',      // Hunter Green - primary headings
        'primary-blue': '#386641',      // Hunter Green - professional
        'accent-teal': '#6A994E',       // Sage Green - secondary accents
        'accent-cyan': '#6A994E',       // Sage Green - trust and nature
        'warm-orange': '#BC4749',       // Blushed Brick - primary CTA
        'warm-amber': '#BC4749',        // Blushed Brick - action
        'success-emerald': '#6A994E',   // Sage Green - success states
        'success-green': '#6A994E',     // Sage Green - positive outcomes
        'purple-primary': '#BC4749',    // Blushed Brick - converted
        'purple-accent': '#F2E8CF',     // Champagne Mist - subtle accents
        'neutral-slate': '#386641',     // Hunter Green - body text
        'neutral-gray': '#6A994E',      // Sage Green - secondary text
        'light-gray': '#F2E8CF',        // Champagne Mist - section backgrounds
        'warm-gray': '#F2E8CF',         // Champagne Mist - warmth
        'cta-gradient-start': '#BC4749', // Blushed Brick start
        'cta-gradient-end': '#A73C3E',   // Darker Brick end
        'warning-orange': '#BC4749',     // Blushed Brick - urgency
        'alert-amber': '#A7C957',        // Yellow Green - attention
        'coral-primary': '#BC4749',      // Blushed Brick - excitement
        'coral-accent': '#D16063',       // Lighter Brick - energy
        'sage-primary': '#6A994E',       // Sage Green - natural vitality
        'sage-accent': '#A7C957',        // Yellow Green - growth
        'honey-primary': '#A7C957',      // Yellow Green - optimism
        'honey-accent': '#B8D966',       // Bright Yellow Green - hope
        'turquoise-primary': '#6A994E',  // Sage Green - trust
        'turquoise-light': '#A7C957',    // Yellow Green - energy
        'magenta-primary': '#BC4749',    // Blushed Brick - excitement
        'magenta-light': '#D16063',      // Lighter Brick - friendliness
        'lime-primary': '#A7C957',       // Yellow Green - vitality
        'lime-light': '#B8D966',         // Bright Yellow Green - growth
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #F2E8CF 0%, #F5ECD7 50%, #F2E8CF 100%)',
        'warm-gradient': 'linear-gradient(135deg, #BC4749 0%, #A73C3E 100%)',
        'success-gradient': 'linear-gradient(135deg, #6A994E 0%, #A7C957 100%)',
        'coral-gradient': 'linear-gradient(135deg, #BC4749 0%, #D16063 100%)',
        'cta-gradient': 'linear-gradient(135deg, #BC4749 0%, #A73C3E 100%)',
        'alert-gradient': 'linear-gradient(135deg, #A7C957 0%, #B8D966 100%)',
        'care-gradient': 'linear-gradient(135deg, #6A994E 0%, #A7C957 100%)',
        'healing-gradient': 'linear-gradient(135deg, #6A994E 0%, #8BB957 100%)',
        'vibrant-gradient': 'linear-gradient(135deg, #BC4749 0%, #6A994E 50%, #A7C957 100%)',
        'turquoise-gradient': 'linear-gradient(135deg, #6A994E 0%, #8BB957 100%)',
        'lime-gradient': 'linear-gradient(135deg, #A7C957 0%, #B8D966 100%)',
        'magenta-gradient': 'linear-gradient(135deg, #BC4749 0%, #D16063 100%)',
        'rainbow-gradient': 'linear-gradient(135deg, #BC4749 0%, #6A994E 50%, #A7C957 100%)',
      },
    },
  },
  plugins: [],
};