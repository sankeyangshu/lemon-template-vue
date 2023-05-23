<template>
  <div class="switch-dark" @click="onClickToggleDark">
    <svg-icon v-if="isDark" icon="Moon" className="switch-svg"></svg-icon>
    <svg-icon v-else icon="Sunny" className="switch-svg"></svg-icon>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useSettingStore } from '@/store/modules/setting';
import { useTheme } from '@/hooks/useTheme';

// 获取全局状态管理仓库中系统设置状态
const settingStore = useSettingStore();
const isDark = computed(() => settingStore.isDark);

// 获取切换暗黑模式hooks
const { switchDark } = useTheme();

// 切换暗黑模式
const onClickToggleDark = () => {
  settingStore.setThemeDark(!isDark.value);
  switchDark();
};
</script>

<style lang="scss" scoped>
.switch-dark {
  cursor: pointer;
  transition: all 0.3s;
  .switch-svg {
    font-size: 20px;
  }
}
</style>
