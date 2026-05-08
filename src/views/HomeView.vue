<template>
  <section class="relative min-h-[92vh] flex items-center overflow-hidden">
    <!-- Section-specific glow behind content -->
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-indigo-600/8 blur-[120px] pointer-events-none" aria-hidden="true"></div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 sm:py-28">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        <!-- Left — text -->
        <div class="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">

          <!-- Availability badge -->
          <div
            class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold mb-8 tracking-wide"
            v-motion
            :initial="{ opacity: 0, y: -10 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot"></span>
            {{ t('common.available') }}
          </div>

          <!-- Headline -->
          <h1
            class="font-display font-black tracking-tightest mb-5 leading-[0.95]"
            v-motion
            :initial="{ opacity: 0, y: 24 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 80, duration: 600 } }"
          >
            <span class="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white">
              {{ t('home.hero.greeting') }}
            </span>
            <span class="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl gradient-text mt-1">
              Joan Manuel<br class="hidden lg:block" /> Romero
            </span>
          </h1>

          <!-- Role -->
          <p
            class="text-lg sm:text-xl text-slate-300 font-medium mb-4 tracking-tight"
            v-motion
            :initial="{ opacity: 0, y: 16 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
          >
            {{ t('home.hero.title') }}
          </p>

          <!-- Tagline -->
          <p
            class="text-slate-500 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 340, duration: 600 } }"
          >
            {{ t('home.hero.subtitle') }}
          </p>

          <!-- CTAs -->
          <div
            class="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            v-motion
            :initial="{ opacity: 0, y: 16 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 480, duration: 500 } }"
          >
            <RouterLink
              to="/projects"
              class="cta-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              {{ t('home.cta.viewProjects') }}
              <i class="pi pi-arrow-right text-xs"></i>
            </RouterLink>
            <a
              href="https://www.linkedin.com/in/joanmanuelromero/"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <i class="pi pi-linkedin text-blue-400"></i>
              LinkedIn
            </a>
            <a
              href="/CV-JoanManuelRomero.pdf"
              download
              class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <i class="pi pi-download text-slate-400"></i>
              CV
            </a>
          </div>

          <!-- Credentials footnote -->
          <p
            class="mt-8 text-xs text-slate-600 flex items-center gap-2 justify-center lg:justify-start"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 650, duration: 600 } }"
          >
            <i class="pi pi-verified text-indigo-500"></i>
            {{ t('home.hero.credentials') }}
          </p>
        </div>

        <!-- Right — avatar -->
        <div
          class="flex-shrink-0 flex justify-center lg:justify-end"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: 150, duration: 700, ease: 'easeOut' } }"
        >
          <div class="relative">
            <!-- Outer glow ring -->
            <div class="absolute inset-[-16px] rounded-full bg-gradient-to-br from-indigo-500/20 via-violet-500/15 to-cyan-500/10 blur-2xl animate-float"></div>
            <!-- Mid ring -->
            <div class="absolute inset-[-6px] rounded-full border border-indigo-500/20"></div>
            <!-- Inner ring -->
            <div class="absolute inset-[-2px] rounded-full border border-white/10"></div>
            <!-- Avatar -->
            <img
              src="../assets/img/perfil.jpg"
              :alt="t('home.hero.name')"
              loading="eager"
              decoding="async"
              class="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover shadow-2xl"
            />
            <!-- Floating tech chips -->
            <div class="absolute -bottom-3 -left-8 glass px-3 py-1.5 rounded-full text-xs font-semibold text-violet-300 border border-violet-500/25 shadow-xl animate-float" style="animation-delay:1s">Vue 3</div>
            <div class="absolute top-6 -right-10 glass px-3 py-1.5 rounded-full text-xs font-semibold text-cyan-300 border border-cyan-500/25 shadow-xl animate-float" style="animation-delay:2.5s">Angular</div>
            <div class="absolute -top-2 left-2 glass px-3 py-1.5 rounded-full text-xs font-semibold text-indigo-300 border border-indigo-500/25 shadow-xl animate-float" style="animation-delay:0.5s">TypeScript</div>
          </div>
        </div>
      </div>

      <!-- Scroll hint -->
      <div
        class="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 900, duration: 600 } }"
        aria-hidden="true"
      >
        <div class="w-px h-10 bg-gradient-to-b from-transparent to-indigo-500/50"></div>
        <div class="w-5 h-8 rounded-full border border-white/15 flex items-center justify-center">
          <div class="w-1 h-2 rounded-full bg-white/40 animate-bounce"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useSeo } from '@/composables/useSeo'

const { t } = useI18n()

useSeo({
  titleKey: 'home.meta.title',
  descKey: 'home.meta.description',
})
</script>
