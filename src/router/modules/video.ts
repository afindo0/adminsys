export default [
  {
    path: 'videolist',
    name: '视频列表',
    meta: {
      keepAlive: true,
      level: 2
    },
    component: () => import('@/views/video/videolist.vue'),
    children: []
  },
  // {
  //   path: 'videoadd',
  //   name: '视频添加',
  //   meta: {
  //     keepAlive: false,
  //     level: 2,
  //     noshow: true
  //   },
  //   component: () => import('@/views/video/add.vue'),
  //   children: []
  // },
  // {
  //   path: 'videoedit',
  //   name: '视频编辑',
  //   meta: {
  //     keepAlive: false,
  //     level: 2,
  //     noshow: true
  //   },
  //   component: () => import('@/views/video/edit.vue'),
  //   children: []
  // },
  // {
  //   path: 'videodetail',
  //   name: '视频详情',
  //   meta: {
  //     keepAlive: false,
  //     level: 2,
  //     noshow: true
  //   },
  //   component: () => import('@/views/video/detail.vue'),
  //   children: []
  // },
  // {
  //   path: 'activityvideolist',
  //   name: '活动视频列表',
  //   meta: {
  //     keepAlive: true,
  //     level: 2
  //   },
  //   component: () => import('@/views/video/activityvideolist.vue'),
  //   children: []
  // }
]
