module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        primary: '#26ABA3',
        secondary: '#F7AB1E',
        accent: '#F74371',
      },
      fontFamily: {
        display: 'Libre Baskerville, Arial, sans-serif',
        body: 'Noto Sans JP, Arial, sans-serif',
      },
    },
  },
  content: [
    './components/**/*.jsx', // all components
    './pages/**/*.js', // all pages as well
  ],
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
  ],
};
