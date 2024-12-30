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

    <VanForm :model="registerForm" validate-trigger="onSubmit" class="w-full">
      <div
        class="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]"
      >
        <VanField
          v-model="registerForm.username"
          name="username"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
      </div>
      <div
        class="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]"
      >
        <PasswordInput
          v-model="registerForm.password"
          name="password"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </div>
      <div
        class="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]"
      >
        <PasswordInput
          v-model="registerForm.confirmPassword"
          name="confirmPassword"
          placeholder="请再次输入密码"
          :rules="[
            { required: true, message: '请再次填写密码' },
            { validator: validatorPassword, message: '两次输入密码不一致' },
          ]"
        />
      </div>
      <VanButton :loading="loading" round block type="primary" native-type="submit">
        注册
      </VanButton>
    </VanForm>

    <div class="fixed bottom-40 h-20 flex-center text-14 leading-20">
      <VanCheckbox v-model="isAgreeLicense" shape="square">
        <view>
          我已阅读并同意
          <text class="color-[var(--van-primary-color)]">《隐私条款》</text>
          及
          <text class="color-[var(--van-primary-color)]">《用户协议》</text>
        </view>
      </VanCheckbox>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import PasswordInput from './components/PasswordInput.vue';

// 表单数据
const registerForm = reactive({
  username: '',
  password: '',
  confirmPassword: '',
});

const validatorPassword = (val: string | number) => val === registerForm.password;

// 按钮加载状态
const loading = ref(false);

// 是否同意协议
const isAgreeLicense = ref(false);
</script>

<style lang="scss" scoped></style>
