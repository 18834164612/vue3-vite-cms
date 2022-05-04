//process.env.NODE_ENV
// 开发环境:development
// 生成环境:production
// 测试环境:test

let BASE_URL = ''
let BASE_NAME = ''

if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderwhy.org/prod'
  BASE_NAME = 'coderwhy'
} else if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://coderwhy.org/dev'
  BASE_NAME = 'kobe'
} else {
  BASE_URL = 'http://coderwhy.org/test'
  BASE_NAME = 'james'
}

export { BASE_NAME, BASE_URL }
