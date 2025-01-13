import { Locale } from 'vant';
import enUS from 'vant/es/locale/lang/en-US';
import zhCN from 'vant/es/locale/lang/zh-CN';
import { computed, type App } from 'vue';
import { createI18n } from 'vue-i18n';

// 默认使用的语言
const defaultLanguage = 'zhCn';

const vantLocales = {
  'zh-CN': zhCN,
  'en-US': enUS,
};

/**
 * 获取默认的本地语言
 * @returns 语言
 */
const getDefaultLanguage = () => {
  const locales = Object.keys(vantLocales);

  const localLanguage = localStorage.getItem('language') || navigator.language;

  // 存在当前语言的语言包 或 存在当前语言的任意地区的语言包
  if (locales.includes(localLanguage)) return localLanguage;

  // 若未找到，则使用 默认语言包
  return defaultLanguage;
};

/**
 * 加载本地语言包
 * @param locale 语言
 * @param i18n 国际化配置
 */
const loadLocaleMsg = async (locale: string, i18n: I18n) => {
  const messages = await import(`./modules/${locale}.json`);
  i18n.global.setLocaleMessage(locale, messages.default);
};

const setLang = async (lang: string, i18n: I18n) => {
  await loadLocaleMsg(lang, i18n);

  document.querySelector('html')!.setAttribute('lang', lang);
  localStorage.setItem('language', lang);
  i18n.global.locale.value = lang;

  // 设置 vant 组件语言包
  Locale.use(lang, vantLocales[lang as keyof typeof vantLocales]);
};

/**
 * 初始化国际化
 */
const initI18n = () => {
  const lang = getDefaultLanguage();
  const i18n = createI18n({
    // 使用 Composition API 模式，则需要将其设置为false
    legacy: false,
    // 全局注入 $t 函数
    globalInjection: true,
    // 使用的语言
    locale: lang,
    // 当前语言翻译缺失时显示的语言
    fallbackLocale: lang,
  });

  setLang(lang, i18n);

  return i18n;
};

const i18n = initI18n();
type I18n = typeof i18n;

export const language = computed({
  get() {
    return i18n.global.locale.value;
  },
  set(lang: string) {
    setLang(lang, i18n);
  },
});

/**
 * 配置i18n国际化
 * @param app vue实例
 */
export function setupI18n(app: App<Element>) {
  app.use(i18n);
}

export { i18n };
