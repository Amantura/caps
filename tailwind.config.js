const colors = require('tailwindcss/colors')

module.exports = {
  plugins: [],

  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}'
    ]
  },

  darkMode: false,

  theme: {
    colors: {
      transparent: 'transparent',
      currentColor: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      blue: colors.lightBlue,
      green: colors.emerald,
      purple: colors.purple,
      pink: colors.pink,
      yellow: colors.amber,
      top: {
        50: '#353A40'
      }
    },
    extend: {}
  },

  variants: {
    extend: {}
  }
}
