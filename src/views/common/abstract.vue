<template>
    <div>
        <!-- <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view> -->
        <router-view v-slot="{ Component }">
          <keep-alive v-if="$route.meta.keepAlive">
            <component :is="Component" >
              <!-- <p>缓存页面</p> -->
            </component>
          </keep-alive>
          <component :is="Component" v-if="!$route.meta.keepAlive">
            <!-- <p>没有缓存的页面</p> -->
          </component>
        </router-view>
    </div>
</template>
<script>
export default {}
</script>
