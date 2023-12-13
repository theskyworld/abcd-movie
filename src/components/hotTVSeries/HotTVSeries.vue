<script setup lang="ts">
import { ref } from "vue";
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
import { HotTVSeriesProps } from "./types";

const { videoTitles, imgURLs, videoEpisodes, videoScores } =
  defineProps<HotTVSeriesProps>();
</script>
<template>
  <div class="hot-tv-series-container">
    <div class="header-wrapper">
      <div class="title-wrapper">
        <h3 class="title">热播电视剧</h3>
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
        :episode="videoEpisodes[index]"
        :score="videoScores[index]"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./hotTVSeries.scss";
</style>
