<template>
  <section class="p-4 sm:p-8 lg:p-12">
    <div class="max-w-6xl mx-auto">

      <header class="text-center mb-8 sm:mb-10">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-4">
          Mi Perfil Profesional
        </h2>
        <p class="text-lg sm:text-xl text-white font-light">
          Licenciado en Gestión de Tecnología y Analista de Sistemas
        </p>
      </header>

      <div
        class="bg-white p-5 sm:p-8 rounded-xl shadow-2xl border border-gray-100 mb-8 sm:mb-10 transform hover:scale-[1.005] transition duration-300">

        <p class="text-lg sm:text-xl text-gray-800 mb-3 sm:mb-4 leading-relaxed font-light">
          Soy <span class="font-extrabold text-green-600">Joan Manuel Romero</span>. Mi fortaleza reside en mi
          trayectoria integral: comencé en <span class="font-semibold">Análisis QA</span>, pasando por <span
            class="font-semibold">Análisis Funcional</span>, lo que me permite abordar el <span
            class="font-bold">Desarrollo Frontend</span> con una visión completa de la <span
            class="text-blue-600 font-bold">calidad del código</span>, la <span
            class="text-blue-600 font-bold">experiencia de usuario (UX)</span> y los requisitos del negocio.
        </p>

        <p class="text-base sm:text-lg text-gray-700 leading-relaxed italic border-l-4 border-green-500 pl-3 sm:pl-4">
          Actualmente, me especializo en la construcción de **Single Page Applications (SPA)** escalables con Vue.js y
          Angular, asegurando que cada componente sea reutilizable, accesible y cumpla estrictamente con las necesidades
          funcionales.
        </p>

        <p class="text-sm sm:text-md text-gray-600 mt-3 sm:mt-4 leading-relaxed">
          Mis pilares de trabajo son la <span class="font-semibold">comunicación proactiva</span>, la <span
            class="font-semibold">responsabilidad</span> y el <span class="font-semibold">aprendizaje constante</span>,
          cruciales para un entorno ágil y de alto rendimiento.
        </p>
      </div>

      <div class="pt-4 sm:pt-6">
        <h3 class="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 text-center border-b border-gray-700 pb-3 sm:pb-4">
          <Code :size="24" class="mr-2 text-green-500 inline-block align-middle" /> Mi Stack técnico
        </h3>

        <div class="flex flex-col gap-6 sm:gap-10">

          <div class="space-y-6 sm:space-y-8 p-4 rounded-xl border-2 border-green-500 shadow-xl bg-gray-900/50">
            <h4 class="text-xl sm:text-2xl font-extrabold text-green-400 pb-2 flex items-center border-b border-gray-600">
              <Zap :size="18" class="mr-2" /> Desarrollo
            </h4>

            <div class="space-y-5 sm:space-y-6">

              <div class="skill-group bg-gray-100 hover:bg-gray-200">
                <p class="font-bold text-base sm:text-lg text-gray-800 mb-2 flex items-center">
                  <Code :size="16" class="mr-2 text-gray-600" /> Lenguajes y Frameworks
                </p>
                <ul class="flex flex-wrap gap-x-4 gap-y-1 text-gray-700 text-sm sm:text-base">
                  <li><span class="font-extrabold text-red-500">Angular</span></li>
                  <li><span class="font-extrabold text-green-500">Vue JS 3</span></li>
                  <li><span class="font-bold text-yellow-600">JavaScript</span></li>
                  <li><span class="font-bold text-blue-500">TypeScript</span></li>
                </ul>
              </div>
              
              <div class="skill-group bg-gray-100 hover:bg-gray-200">
                <p class="font-bold text-base sm:text-lg text-gray-800 mb-2 flex items-center">
                  <Palette :size="16" class="mr-2 text-gray-600" /> User interface
                </p>
                <ul class="flex flex-wrap gap-x-4 gap-y-1 text-gray-700 text-sm sm:text-base">
                  <li><span class="font-bold text-blue-400">Tailwind CSS</span></li>
                  <li><span class="font-bold text-purple-700">PrimeVue</span></li>
                  <li><span class="font-bold text-indigo-500">Bootstrap</span></li>
                  <li><span class="font-bold text-blue-700">Vuetify</span></li>
                </ul>
              </div>

              <div class="skill-group bg-gray-100 hover:bg-gray-200">
                <p class="font-bold text-base sm:text-lg text-gray-800 mb-2 flex items-center">
                  <Database :size="16" class="mr-2 text-gray-600" /> Backend y Bases de Datos
                </p>
                <ul class="flex flex-wrap gap-x-4 gap-y-1 text-gray-700 text-sm sm:text-base">
                  <li><span class="font-bold text-gray-800">Node.js</span></li>
                  <li><span class="font-bold text-blue-700">PostgreSQL / SQL</span></li>
                  <li><span class="font-bold text-orange-400">Firebase</span></li>
                  <li><span class="font-bold text-gray-700">Consumo de REST APIs</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="space-y-6 sm:space-y-8 p-4 rounded-xl border border-gray-700 shadow-lg bg-gray-800/50">
            <h4 class="text-xl sm:text-2xl font-extrabold text-white pb-2 flex items-center border-b border-gray-700">
              <Compass :size="18" class="mr-2" /> Gestión, QA y Análisis
            </h4>

            <div class="space-y-5 sm:space-y-6">

              <div class="skill-group bg-gray-700 hover:bg-gray-600/80">
                <p class="font-bold text-base sm:text-lg text-white mb-2 flex items-center">
                  <MousePointer2 :size="16" class="mr-2 text-blue-300" /> Testing y Quality Assurance (QA)
                </p>
                <div class="flex flex-wrap gap-3">
                  <Chip label="Testing Manual (Funcional/Regresión)" icon="pi pi-eye"
                    class="bg-red-600 text-white font-semibold" />
                  <Chip label="Robot Framework / Selenium (Automatizado)" icon="pi pi-sync"
                    class="bg-blue-600 text-white font-semibold" />
                  <Chip label="Pruebas de Accesibilidad (WCAG)" icon="pi pi-check-circle"
                    class="bg-green-700 text-white font-semibold" />
                </div>
              </div>

              <div class="skill-group bg-gray-700 hover:bg-gray-600/80">
                <p class="font-bold text-base sm:text-lg text-white mb-2 flex items-center">
                  <Lightbulb :size="16" class="mr-2 text-yellow-300" /> Análisis Funcional
                </p>
                <div class="flex flex-wrap gap-3">
                  <Chip label="Relevamiento de Requisitos" icon="pi pi-search"
                    class="bg-yellow-600 text-white font-semibold" />
                  <Chip label="Historias de Usuario / Casos de Uso" icon="pi pi-book"
                    class="bg-gray-400 text-gray-900 font-semibold" />
                  <Chip label="Documentación Técnica" icon="pi pi-file-edit"
                    class="bg-red-400 text-gray-900 font-semibold" />
                </div>
              </div>

              <div class="skill-group bg-gray-700 hover:bg-gray-600/80">
                <p class="font-bold text-base sm:text-lg text-white mb-2 flex items-center">
                  <Trello :size="16" class="mr-2 text-blue-300" /> Metodologías y Gestión
                </p>
                <div class="flex flex-wrap gap-3">
                  <Chip label="Scrum (Ágiles)" icon="pi pi-bolt" class="bg-blue-600 text-white font-semibold" />
                  <Chip label="JIRA / Trello" icon="pi pi-list" class="bg-indigo-600 text-white font-semibold" />
                  <Chip label="Postman / Soap (APIs)" icon="pi pi-server"
                    class="bg-orange-600 text-white font-semibold" />
                </div>
              </div>

              <div class="skill-group bg-gray-700 hover:bg-gray-600/80">
                <p class="font-bold text-base sm:text-lg text-white mb-2 flex items-center">
                  <GitBranch :size="16" class="mr-2 text-green-300" /> Control de Versiones
                </p>
                <div class="flex flex-wrap gap-3">
                  <Chip label="GitHub / GitLab" icon="pi pi-github" class="bg-gray-800 text-white font-semibold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Zap, Code, Palette, Database, Compass, Trello, GitBranch, MousePointer2, Lightbulb } from 'lucide-vue-next';
</script>

<style scoped>
.skill-group {
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
}

.skill-group:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.bg-gray-700 {
  background-color: #374151;
}

.bg-gray-700:hover {
  background-color: #4b5563;
}

.p-chip {
  padding: 0.4rem 0.65rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
}

.p-chip .p-chip-text {
  font-size: 0.85rem;
}
.p-chip i {
    font-size: 0.85rem;
    margin-right: 0.3rem;
}

@media (min-width: 640px) {
  .p-chip {
    padding: 0.5rem 0.75rem;
  }
  .p-chip .p-chip-text {
    font-size: 0.9rem;
  }
}
</style>