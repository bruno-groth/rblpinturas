// Google Analytics 4 Configuration
export const useGoogleAnalytics = () => {
  const config = useRuntimeConfig()
  
  const initGA = () => {
    // Verificar se GA já foi inicializado
    if (typeof window !== 'undefined' && !window.gtag) {
      // Adicionar script do Google Analytics
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${config.public.googleAnalyticsId}`
      document.head.appendChild(script)
      
      // Inicializar gtag
      window.dataLayer = window.dataLayer || []
      window.gtag = function() {
        window.dataLayer.push(arguments)
      }
      
      window.gtag('js', new Date())
      window.gtag('config', config.public.googleAnalyticsId, {
        page_title: document.title,
        page_location: window.location.href
      })
    }
  }
  
  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters)
    }
  }
  
  const trackPageView = (pagePath: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', config.public.googleAnalyticsId, {
        page_path: pagePath
      })
    }
  }
  
  // Eventos específicos para o negócio
  const trackWhatsAppClick = (source: string) => {
    trackEvent('whatsapp_click', {
      event_category: 'contact',
      event_label: source,
      value: 1
    })
  }
  
  const trackPhoneClick = (source: string) => {
    trackEvent('phone_click', {
      event_category: 'contact', 
      event_label: source,
      value: 1
    })
  }
  
  const trackQuoteRequest = (serviceType: string) => {
    trackEvent('quote_request', {
      event_category: 'lead',
      event_label: serviceType,
      value: 10
    })
  }
  
  return {
    initGA,
    trackEvent,
    trackPageView,
    trackWhatsAppClick,
    trackPhoneClick,
    trackQuoteRequest
  }
}

// Declarações TypeScript para window.gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}
