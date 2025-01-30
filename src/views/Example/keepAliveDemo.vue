<template>
  <div class="box-border w-full p-20">
    <VanCellGroup :border="false" class="mb-10 w-full">
      <VanField v-model="text" label="文本" placeholder="请输入文本" />
    </VanCellGroup>
    <VanStepper v-model="value" />

    <div class="mt-20 color-[var(--van-text-color-2)]">
      {{ $t('example.keepAliveTips') }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

defineOptions({
  name: 'KeepAliveDemo',
});

const text = ref('');
const value = ref(1);
</script>

<style lang="scss" scoped></style>
