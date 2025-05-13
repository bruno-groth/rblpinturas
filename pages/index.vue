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
            Transformamos Ambientes com Excelência em Pintura
          </h1>
          <p
            class="text-xl md:text-2xl mb-8 text-white/90 animate-fadeIn"
            style="animation-delay: 0.2s"
          >
            Há 20 anos trazendo cor e vida para residências e empresas na Grande
            Florianópolis
          </p>
          <div
            class="flex flex-wrap gap-4 animate-fadeIn"
            style="animation-delay: 0.4s"
          >
            <a
              href="https://wa.me/5549998324991?text=Olá! Gostaria de um orçamento para transformar meu ambiente com seus serviços de pintura."
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
              Ver Projetos
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
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070"
              alt="Sobre a RBL Toque Mágico Pinturas"
              class="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 class="text-4xl font-bold mb-6">Quem Somos</h2>
            <p class="text-gray-600 mb-6">
              A RBL Toque Mágico é uma empresa especializada em pintura e
              acabamentos, com mais de 20 anos de experiência no mercado. Nossa
              história é marcada pela busca constante da excelência e satisfação
              dos nossos clientes.
            </p>
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 class="text-2xl font-bold text-primary mb-2">20+</h4>
                <p class="text-gray-600">Anos de Experiência</p>
              </div>
              <div>
                <h4 class="text-2xl font-bold text-primary mb-2">1000+</h4>
                <p class="text-gray-600">Projetos Realizados</p>
              </div>
              <div>
                <h4 class="text-2xl font-bold text-primary mb-2">100%</h4>
                <p class="text-gray-600">Clientes Satisfeitos</p>
              </div>
              <div>
                <h4 class="text-2xl font-bold text-primary mb-2">5⭐</h4>
                <p class="text-gray-600">Avaliação Média</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-4">
              <a href="#services" class="btn btn-primary"> Nossos Serviços </a>
              <a
                href="#contact"
                class="btn border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Fale Conosco
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
  title:
    "RBL Toque Mágico Pinturas | Pintura Residencial e Comercial em Florianópolis",
  description:
    "Há 20 anos trazendo cor e vida para residências e empresas na Grande Florianópolis. Especialistas em pintura residencial, comercial, grafiato, textura e restauração.",
  image: "/images/social-share.jpg",
});
</script>