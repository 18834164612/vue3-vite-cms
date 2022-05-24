import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './type'
import { ElLoading } from 'element-plus/lib/components/loading/index'

class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  showLoading: boolean

  constructor(config: HYRequestConfig) {
    //创建实例
    this.instance = axios.create(config)

    //保存基本信息
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? true

    //从config中取出的拦截器是对应实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    //添加所有实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('所有实例都有的拦截器')
        if (this.showLoading) {
          const loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'rgba(0,0,0,0.5)'
          })
          //应该再请求响应成功中
          loading.close()
        }
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data
        if (data.returnCode === '-1010') {
          // console.log('请求失败')
        } else {
          return data
        }
        // console.log(data)
        return res.data
      },
      (err) => {
        if (err.response.status === 404) {
          console.log('错误404')
        }
        return err
      }
    )
  }

  request<T>(config: HYRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          //将showLoading设置为true,这样不会影响下一个请求
          this.showLoading = true

          //将结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          //将showLoading设置为true,这样不会影响下一个请求
          this.showLoading = true
          reject(err)
        })
    })
  }

  get<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default HYRequest
