<template>
  <article class="group glass glass-hover rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-500/10">

    <!-- Image preview with hover overlay -->
    <div v-if="firstImage" class="relative overflow-hidden h-44 bg-[#0d1120] flex-shrink-0">
      <!-- Skeleton while loading -->
      <div v-if="!imgLoaded" class="absolute inset-0 animate-pulse bg-white/[0.03]">
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skeleton-shimmer"></div>
      </div>
      <img
        :src="getImageUrl(firstImage.item)"
        :alt="t(firstImage.altKey)"
        loading="lazy"
        decoding="async"
        class="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-[1.06]"
        :class="imgLoaded ? 'opacity-100' : 'opacity-0'"
        @load="imgLoaded = true"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/80 via-transparent to-transparent pointer-events-none"></div>
      <!-- Hover overlay -->
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center gap-3">
        <span class="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-white text-sm font-semibold bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full flex items-center gap-2">
          <i class="pi pi-eye text-xs"></i> {{ t('projects.labels.preview') }}
        </span>
      </div>
    </div>

    <!-- Generative placeholder when no gallery -->
    <div v-else class="relative overflow-hidden h-44 flex-shrink-0 flex items-center justify-center" :style="placeholderStyle">
      <div class="absolute inset-0 opacity-30" :style="placeholderMesh"></div>
      <div class="relative flex flex-col items-center gap-2 text-white/60">
        <i class="pi pi-code text-3xl"></i>
        <span class="text-xs font-medium tracking-wide uppercase">{{ project.technologies[0] }}</span>
      </div>
    </div>

    <div class="p-6 flex flex-col flex-grow">
      <div class="flex flex-wrap gap-1.5 mb-3">
        <span v-for="tech in project.technologies" :key="tech" class="tech-pill">{{ tech }}</span>
      </div>

      <h3 class="text-lg font-display font-bold text-white group-hover:text-cyan-300 tracking-tight mb-2 transition-colors duration-200">
        {{ t(project.titleKey) }}
      </h3>

      <p class="text-sm text-slate-400 leading-relaxed flex-grow mb-5">
        {{ t(project.descriptionKey) }}
      </p>

      <div class="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
        <a
          v-if="project.demoUrl"
          :href="project.demoUrl"
          target="_blank"
          rel="noopener"
          class="cta-primary text-xs px-3 py-1.5 rounded-lg"
        >
          <i :class="project.status ? 'pi pi-google' : 'pi pi-external-link'"></i>
          {{ project.status ? t('projects.labels.playstore') : t('projects.labels.demo') }}
        </a>
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener"
          class="cta-secondary text-xs px-3 py-1.5 rounded-lg"
        >
          <i class="pi pi-github"></i> {{ t('projects.labels.code') }}
        </a>
        <button
          v-if="project.gallery?.length"
          class="cta-secondary text-xs px-3 py-1.5 rounded-lg cursor-pointer"
          @click="openGallery"
        >
          <i class="pi pi-images"></i> {{ t('projects.labels.gallery') }}
        </button>
        <RouterLink
          :to="{ name: 'ProjectDetail', params: { slug: project.slug } }"
          class="cta-secondary text-xs px-3 py-1.5 rounded-lg"
        >
          <i class="pi pi-eye"></i> {{ t('projects.labels.caseStudy') }}
        </RouterLink>
      </div>
    </div>

    <Dialog
      :header="t(project.titleKey)"
      v-model:visible="displayGallery"
      modal
      :style="{ width: '70vw' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
      :dismissableMask="true"
      :pt="{
        header: { class: 'bg-[#111827] text-white border-b border-white/5' },
        content: { class: 'bg-[#0b0f19] text-white p-0' },
        closeButton: { class: 'text-white hover:bg-white/10' },
      }"
    >
      <Galleria
        :value="project.gallery"
        :numVisible="5"
        :circular="true"
        :showThumbnails="false"
        :showIndicators="true"
        :showItemNavigators="true"
        containerStyle="max-width: 1100px; margin: auto;"
      >
        <template #item="slotProps">
          <div class="flex justify-center items-center p-4">
            <img
              :src="getImageUrl(slotProps.item.item)"
              :alt="t(slotProps.item.altKey)"
              loading="lazy"
              decoding="async"
              class="max-w-full max-h-[80vh] object-contain block shadow-2xl"
            />
          </div>
        </template>
      </Galleria>
    </Dialog>
  </article>
</template>

<script setup>
import Galleria from 'primevue/galleria'
import Dialog from 'primevue/dialog'
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useImageUrl } from '@/composables/useImageUrl'

const props = defineProps({
  project: { type: Object, required: true },
})

const { t } = useI18n()
const getImageUrl = useImageUrl()
const displayGallery = ref(false)
const imgLoaded = ref(false)
const openGallery = () => (displayGallery.value = true)

const firstImage = computed(() => props.project.gallery?.[0] ?? null)

// Generative placeholder colors derived from first tech name
const techPalette = {
  Vue: ['#4ade80', '#06b6d4'],
  Angular: '#f87171',
  TypeScript: '#60a5fa',
  JavaScript: '#facc15',
  React: ['#67e8f9', '#a78bfa'],
  Python: '#34d399',
  'Node.js': '#86efac',
  default: ['#06b6d4', '#10b981'],
}
const placeholderStyle = computed(() => {
  const tech = props.project.technologies?.[0] ?? ''
  const colors = techPalette[tech] ?? techPalette.default
  const [c1, c2] = Array.isArray(colors) ? colors : [colors, colors + 'aa']
  return { background: `linear-gradient(135deg, ${c1}22 0%, ${c2}15 100%)` }
})
const placeholderMesh = computed(() => {
  const tech = props.project.technologies?.[0] ?? ''
  const colors = techPalette[tech] ?? techPalette.default
  const [c1] = Array.isArray(colors) ? colors : [colors]
  return { background: `radial-gradient(circle at 30% 50%, ${c1}40 0%, transparent 60%)` }
})
</script>
