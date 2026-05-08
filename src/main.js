import './assets/main.css'

import '@fontsource-variable/inter'
import '@fontsource-variable/space-grotesk'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Lara from '@primevue/themes/lara'
import ToastService from 'primevue/toastservice'
import { createHead } from '@unhead/vue'
import { MotionPlugin } from '@vueuse/motion'

import router from './router'
import i18n from './i18n'
import App from './App.vue'
import { magnetic } from './directives/magnetic'

import AOS from 'aos'
import 'aos/dist/aos.css'
import Chip from 'primevue/chip'
import 'primeicons/primeicons.css'

const app = createApp(App)

AOS.init({
  once: true,
  duration: 800,
  disable: () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
})

app.component('Chip', Chip)
app.directive('magnetic', magnetic)
app.use(router)
app.use(i18n)
app.use(createHead())
app.use(MotionPlugin)
app.use(ToastService)
app.use(PrimeVue, {
  theme: { preset: Lara, options: { darkModeSelector: 'system' } },
})
app.mount('#app')
