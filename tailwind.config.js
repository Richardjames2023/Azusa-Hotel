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
        // Luxury Hospitality Serif
        luxury: ['var(--font-cormorant)', 'serif'],

        // Main UI Font
        inter: ['var(--font-inter)', 'sans-serif'],

        // Modern UI Sections
        manrope: ['var(--font-manrope)', 'sans-serif'],

        // Body Content
        body: ['var(--font-dmSans)', 'sans-serif'],

        // Navigation / Buttons
        nav: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },

  plugins: [],
}
