<template>
  <div class="box-border w-full p-20">
    <div border="l-3 l-solid color-[var(--van-primary-color)]" class="mb-12 pl-12 leading-27">
      <div class="my-[4px] text-[18px] font-bold">{{ $t('example.mockTips') }}</div>
    </div>

    <div
      class="mt-20 h-300 flex-center rounded-15 bg-white p-20 text-16 leading-30 dark:bg-[--van-background-2]"
    >
      <div v-if="message" class="overflow-auto whitespace-pre text-left">
        {{ message }}
      </div>
      <VanEmpty v-else :description="$t('example.noData')" />
    </div>

    <VanButton
      class="mt-30 w-full"
      type="primary"
      round
      block
      :loading="loading"
      @click="onClickGetMessage"
    >
      {{ $t('example.request') }}
    </VanButton>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import { ref } from 'vue';
import { getExampleAPI } from '@/api/System/user';

const message = ref();

const loading = ref(false);

const onClickGetMessage = async () => {
  try {
    loading.value = true; // 按钮进入加载状态
    const { data } = await getExampleAPI();

    message.value = {
      content: data.content,
      date: dayjs(data.date).format('YYYY-MM-DD HH:mm:ss'),
    };
  } finally {
    loading.value = false; // 关闭按钮加载状态
  }
};
</script>

<style lang="scss" scoped></style>
