import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// 引入公共样式
import 'Assets/common/flex.less'
import 'Assets/common/common.css'
import 'Assets/common/flexible.ts'

import { elementRegister } from 'Plugins/elementRegister'

// * ----------------------------------------
// * 组件注册
// * ----------------------------------------
elementRegister()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
