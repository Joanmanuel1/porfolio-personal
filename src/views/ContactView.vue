<template>
  <section class="max-w-2xl mx-auto p-4 sm:p-8 lg:p-12">
    <header class="text-center mb-10">
      <h2 class="text-4xl lg:text-5xl font-extrabold text-white mb-4">
        {{ t('contact.header') }}
      </h2>
      <p class="text-xl text-blue-100 font-light">
        {{ t('contact.subtitle') }}
      </p>
    </header>

    <div class="bg-gray-800/60 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700 backdrop-blur space-y-6">
      <h3 class="text-xl font-bold text-white flex items-center">
        <Users :size="20" class="mr-3 text-green-400" /> {{ t('contact.channelsTitle') }}
      </h3>

      <div>
        <p class="text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">
          {{ t('contact.emailLabel') }}
        </p>
        <a
          href="mailto:joanmanuelromero100@gmail.com"
          class="inline-flex items-center gap-2 text-base sm:text-lg text-green-400 hover:text-green-300 transition group font-extrabold break-all"
        >
          <AtSign :size="18" class="flex-shrink-0 group-hover:scale-110 transition" />
          <span class="underline underline-offset-4 decoration-green-400">
            joanmanuelromero100@gmail.com
          </span>
        </a>
      </div>

      <div class="pt-4 border-t border-gray-700">
        <p class="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">
          {{ t('contact.profilesLabel') }}
        </p>
        <div class="flex flex-col gap-2">
          <a
            href="https://www.linkedin.com/in/joanmanuelromero/"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition p-2 rounded-lg hover:bg-gray-700/50"
          >
            <i class="pi pi-linkedin text-xl"></i>
            <span class="font-medium">LinkedIn</span>
          </a>
          <a
            href="https://github.com/Joanmanuel1"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-3 text-gray-300 hover:text-white transition p-2 rounded-lg hover:bg-gray-700/50"
          >
            <i class="pi pi-github text-xl"></i>
            <span class="font-medium">GitHub</span>
          </a>
        </div>
      </div>

      <p class="text-sm text-gray-400 flex items-center pt-2 border-t border-gray-700">
        <MapPin :size="16" class="mr-2 text-green-400" />
        {{ t('contact.location') }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { Users, AtSign, MapPin } from 'lucide-vue-next'
import { useSeo } from '@/composables/useSeo'

const { t } = useI18n()

useSeo({
  titleKey: 'contact.meta.title',
  descKey: 'contact.meta.description',
})
</script>
