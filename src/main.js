import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { router } from './router.js'
import 'uno.css';
import './style/base.scss'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.mount('#app')
