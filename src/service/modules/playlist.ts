/**
 * 歌单模块
 */
import { getRequest } from '../request'

export default {
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
   * 根据id获取歌单详情
   */
  async getPlayListDetailById(params: {
    id: number
  }): Promise<CommonModule.Responsive<{ [key: string]: string }>> {
    try {
      const result: CommonModule.Responsive<{
        [key: string]: string
      }> = await getRequest('/playlist/detail', params)
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}
