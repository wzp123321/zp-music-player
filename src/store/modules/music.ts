import { Module } from 'vuex'

interface MusicState {
  src: string
  musicIndex: number
  musicList: any[]
}

const Music: Module<MusicState, {}> = {
  namespaced: true,
  state: {
    src: '',
    musicIndex: 0,
    musicList: []
  },
  mutations: {
    // 设置当前正在播放的音乐地址
    setCurrentSrc(state: MusicState, data: number) {
      // 存入缓存
      window.localStorage.setItem('zpwan_music_index', data + '')
      state.musicIndex = data
      state.src = state.musicList.length === 0 ? '' : state.musicList[data].src
    },
    // 设置当前音乐列表
    setCurrentMusicList(state: MusicState, data: any[]) {
      // 存入缓存
      window.localStorage.setItem('zpwan_music_list', data + '')
      state.musicList = data
    }
  },
  actions: {
    // 设置当前正在播放的音乐地址
    async setCurrentSrc({ commit }, data: number) {
      return commit('setCurrentSrc', data)
    },
    // 设置当前音乐列表
    async setCurrentMusicList({ commit }, data: any[]) {
      return commit('setCurrentMusicList', data)
    }
  },
  getters: {
    src(state: MusicState) {
      const musicIndex = Number(
        window.localStorage.getItem('zpwan_music_index') || '0'
      )
      const src =
        state.musicList.length === 0
          ? ''
          : !musicIndex
          ? state.musicList[0].src
          : state.musicList[musicIndex].src
      return src
    },
    /**
     * 获取音乐列表
     * @param state
     */
    musicList(state: MusicState) {
      const musicList = window.localStorage.getItem('zpwan_music_list') || []
      return Object.keys(musicList).length === 0 ? state.musicList : musicList
    }
  }
}

export default Music
