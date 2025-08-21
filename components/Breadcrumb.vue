<template>
  <nav class="flex py-4" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <NuxtLink 
          to="/" 
          class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary"
        >
          <i class="fas fa-home mr-2"></i>
          Início
        </NuxtLink>
      </li>
      
      <li v-for="(item, index) in breadcrumbs" :key="index">
        <div class="flex items-center">
          <i class="fas fa-chevron-right text-gray-400 mx-2"></i>
          <NuxtLink 
            v-if="item.href && index < breadcrumbs.length - 1"
            :to="item.href" 
            class="ml-1 text-sm font-medium text-gray-700 hover:text-primary md:ml-2"
          >
            {{ item.name }}
          </NuxtLink>
          <span 
            v-else
            class="ml-1 text-sm font-medium text-gray-500 md:ml-2"
          >
            {{ item.name }}
          </span>
        </div>
      </li>
    </ol>
    
    <!-- Schema Markup para Breadcrumb -->
    <Head>
      <script type="application/ld+json">
        {{
          JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Início",
                "item": "https://rblpinturas.com.br/"
              },
              ...breadcrumbs.map((item, index) => ({
                "@type": "ListItem", 
                "position": index + 2,
                "name": item.name,
                "item": item.href ? `https://rblpinturas.com.br${item.href}` : undefined
              }))
            ]
          })
        }}
      </script>
    </Head>
  </nav>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
  name: string
  href?: string
}

interface Props {
  breadcrumbs: BreadcrumbItem[]
}

defineProps<Props>()
</script>
