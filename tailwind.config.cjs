/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
    './node_modules/flowbite/**/*.js',
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
};
