import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

export function useSeo({ titleKey, descKey, image, type = 'website' } = {}) {
  const { t } = useI18n()
  const title = computed(() => (titleKey ? t(titleKey) : undefined))
  const description = computed(() => (descKey ? t(descKey) : undefined))

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      ...(image
        ? [
            { property: 'og:image', content: image },
            { name: 'twitter:image', content: image },
          ]
        : []),
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
    ],
  })
}
