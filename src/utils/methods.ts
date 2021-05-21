/* eslint-disable import/no-extraneous-dependencies */
// import XLSX from 'xlsx'
// import md5 from 'js-md5'
// import { BaiApiKey, BaiSecretKey, sysSn } from '@/config'
import cookie from './cookie'
// import instance from './instance'


// /**
//  * sessionStorage
//  * @param {*} key
//  * @param {*} value
//  */
// export const session = (key, value) => {
//   /* eslint-disable no-void */
//   if (value === void 0) {
//     const lsVal = sessionStorage.getItem(key)
//     if (lsVal && lsVal.indexOf('autostringify-') === 0) {
//       return JSON.parse(lsVal.split('autostringify-')[1])
//     }
//     return lsVal
//   }
//   if (typeof value === 'object' || Array.isArray(value)) {
//     value = `autostringify-${JSON.stringify(value)}`
//   }
//   return sessionStorage.setItem(key, value)
// }

// /**
//  * 生成随机数
//  * @param {*} len
//  */
// export const getUUID = len => {
//   len = len || 6
//   len = parseInt(len, 10)
//   len = isNaN(len) ? 6 : len
//   const seed = '0123456789abcdefghijklmnopqrstubwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ'
//   const seedLen = seed.length - 1
//   let uuid = ''
//   while (len--) {
//     uuid += seed[Math.round(Math.random() * seedLen)]
//   }
//   return uuid
// }
// /**
//  * 深拷贝
//  * @param {*} source
//  */
// export const deepcopy = source => {
//   if (!source) {
//     return source
//   }
//   const sourceCopy = source instanceof Array ? [] : {}
//   /* eslint-disable */
//     for (const item in source) {
//         sourceCopy[item] = typeof source[item] === 'object' ? deepcopy(source[item]) : source[item]
//     }
//     return sourceCopy
// }
// // 菜单数据组织
// export const buildMenu = (array, ckey) => {
//     const menuData = []
//     const indexKeys = Array.isArray(array) ? array.map(e => e.id) : []
//     ckey = ckey || 'parentId'
//     array.forEach((e, i) => {
//         // 一级菜单
//         if (!e[ckey] || e[ckey] === e.id) {
//             delete e[ckey]
//             menuData.push(deepcopy(e)) // 深拷贝
//         } else if (Array.isArray(indexKeys)) {
//             // 检测ckey有效性
//             const parentIndex = indexKeys.findIndex(id => id == e[ckey])
//             if (parentIndex === -1) {
//                 menuData.push(e)
//             }
//         }
//     })
//     const findChildren = parentArr => {
//         if (Array.isArray(parentArr) && parentArr.length) {
//             parentArr.forEach(parentNode => {
//                 array.forEach(node => {
//                     if (parentNode.id === node[ckey]) {
//                         if (parentNode.children) {
//                             parentNode.children.push(node)
//                         } else {
//                             parentNode.children = [node]
//                         }
//                     }
//                 })
//                 if (parentNode.children) {
//                     findChildren(parentNode.children)
//                 }
//             })
//         }
//     }
//     findChildren(menuData)
//     return menuData
// }

/**
 * ajax错误处理
 * @param {*} error
 */
export const catchError = (error: any) => {
  console.log('this', this)
  if (error.response) {
    switch (error.response.status) {
      case 403:
        // 删除本地登录信息
        cookie.delCookiesAndPath('Authtoken')
        error.response.statusText = '登录失效，请重新登录！'
        setTimeout(() => {
          window.location.href = '/'
        }, 2000)
        break
      case 404:
        error.response.statusText = 'api地址不存在！'
        break
      default:
        error.response.statusText = '服务端异常，请联系技术支持'
    }
  }
  return Promise.reject(error)
}

// /**
//  *  从url中截取参数
//  */
// export const getQueryString = (name: any) => {
//   var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
//   var r = window.location.search.substr(1).match(reg)
//   if (r != null) return unescape(r[2])
//   return null
// }

// const getDomByClass = (className: any) => {
//   return document.getElementsByClassName(className)
// }

// export const print = (className: any, isPrint: any) => {
//   // 获取需要打印的内容
//   const printContent = getDomByClass(className)[0].innerHTML
//   getDomByClass('m-print')[0].innerHTML = printContent
//   if (isPrint) window.print()
// }

