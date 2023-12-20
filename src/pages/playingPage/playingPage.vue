<script setup lang="ts">
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
import { storeToRefs } from "pinia";
import useMainStore from "@/store";
import { playM3u8 } from "@/assets/ts/m3u8Parser.ts";
import { ref, onMounted, computed, watchEffect, watch } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

const videoElem = ref();
const mainStore = useMainStore();
const curURLIndex = ref(1);

const { playingKeyword, videoURL, routes } = storeToRefs(mainStore);

watch(curURLIndex, async () => {
  await mainStore.getPlayingSearchResData(true, curURLIndex.value - 1);
});

watchEffect(async () => {
  playM3u8(videoURL.value.url, videoElem.value);
});
</script>
<template>
  <div class="playing-page-container">
    <div class="top-content-wrapper">
      <div class="video-wrapper">
        <video ref="videoElem" class="videoElem" controls></video>
      </div>
      <div class="video-infos-wrapper">
        <div class="video-title-wrapper">
          <h3>{{ playingKeyword }}</h3>
        </div>
        <div class="video-labels-wrapper">
          <span>2023</span>
          <span>欧美</span>
          <span>剧情/动作</span>
        </div>
        <div class="video-url-routes-wrapper">
          <h4 class="title">选集播放</h4>
          <div class="routes">
            <!-- 写一个多选按钮，每个选项为线路的值 -->
            <select v-model="curURLIndex" name="urlRoutes" id="pet-select">
              <option v-for="(i, index) in routes" :key="index" :value="i">
                <p>线路{{ i }}</p>
              </option>
            </select>
          </div>
        </div>
        <div class="video-episodes-wrapper">
          <span>第01集</span>
          <span>第02集</span>
          <span>第03集</span>
        </div>
      </div>
    </div>
    <div class="bottom-content-wrapper">
      <div class="title-wrapper">
        <h4>相关推荐</h4>
      </div>
      <div class="video-show-card-wrapper">
        <VideoShowCard />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "./playingPage.scss";
</style>
