import childrenComponent from './index.vue'
const childrenComp = {
  install: function (Vue) {
    Vue.component('zpMvItem', childrenComponent)
  }
}
export default childrenComp
