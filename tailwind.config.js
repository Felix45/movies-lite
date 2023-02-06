/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'movie-gray': '#6F6F6F',
        'movie-black': '#212529',
        'movie-green': '#00ACC1',
      },
      spacing: {
        128: '40rem',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
};
