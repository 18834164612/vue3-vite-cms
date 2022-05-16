<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" :stretch="true" class="demo-tabs">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Avatar class="icon_style" /></el-icon>
            <span>{{ '账号登录' }}</span>
          </span>
        </template>
        {{ '账号登录' }}
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><PhoneFilled class="icon_style" /></el-icon>
            <span>{{ '手机登录' }}</span>
          </span>
        </template>
        {{ '手机登录' }}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  margin-bottom: 200px;
  text-align: center;

  .icon_style {
    width: 20px;
    height: 20px;
    position: relative;
    top: 4px;
  }
}
</style>
