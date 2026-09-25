import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { ink: '#17211f', coral: '#f26b4e', cream: '#f7f5ef', sage: '#dfe8df' },
      fontFamily: { display: ['var(--font-display)'], sans: ['var(--font-sans)'] },
      boxShadow: { card: '0 18px 50px rgba(23, 33, 31, 0.08)' },
    },
  },
  plugins: [],
};

export default config;
