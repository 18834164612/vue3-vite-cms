import { createApp } from 'vue'
import { registerApp } from './global'
import './service/demo_axios'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

registerApp(app)
app.use(router)
app.use(store)
app.mount('#app')
console.log(process.env)
