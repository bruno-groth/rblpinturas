<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div class="text-center">
      <h1 class="text-6xl md:text-9xl font-bold text-primary mb-4">
        {{ error?.statusCode || '404' }}
      </h1>
      <h2 class="text-2xl md:text-3xl font-semibold mb-6">
        {{ error?.message || 'Página não encontrada' }}
      </h2>
      <p class="text-gray-600 mb-8 max-w-md mx-auto">
        A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.
      </p>
      <div class="space-x-4">
        <button 
          class="btn btn-primary"
          @click="handleError"
        >
          Voltar à página inicial
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const error = useError()

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>