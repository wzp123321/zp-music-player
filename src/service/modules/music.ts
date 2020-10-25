import { getRequest, postRequest } from '@/service/request'

const MusicApi = {
  /**
   * 获取推荐歌单
   * @param params limit
   */
  async getRecommendPlayList(params: {
    limit?: number
  }): Promise<CommonModule.Responsive<MusicModule.PlayListInfo[]>> {
    try {
      const result: CommonModule.Responsive<MusicModule.PlayListInfo[]> = await getRequest(
        '/personalized',
        params
      )
      return result
    } catch (error) {
      throw new Error(error)
    }
  },
  /**
   * 获取最新歌曲
   * @param params 0: pc   1: android   2: iphone   3: ipad
   */
  async getRecentMusicList(params: {
    limit?: number
  }): Promise<CommonModule.Responsive<MusicModule.MusicInfo[]>> {
    try {
      const result: CommonModule.Responsive<MusicModule.MusicInfo[]> = await getRequest(
        '/top/song',
        params
      )
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default MusicApi
