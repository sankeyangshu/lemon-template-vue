<template>
  <VanField
    v-model="model"
    :type="isShowPassword ? 'text' : 'password'"
    :name="name"
    :placeholder="placeholder"
    :right-icon="isShowPassword ? 'eye-o' : 'closed-eye'"
    :rules="rules"
    @click-right-icon="isShowPassword = !isShowPassword"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { FieldRule } from 'vant';

interface PropsType {
  name: string;
  placeholder?: string;
  rules?: FieldRule[];
}

const isShowPassword = ref(false);

const { name = 'password', placeholder = '请输入密码' } = defineProps<PropsType>();

const model = defineModel<string | number>();
</script>

<style lang="scss" scoped></style>
