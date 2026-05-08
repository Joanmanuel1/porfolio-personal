<template>
  <section class="section-pad">
    <div class="max-w-6xl mx-auto">

      <!-- Header -->
      <div
        class="mb-16 sm:mb-20"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <p class="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3">{{ t('about.credentials') }}</p>
        <h1 class="text-4xl sm:text-5xl font-display font-black text-white tracking-tightest">
          {{ t('about.header') }}
        </h1>
      </div>

      <!-- Bio card -->
      <div
        class="glass glass-hover rounded-2xl p-6 sm:p-8 mb-14"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 80, duration: 550 } }"
      >
        <p class="text-base sm:text-lg text-slate-300 leading-relaxed mb-4">
          <i18n-t keypath="about.bio.intro" tag="span">
            <template #qa><span class="text-white font-semibold">{{ t('about.bio.qa') }}</span></template>
            <template #funcional><span class="text-white font-semibold">{{ t('about.bio.funcional') }}</span></template>
            <template #frontend><span class="gradient-text font-bold">{{ t('about.bio.frontend') }}</span></template>
            <template #quality><span class="text-indigo-300 font-semibold">{{ t('about.bio.quality') }}</span></template>
            <template #ux><span class="text-indigo-300 font-semibold">{{ t('about.bio.ux') }}</span></template>
          </i18n-t>
        </p>

        <p class="text-slate-400 italic leading-relaxed border-l-2 border-indigo-500/60 pl-4">
          {{ t('about.bio.specialty') }}
        </p>

        <p class="text-sm text-slate-500 mt-4 leading-relaxed">
          <i18n-t keypath="about.bio.values" tag="span">
            <template #communication><span class="text-slate-400 font-medium">{{ t('about.bio.communication') }}</span></template>
            <template #responsibility><span class="text-slate-400 font-medium">{{ t('about.bio.responsibility') }}</span></template>
            <template #learning><span class="text-slate-400 font-medium">{{ t('about.bio.learning') }}</span></template>
          </i18n-t>
        </p>
      </div>

      <!-- Stack section -->
      <div
        class="mb-6"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 160, duration: 550 } }"
      >
        <p class="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3">{{ t('about.stack.title') }}</p>
        <h2 class="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mb-10">
          {{ t('about.stack.development') }}
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        <!-- Dev skills -->
        <div
          class="glass glass-hover rounded-2xl p-6 space-y-6"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 220, duration: 550 } }"
        >
          <h3 class="text-xs font-semibold tracking-widest text-indigo-400 uppercase flex items-center gap-2">
            <Code :size="13" /> {{ t('about.stack.languages') }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="s in devSkills" :key="s.label" class="tech-pill" :style="{ color: s.color, borderColor: s.color + '40', background: s.color + '14' }">{{ s.label }}</span>
          </div>

          <div class="border-t border-white/5 pt-5">
            <h3 class="text-xs font-semibold tracking-widest text-indigo-400 uppercase flex items-center gap-2 mb-3">
              <Palette :size="13" /> {{ t('about.stack.ui') }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="s in uiSkills" :key="s.label" class="tech-pill" :style="{ color: s.color, borderColor: s.color + '40', background: s.color + '14' }">{{ s.label }}</span>
            </div>
          </div>

          <div class="border-t border-white/5 pt-5">
            <h3 class="text-xs font-semibold tracking-widest text-indigo-400 uppercase flex items-center gap-2 mb-3">
              <Database :size="13" /> {{ t('about.stack.backend') }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="s in backendSkills" :key="s.label" class="tech-pill" :style="{ color: s.color, borderColor: s.color + '40', background: s.color + '14' }">{{ s.label }}</span>
            </div>
          </div>
        </div>

        <!-- Process & methods -->
        <div
          class="glass glass-hover rounded-2xl p-6 space-y-6"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 550 } }"
        >
          <div v-for="group in processGroups" :key="group.key">
            <h3 class="text-xs font-semibold tracking-widest text-indigo-400 uppercase flex items-center gap-2 mb-3">
              <component :is="group.icon" :size="13" /> {{ t(group.labelKey) }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="item in group.items" :key="item" class="tech-pill">{{ item }}</span>
            </div>
            <div v-if="group.key !== 'vcs'" class="border-t border-white/5 mt-5"></div>
          </div>
        </div>
      </div>

      <!-- GitHub stats -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 380, duration: 550 } }"
      >
        <GitHubStats />
      </div>

    </div>
  </section>
</template>

<script setup>
import { Code, Palette, Database, MousePointer2, Lightbulb, Trello, GitBranch } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { useSeo } from '@/composables/useSeo'
import GitHubStats from '@/components/GitHubStats.vue'

const { t } = useI18n()

useSeo({
  titleKey: 'about.meta.title',
  descKey: 'about.meta.description',
})

const devSkills = [
  { label: 'Angular',     color: '#f87171' },
  { label: 'Vue 3',       color: '#4ade80' },
  { label: 'JavaScript',  color: '#facc15' },
  { label: 'TypeScript',  color: '#60a5fa' },
]

const uiSkills = [
  { label: 'Tailwind CSS', color: '#67e8f9' },
  { label: 'PrimeVue',     color: '#c084fc' },
  { label: 'Bootstrap',    color: '#818cf8' },
  { label: 'Vuetify',      color: '#60a5fa' },
]

const backendSkills = [
  { label: 'Node.js',    color: '#86efac' },
  { label: 'PostgreSQL', color: '#93c5fd' },
  { label: 'Firebase',   color: '#fb923c' },
  { label: 'REST APIs',  color: '#a78bfa' },
]

const processGroups = [
  {
    key: 'qa',
    icon: MousePointer2,
    labelKey: 'about.stack.qa',
    items: ['Manual Testing', 'Automated Testing', 'WCAG'],
  },
  {
    key: 'analysis',
    icon: Lightbulb,
    labelKey: 'about.stack.analysis',
    items: ['Requirements', 'User Stories', 'Documentation'],
  },
  {
    key: 'methods',
    icon: Trello,
    labelKey: 'about.stack.methods',
    items: ['Scrum', 'Jira', 'Postman'],
  },
  {
    key: 'vcs',
    icon: GitBranch,
    labelKey: 'about.stack.vcs',
    items: ['Git', 'GitHub', 'GitLab'],
  },
]
</script>
