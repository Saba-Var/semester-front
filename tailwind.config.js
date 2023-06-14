module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        green: '#198754',
      },

      screens: {
        '3xl': '1920px',
      },

      spacing: {
        50: '12.5rem',
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
}
