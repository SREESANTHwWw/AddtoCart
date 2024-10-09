/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#9BABB8',
        'second': '#331D2C',
        'three': '#EEE3CB',
        'white': '#ffffff',
      }
    },
  },
  plugins: [],
}