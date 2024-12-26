<template>
  <div class="wh-full flex-center flex-col">
    <div class="text-center">
      <img class="w-350" src="@/assets/images/404.png" alt="404" />
    </div>
    <div class="text-center">
      <div class="m-20 text-18">抱歉，你访问的页面不存在</div>
      <VanButton type="primary" @click="onClickGoHome"> 回到首页 </VanButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const onClickGoHome = () => {
  router.push('/');
};
</script>

<style lang="scss" scoped></style>
