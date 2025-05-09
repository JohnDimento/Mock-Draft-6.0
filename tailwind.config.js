/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'espn-red': '#FF0000',
        'espn-blue': '#FFFFFF',
        'espn-gray': '#F5F5F5',
        'card-hover': '#E5E5E5',
        'text-primary': '#1A1A1A',
        'text-secondary': '#4A4A4A',
        'text-tertiary': '#666666',
        'overlay-bg': 'rgba(255, 255, 255, 0.95)',
      },
    },
  },
  plugins: [],
} 