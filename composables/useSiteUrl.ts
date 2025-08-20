export const useSiteUrl = () => {
  const config = useRuntimeConfig()
  
  const siteUrl = computed(() => config.public.siteUrl)
  
  const getFullUrl = (path: string = '') => {
    const baseUrl = siteUrl.value
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    return `${baseUrl}${cleanPath}`
  }
  
  const getCanonicalUrl = (route?: string) => {
    const currentRoute = useRoute()
    const path = route || currentRoute.path
    return getFullUrl(path)
  }
  
  return {
    siteUrl: readonly(siteUrl),
    getFullUrl,
    getCanonicalUrl
  }
}
