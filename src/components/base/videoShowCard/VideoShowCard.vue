<script setup lang="ts">
import { ref } from "vue";
// const props = defineProps([
//   "imgURL",
//   "title",
//   "watchPercent",
//   "score",
//   "episodes",
//   "describe",
//   "label",
// ]);

const imgURL = ref(
  "https://liangcang-material.alicdn.com/prod/upload/02582aa670544f8b9232500110c14701.jpg?x-oss-process=image/resize,w_385/interlace,1/quality,Q_80",
);
const title = ref("神话");
const watchPercent = ref(12);
const score = ref("9.1");
const episodes = ref("50集全");
const describe = ref("神话12");
const label = ref("独播");
</script>
<template>
  <div class="video-show-card-container">
    <div class="img-wrapper">
      <img :src="imgURL" alt="" />
      <span class="label">{{ label }}</span>
      <span class="score">{{ score }}</span>
      <span class="episodes">{{ episodes }}</span>
    </div>
    <div class="video-info-wrapper">
      <div class="title">
        <span>{{ title }}</span>
      </div>
      <div class="watch-percent">
        <span>看至{{ watchPercent }}集</span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./videoShowCard.scss";
</style>
