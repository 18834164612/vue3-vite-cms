<template>
  <div class="nav-header">
    <el-icon :size="25" v-if="isFold" @click="handleFoldClick">
      <Expand class="icon_style" />
    </el-icon>
    <el-icon :size="25" v-else @click="handleFoldClick">
      <Fold class="icon_style" />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChange'],
  setup(_, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  .icon_style {
    cursor: pointer;
  }
}
</style>
