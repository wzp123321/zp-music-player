import childrenComponent from './index.vue'
const childrenComp = {
  install: function (Vue) {
    Vue.component('zpMvDialog', childrenComponent)
  }
}
export default childrenComp
