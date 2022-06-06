<template>
  <div class="nav-header">
    <div>
      <el-icon :size="30" v-if="isFold" @click="handleFoldClick">
        <Expand class="icon_style" />
      </el-icon>
      <el-icon :size="30" v-else @click="handleFoldClick">
        <Fold class="icon_style" />
      </el-icon>
    </div>
    <div class="content">
      <span>{{ 1111 }}</span>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'

export default defineComponent({
  components: {
    UserInfo
  },
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
  width: 100%;
  display: flex;
  align-items: center;

  .icon_style {
    cursor: pointer;
  }

  .content {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
}
</style>
