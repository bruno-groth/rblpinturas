interface MetaOptions {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
}

export const useMeta = (options: MetaOptions) => {
  const config = useRuntimeConfig()
  const route = useRoute()
  
  const defaults = {
    title: 'RBL Toque Mágico Pinturas | Serviços de Pintura na Grande Florianópolis',
    description: 'Empresa com 20 anos de experiência em pintura residencial e comercial na região da Grande Florianópolis. Conheça nossos serviços de pintura, grafiato, textura e restauração.',
    image: '/images/social-share.jpg',
    url: config.public.siteUrl,
    type: 'website',
    keywords: 'pintor florianópolis, pintura residencial, grafiato são josé, textura paredes, pintura comercial, efeitos decorativos, restauração pintura, impermeabilização, grande florianópolis'
  }

  const meta = {
    title: options.title || defaults.title,
    description: options.description || defaults.description,
    image: options.image || defaults.image,
    url: options.url || `${defaults.url}${route.path}`,
    type: options.type || defaults.type,
    keywords: options.keywords || defaults.keywords
  }

  useHead({
    title: meta.title,
    meta: [
      { name: 'description', content: meta.description },
      { name: 'keywords', content: meta.keywords },
      { name: 'robots', content: 'index,follow' },
      
      // Open Graph
      { property: 'og:type', content: meta.type },
      { property: 'og:title', content: meta.title },
      { property: 'og:description', content: meta.description },
      { property: 'og:image', content: meta.image },
      { property: 'og:url', content: meta.url },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: meta.title },
      { name: 'twitter:description', content: meta.description },
      { name: 'twitter:image', content: meta.image },
      
      // Additional SEO
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#5b3cf0' }
    ],
    link: [
      { rel: 'canonical', href: meta.url }
    ]
  })

  return meta
}