<template>
  <section v-if="project">

    <!-- Hero band -->
    <div
      class="relative overflow-hidden border-b border-white/5 bg-gradient-to-br from-[#0d1520] to-[#0b0f19]"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { duration: 600 } }"
    >
      <!-- Decorative glow -->
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-600/10 blur-[80px] rounded-full pointer-events-none"></div>

      <div class="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
        <!-- Back -->
        <RouterLink
          to="/projects"
          class="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-300 mb-8 text-sm font-medium transition-colors group"
          v-motion
          :initial="{ opacity: 0, x: -12 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 400 } }"
        >
          <i class="pi pi-arrow-left text-xs group-hover:-translate-x-0.5 transition-transform"></i>
          {{ t('nav.projects') }}
        </RouterLink>

        <!-- Header -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 80, duration: 550 } }"
        >
          <div class="flex flex-wrap gap-1.5 mb-5">
            <span v-for="tech in project.technologies" :key="tech" class="tech-pill">{{ tech }}</span>
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tightest mb-5 leading-tight">
            {{ t(project.titleKey) }}
          </h1>
          <p class="text-lg text-slate-400 leading-relaxed max-w-3xl">
            {{ t(project.descriptionKey) }}
          </p>
        </div>

        <!-- Impact + CTAs row -->
        <div
          class="mt-8 flex flex-col sm:flex-row gap-5 items-start"
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
        >
          <div v-if="project.impactKey" class="flex-1 p-4 rounded-xl bg-cyan-500/8 border border-cyan-500/15">
            <p class="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-1.5">{{ t('projects.labels.impact') }}</p>
            <p class="text-slate-300 text-sm italic leading-relaxed">{{ t(project.impactKey) }}</p>
          </div>

          <div class="flex flex-wrap gap-3 flex-shrink-0">
            <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" rel="noopener" class="cta-primary">
              <i class="pi pi-external-link"></i> {{ t('projects.labels.demo') }}
            </a>
            <span v-else-if="project.wip" :title="t('projects.labels.wipTooltip')"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-400 text-sm cursor-default">
              <i class="pi pi-wrench text-xs"></i> {{ t('projects.labels.wip') }}
            </span>
            <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener" class="cta-secondary">
              <i class="pi pi-github"></i> {{ t('projects.labels.code') }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="section-pad">
    <div class="max-w-5xl mx-auto">


      <!-- What I learned -->
      <div
        v-if="learnedText"
        class="mb-14 glass rounded-2xl p-5 sm:p-6 border-l-2 border-emerald-500/50"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 220, duration: 500 } }"
      >
        <p class="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-3 flex items-center gap-2">
          <i class="pi pi-book text-xs"></i>
          {{ t('projects.labels.learned') }}
        </p>
        <p class="text-slate-300 leading-relaxed italic">{{ learnedText }}</p>
      </div>

      <!-- Case study section -->
      <div
        v-if="caseStudy"
        class="mb-14 space-y-5"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 280, duration: 500 } }"
      >
        <div class="flex items-center gap-2 mb-6">
          <span class="w-1 h-5 rounded-full bg-gradient-to-b from-cyan-400 to-emerald-500"></span>
          <h2 class="text-xl font-display font-bold text-white">{{ t('projects.labels.caseStudyTitle') }}</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="(key, field) in caseStudyFields" :key="field" class="glass rounded-xl p-5">
            <p class="text-xs font-semibold tracking-widest uppercase mb-2 flex items-center gap-1.5"
               :class="key.color">
              <i :class="key.icon + ' text-[10px]'"></i>
              {{ t('projects.labels.csLabels.' + field) }}
            </p>
            <p class="text-sm text-slate-400 leading-relaxed">{{ caseStudy[field] }}</p>
          </div>
        </div>
      </div>

      <!-- Stage-based layout -->
      <template v-if="project.stages?.length">
        <div class="space-y-16">
          <article
            v-for="(stage, index) in project.stages"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 24 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: index * 120, duration: 550 } }"
          >
            <!-- Stage header -->
            <div class="flex items-center gap-4 mb-5">
              <div class="w-9 h-9 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                <span class="text-cyan-400 font-bold text-sm">{{ index + 1 }}</span>
              </div>
              <div>
                <p class="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
                  {{ t('projects.labels.stage') }} {{ index + 1 }}
                </p>
                <h2 class="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tightest">
                  {{ t(stage.titleKey) }}
                </h2>
              </div>
            </div>

            <!-- Stage description -->
            <p class="text-slate-400 leading-relaxed mb-8 pl-[52px]">
              {{ t(stage.descriptionKey) }}
            </p>

            <!-- Media -->
            <div class="pl-0 sm:pl-[52px]">
              <div v-if="stage.videoUrl" class="mb-6">
                <div class="flex justify-center glass rounded-2xl p-6 sm:p-10">
                  <DeviceFrame type="mobile" :videoSrc="stage.videoUrl" class="max-w-xs" />
                </div>
                <p class="text-center text-xs text-slate-600 mt-2">
                  {{ t(`projects.items.${project.slug}.videoAlt`) }}
                </p>
              </div>

              <div
                v-if="stageImages(stage).length"
                :class="['grid gap-4', gridClass(stageImages(stage).length)]"
              >
                <figure
                  v-for="img in stageImages(stage)"
                  :key="img.item"
                  class="group relative rounded-xl overflow-hidden border border-white/8 bg-[#0d1120] cursor-zoom-in"
                  @click="openLightbox(img)"
                >
                  <img
                    :src="getImageUrl(img.item)"
                    :alt="t(img.altKey)"
                    loading="lazy"
                    decoding="async"
                    class="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div class="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                    <i class="pi pi-search-plus text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg"></i>
                  </div>
                  <figcaption class="px-3 py-2 text-xs text-slate-500 bg-[#0d1120]/90 border-t border-white/5">
                    {{ t(img.altKey) }}
                  </figcaption>
                </figure>
              </div>
            </div>

            <!-- Stage divider -->
            <div
              v-if="index < project.stages.length - 1"
              class="mt-16 section-divider"
              aria-hidden="true"
            ></div>
          </article>
        </div>
      </template>

      <!-- Default gallery layout -->
      <template v-else>
        <div
          v-if="project.gallery?.length && getImageUrl(project.gallery[0].item)"
          class="mb-10 glass rounded-2xl overflow-hidden"
        >
          <div class="p-6 sm:p-8 flex justify-center bg-[#0d1120]/50">
            <DeviceFrame
              :type="project.frame"
              :url="project.demoUrl"
              :videoSrc="project.videoUrl || ''"
              class="max-w-2xl w-full"
            >
              <img
                :src="getImageUrl(project.gallery[0].item)"
                :alt="t(project.gallery[0].altKey)"
                loading="lazy"
                decoding="async"
              />
            </DeviceFrame>
          </div>
        </div>

        <div v-if="project.gallery?.length" class="glass rounded-2xl p-5 sm:p-7">
          <p class="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-5">{{ t('projects.labels.gallery') }}</p>
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
    </div>

    <!-- Lightbox -->
    <Dialog
      v-if="lightboxItem"
      v-model:visible="lightboxVisible"
      modal
      :dismissableMask="true"
      :showHeader="false"
      :pt="{
        root: { class: 'bg-transparent shadow-none border-0' },
        content: { class: 'bg-transparent p-0' },
        mask: { class: 'bg-black/85 backdrop-blur-md' },
      }"
    >
      <div class="relative flex flex-col items-center" @click="lightboxVisible = false">
        <img
          :src="getImageUrl(lightboxItem.item)"
          :alt="t(lightboxItem.altKey)"
          class="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl"
        />
        <p class="mt-3 text-sm text-slate-400">{{ t(lightboxItem.altKey) }}</p>
        <button
          class="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all"
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

const learnedText = computed(() => {
  const key = project.value ? `projects.items.${project.value.slug}.learned` : null
  if (!key) return null
  const val = t(key)
  return val === key ? null : val
})

const caseStudy = computed(() => {
  if (!project.value) return null
  const cs = project.value.caseStudy ?? null
  if (cs) return cs
  // Read from i18n if not in data
  const slug = project.value.slug
  const problem = t(`projects.items.${slug}.caseStudy.problem`)
  if (problem === `projects.items.${slug}.caseStudy.problem`) return null
  return {
    problem,
    solution: t(`projects.items.${slug}.caseStudy.solution`),
    decisions: t(`projects.items.${slug}.caseStudy.decisions`),
    outcomes: t(`projects.items.${slug}.caseStudy.outcomes`),
  }
})

const caseStudyFields = {
  problem:   { icon: 'pi pi-exclamation-circle', color: 'text-red-400' },
  solution:  { icon: 'pi pi-lightbulb',          color: 'text-emerald-400' },
  decisions: { icon: 'pi pi-code',               color: 'text-cyan-400' },
  outcomes:  { icon: 'pi pi-chart-line',          color: 'text-amber-400' },
}

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
