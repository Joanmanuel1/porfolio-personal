<template>
  <section class="section-pad flex items-center justify-center min-h-[80vh] overflow-hidden">
    <div class="relative text-center max-w-lg mx-auto">

      <!-- Floating glitch 404 -->
      <div class="relative inline-block mb-2 select-none" aria-hidden="true">
        <p class="text-[10rem] sm:text-[13rem] font-display font-black leading-none gradient-text glitch-text" data-text="404">
          404
        </p>
        <!-- Ghost copies for glitch effect -->
        <p class="text-[10rem] sm:text-[13rem] font-display font-black leading-none absolute inset-0 glitch-copy-1 text-cyan-400/20">404</p>
        <p class="text-[10rem] sm:text-[13rem] font-display font-black leading-none absolute inset-0 glitch-copy-2 text-emerald-400/20">404</p>
      </div>

      <!-- Blinking cursor after 404 -->
      <div class="flex items-center justify-center gap-2 mb-6">
        <span class="font-mono text-sm text-slate-500">~/portfolio $</span>
        <span class="font-mono text-sm text-cyan-400">cd {{ randomPath }}</span>
        <span class="w-2 h-4 bg-cyan-400 animate-pulse inline-block"></span>
      </div>

      <h1 class="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mb-3">
        {{ t('notFound.title') }}
      </h1>
      <p class="text-slate-400 leading-relaxed mb-4">
        {{ t('notFound.description') }}
      </p>

      <!-- Easter egg -->
      <p class="text-xs text-slate-600 font-mono mb-10">
        <span class="text-emerald-500">✓</span> {{ t('notFound.commit') }}
      </p>

      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <RouterLink to="/" class="cta-primary inline-flex">
          <i class="pi pi-home"></i>
          {{ t('notFound.cta') }}
        </RouterLink>
        <RouterLink to="/projects" class="cta-secondary inline-flex">
          <i class="pi pi-briefcase"></i>
          {{ t('notFound.ctaProjects') }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useSeo } from '@/composables/useSeo'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const { t } = useI18n()
const route = useRoute()
useSeo({ titleKey: 'notFound.meta.title', descKey: 'notFound.meta.description', noindex: true })

const randomPath = computed(() => route.path || '/??')
</script>

<style scoped>
.glitch-text {
  position: relative;
  animation: glitch-main 4s infinite;
}
.glitch-copy-1 {
  animation: glitch-1 4s infinite;
  clip-path: polygon(0 20%, 100% 20%, 100% 35%, 0 35%);
}
.glitch-copy-2 {
  animation: glitch-2 4s infinite;
  clip-path: polygon(0 65%, 100% 65%, 100% 80%, 0 80%);
}

@keyframes glitch-main {
  0%, 90%, 100% { transform: none; }
  92% { transform: translate(-2px, 0) skewX(-1deg); }
  94% { transform: translate(2px, 0) skewX(1deg); }
  96% { transform: translate(-1px, 0); }
}
@keyframes glitch-1 {
  0%, 90%, 100% { transform: none; opacity: 0; }
  92% { transform: translate(4px, 0); opacity: 1; }
  94% { transform: translate(-4px, 0); opacity: 0.8; }
  96% { transform: none; opacity: 0; }
}
@keyframes glitch-2 {
  0%, 90%, 100% { transform: none; opacity: 0; }
  93% { transform: translate(-3px, 0); opacity: 1; }
  95% { transform: translate(3px, 0); opacity: 0.6; }
  97% { transform: none; opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .glitch-text, .glitch-copy-1, .glitch-copy-2 { animation: none; }
  .glitch-copy-1, .glitch-copy-2 { display: none; }
}
</style>
