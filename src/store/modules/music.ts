import { Module } from 'vuex'

interface MusicState {
  musicInfo: { id: string; picUrl: string; name: string; artist: string }
  musicIndex: number
  musicList: { id: string; picUrl: string; name: string; artist: string }[]
}

const Music: Module<MusicState, {}> = {
  namespaced: true,
  state: {
    musicInfo: {
      id: '',
      name: '',
      artist: '',
      picUrl: ''
    },
    musicIndex: 0,
    musicList: []
  },
  mutations: {
    // 设置当前正在播放的音乐地址
    setCurrentMusicIndex(state: MusicState, data: number) {
      // 存入缓存
      window.localStorage.setItem('zpwan_music_index', data + '')
      state.musicIndex = data
      state.musicInfo =
        state.musicList.length === 0
          ? {
              id: '',
              name: '',
              picUrl: '',
              artist: ''
            }
          : state.musicList[data]
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
    async setCurrentMusicIndex({ commit }, data: number) {
      return commit('setCurrentMusicIndex', data)
    },
    // 设置当前音乐列表
    async setCurrentMusicList({ commit }, data: any[]) {
      return commit('setCurrentMusicList', data)
    }
  },
  getters: {
    /**
     * 获取音乐列表
     * @param state
     */
    musicIndex(state: MusicState) {
      return state.musicIndex
    },
    /**
     *
     * @param state 音乐响起
     */
    musicInfo(state: MusicState) {
      const musicIndex = Number(
        window.localStorage.getItem('zpwan_music_index') || '0'
      )
      const musicInfo =
        state.musicList.length === 0
          ? {}
          : !musicIndex
          ? state.musicList[0]
          : state.musicList[musicIndex]
      return musicInfo
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
