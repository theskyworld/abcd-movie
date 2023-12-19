<script setup lang="ts">
import AnimatedPlaceholder from "@/components/base/AnimatedPlaceholder.vue";
import { ref } from "vue";

// 决定要渲染的skeleton卡片的数量
const cardCount = ref(12);
</script>
<template>
  <div class="loading-skeleton-container">
    <div
      class="video-show-card-wrapper"
      v-for="(i, index) in cardCount"
      :key="index"
    >
      <AnimatedPlaceholder
        class="img"
        width="180px"
        height="260px"
        borderRadius="10px"
      />
      <AnimatedPlaceholder class="title" width="100px" height="15px" />
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./loadingSkeleton.scss";
</style>
