import { createApp } from 'vue'

import App from './App'
import store from './store/index'
import './style/index.css'
import './style/index.scss'
import 'element-plus/dist/index.css'
import router from './router'
// 注入全局的store
const app = createApp(App).use(store).use(router)

app.mount('#app')
