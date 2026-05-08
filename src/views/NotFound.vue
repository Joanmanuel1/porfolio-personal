<template>
  <section class="section-pad flex items-center justify-center min-h-[70vh]">
    <div class="text-center max-w-md mx-auto">
      <p
        class="text-8xl sm:text-9xl font-display font-black gradient-text leading-none mb-6 select-none"
        aria-hidden="true"
      >404</p>
      <h1 class="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mb-3">
        {{ t('notFound.title') }}
      </h1>
      <p class="text-slate-400 leading-relaxed mb-10">
        {{ t('notFound.description') }}
      </p>
      <RouterLink to="/" class="cta-primary inline-flex">
        <i class="pi pi-arrow-left"></i>
        {{ t('notFound.cta') }}
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useSeo } from '@/composables/useSeo'

const { t } = useI18n()
useSeo({ titleKey: 'notFound.meta.title', descKey: 'notFound.meta.description' })
</script>
