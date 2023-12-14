<script setup lang="ts">
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
import getMovieHomeData from "@/server/getMovieHomeData.ts";
import { ref, onBeforeMount } from "vue";

interface Data {
  videoTitles: string[];
  imgURLs: string[];
  videoTags?: string[];
  videoScores?: string[];
  videoEpisodes?: string[];
}

const homeDatas = ref<Data>();
const newDatas = ref<Data>();
const rankDatas = ref<Data>();
const updateDatas = ref<Data>();

onBeforeMount(async () => {
  const datas = await getMovieHomeData();
  homeDatas.value = datas[0];
  newDatas.value = datas[1];
  rankDatas.value = datas[2];
  updateDatas.value = datas[3];
});
</script>
<template>
  <div class="movie-home-container">
    <div class="home-wrapper">
      <VideoShowCard
        v-for="(i, index) in homeDatas?.videoTitles.length"
        :key="index"
        :title="homeDatas!.videoTitles[index]"
        :imgURL="homeDatas!.imgURLs[index]"
        :tag="homeDatas!.videoTags![index]"
        :score="homeDatas!.videoScores![index]"
        is-default
      />
    </div>
    <div class="new-wrapper">
      <h3>新片上线</h3>
      <div class="video-show-card-wrapper">
        <VideoShowCard
          v-for="(i, index) in newDatas?.videoTitles.length"
          :key="index"
          :title="newDatas!.videoTitles[index]"
          :imgURL="newDatas!.imgURLs[index]"
          :tag="newDatas!.videoTags![index]"
          :score="newDatas!.videoScores![index]"
          is-default
        />
      </div>
    </div>
    <div class="rank-wrapper">
      <h3>排行榜</h3>
      <div class="video-show-card-wrapper">
        <VideoShowCard
          v-for="(i, index) in rankDatas?.videoTitles.length"
          :key="index"
          :title="rankDatas!.videoTitles[index]"
          :imgURL="rankDatas!.imgURLs[index]"
          :tag="rankDatas!.videoTags![index]"
          is-default
        />
      </div>
    </div>
    <div class="update-wrapper">
      <h3>最近更新</h3>
      <div class="video-show-card-wrapper">
        <VideoShowCard
          v-for="(i, index) in updateDatas?.videoTitles.length"
          :key="index"
          :title="updateDatas!.videoTitles[index]"
          :imgURL="updateDatas!.imgURLs[index]"
          :tag="updateDatas!.videoTags![index]"
          is-default
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./movieHome.scss";
</style>
