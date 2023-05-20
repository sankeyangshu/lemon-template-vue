<template>
  <h1>{{ props.msg }}</h1>
</template>

<script setup lang="ts">
const props = defineProps({
  msg: String,
});
</script>

<style lang="scss" scoped></style>
