<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import ScrollProgress from './components/ScrollProgress.vue'
import { RouterView } from 'vue-router'
import Toast from 'primevue/toast'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="relative flex flex-col min-h-screen bg-canvas overflow-hidden">
    <a href="#main" class="skip-link">{{ t('a11y.skip') }}</a>
    <ScrollProgress />

    <!-- Background mesh — fixed, never repaints on scroll -->
    <div class="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      <!-- Static gradient base -->
      <div class="absolute inset-0 bg-hero-mesh"></div>
      <!-- Animated blobs -->
      <div class="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[120px] animate-blob"></div>
      <div class="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-emerald-600/10 blur-[120px] animate-blob" style="animation-delay:4s"></div>
      <div class="absolute top-[40%] left-[55%] w-[400px] h-[400px] rounded-full bg-sky-500/8 blur-[100px] animate-blob" style="animation-delay:8s"></div>
      <div class="absolute inset-0 bg-dot-grid opacity-[0.025]"></div>
    </div>

    <NavBar class="relative z-50" />

    <main id="main" tabindex="-1" class="relative z-10 flex-grow outline-none">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <Footer class="relative z-10" />
    <Toast position="bottom-right" />
  </div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
