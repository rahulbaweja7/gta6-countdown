/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gta: ['"Orbitron"', 'sans-serif'],
      },
      colors: {
        gtaPink: '#FF2BC2',
        gtaNeon: '#00FF99',
        gtaDark: '#0c0c0c',
      },
    },
  },
  plugins: [],
}
