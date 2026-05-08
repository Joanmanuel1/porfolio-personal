<template>
  <section class="p-4 sm:p-8 lg:p-12 bg-gray-900 min-h-screen">
    <div class="max-w-7xl mx-auto">
      <header class="text-center mb-12 sm:mb-16" data-aos="fade-up">
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6 tracking-tight">
          {{ t('projects.header') }}
        </h2>
        <p class="text-white text-lg sm:text-xl max-w-6xl mx-auto">
          {{ t('projects.subtitle') }}
        </p>
      </header>

      <div class="mb-20">
        <h3 class="text-2xl sm:text-3xl font-bold text-white mb-8 border-l-4 border-green-500 pl-4 flex items-center">
          <i class="pi pi-briefcase mr-3 text-green-400"></i> {{ t('projects.kinds.production') }}
        </h3>
        <div class="space-y-12">
          <article
            v-for="project in productionProjects"
            :key="project.id"
            class="group relative bg-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-green-500/20 transition-all duration-300 border border-gray-700 hover:border-green-500/50"
            data-aos="fade-up"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div class="relative h-64 sm:h-80 lg:h-full bg-gray-900 overflow-hidden flex items-center justify-center p-6">
                <template v-if="project.gallery?.length && getImageUrl(project.gallery[0].item)">
                  <img
                    :src="getImageUrl(project.gallery[0].item)"
                    aria-hidden="true"
                    class="absolute inset-0 w-full h-full object-cover opacity-30 blur-xl scale-110"
                  />
                  <DeviceFrame :type="project.frame" :url="project.demoUrl" class="relative z-10 max-w-md">
                    <img
                      :src="getImageUrl(project.gallery[0].item)"
                      :alt="t(project.gallery[0].altKey)"
                      loading="lazy"
                      decoding="async"
                      class="transition-transform duration-700 group-hover:scale-105"
                    />
                  </DeviceFrame>
                </template>
                <div v-else class="flex flex-col items-center justify-center text-gray-600 gap-2">
                  <i class="pi pi-image text-4xl"></i>
                  <span class="text-xs">No screenshots yet</span>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-gray-900/10 z-20 pointer-events-none"></div>
              </div>

              <div class="p-8 sm:p-10 flex flex-col justify-center">
                <div class="mb-4">
                  <h4 class="text-3xl sm:text-4xl font-display font-extrabold text-white mb-2 tracking-tight">
                    {{ t(project.titleKey) }}
                  </h4>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span
                      v-for="tech in project.technologies"
                      :key="tech"
                      class="px-3 py-1 bg-gray-700/50 text-green-400 rounded-full text-xs font-semibold border border-gray-600"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <p class="text-gray-300 text-lg mb-6 leading-relaxed">
                  {{ t(project.descriptionKey) }}
                </p>

                <div class="mb-8 p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                  <h5 class="text-green-400 font-bold mb-2 flex items-center">
                    <i class="pi pi-check-circle mr-2"></i> {{ t('projects.labels.impact') }}
                  </h5>
                  <p class="text-gray-300 text-sm italic">
                    {{ t(project.impactKey) }}
                  </p>
                </div>

                <div class="flex flex-wrap gap-3 mt-auto">
                  <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" rel="noopener"
                    class="px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors shadow-lg shadow-green-500/30 flex items-center justify-center"
                  >
                    <i class="pi pi-external-link mr-2"></i> {{ t('projects.labels.demo') }}
                  </a>
                  <RouterLink
                    :to="{ name: 'ProjectDetail', params: { slug: project.slug } }"
                    class="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center"
                  >
                    <i class="pi pi-eye mr-2"></i> {{ t('projects.labels.caseStudy') }}
                  </RouterLink>
                  <button
                    v-if="project.gallery?.length"
                    @click="openProductionGallery(project)"
                    class="px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-colors border border-gray-600 flex items-center justify-center cursor-pointer"
                  >
                    <i class="pi pi-images mr-2"></i> {{ t('projects.labels.gallery') }}
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div>
        <h3 class="text-2xl sm:text-3xl font-bold text-white mb-8 border-l-4 border-green-500 pl-4 flex items-center">
          <i class="pi pi-code mr-3 text-green-400"></i> {{ t('projects.kinds.practice') }}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          <ProjectCard
            v-for="project in practiceProjects"
            :key="project.id"
            :project="project"
            data-aos="zoom-in"
            data-aos-duration="1000"
          />
        </div>
      </div>

      <Dialog
        v-if="activeProject"
        :header="t(activeProject.titleKey)"
        v-model:visible="displayProductionGallery"
        modal
        :style="{ width: '80vw' }"
        :breakpoints="{ '1199px': '85vw', '575px': '95vw' }"
        :dismissableMask="true"
        :maximizable="true"
        :pt="{
          header: { class: 'bg-gray-800 text-white border-b border-gray-700' },
          content: { class: 'bg-gray-900 text-white p-0' },
          footer: { class: 'bg-gray-800 border-t border-gray-700' },
          closeButton: { class: 'text-white hover:bg-gray-700' },
          maximizeButton: { class: 'text-white hover:bg-gray-700 mr-2' },
        }"
      >
        <Galleria
          :value="activeProject.gallery"
          :numVisible="5"
          :circular="true"
          :showThumbnails="true"
          :showIndicators="false"
          :showItemNavigators="true"
          containerStyle="max-width: 100%; margin: auto;"
          :pt="{ thumbnailItem: { class: 'opacity-50 hover:opacity-100 transition-opacity' } }"
        >
          <template #item="slotProps">
            <div class="flex justify-center items-center h-[60vh] sm:h-[70vh] bg-black/50 p-4">
              <img
                :src="getImageUrl(slotProps.item.item)"
                :alt="t(slotProps.item.altKey)"
                loading="lazy"
                decoding="async"
                class="max-w-full max-h-full object-contain shadow-2xl"
              />
            </div>
          </template>
          <template #thumbnail="slotProps">
            <div class="grid gap-4 justify-center">
              <img
                :src="getImageUrl(slotProps.item.item)"
                :alt="t(slotProps.item.altKey)"
                loading="lazy"
                decoding="async"
                class="w-20 h-16 sm:w-24 sm:h-20 object-cover rounded block"
              />
            </div>
          </template>
        </Galleria>
      </Dialog>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import DeviceFrame from '@/components/DeviceFrame.vue'
import Dialog from 'primevue/dialog'
import Galleria from 'primevue/galleria'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { productionProjects, practiceProjects } from '@/data/projects'
import { useImageUrl } from '@/composables/useImageUrl'
import { useSeo } from '@/composables/useSeo'

const { t } = useI18n()
const getImageUrl = useImageUrl()

useSeo({
  titleKey: 'projects.meta.title',
  descKey: 'projects.meta.description',
})

const displayProductionGallery = ref(false)
const activeProject = ref(null)

const openProductionGallery = (project) => {
  activeProject.value = project
  displayProductionGallery.value = true
}
</script>
