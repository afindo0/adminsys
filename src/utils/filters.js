/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue'
import { dateTimeParser } from '@/utils/parseUtil'

/**
 * 注册一个全局自定义指令 `v-focus`
 */
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted (el) {
    // 聚焦元素
    el.focus()
  }
})
/**
 *  权限指令
 *  写法： 模块  -   对应功能
 *  @description <el-button  v-hasPermission="oplog-reset"  @click="reset" >重置</el-button>
 */
Vue.directive('hasPermission', {
  bind (el, binding) {
    let isShow = false
    const permissions = binding.expression.split('|')
    permissions.forEach(p => {
      if (Vue.prototype.$_hasPermission(p)) {
        isShow = true
      }
    })
    if (!isShow) {
      el.parentNode.removeChild(el)
    }
  }
})

/**
 *  角色指令
 *  写法： 角色ID
 *  @description <el-button  v-hasRole="293151805|299576106"  @click="reset" >重置</el-button>
 */
Vue.directive('hasRole', {
  bind (el, binding) {
    if (!Vue.prototype.$_hasRole(binding.expression)) {
      el.parentNode.removeChild(el)
    }
  }
})

Vue.filter('fenChangeYuanfilter', value => {
  let data = value
  if (value) {
    value = Number(value)
    data = (value / 100).toFixed(2)
  }
  return data
})

Vue.filter('dateTimeParser', value => {
  if (value) {
    return dateTimeParser(value)
  }
  return ''
})
