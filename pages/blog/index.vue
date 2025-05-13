<template>
  <div class="pt-32 pb-20">
    <div class="container">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-center">
          Blog RBL Pinturas
        </h1>
        <p class="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Descubra dicas, tendências e inspirações para transformar seus
          ambientes com a expertise de mais de 20 anos da RBL Pinturas.
        </p>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12"
        >
          <!-- Post Item -->
          <article class="group">
            <div class="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070"
                alt="Psicologia das Cores"
                class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="space-y-3">
              <div class="flex items-center gap-4">
                <span
                  class="bg-primary text-white text-sm px-3 py-1 rounded-full"
                  >Design</span
                >
                <span class="text-gray-500 text-sm">10 Mai 2025</span>
              </div>
              <h2
                class="text-2xl font-bold group-hover:text-primary transition-colors"
              >
                <nuxt-link to="/blog/como-escolher-cores-ideais-casa">
                  Psicologia das Cores: Como Escolher as Cores Ideais para Cada
                  Ambiente
                </nuxt-link>
              </h2>
              <p class="text-gray-600">
                Descubra como utilizar o poder das cores para criar ambientes
                que promovam as sensações desejadas em cada espaço da sua casa.
              </p>
              <div class="flex items-center gap-3">
                <img
                  src="~/assets/images/rosimeri.jpg"
                  alt="Rosimeri Groth"
                  class="w-10 h-10 rounded-full"
                />
                <div>
                  <p class="font-medium">Rosimeri Groth</p>
                  <p class="text-sm text-gray-500">
                    Especialista em Design de Interiores
                  </p>
                </div>
              </div>
            </div>
          </article>

          <!-- Post Item -->
          <article class="group">
            <div class="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=2070"
                alt="Tendências em Texturas"
                class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="space-y-3">
              <div class="flex items-center gap-4">
                <span
                  class="bg-primary text-white text-sm px-3 py-1 rounded-full"
                  >Tendências</span
                >
                <span class="text-gray-500 text-sm">05 Mai 2025</span>
              </div>
              <h2
                class="text-2xl font-bold group-hover:text-primary transition-colors"
              >
                <nuxt-link to="/blog/tendencias-texturas-2025">
                  Tendências em Texturas para 2025: O Que Há de Novo
                </nuxt-link>
              </h2>
              <p class="text-gray-600">
                Explore as principais tendências em texturas e acabamentos que
                estão transformando a decoração de interiores neste ano.
              </p>
              <div class="flex items-center gap-3">
                <img
                  src="~/assets/images/rosimeri.jpg"
                  alt="Rosimeri Groth"
                  class="w-10 h-10 rounded-full"
                />
                <div>
                  <p class="font-medium">Rosimeri Groth</p>
                  <p class="text-sm text-gray-500">
                    Especialista em Acabamentos
                  </p>
                </div>
              </div>
            </div>
          </article>

          <!-- Post Item -->
          <article class="group">
            <div class="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070"
                alt="Guia de Manutenção"
                class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="space-y-3">
              <div class="flex items-center gap-4">
                <span
                  class="bg-primary text-white text-sm px-3 py-1 rounded-full"
                  >Manutenção</span
                >
                <span class="text-gray-500 text-sm">01 Mai 2025</span>
              </div>
              <h2
                class="text-2xl font-bold group-hover:text-primary transition-colors"
              >
                <nuxt-link to="/blog/guia-manutencao-pintura">
                  Guia Completo de Manutenção de Pintura
                </nuxt-link>
              </h2>
              <p class="text-gray-600">
                Aprenda técnicas profissionais para manter sua pintura sempre
                impecável e prolongar sua durabilidade.
              </p>
              <div class="flex items-center gap-3">
                <img
                  src="~/assets/images/rosimeri.jpg"
                  alt="Rosimeri Groth"
                  class="w-10 h-10 rounded-full"
                />
                <div>
                  <p class="font-medium">Rosimeri Groth</p>
                  <p class="text-sm text-gray-500">
                    Especialista em Restauração
                  </p>
                </div>
              </div>
            </div>
          </article>

          <!-- Post Item -->
          <article class="group">
            <div class="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070"
                alt="Pintura Sustentável"
                class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="space-y-3">
              <div class="flex items-center gap-4">
                <span
                  class="bg-primary text-white text-sm px-3 py-1 rounded-full"
                  >Sustentabilidade</span
                >
                <span class="text-gray-500 text-sm">12 Mai 2025</span>
              </div>
              <h2
                class="text-2xl font-bold group-hover:text-primary transition-colors"
              >
                <nuxt-link to="/blog/pintura-sustentavel-guia-completo">
                  Pintura Sustentável: Como Fazer Escolhas Ecológicas na Hora de
                  Pintar
                </nuxt-link>
              </h2>
              <p class="text-gray-600">
                Descubra como tornar seu projeto de pintura mais sustentável sem
                comprometer a qualidade e beleza do resultado final.
              </p>
              <div class="flex items-center gap-3">
                <img
                  src="~/assets/images/rosimeri.jpg"
                  alt="Rosimeri Groth"
                  class="w-10 h-10 rounded-full"
                />
                <div>
                  <p class="font-medium">Rosimeri Groth</p>
                  <p class="text-sm text-gray-500">
                    Especialista em Soluções Sustentáveis
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div class="mt-16 text-center">
          <p class="text-xl text-gray-600 mb-8">
            Quer transformar seus ambientes com a expertise da RBL Pinturas?
          </p>
          <a
            href="https://wa.me/5549998324991"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center text-white bg-primary px-8 py-4 rounded-lg hover:bg-primary-dark transition-colors text-lg"
          >
            <i class="fab fa-whatsapp mr-2"></i>
            Entre em Contato
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useMeta({
  title: "Blog | RBL Pinturas",
  description:
    "Dicas, tendências e inspirações sobre pintura, texturas e decoração. Conteúdo especializado da RBL Pinturas para transformar seus ambientes.",
});
</script>