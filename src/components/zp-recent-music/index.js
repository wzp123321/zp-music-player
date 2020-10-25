import childrenComponent from './index.vue'
const childrenComp = {
  install: function (Vue) {
    Vue.component('zpRecentMusic', childrenComponent)
  }
}
export default childrenComp
