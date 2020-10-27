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
   */
  async getRecentMusicList(params: {}): Promise<
    CommonModule.Responsive<MusicModule.MusicInfo[]>
  > {
    try {
      const result: CommonModule.Responsive<MusicModule.MusicInfo[]> = await getRequest(
        '/personalized/newsong',
        params
      )
      return result
    } catch (error) {
      throw new Error(error)
    }
  },
  /**
   * 获取推荐mv
   */
  async getRecommendMvList(params: {
    limit?: number
  }): Promise<CommonModule.Responsive<MusicModule.MvInfo[]>> {
    try {
      const result: CommonModule.Responsive<MusicModule.MvInfo[]> = await getRequest(
        '/personalized/mv',
        params
      )
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default MusicApi
