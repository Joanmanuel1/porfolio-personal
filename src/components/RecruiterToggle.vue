<template>
  <button
    @click="toggle"
    class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200"
    :class="recruiter
      ? 'bg-emerald-500/15 border-emerald-500/35 text-emerald-300 hover:bg-emerald-500/22'
      : 'bg-white/5 border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/8'"
    :title="recruiter ? t('common.recruiterOff') : t('common.recruiterOn')"
  >
    <i class="pi pi-briefcase text-[10px]"></i>
    <span class="hidden lg:inline">{{ recruiter ? t('common.recruiterActive') : t('common.recruiterMode') }}</span>
    <span
      class="w-1.5 h-1.5 rounded-full flex-shrink-0"
      :class="recruiter ? 'bg-emerald-400 animate-pulse' : 'bg-slate-600'"
    ></span>
  </button>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRecruiterMode } from '@/composables/useRecruiterMode'

const { t } = useI18n()
const { recruiter, toggle } = useRecruiterMode()
</script>
