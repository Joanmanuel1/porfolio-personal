import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES, STORAGE_KEY } from '@/i18n'

export function useLocale() {
  const { locale } = useI18n()

  const current = computed(() => locale.value)

  function setLocale(code) {
    if (!SUPPORTED_LOCALES.includes(code)) return
    locale.value = code
    try {
      window.localStorage.setItem(STORAGE_KEY, code)
    } catch {}
    if (typeof document !== 'undefined') {
      document.documentElement.lang = code
    }
  }

  return { current, setLocale, locales: SUPPORTED_LOCALES }
}
