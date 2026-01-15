import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#c6f542',
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#3f6212',
          900: '#365314',
        },
        lime: {
          DEFAULT: '#c6f542',
          light: '#d4ff5c',
          dark: '#a8d938',
        },
        elite: {
          lime: '#c6f542',
          dark: '#1a1a1a',
          darker: '#0f0f0f',
          card: '#ffffff',
          border: '#e5e5e5',
          gray: '#6b7280',
          lightgray: '#f5f5f5',
        }
      },
      fontFamily: {
        sans: ['var(--font-aktiv)', 'system-ui', 'sans-serif'],
        display: ['var(--font-aktiv)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'elite-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gold-gradient': 'linear-gradient(135deg, #c9a962 0%, #d4af37 50%, #c9a962 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
