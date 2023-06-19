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
        14: '3.5rem',
        50: '12.5rem',
      },

      gridTemplateRows: {
        30: 'repeat(30, minmax(0, 1fr))',
      },

      animation: {
        'fade-in': 'fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      },

      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
      },
    },
  },

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}
