<template>
  <section id="contact" class="section">
    <div class="container">
      <h2 class="section-title">Fale Conosco</h2>
      <p class="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Entre em contato conosco para tirar dúvidas ou solicitar um orçamento
      </p>

      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-bold mb-4">Informações de Contato</h3>
            <p class="text-gray-600 mb-6">
              Estamos disponíveis para atender você e tirar todas as suas dúvidas sobre nossos serviços.
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

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-envelope text-gray-100"></i>
              </div>
              <div>
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
                href="https://wa.me/5549998324991" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center hover:bg-primary text-white hover:text-gray-200 transition-colors"
              >
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
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