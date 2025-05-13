import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('smooth-scroll', {
    mounted(el, binding) {
      el.addEventListener('click', (e: Event) => {
        e.preventDefault()
        const href = (el as HTMLAnchorElement).getAttribute('href')
        
        if (href?.startsWith('#')) {
          const targetId = href.substring(1)
          const targetElement = document.getElementById(targetId)
          
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
            
            // Update URL without page reload
            history.pushState({}, '', href)
          }
        }
      })
    }
  })
})