import childrenComponent from './index.vue'
const childrenComp = {
  install: function (Vue) {
    Vue.component('zpLoading', childrenComponent)
  }
}
export default childrenComp
