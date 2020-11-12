import childrenComponent from './index.vue'
const childrenComp = {
  install: function (Vue) {
    Vue.component('zpAlbumItem', childrenComponent)
  }
}
export default childrenComp
