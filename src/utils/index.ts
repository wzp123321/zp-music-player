/*eslint-disable*/
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
export const formatDuration = (time: number) => {
    if (!time) {
        return '00:00'
    }
    var minutes = Math.floor(time / 60)
    var seconds = time - minutes * 60

    return (
        (minutes > 0 ? minutes + ':' : '0:') +
        (seconds > 0 ? (Math.floor(seconds) < 10 ? '0' + Math.floor(seconds) : Math.floor(seconds)) : '00')
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
