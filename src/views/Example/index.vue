<template>
  <div class="my-20">
    <VanCellGroup title="基础设置" inset>
      <VanCell title="🌓 暗黑模式">
        <template #right-icon>
          <SwitchDark />
        </template>
      </VanCell>
      <VanCell title="📚 语言" is-link />
    </VanCellGroup>

    <VanCellGroup title="示例组件" inset>
      <template v-for="item in menuItems" :key="item.route">
        <VanCell :title="item.title" :to="item.route" is-link />
      </template>
    </VanCellGroup>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const menuItems = reactive([
  { title: '💿 Mock 指南', route: 'mock' },
  { title: '📊 Echarts 演示', route: 'echarts' },
  { title: '🎨 Icon 示例', route: 'icon' },
  { title: '🧡 KeepAlive 演示', route: 'keepAlive' },
  { title: '🙅 404页 演示', route: '404' },
]);
</script>

<style lang="scss" scoped></style>
