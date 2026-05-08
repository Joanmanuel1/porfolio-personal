<template>
  <article class="glass glass-hover rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1">
    <div class="p-6 flex flex-col flex-grow">
      <div class="flex flex-wrap gap-1.5 mb-3">
        <span v-for="tech in project.technologies" :key="tech" class="tech-pill">{{ tech }}</span>
      </div>

      <h3 class="text-lg font-display font-bold text-white tracking-tight mb-2">
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
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useImageUrl } from '@/composables/useImageUrl'

defineProps({
  project: { type: Object, required: true },
})

const { t } = useI18n()
const getImageUrl = useImageUrl()
const displayGallery = ref(false)
const openGallery = () => (displayGallery.value = true)
</script>
