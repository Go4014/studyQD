import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入并安装 Vant 组件库
import Vant from 'vant'
// 切记：为了能够覆盖默认的 less 变量，这里一定要把后缀名改为 .less
import 'vant/lib/index.less'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
