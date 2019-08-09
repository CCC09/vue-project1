import axios from 'axios'
import store from '@/store'
import JSONBIG from 'json-bigint'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'

axios.defaults.transformResponse = [(data) => {
  try {
    return JSONBIG.parse(data)
  } catch (e) {
    return data
  }
}]

// axios.defaults.headers = {
//   Authorization: `Bearer ${store.getUser().token}`
// }
// 防止覆盖原有的headers
// axios.defaults.headers.Authorization = `Bearer ${store.getUser().token}`
// 请求拦截
axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${store.getUser().token}`
  return config
}, (err) => {
  return Promise.reject(err)
})

// 响应拦截
axios.interceptors.response.use((res) => {
  return res
}, (err) => {
  if (err.response.status === 401) {
    location.hash = '#/login'
  }
  return Promise.reject(err)
})

export default axios
