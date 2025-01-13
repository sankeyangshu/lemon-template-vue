<template>
  <div>
    <VanDivider>{{ $t('themeSetting.themeMode') }}</VanDivider>
    <VanCellGroup inset>
      <VanCell center :title="$t('example.darkMode')">
        <template #right-icon>
          <SwitchDark />
        </template>
      </VanCell>
    </VanCellGroup>

    <VanDivider>{{ $t('themeSetting.systemTheme') }}</VanDivider>
    <div class="flex-x-center">
      <div class="grid cols-8 gap-8">
        <div
          v-for="item in themeColorList"
          :key="item"
          class="h-30 w-30 flex-center"
          border="2 solid #e5ebe7 rounded-6"
          :style="{ 'background-color': item }"
          @click="onChangeThemeColor(item)"
        >
          <VanIcon v-show="item === themeColor" name="success" size="20" color="#fff" />
        </div>
      </div>
    </div>

    <VanDivider>{{ $t('themeSetting.pageAnimation') }}</VanDivider>
    <VanCellGroup inset>
      <VanCell center :title="$t('themeSetting.enableAnimation')">
        <template #right-icon>
          <VanSwitch v-model="isPageAnimate" size="22" />
        </template>
      </VanCell>

      <VanCell center :title="$t('themeSetting.animationType')">
        <VanField
          v-model="currentAnimate.text"
          readonly
          :disabled="!isPageAnimate"
          is-link
          center
          :border="false"
          class="!p-0"
          input-align="right"
          @click="onClickOpenPicker"
        />
      </VanCell>
    </VanCellGroup>

    <VanPopup v-model:show="isShowPicker" position="bottom" round>
      <VanPicker
        v-model="currentAnimate.value"
        :columns="animateColumns"
        @confirm="onConfirmAnimate"
        @cancel="isShowPicker = false"
      />
    </VanPopup>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { DEFAULT_THEMECOLOR } from '@/config';
import { useSettingStore } from '@/store/modules/setting';

// 预定义主题颜色
const themeColorList = [
  DEFAULT_THEMECOLOR,
  '#009688',
  '#daa96e',
  '#0c819f',
  '#27ae60',
  '#ff5c93',
  '#e74c3c',
  '#fd726d',
  '#f39c12',
  '#9b59b6',
];

const settingStore = useSettingStore();

const { themeColor, isPageAnimate, pageAnimateType } = storeToRefs(settingStore);

const onChangeThemeColor = (color: string) => {
  settingStore.setThemeColor(color);
};

const isShowPicker = ref(false);

const onClickOpenPicker = () => {
  if (isPageAnimate.value) {
    isShowPicker.value = true;
  }
};

const { t } = useI18n();

// 动画选项
const animateColumns = [
  { value: 'zoom-fade', text: t('themeSetting.themeGradient') },
  { value: 'zoom-out', text: t('themeSetting.themeFlash') },
  { value: 'fade-slide', text: t('themeSetting.themeSlide') },
  { value: 'fade', text: t('themeSetting.themeFade') },
  { value: 'fade-bottom', text: t('themeSetting.themeBottom') },
  { value: 'fade-scale', text: t('themeSetting.themeScale') },
];

type selectedOptionsType = {
  text: string;
  value: string;
};

const getCurrentAnimateText = () => {
  return animateColumns.find((item) => item.value === pageAnimateType.value)?.text;
};

const currentAnimate = ref({
  text: getCurrentAnimateText(),
  value: [pageAnimateType.value],
});

const onConfirmAnimate = ({ selectedOptions }: { selectedOptions: selectedOptionsType[] }) => {
  currentAnimate.value.text = selectedOptions[0].text;
  settingStore.setPageAnimateType(selectedOptions[0].value);
  isShowPicker.value = false;
};
</script>

<style lang="scss" scoped></style>
