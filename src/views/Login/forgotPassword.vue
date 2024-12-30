<template>
  <div class="box-border wh-full flex-y-center flex-col p-20">
    <div class="mb-30 mt-20">
      <VanImage
        class="h-100 w-100"
        round
        fit="cover"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      />
    </div>

    <VanForm :model="forgetForm" :rules="rules" validate-trigger="onSubmit" class="w-full">
      <div
        class="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]"
      >
        <VanField
          v-model="forgetForm.phone"
          name="phone"
          type="tel"
          placeholder="请输入手机号"
          :rules="rules.phone"
        />
      </div>
      <div
        class="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]"
      >
        <VanField
          v-model="forgetForm.code"
          name="code"
          placeholder="请输入短信验证码"
          :rules="rules.code"
        >
          <template #button>
            <VanButton size="small" type="primary"> 获取验证码 </VanButton>
          </template>
        </VanField>
      </div>
      <div
        class="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]"
      >
        <PasswordInput
          v-model="forgetForm.password"
          name="password"
          placeholder="请输入新密码"
          :rules="rules.password"
        />
      </div>
      <div
        class="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]"
      >
        <PasswordInput
          v-model="forgetForm.confirmPassword"
          name="confirmPassword"
          placeholder="请再次输入新密码"
          :rules="rules.confirmPassword"
        />
      </div>
      <VanButton :loading="loading" round block type="primary" native-type="submit">
        确认重置
      </VanButton>
    </VanForm>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import PasswordInput from './components/PasswordInput.vue';

// 表单数据
const forgetForm = reactive({
  phone: '',
  code: '',
  password: '',
  confirmPassword: '',
});

const validatorPassword = (val: string | number) => val === forgetForm.password;
const validatorPhone = (val: string) => {
  const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
  return reg.test(val);
};

// 表单验证
const rules = reactive({
  phone: [
    { required: true, message: '请填写手机号' },
    { validator: validatorPhone, message: '请输入正确的手机号' },
  ],
  code: [{ required: true, message: '请填写验证码' }],
  password: [{ required: true, message: '请填写新密码' }],
  confirmPassword: [
    { required: true, message: '请再次输入新密码' },
    { validator: validatorPassword, message: '两次输入密码不一致' },
  ],
});

// 按钮加载状态
const loading = ref(false);
</script>

<style lang="scss" scoped></style>
