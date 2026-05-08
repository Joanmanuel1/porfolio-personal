<template>
  <section class="max-w-4xl mx-auto p-4 sm:p-8 lg:p-12">
    <header class="text-center mb-8 sm:mb-12">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
        {{ t('education.header') }}
      </h2>
    </header>

    <div class="space-y-6 sm:space-y-8">
      <article
        v-for="item in items"
        :key="item.key"
        class="bg-white p-5 sm:p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300"
        :class="`border-l-4 ${item.color}`"
      >
        <div class="flex flex-col sm:flex-row justify-between items-start mb-2">
          <h3 class="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
            {{ t(`education.items.${item.key}.title`) }}
          </h3>
          <p class="text-sm font-semibold px-3 py-1 rounded-full self-start sm:self-auto" :class="item.kindClass">
            {{ t(`education.kinds.${item.kind}`) }}
          </p>
        </div>

        <p class="text-base sm:text-lg font-medium text-gray-600 mb-2">
          <i class="pi pi-building mr-2 text-gray-500"></i>
          {{ t(`education.items.${item.key}.institution`) }}
        </p>

        <p class="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
          <i class="pi pi-calendar mr-2 text-gray-500"></i>
          {{ t(`education.items.${item.key}.period`) }}
        </p>

        <div class="pt-3 sm:pt-4 border-t border-gray-200">
          <div v-if="item.contentsKey" class="pb-3 mb-3 border-b border-gray-100">
            <p class="font-semibold text-gray-700 mb-2">{{ t('education.contentsLabel') }}:</p>
            <ul class="list-disc list-inside text-gray-700 ml-4 space-y-1 text-sm">
              <li v-for="(c, i) in tm(item.contentsKey)" :key="i">{{ c }}</li>
            </ul>
          </div>

          <p class="font-semibold text-gray-700 mb-2">{{ t('education.skillsLabel') }}:</p>
          <div class="flex flex-wrap gap-2">
            <Tag v-for="s in item.skills" :key="s.value" :value="s.value" :icon="s.icon" :severity="s.severity" class="font-medium" />
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import Tag from 'primevue/tag'
import { useI18n } from 'vue-i18n'
import { useSeo } from '@/composables/useSeo'

const { t, tm } = useI18n()

useSeo({
  titleKey: 'education.meta.title',
  descKey: 'education.meta.description',
})

const items = [
  {
    key: 'degree',
    kind: 'university',
    color: 'border-green-500',
    kindClass: 'text-green-600 bg-green-100',
    skills: [
      { value: 'Java', icon: 'pi pi-code', severity: 'success' },
      { value: 'Angular', icon: 'pi pi-code', severity: 'success' },
      { value: 'SQL', icon: 'pi pi-database', severity: 'info' },
      { value: 'Jira', icon: 'pi pi-list', severity: 'warn' },
      { value: 'Trello', icon: 'pi pi-list', severity: 'warn' },
    ],
  },
  {
    key: 'technician',
    kind: 'technical',
    color: 'border-blue-500',
    kindClass: 'text-blue-600 bg-blue-100',
    skills: [
      { value: 'C#', icon: 'pi pi-code', severity: 'success' },
      { value: 'Angular', icon: 'pi pi-code', severity: 'success' },
      { value: 'SQL', icon: 'pi pi-database', severity: 'info' },
      { value: 'Firebase', icon: 'pi pi-database', severity: 'info' },
      { value: 'Jira', icon: 'pi pi-list', severity: 'warn' },
      { value: 'Trello', icon: 'pi pi-list', severity: 'warn' },
    ],
  },
  {
    key: 'qa',
    kind: 'certification',
    color: 'border-yellow-500',
    kindClass: 'text-yellow-600 bg-yellow-100',
    contentsKey: 'education.items.qa.contents',
    skills: [
      { value: 'SQL', icon: 'pi pi-database', severity: 'info' },
      { value: 'Jira', icon: 'pi pi-list', severity: 'warn' },
      { value: 'Trello', icon: 'pi pi-list', severity: 'warn' },
    ],
  },
]
</script>
