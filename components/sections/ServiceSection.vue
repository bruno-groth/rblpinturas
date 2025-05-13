<template>
  <section id="services" class="section bg-light-gray">
    <div class="container">
      <h2 class="section-title">Nossos Serviços</h2>
      <p class="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Oferecemos uma ampla gama de serviços de pintura profissional para transformar seu ambiente
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.id" class="group">
          <div class="bg-white rounded-lg p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <div class="w-14 h-14 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mb-6">
              <i :class="service.icon" class="text-2xl text-white"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">{{ service.title }}</h3>
            <p class="text-gray-600 mb-6">{{ service.description }}</p>
            <nuxt-link 
              :to="service.link" 
              class="inline-flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300"
            >
              Saiba mais 
              <i class="fas fa-arrow-right ml-2"></i>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <a 
          href="https://wa.me/5549998324991?text=Olá! Gostaria de um orçamento específico sobre seus serviços de pintura."
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn btn-primary inline-flex items-center"
        >
          <i class="fab fa-whatsapp mr-2"></i>
          Solicite um Orçamento
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    id: 1,
    title: 'Pintura Residencial',
    description: 'Transformamos sua casa com acabamentos perfeitos, utilizando as melhores tintas e técnicas do mercado.',
    icon: 'fas fa-home',
    link: '/servicos/pintura-residencial'
  },
  {
    id: 2,
    title: 'Pintura Comercial',
    description: 'Soluções profissionais para empresas, com foco em durabilidade e prazo de entrega.',
    icon: 'fas fa-building',
    link: '/servicos/pintura-comercial'
  },
  {
    id: 3,
    title: 'Grafiato e Textura',
    description: 'Acabamentos texturizados que proporcionam personalidade e proteção para suas paredes.',
    icon: 'fas fa-paint-roller',
    link: '/servicos/grafiato-textura'
  },
  {
    id: 4,
    title: 'Restauração',
    description: 'Recuperamos a beleza original de superfícies danificadas com técnicas especializadas.',
    icon: 'fas fa-tools',
    link: '/servicos/restauracao'
  },
  {
    id: 5,
    title: 'Efeitos Decorativos',
    description: 'Criamos ambientes únicos com técnicas especiais de pintura e efeitos decorativos.',
    icon: 'fas fa-magic',
    link: '/servicos/efeitos-decorativos'
  },
  {
    id: 6,
    title: 'Impermeabilização',
    description: 'Proteja seu imóvel contra infiltrações com nossos serviços de impermeabilização.',
    icon: 'fas fa-shield-alt',
    link: '/servicos/impermeabilizacao'
  }
]
</script>