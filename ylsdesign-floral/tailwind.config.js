/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        floral: {
          50: '#fdf8f6',
          100: '#fbe8e0',
          200: '#f5cbc4',
          300: '#f0aea8',
          400: '#eb918c',
          500: '#e67470',
          600: '#d4503f',
          700: '#a23d32',
          800: '#702a24',
          900: '#3e1715',
        }
      }
    },
  },
  plugins: [],
}
