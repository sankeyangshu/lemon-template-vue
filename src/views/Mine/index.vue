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
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      />
      <div class="ml-10 flex-1">
        <div class="mb-2 text-20">登录/注册</div>
        <div class="text-14 color-[--color-text]">个性签名</div>
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
      <VanCell title="退出登录" is-link>
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
</script>

<style lang="scss" scoped></style>
