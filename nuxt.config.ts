// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  
  app: {
    head: {
      title: 'RBL Toque Mágico Pinturas | Serviços de Pintura na Grande Florianópolis',
      htmlAttrs: {
        lang: 'pt-BR'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Com mais de 22 anos de experiência, ofereço serviços especializados de pintura residencial e comercial na região da Grande Florianópolis.'
        },
        { property: 'og:title', content: 'Rosimeri Groth - RBL Pinturas' },
        { property: 'og:description', content: 'Serviços especializados de pintura com 22 anos de experiência' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://rblpinturas.com.br' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' }
      ]
    }
  },

  css: ['~/assets/css/tailwind.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@vueuse/nuxt',
  ],

  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  image: {
    quality: 80,
    format: ['webp']
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/servicos/pintura-residencial',
        '/servicos/pintura-comercial',
        '/servicos/grafiato-textura',
        '/servicos/restauracao',
        '/servicos/efeitos-decorativos'
      ]
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/servicos/**': { prerender: true },
    '/blog/**': { prerender: true }
  },

  experimental: {
    payloadExtraction: false
  },

  // Add compatibility date as recommended by the warning
  compatibilityDate: '2025-05-12'
})