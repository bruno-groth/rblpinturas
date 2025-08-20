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
              url('https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074');
            background-size: cover;
            background-position: center;
          "
        >
          <div class="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
        </div>
      </div>

      <div class="container relative z-10 text-white">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Pintura Residencial em São José
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-white/90">
            Transforme sua casa com pintura profissional em São José. Rosimeri Groth, 22 anos de experiência em pintura residencial na Grande Florianópolis.
          </p>
          <div class="flex flex-wrap gap-4">
            <a
              href="https://wa.me/5549998324991?text=Olá! Gostaria de um orçamento para pintura residencial em São José."
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

    <!-- Serviços Residenciais -->
    <section class="py-20">
      <div class="container">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
          Serviços de Pintura Residencial em São José
        </h2>
        <p class="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Especializada em transformar residências em São José com acabamentos perfeitos e materiais de primeira qualidade.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-primary text-3xl mb-4">
              <i class="fas fa-home"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Pintura Interna</h3>
            <p class="text-gray-600 mb-4">
              Renove todos os ambientes internos da sua casa em São José com cores modernas e acabamento impecável.
            </p>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>• Salas e quartos</li>
              <li>• Cozinhas e banheiros</li>
              <li>• Corredores e escadas</li>
              <li>• Tintas especiais para cada ambiente</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-primary text-3xl mb-4">
              <i class="fas fa-building"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Pintura Externa</h3>
            <p class="text-gray-600 mb-4">
              Proteja e embeleze a fachada da sua residência em São José com tintas resistentes às intempéries.
            </p>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>• Fachadas e muros</li>
              <li>• Portões e grades</li>
              <li>• Áreas de lazer externas</li>
              <li>• Proteção contra umidade</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-primary text-3xl mb-4">
              <i class="fas fa-paint-roller"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Texturas e Efeitos</h3>
            <p class="text-gray-600 mb-4">
              Dê personalidade à sua casa com texturas especiais e efeitos decorativos únicos.
            </p>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>• Grafiato residencial</li>
              <li>• Texturas decorativas</li>
              <li>• Efeitos especiais</li>
              <li>• Acabamentos personalizados</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-primary text-3xl mb-4">
              <i class="fas fa-tools"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Preparação de Superfície</h3>
            <p class="text-gray-600 mb-4">
              Preparação completa das paredes para garantir durabilidade e qualidade do acabamento.
            </p>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>• Lixamento e correções</li>
              <li>• Tratamento de umidade</li>
              <li>• Aplicação de primer</li>
              <li>• Proteção de móveis</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-primary text-3xl mb-4">
              <i class="fas fa-palette"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Consultoria em Cores</h3>
            <p class="text-gray-600 mb-4">
              Orientação profissional para escolher as cores ideais para cada ambiente da sua casa.
            </p>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>• Harmonização de cores</li>
              <li>• Tendências atuais</li>
              <li>• Teste de cores</li>
              <li>• Combinações personalizadas</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-primary text-3xl mb-4">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Garantia e Qualidade</h3>
            <p class="text-gray-600 mb-4">
              Trabalho garantido com materiais de primeira linha e técnicas profissionais comprovadas.
            </p>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>• Garantia do serviço</li>
              <li>• Materiais premium</li>
              <li>• Técnicas profissionais</li>
              <li>• Satisfação garantida</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Bairros Atendidos em São José -->
    <section class="py-20 bg-gray-50">
      <div class="container">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
          Bairros Atendidos em São José
        </h2>
        <p class="text-xl text-gray-600 text-center mb-16">
          Pintura residencial profissional em todos os bairros de São José e região.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white p-6 rounded-lg shadow text-center">
            <h3 class="text-lg font-bold mb-4 text-primary">Kobrasol</h3>
            <p class="text-gray-600 text-sm">
              Atendimento completo no bairro Kobrasol com foco em residências modernas e apartamentos.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow text-center">
            <h3 class="text-lg font-bold mb-4 text-primary">Campinas</h3>
            <p class="text-gray-600 text-sm">
              Serviços especializados para casas e sobrados no bairro Campinas, São José.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow text-center">
            <h3 class="text-lg font-bold mb-4 text-primary">Barreiros</h3>
            <p class="text-gray-600 text-sm">
              Pintura residencial em Barreiros com atenção aos detalhes e qualidade garantida.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow text-center">
            <h3 class="text-lg font-bold mb-4 text-primary">Forquilhinha</h3>
            <p class="text-gray-600 text-sm">
              Transformação de residências em Forquilhinha com técnicas profissionais de pintura.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow text-center">
            <h3 class="text-lg font-bold mb-4 text-primary">Serraria</h3>
            <p class="text-gray-600 text-sm">
              Atendimento especializado em pintura residencial no bairro Serraria.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow text-center">
            <h3 class="text-lg font-bold mb-4 text-primary">Centro</h3>
            <p class="text-gray-600 text-sm">
              Pintura para residências no centro de São José com horários flexíveis.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow text-center">
            <h3 class="text-lg font-bold mb-4 text-primary">Praia Comprida</h3>
            <p class="text-gray-600 text-sm">
              Serviços de pintura residencial especializados para casas próximas ao mar.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow text-center">
            <h3 class="text-lg font-bold mb-4 text-primary">Bela Vista</h3>
            <p class="text-gray-600 text-sm">
              Pintura residencial profissional no bairro Bela Vista com garantia de qualidade.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Processo de Trabalho -->
    <section class="py-20">
      <div class="container">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
          Como Funciona o Serviço
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              1
            </div>
            <h3 class="text-xl font-bold mb-4">Visita Gratuita</h3>
            <p class="text-gray-600">
              Agendo uma visita na sua residência em São José para avaliar o projeto e fazer o orçamento.
            </p>
          </div>

          <div class="text-center">
            <div class="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              2
            </div>
            <h3 class="text-xl font-bold mb-4">Planejamento</h3>
            <p class="text-gray-600">
              Definimos cores, materiais, cronograma e todos os detalhes do seu projeto de pintura residencial.
            </p>
          </div>

          <div class="text-center">
            <div class="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              3
            </div>
            <h3 class="text-xl font-bold mb-4">Execução</h3>
            <p class="text-gray-600">
              Realizo todo o trabalho com proteção dos móveis, preparação das superfícies e pintura profissional.
            </p>
          </div>

          <div class="text-center">
            <div class="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              4
            </div>
            <h3 class="text-xl font-bold mb-4">Entrega</h3>
            <p class="text-gray-600">
              Limpeza completa e entrega da sua casa renovada com acabamento impecável e garantia.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Por que Escolher -->
    <section class="py-20 bg-gray-50">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Por que Escolher RBL Pinturas em São José?
            </h2>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <i class="fas fa-award text-sm"></i>
                </div>
                <div>
                  <h3 class="text-lg font-bold mb-2">22 Anos de Experiência</h3>
                  <p class="text-gray-600">
                    Mais de duas décadas transformando residências na Grande Florianópolis com qualidade comprovada.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <i class="fas fa-map-marker-alt text-sm"></i>
                </div>
                <div>
                  <h3 class="text-lg font-bold mb-2">Local e Conhecida</h3>
                  <p class="text-gray-600">
                    Pintora da região que conhece as particularidades do clima e construções de São José.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <i class="fas fa-star text-sm"></i>
                </div>
                <div>
                  <h3 class="text-lg font-bold mb-2">Materiais Premium</h3>
                  <p class="text-gray-600">
                    Uso apenas tintas e materiais de primeira linha para garantir durabilidade e beleza.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <i class="fas fa-handshake text-sm"></i>
                </div>
                <div>
                  <h3 class="text-lg font-bold mb-2">Atendimento Personalizado</h3>
                  <p class="text-gray-600">
                    Cada projeto é único e recebe minha atenção pessoal do início ao fim.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="~/assets/images/rosimeri.png"
              alt="Rosimeri Groth - Pintora especializada em São José"
              class="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-20 bg-primary text-white">
      <div class="container text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Transforme sua Casa em São José
        </h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto">
          Pronta para renovar sua residência em São José com pintura profissional? Entre em contato e receba seu orçamento gratuito!
        </p>
        <a
          href="https://wa.me/5549998324991?text=Olá! Gostaria de um orçamento para pintura residencial em São José."
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
  title: "Pintura Residencial São José | Pintora Especializada | RBL Pinturas Florianópolis",
  description: "Pintura residencial profissional em São José. Rosimeri Groth, 22 anos de experiência transformando casas em Kobrasol, Campinas, Barreiros e toda São José. Orçamento gratuito!",
  keywords: "pintura residencial são josé, pintora são josé, pintura casa são josé, pintor kobrasol, pintura campinas são josé, pintura barreiros, pintor forquilhinha, pintura residencial grande florianópolis"
});
</script>
