<script setup lang="ts">
import { ref, computed } from "vue";
import { VideoShowCardProps } from "./types";
const { title, imgURL, tag, score, episode, isRow, isColumn, isDefault, rank } =
  defineProps<VideoShowCardProps>();

const rankBgColor = computed(() => {
  switch (rank) {
    case 1:
      return "red";
    case 2:
      return "#FF752A";
    case 3:
      return "#FFA721";
    default:
      return "#9E9E9E";
  }
});
</script>
<template>
  <div
    class="video-show-card-container"
    :class="{ row: isRow, column: isColumn, default: isDefault }"
  >
    <div class="img-wrapper">
      <img :src="imgURL" :alt="title" />
      <span class="rank" v-if="rank"
        ><p>{{ rank }}</p></span
      >
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
.rank {
  background-color: v-bind(rankBgColor);
}
</style>
