import { getRequest, postRequest } from '../request'

const CommentApi = {
  /**
   * 获取歌单评论列表
   * @param params resourceId : 资源 id, 如歌曲 id,mv id
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
  }
}

export default CommentApi
