<template>
    <div class="flex flex-col h-full bg-white rounded-lg shadow-xl border border-gray-100 
              transition duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden relative">
        <div class="p-5 sm:p-6 flex flex-col flex-grow"> 
            <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{{ project.title }} </h3>

            <p class="text-sm sm:text-base text-gray-600 mb-3 flex-grow">{{ project.description }}</p>

            <div class="flex flex-wrap gap-1 mb-3"> 
                <Tag v-for="tech in project.technologies" :key="tech"
                    :value="tech" 
                    class="font-semibold text-xs px-2 py-0.5 rounded-full" 
                />
            </div>

            <div class="flex flex-wrap gap-2 mt-auto pt-3 sm:pt-4 border-t border-gray-100"> 
                <a :href="project.demoUrl" target="_blank" v-if="project.demoUrl">
                    <Button :label="project.status ? 'Playstore' : 'Demo'"
                        :icon="project.status ? 'pi pi-google' : 'pi pi-external-link'" raised rounded
                        severity="success" size="small" />
                </a>

                <a :href="project.githubUrl" target="_blank" v-if="project.githubUrl">
                    <Button label="Código" icon="pi pi-github" severity="contrast" raised rounded size="small" />
                </a>

                <Button label="Galería" icon="pi pi-images" severity="info" rounded size="small" @click="openGallery"
                    v-if="project.gallery && project.gallery.length" />
            </div>
        </div>

        <Dialog :header="project.title " v-model:visible="displayGallery" modal
            :style="{ width: '70vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">

            <Galleria :value="project.gallery" :numVisible="5" :circular="true" :showThumbnails="false"
                :showIndicators="true" :showItemNavigators="true" containerStyle="max-width: 1100px; margin: auto;">
                <template #item="slotProps">
                    <div class="flex justify-center items-center p-4">
                        <img :src="getImageUrl(slotProps.item.item)" :alt="slotProps.item.alt"
                            class="max-w-full max-h-[80vh] object-contain block shadow-2xl" />
                    </div>
                </template>
            </Galleria>

        </Dialog>
    </div>
</template>

<script setup>
import Button from 'primevue/button';
import Galleria from 'primevue/galleria';
import Dialog from 'primevue/dialog';
import Tag from 'primevue/tag';
import { ref } from 'vue';

const props = defineProps({
    project: {
        type: Object,
        required: true,
        default: () => ({ gallery: [] }),
    },
});

const displayGallery = ref(false);

const openGallery = () => {
    displayGallery.value = true;
};

const getImageUrl = (imageName) => {
    if (!imageName) return null;
    try {
        return new URL(`../assets/img/${imageName}`, import.meta.url).href;
    } catch (e) {
        return null;
    }
};

</script>

<style scoped>
:global(.p-tag.text-xs) {
    font-size: 0.7rem !important;
    padding: 0.2rem 0.4rem !important;
    line-height: 1 !important;
}


</style>