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
        <p class="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">{{ t('about.credentials') }}</p>
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
            <template #quality><span class="text-cyan-300 font-semibold">{{ t('about.bio.quality') }}</span></template>
            <template #ux><span class="text-cyan-300 font-semibold">{{ t('about.bio.ux') }}</span></template>
          </i18n-t>
        </p>

        <p class="text-slate-400 italic leading-relaxed border-l-2 border-cyan-500/60 pl-4">
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
        <p class="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">{{ t('about.stack.title') }}</p>
        <h2 class="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mb-10">
          {{ t('about.stack.development') }}
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        <!-- Dev skills with proficiency bars -->
        <div
          class="glass glass-hover rounded-2xl p-6 space-y-6"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 220, duration: 550 } }"
        >
          <h3 class="text-xs font-semibold tracking-widest text-cyan-400 uppercase flex items-center gap-2">
            <Code :size="13" /> {{ t('about.stack.languages') }}
          </h3>
          <div class="space-y-3">
            <div v-for="s in devSkills" :key="s.label" class="space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium" :style="{ color: s.color }">{{ s.label }}</span>
                <span class="text-xs text-slate-500">{{ t(`about.levels.${s.level}`) }}</span>
              </div>
              <div class="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div
                  class="h-full rounded-full skill-bar"
                  :style="{ width: s.pct + '%', background: `linear-gradient(90deg, ${s.color}99, ${s.color})` }"
                ></div>
              </div>
            </div>
          </div>

          <div class="border-t border-white/5 pt-5">
            <h3 class="text-xs font-semibold tracking-widest text-cyan-400 uppercase flex items-center gap-2 mb-4">
              <Palette :size="13" /> {{ t('about.stack.ui') }}
            </h3>
            <div class="space-y-3">
              <div v-for="s in uiSkills" :key="s.label" class="space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-medium" :style="{ color: s.color }">{{ s.label }}</span>
                  <span class="text-xs text-slate-500">{{ t(`about.levels.${s.level}`) }}</span>
                </div>
                <div class="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div
                    class="h-full rounded-full skill-bar"
                    :style="{ width: s.pct + '%', background: `linear-gradient(90deg, ${s.color}99, ${s.color})` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div class="border-t border-white/5 pt-5">
            <h3 class="text-xs font-semibold tracking-widest text-cyan-400 uppercase flex items-center gap-2 mb-4">
              <Database :size="13" /> {{ t('about.stack.backend') }}
            </h3>
            <div class="space-y-3">
              <div v-for="s in backendSkills" :key="s.label" class="space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-medium" :style="{ color: s.color }">{{ s.label }}</span>
                  <span class="text-xs text-slate-500">{{ t(`about.levels.${s.level}`) }}</span>
                </div>
                <div class="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div
                    class="h-full rounded-full skill-bar"
                    :style="{ width: s.pct + '%', background: `linear-gradient(90deg, ${s.color}99, ${s.color})` }"
                  ></div>
                </div>
              </div>
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
            <h3 class="text-xs font-semibold tracking-widest text-cyan-400 uppercase flex items-center gap-2 mb-3">
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

      <!-- Built with -->
      <div
        class="mt-5 glass glass-hover rounded-2xl p-6"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 460, duration: 550 } }"
      >
        <div class="flex items-center gap-2 mb-5">
          <i class="pi pi-code text-xs text-cyan-400"></i>
          <h3 class="text-xs font-semibold tracking-widest text-cyan-400 uppercase">{{ t('about.builtWith.title') }}</h3>
        </div>
        <p class="text-sm text-slate-500 mb-5 leading-relaxed">{{ t('about.builtWith.description') }}</p>
        <div class="flex flex-wrap gap-2">
          <a
            v-for="item in portfolioStack"
            :key="item.label"
            :href="item.url"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all hover:-translate-y-0.5"
            :style="{ color: item.color, borderColor: item.color + '40', background: item.color + '12' }"
          >
            <span class="w-1.5 h-1.5 rounded-full flex-shrink-0" :style="{ background: item.color }"></span>
            {{ item.label }}
          </a>
        </div>
        <p class="text-xs text-slate-600 mt-4 flex items-center gap-1.5">
          <i class="pi pi-github text-[10px]"></i>
          <a href="https://github.com/Joanmanuel1" target="_blank" rel="noopener" class="hover:text-slate-400 transition-colors">
            {{ t('about.builtWith.sourceNote') }}
          </a>
        </p>
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
  { label: 'Vue 3',       color: '#4ade80', level: 'advanced',      pct: 92 },
  { label: 'Angular',     color: '#f87171', level: 'advanced',      pct: 88 },
  { label: 'TypeScript',  color: '#60a5fa', level: 'advanced',      pct: 85 },
  { label: 'JavaScript',  color: '#facc15', level: 'expert',        pct: 95 },
]

const uiSkills = [
  { label: 'Tailwind CSS', color: '#67e8f9', level: 'expert',    pct: 93 },
  { label: 'PrimeVue',     color: '#c084fc', level: 'advanced',  pct: 88 },
  { label: 'Bootstrap',    color: '#818cf8', level: 'proficient', pct: 75 },
  { label: 'Vuetify',      color: '#60a5fa', level: 'proficient', pct: 70 },
]

const backendSkills = [
  { label: 'Node.js',    color: '#86efac', level: 'proficient', pct: 72 },
  { label: 'PostgreSQL', color: '#93c5fd', level: 'proficient', pct: 70 },
  { label: 'Firebase',   color: '#fb923c', level: 'advanced',   pct: 80 },
  { label: 'REST APIs',  color: '#a78bfa', level: 'advanced',   pct: 85 },
]

const portfolioStack = [
  { label: 'Vue 3.5',        color: '#4ade80', url: 'https://vuejs.org' },
  { label: 'Vite 5',         color: '#a78bfa', url: 'https://vitejs.dev' },
  { label: 'Tailwind CSS 3', color: '#67e8f9', url: 'https://tailwindcss.com' },
  { label: 'PrimeVue 4',     color: '#c084fc', url: 'https://primevue.org' },
  { label: 'Vue I18n 9',     color: '#fb923c', url: 'https://vue-i18n.intlify.dev' },
  { label: '@vueuse/motion', color: '#60a5fa', url: 'https://motion.vueuse.org' },
  { label: 'Lucide Vue',     color: '#94a3b8', url: 'https://lucide.dev' },
  { label: 'Space Grotesk',  color: '#f9a8d4', url: 'https://fonts.google.com/specimen/Space+Grotesk' },
  { label: 'Inter',          color: '#e2e8f0', url: 'https://rsms.me/inter/' },
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
