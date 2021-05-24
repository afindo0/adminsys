/**
 *  标签页状态
 */
export default {
  state: {
    activeIndex: '/',
    pages: [],
    breadcrumbList: []
  },
  getters: {
    pages ({ pages }: any) {
      return pages
    },
    activeIndex ({ activeIndex }: any) {
      return activeIndex
    }
  },
  mutations: {
    addPageTab (state: any, payload: any) {
      if (state.pages.length >= 5) {
        state.pages.shift()
      }
      state.pages.push(payload)
    },
    // 删除tabs
    deletePagesTabs (state: any, route: any) {
      let index = 0
      /*eslint-disable */
      for (const page of state.pages) {
        if (page.route === route) {
          break
        }
        index++
      }
      state.pages.splice(index, 1)
    },
    // 设置当前激活的tab
    setActiveIndex (state: any, index: any) {
      if (state.activeIndex !== index) state.activeIndex = index
    },
  },
}
