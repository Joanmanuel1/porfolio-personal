<template>
  <header class="sticky top-0 z-50 bg-gray-800/95 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-gray-800/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 gap-4">
      <RouterLink to="/" class="text-xl sm:text-2xl font-display font-bold text-white tracking-tight hover:text-green-400 transition duration-300">
        <span class="text-green-500">Joan Manuel</span> Romero
      </RouterLink>

      <nav class="hidden md:flex items-center space-x-6" :aria-label="t('a11y.menuToggle')">
        <RouterLink to="/projects" class="nav-item text-gray-300 hover:text-green-400 font-medium transition duration-300">
          {{ t('nav.projects') }}
        </RouterLink>
        <RouterLink to="/experience" class="nav-item text-gray-300 hover:text-green-400 font-medium transition duration-300">
          {{ t('nav.experience') }}
        </RouterLink>
        <RouterLink to="/education" class="nav-item text-gray-300 hover:text-green-400 font-medium transition duration-300">
          {{ t('nav.education') }}
        </RouterLink>
        <RouterLink to="/about" class="nav-item text-gray-300 hover:text-green-400 font-medium transition duration-300">
          {{ t('nav.about') }}
        </RouterLink>
        <RouterLink to="/contact" class="nav-item text-gray-300 hover:text-green-400 font-medium transition duration-300">
          {{ t('nav.contact') }}
        </RouterLink>
        <LanguageSwitcher />
      </nav>

      <div class="flex items-center gap-3 md:hidden">
        <LanguageSwitcher />
        <button
          @click="toggleMenu"
          class="text-white p-2"
          :aria-label="t('a11y.menuToggle')"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-nav"
        >
          <i :class="isMenuOpen ? 'pi pi-times' : 'pi pi-bars'" class="text-2xl"></i>
        </button>
      </div>
    </div>

    <nav
      v-if="isMenuOpen"
      id="mobile-nav"
      class="md:hidden bg-gray-700 pb-4 shadow-xl border-t border-gray-600"
    >
      <div class="flex flex-col space-y-2 px-4 pt-2">
        <RouterLink to="/projects" @click="closeMenu" class="nav-item-mobile text-gray-200 hover:bg-gray-600 py-2 px-3 rounded-md font-medium transition duration-300">
          {{ t('nav.projects') }}
        </RouterLink>
        <RouterLink to="/experience" @click="closeMenu" class="nav-item-mobile text-gray-200 hover:bg-gray-600 py-2 px-3 rounded-md font-medium transition duration-300">
          {{ t('nav.experience') }}
        </RouterLink>
        <RouterLink to="/education" @click="closeMenu" class="nav-item-mobile text-gray-200 hover:bg-gray-600 py-2 px-3 rounded-md font-medium transition duration-300">
          {{ t('nav.education') }}
        </RouterLink>
        <RouterLink to="/about" @click="closeMenu" class="nav-item-mobile text-gray-200 hover:bg-gray-600 py-2 px-3 rounded-md font-medium transition duration-300">
          {{ t('nav.about') }}
        </RouterLink>
        <RouterLink to="/contact" @click="closeMenu" class="nav-item-mobile text-gray-200 hover:bg-gray-600 py-2 px-3 rounded-md font-medium transition duration-300">
          {{ t('nav.contact') }}
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()
const isMenuOpen = ref(false)
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)
const closeMenu = () => (isMenuOpen.value = false)
</script>

<style scoped>
.nav-item.router-link-exact-active {
  color: #34d399;
  border-bottom: 2px solid #34d399;
  padding-bottom: 0.25rem;
}

.nav-item-mobile.router-link-exact-active {
  background-color: #10b981;
  color: white;
}
</style>
