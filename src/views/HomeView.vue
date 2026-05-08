<template>
  <section class="h-full flex items-center justify-center text-center p-4 sm:p-8 lg:p-12 overflow-hidden relative">
    <div class="relative z-10 flex flex-col items-center justify-center h-full w-full p-0 sm:p-8">
      <div
        class="relative z-10 w-full max-w-5xl p-5 sm:p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md border border-gray-700"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <div class="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
          <div class="flex-shrink-0 relative">
            <div class="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-green-400/40 to-blue-500/40 blur-2xl"></div>
            <img
              src="../assets/img/perfil.jpg"
              :alt="t('home.hero.name')"
              loading="eager"
              decoding="async"
              class="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 rounded-full object-cover border-4 border-gray-600 shadow-lg"
            />
          </div>

          <div class="text-center md:text-left flex-1">
            <div class="mb-3 flex justify-center md:justify-start">
              <AvailabilityBadge />
            </div>

            <h1
              class="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-3 tracking-tight"
              v-motion
              :initial="{ opacity: 0, y: 16 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 100, duration: 500 } }"
            >
              {{ t('home.hero.greeting') }}
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">
                {{ t('home.hero.name') }}
              </span>
            </h1>

            <p
              class="text-base sm:text-lg font-light text-gray-200 mb-2"
              v-motion
              :initial="{ opacity: 0, y: 12 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 250, duration: 500 } }"
            >
              {{ t('home.hero.title') }}
            </p>

            <p
              class="text-base text-gray-300 mb-2 leading-relaxed"
              v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1, transition: { delay: 400, duration: 600 } }"
            >
              {{ t('home.hero.subtitle') }}
            </p>

            <p
              class="text-sm text-blue-100 mb-2 leading-relaxed"
              v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1, transition: { delay: 550, duration: 600 } }"
            >
              {{ t('home.hero.focus') }}
            </p>

            <p
              class="text-sm text-blue-100 leading-relaxed flex items-center justify-center md:justify-start gap-2"
              v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1, transition: { delay: 700, duration: 600 } }"
            >
              <i class="pi pi-graduation-cap text-green-400"></i>
              {{ t('home.hero.credentials') }}
            </p>
          </div>
        </div>

        <div
          class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 850, duration: 500 } }"
        >
          <a href="/CV-JoanManuelRomero.pdf" download="CV-JoanManuelRomero.pdf">
            <Button :label="t('home.cta.downloadCv')" icon="pi pi-download" severity="secondary" raised rounded size="small"
              class="w-full sm:w-auto transition duration-300 hover:shadow-xl hover:scale-[1.05]" />
          </a>
          <a href="https://www.linkedin.com/in/joanmanuelromero/" target="_blank" rel="noopener">
            <Button :label="t('home.cta.linkedin')" icon="pi pi-linkedin" severity="info" raised rounded size="small"
              class="w-full sm:w-auto transition duration-300 hover:shadow-xl hover:scale-[1.05]" />
          </a>
          <RouterLink to="/projects">
            <Button :label="t('home.cta.viewProjects')" icon="pi pi-check-square" severity="success" raised rounded size="small"
              class="w-full sm:w-auto transition duration-300 hover:shadow-xl hover:scale-[1.05]" />
          </RouterLink>
          <RouterLink to="/contact">
            <Button :label="t('home.cta.contact')" icon="pi pi-envelope" severity="contrast" raised rounded size="small"
              class="w-full sm:w-auto transition duration-300 hover:shadow-xl hover:scale-[1.05]" />
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import Button from 'primevue/button'
import { useI18n } from 'vue-i18n'
import AvailabilityBadge from '@/components/AvailabilityBadge.vue'
import { useSeo } from '@/composables/useSeo'

const { t } = useI18n()

useSeo({
  titleKey: 'home.meta.title',
  descKey: 'home.meta.description',
})
</script>

<style scoped>
.p-button-success {
  color: white !important;
}
.p-button-info {
  color: white !important;
}
.p-button-success:hover {
  color: darkgreen !important;
}
.p-button-info:hover {
  color: rgb(91, 121, 255) !important;
}
</style>
