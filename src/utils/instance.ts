import axios from 'axios'
// import Vue from 'vue'
// import { apiUrl } from '@/config'

import * as util from './methods'

// const { $message } = Vue.prototype

const instance = axios.create({
  // baseURL: apiUrl,
  timeout: 420000
})
instance.defaults.headers.post['Content-Type'] = 'application/json'
// 错误处理
instance.interceptors.response.use(response => {
  if (response.data.code === 401) {
    setTimeout(() => {
      window.location.href = '/'
    }, 1000)
  }
  return response
}, util.catchError)

export default instance
