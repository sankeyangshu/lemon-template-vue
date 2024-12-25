import { defineStore } from 'pinia';
import { ref } from 'vue';
import { DEFAULT_THEMECOLOR } from '@/config';
import type { ConfigProviderTheme } from 'vant';

const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

export const useSettingStore = defineStore(
  'settingState',
  () => {
    const darkMode = ref<ConfigProviderTheme>(prefersDark ? 'dark' : 'light');

    const themeColor = ref(DEFAULT_THEMECOLOR); // 主题颜色

    const isPageAnimate = ref(true); // 是否开启路由动画

    const pageAnimateType = ref('zoom-fade'); // 路由动画类型

    const setThemeDark = (value: ConfigProviderTheme) => {
      darkMode.value = value;
    };

    const setThemeColor = (value: string) => {
      themeColor.value = value;
    };

    const setPageAnimate = (value: boolean) => {
      isPageAnimate.value = value;
    };

    const setPageAnimateType = (value: string) => {
      pageAnimateType.value = value;
    };

    return {
      darkMode,
      themeColor,
      isPageAnimate,
      pageAnimateType,
      setThemeDark,
      setThemeColor,
      setPageAnimate,
      setPageAnimateType,
    };
  },
  {
    persist: true, // 进行持久化存储
  }
);
