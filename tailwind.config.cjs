/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#DB8932',
        dark: '#303030'
      },
      fontFamily: {
        'sans': ['Roboto', 'Sans-serif']
      }
    },
  },
  plugins: [],
}