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
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['breadcrumbList']),
    firstBreadcrumb () {
      return this.breadcrumbList[0]
    },
    centerBreadcrumb () {
      const length = this.breadcrumbList.length
      // const breadcrumbList = JSON.parse(
      //     JSON.stringify(this.breadcrumbList),
      // )
      if (length >= 3) {
        return this.breadcrumbList.slice(1, -1)
      }
      return null
    },
    lastBreadcrumb () {
      const length = this.breadcrumbList.length
      if (length > 1) {
        return this.breadcrumbList[length - 1]
      }
      return null
    }
  }
}
</script>
<style lang='less' scoped>
.breadcrumb {
    position: absolute;
    top: 69px;
    left: 235px;
    right: 15px;
    height: 40px;
    line-height: 30px;
}
</style>
