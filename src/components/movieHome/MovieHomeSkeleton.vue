<script setup>
import { ref } from "vue";
import AnimatedPlaceholder from "@/components/base/AnimatedPlaceholder.vue";

const curRank = ref("日榜");
</script>
<template>
  <div class="movie-home-skeleton-container">
    <div class="video-show-card-wrapper">
      <div class="video-show-card" v-for="i in 12" :key="i">
        <AnimatedPlaceholder
          class="img"
          height="260px"
          width="180px"
          borderRadius="10px"
        />
        <AnimatedPlaceholder height="15px" width="100px" borderRadius="3px" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./movieHomeSkeleton.scss";
</style>
