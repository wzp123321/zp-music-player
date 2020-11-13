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
  },
  /**
   * 根据id获取mv播放地址
   */
  async getVideoUrlById(params: {
    id: number
  }): Promise<CommonModule.Responsive<any>> {
    try {
      const result: CommonModule.Responsive<any> = await getRequest(
        '/video/url',
        params
      )
      return result
    } catch (error) {
      throw new Error(error)
    }
  },
  /**
   * 获取mv列表
   * @param params area: 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部
   * @param params type: 类型,可选值为全部,官方版,原生,现场版,网易出品,不填则为全部
   * @param params order: 排序,可选值为上升最快,最热,最新,不填则为上升最快
   * @param params offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
   */
  async getMvList(params: {
    area: string
    type: string
    order: string
    offset: number
    limit: number
  }): Promise<CommonModule.Responsive<any>> {
    try {
      const result: CommonModule.Responsive<any> = await getRequest(
        '/mv/all',
        params
      )
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}
