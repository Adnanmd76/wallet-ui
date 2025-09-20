/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        desert: '#C2B280',       // soft gold
        midnight: '#1A1A2E',     // deep blue
        calligraphy: '#0F0F0F',  // rich black
      },
      fontFamily: {
        nastaliq: ['"Noto Nastaliq Urdu"', 'serif'],
        cairo: ['"Cairo"', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
