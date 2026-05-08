<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import ScrollProgress from './components/ScrollProgress.vue'
import FloatingCta from './components/FloatingCta.vue'
import { RouterView, useRouter } from 'vue-router'
import Toast from 'primevue/toast'
import { useI18n } from 'vue-i18n'
import { ref, onErrorCaptured } from 'vue'

const { t } = useI18n()
const router = useRouter()

const appError = ref(null)
onErrorCaptured((err) => {
  appError.value = err
  return false
})

function recover() {
  appError.value = null
  router.push('/')
}
</script>

<template>
  <div class="relative flex flex-col min-h-screen bg-canvas overflow-hidden">
    <a href="#main" class="skip-link">{{ t('a11y.skip') }}</a>
    <ScrollProgress />

    <!-- Background mesh — fixed, never repaints on scroll -->
    <div class="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      <div class="absolute inset-0 bg-hero-mesh"></div>
      <div class="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[120px] animate-blob"></div>
      <div class="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-emerald-600/10 blur-[120px] animate-blob" style="animation-delay:4s"></div>
      <div class="absolute top-[40%] left-[55%] w-[400px] h-[400px] rounded-full bg-sky-500/8 blur-[100px] animate-blob" style="animation-delay:8s"></div>
      <div class="absolute inset-0 bg-dot-grid opacity-[0.025]"></div>
    </div>

    <!-- Recruiter mode banner -->
    <div class="recruiter-banner" aria-live="polite">
      {{ t('common.recruiterActive') }} — {{ t('common.recruiterBannerHint') }}
    </div>

    <NavBar class="relative z-50" />

    <main id="main" tabindex="-1" class="relative z-10 flex-grow outline-none">

      <!-- Error boundary UI -->
      <div
        v-if="appError"
        class="section-pad flex flex-col items-center justify-center min-h-[60vh] text-center"
      >
        <div class="glass rounded-2xl p-8 sm:p-12 max-w-md mx-auto">
          <div class="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/25 flex items-center justify-center mx-auto mb-6">
            <i class="pi pi-exclamation-triangle text-xl text-red-400"></i>
          </div>
          <h2 class="text-xl font-display font-bold text-white mb-2">Algo salió mal</h2>
          <p class="text-slate-400 text-sm mb-6 leading-relaxed">
            Ocurrió un error inesperado. No es tu culpa — podés volver al inicio.
          </p>
          <button
            @click="recover"
            class="cta-primary w-full justify-center"
          >
            <i class="pi pi-home"></i> Volver al inicio
          </button>
          <details class="mt-4 text-left">
            <summary class="text-xs text-slate-600 cursor-pointer hover:text-slate-400 transition-colors">Detalle técnico</summary>
            <pre class="mt-2 text-xs text-slate-600 overflow-auto max-h-32 bg-black/30 rounded p-2">{{ appError?.message }}</pre>
          </details>
        </div>
      </div>

      <RouterView v-else v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <Footer class="relative z-10" />
    <FloatingCta />
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
