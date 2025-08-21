<template>
  <Head>
    <script type="application/ld+json">
      {{
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Quanto custa para pintar uma casa?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "O preço varia entre R$ 25 a R$ 45 por metro quadrado, dependendo do tipo de tinta e acabamento. Oferecemos orçamento gratuito e sem compromisso."
              }
            },
            {
              "@type": "Question", 
              "name": "Quanto tempo demora para pintar uma casa?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Uma casa de 100m² leva entre 3 a 5 dias úteis para ficar pronta. O prazo depende do estado das paredes e do tipo de acabamento escolhido."
              }
            },
            {
              "@type": "Question",
              "name": "Vocês atendem em toda Grande Florianópolis?", 
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim! Atendemos Florianópolis, São José, Palhoça, Biguaçu, Santo Amaro da Imperatriz e toda região metropolitana. Temos 22 anos de experiência na região."
              }
            },
            {
              "@type": "Question",
              "name": "A tinta está incluída no orçamento?",
              "acceptedAnswer": {
                "@type": "Answer", 
                "text": "Sim, trabalhamos com tinta inclusa no preço. Usamos apenas tintas de primeira qualidade das melhores marcas do mercado."
              }
            },
            {
              "@type": "Question",
              "name": "Vocês fazem trabalho noturno?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim! Oferecemos trabalho noturno especialmente para estabelecimentos comerciais que não podem parar durante o dia. Consulte disponibilidade e valores especiais."
              }
            },
            {
              "@type": "Question",
              "name": "Qual a garantia do serviço?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oferecemos garantia de 1 ano para pintura residencial e 2 anos para pintura comercial. A garantia cobre descascamento, bolhas e defeitos de aplicação."
              }
            },
            {
              "@type": "Question",
              "name": "Como solicitar um orçamento?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "É muito fácil! Ligue para (49) 99832-4991 ou mande WhatsApp. Fazemos visita gratuita para avaliar o serviço e entregar orçamento detalhado sem compromisso."
              }
            },
            {
              "@type": "Question",
              "name": "Vocês pintam apartamentos?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Claro! Pintamos casas, apartamentos, estabelecimentos comerciais, prédios e condomínios. Temos experiência com todos os tipos de imóveis."
              }
            }
          ]
        })
      }}
    </script>
  </Head>
</template>

<script setup>
// Schema FAQ - ajuda a aparecer na seção "As pessoas também perguntam" do Google
</script>
