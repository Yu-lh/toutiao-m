import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载全局变量样式
import './styles/index.less'

// 导入vant组件
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
