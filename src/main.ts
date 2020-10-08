import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// 引入公共样式
import 'Style/flex.less'
import 'Style/common.css'
import 'Style/flexible.ts'
import 'Style/iconfont.css'

import { elementRegister } from '@/plugins/elementRegister'
import { vueInjecter } from '@/plugins/injecter'

// * ----------------------------------------
// * 组件注册
// * ----------------------------------------
elementRegister()
Vue.use(vueInjecter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
