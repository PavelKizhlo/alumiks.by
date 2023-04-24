/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '2.5rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
        '3xl': '6rem',
      },
    },
    extend: {
      screens: {
        sm2: { min: '319px', max: '479px' },
        sm1: { min: '480px', max: '575px' },
        xs: { min: '576px', max: '640px' },
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1690px',
      },
      colors: {
        // MAIN PALETTE
        'light-shades': '#F6F6F3', // Use this color as the background for your dark-on-light designs, or the text color of an inverted design.
        'light-accent': '#7F949D', // Accent colors can be used to bring attention to design elements by contrasting with the rest of the palette.
        'main-color': '#95A9B6', // This color should be eye-catching but not harsh. It can be liberally applied to your layout as its main identity.
        'dark-accent': '#7C8C9A', // Another accent color to consider. Not all colors have to be used - sometimes a simple color scheme works best.
        'dark-shades': '#244C5E', // Use as the text color for dark-on-light designs, or as the background for inverted designs.
        'dark-accent-blur': 'rgba(124, 140, 154, 0.8)',
        // FUNCTIONAL COLORS
        primary: '#95A9B6',
        info: '#244C5E',
        success: '#62AD6F',
        warning: '#DF9D37',
        danger: '#F44336',
      },
      fontFamily: {
        heading: ['var(--font-heading-custom)'],
        typo: ['var(--font-typo-custom)'],
      },
    },
  },
  plugins: [],
});
