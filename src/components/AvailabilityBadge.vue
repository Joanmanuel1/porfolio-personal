<template>
  <span class="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-400 backdrop-blur">
    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot flex-shrink-0"></span>
    {{ t('common.available') }}
  </span>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
