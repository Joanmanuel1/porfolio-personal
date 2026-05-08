<template>
  <div class="inline-flex items-center rounded-full border border-gray-600 bg-gray-800/60 p-0.5 backdrop-blur-sm"
       role="group" :aria-label="t('a11y.switchLanguage')">
    <button
      v-for="code in locales"
      :key="code"
      type="button"
      :aria-pressed="current === code"
      :class="[
        'px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400',
        current === code
          ? 'bg-green-500 text-gray-900 shadow'
          : 'text-gray-300 hover:text-white'
      ]"
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
