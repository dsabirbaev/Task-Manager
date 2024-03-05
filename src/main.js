

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import './style.css'


import App from './App.vue'
import router from './router'


import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css"; //icons

import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

const app = createApp(App)

app.use(createPinia())
app.component('Toast', Toast);
app.use(ToastService);
app.use(router)
app.use(PrimeVue);
app.mount('#app')
