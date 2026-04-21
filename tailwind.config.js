/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium Luxury Color Palette
        'luxury-black': '#0D0D0D',
        'luxury-white': '#FFFFFF',
        'luxury-gold': '#D4AF37',
        'luxury-gold-light': '#F7E27D',
        'luxury-gray': '#F5F5F5',
        'luxury-dark-gray': '#1a1a1a',
        primary: '#D4AF37',
        dark: '#0D0D0D',
        accent: '#F7E27D',
      },
      fontFamily: {
        // Premium Typography
        'heading': ['Playfair Display', 'serif'],
        'subheading': ['Cormorant Garamond', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'display': ['Poppins', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      letterSpacing: {
        'luxury': '0.15em',
        'elegant': '0.1em',
      },
      backdropBlur: {
        'xl': '20px',
      },
      boxShadow: {
        'luxury': '0 20px 60px rgba(0, 0, 0, 0.3)',
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
