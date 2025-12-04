/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a', // Deep Blue
          light: '#1e293b',
        },
        accent: {
          DEFAULT: '#c0a062', // Gold
          light: '#d4b87e',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['"Palatino Linotype"', '"Book Antiqua"', 'Palatino', 'serif'],

      }
    },
  },
  plugins: [],
}
