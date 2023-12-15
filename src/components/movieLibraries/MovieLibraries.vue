<script setup lang="ts">
import MovieSelectors from "@/components/base/movieSelectors/MovieSelectors.vue";
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
import { ref, onBeforeMount, watchEffect } from "vue";
import getMovieLibrariesData from "@/server/getMovieLibrariesData.ts";

const page = ref(1);
const kws = ref([
  "undefined",
  "undefined",
  "undefined",
  "undefined",
  "undefined",
]);
const datas = ref<any>([]);

function changeKws(newKws: Array<any>) {
  kws.value = newKws;
}

watchEffect(async () => {
  datas.value = await getMovieLibrariesData(page.value, kws.value);
});
</script>
<template>
  <div class="movie-libraries-container">
    <div class="movie-selectors-wrapper">
      <MovieSelectors @doChangeKws="changeKws" />
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
