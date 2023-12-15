<script setup lang="ts">
import AnimatedPlaceholder from "@/components/base/AnimatedPlaceholder.vue";
</script>
<template>
  <div class="netflix-page-skeleton-container">
    <div class="video-show-card-wrapper" v-for="(i, index) in 16" :key="index">
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
@use "./netflixPageSkeleton.scss";
</style>
