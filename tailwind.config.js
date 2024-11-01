/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Includes all source files
    '!./node_modules', // Explicitly excludes node_modules
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};