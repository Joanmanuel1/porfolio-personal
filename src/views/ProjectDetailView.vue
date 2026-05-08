<template>
  <section v-if="project" class="p-4 sm:p-8 lg:p-12 min-h-screen">
    <div class="max-w-5xl mx-auto">
      <RouterLink
        to="/projects"
        class="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-6 font-medium"
      >
        <i class="pi pi-arrow-left"></i> {{ t('nav.projects') }}
      </RouterLink>

      <!-- Header -->
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

      <!-- Impact -->
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

      <!-- CTAs -->
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

      <!-- Stage-based layout (when project has stages) -->
      <template v-if="project.stages?.length">
        <div class="space-y-16">
          <article
            v-for="(stage, index) in project.stages"
            :key="index"
            class="relative"
          >
            <!-- Stage header -->
            <div class="flex items-center gap-4 mb-6">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/15 border border-green-500/40 flex items-center justify-center">
                <span class="text-green-400 font-bold text-sm">{{ index + 1 }}</span>
              </div>
              <div>
                <p class="text-xs font-semibold text-green-500 uppercase tracking-widest mb-0.5">
                  {{ t('projects.labels.stage') }} {{ index + 1 }}
                </p>
                <h2 class="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                  {{ t(stage.titleKey) }}
                </h2>
              </div>
            </div>

            <!-- Stage description -->
            <p class="text-gray-300 leading-relaxed mb-8 pl-14">
              {{ t(stage.descriptionKey) }}
            </p>

            <!-- Stage media: video + images -->
            <div class="pl-0 sm:pl-14">
              <!-- Video in mobile frame -->
              <div v-if="stage.videoUrl" class="mb-6">
                <div class="flex justify-center bg-gray-900/60 rounded-2xl border border-gray-700 p-6 sm:p-10">
                  <DeviceFrame type="mobile" :videoSrc="stage.videoUrl" class="max-w-xs" />
                </div>
                <p class="text-center text-xs text-gray-500 mt-2">
                  {{ t(project.titleKey + '_videoAlt') || t('projects.items.invitaciones-digitales.videoAlt') }}
                </p>
              </div>

              <!-- Images grid -->
              <div
                v-if="stageImages(stage).length"
                :class="['grid gap-4', gridClass(stageImages(stage).length)]"
              >
                <figure
                  v-for="img in stageImages(stage)"
                  :key="img.item"
                  class="group relative rounded-xl overflow-hidden border border-gray-700 bg-gray-900 cursor-zoom-in"
                  @click="openLightbox(img)"
                >
                  <img
                    :src="getImageUrl(img.item)"
                    :alt="t(img.altKey)"
                    loading="lazy"
                    decoding="async"
                    class="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <i class="pi pi-search-plus text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg"></i>
                  </div>
                  <figcaption class="px-3 py-2 text-xs text-gray-400 bg-gray-900/80">
                    {{ t(img.altKey) }}
                  </figcaption>
                </figure>
              </div>
            </div>

            <!-- Divider between stages (not after last) -->
            <div
              v-if="index < project.stages.length - 1"
              class="mt-16 flex items-center gap-4"
            >
              <div class="flex-1 h-px bg-gray-700/60"></div>
              <i class="pi pi-arrow-down text-gray-600 text-xs"></i>
              <div class="flex-1 h-px bg-gray-700/60"></div>
            </div>
          </article>
        </div>
      </template>

      <!-- Default gallery layout (projects without stages) -->
      <template v-else>
        <div
          v-if="project.gallery?.length && getImageUrl(project.gallery[0].item)"
          class="mb-10 rounded-2xl overflow-hidden border border-gray-700 bg-gray-900/50"
        >
          <DeviceFrame :type="project.frame" :url="project.demoUrl" :videoSrc="project.videoUrl || ''" class="max-w-2xl mx-auto p-6">
            <img
              :src="getImageUrl(project.gallery[0].item)"
              :alt="t(project.gallery[0].altKey)"
              loading="lazy"
              decoding="async"
            />
          </DeviceFrame>
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
      </template>
    </div>

    <!-- Lightbox -->
    <Dialog
      v-if="lightboxItem"
      v-model:visible="lightboxVisible"
      modal
      :dismissableMask="true"
      :showHeader="false"
      :style="{ background: 'transparent', boxShadow: 'none', padding: 0 }"
      :contentStyle="{ background: 'transparent', padding: 0 }"
      :pt="{
        root: { class: 'bg-transparent shadow-none' },
        content: { class: 'bg-transparent p-0' },
        mask: { class: 'bg-black/80 backdrop-blur-sm' },
      }"
    >
      <div class="relative flex flex-col items-center" @click="lightboxVisible = false">
        <img
          :src="getImageUrl(lightboxItem.item)"
          :alt="t(lightboxItem.altKey)"
          class="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
        />
        <p class="mt-3 text-sm text-gray-300">{{ t(lightboxItem.altKey) }}</p>
        <button
          class="absolute top-2 right-2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition"
          @click.stop="lightboxVisible = false"
          :aria-label="t('common.close')"
        >
          <i class="pi pi-times text-sm"></i>
        </button>
      </div>
    </Dialog>
  </section>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Galleria from 'primevue/galleria'
import Dialog from 'primevue/dialog'
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

const stageImageMap = computed(() => {
  if (!project.value?.gallery) return new Map()
  const id = project.value.id
  const map = new Map()
  for (const g of project.value.gallery) {
    const letter = g.item.replace(`${id}-`, '').replace('.png', '')
    map.set(letter, g)
  }
  return map
})

function stageImages(stage) {
  if (!stage.images?.length) return []
  return stage.images.map((l) => stageImageMap.value.get(l)).filter(Boolean)
}

function gridClass(count) {
  if (count === 1) return 'grid-cols-1'
  if (count === 2) return 'grid-cols-1 sm:grid-cols-2'
  return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
}

const lightboxVisible = ref(false)
const lightboxItem = ref(null)

function openLightbox(img) {
  lightboxItem.value = img
  lightboxVisible.value = true
}
</script>
