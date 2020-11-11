import childrenComponent from './index.vue'
const childrenComp = {
  install: function (Vue) {
    Vue.component('zpMusicTable', childrenComponent)
  }
}
export default childrenComp
