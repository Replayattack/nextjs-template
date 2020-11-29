module.exports = {
  purge: {
    mode: 'layers',
    layers: ['base', 'components', 'utilities'],
    content: [
      './components/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
    ],
  },
  darkMode: 'media',
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
}
