import ceshi from '@/router/modules/ceshi.ts'
import video from '@/router/modules/video.ts'

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Abstract from '@/views/common/abstract.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    redirect: '/Login'
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      keepAlive: false,
      noshow: true,
    },
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/index',
    name: '首页',
    component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue'),
    children: [
      {
        path: 'videoManage',
        name: '视频管理',
        meta: {
          level: 1,
        },
        component: Abstract,
        children: video,
        redirect: 'videoManage/videolist',
      },
      {
        path: 'ceshiManage',
        name: '测试管理',
        meta: {
          level: 1,
        },
        component: Abstract,
        children: ceshi,
        redirect: 'ceshiManage/ceshilist',
      },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
