<template>
  <VanConfigProvider :theme="darkMode" :theme-vars="getThemeVars()" theme-vars-scope="global">
    <div class="absolute bottom-0 top-0 w-full overflow-hidden">
      <RouterView />
    </div>
  </VanConfigProvider>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSettingStore } from '@/store/modules/setting';
import type { ConfigProviderThemeVars } from 'vant';

const settingStore = useSettingStore();
const { darkMode, themeColor } = storeToRefs(settingStore);

const getThemeVars = (): ConfigProviderThemeVars => {
  return {
    primaryColor: themeColor.value,
  };
};
</script>

<style scoped></style>
