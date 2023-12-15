<script setup lang="ts">
import MovieSelectors from "@/components/base/movieSelectors/MovieSelectors.vue";
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
import { ref, onBeforeMount } from "vue";
import getMovieLibrariesData from "@/server/getMovieLibrariesData.ts";

const page = ref(1);
const datas = ref([]);
onBeforeMount(async () => {
  datas.value = await getMovieLibrariesData(page.value);
});
</script>
<template>
  <div class="movie-libraries-container">
    <div class="movie-selectors-wrapper">
      <MovieSelectors />
    </div>
    <div class="video-show-card-wrapper">
      <VideoShowCard
        v-for="(i, index) in datas[0].length"
        :key="index"
        :title="datas[0][index]"
        :imgURL="datas[1][index]"
        :score="datas[2][index]"
        :tag="datas[3][index]"
        is-default
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./movieLibraries.scss";
</style>
