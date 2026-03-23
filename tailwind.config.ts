import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F3D3E',
          dark: '#0A2829',
          light: '#1A5456'
        },
        accent: {
          gold: '#C9A96E', 
          'gold-light': '#D4B87E',
          'gold-dark': '#B8985E'
        },
        neutral: {
          white: '#FFFFFF',
          gray: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            800: '#1F2937',
            900: '#111827'
          }
        }
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};

export default config;
