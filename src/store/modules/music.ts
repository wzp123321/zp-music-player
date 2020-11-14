import { Module } from 'vuex'

interface MusicState {
  musicInfo: any
  musicIndex: number
  musicList: MusicModule.MusicInfo[]
  playHistroy: MusicModule.MusicInfo[]
}

const Music: Module<MusicState, {}> = {
  namespaced: true,
  state: {
    musicInfo: {},
    musicIndex: 0,
    musicList: [],
    playHistroy: []
  },
  mutations: {
    // 设置当前正在播放的音乐地址
    setCurrentMusicIndex(state: MusicState, data: number) {
      if (state.musicList.length === 0) {
        return
      }
      state.musicIndex = data
      state.musicInfo =
        state.musicList.length === 0 ? {} : state.musicList[data]
      const playHistroy = JSON.parse(
        window.localStorage.getItem('zp_music_play_history') || '[]'
      )
      if (playHistroy.length === 0) {
        state.playHistroy = [state.musicInfo]
        console.log(state.playHistroy)
      } else {
        const ids = playHistroy.map((item: any) => {
          return item.id
        })
        if (!ids.includes(state.musicInfo.id)) {
          playHistroy.push(state.musicInfo)
        }
        state.playHistroy = playHistroy
      }
      window.localStorage.setItem(
        'zp_music_play_history',
        JSON.stringify(state.playHistroy)
      )
    },
    // 设置当前音乐列表
    setCurrentMusicList(state: MusicState, data: any) {
      state.musicList = data
    }
  },
  actions: {
    // 设置当前正在播放的音乐地址
    async setCurrentMusicIndex({ commit }, data: number) {
      return commit('setCurrentMusicIndex', data)
    },
    // 设置当前音乐列表
    async setCurrentMusicList({ commit }, data: any) {
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
      return state.musicInfo
    },
    /**
     * 获取音乐列表
     * @param state
     */
    musicList(state: MusicState) {
      return state.musicList
    },
    /**
     * 播放历史
     */
    playHistroy(state: MusicState) {
      const playHistroy = JSON.parse(
        window.localStorage.getItem('zp_music_play_history') || '[]'
      )
      if (playHistroy && playHistroy.length > 0) {
        state.playHistroy = playHistroy
      }
      return state.playHistroy
    }
  }
}

export default Music
