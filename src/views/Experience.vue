<template>
  <section class="p-4 sm:p-8 lg:p-12 min-h-screen" data-aos="fade-up">
    <div class="max-w-4xl mx-auto">
      <header class="text-center mb-8 sm:mb-12">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2">
          {{ t('experience.header') }}
        </h2>
        <p class="text-lg sm:text-xl text-white font-light">
          {{ t('experience.subtitle') }}
        </p>
      </header>

      <div class="space-y-6 sm:space-y-10">
        <article
          v-for="(item, idx) in items"
          :key="item.key"
          class="p-5 sm:p-6 rounded-xl shadow-lg border-l-4 border-green-500 bg-gray-50 transition duration-300 hover:shadow-xl"
          :style="{ '--delay': idx * 100 + 'ms' }"
        >
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
            <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-1 md:mb-0">
              {{ t(`experience.items.${item.key}.role`) }}
            </h3>
            <span class="text-xs sm:text-sm text-gray-500 font-semibold">
              <i class="pi pi-calendar mr-1"></i>
              {{ t(`experience.items.${item.key}.period`) }}
            </span>
          </div>

          <div class="flex flex-col sm:flex-row justify-between text-gray-700 mb-3 sm:mb-4 text-sm sm:text-md">
            <p class="font-medium">
              <i class="pi pi-building mr-1 text-green-500"></i>
              {{ t(`experience.items.${item.key}.company`) }} ·
              <span class="font-normal">{{ t('experience.fullTime') }}</span>
            </p>
            <p class="text-gray-500 italic mt-1 sm:mt-0 text-xs sm:text-md">
              <i class="pi pi-map-marker mr-1"></i>
              {{ t(`experience.items.${item.key}.location`) }} · {{ t(`experience.${item.modality}`) }}
            </p>
          </div>

          <div class="border-t border-gray-200 pt-3 sm:pt-4">
            <p class="text-xs sm:text-sm text-gray-800 mb-2">
              <span class="font-semibold text-green-600">{{ t('experience.keyTech') }}:</span>
              {{ t(`experience.items.${item.key}.tech`) }}
            </p>

            <ul class="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li v-for="(b, i) in tm(`experience.items.${item.key}.bullets`)" :key="i" class="text-xs sm:text-sm">
                <span class="font-semibold">{{ b }}</span>
              </li>
            </ul>

            <div class="mt-4 flex flex-wrap gap-2">
              <Tag v-for="tag in item.tags" :key="tag.value" :value="tag.value" :severity="tag.severity" class="text-xs" />
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import Tag from 'primevue/tag'
import { useI18n } from 'vue-i18n'
import { useSeo } from '@/composables/useSeo'

const { t, tm } = useI18n()

useSeo({
  titleKey: 'experience.meta.title',
  descKey: 'experience.meta.description',
})

const items = [
  {
    key: 'frontend',
    modality: 'hybrid',
    tags: [
      { value: 'Vue JS', severity: 'success' },
      { value: 'JavaScript', severity: 'success' },
      { value: 'PrimeVue', severity: 'warn' },
      { value: 'Tailwind', severity: 'warn' },
      { value: 'Jira', severity: 'info' },
      { value: 'GitLab', severity: 'danger' },
    ],
  },
  {
    key: 'analyst',
    modality: 'remote',
    tags: [
      { value: 'Postman', severity: 'warn' },
      { value: 'SQL', severity: 'warn' },
      { value: 'Jira', severity: 'info' },
      { value: 'Scrum', severity: 'info' },
    ],
  },
  {
    key: 'qa',
    modality: 'hybrid',
    tags: [
      { value: 'Robot Framework', severity: 'danger' },
      { value: 'Python', severity: 'info' },
      { value: 'Selenium', severity: 'success' },
      { value: 'Postman', severity: 'warn' },
      { value: 'SQL', severity: 'warn' },
      { value: 'Jira', severity: 'info' },
    ],
  },
]
</script>

<style scoped>
:global(.p-tag.text-xs) {
  font-size: 0.75rem !important;
  padding: 0.25rem 0.5rem !important;
}
</style>
