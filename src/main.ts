import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import {routes} from "./router"
import {createPinia} from "pinia"
import App from './App.vue'




const pinia =createPinia()
const router = createRouter({
    history:createWebHashHistory(),
    routes, 
})

createApp(App).use(router).use(pinia).mount('#app')
