/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'very-pale-blue': 'hsl(230, 100%, 99%)',
        'soft-cyan': 'hsl(174, 86%, 45%)',
        'red-background': 'hsl(14, 92%, 95%)',
        'red-dis': 'hsl(15, 100%, 70%)',
        'pricing-card': 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}