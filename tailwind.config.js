/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Defines a custom utility class based on the 'Inter' font loaded in _app.js
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


