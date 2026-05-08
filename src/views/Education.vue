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
        <p class="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3">{{ t('nav.education') }}</p>
        <h1 class="text-4xl sm:text-5xl font-display font-black text-white tracking-tightest">
          {{ t('education.header') }}
        </h1>
      </div>

      <div class="space-y-5">
        <article
          v-for="(item, idx) in items"
          :key="item.key"
          class="glass glass-hover rounded-2xl p-6 sm:p-7"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: idx * 100, duration: 550 } }"
        >
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div>
              <h2 class="text-lg sm:text-xl font-display font-bold text-white tracking-tight leading-tight">
                {{ t(`education.items.${item.key}.title`) }}
              </h2>
              <p class="text-sm text-slate-400 mt-1 flex items-center gap-1.5">
                <i class="pi pi-building text-indigo-400 text-xs"></i>
                {{ t(`education.items.${item.key}.institution`) }}
              </p>
            </div>
            <div class="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
              <span
                class="text-xs font-semibold px-2.5 py-1 rounded-full border"
                :style="{ color: item.color, borderColor: item.color + '40', background: item.color + '12' }"
              >
                {{ t(`education.kinds.${item.kind}`) }}
              </span>
              <span class="text-xs text-slate-600 flex items-center gap-1">
                <i class="pi pi-calendar text-[10px]"></i>
                {{ t(`education.items.${item.key}.period`) }}
              </span>
            </div>
          </div>

          <div class="border-t border-white/5 pt-4">
            <div v-if="item.contentsKey" class="mb-4">
              <p class="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-2">{{ t('education.contentsLabel') }}</p>
              <ul class="space-y-1">
                <li
                  v-for="(c, i) in tm(item.contentsKey)"
                  :key="i"
                  class="text-sm text-slate-400 flex items-start gap-2"
                >
                  <span class="mt-1.5 w-1 h-1 rounded-full bg-indigo-500/50 flex-shrink-0"></span>
                  {{ c }}
                </li>
              </ul>
            </div>

            <p class="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-2">{{ t('education.skillsLabel') }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="s in item.skills"
                :key="s.value"
                class="tech-pill"
              >{{ s.value }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
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
    color: '#4ade80',
    skills: [
      { value: 'Java' }, { value: 'Angular' }, { value: 'SQL' }, { value: 'Jira' }, { value: 'Trello' },
    ],
  },
  {
    key: 'technician',
    kind: 'technical',
    color: '#60a5fa',
    skills: [
      { value: 'C#' }, { value: 'Angular' }, { value: 'SQL' }, { value: 'Firebase' }, { value: 'Jira' },
    ],
  },
  {
    key: 'qa',
    kind: 'certification',
    color: '#facc15',
    contentsKey: 'education.items.qa.contents',
    skills: [
      { value: 'SQL' }, { value: 'Jira' }, { value: 'Trello' },
    ],
  },
]
</script>
