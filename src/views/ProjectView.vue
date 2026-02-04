<template>
  <section class="p-4 sm:p-8 lg:p-12 bg-gray-900 min-h-screen">
    <div class="max-w-7xl mx-auto">

      <!-- Header Principal -->
      <header class="text-center mb-12 sm:mb-16" data-aos="fade-up">
        <h2
          class="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6">
          Mis Proyectos
        </h2>
        <p class="text-white text-lg sm:text-xl max-w-6xl mx-auto">
          Soluciones tecnológicas enfocadas en generar impacto real y escalabilidad.
        </p>
      </header>

      <!-- Proyectos de Producción -->
      <div class="mb-20">
        <h3 class="text-2xl sm:text-3xl font-bold text-white mb-8 border-l-4 border-green-500 pl-4 flex items-center">
          <i class="pi pi-briefcase mr-3 text-green-400"></i> Futuros proyectos productivos
        </h3>
        <div class="space-y-12">
          <div v-for="project in productionProjects" :key="project.id"
            class="group relative bg-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-green-500/20 transition-all duration-300 border border-gray-700 hover:border-green-500/50"
            data-aos="fade-up">

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <!-- Galería/Imagen Principal (lado izquierdo en desktop) -->
              <div
                class="relative h-64 sm:h-80 lg:h-full bg-gray-900 overflow-hidden group-hover:shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] transition-all duration-500">

                <!-- Static Image Display: First image of gallery -->
                <div class="relative w-full h-full bg-gray-800">
                  <template v-if="project.gallery && project.gallery.length">
                    <!-- Background borroso -->
                    <img :src="getImgUrl(project.gallery[0].item)"
                      class="absolute inset-0 w-full h-full object-cover opacity-30 blur-xl scale-110" />

                    <!-- Imagen principal -->
                    <img :src="getImgUrl(project.gallery[0].item)" :alt="project.gallery[0].alt"
                      class="absolute inset-0 w-full h-full object-contain p-4 z-10 transition-transform duration-700 group-hover:scale-105" />
                  </template>

                  <!-- Fallback if no images -->
                  <div v-else class="flex items-center justify-center h-full text-gray-600">
                    <i class="pi pi-image text-4xl"></i>
                  </div>

                  <!-- Gradiente de superposición -->
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-gray-900/10 z-20">
                  </div>
                </div>

              </div>
              <!-- Contenido (lado derecho en desktop) -->
              <div class="p-8 sm:p-10 flex flex-col justify-center">
                <div class="mb-4">
                  <h4 class="text-3xl sm:text-4xl font-extrabold text-white mb-2">{{ project.title }}</h4>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span v-for="tech in project.technologies" :key="tech"
                      class="px-3 py-1 bg-gray-700/50 text-green-400 rounded-full text-xs font-semibold border border-gray-600">
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <p class="text-gray-300 text-lg mb-6 leading-relaxed">
                  {{ project.description }}
                </p>

                <div v-if="project.impact" class="mb-8 p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                  <h5 class="text-green-400 font-bold mb-2 flex items-center">
                    <i class="pi pi-check-circle mr-2"></i> Solución & Impacto
                  </h5>
                  <p class="text-gray-300 text-sm italic">
                    {{ project.impact }}
                  </p>
                </div>

                <div class="flex gap-4 mt-auto">
                  <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank"
                    class="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors shadow-lg shadow-green-500/30 flex items-center justify-center flex-1 sm:flex-none">
                    <i class="pi pi-external-link mr-2"></i> Ver Demo
                  </a>
                  <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank"
                    class="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-colors border border-gray-600 flex items-center justify-center flex-1 sm:flex-none">
                    <i class="pi pi-github mr-2"></i> Código
                  </a>

                  <button v-if="project.gallery && project.gallery.length" @click="openProductionGallery(project)"
                    class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center flex-1 sm:flex-none cursor-pointer">
                    <i class="pi pi-images mr-2"></i> Galería
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Proyectos de Práctica -->
      <div>
        <h3 class="text-2xl sm:text-3xl font-bold text-white mb-8 border-l-4 border-green-500 pl-4 flex items-center">
          <i class="pi pi-code mr-3 text-green-400"></i> Proyectos de práctica con finalidad educativa
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          <ProjectCard v-for="project in practiceProjects" :key="project.id" :project="project" data-aos="zoom-in"
            data-aos-duration="1000" />
        </div>
      </div>

      <!-- Dialog para Galería de Producción -->
      <Dialog v-if="activeProject" :header="activeProject.title" v-model:visible="displayproductionGallery" modal
        :style="{ width: '80vw' }" :breakpoints="{ '1199px': '85vw', '575px': '95vw' }" :dismissableMask="true"
        :maximizable="true" :pt="{
          header: { class: 'bg-gray-800 text-white border-b border-gray-700' },
          content: { class: 'bg-gray-900 text-white p-0' },
          footer: { class: 'bg-gray-800 border-t border-gray-700' },
          closeButton: { class: 'text-white hover:bg-gray-700' },
          maximizeButton: { class: 'text-white hover:bg-gray-700 mr-2' }
        }">
        <Galleria :value="activeProject.gallery" :numVisible="5" :circular="true" :showThumbnails="true"
          :showIndicators="false" :showItemNavigators="true" containerStyle="max-width: 100%; margin: auto;" :pt="{
            thumbnailItem: { class: 'opacity-50 hover:opacity-100 transition-opacity' }
          }">
          <template #item="slotProps">
            <div class="flex justify-center items-center h-[60vh] sm:h-[70vh] bg-black/50 p-4">
              <img :src="getImgUrl(slotProps.item.item)" :alt="slotProps.item.alt"
                class="max-w-full max-h-full object-contain shadow-2xl" />
            </div>
          </template>
          <template #thumbnail="slotProps">
            <div class="grid gap-4 justify-center">
              <img :src="getImgUrl(slotProps.item.item)" :alt="slotProps.item.alt"
                class="w-20 h-16 sm:w-24 sm:h-20 object-cover rounded block" />
            </div>
          </template>
        </Galleria>
      </Dialog>

    </div>
  </section>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue';
