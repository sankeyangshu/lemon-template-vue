<template>
  <!-- svg图标组件 开始 -->
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
  <!-- svg图标组件 结束 -->
</template>

<script lang="ts" setup>
import { computed } from 'vue';

// 获取父组件传递的值
const props = withDefaults(
  defineProps<{
    // icon 图标
    icon: string;
    // 图标类名
    className?: string;
  }>(),
  {
    icon: '',
    className: '',
  }
);

/**
 * svg图标类名
 */
const svgClass = computed(() => {
  return props.className ? `svg-icon ${props.className}` : 'svg-icon';
});

/**
 * 项目内图标
 */
const iconName = computed(() => {
  return props.icon ? `#icon-${props.icon}` : '#icon';
});
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  overflow: hidden;
  vertical-align: -0.15em;
  fill: currentColor;
}
</style>
