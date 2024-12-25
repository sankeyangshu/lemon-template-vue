<template>
  <VanSwitch v-model="darkMode" size="20" @click="onChangeDarkMode">
    <template #node>
      <div class="w-full flex-center c-black">
        <SvgIcon :icon="darkMode ? 'Moon' : 'Sunny'" />
      </div>
    </template>
  </VanSwitch>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core';
import { ref } from 'vue';
import { useSettingStore } from '@/store/modules/setting';

const settingStore = useSettingStore();

const isDark = useDark();
const toggleDark = useToggle(isDark);

const darkMode = ref(isDark.value);

const onChangeDarkMode = () => {
  toggleDark();
  settingStore.setThemeDark(isDark.value ? 'dark' : 'light');
};
</script>

<style lang="scss" scoped></style>
