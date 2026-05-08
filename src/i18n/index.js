import { createI18n } from 'vue-i18n'
import es from './locales/es.json'
import en from './locales/en.json'

export const SUPPORTED_LOCALES = ['es', 'en']
export const DEFAULT_LOCALE = 'es'
export const STORAGE_KEY = 'portfolio.locale'

function detectInitialLocale() {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  const stored = window.localStorage?.getItem(STORAGE_KEY)
  if (stored && SUPPORTED_LOCALES.includes(stored)) return stored
  const navLang = window.navigator?.language?.slice(0, 2)
  if (SUPPORTED_LOCALES.includes(navLang)) return navLang
  return DEFAULT_LOCALE
}

const initial = detectInitialLocale()

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: initial,
  fallbackLocale: DEFAULT_LOCALE,
  messages: { es, en },
})

if (typeof document !== 'undefined') {
  document.documentElement.lang = initial
}

export default i18n
