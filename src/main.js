import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ProgressBar from './components/ProgressBar.vue'
import SideBar from './components/SideBar.vue'
import AppHeader from './Layouts/AppHeader.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.component('ProgressBar', ProgressBar)
app.component('SideBar', SideBar)
app.component('AppHeader', AppHeader)

app.mount('#app')
