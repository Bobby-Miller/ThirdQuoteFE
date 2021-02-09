import { createApp } from 'vue'
import Equal from './index'
import App from './App.vue'
import router from './router'

const app = createApp(App).use(Equal).use(router).mount('#app')

