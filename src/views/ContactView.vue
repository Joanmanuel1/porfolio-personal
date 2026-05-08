<template>
  <section class="section-pad">
    <div class="max-w-2xl mx-auto">

      <!-- Header -->
      <div
        class="mb-12"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <p class="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3">{{ t('nav.contact') }}</p>
        <h1 class="text-4xl sm:text-5xl font-display font-black text-white tracking-tightest mb-4">
          {{ t('contact.header') }}
        </h1>
        <p class="text-slate-400 text-lg leading-relaxed">
          {{ t('contact.subtitle') }}
        </p>
      </div>

      <!-- Contact card -->
      <div
        class="glass glass-hover rounded-2xl p-6 sm:p-8 space-y-6"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 100, duration: 550 } }"
      >
        <!-- Email -->
        <div>
          <p class="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">{{ t('contact.emailLabel') }}</p>
          <a
            href="mailto:joanmanuelromero100@gmail.com"
            class="inline-flex items-center gap-3 text-indigo-300 hover:text-indigo-200 font-semibold text-base sm:text-lg transition-colors group"
          >
            <span class="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/25 transition-colors">
              <i class="pi pi-envelope text-sm text-indigo-400"></i>
            </span>
            joanmanuelromero100@gmail.com
          </a>
        </div>

        <div class="border-t border-white/5 pt-6">
          <p class="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">{{ t('contact.profilesLabel') }}</p>
          <div class="flex flex-col gap-3">
            <a
              v-for="profile in profiles"
              :key="profile.href"
              :href="profile.href"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-white/10 transition-all group"
            >
              <span
                class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                :class="profile.iconBg"
              >
                <i :class="profile.icon" class="text-sm" :style="{ color: profile.iconColor }"></i>
              </span>
              <div>
                <p class="text-sm font-semibold text-white">{{ profile.label }}</p>
                <p class="text-xs text-slate-500">{{ profile.handle }}</p>
              </div>
              <i class="pi pi-arrow-up-right ml-auto text-slate-600 group-hover:text-slate-400 transition-colors text-xs"></i>
            </a>
          </div>
        </div>

        <div class="border-t border-white/5 pt-5">
          <p class="text-sm text-slate-600 flex items-center gap-2">
            <i class="pi pi-map-marker text-indigo-400 text-xs"></i>
            {{ t('contact.location') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useSeo } from '@/composables/useSeo'

const { t } = useI18n()

useSeo({
  titleKey: 'contact.meta.title',
  descKey: 'contact.meta.description',
})

const profiles = [
  {
    href: 'https://www.linkedin.com/in/joanmanuelromero/',
    label: 'LinkedIn',
    handle: '/in/joanmanuelromero',
    icon: 'pi pi-linkedin',
    iconColor: '#60a5fa',
    iconBg: 'bg-blue-500/10 border border-blue-500/20',
  },
  {
    href: 'https://github.com/Joanmanuel1',
    label: 'GitHub',
    handle: 'Joanmanuel1',
    icon: 'pi pi-github',
    iconColor: '#e2e8f0',
    iconBg: 'bg-white/5 border border-white/10',
  },
]
</script>
