import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // 1. Importa o roteador

const app = createApp(App)

app.use(router) // 2. Diz para o app usar o roteador
app.mount('#app')