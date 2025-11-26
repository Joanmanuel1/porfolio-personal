<template>
  <section class="p-8 lg:p-12 bg-gray-800 min-h-screen">
    <div class="max-w-7xl mx-auto">

      <header class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-4xl lg:text-5xl font-extrabold text-white mb-4">
          <i class="pi pi-th-large mr-3 text-green-500"></i> Mis Proyectos
        </h2>
        <p class="text-xl text-gray-300 font-light">
          Echa un vistazo a mi trabajo y las tecnologías que utilizo.
        </p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard v-for="project in projectsData" :key="project.id" :project="project" data-aos="zoom-in"
          data-aos-duration="1000" />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue';
import { ref } from 'vue';

const projectsData = ref([
  {
    id: 1,
    title: 'Goludos App Mobile',
    description: 'Aplicación móvil híbrida que ofrece resultados de fútbol argentino en tiempo real, tablas de posiciones y fixtures. Desarrollada para ofrecer una experiencia rápida y nativa.',
    technologies: ['Angular', 'Typescript', 'Ionic', 'Bootstrap', 'PostgreSQL', 'Node.js'],
    demoUrl: 'https://play.google.com/store/apps/details?id=com.miempresa.fulbo&hl=es_AR',
    githubUrl: '',
    status: 'En Pruebas (Play Store)',
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
    title: 'Goludos App Web',
    description: 'Versión web para escritorio que replica las funcionalidades de la App Mobile, mostrando resultados, tablas y fixtures del fútbol argentino.',
    technologies: ['Angular', 'Typescript', 'Bootstrap', 'PostgreSQL', 'Node.js'],
    demoUrl: '',
    githubUrl: '',
    gallery: [
      { item: '2-a.png', alt: 'Interfaz web de resultados' },
      { item: '2-b.png', alt: 'Diseño responsive web' },
      { item: '2-c.png', alt: 'Interfaz web de resultados' },
      { item: '2-d.png', alt: 'Diseño responsive web' },
      { item: '2-e.png', alt: 'Interfaz web de resultados' },
      { item: '2-f.png', alt: 'Diseño responsive web' },
      { item: '2-g.png', alt: 'Interfaz web de resultados' },
      { item: '2-h.png', alt: 'Diseño responsive web' },
      { item: '2-i.png', alt: 'Interfaz web de resultados' },
    ],
  },
  {
    id: 3,
    title: 'Adógtame',
    description: 'Aplicación web para facilitar la adopción de animales. Permite a los usuarios dar en adopción o adoptar mascotas. Proyecto realizado con fines educativos y de práctica.',
    technologies: ['Angular', 'Bootstrap', 'Node.js', 'CSS', 'SQL', 'Firebase', 'JIRA'],
    demoUrl: '',
    githubUrl: 'https://github.com/Joanmanuel1/Adogtame-frontend',
    gallery: [
      { item: '3-a.png', alt: 'Página principal de Adógtame' },
      { item: '3-b.png', alt: 'Formulario de adopción' },
    ],
  },
  {
    id: 4,
    title: 'Adivina qué Pokémon es',
    description: 'Juego interactivo simple que desafía al usuario a adivinar el nombre del Pokémon oculto, utilizando la PokeAPI para obtener los datos.',
    technologies: ['Vue 3', 'JavaScript', 'CSS'],
    demoUrl: 'https://juego-de-pokemon-vue-js.netlify.app/',
    githubUrl: 'https://github.com/Joanmanuel1/Pokemon-game',
    gallery: [
      { item: '4-a.png', alt: 'Pantalla de juego de Pokémon' },
      { item: '4-b.png', alt: 'Pantalla de juego de Pokémon' },
      { item: '4-c.png', alt: 'Pantalla de juego de Pokémon' },
    ],
  },
  {
    id: 5,
    title: 'Pokédex (Vue)',
    description: 'Enciclopedia digital de Pokémon que consume la PokeAPI para mostrar información detallada, estadísticas y habilidades de cada pokemon.',
    technologies: ['Vue 3', 'JavaScript', 'CSS', 'API REST'],
    demoUrl: 'https://pokemon-vue-global66.netlify.app/',
    githubUrl: 'https://github.com/Joanmanuel1/pokemon-vue',
    gallery: [
      { item: '5-a.png', alt: 'Home' },
      { item: '5-b.png', alt: 'Listado de Pokémon' },
      { item: '5-c.png', alt: 'Detalle de Pokémon' },
    ],
  },
]);
</script>

<style scoped>
</style>