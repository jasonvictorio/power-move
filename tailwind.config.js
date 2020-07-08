module.exports = {
  purge: [],
  theme: {
    screens: {
      xl: { max: '1366px' },
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '480px' },
      xs: { max: '361px' },
    },
    extend: {
      spacing: {
        '1x1': '100%',
        '2x1': '50%',
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    container: false,
  },
}
