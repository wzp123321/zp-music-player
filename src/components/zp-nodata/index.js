import childrenComponent from './index.vue'
const childrenComp = {
  install: function (Vue) {
    Vue.component('zpNoData', childrenComponent)
  }
}
export default childrenComp
