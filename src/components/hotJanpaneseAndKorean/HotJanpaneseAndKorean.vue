<script setup lang="ts">
import { ref } from "vue";
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";

const datas = ref([{}, {}, {}, {}, {}]);
</script>
<template>
  <div class="hot-janpanese-and-korean-container">
    <div class="header-wrapper">
      <div class="title-wrapper">
        <h3 class="title">热播日韩剧</h3>
      </div>
      <div class="more-wrapper">
        <button>更多</button>
      </div>
    </div>
    <div class="video-show-card-wrapper">
      <VideoShowCard v-for="(video, index) in datas" :key="index" />
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./hotJanpaneseAndKorean.scss";
</style>
