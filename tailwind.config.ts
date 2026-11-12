import type { Config } from 'tailwindcss';
import cornerShapePlugin from 'tailwindcss-corner-shape';

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
      xl: '1280px',
      '2xl': '1920px',
    },
    fontFamily: {
      primary: ['var(--font-dm-sans)', 'sans-serif'],
      secondary: ['var(--font-bricolage-grotesque)', 'sans-serif'],
    },
    extend: {
      colors: {
        background: '#f2e8da',
        primary: '#3b2418',
        secondary: '#3b2418',
        card: '#3B24180D',
      },
    },
  },
  plugins: [cornerShapePlugin({ default: 'squircle' })],
} satisfies Config;
