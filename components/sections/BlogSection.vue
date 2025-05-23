<template>
  <section id="blog" class="section bg-light-gray">
    <div class="container">
      <h2 class="section-title">Blog</h2>
      <p class="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Compartilho minha experiência de mais de 22 anos através de dicas e insights sobre pintura e decoração
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="post in posts" :key="post.id" class="bg-white rounded-lg overflow-hidden shadow-lg">
          <div class="relative">
            <img 
              :src="post.image" 
              :alt="post.title"
              class="w-full h-48 object-cover"
            >
            <div class="absolute top-4 left-4">
              <span class="bg-primary text-white text-sm px-3 py-1 rounded-full">
                {{ post.category }}
              </span>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold mb-3 hover:text-primary transition-colors">
              <nuxt-link :to="post.link">{{ post.title }}</nuxt-link>
            </h3>
            
            <p class="text-gray-600 mb-4 line-clamp-2">{{ post.excerpt }}</p>
            
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img 
                  src="~/assets/images/rosimeri.jpg" 
                  :alt="post.author.name"
                  class="w-10 h-10 rounded-full mr-3"
                >
                <div>
                  <p class="font-medium">{{ post.author.name }}</p>
                  <p class="text-sm text-gray-500">{{ post.date }}</p>
                </div>
              </div>
              
              <nuxt-link 
                :to="post.link" 
                class="text-primary hover:underline"
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
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158',
    category: 'Design',
    date: '10 Mai 2025',
    link: '/blog/como-escolher-cores-ideais-casa',
    author: {
      name: 'Rosimeri Groth',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070'
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
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070',
    category: 'Manutenção',
    date: '01 Mai 2025',
    link: '/blog/guia-manutencao-pintura',
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