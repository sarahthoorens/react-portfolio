/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx'],
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "/public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'rose': '#BF8B85',
        'vanilla': '#FAF3DD',
        'baby-blue': '#AED9E0',
        'navy': '#344966',
        'indigo': '#475B63'
      }
    },
  },
  plugins: [],
}
