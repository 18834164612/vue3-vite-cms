<template>
  <div class="login">
    <login-panel />
    <login-account />
    <login-phone />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './components/login-panel.vue'
import LoginAccount from './components/login-account.vue'
import LoginPhone from './components/login-phone.vue'
export default defineComponent({
  components: {
    LoginPanel,
    LoginAccount,
    LoginPhone
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
