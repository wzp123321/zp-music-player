import childrenComponent from './index.vue'
const childrenComp = {
  install: function (Vue) {
    Vue.component('zpPlaylistItem', childrenComponent)
  }
}
export default childrenComp
