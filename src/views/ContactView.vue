<template>
  <section class="max-w-6xl mx-auto p-8 lg:p-12"> 
    <h2 class="text-4xl lg:text-5xl font-extrabold text-center text-white mb-4">
      Hablemos de tu proyecto
    </h2>
    <p class="text-xl text-center text-blue-100 mb-12">
      Si tienes una idea, una propuesta de trabajo o simplemente quieres saludar, envíame un mensaje.
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
      
      <div class="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <h3 class="text-2xl font-semibold text-gray-800 mb-6">Envíame un mensaje directo</h3>
        
        <form @submit.prevent="submitForm" class="space-y-6">
          
          <div class="field">
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
            <InputText 
              id="name" 
              v-model="formData.name" 
              placeholder="Tu Nombre Completo" 
              required 
              class="w-full p-inputtext-sm"
            />
          </div>

          <div class="field">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <InputText 
              id="email" 
              v-model="formData.email" 
              placeholder="contacto@ejemplo.com" 
              type="email" 
              required
              class="w-full p-inputtext-sm"
            />
          </div>

          <div class="field">
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
            <Textarea 
              id="message" 
              v-model="formData.message" 
              placeholder="Describe tu proyecto o consulta aquí..." 
              rows="5" 
              required
              class="w-full"
            />
          </div>

          <div class="pt-4">
            <Button 
              type="submit" 
              label="Enviar Mensaje" 
              icon="pi pi-send" 
              class="w-full p-button-success p-button-rounded" 
              :loading="isSending"
            />
          </div>
        </form>
      </div>

      <div class="lg:col-span-1 space-y-8">
        <div class="bg-gray-100 text-black p-8 rounded-xl shadow-lg">
            <h3 class="text-2xl font-semibold mb-6">Información Directa</h3>
            
            <div class="space-y-4">
                <div class="flex items-center space-x-3">
                    <i class="pi pi-envelope text-xl text-primary-400"></i>
                    <a href="mailto:tu.email@ejemplo.com" class="hover:text-primary-400">joanmanuelromero100@gmail.com</a>
                </div>
                <div class="flex items-center space-x-3">
                    <i class="pi pi-map-marker text-xl text-primary-400"></i>
                    <p>Buenos Aires, Argentina</p>
                </div>
            </div>
        </div>

        <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 class="text-2xl font-semibold text-gray-800 mb-6">Sígueme</h3>
            <div class="space-y-4">
                <a href="https://github.com/Joanmanuel1" target="_blank" class="flex items-center space-x-3 text-gray-700 hover:text-blue-500 transition">
                    <i class="pi pi-github text-xl"></i>
                    <span>GitHub / Ver Código</span>
                </a>
                <a href="https://www.linkedin.com/in/joanmanuelromero/" target="_blank" class="flex items-center space-x-3 text-gray-700 hover:text-blue-500 transition">
                    <i class="pi pi-linkedin text-xl"></i>
                    <span>LinkedIn / Perfil Profesional</span>
                </a>
            </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
// Importamos los componentes de PrimeVue necesarios
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';

// 1. Manejo del estado del formulario
const formData = ref({
    name: '',
    email: '',
    message: '',
});
const isSending = ref(false);

// 2. Función para manejar el envío
const submitForm = () => {
    isSending.value = true;
    
    // **IMPORTANTE: Lógica de Envío**
    // Aquí es donde integrarías un servicio de terceros para recibir los mensajes:
    // Opciones populares:
    // a) Netlify Forms o Vercel Forms (si despliegas en esas plataformas).
    // b) Formspree (el más simple, requiere cambiar el 'action' del <form> y quitar el @submit.prevent).
    // c) Un backend (Node.js/Firebase) si necesitas lógica compleja.

    console.log('Datos a enviar:', formData.value);
    
    // Simulación de envío
    setTimeout(() => {
        isSending.value = false;
        alert('Mensaje enviado (simulación). ¡Gracias por tu interés!');
        // Opcional: Resetear el formulario
        // formData.value = { name: '', email: '', message: '' };
    }, 2000);
};

// **Nota:** No incluimos estilos <style scoped> porque estamos usando Tailwind CSS.
</script>