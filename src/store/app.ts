/**
 *  全局状态
 */

export default {
  state: {
    loading: false,
    isExpired: false
  },
  getters: {
    loading ({ loading }: any) {
      return loading
    },
    isExpired ({ isExpired }: any) {
      return isExpired
    }
  },
  actions: {},
  mutations: {
    showLoading (state: any) {
      state.loading = true
    },
    finishLoading (state: any) {
      state.loading = false
    },
    showExpired (state: any) {
      state.isExpired = true
    },
    finishExpired (state: any) {
      state.isExpired = false
    }
  }
}
