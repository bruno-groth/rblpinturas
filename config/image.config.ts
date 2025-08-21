export default {
  // Configurações para otimização de imagens
  formats: ['webp', 'avif', 'jpeg'],
  quality: 80,
  densities: [1, 2],
  
  // Tamanhos responsivos padrão
  screens: {
    xs: 320,
    sm: 640, 
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536
  },
  
  // Presets para diferentes tipos de imagem
  presets: {
    hero: {
      modifiers: {
        format: 'webp',
        quality: 90,
        width: 1920,
        height: 1080,
        fit: 'cover'
      }
    },
    thumbnail: {
      modifiers: {
        format: 'webp', 
        quality: 80,
        width: 400,
        height: 300,
        fit: 'cover'
      }
    },
    portfolio: {
      modifiers: {
        format: 'webp',
        quality: 85,
        width: 800,
        height: 600,
        fit: 'cover'
      }
    },
    logo: {
      modifiers: {
        format: 'png',
        quality: 90,
        width: 200,
        height: 200,
        fit: 'contain'
      }
    }
  },
  
  // Domínios externos permitidos
  domains: [
    'images.unsplash.com',
    'casa.abril.com.br',
    'rblpinturas.com.br'
  ],
  
  // Configurações de cache
  alias: {
    unsplash: 'https://images.unsplash.com'
  }
}
