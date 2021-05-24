<template>
    <el-breadcrumb :replace="false" class="breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-if="firstBreadcrumb">{{firstBreadcrumb.name}}</el-breadcrumb-item>
        <el-breadcrumb-item
            :to="{ path: item.path }"
            v-for="(item,index) in centerBreadcrumb"
            :key="index"
        >{{item.name}}</el-breadcrumb-item>
        <el-breadcrumb-item v-if="lastBreadcrumb">{{lastBreadcrumb.name}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const store = useStore()

    const firstBreadcrumb = computed(() => {
      return store.state.pagesBreadcrumb.breadcrumbList[0]
    })

    const centerBreadcrumb = computed(() => {
      const length = store.state.pagesBreadcrumb.breadcrumbList.length
      if (length >= 3) {
        return store.state.pagesBreadcrumb.breadcrumbList.slice(1, -1)
      }
      return null
    })

    const lastBreadcrumb = computed(() => {
      const length = store.state.pagesBreadcrumb.breadcrumbList.length
      if (length > 1) {
        return store.state.pagesBreadcrumb.breadcrumbList[length - 1]
      }
      return null
    })

    return { firstBreadcrumb, centerBreadcrumb, lastBreadcrumb }
  }
})

</script>
<style lang='less' scoped>
.breadcrumb {
    position: absolute;
    top: 60px;
    left: 210px;
    right: 5px;
    height: 40px;
    line-height: 40px;
}
</style>
