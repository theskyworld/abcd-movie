<script setup lang="ts">
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
import { ref, onBeforeMount, watch, computed } from "vue";
import useMainStore from "@/store";
import { storeToRefs } from "pinia";

const mainStore = useMainStore();
const { keyword, serarchResDatas } = storeToRefs(mainStore);
const datas = computed(() => serarchResDatas?.value.curPageData);
</script>

<template>
  <div class="search-res-page-container">
    <div class="header-wrapper">
      <p>搜索</p>
      <p class="keyword">"{{ keyword }}"</p>
      <p>,为你找到以下结果:</p>
    </div>
    <div class="seperate-line"></div>
    <div class="video-show-card-wrapper">
      <VideoShowCard
        v-for="(i, index) in datas.length"
        :key="index"
        :title="datas[index].title"
        :imgURL="datas[index].videoURL.pic"
        :type="datas[index].type"
        is-default
      />
    </div>
    <!-- <span v-else>没有找到</span> -->
  </div>
</template>
<style scoped lang="scss">
@use "./searchResPage.scss";
</style>
