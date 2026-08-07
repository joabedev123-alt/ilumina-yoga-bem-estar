/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ilumina: {
          creme: '#F7F2E9',
          'creme-light': '#FBF8F2',
          bege: '#E9DDCC',
          areia: '#D6C4AA',
          gold: '#B77912',
          'gold-warm': '#C28A2C',
          marrom: '#725334',
          salvia: '#A9AF91',
          'salvia-dark': '#8D9475',
          'salvia-light': '#C5CBB3',
          oliva: '#858D6C',
          texto: '#39332D',
          'texto-muted': '#6B6359',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'DM Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(57, 51, 45, 0.06)',
        'editorial': '0 20px 40px -15px rgba(114, 83, 52, 0.08)',
        'floating': '0 12px 35px -5px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        'arch': '120px 120px 0 0',
        'arch-sm': '60px 60px 0 0',
      }
    },
  },
  plugins: [],
}
