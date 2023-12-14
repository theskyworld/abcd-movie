<script setup lang="ts">
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
import { ref } from "vue";
const homeDatas = ref([
  {
    title: "",
    imgURL: "",
    tag: "",
    score: "",
  },
  {
    title: "",
    imgURL: "",
    tag: "",
    score: "",
  },
  {
    title: "",
    imgURL: "",
    tag: "",
    score: "",
  },
  {
    title: "",
    imgURL: "",
    tag: "",
    score: "",
  },
  {
    title: "",
    imgURL: "",
    tag: "",
    score: "",
  },
  {
    title: "",
    imgURL: "",
    tag: "",
    score: "",
  },
]);
</script>
<template>
  <div class="movie-home-container">
    <div class="home-wrapper">
      <VideoShowCard
        v-for="(i, index) in homeDatas"
        :key="index"
        :title="homeDatas[index].title"
        :imgURL="homeDatas[index].imgURL"
        :tag="homeDatas[index].tag"
        :score="homeDatas[index].score"
        is-default
      />
    </div>
    <div class="new-wrapper">
      <h3>新片上线</h3>
      <div class="video-show-card-wrapper">
        <VideoShowCard
          v-for="(i, index) in homeDatas"
          :key="index"
          :title="homeDatas[index].title"
          :imgURL="homeDatas[index].imgURL"
          :tag="homeDatas[index].tag"
          :score="homeDatas[index].score"
          is-default
        />
      </div>
    </div>
    <div class="rank-wrapper">
      <h3>排行榜</h3>
      <div class="video-show-card-wrapper">
        <VideoShowCard
          v-for="(i, index) in homeDatas"
          :key="index"
          :title="homeDatas[index].title"
          :imgURL="homeDatas[index].imgURL"
          :tag="homeDatas[index].tag"
          :score="homeDatas[index].score"
          is-default
        />
      </div>
    </div>
    <div class="update-wrapper">
      <h3>最近更新</h3>
      <div class="video-show-card-wrapper">
        <VideoShowCard
          v-for="(i, index) in homeDatas"
          :key="index"
          :title="homeDatas[index].title"
          :imgURL="homeDatas[index].imgURL"
          :tag="homeDatas[index].tag"
          :score="homeDatas[index].score"
          is-default
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./movieHome.scss";
</style>
