/* eslint-disable no-mixed-operators */
export default {
  /**
     * 默认时间1天
     * @param {*} key
     * @param {*} value
     */
  setCookie (key:any, value:any) {
    const Days = 30
    const exp = new Date()
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
    document.cookie = `${key}=${escape(value)};expires=${exp.toUTCString()}`
  },
  /**
     *  获取cookie
     * @param {*} key
     */
  getCookie (key:any) {
    let arr
    const reg = new RegExp(`(^| )${key}=([^;]*)(;|$)`) // 正则匹配
    /* eslint-disable no-cond-assign */
    if ((arr = document.cookie.match(reg))) {
      return unescape(arr[2])
    }
    return null
  },
  /**
     * 删除cookie
     * @param {*} key
     */
  delCookies (key:any) {
    const self = this
    const exp = new Date()
    exp.setTime(exp.getTime() - 1)
    const cval = self.getCookie(key)
    if (cval != null) {
      document.cookie = `${key}=${cval};expires=${exp.toUTCString()}`
    }
  },
  /**
     * 删除cookie
     * @param {*} key
     */
  delCookiesAndPath (key:any) {
    const self = this
    const exp = new Date()
    exp.setTime(exp.getTime() - 1)
    const cval = self.getCookie(key)
    if (cval != null) {
      document.cookie = `${key}=${cval};expires=${exp.toUTCString()};path=/`
    }
  },
  /**
     * 存储cookie
     * @param {*} key
     * @param {*} value
     * @param {*} second
     */
  setCookieAndTime (key:any, value:any, second:any) {
    const exp = new Date()
    exp.setTime(exp.getTime() + second * 1000)
    document.cookie = `${key}=${escape(value)};expires=${exp.toUTCString()}`
  },
  /**
     * 设置根域名COOKIE
     * @param {*} key
     * @param {*} value
     * @param {*} second
     */
  setCookieAndTimeAndPath (key:any, value:any, second:any) {
    const exp = new Date()
    exp.setTime(exp.getTime() + second * 1000)
    document.cookie = `${key}=${escape(value)};expires=${exp.toUTCString()};path=/`
  }
}
