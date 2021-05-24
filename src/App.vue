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
      console.log('store1111', store)
      console.log('监听到变化', nval, oval)
      console.log('props33333', props)
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
