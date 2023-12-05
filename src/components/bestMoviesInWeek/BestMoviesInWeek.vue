<script setup lang="ts">
import { ref } from "vue";
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";

const datas = ref([{}, {}, {}, {}, {}]);
</script>
<template>
  <div class="best-movies-in-week-container">
    <div class="header-wrapper">
      <div class="title-wrapper">
        <h3 class="title">本周最佳电影</h3>
      </div>
      <div class="more-wrapper">
        <button>更多</button>
      </div>
    </div>
    <div class="video-show-card-wrapper">
      <VideoShowCard v-for="(video, index) in datas" :key="index" />
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./bestMoviesInWeek.scss";
</style>