// /**
//  *  正则表达式校验手机号 1开头11位数
//  */
// export const checkMobile = (mobile: any) => {
//   // 获取需要打印的内容
//   const reg = /^1[0-9]{10}$/
//   return reg.test(mobile)
// }

// /**
//  *  获取n天前0点时间戳
//  */
// export const getNdaysAgoTimeStamp = (n: any) => {
//   const timeStamp = new Date(new Date().setHours(0, 0, 0, 0))
//   const minuend = 86400 * 1000 * n
//   return timeStamp - minuend
// }

// /**
//  *  下载文件
//  */
// export const createAFordownLoad = (fileName: any, steam: any) => {
//   if (!steam) {
//     return
//   }
//   const url = window.URL.createObjectURL(new Blob([steam]))
//   const link = document.createElement('a')
//   link.style.display = 'none'
//   link.href = url
//   link.setAttribute('download', fileName)
//   document.body.appendChild(link)
//   link.click()
// }

// /**
//  * 判断是否有权限
//  * @param {*} roles 角色数组
//  * @param {*} ids  id|id
//  */
// export const checkRoles = (roles: any, ids: any) => {
//   let isHas = false
//   if (Array.isArray(roles)) {
//     roles.map(({ id }) => {
//       if (ids.indexOf(id) >= 0) {
//         isHas = true
//       }
//     })
//   }
//   return isHas
// }

// /**
//  *  过滤数据用
//  */
// export const filterArray = (array: any, compareKey: any, compared: any) => {
//   const filteredArray = array.filter(a => {
//     let isHas = false
//     if (a[compareKey] && a[compareKey].indexOf(compared) >= 0) {
//       isHas = true
//     }
//     return isHas
//   })
//   return filteredArray
// }

// const isDev = process.env.NODE_ENV === 'development'
// /**
//  * 日志打印
//  * @param {*} level 日志等级 默认为 log
//  * @description 与原生功能一致
//  * @example logger('error', 'a的值：', 2, 'b的值：', 3)
//  */
// export const logger = (level: any, ...record: any) => {
//   if (!isDev) {
//     return
//   }
//   if (console.hasOwnProperty(level)) {
//     // console[level](...record)
//   } else {
//     console.log(level, ...record)
//   }
// }
// const modulesId = 32
// /**
//  * 筛选相应模块的所有页面ID
//  * @param {*} array
//  * @param {*} id
//  */
// export const getModulesId = array => {
//   filterIds(array, 32, '货品管理')
//   filterIds(array, 34, 'DC管理')
//   filterIds(array, 35, '站点管理')
//   filterIds(array, 40, '报表查询')
//   filterIds(array, 31, '系统设置')
// }

// /**
//  * 文件md5化
//  *
//  * @param {*} file
//  */
// export const readFileMd5 = file => {
//   /* eslint-disable */
//   let fileReader = new FileReader()
//   /* eslint-enable */
//   fileReader.readAsArrayBuffer(file)
//   return new Promise((resolve, reject) => {
//     try {
//       fileReader.onload = e => {
//         const md5Key = md5(e.target.result)
//         resolve(md5Key)
//       }
//     } catch (error) {
//       reject(error)
//     }
//   })
// }

// const filterIds = (array, modulesId, moduleName) => {
//   let ids = ''
//   let count = 0
//   array.map(a => {
//     if (a.id === modulesId) {
//       ids = `${a.id}`
//       count++
//       const child = a.children
//       if (Array.isArray(child)) {
//         child.map(ch => {
//           ids = `${ids},${ch.id}`
//           count++
//           const grandson = ch.children
//           if (Array.isArray(grandson)) {
//             grandson.map(gra => {
//               ids = `${ids},${gra.id}`
//               count++
//             })
//           }
//         })
//       }
//     }
//   })
//   logger('log', '模块名：', moduleName, 'count:', count, 'moduleIds:', ids)
// }

