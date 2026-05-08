<template>
  <footer class="bg-gray-800 text-white p-3">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
      <p class="text-sm text-gray-400">
        {{ t('footer.rights', { year: currentYear }) }}
      </p>

      <div class="flex space-x-6">
        <a
          href="https://github.com/Joanmanuel1"
          target="_blank"
          rel="noopener"
          class="text-gray-400 hover:text-green-500 transition duration-300 text-xl"
          aria-label="GitHub"
        >
          <i class="pi pi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/joanmanuelromero/"
          target="_blank"
          rel="noopener"
          class="text-gray-400 hover:text-green-500 transition duration-300 text-xl"
          aria-label="LinkedIn"
        >
          <i class="pi pi-linkedin"></i>
        </a>
        <a
          href="mailto:joanmanuelromero100@gmail.com"
          class="text-gray-400 hover:text-green-500 transition duration-300 text-xl"
          aria-label="Email"
        >
          <i class="pi pi-envelope"></i>
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
</script>
