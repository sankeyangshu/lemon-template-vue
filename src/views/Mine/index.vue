<template>
  <div class="wh-full">
    <VanImage width="100%" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />

    <div
      class="relative mx-16 mb-10 flex-y-center rounded-10 bg-[--color-background-2] p-15 -mt-40"
    >
      <VanImage
        class="h-50 w-50"
        round
        fit="cover"
        :src="isLogin ? userInfo?.avatar : 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'"
      />
      <div v-if="!isLogin" class="ml-10 flex-1" @click="onClickLogin">
        <div class="mb-2 text-20">登录/注册</div>
      </div>
      <div v-else class="ml-10 flex-1">
        <div class="mb-2 text-20">{{ userInfo?.nickname }}</div>
        <div class="truncate text-14 color-[--color-text]">{{ userInfo?.sign }}</div>
      </div>
    </div>

    <VanCellGroup inset>
      <VanCell title="主题设置" is-link to="/themeSetting">
        <template #icon>
          <div class="leading-24">
            <IconifyIcon icon="mdi:palette" class="mr-5 text-18" />
          </div>
        </template>
      </VanCell>
      <VanCell title="项目文档" is-link>
        <template #icon>
          <div class="leading-24">
            <IconifyIcon icon="mdi:book-open-variant" class="mr-5 text-18" />
          </div>
        </template>
      </VanCell>
      <VanCell title="系统版本" :value="`v${version}`">
        <template #icon>
          <div class="leading-24">
            <IconifyIcon icon="mdi:cellphone-settings-variant" class="mr-5 text-18" />
          </div>
        </template>
      </VanCell>
      <VanCell v-if="isLogin" title="退出登录" is-link @click="onClickLogout">
        <template #icon>
          <div class="leading-24">
            <IconifyIcon icon="mdi:logout" class="mr-5 text-18" />
          </div>
        </template>
      </VanCell>
    </VanCellGroup>
  </div>
</template>

<script lang="ts" setup>
import { version } from '~root/package.json';
import { showConfirmDialog } from 'vant';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/modules/user';

const userStore = useUserStore();
const userInfo = computed(() => userStore.userInfo);
const isLogin = computed(() => !!userInfo.value?.id);

const router = useRouter();

const onClickLogin = () => {
  router.push('/login');
};

const onClickLogout = () => {
  showConfirmDialog({
    title: '温馨提示',
    message: '确定要退出登录吗？',
  })
    .then(() => {
      userStore.logout();
    })
    .catch(() => {
      // on cancel
    });
};
</script>

<style lang="scss" scoped></style>
