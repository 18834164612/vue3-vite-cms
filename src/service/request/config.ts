//process.env.NODE_ENV
// 开发环境:development
// 生成环境:production
// 测试环境:test

let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://123.207.32.32:8000'
} else if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else {
  BASE_URL = 'http://coderwhy.org/test'
}

export { TIME_OUT, BASE_URL }
