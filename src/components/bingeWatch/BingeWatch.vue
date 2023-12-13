<script setup lang="ts">
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
import { BingeWatchProps } from "./types";
const { videoTitles, imgURLs, videoTags, videoScores } =
  defineProps<BingeWatchProps>();
</script>
<template>
  <div class="binge-watch-container">
    <div class="title-wrapper">
      <h3 class="title">专属推荐</h3>
    </div>
    <div class="video-show-card-wrapper">
      <VideoShowCard
        v-for="(i, index) in videoTitles.length"
        :key="index"
        :title="videoTitles[index]"
        :imgURL="imgURLs[index]"
        :tag="videoTags[index]"
        :score="videoScores[index]"
        is-column
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./bingeWatch.scss";
</style>
