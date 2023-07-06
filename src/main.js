import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

createApp(App).use(store).use(router).use(AOS.init()).mount('#app')
