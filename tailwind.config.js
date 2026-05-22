/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Individual reference fallback utility tokens
        davossy: ['var(--font-davossy)', 'sans-serif'],
        glirock: ['var(--font-glirock)', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
        secondary: ['var(--font-secondary)', 'sans-serif'],
        main: ['var(--font-main)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
