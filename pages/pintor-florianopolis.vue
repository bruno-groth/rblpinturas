<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center">
      <div class="absolute inset-0">
        <div
          class="w-full h-full bg-cover bg-center bg-no-repeat"
          style="
            background-image: linear-gradient(
                rgba(0, 0, 0, 0.4),
                rgba(0, 0, 0, 0.4)
              ),
              url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070');
            background-size: cover;
            background-position: center;
          "
        >
          <div class="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
        </div>
      </div>

      <div class="container relative z-10 text-white pt-36">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Pintura em Florianópolis - Rosimeri Groth
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-white/90">
            22 anos transformando ambientes em Florianópolis e região. Especialista em pintura residencial, comercial, grafiato e texturas. Orçamento gratuito!
          </p>
          <div class="flex flex-wrap gap-4">
            <a
              href="https://wa.me/5549998324991?text=Olá! Vi seu site e gostaria de um orçamento para pintura em Florianópolis."
              target="_blank"
              rel="noopener noreferrer"
              class="btn bg-white text-primary hover:bg-opacity-90 inline-flex items-center"
            >
              <i class="fab fa-whatsapp mr-2"></i>
              Orçamento Gratuito
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Serviços em Florianópolis -->
    <section class="py-20 bg-gray-50">
      <div class="container">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
          Serviços de Pintura em Florianópolis
        </h2>
        <p class="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Pintora especializada atendendo Florianópolis, São José, Palhoça e Biguaçu com mais de duas décadas de experiência.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-primary text-3xl mb-4">
              <i class="fas fa-home"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Pintura Residencial Florianópolis</h3>
            <p class="text-gray-600 mb-4">
              Transformo sua casa com acabamento perfeito, utilizando as melhores tintas e técnicas para residências em Florianópolis.
            </p>
            <nuxt-link to="/servicos/pintura-residencial" class="text-primary font-medium">
              Saiba mais →
            </nuxt-link>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-primary text-3xl mb-4">
              <i class="fas fa-building"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Pintura Comercial</h3>
            <p class="text-gray-600 mb-4">
              Soluções profissionais para empresas em Florianópolis, com foco em durabilidade e cumprimento de prazos.
            </p>
            <nuxt-link to="/servicos/pintura-comercial" class="text-primary font-medium">
              Saiba mais →
            </nuxt-link>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-primary text-3xl mb-4">
              <i class="fas fa-paint-roller"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Grafiato e Textura</h3>
            <p class="text-gray-600 mb-4">
              Acabamentos texturizados especiais que dão personalidade e proteção para paredes em Florianópolis.
            </p>
            <nuxt-link to="/grafiato-textura-grande-florianopolis" class="text-primary font-medium">
              Saiba mais →
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Sobre Rosimeri Groth -->
    <section class="py-20">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Pintora Especializada em Florianópolis
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              Sou Rosimeri Groth e há 22 anos dedico-me à arte da pintura na Grande Florianópolis. Como pintora especializada, entendo que cada projeto é único e merece atenção personalizada.
            </p>
            <p class="text-lg text-gray-600 mb-6">
              Atendo residências e empresas em Florianópolis, São José, Palhoça e Biguaçu, sempre com o compromisso de entregar qualidade excepcional e satisfação total dos clientes.
            </p>
            <div class="space-y-4">
              <div class="flex items-center">
                <i class="fas fa-check text-primary mr-3"></i>
                <span>22 anos de experiência em pintura</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-check text-primary mr-3"></i>
                <span>Atendimento em toda Grande Florianópolis</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-check text-primary mr-3"></i>
                <span>Orçamento gratuito e sem compromisso</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="~/assets/images/rosimeri.png"
              alt="Rosimeri Groth - Pintora especializada em Florianópolis"
              class="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Regiões Atendidas -->
    <section class="py-20 bg-gray-50">
      <div class="container">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
          Regiões Atendidas na Grande Florianópolis
        </h2>
        <p class="text-xl text-gray-600 text-center mb-16">
          Serviços de pintura profissional em toda a região metropolitana.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-map-marker-alt text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Florianópolis</h3>
            <p class="text-gray-600">Centro, Trindade, Lagoa da Conceição e todos os bairros da capital.</p>
          </div>

          <div class="text-center">
            <div class="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-map-marker-alt text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">São José</h3>
            <p class="text-gray-600">Kobrasol, Campinas, Barreiros e demais bairros de São José.</p>
          </div>

          <div class="text-center">
            <div class="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-map-marker-alt text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Palhoça</h3>
            <p class="text-gray-600">Pagani, Pedra Branca, Aririú e toda região de Palhoça.</p>
          </div>

          <div class="text-center">
            <div class="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-map-marker-alt text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Biguaçu</h3>
            <p class="text-gray-600">Atendimento completo em Biguaçu e região.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-20 bg-primary text-white">
      <div class="container text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Precisa de um Pintor em Florianópolis?
        </h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Entre em contato agora e transforme seu ambiente com a experiência de 22 anos da RBL Pinturas!
        </p>
        <a
          href="https://wa.me/5549998324991?text=Olá! Preciso de um orçamento para pintura em Florianópolis."
          target="_blank"
          rel="noopener noreferrer"
          class="btn bg-white text-primary hover:bg-opacity-90 inline-flex items-center text-lg px-8 py-4"
        >
          <i class="fab fa-whatsapp mr-2"></i>
          Solicitar Orçamento Gratuito
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
useMeta({
  title: "Pintor Florianópolis - Rosimeri Groth | 22 Anos de Experiência | RBL Pinturas",
  description: "Pintora especializada em Florianópolis com 22 anos de experiência. Serviços de pintura residencial, comercial, grafiato e texturas. Atendo toda Grande Florianópolis. Orçamento gratuito!",
  keywords: "pintor florianópolis, pintora florianópolis, pintura residencial florianópolis, pintura comercial florianópolis, grafiato florianópolis, textura paredes florianópolis, pintor são josé, pintor palhoça, pintor biguaçu, rosimeri groth, rbl pinturas"
});
</script>
