<script setup lang="ts">
import { ref } from "vue";
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
import { NetflixHotProps } from "./types";

const { videoTitles, imgURLs, videoEpisodes, videoScores } =
  defineProps<NetflixHotProps>();

const videoShowCardWrapperElemRef = ref();
const curCardsIndex = ref(1);
const allCardsIndex = ref(Math.ceil(videoTitles.length / 4));

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
  <div class="netflix-hot-container">
    <div class="header-wrapper">
      <div class="title-wrapper">
        <h3 class="title">Netflix奈飞热播剧</h3>
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
          v-for="(i, index) in videoTitles.length"
          :key="index"
          :style="{
            width: 'calc((86vw - 31px*4) / 4)',
            display: 'inline-block',
          }"
        >
          <VideoShowCard
            :title="videoTitles[index]"
            :imgURL="imgURLs[index]"
            :score="videoScores[index]"
            :episode="videoEpisodes[index]"
            is-row
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./netflixHot.scss";
</style>
