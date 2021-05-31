<template>
  <!-- <div id="nav">
  </div> -->
  <router-view/>
</template>
<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  setup (props:any) {
    const store = useStore()
    const route = useRoute()

    watch(() => route.name, (nval, oval) => {
      store.commit('setBreadcrumb', route)
    })

    return {

    }
  }

})
</script>
<style lang="less">
@import './assets/common.less';
</style>
