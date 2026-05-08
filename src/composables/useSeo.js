import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const siteUrl = import.meta.env.VITE_SITE_URL ?? ''

function toAbsolute(url) {
  if (!url) return undefined
  if (url.startsWith('http')) return url
  return siteUrl + url
}

export function useSeo({ titleKey, descKey, image, type = 'website', noindex = false } = {}) {
  const { t } = useI18n()
  const route = useRoute()
  const title = computed(() => (titleKey ? t(titleKey) : undefined))
  const description = computed(() => (descKey ? t(descKey) : undefined))
  const ogImage = computed(() => toAbsolute(typeof image === 'function' ? image() : image))
  const canonical = computed(() => siteUrl ? siteUrl + route.path : undefined)

  useHead({
    title,
    link: [
      ...(canonical.value ? [{ rel: 'canonical', href: canonical }] : []),
    ],
    meta: [
      { name: 'description', content: description },
      { name: 'robots', content: noindex ? 'noindex,nofollow' : 'index,follow' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: canonical },
      { property: 'og:image', content: () => ogImage.value ?? toAbsolute('/og-image.png') },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: () => ogImage.value ?? toAbsolute('/og-image.png') },
    ],
  })
}
