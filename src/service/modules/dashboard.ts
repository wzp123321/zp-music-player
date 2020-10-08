import { getRequest, postRequest } from '@/service/request'

const DashboardApi = {
  /**
   * 获取banner列表
   * @param params 0: pc   1: android   2: iphone   3: ipad
   */
  async getDashboardBannerList(params: { type: number }) {
    const url = '/banner'
    return getRequest(url, params)
  }
}

export default DashboardApi
