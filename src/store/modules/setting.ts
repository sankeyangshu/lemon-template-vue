import { defineStore } from 'pinia';

interface settingsStateType {
  isDark: boolean;
}

export const useSettingStore = defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: 'settingState',

  // state: 返回对象的函数
  state: (): settingsStateType => ({
    isDark: false, // 深色模式 切换暗黑模式
  }),

  // actions: 可以同步 也可以异步
  actions: {
    // 设置暗黑模式
    setThemeDark(value: boolean) {
      this.isDark = value;
    },
  },
});
