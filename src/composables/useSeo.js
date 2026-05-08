import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const siteUrl = import.meta.env.VITE_SITE_URL ?? ''

function toAbsolute(url) {
  if (!url) return undefined
  if (url.startsWith('http')) return url
  return siteUrl + url
}

export function useSeo({ titleKey, descKey, image, type = 'website' } = {}) {
  const { t } = useI18n()
  const title = computed(() => (titleKey ? t(titleKey) : undefined))
  const description = computed(() => (descKey ? t(descKey) : undefined))
  const ogImage = computed(() => toAbsolute(typeof image === 'function' ? image() : image))

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:image', content: () => ogImage.value ?? toAbsolute('/og-image.png') },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: () => ogImage.value ?? toAbsolute('/og-image.png') },
    ],
  })
}
