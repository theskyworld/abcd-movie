<script setup lang="ts">
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
const datas = [{}, {}, {}, {}, {}];
</script>
<template>
  <div class="binge-watch-container">
    <div class="title-wrapper">
      <h3 class="title">专属推荐</h3>
    </div>
    <div class="video-show-card-wrapper">
      <VideoShowCard v-for="(video, index) in datas" :key="index" />
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./bingeWatch.scss";
</style>
