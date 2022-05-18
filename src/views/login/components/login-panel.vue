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
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><PhoneFilled class="icon_style" /></el-icon>
            <span>{{ '手机登录' }}</span>
          </span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="submit">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link style="margin-top: -2px">忘记密码</el-link>
    </div>
    <el-button class="login" type="primary" @click="handleClick"
      >立即登录
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const handleClick = () => {
      accountRef.value?.loginAction(isKeepPassword.value)
    }
    return {
      isKeepPassword,
      handleClick,
      accountRef
    }
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

  .submit {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .login {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
