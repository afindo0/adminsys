<template>
    <div>
        <el-row type="flex"
                class="head">
            <div class="imgdiv">
                <img class="logo" src="/static/logo.png" />
            </div>
            <!-- <a class="company">
              {{info.isLoging}}
            </a> -->

            <div class="nav">
                <div class="usermenu">
                    <el-dropdown @command="dropdownClick" placement="bottom-end">
                      <span style="cursor: pointer;" class="el-dropdown-link">
                        欢迎您：{{simpleRoles}}-{{userinfo.nickname}}<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <template #dropdown>
                        <el-dropdown-menu>
                          <el-dropdown-item command="quit">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                </div>
            </div>
        </el-row>
    </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  props: {
    userinfo: {
      type: Object,
      default: function () {
        return { }
      }
    },
    simpleRoles: {
      type: String,
      default: ''
    }
  },
  setup () {
    const store = useStore()

    const dropdownClick = async (command:any) => {
      switch (command) {
        default:
          await store.dispatch('login/logoutFn')
      }
    }

    return { dropdownClick }
  }
})
</script>
<style lang="less" scoped>
@import '../assets/fn.less';
@import '../assets/vars.less';
.head {
    position: fixed;
    z-index: 91;
    top: 0;
    left: 0;
    width: 100%;
    height: 55px;
    line-height: 55px;
    background: #ffffff;
    color: #606266;
    border-bottom: 1px solid @border-color;
}

.imgdiv{
    width: 220px;
    height: 54px;
    .setCenter(row, center,center);
    .logo {
        text-align: center;
        width: 180px;
        font-size: 1.4em;
        text-decoration: none;
        color: black;
    }
}
.nav {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.usermenu {
    float: right;
    padding: 0 2em;
}
.usermenu a {
    text-decoration: none;
    margin: 0 0.2em 0 1em;
    color: inherit;
}
.company {
    margin-left: 22px;
    font-size: 18px;
    max-width: 170px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
