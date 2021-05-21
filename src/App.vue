<template>
  <!-- <div id="nav">
  </div> -->
  <router-view/>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  setup (props:any) {
    // const store = useStore()
    // const router = useRouter()

    // watch(() => , (nval, oval) => {
    //   console.log('nval = ' + nval + ', oval = ' + oval)
    // })

    return {

    }
  }

})
</script>
<style lang="less">
html, body{
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
