<template>
  <footer class="bg-dark text-white pt-16 pb-6">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <!-- Logo and Description -->
        <div class="flex flex-col items-center text-center">
          <img src="~/assets/images/logo.png" alt="Rosimeri Groth - RBL Pinturas" class="h-20 mb-6 brightness-0 invert">
          <p class="mb-6">Transformando ambientes com dedicação e qualidade há 22 anos na região de Santa Catarina.</p>
          <div class="flex space-x-3">
            <a href="https://instagram.com/rblpinturas" target="_blank" rel="noopener noreferrer" class="social-icon">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a 
              href="https://wa.me/5549998324991?text=Olá! Gostaria de mais informações sobre seus serviços."
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
        
        <!-- Links Rápidos -->
        <div>
          <h4 class="text-xl font-bold mb-6">Links Rápidos</h4>
          <ul class="space-y-3">
            <li v-for="(item, index) in quickLinks" :key="index">
              <nuxt-link :to="item.path" class="text-gray-300 hover:text-white transition duration-300">
                {{ item.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        
        <!-- Serviços -->
        <div>
          <h4 class="text-xl font-bold mb-6">Serviços</h4>
          <ul class="space-y-3">
            <li v-for="(service, index) in services" :key="index">
              <nuxt-link :to="service.path" class="text-gray-300 hover:text-white transition duration-300">
                {{ service.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        
        <!-- Contato -->
        <div>
          <h4 class="text-xl font-bold mb-6">Contato</h4>
          <ul class="space-y-3">
            <li>
              <a href="tel:+5549998324991" class="text-gray-300 hover:text-white transition duration-300 flex items-center">
                <i class="fas fa-phone mr-3"></i> (49) 99832-4991
              </a>
            </li>
            <li>
              <a href="mailto:rbltoquemagico@gmail.com" class="text-gray-300 hover:text-white transition duration-300 flex items-center">
                <i class="fas fa-envelope mr-3"></i> rbltoquemagico@gmail.com
              </a>
            </li>
            <li>
              <a href="https://instagram.com/rblpinturas" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition duration-300 flex items-center">
                <i class="fab fa-instagram mr-3"></i> @rblpinturas
              </a>
            </li>
            <li class="flex items-center text-gray-300">
              <i class="fas fa-map-marker-alt mr-3"></i> Atendimento em toda Grande Florianópolis - SC
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
        <p>&copy; {{ new Date().getFullYear() }} <a href="https://audentestech.com.br" target="_blank">Audentes Tech Solutions LTDA.</a>. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Sobre', path: '/#about' },
  { name: 'Serviços', path: '/#services' },
  { name: 'Portfólio', path: '/#portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contato', path: '/#contact' }
]

const services = [
  { name: 'Pintura Residencial', path: '/servicos/pintura-residencial' },
  { name: 'Pintura Comercial', path: '/servicos/pintura-comercial' },
  { name: 'Grafiato e Textura', path: '/servicos/grafiato-textura' },
  { name: 'Restauração', path: '/servicos/restauracao' },
  { name: 'Efeitos Decorativos', path: '/servicos/efeitos-decorativos' },
  { name: 'Impermeabilização', path: '/servicos/impermeabilizacao' },
  { name: 'Pintor Florianópolis', path: '/pintor-florianopolis' },
  { name: 'Grafiato Grande Florianópolis', path: '/grafiato-textura-grande-florianopolis' },
  { name: 'Pintura São José', path: '/pintura-residencial-sao-jose' }
]
</script>

<style scoped>
.social-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition-property: all;
  transition-duration: 300ms;
}
.social-icon:hover {
  background-color: var(--accent);
}
</style>