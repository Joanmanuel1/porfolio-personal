<template>
  <header
    class="sticky top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'nav-scrolled' : 'nav-top'"
  >
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex justify-between items-center h-16">
      <!-- Logo -->
      <RouterLink
        to="/"
        class="font-display font-bold text-lg tracking-tight text-white hover:text-cyan-300 transition-colors duration-200 flex items-center gap-2"
      >
        <span class="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-xs font-black text-white shadow-lg">JM</span>
        <span class="hidden sm:block"><span class="gradient-text">Joan</span> Romero</span>
      </RouterLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-1" aria-label="Primary">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
          :aria-current="$route.path === link.to ? 'page' : undefined"
        >
          {{ t(link.key) }}
        </RouterLink>
        <div class="w-px h-4 bg-white/10 mx-2"></div>
        <LanguageSwitcher />
        <a
          href="/CV-JoanManuelRomero.pdf"
          download
          class="ml-2 px-4 py-1.5 rounded-lg text-sm font-semibold bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 hover:text-cyan-200 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-200"
        >
          CV
        </a>
        <button
          @click="printPage"
          class="ml-1 w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-300 hover:bg-white/5 border border-white/8 transition-all"
          :title="t('a11y.printCv')"
        >
          <i class="pi pi-print text-xs"></i>
        </button>
      </nav>

      <!-- Mobile controls -->
      <div class="flex items-center gap-3 md:hidden">
        <LanguageSwitcher />
        <button
          @click="toggleMenu"
          class="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
          :aria-label="t('a11y.menuToggle')"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-nav"
        >
          <i :class="isMenuOpen ? 'pi pi-times' : 'pi pi-bars'" class="text-sm"></i>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <nav
        v-if="isMenuOpen"
        id="mobile-nav"
        class="md:hidden border-t border-white/5 bg-[#0d1120]/95 backdrop-blur-xl"
      >
        <div class="px-5 py-4 flex flex-col gap-1">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            @click="closeMenu"
            class="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            :aria-current="$route.path === link.to ? 'page' : undefined"
          >
            {{ t(link.key) }}
          </RouterLink>
          <a
            href="/CV-JoanManuelRomero.pdf"
            download
            class="mt-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-cyan-300 hover:bg-cyan-500/10 transition-all"
          >
            {{ t('home.cta.downloadCv') }}
          </a>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()
const route = useRoute()
const isMenuOpen = ref(false)
const scrolled = ref(false)

const navLinks = [
  { to: '/projects', key: 'nav.projects' },
  { to: '/experience', key: 'nav.experience' },
  { to: '/education', key: 'nav.education' },
  { to: '/about', key: 'nav.about' },
  { to: '/contact', key: 'nav.contact' },
]

const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)
const closeMenu = () => (isMenuOpen.value = false)
const printPage = () => window.print()

let rafId = 0
const onScroll = () => {
  cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(() => { scrolled.value = window.scrollY > 20 })
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(rafId) })
</script>

<style scoped>
.nav-top {
  background: transparent;
  border-bottom: 1px solid transparent;
}
.nav-scrolled {
  background: rgba(11, 15, 25, 0.85);
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 1px 40px -10px rgba(0, 0, 0, 0.5);
}

.nav-link.router-link-active {
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
