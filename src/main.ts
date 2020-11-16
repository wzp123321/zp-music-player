import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import bus from '@/utils/eventBus'
import { Route } from 'vue-router'
// 引入公共样式
import '@/style/flex.less'
import '@/style/common.less'
import '@/style/iconfont.css'
import '@/assets/ts/rem.ts'

// 引入mixins
import commonFnMixins from '@/utils/mixins'

Vue.mixin(commonFnMixins)

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

router.beforeEach((to: Route, from: Route, next: Function) => {
  if (from.meta.name) {
    document.title = from.meta.name
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
