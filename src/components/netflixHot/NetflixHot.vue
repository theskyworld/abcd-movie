<script setup lang="ts">
import { ref } from "vue";
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
import { NetflixHotProps } from "./types";

const { videoTitles, imgURLs, videoEpisodes, videoScores } =
  defineProps<NetflixHotProps>();
</script>
<template>
  <div class="netflix-hot-container">
    <div class="header-wrapper">
      <div class="title-wrapper">
        <h3 class="title">Netflix奈飞热播剧</h3>
      </div>
      <div class="more-wrapper">
        <button>更多</button>
      </div>
    </div>
    <div class="video-show-card-wrapper">
      <VideoShowCard
        v-for="(i, index) in videoTitles.length"
        :key="index"
        :title="videoTitles[index]"
        :imgURL="imgURLs[index]"
        :score="videoScores[index]"
        :episode="videoEpisodes[index]"
        is-row
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./netflixHot.scss";
</style>
