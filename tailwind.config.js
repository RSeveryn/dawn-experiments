/** @type {import('tailwindcss').Config} */
const theme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./**/*.liquid"],
  theme: {
    extend: {
      colors: {
        'body-1': '#3D247A',
        'body-2': '#341087',
        'btn-primary': '#341188',
        'btn-secondary': '#4700ED',
      },
      fontFamily: {
        'sf': ['"SF Pro Display"', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'moving-up-and-down-10': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'moving-down-and-up-10': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out forwards',
        'moving-up-and-down-10': 'moving-up-and-down-10 6s ease-in-out infinite',
        'moving-down-and-up-10': 'moving-down-and-up-10 6s ease-in-out infinite',
      },
      boxShadow: {
        'b-product-card': '0.767px 0px 0px 0px rgba(0, 0, 0, 0.13) inset, -0.767px 0px 0px 0px rgba(0, 0, 0, 0.17) inset, 0px -0.767px 0px 0px rgba(0, 0, 0, 0.17) inset, 0px 0.767px 0px 0px rgba(204, 204, 204, 0.50) inset, 0px 15.341px 15.341px -6.136px rgba(50, 8, 106, 0.28)',
      },
      backgroundImage: {
        'gr-1': 'linear-gradient(0deg, #341087 50.11%, #A669EF 87.22%)',
      },
      screens: {
        'md': '744px'
      },
    }
  },
  plugins: [],
}

