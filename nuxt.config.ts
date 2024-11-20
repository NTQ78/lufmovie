import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { fileURLToPath } from 'url'

const tmdbApiKey = process.env.TMDB_API_KEY

export default defineNuxtConfig({
  alias: {
    images: fileURLToPath(new URL('./assets/images', import.meta.url)),
    musics: fileURLToPath(new URL('./assets/music', import.meta.url))
  },

  build: {
    transpile: ['vuetify']
  },
  css: ['./assets/css/global.css', 'animate.css/animate.min.css'],
  ssr: true,
  devtools: { enabled: true },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    'nuxt-swiper'
  ],

  routeRules: {
    '/': {
      prerender: true
    }
  },
  runtimeConfig: {
    public: {
      TMDB_API_KEY: tmdbApiKey
    }
  },

  plugins: ['~/plugins/axios.ts'],
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api']
        }
      }
    }
  },

  compatibilityDate: '2024-11-04'
})
