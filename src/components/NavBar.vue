<template>
  <header class="sticky top-0 z-50 bg-gray-800 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

      <RouterLink to="/"
        class="text-2xl font-bold text-white tracking-tight hover:text-green-400 transition duration-300">
        <span class="text-green-500">Joan Manuel</span> Romero
      </RouterLink>

      <nav class="hidden md:flex space-x-6">
        <RouterLink to="/projects"
          class="nav-item text-gray-300 hover:text-green-400 font-medium transition duration-300">
          Proyectos
        </RouterLink>
        <RouterLink to="/experience"
          class="nav-item text-gray-300 hover:text-green-400 font-medium transition duration-300">
          Experiencia
        </RouterLink>
        <RouterLink to="/education"
          class="nav-item text-gray-300 hover:text-green-400 font-medium transition duration-300">
          Educación
        </RouterLink>
        <RouterLink to="/about" class="nav-item text-gray-300 hover:text-green-400 font-medium transition duration-300">
          Sobre mí
        </RouterLink>
        <RouterLink to="/contact"
          class="nav-item text-gray-300 hover:text-green-400 font-medium transition duration-300">
          Contacto
        </RouterLink>
      </nav>

      <button @click="toggleMenu" class="md:hidden text-white p-2 focus:outline-none">
        <i :class="isMenuOpen ? 'pi pi-times' : 'pi pi-bars'" class="text-2xl"></i>
      </button>

    </div>

    <nav v-if="isMenuOpen" class="md:hidden bg-gray-700 pb-4 shadow-xl border-t border-gray-600">
      <div class="flex flex-col space-y-2 px-4">

        <RouterLink to="/projects" @click="closeMenu"
          class="nav-item-mobile text-gray-200 hover:bg-gray-600 py-2 px-3 rounded-md font-medium transition duration-300">
          Proyectos
        </RouterLink>
        <RouterLink to="/experience" @click="closeMenu"
          class="nav-item-mobile text-gray-200 hover:bg-gray-600 py-2 px-3 rounded-md font-medium transition duration-300">
          Experiencia
        </RouterLink>
        <RouterLink to="/education" @click="closeMenu"
          class="nav-item-mobile text-gray-200 hover:bg-gray-600 py-2 px-3 rounded-md font-medium transition duration-300">
          Educación
        </RouterLink>
        <RouterLink to="/about" @click="closeMenu"
          class="nav-item-mobile text-gray-200 hover:bg-gray-600 py-2 px-3 rounded-md font-medium transition duration-300">
          Sobre mí
        </RouterLink>
        <RouterLink to="/contact" @click="closeMenu"
          class="nav-item-mobile text-gray-200 hover:bg-gray-600 py-2 px-3 rounded-md font-medium transition duration-300">
          Contacto
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
.nav-item.router-link-exact-active {
  color: #34D399;
  border-bottom: 2px solid #34D399;
  padding-bottom: 0.25rem;
}

.nav-item-mobile.router-link-exact-active {
  background-color: #10B981;
  color: white;
}
</style>