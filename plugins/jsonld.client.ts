export default defineNuxtPlugin(() => {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "RBL Toque Mágico Pinturas",
          "description": "Serviços especializados de pintura residencial e comercial na região da Grande Florianópolis com mais de 22 anos de experiência.",
          "url": "https://rblpinturas.com.br",
          "logo": "https://rblpinturas.com.br/icons/icon-512x512.png",
          "image": "https://rblpinturas.com.br/icons/og-image.jpg",
          "telephone": "+55 48 99999-9999",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Florianópolis",
            "addressRegion": "SC",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -27.5954,
            "longitude": -48.5480
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Florianópolis"
            },
            {
              "@type": "City", 
              "name": "São José"
            },
            {
              "@type": "City",
              "name": "Palhoça"
            },
            {
              "@type": "City",
              "name": "Biguaçu"
            }
          ],
          "serviceType": [
            "Pintura Residencial",
            "Pintura Comercial", 
            "Grafiato e Texturas",
            "Restauração de Pintura",
            "Efeitos Decorativos",
            "Impermeabilização"
          ],
          "founder": {
            "@type": "Person",
            "name": "Rosimeri Groth"
          },
          "foundingDate": "2002",
          "sameAs": [
            "https://www.facebook.com/rblpinturas",
            "https://www.instagram.com/rblpinturas"
          ]
        })
      }
    ]
  })
})
