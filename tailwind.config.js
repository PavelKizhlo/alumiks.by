/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'header-color': '#8DA0DF',
        blured: 'rgba(120, 144, 156, 0.8)',
      },
      backgroundImage: {
        headingBlockBG: "url('../public/imgs/heading-block-bg.png')",
      },
      fontFamily: {
        heading: ['var(--font--open-sans)'],
        typo: ['var(--font-raleway)'],
      },
    },
  },
  plugins: [],
});
