// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://rblpinturas.com.br',
      googleAnalyticsId: process.env.NUXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'
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
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://rblpinturas.com.br' },
        { property: 'og:title', content: 'RBL Toque Mágico Pinturas | Serviços de Pintura na Grande Florianópolis' },
        { property: 'og:description', content: 'Com mais de 22 anos de experiência, ofereço serviços especializados de pintura residencial e comercial na região da Grande Florianópolis.' },
        { property: 'og:image', content: 'https://rblpinturas.com.br/icons/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'og:site_name', content: 'RBL Toque Mágico Pinturas' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://rblpinturas.com.br' },
        { name: 'twitter:title', content: 'RBL Toque Mágico Pinturas | Serviços de Pintura na Grande Florianópolis' },
        { name: 'twitter:description', content: 'Com mais de 22 anos de experiência, ofereço serviços especializados de pintura residencial e comercial na região da Grande Florianópolis.' },
        { name: 'twitter:image', content: 'https://rblpinturas.com.br/icons/og-image.jpg' },
        
        // Outros meta tags importantes
        { name: 'robots', content: 'index,follow' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#5b3cf0' },
        { name: 'msapplication-TileColor', content: '#5b3cf0' },
        { name: 'msapplication-config', content: '/browserconfig.xml' },
        
        // Meta tags para SEO local
        { name: 'geo.region', content: 'BR-SC' },
        { name: 'geo.placename', content: 'Florianópolis, Santa Catarina' },
        { name: 'ICBM', content: '-27.5954,-48.5480' }
      ],
      link: [
        // Favicons
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/icon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/icon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/icons/icon-48x48.png' },
        
        // Apple Touch Icons
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/icon-180x180.png' },
        
        // Android Chrome Icons
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icons/icon-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/icons/icon-512x512.png' },
        
        // Web App Manifest
        { rel: 'manifest', href: '/manifest.json' },
        
        // Preconnect para melhor performance
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        
        // CSS externo
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
        '/quanto-custa-pintar-casa',
        '/como-escolher-cores-casa',
        '/pintor-perto-de-mim',
        '/pintor-florianopolis',
        '/melhor-epoca-pintar-casa',
        '/pintura-residencial-florianopolis',
        '/pintura-comercial-florianopolis',
        '/pintura-predios-condominios',
        '/pintor-urgente-florianopolis',
        '/grafiato-textura-grande-florianopolis',
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