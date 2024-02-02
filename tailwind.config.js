/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      color: {
        'light-yellow': '#F5D577',
      },
    },
    fontFamily: {
      alice: ['Alice'],
      inter: ['Inter'],
      lato: ['Lato'],
      merriweather: ['Merriweather'],
    },
  },
  plugins: [require('flowbite/plugin')],
};
