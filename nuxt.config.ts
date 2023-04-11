// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Sorrento Cup',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg', href: '/favicon.svg' }
      ]
    }
  },
  modules: [
  ],
  css: [
    '@/assets/css/main.css',
    'mapbox-gl/dist/mapbox-gl.css',
    '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css',
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-vue-3/dist/bootstrap-vue-3.css",
  ]
})
