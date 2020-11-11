/**
 * mv模块
 */
import { getRequest } from '../request'

export default {
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
  },
  /**
   * 根据id获取mv播放地址
   */
  async getMvUrlById(params: {
    id: number
  }): Promise<CommonModule.Responsive<{ [key: string]: string }>> {
    try {
      const result: CommonModule.Responsive<{
        [key: string]: string
      }> = await getRequest('/mv/url', params)
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}
