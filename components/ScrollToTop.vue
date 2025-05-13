<template>
  <button 
    class="fixed bottom-8 right-8 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 invisible hover:bg-opacity-90"
    :class="{ 'opacity-100 visible': showButton }"
    @click="scrollToTop"
    aria-label="Voltar ao topo"
  >
    <i class="fas fa-arrow-up"></i>
  </button>
</template>

<script setup>
const showButton = ref(false)

// Show button when page is scrolled beyond 300px
const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>