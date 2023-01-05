/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#fff',
      'yellow': '#C59D1A',
      'yellow-secondary': '#FFAF3C',
      'black': '#000',
      'black-secondary': '#181313',
      'gray-dark': '#4C4949',
      'gray': '#F0F0F0',
      'red': '#ff0000'
    },
    backgroundPosition: {
      bottom: 'bottom',
      'bottom-4': 'center bottom 1rem',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      'top-4': 'center 65%',
    },
    container: {
      padding: '2rem',
    },
    screens: {
      'sm': { 'min': '350px', 'max': '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
  },
  plugins: [],
}
