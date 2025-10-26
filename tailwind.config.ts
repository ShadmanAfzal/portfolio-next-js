import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
    },
    fontFamily: {
      primary: ['ComicShanns', 'Monospace'],
    },
    extend: {
      colors: {
        background: '#0A0A0A',
        primary: '#C2ED2A',
        secondary: '#E6FDFE',
        card: '#121212',
      },
    },
  },
  plugins: [],
} satisfies Config;
