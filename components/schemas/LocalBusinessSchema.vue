<template>
  <Head>
    <script type="application/ld+json">
      {{
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://rblpinturas.com.br/#organization",
          "name": "RBL Toque Mágico Pinturas",
          "alternateName": "RBL Pinturas",
          "description": "Serviços especializados de pintura residencial e comercial na Grande Florianópolis com mais de 22 anos de experiência.",
          "url": "https://rblpinturas.com.br",
          "logo": "https://rblpinturas.com.br/images/logo.png",
          "image": "https://rblpinturas.com.br/images/banner.webp",
          "telephone": "+55-49-99832-4991",
          "email": "contato@rblpinturas.com.br",
          "priceRange": "$$",
          "currenciesAccepted": "BRL",
          "paymentAccepted": "Cash, Credit Card, Bank Transfer, PIX",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Florianópolis",
            "addressRegion": "SC",
            "addressCountry": "BR",
            "areaServed": [
              "Florianópolis",
              "São José",
              "Palhoça",
              "Biguaçu",
              "Santo Amaro da Imperatriz",
              "Kobrasol",
              "Centro de Florianópolis",
              "Trindade",
              "Ingleses",
              "Canasvieiras",
              "Jurerê"
            ]
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -27.5954,
            "longitude": -48.5480
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "08:00",
              "closes": "12:00"
            }
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-49-99832-4991",
            "contactType": "customer service",
            "areaServed": "BR",
            "availableLanguage": "Portuguese"
          },
          "sameAs": [
            "https://wa.me/5549998324991",
            "https://www.instagram.com/rblpinturas"
          ],
          "founder": {
            "@type": "Person",
            "name": "Rosimeri Barbosa Lima",
            "jobTitle": "Pintora Profissional",
            "worksFor": {
              "@id": "https://rblpinturas.com.br/#organization"
            }
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços de Pintura",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Pintura Residencial",
                  "description": "Pintura completa para residências com tinta de qualidade e acabamento profissional"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Pintura Comercial",
                  "description": "Pintura para estabelecimentos comerciais com trabalho noturno disponível"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Grafiato e Texturas",
                  "description": "Aplicação de grafiato e texturas decorativas"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Pintura de Prédios",
                  "description": "Pintura de fachadas e condomínios"
                }
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "47",
            "bestRating": "5",
            "worstRating": "1"
          }
        })
      }}
    </script>
  </Head>
</template>

<script setup>
// Schema para LocalBusiness - melhora aparição no Google My Business e pesquisas locais
</script>
