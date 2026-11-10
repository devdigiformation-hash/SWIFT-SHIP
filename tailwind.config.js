/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        swift: {
          dark: '#000814',
          midnight: '#000B1F',
          navy: '#051329',
          card: 'rgba(5, 19, 41, 0.75)',
          blue: '#1E6BFF',
          accent: '#00A3FF',
          silver: '#C7CAD3',
          steel: '#8E9BAE',
          border: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(30, 107, 255, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 11, 31, 0.45)',
        'glow-blue': '0 0 25px -5px rgba(30, 107, 255, 0.5)',
        'glow-accent': '0 0 30px -5px rgba(0, 163, 255, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
