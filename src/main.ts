import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'

// 路由守卫
router.beforeEach((to, from) => {
  console.log('to', to, 'from', from)
  if (to.path === '/' || to.path === '/login') {
    return true
  } else {
    const storage = window.sessionStorage
    if (storage.userinfo) {
      const userinfo = JSON.parse(storage.userinfo)
      console.log('aaaa', userinfo)
      if (userinfo) {
        return true
      }
    }
    console.log(2222222222222)
    router.replace({ path: '/login' })
  }
})

const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount('#app')

