import ViteRestart from 'vite-plugin-restart'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@element-plus/nuxt', '@pinia/nuxt'],
  devtools: { enabled: true },
  elementPlus: {
    importStyle: 'scss'
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Home | Boilerplate',
      htmlAttrs: {
        lang: 'fa',
        dir: 'rtl'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=0.9' },
        {
          name: 'description',
          content: ''
        },
        { name: 'author', content: '' },
        { name: 'og:site_name', content: '' },
        { name: 'og:url', content: '' },
        { name: 'og:title', content: '' },
        { name: 'og:description', content: '' },
        { name: 'og:image', content: '' },
        { name: 'twitter:url', content: '' },
        { name: 'twitter:title', content: '' },
        { name: 'twitter:description', content: '' },
        { name: 'twitter:image', content: '' }
      ],
      link: [
        { rel: 'stylesheet', type: 'text/css', href: '/css/bootstrap-grid.css' },
        { rel: 'stylesheet', type: 'text/css', href: '/css/variable-classes.css' },
        { rel: 'stylesheet', type: 'text/css', href: '/css/variables.light.css' },
        { rel: 'stylesheet', type: 'text/css', href: '/css/variables.css' }
      ]
    }
  },
  vite: {
    plugins: [
      ViteRestart({
        restart: ['pwa.config.ts', 'vite.config.ts', 'nuxt.config.ts', 'tsconfig.json', '.env']
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          refresh: true
          // additionalData: `@import "~/assets/scss/app/variables.scss";\n`,
          // includePaths: ['sass']
        }
      }
    }
  }
})
