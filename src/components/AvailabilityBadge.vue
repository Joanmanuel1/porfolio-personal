<template>
  <span
    class="inline-flex items-center gap-2 rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-300 backdrop-blur"
  >
    <span class="relative flex h-2 w-2">
      <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
      <span class="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
    </span>
    {{ t('common.available') }}
  </span>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
