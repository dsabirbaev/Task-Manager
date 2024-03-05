import './style.css'
import 'primeicons/primeicons.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';




import App from './App.vue'
import router from './router'


import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css"; //icons

const app = createApp(App)

app.use(createPinia())

app.use(router)
app.use(PrimeVue);
app.mount('#app')
