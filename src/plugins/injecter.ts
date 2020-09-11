/**
 * @author zpwan
 * @description 注入器
 */

import Vue from 'vue'
import { addCssByLink, formatDuration, debounce, throttle } from 'Utils/index'

const vueInjecter = {
  install: (Vue: any, options: any) => {
    Vue.prototype.$addCssByLink = addCssByLink // 节流
    Vue.prototype.$formatDuration = formatDuration // 节流
    Vue.prototype.$debounce = debounce // 节流
    Vue.prototype.$throttle = throttle // 节流
  }
}

export { vueInjecter }
