<template>
  <div>
    <el-form :label-width="60" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus/lib/components'
import { defineComponent, reactive, ref } from 'vue'
import loaclCache from '@/utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const rules = {
      name: [
        { required: true, message: '用户名必填', trigger: 'blur' },
        {
          pattern: /^[a-z0-9]{5,10}/,
          message: '用户名必须是5-10个字母或数字',
          trigger: 'blur'
        }
      ],
      password: [
        { required: true, message: '密码必填', trigger: 'blur' },
        {
          pattern: /^[a-z0-9]{3,}/,
          message: '密码必须是3位以上的字母或数字',
          trigger: 'blur'
        }
      ]
    }
    const formRef = ref<InstanceType<typeof ElForm>>()
    const account = reactive({
      name: loaclCache.getCache('name') ?? '',
      password: loaclCache.getCache('password') ?? ''
    })
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          //1.判断是否要记住密码
          if (isKeepPassword) {
            //本地缓存
            loaclCache.setCache('name', account.name)
            loaclCache.setCache('password', account.password)
          } else {
            loaclCache.deleteCache('name')
            loaclCache.deleteCache('password')
          }

          //2.开始登录验证
          store.dispatch('login/accountLoginAction', account)
        }
      })
    }
    return {
      account,
      rules,
      formRef,
      loginAction
    }
  }
})
</script>

<style scoped></style>
