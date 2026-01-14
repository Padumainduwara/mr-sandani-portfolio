import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a", // Deep black for text
        secondary: "#8d6e63", // Muted earth tone
        accent: "#d4af37", // Gold (matching the saree)
      },
      fontFamily: {
        serif: ['var(--font-playfair)'],
        sans: ['var(--font-inter)'],
      }
    },
  },
  plugins: [],
};
export default config;