<template>
  <div class="box-border wh-full flex-y-center flex-col p-20">
    <div class="mb-30 mt-20">
      <img class="h-100 w-100" src="../../assets/images/logo.png" />
    </div>

    <VanForm :model="forgetForm" :rules="rules" validate-trigger="onSubmit" class="w-full">
      <div
        class="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]"
      >
        <VanField
          v-model="forgetForm.phone"
          name="phone"
          type="tel"
          :placeholder="$t('login.pleaseEnterPhone')"
          :rules="rules.phone"
        />
      </div>
      <div
        class="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]"
      >
        <VanField
          v-model="forgetForm.code"
          name="code"
          :placeholder="$t('login.pleaseEnterVerificationCode')"
          :rules="rules.code"
        >
          <template #button>
            <VanButton size="small" type="primary"> {{ $t('login.code') }} </VanButton>
          </template>
        </VanField>
      </div>
      <div
        class="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]"
      >
        <PasswordInput
          v-model="forgetForm.password"
          name="password"
          :placeholder="$t('login.pleaseEnterNewPassword')"
          :rules="rules.password"
        />
      </div>
      <div
        class="mb-20 overflow-hidden rounded-20 shadow-[0_0_30px_0_#2B56701A] dark:shadow-[0_0_30px_0_#18181c1A]"
      >
        <PasswordInput
          v-model="forgetForm.confirmPassword"
          name="confirmPassword"
          :placeholder="$t('login.pleaseEnterNewPasswordAgain')"
          :rules="rules.confirmPassword"
        />
      </div>
      <VanButton :loading="loading" round block type="primary" native-type="submit">
        {{ $t('login.confirmReset') }}
      </VanButton>
    </VanForm>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { validPhone } from '@/utils/validate';
import PasswordInput from './components/PasswordInput.vue';

// 表单数据
const forgetForm = reactive({
  phone: '',
  code: '',
  password: '',
  confirmPassword: '',
});

const validatorPassword = (val: string | number) => val === forgetForm.password;
const validatorPhone = (val: string) => validPhone(val);

const { t } = useI18n();

// 表单验证
const rules = reactive({
  phone: [
    { required: true, message: t('login.pleaseEnterPhone') },
    { validator: validatorPhone, message: t('login.pleaseEnterValidPhone') },
  ],
  code: [{ required: true, message: t('login.pleaseEnterVerificationCode') }],
  password: [{ required: true, message: t('login.pleaseEnterNewPassword') }],
  confirmPassword: [
    { required: true, message: t('login.pleaseEnterNewPasswordAgain') },
    { validator: validatorPassword, message: t('login.passwordInconsistent') },
  ],
});

// 按钮加载状态
const loading = ref(false);
</script>

<style lang="scss" scoped></style>
