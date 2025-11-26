<template>
  <section class="p-8 lg:p-12 min-h-screen" data-aos="fade-up">
    <div class="max-w-4xl mx-auto">
      
      <header class="text-center mb-12">
        <h2 class="text-4xl lg:text-5xl font-extrabold text-white mb-2">
            Experiencia Laboral
        </h2>
        <p class="text-xl text-white font-light">
          Mi trayectoria profesional.
        </p>
      </header>

      <div v-for="job in experience" :key="job.id" class="mb-10 p-6 rounded-xl shadow-lg border-l-4 border-green-500 bg-gray-50 transition duration-300 hover:shadow-xl">
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
          <h3 class="text-2xl font-bold text-gray-900">
            {{ job.title }}
          </h3>
          <span class="text-sm text-gray-500 font-semibold mt-1 md:mt-0">
            <i class="pi pi-calendar mr-1"></i> {{ job.duration }}
          </span>
        </div>
        
        <div class="flex flex-col sm:flex-row justify-between text-gray-700 mb-4 text-md">
          <p class="font-medium">
            <i class="pi pi-building mr-1 text-green-500"></i> {{ job.company }} · <span class="font-normal">{{ job.type }}</span>
          </p>
          <p class="text-gray-500 italic mt-1 sm:mt-0">
            <i class="pi pi-map-marker mr-1"></i> {{ job.location }}
          </p>
        </div>

        <div class="border-t border-gray-200 pt-4">
          
          <p v-if="job.techUsed" class="text-sm text-gray-800 mb-2">
            <span class="font-semibold text-green-600">Tecnología clave:</span> {{ job.techUsed }}
          </p>

          <ul v-if="job.details && job.details.length" class="list-disc list-inside space-y-1 text-gray-700 ml-4">
            <li v-for="(detail, index) in job.details" :key="index" class="text-sm">
              <span class="font-semibold">{{ detail }}</span>
            </li>
          </ul>

          <div v-if="job.skills && job.skills.length" class="mt-4 flex flex-wrap gap-2">
            <span v-for="skill in job.skills" :key="skill"
                  class="px-3 py-1 text-xs font-medium rounded bg-indigo-100 text-indigo-700 flex items-center">
                  <i class="pi pi-tag mr-1"></i> {{ skill }}
            </span>
          </div>
          
        </div>

      </div>
      
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const experience = ref([
  {
    id: 1,
    title: 'Desarrollador de Front-end',
    company: 'Ministerio Público Fiscal',
    type: 'Jornada completa',
    duration: 'Abr. 2022 - Actualidad (3 años 8 meses)',
    location: 'Provincia de Buenos Aires, Argentina · Híbrido',
    techUsed: 'Vue JS 3, JavaScript, Primevue, Tailwind',
    details: [
      'Ser parte de la migración completa de un sistema interno (anteriormente basado en Django Admin) a una moderna arquitectura SPA on Vue 3.',
      'Desarrollo y mantenimiento de componentes reutilizables y la librería de UI interna utilizando PrimeVue y Tailwind CSS.',
    ],
    skills: ['GitLab', 'JIRA', 'Vue JS', 'JavaScript', 'Primevue', 'Tailwind', 'REST APIs', 'Arquitectura SPA'],
  },
  {
    id: 2,
    title: 'Analista Funcional',
    company: 'UXOR IT',
    type: 'Jornada completa',
    duration: 'Jul. 2021 - Abr. 2022 (10 meses)',
    location: 'Provincia de Buenos Aires, Argentina',
    techUsed: 'JIRA, SQL, Postman',
    details: [
      'Responsable del relevamiento y la documentación de requisitos para el cliente Victoria Seguros, asegurando la alineación entre el negocio y el equipo técnico.',
      'Creación y mantenimiento de diagramas de flujo y casos de uso para la implementación de nuevas funcionalidades críticas.',
      'Coordinación de la comunicación entre los stakeholders y el equipo de desarrollo.',
    ],
    skills: ['JIRA', 'Postman', 'SQL', 'Metodologías Ágiles', 'Requisitos de Software', 'Relevamiento', 'Capacidad de Análisis'],
  },
  {
    id: 3,
    title: 'Analista QA',
    company: 'Nahual IT - Inclusive Technology',
    type: 'Jornada completa',
    duration: 'May. 2018 - Jul. 2021 (3 años 3 meses)',
    location: 'Buenos Aires, CABA, Argentina · Híbrido',
    techUsed: 'Robot Framework, Selenium, Python, Postman',
    details: [
      'Ejecución de pruebas funcionales y de regresión para clientes como Mercado Libre, Merck, Stahls y Sancor Seguros.',
      'Desarrollo y mantenimiento de scripts de automatización de pruebas* utilizando Robot Framework, Selenium y Python.',
      'Enfoque en la accesibilidad (WCAG) y pruebas de usabilidad para garantizar estándares de calidad e inclusión.',
    ],
    skills: ['JIRA', 'Metodologías Ágiles', 'Accesibilidad', 'Automatización', 'Robot Framework', 'Python', 'Selenium', 'Postman', 'SQL'],
  },
]);
</script>

<style scoped>
</style>