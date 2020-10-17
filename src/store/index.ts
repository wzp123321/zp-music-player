import Vue from 'vue'
import Vuex from 'vuex'
import MusicModule from './modules/music'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    music: MusicModule
  }
})
