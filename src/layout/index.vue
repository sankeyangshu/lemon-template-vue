<template>
  <div class="h-screen flex flex-col">
    <VanNavBar v-if="isShowNavBar" :title="currentTitle" fixed placeholder>
      <template #left>
        <VanIcon v-if="!isShowTabBar" name="arrow-left" size="20" @click="onClickLeftIcon" />
      </template>
    </VanNavBar>

    <RouterView v-slot="{ Component, route }" class="flex-1 overflow-x-hidden">
      <Transition :name="getTransitionName" mode="out-in" appear>
        <KeepAlive :include="keepAliveRoutes">
          <component :is="Component" :key="route.path" />
        </KeepAlive>
      </Transition>
    </RouterView>

    <VanTabbar v-if="isShowTabBar" route placeholder>
      <VanTabbarItem v-for="item in tabbarList" :key="item.name" replace :to="item.path">
        <template #icon>
          <VanIcon v-if="item.meta?.iconType === 'vant'" :name="`${item.meta?.icon}`" />
          <SvgIcon v-else :icon="`${item.meta?.icon}`" />
        </template>
        {{ $t(`route.${item.meta?.i18n}`) }}
      </VanTabbarItem>
    </VanTabbar>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { filterTabBar } from '@/router/util';
import { useRouteStore } from '@/store/modules/route';
import { useSettingStore } from '@/store/modules/setting';

const router = useRouter();

const onClickLeftIcon = () => {
  router.back();
};

const settingStore = useSettingStore();
const { isPageAnimate, pageAnimateType } = storeToRefs(settingStore);

const getTransitionName = computed(() => {
  return isPageAnimate.value ? pageAnimateType.value : undefined;
});

// 获取路由全局状态管理
const routeStore = useRouteStore();

const { keepAliveRoutes } = storeToRefs(routeStore);

const tabbarList = computed(() => {
  return filterTabBar(routeStore.dynamicRoutes);
});

const route = useRoute();

const { t } = useI18n();

const currentTitle = computed(() => t(`route.${route.meta?.i18n}`));

const isShowNavBar = computed(() => !route.meta?.hiddenNavBar);

const isShowTabBar = computed(() => !!route.meta?.tabBar);
</script>

<style lang="scss" scoped></style>
