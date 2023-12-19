<script setup lang="ts">
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
import Pagination from "@/components/base/pagination/Pagination.vue";
import getNetflixPageData from "@/server/getNetflixPageData.ts";
import { ref, onBeforeMount, Ref } from "vue";

const datas = ref([]);
const isLoading = ref(true);
onBeforeMount(async () => {
  datas.value = await getNetflixPageData(1);
  isLoading.value = false;
});

const loadingComName = ref("LoadingSkeleton");
</script>
<template>
  <div class="netflix-page-container">
    <div class="title-wrapper">
      <h2>Netflix美剧</h2>
      <div class="placeholder"></div>
    </div>
    <div class="content-wrapper">
      <div
        class="video-show-card-wrapper"
        v-loading:[loadingComName]="isLoading"
      >
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
        <Pagination
          :page-counts="30"
          @getTargetPageData="
            async (page: Ref<number>) => {
              datas = await getNetflixPageData(page.value);
            }
          "
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./netflixPage.scss";
</style>
