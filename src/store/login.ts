import * as defUrl from '../api/login'
import { request } from '../utils/http'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const allUrl = defUrl.default

export default {
  namespaced: true,
  state: {
    userInfo: {},
  },
  getters: {
    userInfo ({ userInfo }: any) {
      return userInfo
    }
  },
  actions: {
    // 登录
    async loginFn ({ commit }: any, payload: any) {
      try {
        const { result } = await request({
          method: 'post',
          url: allUrl.loginUrl,
          data: payload,
          commit
        })
        const storage = window.sessionStorage
        storage.setItem('userinfo', JSON.stringify(result.data))
        commit('updateUserInfo', result)
        return Promise.resolve(result)
      } catch (e) {
        ElMessage.warning(e.message)
      }
    },
    // 用户退出
    async logoutFn ({ commit }: any, payload: any) {
      try {
        const { result } = await request({
          method: 'post',
          url: allUrl.logoutUrl,
          data: payload,
          commit
        })
        const storage = window.sessionStorage
        storage.clear()
        location.href = '/'
        return Promise.resolve(result)
      } catch (e) {
        ElMessage.warning(e.message)
      }
    }
  },
  mutations: {
    updateUserInfo (state: any, payload: any) {
      console.log('payload', payload)
      state.userInfo = payload.data
    },
  }
}
