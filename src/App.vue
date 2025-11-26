<script setup>
import NavBar from './components/NavBar.vue';
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue'; 
</script>

<template>
  <div class="relative flex flex-col min-h-screen bg-gray-900 overflow-hidden">
    <!-- Blobs animados de fondo -->
    <div class="absolute top-0 left-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
    <div class="absolute -bottom-20 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    <div class="absolute -top-20 right-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

    <!-- Contenido principal de la aplicación -->
    <NavBar class="relative z-10" />
    <main class="relative z-10 flex-grow">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <Footer class="relative z-10" />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.animate-blob {
  animation: blob 10s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% { transform: translate(20px, -30px) scale(1.1); }
  50% { transform: translate(-20px, 40px) scale(0.9); }
  75% { transform: translate(30px, -20px) scale(1.05); }
}
</style>
