<template>
  <Head>
    <script type="application/ld+json">
      {{
        JSON.stringify(serviceSchema)
      }}
    </script>
  </Head>
</template>

<script setup lang="ts">
interface ServiceSchemaProps {
  serviceName: string
  description: string
  price?: string
  duration?: string
  serviceType: string
  areaServed?: string[]
}

const props = withDefaults(defineProps<ServiceSchemaProps>(), {
  price: 'Orçamento sob consulta',
  duration: 'Varia conforme projeto',
  areaServed: () => [
    'Florianópolis',
    'São José', 
    'Palhoça',
    'Biguaçu',
    'Santo Amaro da Imperatriz'
  ]
})

const serviceSchema = computed(() => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": props.serviceName,
  "description": props.description,
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://rblpinturas.com.br/#organization",
    "name": "RBL Toque Mágico Pinturas",
    "telephone": "+55-49-99832-4991",
    "url": "https://rblpinturas.com.br"
  },
  "serviceType": props.serviceType,
  "category": "Pintura",
  "offers": {
    "@type": "Offer",
    "price": props.price,
    "priceCurrency": "BRL",
    "availability": "https://schema.org/InStock",
    "validFrom": new Date().toISOString(),
    "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  },
  "areaServed": props.areaServed.map(area => ({
    "@type": "City",
    "name": area,
    "containedInPlace": {
      "@type": "State",
      "name": "Santa Catarina",
      "containedInPlace": {
        "@type": "Country", 
        "name": "Brasil"
      }
    }
  })),
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": `Catálogo de ${props.serviceName}`,
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": props.serviceName,
          "description": props.description
        }
      }
    ]
  },
  "brand": {
    "@type": "Brand",
    "name": "RBL Toque Mágico Pinturas"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Cliente Satisfeito"
    },
    "reviewBody": `Excelente serviço de ${props.serviceName.toLowerCase()}. Profissional, pontual e com ótimo acabamento.`
  }
}))
</script>
