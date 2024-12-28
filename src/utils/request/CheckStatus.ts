import { showFailToast } from 'vant';

/**
 * 校验网络请求状态码
 * @param {number} status 状态码
 * @param {string | string[]} msg 错误提示信息
 */
export const checkStatus = (status: number, msg?: string | Array<string>): void => {
  let errMsg = ''; // 错误提示信息
  if (msg) {
    errMsg = typeof msg === 'string' ? msg : msg[0];
  }

  switch (status) {
    case 400:
      showFailToast(errMsg || '请求失败！请您稍后重试');
      break;
    case 401:
      showFailToast(errMsg || '登录失效！请您重新登录');
      // TODO: 退出登录逻辑待开发
      break;
    case 403:
      showFailToast(errMsg || '当前账号无权限访问！');
      break;
    case 404:
      showFailToast(errMsg || '你所访问的资源不存在！');
      break;
    case 405:
      showFailToast(errMsg || '请求方式错误！请您稍后重试');
      break;
    case 408:
      showFailToast(errMsg || '请求超时！请您稍后重试');
      break;
    case 500:
      showFailToast(errMsg || '服务异常！');
      break;
    case 502:
      showFailToast(errMsg || '网络错误！');
      break;
    case 503:
      showFailToast(errMsg || '服务不可用，服务器暂时过载或维护！');
      break;
    case 504:
      showFailToast(errMsg || '网络超时！');
      break;
    default:
      showFailToast(errMsg || '请求失败！');
  }
};
