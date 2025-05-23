<template>
  <section id="blog" class="section bg-light-gray">
    <div class="container">
      <h2 class="section-title">Blog</h2>
      <p class="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Compartilho minha experiência de mais de 22 anos através de dicas e insights sobre pintura e decoração
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <article v-for="post in posts" :key="post.id" class="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
          <div class="relative h-48 sm:h-56">
            <img 
              :src="post.image" 
              :alt="post.title"
              class="w-full h-full object-cover"
            >
            <div class="absolute top-4 left-4">
              <span class="bg-primary text-white text-sm px-3 py-1 rounded-full">
                {{ post.category }}
              </span>
            </div>
          </div>
          
          <div class="p-4 sm:p-6 flex flex-col flex-1">
            <h3 class="text-lg sm:text-xl font-bold mb-3 hover:text-primary transition-colors line-clamp-2">
              <nuxt-link :to="post.link">{{ post.title }}</nuxt-link>
            </h3>
            
            <p class="text-gray-600 mb-4 text-sm sm:text-base line-clamp-2">{{ post.excerpt }}</p>
            
            <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
              <div class="flex items-center">
                <img 
                  src="~/assets/images/rosimeri.jpg" 
                  :alt="post.author.name"
                  class="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3"
                >
                <div>
                  <p class="font-medium text-sm sm:text-base">{{ post.author.name }}</p>
                  <p class="text-xs sm:text-sm text-gray-500">{{ post.date }}</p>
                </div>
              </div>
              
              <nuxt-link 
                :to="post.link" 
                class="text-primary hover:underline text-sm sm:text-base"
              >
                Ler mais
              </nuxt-link>
            </div>
          </div>
        </article>
      </div>

      <div class="text-center mt-12">
        <nuxt-link to="/blog" class="btn btn-primary">
          Ver Todos os Posts
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const posts = [
  {
    id: 1,
    title: 'Como Escolher as Cores Ideais para Cada Ambiente',
    excerpt: 'Descubra como a psicologia das cores pode transformar seus espaços. Compartilho minhas experiências em harmonização cromática.',
    image: 'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?q=80&w=2832',
    category: 'Design',
    date: '10 Mai 2025',
    link: '/blog/como-escolher-cores-ideais-casa',
    author: {
      name: 'Rosimeri Groth',
      avatar: '~/assets/images/rosimeri.jpg'
    }
  },
  {
    id: 2,
    title: 'Tendências em Texturas para 2025',
    excerpt: 'Conheça as principais tendências em texturas e acabamentos que estou aplicando em meus projetos neste ano.',
    image: 'https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=2070',
    category: 'Tendências',
    date: '05 Mai 2025',
    link: '/blog/tendencias-texturas-2025',
    author: {
      name: 'Rosimeri Groth',
      avatar: '~/assets/images/rosimeri.jpg'
    }
  },
  {
    id: 3,
    title: 'Guia de Manutenção de Pintura',
    excerpt: 'Dicas práticas baseadas em minha experiência para manter sua pintura sempre impecável e durável.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2940',
    category: 'Manutenção',
    date: '01 Mai 2025',
    link: '/blog/guia-manutencao-pintura',
    author: {
      name: 'Rosimeri Groth',
      avatar: '~/assets/images/rosimeri.jpg'
    }
  },
  {
    id: 4,
    title: 'Pintura Sustentável: Guia Completo',
    image: 'https://images.unsplash.com/photo-1596113199003-03babc2bdd2b?q=80&w=2070',
    excerpt: 'Aprenda sobre tintas ecológicas e práticas sustentáveis na pintura residencial e comercial.',
    category: 'Sustentabilidade',
    date: '15 Abr 2025',
    link: '/blog/pintura-sustentavel-guia-completo',
    author: {
      name: 'Rosimeri Groth',
      avatar: '~/assets/images/rosimeri.jpg'
    }
  }
]
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>