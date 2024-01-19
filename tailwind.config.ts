import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
        dark: '#1A202C',
      },
      backgroundColor: {
        'custom-teal': '#319795',
        'custom-teal-dark': '#2c7a78',
        cream: 'rgb(240,231,219)',
      },
    },
  },
  plugins: [],
};
export default config;
