import * as defUrl from '../../api/modules/video'
import { request } from '../../utils/http'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const allUrl = defUrl.default

export default {
  namespaced: true,
  state: {
    videoList: [],
    videoListtotal: 0,
  },
  getters: {
    videoList ({ videoList }: any) {
      return videoList
    },
    videoListtotal ({ videoListtotal }: any) {
      return videoListtotal
    }
  },
  actions: {
    // 视频列表
    async videolistFn ({ commit }: any, payload: any) {
      try {
        const { result } = await request({
          method: 'post',
          url: allUrl.videolistUrl,
          data: payload,
          commit
        })
        commit('updatevideoList', result)
        return Promise.resolve(result)
      } catch (e) {
        ElMessage.warning(e.message)
      }
    },

    // 视频审核通过
    async auditvideoFn ({ commit }: any, payload: any) {
      try {
        const { result } = await request({
          method: 'post',
          url: allUrl.auditvideoUrl,
          data: payload,
          commit,
        })
        return Promise.resolve(result)
      } catch (e) {
        ElMessage.warning(e.message)
        return Promise.resolve(e)
      }
    },

    // 视频审核驳回
    async unauditvideoFn ({ commit }: any, payload: any) {
      try {
        const { result } = await request({
          method: 'post',
          url: allUrl.unauditvideoUrl,
          data: payload,
          commit,
        })
        return Promise.resolve(result)
      } catch (e) {
        ElMessage.warning(e.message)
        return Promise.resolve(e)
      }
    },

    // 视频 删除
    async deletevideoFn ({ commit }: any, payload: any) {
      try {
        const { result } = await request({
          method: 'post',
          url: allUrl.deletevideoUrl,
          data: payload,
          commit,
        })
        return Promise.resolve(result)
      } catch (e) {
        ElMessage.warning(e.message)
        return Promise.resolve(e)
      }
    },

    // 视频数据修改
    async randomAddBrowsePraisesShareCountFn ({ commit }: any, payload: any) {
      try {
        const { result } = await request({
          method: 'post',
          url: allUrl.randomAddBrowsePraisesShareCountUrl,
          data: payload,
          commit,
        })
        return Promise.resolve(result)
      } catch (e) {
        ElMessage.warning(e.message)
        return Promise.resolve(e)
      }
    },

  },
  mutations: {
    updatevideoList (state: any, payload: any) {
      state.videoList = payload.data
      state.videoListtotal = payload.count
    },
  }
}
