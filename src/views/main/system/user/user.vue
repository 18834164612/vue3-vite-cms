<template>
  <div class="user">
    <div class="search">
      <hy-form v-bind="formConfig"></hy-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HyForm from '@/base-ui/form'
import { formConfig } from './config/search.config'

export default defineComponent({
  components: {
    HyForm
  },
  name: 'user',
  setup() {
    return {
      formConfig
    }
  }
})
</script>

<style scoped></style>
