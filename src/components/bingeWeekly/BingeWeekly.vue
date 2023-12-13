<script setup>
import { ref } from "vue";
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";

const datas = ref([{}, {}, {}, {}, {}]);
const weeks = [
  { date: "周一" },
  { date: "周二" },
  { date: "周三" },
  { date: "周四" },
  { date: "周五" },
  { date: "周六" },
  { date: "周日" },
];

const curDay = ref(new Date().getDay());
</script>

<template>
  <div class="binge-weekly-container">
    <div class="header-wrapper">
      <div class="title-wrapper">
        <h3 class="title">追剧周表</h3>
      </div>
      <div class="weeks-wrapper">
        <ul>
          <li
            :class="{ curDay: index + 1 === curDay }"
            v-for="(week, index) in weeks"
            :key="index"
          >
            <span>{{ week.date }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="video-show-card-wrapper">
      <VideoShowCard v-for="(video, index) in datas" :key="index" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "./bingeWeekly.scss";
</style>
