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

    <VanForm :model="loginForm" validate-trigger="onSubmit" class="w-full" @submit="onSubmit">
      <div
        class="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]"
      >
        <VanField
          v-model="loginForm.username"
          name="username"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
      </div>
      <div
        class="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]"
      >
        <VanField
          v-model="loginForm.password"
          :type="isShowPassword ? 'text' : 'password'"
          name="password"
          placeholder="请输入密码"
          :right-icon="isShowPassword ? 'eye-o' : 'closed-eye'"
          :rules="[{ required: true, message: '请填写密码' }]"
          @click-right-icon="isShowPassword = !isShowPassword"
        />
      </div>
      <VanButton :loading="loading" round block type="primary" native-type="submit">
        提交
      </VanButton>
    </VanForm>

    <div class="mt-100 flex-center">
      <IconifyIcon class="mx-60 text-32 color-[#83DC42]" icon="mdi:wechat" />
      <IconifyIcon class="text-32 color-[#F9221D]" icon="mdi:sina-weibo" />
      <IconifyIcon class="mx-60 text-32" icon="mdi:github" />
    </div>

    <div class="mt-32 h-20 flex-center text-14 color-[var(--van-primary-color)] leading-20">
      <div>找回密码</div>
      <div class="mx-15">|</div>
      <div>注册账号</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/modules/user';
import type { loginDataType } from '@/api/System/user';

const isShowPassword = ref(false);

// 表单数据
const loginForm = reactive({
  username: '', // 用户名
  password: '', // 密码
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
</script>

<style lang="scss" scoped></style>
