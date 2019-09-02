// 处理axios拦截器 请求拦截器 响应拦截器
import axios from 'axios'
import router from '../permission'
import {
  Message
} from 'element-ui'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 赋值基础地址

// 请求拦截器
axios.interceptors.request.use(function (config) {
  // config是axios的默认请求配置和传入的配置结合出来的
  // 必须将config return出来 不return不行
  let token = window.localStorage.getItem('user-token')
  config.headers['Authorization'] = `Bearer ${token}` // 统一注入token
  return config
}, function () {})
// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response.data ? response.data : {}
}, function (error) {
  let status = error.response.status
  let message = ''
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      message = '用户非实名认证用户，无权限登录'
      break
    case 507:
      message = '服务器或数据库异常'
      break
    case 404:
      message = '手机号不正确'
      break
    case 401:
      window.localStorage.clear() // 因为token有可能会过期 清除缓存
      router.push('/login')
      break
    default:
      message = '未知错误'
      break
  }
  Message({
    type: 'warning',
    message
  })
  return new Promise(function () {})
})
export default axios
