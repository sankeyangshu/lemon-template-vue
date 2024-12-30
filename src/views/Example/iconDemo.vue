<template>
  <div class="box-border w-full p-20">
    <div border="l-3 l-solid color-[var(--van-primary-color)]" class="mb-12 pl-12 leading-27">
      <div class="my-[4px] text-[18px] font-bold">Iconify Icon</div>
    </div>
    <div>
      <IconifyIcon v-for="item in iconifyList" :key="item" :icon="item" class="mr-10 text-24" />
    </div>

    <div border="l-3 l-solid color-[var(--van-primary-color)]" class="mb-12 mt-20 pl-12 leading-27">
      <div class="my-[4px] text-[18px] font-bold">Svg Icon</div>
    </div>
    <div>
      <SvgIcon v-for="item in svgList" :key="item" :icon="item" class="mr-10 text-24" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const iconifyList = reactive([
  'mdi:github',
  'mdi:palette',
  'mdi:book-open-variant',
  'mdi:cellphone-settings-variant',
  'mdi:logout',
]);

const svgList = reactive(['Moon', 'Sunny']);
</script>

<style lang="scss" scoped></style>
