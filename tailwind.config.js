/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],     // For large headings
        main: ['var(--font-main)', 'sans-serif'],        // For body copy
        secondary: ['var(--font-secondary)', 'sans-serif'], // For buttons/nav
      },
    },
  },
  plugins: [],
}