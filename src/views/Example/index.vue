<template>
  <div class="my-20">
    <VanCellGroup :title="$t('example.basicSetting')" inset>
      <VanCell :title="`🌓 ${$t('example.darkMode')}`">
        <template #right-icon>
          <SwitchDark />
        </template>
      </VanCell>
      <VanCell
        :title="`📚 ${$t('example.language')}`"
        is-link
        :value="getCurrentLanguageText()"
        @click="isShowLanguagePicker = true"
      />
    </VanCellGroup>

    <VanCellGroup :title="$t('example.exampleComponent')" inset>
      <template v-for="item in menuItems" :key="item.route">
        <VanCell :title="item.title" :to="item.route" is-link />
      </template>
    </VanCellGroup>

    <VanPopup v-model:show="isShowLanguagePicker" position="bottom">
      <VanPicker
        v-model="currentLanguage.value"
        :columns="languageColumns"
        @confirm="onConfirmLanguage"
        @cancel="isShowLanguagePicker = false"
      />
    </VanPopup>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { language } from '@/locales';

const { t } = useI18n();

const menuItems = reactive([
  { title: `💿 ${t('route.mock')}`, route: 'mock' },
  { title: `📊 ${t('route.echarts')}`, route: 'echarts' },
  { title: `🎨 ${t('route.icon')}`, route: 'icon' },
  { title: `🧡 ${t('route.keepAlive')}`, route: 'keepAlive' },
  { title: `🙅 ${t('route.notFound')}`, route: '404' },
]);

const isShowLanguagePicker = ref(false);

// 语言选项
const languageColumns = [
  { text: '简体中文', value: 'zh-CN' },
  { text: 'English', value: 'en-US' },
];

type selectedOptionsType = {
  text: string;
  value: string;
};

const getCurrentLanguageText = () => {
  return languageColumns.find((item) => item.value === language.value)?.text;
};

const currentLanguage = ref({
  text: getCurrentLanguageText(),
  value: [language.value],
});

const onConfirmLanguage = ({ selectedOptions }: { selectedOptions: selectedOptionsType[] }) => {
  currentLanguage.value.text = selectedOptions[0].text;
  language.value = selectedOptions[0].value;
  isShowLanguagePicker.value = false;
};
</script>

<style lang="scss" scoped></style>
