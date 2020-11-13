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
  },
  /**
   * 获取歌单分类
   */
  async getPlayListHotCat(params: {}): Promise<any> {
    try {
      const result: any = await getRequest('/playlist/hot', params)
      return result
    } catch (error) {
      throw new Error(error)
    }
  },
  /**
   *获取精品歌单标签
   * @param params
   */
  async getQualityPlaylistTags(params: {}): Promise<
    CommonModule.Responsive<any>
  > {
    try {
      const result: CommonModule.Responsive<any> = await getRequest(
        '/playlist/highquality/tags',
        params
      )
      return result
    } catch (error) {
      throw new Error(error)
    }
  },
  /**
   * 歌单 ( 网友精选碟 )
   * @param params cat,
   * @param params offset 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值
   */
  async getPlayList(params: { cat?: string; offset: number }): Promise<any> {
    try {
      const result: any = await getRequest('/top/playlist', params)
      return result
    } catch (error) {
      throw new Error(error)
    }
  },
  /**
   * 精品歌单列表
   * @param params cat,
   * @param params offset 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值
   */
  async getHighQualityPlaylist(params: {
    cat?: string
    offset: number
  }): Promise<any> {
    try {
      const result: any = await getRequest('/top/playlist/highquality', params)
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}
