<template>
  <section class="section-pad">
    <div class="max-w-2xl mx-auto">

      <!-- Header -->
      <div
        class="mb-12"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <p class="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">{{ t('nav.contact') }}</p>
        <h1 class="text-4xl sm:text-5xl font-display font-black text-white tracking-tightest mb-4">
          {{ t('contact.header') }}
        </h1>
        <p class="text-slate-400 text-lg leading-relaxed">
          {{ t('contact.subtitle') }}
        </p>
      </div>

      <!-- Contact card -->
      <div
        class="glass glass-hover rounded-2xl p-6 sm:p-8 space-y-6"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 100, duration: 550 } }"
      >
        <!-- Email -->
        <div>
          <p class="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-3">{{ t('contact.emailLabel') }}</p>
          <div class="flex items-center gap-2 mb-4 p-3 rounded-xl bg-cyan-500/8 border border-cyan-500/20">
            <span class="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center flex-shrink-0">
              <i class="pi pi-envelope text-sm text-cyan-400"></i>
            </span>
            <span class="text-cyan-300 font-mono text-sm sm:text-base flex-1 truncate">{{ email }}</span>
            <button
              @click="copyEmail"
              class="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 border border-white/10 transition-all flex-shrink-0"
              :title="t('contact.copyEmail')"
            >
              <i :class="copied ? 'pi pi-check text-emerald-400' : 'pi pi-copy'" class="text-xs"></i>
            </button>
          </div>
          <div class="flex flex-wrap gap-2">
            <a :href="mailtoLink" class="cta-primary inline-flex text-sm">
              <i class="pi pi-send"></i>
              {{ t('contact.emailCta') }}
            </a>
            <a
              :href="whatsappLink"
              target="_blank"
              rel="noopener"
              class="cta-secondary inline-flex text-sm"
            >
              <i class="pi pi-whatsapp text-emerald-400"></i>
              WhatsApp
            </a>
          </div>
        </div>

        <div class="border-t border-white/5 pt-6">
          <p class="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">{{ t('contact.profilesLabel') }}</p>
          <div class="flex flex-col gap-3">
            <a
              v-for="profile in profiles"
              :key="profile.href"
              :href="profile.href"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-white/10 transition-all group"
            >
              <span
                class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                :class="profile.iconBg"
              >
                <i :class="profile.icon" class="text-sm" :style="{ color: profile.iconColor }"></i>
              </span>
              <div>
                <p class="text-sm font-semibold text-white">{{ profile.label }}</p>
                <p class="text-xs text-slate-500">{{ profile.handle }}</p>
              </div>
              <i class="pi pi-arrow-up-right ml-auto text-slate-600 group-hover:text-slate-400 transition-colors text-xs"></i>
            </a>
          </div>
        </div>

        <div class="border-t border-white/5 pt-5 space-y-2">
          <p class="text-sm text-slate-600 flex items-center gap-2">
            <i class="pi pi-map-marker text-cyan-400 text-xs"></i>
            {{ t('contact.location') }}
          </p>
          <p class="text-sm text-slate-600 flex items-center gap-2">
            <i class="pi pi-clock text-cyan-400 text-xs"></i>
            {{ t('contact.timezone') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSeo } from '@/composables/useSeo'

const { t } = useI18n()

const email = 'joanmanuelromero100@gmail.com'
const mailtoLink = `mailto:${email}?subject=${encodeURIComponent('Hola Joan — consulta desde portfolio')}`
const whatsappLink = 'https://wa.me/5491134567890?text=' + encodeURIComponent('Hola Joan, te escribo desde tu portfolio')

const copied = ref(false)
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => (copied.value = false), 1800)
  } catch {}
}

useSeo({
  titleKey: 'contact.meta.title',
  descKey: 'contact.meta.description',
})

const profiles = [
  {
    href: 'https://www.linkedin.com/in/joanmanuelromero/',
    label: 'LinkedIn',
    handle: '/in/joanmanuelromero',
    icon: 'pi pi-linkedin',
    iconColor: '#60a5fa',
    iconBg: 'bg-blue-500/10 border border-blue-500/20',
  },
  {
    href: 'https://github.com/Joanmanuel1',
    label: 'GitHub',
    handle: 'Joanmanuel1',
    icon: 'pi pi-github',
    iconColor: '#e2e8f0',
    iconBg: 'bg-white/5 border border-white/10',
  },
]
</script>
