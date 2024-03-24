import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './routes'
import Popper from "vue3-popper";


const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.component("Popper", Popper);
app.mount('#app')

