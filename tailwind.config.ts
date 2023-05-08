/** @type {import("tailwindcss").Config} */

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  optimizeFonts: false,
  theme: {
    extend: {
      fontFamily: {
        'chomsky': ['Chomsky', 'serif'],
        newsreader: "'Newsreader', serif",
        oldstandard: "'Old Standard TT', serif"
      }
    }
  }, plugins: []
};
