/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        // Refined monochromatic palette
        'cream': '#F5F3F0',        // Light cream from image
        'warm-taupe': '#D4C4B0',   // Warm beige/taupe from image
        'navy-blue': '#2C4B5A',    // Deep blue from image
        'charcoal': '#1A1A1A',     // Rich black from image
        
        // Legacy color mapping for compatibility
        'primary-dark': '#2C4B5A',
        'primary-light': '#F5F3F0',
        'accent-cream': '#F5F3F0',
        'warm-beige': '#D4C4B0',
        'deep-navy': '#2C4B5A',
        'rich-black': '#1A1A1A',
        'dark-bg': '#2C4B5A',
        'dark-secondary': '#1A1A1A',
        'dark-card': '#2C4B5A',
        'dark-border': '#D4C4B0',
        'text-muted': '#D4C4B0',
        'text-light': '#F5F3F0',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #2C4B5A 0%, #1A1A1A 100%)',
        'button-gradient': 'linear-gradient(135deg, #F5F3F0 0%, #D4C4B0 100%)',
        'card-gradient': 'linear-gradient(135deg, #2C4B5A 0%, #1A1A1A 100%)',
        'accent-gradient': 'linear-gradient(135deg, #F5F3F0 0%, #D4C4B0 100%)',
        'dark-gradient': 'linear-gradient(135deg, #1A1A1A 0%, #2C4B5A 100%)',
        'section-gradient': 'linear-gradient(180deg, #2C4B5A 0%, #1A1A1A 50%, #2C4B5A 100%)',
      },
    },
  },
  plugins: [],
} 