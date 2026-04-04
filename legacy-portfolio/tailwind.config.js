/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        abyss: {
          DEFAULT: 'rgb(var(--abyss-rgb) / <alpha-value>)',
          low: 'rgb(var(--abyss-low-rgb) / <alpha-value>)',
          lower: 'rgb(var(--abyss-lower-rgb) / <alpha-value>)',
          lowest: 'rgb(var(--abyss-lowest-rgb) / <alpha-value>)',
        },
        'glow-cyan': 'rgb(var(--cyan-glow-rgb) / <alpha-value>)',
        'glow-purple': 'rgb(var(--purple-glow-rgb) / <alpha-value>)',
        'tx-high': 'rgb(var(--text-high-rgb) / <alpha-value>)',
        'tx-mid': 'rgb(var(--text-mid-rgb) / <alpha-value>)',
        'tx-low': 'rgb(var(--text-low-rgb) / <alpha-value>)',
        surface: {
          dim: 'rgb(var(--abyss-rgb) / <alpha-value>)',
          bright: 'rgb(var(--abyss-low-rgb) / <alpha-value>)',
          variant: 'rgb(var(--abyss-lower-rgb) / <alpha-value>)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'monolith-reveal': 'reveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'glass-shimmer': 'shimmer 3s infinite',
      },
      keyframes: {
        reveal: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
