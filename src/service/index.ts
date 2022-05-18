//service统一出口
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const hyrequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config: any) => {
      //携带token拦截
      const token = ''
      if (token) {
        config.headers.Authoriziation = `Bearer${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default hyrequest
