import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './data/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B2D5B',
        royal: '#1155CC',
        skysoft: '#EAF3FF',
        gold: '#D4AF37',
        ink: '#172033',
        muted: '#667085'
      },
      boxShadow: {
        soft: '0 18px 60px rgba(11, 45, 91, 0.12)'
      },
      borderRadius: {
        '3xl': '1.75rem'
      }
    }
  },
  plugins: []
};

export default config;
