<script setup lang="ts">
import { ref } from "vue";
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
import { hotPlayingProps } from "./types";

const { videoTitles, imgURLs, videoTags, videoScores } =
  defineProps<hotPlayingProps>();
</script>
<template>
  <div class="hot-playing-container">
    <div class="header-wrapper">
      <div class="title-wrapper">
        <h3 class="title">正在热播</h3>
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
        :tag="videoTags[index]"
        :score="videoScores[index]"
        is-row
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./hotPlaying.scss";
</style>
