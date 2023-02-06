/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'movie-gray': '#6F6F6F',
        'movie-black': '#212529',
      },
    },
  },
  plugins: [],
};
