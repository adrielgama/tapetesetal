/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'tet-orange-100': 'rgb(227, 137, 85)',
        'tet-orange-300': 'rgb(247, 148, 29)',
        'tet-orange-400': 'rgb(172, 82, 29)',
        'tet-orange-500': 'rgb(111, 51, 14)',
        'tet-orange-600': 'rgb(45, 23, 6)',
        'tet-orange-900': 'rgb(26, 5, 1)',
        'tet-gray-100': 'rgb(214, 219, 220)',
        'tet-gray-400': 'rgb(56, 68, 74)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
