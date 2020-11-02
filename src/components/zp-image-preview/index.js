import childrenComponent from './index.vue'
const childrenComp = {
  install: function (Vue) {
    Vue.component('zpImagePreview', childrenComponent)
  }
}
export default childrenComp
