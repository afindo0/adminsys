import { createStore } from 'vuex'
import app from './app'
import login from './login'
import pagesBreadcrumb from './pagesBreadcrumb'
import pagesTabs from './pagesTabs'
import video from './modules/video'

export default createStore({
  modules: {
    app,
    login,
    pagesBreadcrumb,
    pagesTabs,
    video
  }
})
