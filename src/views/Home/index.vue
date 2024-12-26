<template>
  <div class="box-border wh-full flex-center px-12">
    <div class="wh-full">
      <div class="mx-auto mb-40 mt-100 h-100 w-100">logo</div>
      <div
        class="my-10 box-border w-full rounded-12 bg-[var(--color-block-background)] px-20 py-12 text-18"
      >
        <a class="flex-center leading-35" href="https://github.com/sankeyangshu/lemon-template-vue">
          <div class="font-bold">Lemon-Template-Vue</div>
          <IconifyIcon icon="mdi:github" class="ml-8 text-22" />
        </a>
        <div class="mb-6 mt-12 text-14 leading-24">基于 Vue 3 生态系统的移动 Web 应用模板</div>
      </div>

      <TransitionGroup
        name="scale-in"
        tag="div"
        class="grid mt-16 gap-12 pb-24 text-center text-14"
      >
        <div
          v-for="(item, index) in contentList"
          :key="item"
          ref="contentItems"
          :data-index="index"
          class="animated-item box-border w-full truncate border border-[var(--color-border)] rounded-12 border-solid p-12"
        >
          {{ item }}
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';

const contentList = reactive([
  '⚡ Vue3 + Vite6',
  '🍕 TypeScript',
  '✨ Vant4 组件库',
  '🍍 Pinia 状态管理',
  '🌀 Unocss 原子类框架',
  '🗺️ Vue-router 4',
  '💅 Vue 3.5+ 最新语法',
  '🌠 使用最新的 <script setup> 语法',
  '🎉 内置 Echarts VueUse',
  '📏 vmin 视口适配',
  '📡 Axios 封装',
  '👏 集成多种图标方案',
  '🔧 零配置 ESlint，集成Prettier',
  '🎨 使用 Git Hook 进行规范化提交',
  '🌓 主题配置，支持深色模式',
  '📦 打包资源 gzip 压缩',
  '🚀 首屏加载动画',
  '🔒 完善的登录系统',
]);

const contentItems = ref<HTMLElement[]>([]);

// 加载首页动画效果
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.5,
  }
);

onMounted(() => {
  contentItems.value.forEach((item) => {
    observer.observe(item);
  });
});
</script>

<style lang="scss" scoped>
.animated-item {
  opacity: 0;
  transform: scale(0.8);
  transition:
    opacity 0.5s,
    transform 0.5s;
}

.animated-item.visible {
  opacity: 1;
  transform: scale(1);
}

/* 动画效果 */
.scale-in-enter-active,
.scale-in-leave-active {
  transition:
    opacity 0.5s,
    transform 0.5s;
}

.scale-in-enter,
.scale-in-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
