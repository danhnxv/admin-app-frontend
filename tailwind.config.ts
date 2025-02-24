import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        Cornflower_Blue: '#6195ED',
        Dodger_Blue: '#4880FF',
      },
    },
    fontFamily: {
      nunito: ['Nunito Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;
