import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'pulse-shadow': {
          '0%, 100%': { boxShadow: '0 0 10px 1px rgba(255, 0, 255, 0.7)' },
          '50%': { boxShadow: '0 0 10px 3px rgba(0, 200, 255, 0.8)' },
        },
      },
      animation: {
        'pulse-shadow': 'pulse-shadow 5s ease-in-out infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"]
      }
    },
  },
  plugins: [],
} satisfies Config;
