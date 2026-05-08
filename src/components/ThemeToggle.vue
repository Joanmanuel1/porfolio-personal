<template>
  <button
    @click="toggle"
    class="w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-200"
    :class="isDark
      ? 'text-slate-400 hover:text-yellow-300 hover:bg-yellow-400/8 border-white/8 hover:border-yellow-400/25'
      : 'text-amber-500 hover:text-amber-400 hover:bg-amber-400/10 border-black/10 hover:border-amber-400/30'"
    :title="isDark ? t('common.lightMode') : t('common.darkMode')"
    :aria-label="isDark ? t('common.lightMode') : t('common.darkMode')"
  >
    <Transition name="theme-icon" mode="out-in">
      <i v-if="isDark" key="sun" class="pi pi-sun text-xs"></i>
      <i v-else key="moon" class="pi pi-moon text-xs"></i>
    </Transition>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const isDark = ref(true)

function applyTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  localStorage.setItem('theme', dark ? 'dark' : 'light')
  isDark.value = dark
}

function toggle() {
  applyTheme(!isDark.value)
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(saved ? saved === 'dark' : prefersDark)
})
</script>

<style scoped>
.theme-icon-enter-active,
.theme-icon-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.theme-icon-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.6);
}
.theme-icon-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.6);
}
</style>
