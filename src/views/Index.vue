<template>
<Loading :loading="loading"/>
  <el-container>

    <el-header height="55px">
      <Mheader :userinfo="info.userinfo" :simpleRoles="simpleRoles"  />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Navbar
            :activeMenu="activeMenu"
            :openMenuList="openMenuList"
            :menus="menus"
        />
      </el-aside>
      <el-main class="el-main">
        <Breadcrumb></Breadcrumb>
        <div class="m-body">
            <router-view class="router-body"></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import Loading from '@/components/Loading.vue'
import Mheader from '@/components/ModHeader.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Navbar from '@/components/Navbar.vue'

import { defineComponent, reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    Loading,
    Mheader,
    Breadcrumb,
    Navbar
  },
  setup () {
    const store = useStore()
    const router = useRouter()

    const info:any = reactive({
      userinfo: {}
    })
    // 用户信息
    if (!store.state.login.userInfo.id) {
      const storage = window.sessionStorage
      if (storage.userinfo) {
        const info: any = Object.create(null)
        info.data = JSON.parse(storage.userinfo)
        store.commit('login/updateUserInfo', info)
      }
    }
    info.userinfo = store.state.login.userInfo
    // 用户角色
    const simpleRoles = computed(() => {
      switch (info.userinfo.simpleRoles) {
        case 2:
          return '普通用户'
        case 4:
          return '商家'
        case 7:
          return '运营人员'
        case 8:
          return '经理'
        case 16:
          return '超级管理员'
        default:
          return '未知'
      }
    })
    // 菜单
    let menus:any[] = []
    if (router.options.routes[2].children && router.options.routes[2].children.length > 0) {
      menus = router.options.routes[2].children
    }

    return { info, simpleRoles, menus }
  }
})
</script>

<style lang="less">
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    padding: 0px;
  }
</style>
