<template>
  <section class="section-pad">
    <div class="max-w-7xl mx-auto">

      <!-- Header -->
      <div
        class="mb-16 sm:mb-20"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <p class="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">{{ t('projects.subtitle') }}</p>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tightest">
          {{ t('projects.header') }}
        </h1>
      </div>

      <!-- Production projects -->
      <div class="mb-20">
        <div class="flex items-center gap-3 mb-8">
          <span class="w-1 h-5 rounded-full bg-gradient-to-b from-cyan-400 to-emerald-500"></span>
          <h2 class="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
            {{ t('projects.kinds.production') }}
          </h2>
        </div>

        <div class="space-y-8">
          <article
            v-for="(project, idx) in productionProjects"
            :key="project.id"
            class="glass glass-hover rounded-2xl overflow-hidden"
            v-motion
            :initial="{ opacity: 0, y: 24 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: idx * 100, duration: 600 } }"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2">
              <!-- Visual panel -->
              <div class="relative h-64 sm:h-80 lg:h-full min-h-[280px] bg-[#0d1120] overflow-hidden flex items-center justify-center p-6">
                <template v-if="project.gallery?.length && getImageUrl(project.gallery[0].item)">
                  <!-- Blurred bg -->
                  <img
                    :src="getImageUrl(project.gallery[0].item)"
                    aria-hidden="true"
                    class="absolute inset-0 w-full h-full object-cover opacity-15 blur-2xl scale-110"
                  />
                  <!-- Skeleton overlay until main img loads (skip if video) -->
                  <div
                    v-if="!project.videoUrl && !loadedImages.has(project.id)"
                    class="absolute inset-0 z-20 bg-[#0d1120]/80 flex items-center justify-center"
                  >
                    <div class="w-full max-w-xs h-48 rounded-xl bg-white/[0.03] relative overflow-hidden">
                      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skeleton-shimmer"></div>
                    </div>
                  </div>
                  <DeviceFrame
                    :type="project.frame"
                    :url="project.demoUrl"
                    :videoSrc="project.videoUrl || ''"
                    class="relative z-10 max-w-xs sm:max-w-sm"
                  >
                    <img
                      :src="getImageUrl(project.gallery[0].item)"
                      :alt="t(project.gallery[0].altKey)"
                      loading="lazy"
                      decoding="async"
                      class="transition-transform duration-700 group-hover:scale-105"
                      @load="loadedImages.add(project.id)"
                    />
                  </DeviceFrame>
                </template>
                <div v-else class="flex flex-col items-center text-slate-700 gap-2">
                  <i class="pi pi-image text-3xl"></i>
                  <span class="text-xs">No screenshot</span>
                </div>
              </div>

              <!-- Info panel -->
              <div class="p-7 sm:p-8 flex flex-col justify-between">
                <div>
                  <div class="flex flex-wrap gap-1.5 mb-3">
                    <span v-for="tech in project.technologies" :key="tech" class="tech-pill">{{ tech }}</span>
                  </div>

                  <h3 class="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight mb-3">
                    {{ t(project.titleKey) }}
                  </h3>

                  <p class="text-slate-400 leading-relaxed mb-5">
                    {{ t(project.descriptionKey) }}
                  </p>

                  <div class="p-4 rounded-xl bg-cyan-500/8 border border-cyan-500/15 mb-6">
                    <p class="text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-1.5">{{ t('projects.labels.impact') }}</p>
                    <p class="text-sm text-slate-400 leading-relaxed italic">{{ t(project.impactKey) }}</p>
                  </div>
                </div>

                <div class="flex flex-wrap gap-2.5">
                  <a
                    v-if="project.demoUrl"
                    :href="project.demoUrl"
                    target="_blank"
                    rel="noopener"
                    class="cta-primary text-sm px-4 py-2 rounded-lg"
                  >
                    <i class="pi pi-external-link"></i> {{ t('projects.labels.demo') }}
                  </a>
                  <span
                    v-else-if="project.wip"
                    :title="t('projects.labels.wipTooltip')"
                    class="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-400 cursor-default select-none"
                  >
                    <i class="pi pi-wrench text-xs"></i> {{ t('projects.labels.wip') }}
                  </span>
                  <RouterLink
                    :to="{ name: 'ProjectDetail', params: { slug: project.slug } }"
                    class="cta-secondary text-sm px-4 py-2 rounded-lg"
                  >
                    <i class="pi pi-eye"></i> {{ t('projects.labels.caseStudy') }}
                  </RouterLink>
                  <button
                    v-if="project.gallery?.length"
                    @click="openProductionGallery(project)"
                    class="cta-secondary text-sm px-4 py-2 rounded-lg cursor-pointer"
                  >
                    <i class="pi pi-images"></i> {{ t('projects.labels.gallery') }}
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- Practice projects -->
      <div>
        <div class="flex items-center gap-3 mb-8">
          <span class="w-1 h-5 rounded-full bg-gradient-to-b from-cyan-400 to-emerald-500"></span>
          <h2 class="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
            {{ t('projects.kinds.practice') }}
          </h2>
        </div>
        <div class="bento-grid">
          <ProjectCard
            v-for="(project, idx) in practiceProjects"
            :key="project.id"
            :project="project"
            :class="bentoClass(idx)"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: idx * 80, duration: 500 } }"
          />
        </div>
      </div>

      <!-- Gallery dialog -->
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
          header: { class: 'bg-[#111827] text-white border-b border-white/5' },
          content: { class: 'bg-[#0b0f19] text-white p-0' },
          closeButton: { class: 'text-white hover:bg-white/10' },
          maximizeButton: { class: 'text-white hover:bg-white/10 mr-2' },
        }"
      >
        <Galleria
          :value="activeGalleryItems"
          :numVisible="5"
          :circular="true"
          :showThumbnails="true"
          :showIndicators="false"
          :showItemNavigators="true"
          containerStyle="max-width: 100%; margin: auto;"
          :pt="{ thumbnailItem: { class: 'opacity-50 hover:opacity-100 transition-opacity' } }"
        >
          <template #item="slotProps">
            <div class="flex justify-center items-center h-[60vh] sm:h-[70vh] bg-black/40 p-4">
              <video
                v-if="slotProps.item.type === 'video'"
                :src="slotProps.item.src"
                autoplay loop muted playsinline controls
                class="max-w-full max-h-full rounded-xl shadow-2xl"
                style="max-height:100%"
              />
              <img
                v-else
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
              <div
                v-if="slotProps.item.type === 'video'"
                class="w-20 h-16 sm:w-24 sm:h-20 rounded bg-slate-800 flex items-center justify-center border border-white/10"
              >
                <i class="pi pi-play-circle text-xl text-cyan-400"></i>
              </div>
              <img
                v-else
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
import { ref, reactive } from 'vue'
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

const loadedImages = reactive(new Set())
const displayProductionGallery = ref(false)
const activeProject = ref(null)
const activeGalleryItems = ref([])

// Bento grid sizing — first card wider, rest balanced
function bentoClass(idx) {
  const layouts = [
    'lg:col-span-2 lg:row-span-2',
    'lg:col-span-1',
    'lg:col-span-1',
    'lg:col-span-2',
    'lg:col-span-1',
    'lg:col-span-1',
  ]
  return layouts[idx % layouts.length]
}

const openProductionGallery = (project) => {
  activeProject.value = project
  const items = []
  if (project.videoUrl) {
    items.push({ type: 'video', src: project.videoUrl, altKey: `projects.items.${project.slug}.videoAlt` })
  }
  items.push(...(project.gallery || []).map((g) => ({ type: 'image', ...g })))
  activeGalleryItems.value = items
  displayProductionGallery.value = true
}
</script>
