<template>
  <div class="h-screen">
    <RouterView v-slot="{ Component, route }" class="wh-full overflow-x-hidden">
      <KeepAlive :include="keepAliveRoutes">
        <component :is="Component" :key="route.path" />
      </KeepAlive>
    </RouterView>

    <VanTabbar route>
      <VanTabbarItem v-for="item in tabbarList" :key="item.name" replace :to="item.path">
        <template #icon>
          <VanIcon v-if="item.meta?.iconType === 'vant'" :name="`${item.meta?.icon}`" />
          <SvgIcon v-else :icon="`${item.meta?.icon}`" />
        </template>
        {{ item.meta?.title }}
      </VanTabbarItem>
    </VanTabbar>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { filterTabBar } from '@/router/util';
import { useRouteStore } from '@/store/modules/route';

const routeStore = useRouteStore();

const { keepAliveRoutes } = storeToRefs(routeStore);

const tabbarList = computed(() => {
  return filterTabBar(routeStore.dynamicRoutes);
});
</script>

<style lang="scss" scoped></style>
