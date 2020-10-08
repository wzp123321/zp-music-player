/**
 * @author zpwan
 * @description 注入器
 */

import {
  addCssByLink,
  formatDuration,
  debounce,
  throttle,
  audioPlay
} from '@/utils/index'

const vueInjecter = {
  install: (Vue: any, options: any) => {
    Vue.prototype.$addCssByLink = addCssByLink // 添加样式文件
    Vue.prototype.$formatDuration = formatDuration // 格式化时长
    Vue.prototype.$debounce = debounce // 防抖
    Vue.prototype.$throttle = throttle // 节流
    Vue.prototype.$audioPlay = audioPlay // 音频播放
  }
}

export { vueInjecter }
