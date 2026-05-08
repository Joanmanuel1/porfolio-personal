<template>
  <div
    class="inline-flex items-center rounded-lg border border-white/10 bg-white/5 p-0.5 backdrop-blur"
    role="group"
    :aria-label="t('a11y.switchLanguage')"
  >
    <button
      v-for="code in locales"
      :key="code"
      type="button"
      :aria-pressed="current === code"
      class="px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      :class="current === code
        ? 'bg-cyan-600 text-white shadow-sm shadow-cyan-500/30'
        : 'text-slate-500 hover:text-slate-300'"
      @click="setLocale(code)"
    >
      {{ code }}
    </button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'

const { t } = useI18n()
const { current, setLocale, locales } = useLocale()
</script>
