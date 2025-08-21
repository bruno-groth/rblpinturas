export default defineNuxtPlugin(() => {
  const { initGA } = useGoogleAnalytics()
  
  // Inicializar Google Analytics no client-side
  if (process.client) {
    initGA()
    
    // Track page views automaticamente
    const router = useRouter()
    router.afterEach((to) => {
      const { trackPageView } = useGoogleAnalytics()
      nextTick(() => {
        trackPageView(to.fullPath)
      })
    })
  }
})
