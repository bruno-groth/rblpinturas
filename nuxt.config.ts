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
          hid: 'description', 
          name: 'description', 
          content: 'Empresa com 20 anos de experiência em pintura residencial e comercial na região da Grande Florianópolis. Conheça nossos serviços de pintura, grafiato, textura e restauração.' 
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#5b3cf0' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css' }
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