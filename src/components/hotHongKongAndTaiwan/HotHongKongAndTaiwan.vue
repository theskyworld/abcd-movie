<script setup lang="ts">
import { ref } from "vue";
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
import { HotHongKongAndTaiwanProps } from "./types";

const { videoTitles, imgURLs, videoEpisodes, videoScores } =
  defineProps<HotHongKongAndTaiwanProps>();
</script>
<template>
  <div class="hot-hongkong-and-taiwan-container">
    <div class="header-wrapper">
      <div class="title-wrapper">
        <h3 class="title">热播港台剧</h3>
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
@use "./hotHongKongAndTaiwan.scss";
</style>