import Dialog from 'primevue/dialog';
import Galleria from 'primevue/galleria';
import { ref } from 'vue';

// Función auxiliar para las imagenes
const getImgUrl = (name) => {
  if (!name) return null;
  try {
    return new URL(`../assets/img/${name}`, import.meta.url).href;
  } catch (e) {
    return null;
  }
};

const displayproductionGallery = ref(false);
const activeProject = ref({});

const openProductionGallery = (project) => {
  activeProject.value = project;
  displayproductionGallery.value = true;
};

const productionProjects = ref([
  {
    id: 1,
    title: 'Goludos App Mobile',
    description: 'Ecosistema móvil completo para el fútbol amateur y profesional. Ofrece resultados en tiempo real, estadísticas detalladas y una experiencia de usuario fluida y nativa.',
    impact: 'Resuelve la fragmentación de información en ligas de fútbol, centralizando datos y ofreciendo actualizaciones instantáneas a miles de usuarios activos.',
    technologies: ['Ionic', 'Angular', 'Node.js', 'PostgreSQL'],
    demoUrl: 'https://play.google.com/store/apps/details?id=com.miempresa.fulbo&hl=es_AR',
    githubUrl: '',
    gallery: [
      { item: '1-a.png', alt: 'Pantalla posiciones' },
      { item: '1-b.png', alt: 'Tabla de posiciones' },
      { item: '1-c.png', alt: 'Fixture' },
      { item: '1-d.png', alt: 'Fixture' },
      { item: '1-e.png', alt: 'Detalle de goles' },
      { item: '1-f.png', alt: 'Formacion' },
      { item: '1-g.png', alt: 'Historial' },
      { item: '1-h.png', alt: 'Estadisticas' },
      { item: '1-i.png', alt: 'Amonestados' },
      { item: '1-j.png', alt: 'Fixture' },
      { item: '1-k.png', alt: 'Penales' },
    ],
  },
  {
    id: 2,
    title: 'Goludos Web',
    description: 'Plataforma web escalable que complementa la experiencia móvil. Panel de administración robusto y visualización de datos complejos para gestores de ligas y aficionados.',
    impact: 'Permite a las organizaciones gestionar torneos de manera eficiente y brinda accesibilidad desde cualquier dispositivo de escritorio.',
    technologies: ['Angular', 'Bootstrap', 'Node.js', 'PostgreSQL'],
    demoUrl: 'https://goludos.netlify.app/',
    githubUrl: '',
    gallery: [
      { item: '2-a.png', alt: 'Home' },
      { item: '2-b.png', alt: 'Cargando' },
      { item: '2-c.png', alt: 'Posiciones y fixture' },
      { item: '2-d.png', alt: 'Goleadores y asistidores' },
      { item: '2-e.png', alt: 'Amonestados y expulsados' },
      { item: '2-f.png', alt: 'b nacional' },
      { item: '2-g.png', alt: 'Libertadores' },
    ],
  },
  {
    id: 6,
    title: 'NutriAmor',
    description: 'Plataforma inteligente de nutrición asistida por IA. Permite el seguimiento detallado de dietas, análisis nutricional automático de recetas y generación de informes de salud personalizados.',
    impact: 'Mejora la adherencia a planes nutricionales mediante feedback inmediato y personalización, facilitando la labor de nutricionistas y empoderando a los pacientes.',
    technologies: ['Vue 3', 'TensorFlow/AI API', 'Tailwind', 'Firebase'],
    demoUrl: '',
    githubUrl: '',
    gallery: [
      { item: '6-a.png', alt: 'Home' },
      { item: '6-b.png', alt: 'Cargar informe' },
      { item: '6-c.png', alt: 'Detalle del informe' },
      { item: '6-d.png', alt: 'registra comida' },
      { item: '6-e.png', alt: 'ia carga comida' },
      { item: '6-f.png', alt: 'analisis de ia' },
      { item: '6-g.png', alt: 'carga de datos' },
      { item: '6-h.png', alt: 'carga datos complementarios de Pokémon' },
      { item: '6-i.png', alt: 'home cargado' },
      { item: '6-j.png', alt: 'recetas de comida' },
      { item: '6-k.png', alt: 'receta nueva carga' },
    ],
  },
]);

