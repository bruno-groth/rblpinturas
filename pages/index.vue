<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center">
      <!-- Hero Background -->
      <div class="absolute inset-0">
        <div
          class="w-full h-full bg-cover bg-center bg-no-repeat"
          style="
            background-image: linear-gradient(
                rgba(0, 0, 0, 0.4),
                rgba(0, 0, 0, 0.4)
              ),
              url('https://casa.abril.com.br/wp-content/uploads/2016/11/pintura1.jpeg?crop=1&resize=1212,909');
            background-size: cover;
            background-position: center;
            color: white;
            padding: 50px;
          "
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"
          ></div>
        </div>
      </div>

      <!-- Hero Content -->
      <div class="container relative z-10 text-white">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
            Realizando Sonhos, colorindo a sua vida
          </h1>
          <p
            class="text-xl md:text-2xl mb-8 text-white/90 animate-fadeIn"
            style="animation-delay: 0.2s"
          >
            Olá! Sou Rosimeri Groth da RBL Pinturas, e há mais de 22 anos transformo ambientes com pintura especializada na região de Santa Catarina.
          </p>
          <div
            class="flex flex-wrap gap-4 animate-fadeIn"
            style="animation-delay: 0.4s"
          >
            <a
              href="https://wa.me/5549998324991?text=Olá! Gostaria de um orçamento para transformar meu ambiente."
              target="_blank"
              rel="noopener noreferrer"
              class="btn bg-white text-primary hover:bg-opacity-90 inline-flex items-center"
            >
              <i class="fab fa-whatsapp mr-2"></i>
              Solicitar Orçamento
            </a>
            <a
              href="#portfolio"
              class="btn border-2 border-white text-white hover:bg-white hover:text-primary"
            >
              Ver Meus Trabalhos
            </a>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <a href="#about" class="text-white opacity-75 hover:opacity-100">
          <i class="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
      <div class="container">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="~/assets/images/rosimeri.png"
              alt="Rosimeri Groth - Pintora Profissional"
              class="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 class="text-4xl font-bold mb-6">22 Anos Transformando Sonhos em Realidade</h2>
            <p class="text-gray-600 mb-6">
              Olá! Sou Rosimeri Groth, uma profissional apaixonada pela arte da
              pintura. Minha jornada começou no interior de Santa Catarina, onde
              descobri minha vocação para transformar ambientes através das cores
              e texturas.
            </p>
            <p class="text-gray-600 mb-6">
              Ao longo de mais de duas décadas, aperfeiçoei minhas técnicas e
              desenvolvi um olhar único para cada projeto. Agora, trago toda essa
              experiência para a região da Grande Florianópolis, onde continuo
              dedicada a oferecer um serviço personalizado e de alta qualidade.
            </p>
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 class="text-2xl font-bold text-primary mb-2">22+</h4>
                <p class="text-gray-600">Anos de Experiência</p>
              </div>
              <div>
                <h4 class="text-2xl font-bold text-primary mb-2">100%</h4>
                <p class="text-gray-600">Dedicação</p>
              </div>
              <div>
                <h4 class="text-2xl font-bold text-primary mb-2">5⭐</h4>
                <p class="text-gray-600">Qualidade</p>
              </div>
              <div>
                <h4 class="text-2xl font-bold text-primary mb-2">💪</h4>
                <p class="text-gray-600">Comprometimento</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-4">
              <a href="#services" class="btn btn-primary"> Meus Serviços </a>
              <a
                href="#contact"
                class="btn border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Fale Comigo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <ServiceSection />

    <!-- Portfolio Section -->
    <PortfolioSection />

    <!-- Blog Section -->
    <BlogSection />

    <!-- Contact Section -->
    <ContactSection />
  </div>
</template>

<script setup>
import ServiceSection from "~/components/sections/ServiceSection.vue";
import PortfolioSection from "~/components/sections/PortfolioSection.vue";
import BlogSection from "~/components/sections/BlogSection.vue";
import ContactSection from "~/components/sections/ContactSection.vue";

useMeta({
  title: "RBL Pinturas - Rosimeri Groth | Pintora Florianópolis - 22 Anos de Experiência",
  description: "Pintora especializada com 22 anos de experiência em pintura residencial, comercial, grafiato e texturas na Grande Florianópolis. Atendo Florianópolis, São José, Palhoça e Biguaçu. Orçamento gratuito!",
  keywords: "pintor florianópolis, pintura residencial, grafiato, textura, pintura comercial, pintora grande florianópolis, rosimeri groth, rbl pinturas, são josé, palhoça, biguaçu",
});

// Schema.org structured data
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "RBL Toque Mágico Pinturas",
        "alternateName": "RBL Pinturas",
        "description": "Serviços especializados de pintura residencial e comercial na Grande Florianópolis com 22 anos de experiência",
        "image": "https://rblpinturas.com.br/images/logo.png",
        "url": "https://rblpinturas.com.br",
        "telephone": "+55-49-99832-4991",
        "email": "rbltoquemagico@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "SC",
          "addressCountry": "BR",
          "addressLocality": "Florianópolis"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Florianópolis",
            "addressRegion": "SC",
            "addressCountry": "BR"
          },
          {
            "@type": "City", 
            "name": "São José",
            "addressRegion": "SC",
            "addressCountry": "BR"
          },
          {
            "@type": "City",
            "name": "Palhoça", 
            "addressRegion": "SC",
            "addressCountry": "BR"
          },
          {
            "@type": "City",
            "name": "Biguaçu",
            "addressRegion": "SC", 
            "addressCountry": "BR"
          }
        ],
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": -27.5954,
            "longitude": -48.5480
          },
          "geoRadius": "50000"
        },
        "services": [
          "Pintura Residencial",
          "Pintura Comercial", 
          "Grafiato e Textura",
          "Restauração de Pinturas",
          "Efeitos Decorativos",
          "Impermeabilização"
        ],
        "priceRange": "$$",
        "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Bank Transfer"],
        "currenciesAccepted": "BRL",
        "foundingDate": "2002",
        "founder": {
          "@type": "Person",
          "name": "Rosimeri Groth",
          "jobTitle": "Pintora Especializada",
          "worksFor": {
            "@type": "Organization",
            "name": "RBL Toque Mágico Pinturas"
          }
        },
        "sameAs": [
          "https://instagram.com/rblpinturas"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "50",
          "bestRating": "5",
          "worstRating": "1"
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
                "description": "Pintura interna e externa para residências"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Pintura Comercial",
                "description": "Pintura para estabelecimentos comerciais"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Grafiato e Texturas",
                "description": "Acabamentos texturizados especiais"
              }
            }
          ]
        }
      })
    }
  ]
});
</script>