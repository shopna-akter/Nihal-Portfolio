/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(2px, 2px)' },
        },
      },
      animation: {
        move: 'move 1s infinite alternate',
      },
      boxShadow: {
        'light': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [require('daisyui')],
}
