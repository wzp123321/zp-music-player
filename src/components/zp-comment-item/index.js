import childrenComponent from './index.vue'
const childrenComp = {
  install: function (Vue) {
    Vue.component('zpCommentItem', childrenComponent)
  }
}
export default childrenComp
