<template>
  <div class="pt-32 pb-20">
    <div class="container" v-if="service">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">{{ service.title }}</h1>
      <p class="text-xl text-gray-600 mb-12">{{ service.description }}</p>

      <div class="prose prose-lg max-w-none">
        <div v-html="service.content"></div>
      </div>

      <div class="mt-12">
        <h2 class="text-2xl font-bold mb-6">Solicite um Orçamento</h2>
        <p class="text-gray-600 mb-8">
          Entre em contato conosco para um orçamento personalizado do seu
          projeto.
        </p>
        <div class="flex flex-wrap gap-4">
          <a
            :href="`https://wa.me/5549998324991?text=Olá! Gostaria de um orçamento para ${service.title.toLowerCase()}.`"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary inline-flex items-center"
          >
            <i class="fab fa-whatsapp mr-2"></i>
            WhatsApp
          </a>
          <a href="#contact" class="btn btn-outline"> Formulário de Contato </a
          >https://wa.me
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

interface Service {
  title: string;
  description: string;
  content: string;
}

const services: Record<string, Service> = {
  "pintura-residencial": {
    title: "Pintura Residencial",
    description:
      "Transformamos sua casa com acabamentos perfeitos, utilizando as melhores tintas e técnicas do mercado.",
    content: `
      <p>Nossa expertise em pintura residencial garante resultados excepcionais para sua casa. Trabalhamos com as melhores marcas de tintas e oferecemos:</p>
      <ul>
        <li>Pintura interna e externa</li>
        <li>Preparação adequada das superfícies</li>
        <li>Correção de imperfeições</li>
        <li>Proteção de móveis e acabamentos</li>
        <li>Limpeza pós-serviço</li>
      </ul>
      <p>Cada projeto é tratado com atenção aos detalhes e compromisso com a qualidade.</p>
    `,
  },
  "pintura-comercial": {
    title: "Pintura Comercial",
    description:
      "Soluções profissionais para empresas, com foco em durabilidade e prazo de entrega.",
    content: `
      <p>Oferecemos serviços especializados para ambientes comerciais, com planejamento cuidadoso para minimizar interferências:</p>
      <ul>
        <li>Pintura de fachadas comerciais</li>
        <li>Renovação de ambientes internos</li>
        <li>Pintura de alto tráfego</li>
        <li>Execução em horários flexíveis</li>
        <li>Materiais de alta durabilidade</li>
      </ul>
      <p>Nosso compromisso é entregar resultados profissionais que valorizam seu negócio.</p>
    `,
  },
  "grafiato-textura": {
    title: "Grafiato e Textura",
    description:
      "Acabamentos texturizados que proporcionam personalidade e proteção para suas paredes.",
    content: `
      <p>Nossos serviços de grafiato e textura oferecem opções versáteis para personalizar seus ambientes:</p>
      <ul>
        <li>Texturas tradicionais e modernas</li>
        <li>Grafiato em diversos padrões</li>
        <li>Texturas roladas e projetadas</li>
        <li>Efeitos especiais personalizados</li>
        <li>Proteção extra contra intempéries</li>
      </ul>
      <p>Criamos acabamentos únicos que combinam estética e funcionalidade.</p>
    `,
  },
  restauracao: {
    title: "Restauração",
    description:
      "Recuperamos a beleza original de superfícies danificadas com técnicas especializadas.",
    content: `
      <p>Nossa experiência em restauração permite recuperar e renovar diferentes superfícies:</p>
      <ul>
        <li>Correção de infiltrações</li>
        <li>Tratamento de trincas e fissuras</li>
        <li>Remoção de mofo e bolor</li>
        <li>Recuperação de texturas</li>
        <li>Renovação de pinturas antigas</li>
      </ul>
      <p>Devolvemos vida e proteção para seu imóvel com técnicas apropriadas de restauração.</p>
    `,
  },
  "efeitos-decorativos": {
    title: "Efeitos Decorativos",
    description:
      "Criamos ambientes únicos com técnicas especiais de pintura e efeitos decorativos.",
    content: `
      <p>Transformamos ambientes com efeitos decorativos exclusivos:</p>
      <ul>
        <li>Marmorização</li>
        <li>Pátina</li>
        <li>Cimento queimado</li>
        <li>Efeito metalizado</li>
        <li>Texturas artísticas</li>
      </ul>
      <p>Cada técnica é aplicada com precisão para criar ambientes verdadeiramente únicos.</p>
    `,
  },
};

const service = computed(() => {
  const serviceId = route.params.service as string;
  return services[serviceId];
});

if (process.client) {
  useHead(() => ({
    title: `${service.value?.title || "Serviço"} | RBL Toque Mágico Pinturas`,
    meta: [
      {
        name: "description",
        content:
          service.value?.description ||
          "Conheça nossos serviços especializados de pintura.",
      },
    ],
  }));
}
</script>

<style>
.prose {
  max-width: none;
}
.prose ul {
  list-style-type: disc;
  margin-left: 1.25em;
}
.prose p {
  margin: 1.25em 0;
}
</style>