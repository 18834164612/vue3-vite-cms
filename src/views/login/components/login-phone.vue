<template>
  <div>
    <el-form :label-width="60" :model="phone">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="phone.number"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verifyCode">
        <div class="get_code">
          <el-input v-model="phone.verifyCode"></el-input>
          <el-button class="code_btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const phone = reactive({
      number: '',
      verifyCode: ''
    })
    return {
      phone
    }
  }
})
</script>

<style scoped lang="less">
.get_code {
  display: flex;

  .code_btn {
    margin-left: 8px;
  }
}
</style>
