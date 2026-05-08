<template>
  <section class="section-pad">
    <div class="max-w-4xl mx-auto">

      <!-- Header -->
      <div
        class="mb-16 sm:mb-20"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <p class="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">{{ t('experience.subtitle') }}</p>
        <h1 class="text-4xl sm:text-5xl font-display font-black text-white tracking-tightest">
          {{ t('experience.header') }}
        </h1>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-5 sm:left-7 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-emerald-500/30 to-transparent" aria-hidden="true"></div>

        <div class="space-y-10">
          <article
            v-for="(item, idx) in items"
            :key="item.key"
            class="relative pl-14 sm:pl-20"
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: idx * 120, duration: 550 } }"
          >
            <!-- Timeline dot -->
            <div class="absolute left-[13px] sm:left-[23px] top-6 w-5 h-5 rounded-full border-2 border-cyan-500 bg-canvas flex items-center justify-center" aria-hidden="true">
              <div class="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
            </div>

            <!-- Card -->
            <div class="glass glass-hover rounded-2xl p-6 sm:p-7">
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h2 class="text-lg sm:text-xl font-display font-bold text-white tracking-tight">
                    {{ t(`experience.items.${item.key}.role`) }}
                  </h2>
                  <p class="text-sm text-slate-400 mt-0.5 flex items-center gap-1.5">
                    <i class="pi pi-building text-cyan-400 text-xs"></i>
                    {{ t(`experience.items.${item.key}.company`) }}
                    <span class="text-slate-600">·</span>
                    <span class="text-slate-500">{{ t('experience.fullTime') }}</span>
                  </p>
                </div>
                <div class="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                  <span class="text-xs font-medium text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/8">
                    {{ t(`experience.items.${item.key}.period`) }}
                  </span>
                  <span class="text-xs text-slate-600 flex items-center gap-1">
                    <i class="pi pi-map-marker text-[10px]"></i>
                    {{ t(`experience.items.${item.key}.location`) }} · {{ t(`experience.${item.modality}`) }}
                  </span>
                </div>
              </div>

              <!-- Key tech -->
              <p class="text-xs text-slate-500 mb-3 font-medium">
                <span class="text-cyan-400">{{ t('experience.keyTech') }}:</span>
                {{ t(`experience.items.${item.key}.tech`) }}
              </p>

              <!-- Bullets -->
              <ul class="space-y-1.5 mb-5">
                <li
                  v-for="(b, i) in tm(`experience.items.${item.key}.bullets`)"
                  :key="i"
                  class="text-sm text-slate-400 leading-relaxed flex items-start gap-2"
                >
                  <span class="mt-1.5 w-1 h-1 rounded-full bg-cyan-500/60 flex-shrink-0"></span>
                  {{ b }}
                </li>
              </ul>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in item.tags"
                  :key="tag.value"
                  class="tech-pill"
                >
                  {{ tag.value }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
      { value: 'Vue 3' }, { value: 'JavaScript' }, { value: 'PrimeVue' },
      { value: 'Tailwind' }, { value: 'Jira' }, { value: 'GitLab' },
    ],
  },
  {
    key: 'analyst',
    modality: 'remote',
    tags: [
      { value: 'Postman' }, { value: 'SQL' }, { value: 'Jira' }, { value: 'Scrum' },
    ],
  },
  {
    key: 'qa',
    modality: 'hybrid',
    tags: [
      { value: 'Robot Framework' }, { value: 'Python' }, { value: 'Selenium' },
      { value: 'Postman' }, { value: 'SQL' }, { value: 'Jira' },
    ],
  },
]
</script>
