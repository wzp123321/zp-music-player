/*eslint-disable*/
import { min } from 'lodash'
import moment from 'moment'

// 动态添加css
export function addCssByLink(url: string) {
  const link = document.createElement('link')
  link.setAttribute('rel', 'stylesheet')
  link.setAttribute('type', 'text/css')
  link.setAttribute('href', url)
  const heads = document.getElementsByTagName('head')
  if (heads.length) {
    heads[0].appendChild(link)
  } else {
    document.documentElement.appendChild(link)
  }
  return link
}

/**
 * 格式化音乐时长
 * @param time 时长
 */
export const formatDuration = (time: number, unit = 1) => {
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
 * 防抖函数:
 *      防止抖动，单位时间内事件触发会被重置，避免事件被误伤触发多次。
 *      代码实现重在清零 clearTimeout
 */
export function debounce(f: Function, wait = 100) {
  let debounceTimer
  clearTimeout(debounceTimer) // 防抖重在清零
  debounceTimer = setTimeout(f, wait)
}

/**
 * 节流函数:
 *      节流：控制流量，单位时间内事件只能触发一次，如果服务器端的限流即 Rate Limit。
 *      代码实现重在开锁关锁 timer=timeout; timer=null
 */
export function throttle(f: Function, wait = 100) {
  let throttleTimer
  if (throttleTimer) {
    return
  }
  throttleTimer = setTimeout(() => {
    f()
    throttleTimer = null // 节流重在开关锁
  }, wait)
}

/**
 * 音频播放
 * @param url 音频地址
 * @param param1 回调函数
 */
export function audioPlay(
  url: string,
  {
    closeLoadingFn,
    timeUpdateFn,
    callbackDuration
  }: { [key: string]: Function }
) {
  let audioPlayer: any
  if (audioPlayer) {
    audioPlayer.pause()
  }

  audioPlayer = new Audio(url)
  // 播放
  audioPlayer.onloadeddata = () => {
    audioPlayer.play()
    const duration = Math.ceil(audioPlayer.duration)
    callbackDuration && callbackDuration(duration)
  }

  // 暂停
  audioPlayer.pause = () => {
    closeLoadingFn && closeLoadingFn()
  }

  // 播放结束
  audioPlayer.onended = () => {
    closeLoadingFn && closeLoadingFn()
  }

  // 播放失败
  audioPlayer.onerror = () => {
    closeLoadingFn && closeLoadingFn()
  }

  // 进度更新
  audioPlayer.ontimeupdate = (e: any) => {
    timeUpdateFn && timeUpdateFn(e)
  }
  return audioPlayer
}

/**
 * 格式化日期
 * @param time 日期
 * @param format 格式
 */
export const formatTime = (time: number, format = 'YYYY-MM-DD HH:MM') => {
  if (!time) {
    return '-- --'
  }
  return moment(time).format(format)
}
