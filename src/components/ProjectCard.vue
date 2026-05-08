<template>
  <article class="flex flex-col h-full bg-white rounded-lg shadow-xl border border-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden relative">
    <div class="p-5 sm:p-6 flex flex-col flex-grow">
      <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
        {{ t(project.titleKey) }}
      </h3>

      <p class="text-sm sm:text-base text-gray-600 mb-3 flex-grow">
        {{ t(project.descriptionKey) }}
      </p>

      <div class="flex flex-wrap gap-1 mb-3">
        <Tag v-for="tech in project.technologies" :key="tech" :value="tech"
          class="font-semibold text-xs px-2 py-0.5 rounded-full" />
      </div>

      <div class="flex flex-wrap gap-2 mt-auto pt-3 sm:pt-4 border-t border-gray-100">
        <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" rel="noopener">
          <Button
            :label="project.status ? t('projects.labels.playstore') : t('projects.labels.demo')"
            :icon="project.status ? 'pi pi-google' : 'pi pi-external-link'"
            raised rounded severity="success" size="small"
          />
        </a>

        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener">
          <Button :label="t('projects.labels.code')" icon="pi pi-github" severity="contrast" raised rounded size="small" />
        </a>

        <Button v-if="project.gallery?.length" :label="t('projects.labels.gallery')" icon="pi pi-images"
          severity="info" rounded size="small" @click="openGallery" />
      </div>
    </div>

    <Dialog
      :header="t(project.titleKey)"
      v-model:visible="displayGallery"
      modal
      :style="{ width: '70vw' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
      :dismissableMask="true"
    >
      <Galleria :value="project.gallery" :numVisible="5" :circular="true" :showThumbnails="false"
        :showIndicators="true" :showItemNavigators="true" containerStyle="max-width: 1100px; margin: auto;">
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
import Button from 'primevue/button'
import Galleria from 'primevue/galleria'
import Dialog from 'primevue/dialog'
import Tag from 'primevue/tag'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useImageUrl } from '@/composables/useImageUrl'

defineProps({
  project: {
    type: Object,
    required: true,
    default: () => ({ gallery: [] }),
  },
})

const { t } = useI18n()
const getImageUrl = useImageUrl()
const displayGallery = ref(false)
const openGallery = () => (displayGallery.value = true)
</script>

<style scoped>
:global(.p-tag.text-xs) {
  font-size: 0.7rem !important;
  padding: 0.2rem 0.4rem !important;
  line-height: 1 !important;
}
</style>
