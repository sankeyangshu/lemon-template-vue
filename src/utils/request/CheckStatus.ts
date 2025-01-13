import { showFailToast } from 'vant';
import { i18n } from '@/locales';
import { useUserStore } from '@/store/modules/user';

/**
 * 校验网络请求状态码
 * @param {number} status 状态码
 * @param {string | string[]} msg 错误提示信息
 */
export const checkStatus = (status: number, msg?: string | Array<string>): void => {
  const userStore = useUserStore();

  let errMsg = ''; // 错误提示信息
  if (msg) {
    errMsg = typeof msg === 'string' ? msg : msg[0];
  }

  switch (status) {
    case 400:
      showFailToast(errMsg || i18n.global.t('api.errMsg400'));
      break;
    case 401:
      showFailToast(errMsg || i18n.global.t('api.errMsg401'));
      // 退出登录
      userStore.logout(true);
      break;
    case 403:
      showFailToast(errMsg || i18n.global.t('api.errMsg403'));
      break;
    case 404:
      showFailToast(errMsg || i18n.global.t('api.errMsg404'));
      break;
    case 405:
      showFailToast(errMsg || i18n.global.t('api.errMsg405'));
      break;
    case 408:
      showFailToast(errMsg || i18n.global.t('api.errMsg408'));
      break;
    case 500:
      showFailToast(errMsg || i18n.global.t('api.errMsg500'));
      break;
    case 502:
      showFailToast(errMsg || i18n.global.t('api.errMsg502'));
      break;
    case 503:
      showFailToast(errMsg || i18n.global.t('api.errMsg503'));
      break;
    case 504:
      showFailToast(errMsg || i18n.global.t('api.errMsg504'));
      break;
    default:
      showFailToast(errMsg || i18n.global.t('api.errMsgDefault'));
  }
};
