import { type Config } from "tailwindcss";

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
  },
  plugins: [],
} satisfies Config;
