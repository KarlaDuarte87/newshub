import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Libre Baskerville', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;