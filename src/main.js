import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入route
import endpoint from "./router/endpoint"

createApp(App).use(endpoint).mount('#app')
