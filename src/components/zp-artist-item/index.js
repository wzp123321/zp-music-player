import childrenComponent from './index.vue'
const childrenComp = {
  install: function (Vue) {
    Vue.component('zpArtistItem', childrenComponent)
  }
}
export default childrenComp
