import { getRequest, postRequest } from '../request'

const CommentApi = {
  /**
   * 获取歌单评论列表
   * @param params id:歌单id
   * @param params offset:分页
   */
  async getPlayListCommentListById(params: {
    id: number
    offset: number
  }): Promise<CommonModule.ListResponse<DataModule.CommentInfo>> {
    try {
      const result: CommonModule.ListResponse<DataModule.CommentInfo> = await getRequest(
        '/comment/playlist',
        params
      )
      return result
    } catch (error) {
      throw new Error(error)
    }
  },
  /**
   * 获取专辑评论列表
   * @param params id:专辑id
   * @param params offset:分页
   */
  async getAlbumCommentListById(params: {
    id: number
    offset: number
  }): Promise<CommonModule.ListResponse<DataModule.CommentInfo>> {
    try {
      const result: CommonModule.ListResponse<DataModule.CommentInfo> = await getRequest(
        '/comment/album',
        params
      )
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default CommentApi
