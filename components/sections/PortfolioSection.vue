<template>
  <section id="portfolio" class="section">
    <div class="container">
      <h2 class="section-title">Nossos Trabalhos</h2>
      <p class="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Confira alguns dos nossos projetos realizados e inspire-se para transformar seu ambiente
      </p>

      <!-- Project Categories -->
      <div class="flex flex-wrap justify-center gap-4 mb-10">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="selectedCategory = category"
          class="px-4 py-2 rounded-full transition-all duration-300"
          :class="selectedCategory === category ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'"
        >
          {{ category }}
        </button>
      </div>

      <!-- Project Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="group relative overflow-hidden rounded-lg cursor-pointer"
          @click="openProject(project)"
        >
          <img 
            :src="project.image" 
            :alt="project.title"
            class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-white font-bold text-xl mb-2">{{ project.title }}</h3>
              <p class="text-gray-200 text-sm">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div v-if="selectedProject" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-black/80" @click="selectedProject = null"></div>
        <div class="relative bg-white rounded-lg max-w-4xl w-full">
          <button 
            @click="selectedProject = null"
            class="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <i class="fas fa-times text-xl"></i>
          </button>
          <div class="p-6">
            <img 
              :src="selectedProject.image" 
              :alt="selectedProject.title"
              class="w-full h-auto rounded-lg mb-6"
            >
            <h3 class="text-2xl font-bold mb-2">{{ selectedProject.title }}</h3>
            <p class="text-gray-600 mb-4">{{ selectedProject.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in selectedProject.tags" 
                :key="tag"
                class="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const selectedCategory = ref('Todos')
const selectedProject = ref(null)

const categories = ['Todos', 'Residencial', 'Comercial', 'Texturas', 'Restauração', 'Efeitos']

const projects = [
  {
    id: 1,
    title: 'Residência Moderna',
    description: 'Pintura completa com acabamento premium',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074',
    category: 'Residencial',
    tags: ['Pintura Interna', 'Pintura Externa']
  },
  {
    id: 2,
    title: 'Escritório Corporativo',
    description: 'Projeto comercial com design contemporâneo',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069',
    category: 'Comercial',
    tags: ['Pintura Comercial', 'Acabamento Acetinado']
  },
  {
    id: 3,
    title: 'Sala de Estar',
    description: 'Aplicação de textura especial em sala de estar',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1974',
    category: 'Texturas',
    tags: ['Grafiato', 'Textura Especial']
  },
  {
    id: 4,
    title: 'Loja Conceito',
    description: 'Texturas e efeitos decorativos personalizados',
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070',
    category: 'Comercial',
    tags: ['Efeitos Especiais', 'Design de Interiores']
  },
  {
    id: 5,
    title: 'Casa de Praia',
    description: 'Pintura externa com proteção UV e anti-maresia',
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070',
    category: 'Residencial',
    tags: ['Pintura Externa', 'Impermeabilização']
  },
  {
    id: 6,
    title: 'Apartamento Moderno',
    description: 'Efeitos decorativos e texturas especiais',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2080',
    category: 'Texturas',
    tags: ['Efeitos Especiais', 'Design Moderno']
  }
]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'Todos') {
    return projects
  }
  return projects.filter(project => project.category === selectedCategory.value)
})

const openProject = (project) => {
  selectedProject.value = project
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>