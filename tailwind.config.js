/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0F172A',
        electric: '#3B82F6',
        amber: '#F59E0B',
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        dm: ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
