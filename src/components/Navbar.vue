<template>
    <el-menu
        :default-active="activeMenu"
        background-color="#242633"
        text-color="#999"
        active-text-color="#E6A23C"
        class="side"
        router
        :unique-opened="false"
        :default-openeds="openMenuList"
    >
        <template v-for="(route, index) in menus">
            <template v-if="route.children && route.children.length !== 0">
                <el-submenu
                    :key="index"
                    :index="index"
                >
                    <template v-slot:title>
                        <i class="el-icon-menu"></i>
                        {{route.meta.name || route.name}}
                    </template>
                    <template v-for="(cRoute, cIndex) in route.children">
                        <template v-if="cRoute.children && cRoute.children.length !== 0">
                            <el-submenu
                                :key="cIndex"
                                :index="cRoute.name"
                            >
                                <template v-slot:title>
                                    <i class="el-icon-caret-right"></i>
                                    {{cRoute.meta.name || cRoute.name}}
                                </template>
                                <el-menu-item
                                    v-for="(dRoute, dIndex) in cRoute.children"
                                    :key="dIndex"
                                    :index="dRoute.name"
                                    :route="dRoute"
                                >
                                <template v-if="!dRoute.meta.noshow">
                                    <i class="el-icon-caret-right"></i>
                                    <span>{{dRoute.meta.name || dRoute.name}}</span>
                                </template>
                                </el-menu-item>
                            </el-submenu>
                        </template>
                        <template v-else>
                            <el-menu-item
                                :route="cRoute"
                                :key="cIndex"
                                v-if="!cRoute.meta.noshow"
                                :index="cRoute.name"
                            >
                                <i class="el-icon-caret-right"></i>
                                <span>{{cRoute.meta.name || cRoute.name}}</span>
                            </el-menu-item>
                        </template>
                    </template>
                </el-submenu>
            </template>
            <template v-else>
                <el-menu-item
                    :route="route"
                    :key="index"
                    :index="route.name"
                >
                    <i class="el-icon-menu"></i>
                    <span>{{route.meta.name || route.name}}</span>
                </el-menu-item>
            </template>
        </template>
    </el-menu>
</template>
<script>
export default {
  props: {
    activeMenu: {
      type: String,
      required: true
    },
    menus: {
      type: Array,
      required: true
    },
    openMenuList: {
      type: Array,
      required: true
    }
  },
  methods: {}
  // mounted () {

  // }
}
</script>
<style lang="less" scoped>
.side {
    position: fixed;
    z-index: 90;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 220px;
    height: 100%;
    padding-top: 55px;
    border-right: 1px solid #dedede;
    overflow-y: auto;
}
</style>
