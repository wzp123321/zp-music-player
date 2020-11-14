import { getRequest } from '../request'

export default {
  /**
   * 获取歌手描述
   * @param params id:歌手id
   */
  async getArtistDescription(params: { id: number }): Promise<any> {
    try {
      const result: any = await getRequest('/artist/desc', params)
      return result
    } catch (error) {
      throw new Error(error)
    }
  },
  /**
   * 获取热门歌手
   * @param params offset:分页
   */
  async getHotArtistList(params: { offset: number }): Promise<any> {
    try {
      const result: any = await getRequest('/top/artists', params)
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}
