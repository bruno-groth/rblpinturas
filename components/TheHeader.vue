<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-lg"
  >
    <div class="container">
      <nav class="flex items-center justify-between py-4">
        <!-- Logo -->
        <nuxt-link to="/" class="flex-shrink-0 flex items-center">
          <img 
            src="~/assets/images/logo.png" 
            alt="RBL Toque Mágico Pinturas"
            class="h-12 mr-3"
          >
          <span class="text-lg font-medium">RBL Toque Mágico Pinturas</span>
        </nuxt-link>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <nuxt-link 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.path"
            class="font-medium transition-colors duration-300"
            :class="[
              { 'text-black': !isScrolled && !isMenuOpen },
              { 'text-primary': $route.path === item.path }
            ]"
          >
            {{ item.name }}
          </nuxt-link>
        </div>

        <!-- CTA Button -->
        <div class="hidden lg:block">
          <a 
            href="https://wa.me/5549998324991"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary inline-flex items-center"
          >
            <i class="fab fa-whatsapp mr-2"></i>
            Orçamento
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="lg:hidden p-2"
          @click="toggleMenu"
          :aria-label="isMenuOpen ? 'Fechar menu' : 'Abrir menu'"
        >
          <i 
            class="fas"
            :class="[
              isMenuOpen ? 'fa-times' : 'fa-bars',
              isMenuOpen ? 'text-primary' : 'text-black'
            ]"
          ></i>
        </button>

        <!-- Mobile Menu -->
        <div 
          class="lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300"
          :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
          style="top: 80px;"
        >
          <div class="container py-8">
            <div class="flex flex-col space-y-6">
              <nuxt-link 
                v-for="item in navigation" 
                :key="item.name"
                :to="item.path"
                class="text-xl font-semibold text-gray-800 hover:text-primary transition-colors"
                @click="closeMenu"
              >
                {{ item.name }}
              </nuxt-link>
              
              <a 
                href="https://wa.me/5549998324991"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary inline-flex items-center justify-center"
                @click="closeMenu"
              >
                <i class="fab fa-whatsapp mr-2"></i>
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
const isScrolled = ref(false)
const isMenuOpen = ref(false)

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Sobre', path: '/#about' },
  { name: 'Serviços', path: '/#services' },
  { name: 'Portfólio', path: '/#portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contato', path: '/#contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial scroll position
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>