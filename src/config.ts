/**
 *  项目配置
 */
/*eslint-disable */
const ENV = process.env.NODE_ENV

// 基础路径 、基础路由
let apiUrl
// switch (ENV) {
//     case 'production':
//         apiUrl = 'https://admin.test.intellitourism.lzzgjt.com'
//         break
//     // case 'pre':
//     //     apiUrl = 'http://admin.test.intellitourism.lzzgjt.com'
//     //     break
//     default:
//         apiUrl = 'http://dev.api.intellitourism.com/'
// }

module.exports = {
  name: '智慧文旅管理后台',
  // 基础URL
  apiUrl,
  // 地址前缀
  preUrlPath: '',
  // 图片最大限制(单位：MB)
  imgMaxSize: 1,
  //  视频最大限制(单位：MB)
  videoMaxSzie: 8,
}
