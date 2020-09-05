module.exports = {
  purge: {
    mode: 'layers',
    layers: ['base', 'components', 'utilities'],
    content: ['./src/**.tsx'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: ['./components/**/*.tsx', './pages/**/*.tsx'],
  future: {
    darkModeVariant: true,
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
}
