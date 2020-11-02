import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import bus from '@/utils/eventBus'

// 引入公共样式
import '@/style/flex.less'
import '@/style/common.less'
import '@/style/iconfont.css'
import '@/assets/ts/rem.ts'

import { elementRegister } from '@/plugins/elementRegister'
import { vueInjecter } from '@/plugins/injecter'
import { customRegister } from '@/plugins/customCompRejecter'

// * ----------------------------------------
// * 组件注册
// * ----------------------------------------
elementRegister()
Vue.use(vueInjecter)
customRegister()
Vue.prototype.$bus = new Vue()
Vue.prototype.bus = bus
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
