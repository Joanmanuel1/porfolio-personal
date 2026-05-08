<template>
  <section v-if="project" class="p-4 sm:p-8 lg:p-12 min-h-screen">
    <div class="max-w-5xl mx-auto">
      <RouterLink
        to="/projects"
        class="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-6 font-medium"
      >
        <i class="pi pi-arrow-left"></i> {{ t('nav.projects') }}
      </RouterLink>

      <header class="mb-8">
        <h1 class="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-3">
          {{ t(project.titleKey) }}
        </h1>
        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="px-3 py-1 bg-gray-800/70 text-green-400 rounded-full text-xs font-semibold border border-gray-700"
          >
            {{ tech }}
          </span>
        </div>
        <p class="text-lg text-gray-300 leading-relaxed">
          {{ t(project.descriptionKey) }}
        </p>
      </header>

      <div
        v-if="project.gallery?.length && getImageUrl(project.gallery[0].item)"
        class="mb-10 rounded-2xl overflow-hidden border border-gray-700 bg-gray-900/50"
      >
        <DeviceFrame :type="project.frame" :url="project.demoUrl" class="max-w-2xl mx-auto p-6">
          <img
            :src="getImageUrl(project.gallery[0].item)"
            :alt="t(project.gallery[0].altKey)"
            loading="lazy"
            decoding="async"
          />
        </DeviceFrame>
      </div>

      <div
        v-if="project.impactKey"
        class="mb-10 p-6 bg-green-500/10 rounded-xl border border-green-500/20"
      >
        <h2 class="text-green-400 font-bold mb-2 flex items-center text-xl">
          <i class="pi pi-check-circle mr-2"></i> {{ t('projects.labels.impact') }}
        </h2>
        <p class="text-gray-300 italic leading-relaxed">
          {{ t(project.impactKey) }}
        </p>
      </div>

      <div class="flex flex-wrap gap-3 mb-12">
        <a
          v-if="project.demoUrl"
          :href="project.demoUrl"
          target="_blank"
          rel="noopener"
          class="px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors shadow-lg shadow-green-500/30 flex items-center"
        >
          <i class="pi pi-external-link mr-2"></i> {{ t('projects.labels.demo') }}
        </a>
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener"
          class="px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-colors border border-gray-600 flex items-center"
        >
          <i class="pi pi-github mr-2"></i> {{ t('projects.labels.code') }}
        </a>
      </div>

      <div v-if="project.gallery?.length" class="rounded-2xl border border-gray-700 bg-gray-900/40 p-4 sm:p-6">
        <h2 class="text-2xl font-bold text-white mb-4 flex items-center">
          <i class="pi pi-images mr-2 text-green-400"></i> {{ t('projects.labels.gallery') }}
        </h2>
        <Galleria
          :value="project.gallery"
          :numVisible="5"
          :circular="true"
          :showThumbnails="true"
          :showIndicators="false"
          :showItemNavigators="true"
          containerStyle="max-width: 100%; margin: auto;"
        >
          <template #item="slotProps">
            <div class="flex justify-center items-center h-[50vh] sm:h-[60vh] bg-black/40 p-4">
              <img
                :src="getImageUrl(slotProps.item.item)"
                :alt="t(slotProps.item.altKey)"
                loading="lazy"
                decoding="async"
                class="max-w-full max-h-full object-contain"
              />
            </div>
          </template>
          <template #thumbnail="slotProps">
            <img
              :src="getImageUrl(slotProps.item.item)"
              :alt="t(slotProps.item.altKey)"
              loading="lazy"
              decoding="async"
              class="w-20 h-16 sm:w-24 sm:h-20 object-cover rounded"
            />
          </template>
        </Galleria>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Galleria from 'primevue/galleria'
import DeviceFrame from '@/components/DeviceFrame.vue'
import { findProjectBySlug } from '@/data/projects'
import { useImageUrl } from '@/composables/useImageUrl'
import { useSeo } from '@/composables/useSeo'

const props = defineProps({ slug: { type: String, required: true } })
const router = useRouter()
const { t } = useI18n()
const getImageUrl = useImageUrl()

const project = computed(() => findProjectBySlug(props.slug))

watchEffect(() => {
  if (!project.value) router.replace({ name: 'Projects' })
})

useSeo({
  titleKey: project.value?.titleKey,
  descKey: project.value?.descriptionKey,
  image: project.value?.gallery?.[0]?.item ? getImageUrl(project.value.gallery[0].item) : undefined,
  type: 'article',
})
</script>
