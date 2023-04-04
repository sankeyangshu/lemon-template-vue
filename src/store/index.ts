/*
 * @Description: pinia配置文件
 * @Author: 三棵杨树
 * @Date: 2023-04-04 20:58:06
 * @LastEditors: 三棵杨树
 * @LastEditTime: 2023-04-04 20:58:06
 */

import { App } from 'vue';
import { createPinia } from 'pinia';

// 创建pinia实例
const store = createPinia();

// 配置pinia
export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };
