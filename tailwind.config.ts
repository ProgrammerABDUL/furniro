import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      screens: {
        // 'S-Mobile': '320px',
        // 'M-Mobile': '375px',
        // 'L-Mobile': '425px',
        'L-Laptop': '1440px',
      }
    },
  },
  plugins: [],
} satisfies Config;