// /**
//  *  获取百度语音识别token
//  */
// const getBaiToken = async () => {
//   const Url = `https://openapi.baidu.com/oauth/2.0/token?grant_type=client_credentials&client_id=${BaiApiKey}&client_secret=${BaiSecretKey}`
//   const result = await instance.get(Url)
//   return result
// }
// /**
//  * 语音播报
//  * @param {*} str
//  */
// export const sound = async str => {
//   const access_token = '24.0e9d731c51cd9b679477909404504221.2592000.1525923768.282335-11070497'
//   const zhText = encodeURI(encodeURI(str))
//   const voicebbUrl = `http://tsn.baidu.com/text2audio?lan=zh&ctp=1&cuid=abcdxxx&tok=${access_token}&tex=${zhText}&vol=9&per=0&spd=5&pit=5`
//   const voiceAdDoc = document.getElementById('voiceAd')
//   const voiceSrDoc = document.getElementById('voiceSr')
//   const voiceEdDoc = document.getElementById('voiceEd')
//   voiceSrDoc.src = voicebbUrl
//   voiceEdDoc.src = voicebbUrl
//   // audio load之后才能播放
//   voiceAdDoc.load()
//   voiceAdDoc.play()
// }

// /**
//  *
//  * @param {*} title
//  * @param {*} message
//  * @param {*} type
//  * @param {*} voice  // 如果不传默认启动语音播报
//  */
// export const notifyFn = (title, message, type, voice) => {
//   $notify({
//     title,
//     message,
//     type
//   })
//   if (!voice) {
//     sound(message)
//   }
// }
// /**
//  * 去除对象中的空属性
//  *
//  */
// export const removeEmpty = obj => {
//   Object.keys(obj).map(key => {
//     if (obj[key] === '' || obj[key] === null) {
//       delete obj[key]
//     }
//   })
//   return obj
// }
// /**
//  * 城市数据重组(适应element中的Cascader 级联选择器)
//  *
//  */
// export const cityDataRegroup = (oldlist, tier = 3) => {
//   // tier 为层级数 默认为 3   省级 输入 1  城市级别 输入 2
//   const newlist = []
//   // 省份
//   for (let index = 0, len = oldlist.length; index < len; index++) {
//     const provinceItem = {
//       label: oldlist[index].provinceName,
//       value: oldlist[index].provinceSn
//     }
//     newlist.push(provinceItem)
//     if (!oldlist[index].list) continue
//     if (tier === 1) continue
//     provinceItem.children = []
//     // 城市
//     for (let index2 = 0, len2 = oldlist[index].list.length; index2 < len2; index2++) {
//       const cityItem = {
//         label: oldlist[index].list[index2].cityName,
//         value: oldlist[index].list[index2].citySn
//       }
//       provinceItem.children.push(cityItem)
//       if (!oldlist[index].list[index2].list) continue
//       if (tier === 2) continue
//       provinceItem.children[index2].children = []
//       // 区域
//       for (
//         let index3 = 0, len3 = oldlist[index].list[index2].list.length;
//         index3 < len3;
//         index3++
//       ) {
//         const regionItem = {
//           label: oldlist[index].list[index2].list[index3].districName,
//           value: oldlist[index].list[index2].list[index3].districSn
//         }
//         provinceItem.children[index2].children.push(regionItem)
//         if (!oldlist[index].list[index2].list) continue
//       }
//     }
//   }
//   return newlist
// }

// /**
//  * 载入script
//  * @param {*} src
//  * @param {*} cb
//  */
// export const loadScript = (src, cb) => {
//   const script = document.createElement('script')
//   script.type = 'text/javascript'
//   script.charset = 'utf-8'
//   // 异步载入
//   script.async = true
//   script.onload = () => {
//     typeof cb === 'function' && cb()
//   }
//   script.src = src
//   const s = document.getElementsByTagName('script')[0]
//   s.parentNode.insertBefore(script, s)
// }

// /**
//  *
//  * @param {*} file  文件名
//  * @description 传入excel文件，将读取excel文件并转化为JSON数据
//  */
// export const readExcelToArray = (file) => {
//   let array = null
//   var reader = new FileReader()
//   reader.readAsBinaryString(file)
//   return new Promise((resolve, reject) => {
//     try {
//       reader.onload = function (e) {
//         var data = e.target.result
//         var wb = XLSX.read(data, {
//           type: 'binary'
//         })
//         array = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
//         array.map(item => {
//           // 去空格
//           let item_driverTel = item['司机手机号'].replace(/\s+/g, '')
//           const item_cardAmount = item['分配金额'] * 100
//           let item_driverName = item['姓名'].replace(/\s+/g, '')
//           let item_plateNumber = item['车牌号'].replace(/\s+/g, '')
//           // 去双引号
//           item_driverTel = item_driverTel.replace(/\"/g, '')
//           item_driverName = item_driverName.replace(/\"/g, '')
//           item_plateNumber = item_plateNumber.replace(/\"/g, '')

