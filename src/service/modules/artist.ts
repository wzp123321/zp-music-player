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
  }
}
