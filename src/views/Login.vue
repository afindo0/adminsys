<template>
<div class="layout">
    <div class="login-board">
        <div>
            <div class="title">
                <span class="main">智慧旅游</span>
                <span class="sub">管理平台</span>
            </div>
            <div class="form-space">
                <el-input
                    clearable
                    v-model="info.loginInfo.phoneNumber"
                    placeholder="请输入用户名"
                ></el-input>
            </div>
            <div class="btn-space">
                <el-input
                    clearable
                    v-model="info.loginInfo.password"
                    placeholder="请输入密码"
                    show-password
                ></el-input>
            </div>
            <div>
                <el-button
                    @click="doLogin"
                    :loading="info.isLoging"
                    class="login-btn"
                >登录</el-button>
            </div>
            <div class="service">
                开通账号联系客服:400-000-0000
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const store = useStore()
    const router = useRouter()
    const { ctx }: any = getCurrentInstance()
    const message = ctx.$message

    const info = reactive({
      isLoging: false,
      loginInfo: {
        type: 'LOGIN'
      }
    })
    const doLogin = async () => {
      const { phoneNumber, password }: any = info.loginInfo
      if (!phoneNumber || !password) {
        message('请输入正确的账号和密码')
        return
      }
      info.isLoging = true
      try {
        const res = await store.dispatch('login/loginFn', info.loginInfo)
        if (res) {
          router.replace('/Index')
        }
        info.isLoging = false
      } catch (e) {
        info.isLoging = false
      }
    }
    return { info, doLogin }
  }
})
</script>
<style lang='less' scoped>
.layout{
  width: 100%;
    height: 100vh;
    overflow: hidden;
}
.login-board {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    // background: url("https://img.mobilemart.cn/oil-manage/login-bg-cut3.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #666;
}
.title {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #ffffff;
    margin-bottom: 20px;
    .main {
        font-size: 48px;
    }
    .sub {
        font-size: 20px;
    }
}
.btn-space {
    margin-bottom: 20px;
}
.form-space {
    margin-bottom: 5px;
}
.login-btn {
    width: 100%;
    border-color: #e58947;
    background: #e58947;
    color: #ffffff;
    font-size: 20px;
}
.service {
    margin-top: 65px;
    text-align: center;
    color: #ffffff;
}
</style>
