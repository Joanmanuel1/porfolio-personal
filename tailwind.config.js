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
        surface: '#111827',
        elevated: '#1a2236',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-mesh':
          'radial-gradient(at 20% 20%, rgba(99,102,241,0.18) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(139,92,246,0.15) 0px, transparent 50%), radial-gradient(at 50% 0%, rgba(6,182,212,0.12) 0px, transparent 50%)',
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
          '50%': { opacity: 0.6, transform: 'scale(1.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        blob: 'blob 12s infinite ease-in-out',
        'pulse-dot': 'pulse-dot 2.2s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}
