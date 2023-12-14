<script setup lang="ts">
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
import Pagination from "@/components/base/pagination/Pagination.vue";
import getNetflixPageData from "@/server/getNetflixPageData.ts";
import { ref, onBeforeMount } from "vue";

const datas = ref([]);
onBeforeMount(async () => {
  datas.value = await getNetflixPageData();
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
        :episode="datas.videoEpisodes[index]"
        :score="datas.videoScores[index]"
        is-default
      />
    </div>
    <div class="pagination-wrapper">
      <Pagination />
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./netflixPage.scss";
</style>
