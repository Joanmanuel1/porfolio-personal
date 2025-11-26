import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Lara from '@primevue/themes/lara'
import router from './router'
import App from './App.vue'

import AOS from 'aos';
import 'aos/dist/aos.css';

import 'primeicons/primeicons.css';

const app = createApp(App)

AOS.init({
  once: true,
  duration: 800,
});

app.use(router);
app.use(PrimeVue, {
  theme: { preset: Lara, options: { darkModeSelector: 'system' } }
});
app.mount('#app')