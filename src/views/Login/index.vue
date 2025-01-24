<template>
  <div class="box-border wh-full flex-y-center flex-col p-20">
    <div class="mb-30 mt-20">
      <img class="h-100 w-100" src="../../assets/images/logo.png" />
    </div>

    <VanForm :model="loginForm" validate-trigger="onSubmit" class="w-full" @submit="onSubmit">
      <div
        class="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]"
      >
        <VanField
          v-model="loginForm.username"
          name="username"
          :placeholder="$t('login.usernameError')"
          :rules="[{ required: true, message: $t('login.usernameError') }]"
        />
      </div>
      <div
        class="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]"
      >
        <PasswordInput
          v-model="loginForm.password"
          name="password"
          :placeholder="$t('login.passwordError')"
          :rules="[{ required: true, message: $t('login.passwordError') }]"
        />
      </div>
      <VanButton :loading="loading" round block type="primary" native-type="submit">
        {{ $t('login.login') }}
      </VanButton>
    </VanForm>

    <div class="mt-100 flex-center">
      <IconifyIcon class="mx-60 text-32 color-[#83DC42]" icon="mdi:wechat" />
      <IconifyIcon class="text-32 color-[#F9221D]" icon="mdi:sina-weibo" />
      <IconifyIcon class="mx-60 text-32" icon="mdi:github" />
    </div>

    <div class="mt-32 h-20 flex-center text-14 color-[var(--van-primary-color)] leading-20">
      <div @click="onClickForget">{{ $t('login.forgotPassword') }}</div>
      <div class="mx-15">|</div>
      <div @click="onClickRegister">{{ $t('login.registerAccount') }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/modules/user';
import type { loginDataType } from '@/api/System/user';
import PasswordInput from './components/PasswordInput.vue';

// 表单数据
const loginForm = reactive({
  username: 'admin', // 用户名
  password: '123456', // 密码
});

// 按钮加载状态
const loading = ref(false);

// 路由
const router = useRouter();

const userStore = useUserStore();

// 提交表单
const onSubmit = async (values: loginDataType) => {
  try {
    loading.value = true; // 按钮进入加载状态
    // 登录
    await userStore.login(values);
    router.push('/');
  } finally {
    loading.value = false; // 关闭按钮加载状态
  }
};

// 跳转注册页面
const onClickRegister = () => {
  router.push('/register');
};

// 跳转找回密码页面
const onClickForget = () => {
  router.push('/forgotPassword');
};
</script>

<style lang="scss" scoped></style>
