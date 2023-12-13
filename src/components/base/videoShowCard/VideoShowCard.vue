<script setup lang="ts">
import { ref } from "vue";
import { VideoShowCardProps } from "./types";
const { title, imgURL, tag, score, episode } =
  defineProps<VideoShowCardProps>();
</script>
<template>
  <div class="video-show-card-container">
    <div class="img-wrapper">
      <img :src="imgURL" :alt="title" />
      <span class="label" v-if="tag">{{ tag }}</span>
      <span class="score" v-if="score">{{ score }}</span>
      <span class="episodes" v-if="episode">{{ episode }}</span>
    </div>
    <div class="video-info-wrapper">
      <div class="title">
        <span>{{ title }}</span>
      </div>
      <div class="watch-percent">
        <!-- <span>看至{{ watchPercent }}集</span> -->
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./videoShowCard.scss";
</style>
