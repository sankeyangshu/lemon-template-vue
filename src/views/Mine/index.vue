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
        <div class="mb-2 text-20">{{ $t('login.login') }}/{{ $t('login.register') }}</div>
      </div>
      <div v-else class="ml-10 flex-1">
        <div class="mb-2 text-20">{{ userInfo?.nickname }}</div>
        <div class="truncate text-14 color-[--color-text]">{{ userInfo?.sign }}</div>
      </div>
    </div>

    <VanCellGroup inset>
      <VanCell :title="$t('route.themeSetting')" is-link to="/themeSetting">
        <template #icon>
          <div class="leading-24">
            <IconifyIcon icon="mdi:palette" class="mr-5 text-18" />
          </div>
        </template>
      </VanCell>
      <VanCell :title="$t('mine.projectDocs')" is-link @click="onClickOpenDocs">
        <template #icon>
          <div class="leading-24">
            <IconifyIcon icon="mdi:book-open-variant" class="mr-5 text-18" />
          </div>
        </template>
      </VanCell>
      <VanCell :title="$t('mine.systemVersion')" :value="`v${version}`">
        <template #icon>
          <div class="leading-24">
            <IconifyIcon icon="mdi:cellphone-settings-variant" class="mr-5 text-18" />
          </div>
        </template>
      </VanCell>
      <VanCell v-if="isLogin" :title="$t('mine.logout')" is-link @click="onClickLogout">
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
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/modules/user';

const userStore = useUserStore();
const userInfo = computed(() => userStore.userInfo);
const isLogin = computed(() => !!userInfo.value?.id);

const router = useRouter();

const onClickLogin = () => {
  router.push('/login');
};

// 打开文档
const onClickOpenDocs = () => {
  window.open('https://sankeyangshu.github.io/lemon-template-docs/vue/', '_blank');
};

const { t } = useI18n();

const onClickLogout = () => {
  showConfirmDialog({
    title: t('mine.tips'),
    message: t('mine.logoutTips'),
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
