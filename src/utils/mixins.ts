/*eslint-disable*/
import { Component, Mixins } from 'vue-property-decorator'
import moment from 'moment'

/**
 * mixins
 */
@Component
class commonFnMixins extends Mixins() {
  /**
   * 格式化时间
   * @param time 时间戳
   * @param format 格式
   */
  formatTime = (time: number, format = 'YYYY-MM-DD HH:MM') => {
    if (!time) {
      return '-- --'
    }
    return moment(time).format(format)
  }

  /**
   * 格式化时长
   * @param time 时间戳
   * @param unit 单位
   */
  formatDuration = (time: number, unit = 1) => {
    if (!time) {
      return '00:00'
    }
    var minutes = Math.floor(time / 60 / unit)
    var seconds = Math.floor((time - minutes * 60 * unit) / unit)
    return (
      (minutes > 9 ? minutes : '0' + minutes) +
      ':' +
      (seconds > 9 ? seconds : '0' + seconds)
    )
  }
  /**
   * 设置网页title
   * @param title 标题
   */
  setDocumentTitle(title: string) {
    document.title = title
  }
  /**
   * 拼接歌手名
   * @param list
   */
  getArtist(list: any) {
    if (!list) {
      return ''
    }
    const names = list.map((item: any) => {
      return item.name
    })
    return names.join('/')
  }
}

export default commonFnMixins
