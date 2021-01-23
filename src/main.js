import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 入口文件引入公共样式
import './common/stylus/index.styl'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
