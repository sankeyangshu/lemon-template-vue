<template>
  <div class="box-border wh-full flex-y-center flex-col p-20">
    <div class="mb-30 mt-20">
      <img class="h-100 w-100" src="../../assets/images/logo.png" />
    </div>

    <VanForm :model="registerForm" validate-trigger="onSubmit" class="w-full">
      <div
        class="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]"
      >
        <VanField
          v-model="registerForm.username"
          name="username"
          :placeholder="$t('login.usernameError')"
          :rules="[{ required: true, message: $t('login.usernameError') }]"
        />
      </div>
      <div
        class="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]"
      >
        <PasswordInput
          v-model="registerForm.password"
          name="password"
          :placeholder="$t('login.passwordError')"
          :rules="[{ required: true, message: $t('login.passwordError') }]"
        />
      </div>
      <div
        class="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]"
      >
        <PasswordInput
          v-model="registerForm.confirmPassword"
          name="confirmPassword"
          :placeholder="$t('login.againEnterPassword')"
          :rules="[
            { required: true, message: $t('login.againEnterPassword') },
            { validator: validatorPassword, message: $t('login.passwordInconsistent') },
          ]"
        />
      </div>
      <VanButton :loading="loading" round block type="primary" native-type="submit">
        {{ $t('login.register') }}
      </VanButton>
    </VanForm>

    <div class="fixed bottom-40 mx-20 h-20 flex-center text-14 leading-20">
      <VanCheckbox v-model="isAgreeLicense" shape="square">
        <div>
          {{ $t('login.readAgreement') }}
          <text class="color-[var(--van-primary-color)]">《{{ $t('login.privacyPolicy') }}》</text>
          {{ $t('login.and') }}
          <text class="color-[var(--van-primary-color)]">《{{ $t('login.userAgreement') }}》</text>
        </div>
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
