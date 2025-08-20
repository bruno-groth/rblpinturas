// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://rblpinturas.com.br'
    }
  },
  
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
        { name: 'robots', content: 'index,follow' },
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
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  sitemap: {
    hostname: process.env.NUXT_PUBLIC_SITE_URL || 'https://rblpinturas.com.br',
    gzip: true
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: `${process.env.NUXT_PUBLIC_SITE_URL || 'https://rblpinturas.com.br'}/sitemap.xml`
  },

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
        '/servicos/efeitos-decorativos',
        '/servicos/impermeabilizacao',
        '/pintor-florianopolis',
        '/grafiato-textura-grande-florianopolis',
        '/pintura-residencial-sao-jose',
        '/blog',
        '/blog/como-escolher-cores-ideais-casa',
        '/blog/guia-manutencao-pintura',
        '/blog/pintura-sustentavel-guia-completo',
        '/blog/tendencias-texturas-2025'
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