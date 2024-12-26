<template>
  <Icon :icon="props.icon" :class="iconClass" />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed } from 'vue';
import type { IconifyIcon } from '@iconify/vue';

defineOptions({
  name: 'IconifyIcon',
});

// 获取父组件传递的值
const props = withDefaults(
  defineProps<{
    // icon 图标
    icon: string | IconifyIcon;
    // 图标类名
    class?: string;
  }>(),
  {
    icon: '',
    class: '',
  }
);

const iconClass = computed(() => {
  return props.class ? `i-icon ${props.class}` : 'i-icon';
});
</script>

<style scoped>
.i-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
