<!--
 * @Description: 欢迎组件
 * @Author: 三棵杨树
 * @Date: 2023-04-05 14:35:21
 * @LastEditors: 三棵杨树
 * @LastEditTime: 2023-04-05 14:45:56
-->
<template>
  <h1>{{ props.msg }}</h1>
</template>

<script setup lang="ts">
const props = defineProps({
  msg: String,
});
</script>

<style lang="scss" scoped></style>
