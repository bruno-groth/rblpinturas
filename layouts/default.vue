<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <TheFooter />
    <ScrollToTop />
  </div>
</template>

<script setup>
// Components are auto-imported by Nuxt
</script>