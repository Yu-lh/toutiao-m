// 请求模块
import axios from 'axios'
import store from '@/store'

const request = axios.create({
  baseURL: 'http://toutiao.itheima.net/' // 基础路径
})

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    // 请求发起会经过这里
    // config ： 本次请求的配置对象
    const { user } = store.state
    if (user && user.token) {
      config.headers.Authorization = `Bearer ${user.token}`
    }
    //  注：这里务必要返回配置对象，否则请求就停在这里，出不去了
    return config
  },
  function (error) {
    // 如果请求出错（还没有发出去）会经过这里
    return Promise.reject(error)
  }
)

// 响应拦截器

export default request
