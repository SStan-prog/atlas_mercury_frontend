/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',

    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/common/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    extend: {
      colors: {
        white: '#F2F2F2',
        black: '#222222',
        grey: {
          100: '#F8FAFB',
          200: '#F1F5F8',
          300: '#EAF0F5',
          400: '#AEBDCB',
          500: '#899EB3',
          600: '#617D98',
          700: '#476685',
          800: '#324D67',
          900: '#22384F',
          1000: '#102A42',
        },
        blue: {
          100: '#E9F6FB',
          200: '#CBE9F6',
          300: '#9DD7F1',
          400: '#6ABCE1',
          500: '#40A9D9',
          600: '#268FBE',
          700: '#1F769D',
          800: '#196080',
          900: '#13465E',
          1000: '#0D3040',
          1100: '#0A2633',
        },
        red: {
          100: '#FFDBDB',
          200: '#FFBDBD',
          300: '#FF9B9B',
          400: '#F86A6A',
          500: '#EF4E4E',
          600: '#E12D39',
          700: '#CF1124',
          800: '#AB091E',
          900: '#8A041A',
          1000: '#610316',
        },
      },
    },
  },
};