const practiceProjects = ref([
  {
    id: 3,
    title: 'Adógtame',
    description: 'Plataforma de conexión para adopción de mascotas. Facilita el encuentro entre refugios y adoptantes potenciales.',
    technologies: ['Angular', 'Firebase'],
    demoUrl: '',
    githubUrl: 'https://github.com/Joanmanuel1/Adogtame-frontend',
    gallery: [
      { item: '3-a.png', alt: 'Home' },
      { item: '3-b.png', alt: 'Formulario de adopción' },
    ],
  },
  {
    id: 4,
    title: 'Adivina que Pokémon es',
    description: 'Juego interactivo de trivia desarrollado para explorar la reactividad de Vue y consumo de APIs externas.',
    technologies: ['Vue 3', 'PokeAPI'],
    demoUrl: 'https://juego-de-pokemon-vue-js.netlify.app/',
    githubUrl: 'https://github.com/Joanmanuel1/Pokemon-game',
    gallery: [
      { item: '4-a.png', alt: 'Game screen' },
      { item: '4-b.png', alt: 'Pantalla de juego de Pokémon' },
      { item: '4-c.png', alt: 'Pantalla de juego de Pokémon' },],
  },
  {
    id: 5,
    title: 'Pokédex',
    description: 'Enciclopedia digital que demuestra el manejo eficiente de grandes conjuntos de datos y paginación asíncrona.',
    technologies: ['Vue 3', 'REST API'],
    demoUrl: 'https://pokemon-vue-global66.netlify.app/',
    githubUrl: 'https://github.com/Joanmanuel1/pokemon-vue',
    gallery: [
      { item: '5-a.png', alt: 'Pokedex' },
      { item: '5-b.png', alt: 'Listado de Pokémon' },
      { item: '5-c.png', alt: 'Detalle de Pokémon' },
    ],
  },
]);
</script>

<style scoped></style>