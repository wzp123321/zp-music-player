import { getRequest, postRequest } from '@/service/request'

const MusicApi = {
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
   *根据ids获取歌曲详情
   */
  async getMusicDetailByIds(params: {
    ids: string
  }): Promise<CommonModule.Responsive<MusicModule.SongInfo[]>> {
    try {
      const result: CommonModule.Responsive<MusicModule.SongInfo[]> = await getRequest(
        '/song/detail',
        params
      )
      return result
    } catch (error) {
      throw new Error(error)
    }
  },
  /**
   *根据ids获取歌曲url
   */
  async getMusicUrlById(params: {
    id: string
  }): Promise<CommonModule.Responsive<MusicModule.SongInfo[]>> {
    try {
      const result: CommonModule.Responsive<MusicModule.SongInfo[]> = await getRequest(
        '/song/url',
        params
      )
      return result
    } catch (error) {
      throw new Error(error)
    }
  },
  /**
   *根据id获取专辑详情
   */
  async getAlbumInfoById(params: {
    id: number
  }): Promise<CommonModule.Responsive<any>> {
    try {
      const result: CommonModule.Responsive<any> = await getRequest(
        '/album',
        params
      )
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default MusicApi
