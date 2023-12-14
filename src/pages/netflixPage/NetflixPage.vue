<script setup lang="ts">
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
import { ref } from "vue";

const datas = ref({
  videoTitles: [
    "93国际列车大劫案莫斯科行动",
    "志愿军雄兵出击",
    "前任4英年早婚",
    "热烈",
    "名侦探柯南黑铁的鱼影",
    "孤注一掷",
    "涉过愤怒的海",
    "惊奇队长2",
  ],
  imgURLs: [
    "https://647bc185.szrtcpa.com/2023/12/02/3c9a02fddf621.jpg",
    "https://647bc185.szrtcpa.com/2023/07/06/bb25a7edadf35.jpg",
    "https://647bc185.szrtcpa.com/2023/09/30/213c7a50b2c37.jpg",
    "https://647bc185.szrtcpa.com/2023/08/15/c0040cfe56d93.jpg",
    "https://647bc185.szrtcpa.com/2023/12/07/8149133bfeaa7.jpg",
    "https://647bc185.szrtcpa.com/2023/07/06/8987669375eae.jpg",
    "https://647bc185.szrtcpa.com/2023/12/12/efb4ac290203d.jpg",
    "https://647bc185.szrtcpa.com/2023/11/10/c10389782fc5e.jpg",
  ],
  videoTags: [
    "1080P",
    "更新至1080P",
    "更新至1080P",
    "更新至2160P",
    "更新至1080P",
    "清晰版",
    "TC抢先版",
    "更新至1080P",
  ],
  videoScores: [
    "豆瓣:6.6分",
    "豆瓣:1.5分",
    "豆瓣:6.8分",
    "豆瓣:7.2分",
    "豆瓣:6.6分",
    "豆瓣:6.9分",
    "豆瓣:7.6分",
    "豆瓣:2.1分",
  ],
});
</script>
<template>
  <div class="netflix-page-container">
    <div class="title-wrapper">
      <h2>Netflix美剧</h2>
      <div class="placeholder"></div>
    </div>
    <div class="video-show-card-wrapper">
      <VideoShowCard
        v-for="(i, index) in datas.videoTitles"
        :key="index"
        :title="datas.videoTitles[index]"
        :imgURL="datas.imgURLs[index]"
        :tag="datas.videoTags[index]"
        :score="datas.videoScores[index]"
        is-default
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./netflixPage.scss";
</style>
