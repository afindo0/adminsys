/**
 *  标签页状态
 */
export default {
  state: {
    breadcrumbList: []
  },
  getters: {
    breadcrumbList ({ breadcrumbList }: any) {
      return breadcrumbList
    }
  },
  mutations: {
    setBreadcrumb (state: any, payload: any) {
      const { level } = payload.meta
      const { fromPath = '', name = '' } = payload.query
      const toMatched = payload.matched
      const breadcrumbList: any = []
      toMatched.forEach((item: any, index: any) => {
        if (index > 0) {
          const { path, meta } = item
          const nameCopy = item.name
          const obj = { name: nameCopy, path, meta }
          breadcrumbList.push(obj)
        }
      })
      if (level > 2) {
        const obj = { path: fromPath, name }
        breadcrumbList.splice(-1, 0, obj)
      }
      state.breadcrumbList = breadcrumbList
      // if (level < 3) {
      //     state.breadcrumbList = toMatched.splice(1)
      // }
      // if (level > 2) {
      //     state.breadcrumbList = fromMatched.splice(1)
      //     state.breadcrumbList.push(toMatched.pop())
      // }
    }
  }
}
