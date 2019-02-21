const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'es',
    },
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Montserrat:500,800' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Customize app routes
  */
  router: {
    extendRoutes (routes, resolve) {
      // services template
      let route = routes.find((route) => {
        return route.path === '/services';
      });

      route.path = route.path + '.html';

      let childRoute = route.children.find((route) => {
        return route.name === 'services-slug';
      });

      childRoute.path = '/services/:slug';

      // contact template
      route = routes.find((route) => {
        return route.path === '/contact';
      });

      route.path = route.path + '.html';
    }
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/sass/styles.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '@/plugins/vue-match-media',
      ssr: false
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: 'http://40northstudio.local/wp-json/wp/v2'
  },

  /*
  ** Environmental variables
  */
  env: {

  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options : {
              fix : true
          }
        });
      }
    },

    postcss: [
      require('postcss-normalize')()
    ]
  }
}
