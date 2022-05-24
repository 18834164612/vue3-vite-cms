import { createApp } from 'vue'
import { registerApp } from './global'
import hyrequest from './service/index'
import 'normalize.css'
import './assets/css/index.less'
import { setupStore } from './store'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

registerApp(app)
app.use(router)
app.use(store)
setupStore()

app.mount('#app')

// hyrequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的response')
//       return res
//     }
//   }
// })
// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// hyrequest
//   .request<DataType>({
//     url: '/home/multidata',
//     showLoading: false
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//   })
