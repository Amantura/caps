// eslint-disable-next-line nuxt/no-cjs-in-config
require('./configs/env')

export default {
  server: {
    host: process.env.NUXT_SERVER_HOST,
    port: process.env.NUXT_SERVER_PORT
  },
  ssr: true,
  components: true,
  head: require('./configs/head'),
  css: [
    '@/assets/css/app.css',
    '@/assets/css/fontawesome.css',
  ],
  plugins: [
    '@/plugins/utils.js',
    '@/plugins/lazyload.js',
    '@/plugins/mask.js',
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: require('./configs/axios'),
  googleFonts: require('./configs/google-fonts'),
  build: require('./configs/build'),
}
