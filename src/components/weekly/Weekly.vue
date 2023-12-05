<script setup lang="ts">
import { ref } from "vue";
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
const datas = ref([{}, {}, {}, {}, {}]);
const weeks = ref(["周日", "周一", "周二", "周三", "周四", "周五", "周六"]);
</script>
<template>
  <div class="weekly-container">
    <div class="header-wrapper">
      <div class="title-wrapper">
        <h3 class="title">追剧周表</h3>
      </div>
      <div class="weeks-wrapper">
        <ul>
          <li v-for="(week, index) in weeks" :key="index">{{ week }}</li>
        </ul>
      </div>
    </div>
    <div class="video-show-card-wrapper">
      <VideoShowCard v-for="(video, index) in datas" :key="index" />
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./weekly.scss";
</style>
