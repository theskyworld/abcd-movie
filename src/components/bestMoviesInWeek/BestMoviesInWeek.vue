<script setup lang="ts">
import { ref } from "vue";
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
import { BestMoviesInWeekProps } from "./types";

const { videoTitles, imgURLs, videoTags, videoScores } =
  defineProps<BestMoviesInWeekProps>();

const videoShowCardWrapperElemRef = ref();
const curCardsIndex = ref(1);
const allCardsIndex = ref(Math.ceil(videoTitles.length / 5));

// 控制因数量过多而被隐藏的卡片的显示和隐藏
function showHiddenCards() {
  if (curCardsIndex.value < allCardsIndex.value) {
    curCardsIndex.value += 1;
    videoShowCardWrapperElemRef.value.style.transform =
      "translateX(-" + videoShowCardWrapperElemRef.value.offsetWidth + "px)";
  }
}

function hideHiddenCards() {
  if (curCardsIndex.value > 1) {
    curCardsIndex.value -= 1;
    videoShowCardWrapperElemRef.value.style.transform = "translateX(0px)";
  }
}
</script>
<template>
  <div class="best-movies-in-week-container">
    <div class="header-wrapper">
      <div class="title-wrapper">
        <h3 class="title">本周最佳电影</h3>
        <span class="show-hidden-cards">
          <!-- 添加向左的图标 -->
          <i @click="hideHiddenCards()">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-left"></use>
            </svg>
          </i>
          {{ curCardsIndex }} / {{ allCardsIndex }}
          <i @click="showHiddenCards()">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-Right"></use>
            </svg>
          </i>
        </span>
      </div>
    </div>
    <div class="video-show-card-wrapper" ref="videoShowCardWrapperElemRef">
      <div class="wrapper">
        <div
          :style="{
            width: 'calc((86vw - 31px*4) / 4)',
            display: 'inline-block',
          }"
          v-for="(i, index) in videoTitles.length"
          :key="index"
        >
          <VideoShowCard
            :title="videoTitles[index]"
            :imgURL="imgURLs[index]"
            :tag="videoTags[index]"
            :score="videoScores[index]"
            is-row
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./bestMoviesInWeek.scss";
</style>
