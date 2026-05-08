<template>
  <footer class="relative border-t border-white/5 mt-auto">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
      <p class="text-xs text-slate-600">
        {{ t('footer.rights', { year: currentYear }) }}
      </p>

      <div class="flex items-center gap-1">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener' : undefined"
          :aria-label="link.label"
          class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-600 hover:text-slate-300 hover:bg-white/5 transition-all"
        >
          <i :class="link.icon" class="text-sm"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const currentYear = computed(() => new Date().getFullYear())

const links = [
  { href: 'https://github.com/Joanmanuel1', icon: 'pi pi-github', label: 'GitHub', external: true },
  { href: 'https://www.linkedin.com/in/joanmanuelromero/', icon: 'pi pi-linkedin', label: 'LinkedIn', external: true },
  { href: 'mailto:joanmanuelromero100@gmail.com', icon: 'pi pi-envelope', label: 'Email', external: false },
]
</script>
