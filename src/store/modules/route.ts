import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { asyncRoutes, constantRoutes, notFoundRouter } from '@/router';
import { filterKeepAlive } from '@/router/util';
import type { RouteRecordRaw } from 'vue-router';

export const useRouteStore = defineStore('routeState', () => {
  const allRouters = ref<RouteRecordRaw[]>([]);
  const dynamicRoutes = ref<RouteRecordRaw[]>([]); // 动态路由

  const keepAliveRoutes = computed(() => {
    return filterKeepAlive(dynamicRoutes.value);
  });

  const generateRoutes = (): Promise<RouteRecordRaw[]> => {
    return new Promise((resolve) => {
      const accessedRoutes = asyncRoutes.concat(notFoundRouter);

      allRouters.value = constantRoutes.concat(accessedRoutes);
      dynamicRoutes.value = accessedRoutes;
      resolve(accessedRoutes);
    });
  };

  return {
    allRouters,
    dynamicRoutes,
    keepAliveRoutes,
    generateRoutes,
  };
});
