<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    console.log('')
  }
})
</script>

<style lang="less">
#app {
  height: 100%;
}
</style>
