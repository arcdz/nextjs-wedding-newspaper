/** @type {import("tailwindcss").Config} */

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chomsky: "'Chomsky', serif",
        newsreader: "'Newsreader', serif"
      }
    }
  }, plugins: []
};
