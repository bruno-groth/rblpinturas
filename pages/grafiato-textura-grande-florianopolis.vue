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
              url('https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2070');
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
            Grafiato e Textura na Grande Florianópolis
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-white/90">
            Especialista em acabamentos texturizados. Grafiato, texturas decorativas e efeitos especiais para paredes em Florianópolis, São José, Palhoça e Biguaçu.
          </p>
          <div class="flex flex-wrap gap-4">
            <a
              href="https://wa.me/5549998324991?text=Olá! Gostaria de um orçamento para grafiato e textura na Grande Florianópolis."
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

    <!-- Tipos de Texturas -->
    <section class="py-20">
      <div class="container">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
          Tipos de Grafiato e Texturas
        </h2>
        <p class="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Conheça os diferentes acabamentos texturizados que oferecemos para transformar suas paredes na Grande Florianópolis.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-primary text-3xl mb-4">
              <i class="fas fa-paint-roller"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Grafiato Tradicional</h3>
            <p class="text-gray-600 mb-4">
              Acabamento clássico com texturas variadas, ideal para fachadas e áreas externas. Proteção e beleza para sua parede.
            </p>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>• Resistente às intempéries</li>
              <li>• Diversas opções de cores</li>
              <li>• Acabamento durável</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-primary text-3xl mb-4">
              <i class="fas fa-brush"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Textura Rolada</h3>
            <p class="text-gray-600 mb-4">
              Técnica versátil que permite criar diferentes padrões e efeitos visuais em paredes internas e externas.
            </p>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>• Aplicação rápida</li>
              <li>• Padrões personalizados</li>
              <li>• Ótimo custo-benefício</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-primary text-3xl mb-4">
              <i class="fas fa-spray-can"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Textura Projetada</h3>
            <p class="text-gray-600 mb-4">
              Acabamento moderno aplicado com equipamento especializado, proporcionando uniformidade e alta qualidade.
            </p>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>• Acabamento uniforme</li>
              <li>• Aplicação profissional</li>
              <li>• Resultado premium</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-primary text-3xl mb-4">
              <i class="fas fa-palette"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Efeitos Decorativos</h3>
            <p class="text-gray-600 mb-4">
              Técnicas especiais como marmorização, pátina e cimento queimado para ambientes únicos e sofisticados.
            </p>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>• Marmorização</li>
              <li>• Pátina artística</li>
              <li>• Cimento queimado</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-primary text-3xl mb-4">
              <i class="fas fa-mountain"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Texturas Rústicas</h3>
            <p class="text-gray-600 mb-4">
              Acabamentos que remetem à natureza, ideais para ambientes aconchegantes e estilos mais tradicionais.
            </p>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>• Efeito terra</li>
              <li>• Textura casca de árvore</li>
              <li>• Acabamento natural</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-primary text-3xl mb-4">
              <i class="fas fa-gem"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Texturas Modernas</h3>
            <p class="text-gray-600 mb-4">
              Acabamentos contemporâneos que seguem as últimas tendências em decoração e arquitetura.
            </p>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>• Efeito metalizado</li>
              <li>• Texturas geométricas</li>
              <li>• Acabamentos brilhantes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Processo de Aplicação -->
    <section class="py-20 bg-gray-50">
      <div class="container">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
          Processo Profissional de Aplicação
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              1
            </div>
            <h3 class="text-xl font-bold mb-4">Análise da Superfície</h3>
            <p class="text-gray-600">
              Avaliação detalhada da parede e preparação adequada da superfície para receber a textura.
            </p>
          </div>

          <div class="text-center">
            <div class="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              2
            </div>
            <h3 class="text-xl font-bold mb-4">Preparação</h3>
            <p class="text-gray-600">
              Limpeza, correção de imperfeições e aplicação de primer para garantir aderência perfeita.
            </p>
          </div>

          <div class="text-center">
            <div class="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              3
            </div>
            <h3 class="text-xl font-bold mb-4">Aplicação</h3>
            <p class="text-gray-600">
              Execução da textura com técnica especializada e ferramentas profissionais adequadas.
            </p>
          </div>

          <div class="text-center">
            <div class="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              4
            </div>
            <h3 class="text-xl font-bold mb-4">Acabamento</h3>
            <p class="text-gray-600">
              Finalização com pintura ou selador apropriado para proteção e durabilidade do acabamento.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vantagens -->
    <section class="py-20">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Vantagens do Grafiato e Texturas
            </h2>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <i class="fas fa-shield-alt text-sm"></i>
                </div>
                <div>
                  <h3 class="text-lg font-bold mb-2">Proteção Extra</h3>
                  <p class="text-gray-600">
                    O grafiato oferece uma camada adicional de proteção contra umidade, sol e chuva.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <i class="fas fa-eye text-sm"></i>
                </div>
                <div>
                  <h3 class="text-lg font-bold mb-2">Disfarça Imperfeições</h3>
                  <p class="text-gray-600">
                    As texturas ajudam a camuflar pequenas imperfeições nas paredes.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <i class="fas fa-clock text-sm"></i>
                </div>
                <div>
                  <h3 class="text-lg font-bold mb-2">Durabilidade</h3>
                  <p class="text-gray-600">
                    Acabamentos texturizados têm maior vida útil comparado à pintura lisa convencional.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <i class="fas fa-star text-sm"></i>
                </div>
                <div>
                  <h3 class="text-lg font-bold mb-2">Valorização</h3>
                  <p class="text-gray-600">
                    Texturas bem aplicadas valorizam o imóvel e modernizam o ambiente.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058"
              alt="Parede com grafiato aplicado"
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
          Atendimento na Grande Florianópolis
        </h2>
        <p class="text-xl text-gray-600 text-center mb-16">
          Serviços de grafiato e textura em toda a região metropolitana.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <h3 class="text-xl font-bold mb-4 text-primary">Florianópolis</h3>
            <ul class="text-gray-600 space-y-2">
              <li>Centro</li>
              <li>Trindade</li>
              <li>Lagoa da Conceição</li>
              <li>Ingleses</li>
              <li>Canasvieiras</li>
            </ul>
          </div>

          <div class="text-center">
            <h3 class="text-xl font-bold mb-4 text-primary">São José</h3>
            <ul class="text-gray-600 space-y-2">
              <li>Kobrasol</li>
              <li>Campinas</li>
              <li>Barreiros</li>
              <li>Forquilhinha</li>
              <li>Serraria</li>
            </ul>
          </div>

          <div class="text-center">
            <h3 class="text-xl font-bold mb-4 text-primary">Palhoça</h3>
            <ul class="text-gray-600 space-y-2">
              <li>Pagani</li>
              <li>Pedra Branca</li>
              <li>Aririú</li>
              <li>Ponte do Imaruim</li>
              <li>Praia de Fora</li>
            </ul>
          </div>

          <div class="text-center">
            <h3 class="text-xl font-bold mb-4 text-primary">Biguaçu</h3>
            <ul class="text-gray-600 space-y-2">
              <li>Centro</li>
              <li>Lojas</li>
              <li>Três Riachos</li>
              <li>Tijuquinhas</li>
              <li>Antônio Carlos</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-20 bg-primary text-white">
      <div class="container text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Transforme suas Paredes com Grafiato e Texturas
        </h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto">
          Especialista em acabamentos texturizados na Grande Florianópolis. Entre em contato e descubra como podemos valorizar seu imóvel!
        </p>
        <a
          href="https://wa.me/5549998324991?text=Olá! Gostaria de um orçamento para grafiato e textura."
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
  title: "Grafiato e Textura Grande Florianópolis | Especialista em Acabamentos Texturizados | RBL Pinturas",
  description: "Especialista em grafiato e texturas na Grande Florianópolis. Acabamentos texturizados para paredes em Florianópolis, São José, Palhoça e Biguaçu. Orçamento gratuito!",
  keywords: "grafiato florianópolis, textura paredes grande florianópolis, grafiato são josé, textura palhoça, acabamento texturizado, efeitos decorativos, textura projetada, grafiato biguaçu, pintura texturizada"
});
</script>
