import type { RouteRecordRaw } from 'vue-router';

/**
 * 过滤需要显示tabBar的路由
 * @param routers 异步路由表
 * @returns 需要显示tabBar的路由数组
 */
export const filterTabBar = (routers: RouteRecordRaw[]) => {
  const tabBarRouter: RouteRecordRaw[] = [];
  const deep = (routerList: RouteRecordRaw[]) => {
    routerList.forEach((item) => {
      if (item.meta?.tabBar && item.name) {
        tabBarRouter.push(item);
      }
      if (item.children && item.children.length) {
        deep(item.children);
      }
    });
  };
  deep(routers);
  return tabBarRouter;
};

/**
 * 过滤需要缓存的路由
 * @param routers 异步路由表
 * @returns 需要缓存的路由数组
 */
export const filterKeepAlive = (routers: RouteRecordRaw[]) => {
  const cacheRouter: string[] = [];
  const deep = (routerList: RouteRecordRaw[]) => {
    routerList.forEach((item) => {
      if (item.meta?.keepAlive && item.name) {
        cacheRouter.push(item.name as string);
      }
      if (item.children && item.children.length) {
        deep(item.children);
      }
    });
  };
  deep(routers);
  return cacheRouter;
};
