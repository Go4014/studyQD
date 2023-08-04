import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
// 导入并注册 element-ui 组件
import './element-ui'
import { Loading } from 'element-ui'

import axios from 'axios'
// 配置请求根路径
// axios.defaults.baseURL = 'https://www.escook.cn'
axios.defaults.baseURL = 'http://localhost:8080'
// 配置请求拦截器
let loadingInstance = null
axios.interceptors.request.use((config) => {
  // 展示 loading 效果
  loadingInstance = Loading.service({ fullscreen: true })
  // 配置 Token 认证
  config.headers.Authorization = 'Bearer xxx'
  console.log(config)
  // 这是固定写法
  return config
})

// 配置响应拦截器
axios.interceptors.response.use((response) => {
  // 关闭 loading 效果
  loadingInstance.close()
  return response
})
Vue.prototype.$http = axios

const app = new Vue({
  render: (h) => h(App),
  // router: router
  router,
})

app.$mount('#app')
