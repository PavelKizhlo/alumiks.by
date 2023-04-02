/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'header-color': '#8DA0DF',
        blured: 'rgba(0, 0, 0, 0.29)',
      },
      backgroundImage: {
        headingBlockBG: "url('../public/imgs/heading-block-bg.png')",
      },
    },
  },
  plugins: [],
};
