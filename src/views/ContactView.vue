<template>
<section class="max-w-4xl mx-auto p-8 lg:p-12">
    
    <header class="text-center mb-12">
      <h2 class="text-4xl lg:text-5xl font-extrabold text-white mb-4">
        Contactame
      </h2>
      <p class="text-xl text-blue-100 font-light">
        Si buscas un desarrollador Frontend proactivo para tu próximo proyecto contactame.
      </p>
    </header>

    <div class="bg-gray-800/50 p-8 sm:p-12 rounded-2xl shadow-xl border border-gray-700 space-y-8">
        
        <h3 class="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center">
            <Users :size="24" class="mr-3 text-green-400"/> Vías de contacto principales
        </h3>

        <div class="text-center">
            <p class="text-sm font-semibold text-gray-400 mb-2">Correo electrónico</p>
            
            <a 
                href="mailto:joanmanuelromero100@gmail.com" 
                class="block sm:inline-flex items-center space-x-3 text-2xl text-green-400 hover:text-green-300 transition group font-extrabold"
            >
                <AtSign :size="24" class="flex-shrink-0 group-hover:scale-110 transition mx-auto sm:mx-0"/>
                
                <span class="underline underline-offset-4 decoration-green-400 break-words">
                    joanmanuelromero100@gmail.com
                </span>
            </a>
        </div>
        
        <div class="pt-6 border-t border-gray-700">
             <p class="text-sm font-semibold text-gray-400 mb-4 text-center">Perfiles Profesionales</p>

            <div class="flex flex-col sm:flex-row justify-center items-center gap-6">
                
                <a href="https://www.linkedin.com/in/joanmanuelromero/" target="_blank" class="flex items-center space-x-3 text-lg text-blue-400 hover:text-blue-300 transition group p-3 rounded-lg hover:bg-gray-700">
                    <i class="pi pi-linkedin text-xl group-hover:scale-110 transition"></i>
                    <span class="font-medium">LinkedIn</span>
                </a>
                
                <a href="https://github.com/Joanmanuel1" target="_blank" class="flex items-center space-x-3 text-lg text-gray-400 hover:text-white transition group p-3 rounded-lg hover:bg-gray-700">
                    <i class="pi pi-github text-xl group-hover:scale-110 transition"></i>
                    <span class="font-medium">GitHub</span>
                </a>
            </div>
        </div>

        <p class="text-base text-gray-400 mt-6 text-center flex items-center justify-center">
             <MapPin :size="16" class="mr-2 text-green-400"/>
             Buenos Aires, Argentina
        </p>

    </div>
  </section>
</template>

<script setup>
// Nota: Necesitas importar estos iconos de Lucide en tu componente
import { Users, AtSign, MapPin } from 'lucide-vue-next'; 

// Ya no necesitamos ref, InputText, Button, submitForm, etc., ya que no hay formulario.
</script>