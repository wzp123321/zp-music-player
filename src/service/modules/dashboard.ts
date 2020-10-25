import { getRequest, postRequest } from '@/service/request'

const DashboardApi = {
  /**
   * 获取banner列表
   * @param params 0: pc   1: android   2: iphone   3: ipad
   */
  async getDashboardBannerList(params: {
    type: number
  }): Promise<CommonModule.Responsive<MusicModule.BannerInfo[]>> {
    try {
      const result: CommonModule.Responsive<MusicModule.BannerInfo[]> = await getRequest(
        '/banner',
        params
      )
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default DashboardApi
