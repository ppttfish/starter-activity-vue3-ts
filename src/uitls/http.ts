import axios from 'axios'
import { Toast } from 'vant/es'

const httpIntance = axios.create({
  baseURL: '/',
  timeout: 10000
})

// 请求拦截器
// instance.interceptors.request.use((config) => {})

// 响应拦截器
httpIntance.interceptors.response.use(
  (response) => {
    const { code, errmsg } = response.data

    if (code === 1) {
      return Promise.resolve(response.data)
    } else {
      // 请求成功 业务失败提示
      Toast(errmsg)
      return Promise.reject(new Error(errmsg))
    }
  },
  // 请求失败提示
  (error) => {
    console.log('error', error)
    return Promise.reject(new Error(error))
  }
)

export { httpIntance }
