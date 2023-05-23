import { computed } from 'vue';
import { useSettingStore } from '@/store/modules/setting';

/**
 * @description: 全局主题设置
 */
export const useTheme = () => {
  // 获取全局状态管理仓库中系统设置状态
  const settingStore = useSettingStore();
  const isDark = computed(() => settingStore.isDark);

  // 切换暗黑模式
  const switchDark = () => {
    const body = document.documentElement;

    if (isDark.value) {
      body.setAttribute('class', 'dark');
    } else {
      body.setAttribute('class', '');
    }
  };

  return {
    switchDark,
  };
};
