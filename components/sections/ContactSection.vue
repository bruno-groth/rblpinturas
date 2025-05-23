<template>
  <section id="contact" class="section">
    <div class="container">
      <h2 class="section-title">Fale Comigo</h2>
      <p class="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Entre em contato para tirar suas dúvidas ou solicitar um orçamento personalizado
      </p>

      <div class="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-bold mb-4">Atendimento Personalizado</h3>
            <p class="text-gray-600 mb-6">
              Com mais de 22 anos de experiência em pintura, estou pronta para transformar seu ambiente com dedicação e profissionalismo.
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-phone text-gray-100"></i>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Telefone</h4>
                <a href="tel:+5549998324991" class="text-gray-600 hover:text-primary transition-colors">
                  (49) 99832-4991
                </a>
              </div>
            </div>

            <div class="flex items-start space-x-4 flex-wrap">
              <div class="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-envelope text-gray-100"></i>
              </div>
              <div class="break-all">
                <h4 class="font-semibold mb-1">E-mail</h4>
                <a href="mailto:rbltoquemagico@gmail.com" class="text-gray-600 hover:text-primary transition-colors">
                  rbltoquemagico@gmail.com
                </a>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-map-marker-alt text-gray-100"></i>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Localização</h4>
                <p class="text-gray-600">
                  Grande Florianópolis - SC
                </p>
              </div>
            </div>
          </div>

          <div class="mb-8">
            <div class="w-full h-96 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d452627.5912918407!2d-48.655212!3d-27.588784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527395239a50a3d%3A0x3547b6c400b37329!2sRegi%C3%A3o%20Metropolitana%20de%20Florian%C3%B3polis%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1747102363019!5m2!1spt-BR!2sbr" 
                class="w-full h-full"
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          <div>
            <h4 class="font-semibold mb-3">Siga-nos</h4>
            <div class="flex space-x-4">
              <a 
                href="https://instagram.com/rblpinturas" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center hover:bg-primary text-white hover:text-gray-200 transition-colors"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a 
                href="https://wa.me/5549998324991?text=Olá! Gostaria de mais informações sobre seus serviços de pintura."
                target="_blank" 
                rel="noopener noreferrer"
                class="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center hover:bg-primary text-white hover:text-gray-200 transition-colors"
              >
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 class="font-semibold mb-3">Sobre Mim</h4>
            <div class="flex items-center space-x-4">
              <div class="w-16 h-16 rounded-full overflow-hidden">
                <img 
                  src="~/assets/images/rosimeri.jpg" 
                  alt="Foto de Rosimeri Groth"
                  class="w-full h-full object-cover"
                >
              </div>
              <div>
                <h4 class="font-semibold mb-1">Rosimeri Groth</h4>
                <p class="text-sm text-gray-600">Pintora Profissional</p>
                <p class="text-sm text-gray-600">22 anos de experiência</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <h3 class="text-2xl font-bold mb-6 md:hidden text-center">Entre em Contato</h3>
        <form 
          action="https://formspree.io/f/your-form-id" 
          method="POST"
          class="bg-white rounded-lg p-8 shadow-lg"
          @submit="handleSubmit"
        >
          <div class="space-y-6">
            <div>
              <label for="name" class="form-label">Nome</label>
              <input 
                id="name"
                v-model="form.name"
                type="text" 
                name="name"
                required
                class="form-input"
                :disabled="isSubmitting"
              >
            </div>

            <div>
              <label for="email" class="form-label">E-mail</label>
              <input 
                id="email"
                v-model="form.email"
                type="email" 
                name="email"
                required
                class="form-input"
                :disabled="isSubmitting"
              >
            </div>

            <div>
              <label for="phone" class="form-label">Telefone</label>
              <input 
                id="phone"
                v-model="form.phone"
                type="tel" 
                name="phone"
                required
                class="form-input"
                :disabled="isSubmitting"
              >
            </div>

            <div>
              <label for="service" class="form-label">Serviço</label>
              <select 
                id="service"
                v-model="form.service"
                name="service"
                required
                class="form-input"
                :disabled="isSubmitting"
              >
                <option value="">Selecione um serviço</option>
                <option v-for="service in services" :key="service" :value="service">
                  {{ service }}
                </option>
              </select>
            </div>

            <div>
              <label for="message" class="form-label">Mensagem</label>
              <textarea 
                id="message"
                v-model="form.message"
                name="message"
                required
                rows="4"
                class="form-input"
                :disabled="isSubmitting"
              ></textarea>
            </div>

            <button 
              type="submit"
              class="btn btn-primary w-full"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting">Enviando...</span>
              <span v-else>Enviar Mensagem</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  'Pintura Residencial',
  'Pintura Comercial',
  'Grafiato e Textura',
  'Restauração',
  'Efeitos Decorativos',
  'Impermeabilização',
  'Outros'
]

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async (e) => {
  e.preventDefault()
  isSubmitting.value = true

  try {
    const response = await fetch('https://formspree.io/f/your-form-id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    if (response.ok) {
      alert('Mensagem enviada com sucesso! Retornaremos em breve.')
      Object.keys(form).forEach(key => form[key] = '')
    } else {
      throw new Error('Erro ao enviar mensagem')
    }
  } catch (error) {
    alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.')
  } finally {
    isSubmitting.value = false
  }
}
</script>