//           item_driverTel = item_driverTel.replace(/\“/g, '')
//           item_driverName = item_driverName.replace(/\“/g, '')
//           item_plateNumber = item_plateNumber.replace(/\“/g, '')

//           item_driverTel = item_driverTel.replace(/\’/g, '')
//           item_driverName = item_driverName.replace(/\’/g, '')
//           item_plateNumber = item_plateNumber.replace(/\’/g, '')

//           // 去单引号
//           item.driverTel = item_driverTel.replace(/\'/g, '')
//           item.cardAmount = item_cardAmount
//           item.driverName = item_driverName.replace(/\'/g, '')
//           item.plateNumber = item_plateNumber.replace(/\'/g, '')

//           delete item['司机手机号']
//           delete item['分配金额']
//           delete item['姓名']
//           delete item['车牌号']
//           return item
//         })
//         resolve(array)
//       }
//     } catch (error) {
//       reject(error)
//     }
//   })
// }

// export const retryTimeout = function (retryFn = () => { }, perDelay, maxDelay = 3000, timeoutFn = () => { }, finishFn = () => { }) {
//   let totalDelay = 0
//   let run = true

//   const cancelTimeout = function () {
//     run = false
//   }

//   const delayFnWrapper = function (retryFn, timeoutFn, cancelTimeout, finishFn) {
//     retryFn(cancelTimeout)
//     if (totalDelay < maxDelay && run) {
//       setTimeout(delayFnWrapper.bind(null, retryFn.bind(null, cancelTimeout), timeoutFn, cancelTimeout, finishFn), perDelay)
//     } else if (!run) {
//       finishFn()
//     } else {
//       timeoutFn()
//     }
//     totalDelay = totalDelay + perDelay
//   }
//   delayFnWrapper(retryFn.bind(null, cancelTimeout), timeoutFn, cancelTimeout, finishFn)
// }

// /**
//  * 传入页面title，获取该页面对应该角色展示的按钮数组
//  *  title  当前页面的title
//  * @param {*} title
//  */
// export const elements = (title, userinfo) => {
//   let nowpagedata = {}
//   // 递归查找当前页
//   function findNowPage(pageDate) {
//     for (let index = 0, len = pageDate.length; index < len; index++) {
//       const element = pageDate[index]
//       if (element.name === title) {
//         nowpagedata = element
//       }
//       if (element.nodes && element.nodes.length > 0) {
//         findNowPage(element.nodes)
//       }
//     }
//   }
//   // 判断是否登录
//   if (!userinfo) {
//     return
//   }
//   // 当前用户能打开的系统
//   const sys = userinfo.sys
//   if (sys && sys.length >= 0) {
//     for (let index = 0, len = sys.length; index < len; index++) {
//       const element = sys[index]
//       // 匹配当前系统
//       if (element.sn === sysSn) {
//         // 匹配到当前页
//         findNowPage(element.resources)
//       }
//     }
//   }

//   // 返出当前页能显示的按钮数组
//   return nowpagedata.elements
// }

// /**
//  * 对比两个对象，返回一个新对象，里面包含所有对比对象中的值不相等的属性
//  * oldObj 旧的对象
//  * newObj 新的对象
//  * exceptkey 不做对比的key值
//  * 主要用于 判断用户对于form表单是否有新的修改
//  */
// export const contrastObj = (oldObj, newObj, exceptkey) => {
//   const newParameterObj = {}
//   for (const key in newObj) {
//     if (newObj.hasOwnProperty(key)) {
//       const newObjvalue = newObj[key]
//       const oldObjvalue = oldObj[key]
//       if (newObjvalue !== oldObjvalue || exceptkey === key) {
//         newParameterObj[key] = newObjvalue
//       }
//     }
//   }
//   return newParameterObj
// }
