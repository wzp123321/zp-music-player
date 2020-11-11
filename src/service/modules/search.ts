import { getRequest } from '../request'

export default {
  /**
   * 获取搜索默认关键词
   * @param params
   */
  async getSearchDefaultKeyword(params: {}): Promise<
    CommonModule.Responsive<{ [key: string]: string }>
  > {
    try {
      const result: CommonModule.Responsive<{
        [key: string]: string
      }> = await getRequest('/search/default', params)
      return result
    } catch (error) {
      throw new Error(error)
    }
  },
  /**
   * 搜索
   * @param params keywords 关键词
   * @param params offset 偏移数量，用于分页
   * @param params type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
   */
  async getSearch(params: {
    keywords: string
    offset: number
    type: number
  }): Promise<CommonModule.Responsive<{ [key: string]: any }>> {
    try {
      const result: CommonModule.Responsive<{
        [key: string]: any
      }> = await getRequest('/search', params)
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}
