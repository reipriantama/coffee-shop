/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      color: {
        'light-yellow': '#F5D577',
      },
    },
    fontFamily: {
      alice: ['Alice'],
      inter: ['Inter'],
    },
  },
  plugins: [],
};
