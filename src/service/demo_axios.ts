import axios from 'axios'

axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res)
})

axios
  .get('http://httpbin.org/get', {
    params: {
      name: 'codewhy',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  })

//axios的配置选项
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000 //超时时间
//axios.defaults.headers = {} //默认的header
//post
axios
  .post('http://httpbin.org/post', {
    data: {
      name: 'codewhy',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  })

//axios.all  多个请求,一起返回
axios
  .all([
    axios.get('/get', { params: { name: 'why', age: 18 } }),
    axios.post('/post', { data: { name: 'why', age: 18 } })
  ])
  .then((res) => {
    console.log(res[0].data)
    console.log(res[1].data)
  })

//axios拦截器

//请求拦截
//fn1:请求发送成功会执行的函数  fn2:请求发送失败会执行的函数
axios.interceptors.request.use(
  (config) => {
    //1.给请求添加token
    //2.isLoading动画
    console.log('请求成功的拦截')
    return config
  },
  (err) => {
    console.log('请求发送错误')
    return err
  }
)

//响应拦截
//fn1:数据响应成功(服务器正常的返回数据)
//fn2:服务器响应失败
axios.interceptors.response.use(
  (res) => {
    console.log('响应成功的拦截')
    return res
  },
  (err) => {
    console.log('服务器响应失败')
    return err
  }
)
