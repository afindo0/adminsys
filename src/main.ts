import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'

// 路由守卫
router.beforeEach((to, from) => {
  if (to.path === '/' || to.path === '/login') {
    return true
  } else {
    const storage = window.sessionStorage
    if (storage.userinfo) {
      const userinfo = JSON.parse(storage.userinfo)
      if (userinfo) {
        return true
      }
    }
    router.replace({ path: '/login' })
  }
})

const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount('#app')

