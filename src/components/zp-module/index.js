import childrenComponent from './index.vue'
const childrenComp = {
  install: function (Vue) {
    Vue.component('zpModule', childrenComponent)
  }
}
export default childrenComp
