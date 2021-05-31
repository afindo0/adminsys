// const { preUrlPath } = require('@/config')

export default {
  // 视频列表
  videolistUrl: `/adminmanager/video/findWaitCheckVideoList.do`,

  // 视频审核通过
  auditvideoUrl: `/adminmanager/video/updatePassVideoInfo.do`,
  // 视频审核驳回
  unauditvideoUrl: `/adminmanager/video/updateRejectVideoInfo.do`,
  // 视频删除
  deletevideoUrl: `/adminmanager/video/updateDeleteVideoInfo.do`,
  // 视频数据修改
  randomAddBrowsePraisesShareCountUrl: `/adminmanager/video/randomAddBrowsePraisesShareCount.do`,
}
