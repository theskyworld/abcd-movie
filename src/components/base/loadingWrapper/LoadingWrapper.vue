<script setup lang="ts">
import Loading from "@/components/base/loading/Loading.vue";

const { flag } = defineProps(["flag"]);
</script>
<template>
  <div class="loading-wrapper-container">
    <Loading class="loading-container" v-if="flag" />
    <slot v-else></slot>
  </div>
</template>
<style scoped lang="scss">
@use "./loadingWrapper.scss";
</style>
