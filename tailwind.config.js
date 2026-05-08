/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', ...defaultTheme.fontFamily.sans],
        display: ['"Space Grotesk Variable"', ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      colors: {
        canvas: '#0b0f19',
        surface: '#0d1520',
        elevated: '#111e2e',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-mesh':
          'radial-gradient(at 20% 25%, rgba(6,182,212,0.12) 0px, transparent 50%), radial-gradient(at 80% 75%, rgba(16,185,129,0.10) 0px, transparent 50%), radial-gradient(at 55% 5%, rgba(14,165,233,0.09) 0px, transparent 50%)',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(1.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        blob: 'blob 12s infinite ease-in-out',
        'pulse-dot': 'pulse-dot 2.2s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
