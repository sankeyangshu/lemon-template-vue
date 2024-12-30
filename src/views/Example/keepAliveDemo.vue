<template>
  <div class="box-border w-full p-20">
    <VanCellGroup :border="false" class="mb-10 w-full">
      <VanField v-model="text" label="文本" placeholder="请输入文本" />
    </VanCellGroup>
    <VanStepper v-model="value" />

    <div class="mt-20 color-[var(--van-text-color-2)]">
      当前组件会被缓存，再次进入时会保留之前的状态
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const text = ref('');
const value = ref(1);
</script>

<style lang="scss" scoped></style>
