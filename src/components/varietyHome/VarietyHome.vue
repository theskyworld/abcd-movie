<script setup lang="ts">
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
import getVarietyHomeData from "@/server/getVarietyHomeData.ts";
import { ref, onBeforeMount, computed, reactive } from "vue";

interface Data {
  videoTitles: string[];
  imgURLs: string[];
  videoEpisodes?: string[];
  videoScores?: string[];
  videoTags?: string[];
}

const homeDatas = ref<Data>();
const newDatas = ref<Data>();
const rankDatas = ref<Data>();
const updateDatas = ref<Data>();
const dayRankDatas = ref<Data>();
const weekRankDatas = ref<Data>();
const monthRankDatas = ref<Data>();
const curRank = ref("日榜");

const curRankDatas = computed(() => {
  switch (curRank.value) {
    case "日榜":
      return dayRankDatas.value;
    case "周榜":
      return weekRankDatas.value;
    case "月榜":
      return monthRankDatas.value;
    default:
      return dayRankDatas.value;
  }
});

const isLoading = ref(true);

// 需要存在顶级await时才可以使用Suspense组件来实现骨架屏的加载，且不能在v-if或者v-show时使用
onBeforeMount(async () => {
  const datas = await getVarietyHomeData();
  homeDatas.value = datas[0];
  newDatas.value = datas[1];
  rankDatas.value = datas[2];
  dayRankDatas.value = {
    videoTitles: rankDatas.value!.videoTitles.slice(0, 12),
    imgURLs: rankDatas.value!.imgURLs.slice(0, 12),
    videoEpisodes: rankDatas.value?.videoEpisodes!.slice(0, 12),
  };
  weekRankDatas.value = {
    videoTitles: rankDatas.value!.videoTitles.slice(12, 24),
    imgURLs: rankDatas.value!.imgURLs.slice(12, 24),
    videoEpisodes: rankDatas.value?.videoEpisodes!.slice(12, 24),
  };
  monthRankDatas.value = {
    videoTitles: rankDatas.value!.videoTitles.slice(24, 36),
    imgURLs: rankDatas.value!.imgURLs.slice(24, 36),
    videoEpisodes: rankDatas.value?.videoEpisodes!.slice(24, 36),
  };
  updateDatas.value = datas[3];
  isLoading.value = false;
});
</script>
<template>
  <div class="variety-home-container">
    <div class="home-wrapper" v-loading="isLoading">
      <VideoShowCard
        v-for="(i, index) in homeDatas?.videoTitles.length"
        :key="index"
        :title="homeDatas!.videoTitles[index]"
        :imgURL="homeDatas!.imgURLs[index]"
        :episode="homeDatas!.videoEpisodes![index]"
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
          :episode="newDatas!.videoEpisodes![index]"
          :score="newDatas!.videoScores![index]"
          is-default
        />
      </div>
    </div>
    <div class="rank-wrapper">
      <div class="title-wrapper">
        <h3>排行榜</h3>
        <div class="ranks-select-wrapper">
          <span
            :class="{ curRank: curRank === '日榜' }"
            @click="curRank = '日榜'"
            >日榜</span
          >
          <span
            :class="{ curRank: curRank === '周榜' }"
            @click="curRank = '周榜'"
            >周榜</span
          >
          <span
            :class="{ curRank: curRank === '月榜' }"
            @click="curRank = '月榜'"
            >月榜</span
          >
        </div>
      </div>
      <div class="video-show-card-wrapper">
        <VideoShowCard
          v-for="(i, index) in curRankDatas?.videoTitles.length"
          :key="index"
          :title="curRankDatas!.videoTitles[index]"
          :imgURL="curRankDatas!.imgURLs[index]"
          :episode="curRankDatas!.videoEpisodes![index]"
          :rank="index + 1"
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
          :episode="updateDatas!.videoEpisodes![index]"
          is-default
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./varietyHome.scss";
</style>
