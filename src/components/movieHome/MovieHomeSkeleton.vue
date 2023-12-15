<script setup>
import { ref } from "vue";
import AnimatedPlaceholder from "@/components/base/AnimatedPlaceholder.vue";

const curRank = ref("日榜");
</script>
<template>
  <div class="movie-home-container">
    <div class="home-wrapper">
      <div class="video-show-card-wrapper">
        <div class="video-show-card" v-for="i in 12" :key="i">
          <AnimatedPlaceholder
            class="img"
            height="260px"
            width="180px"
            borderRadius="10px"
          />
          <AnimatedPlaceholder height="15px" width="100px" borderRadius="3px" />
        </div>
      </div>
    </div>
    <div class="new-wrapper">
      <h3>新片上线</h3>
      <div class="video-show-card-wrapper">
        <div class="video-show-card" v-for="i in 12" :key="i">
          <AnimatedPlaceholder
            class="img"
            height="260px"
            width="180px"
            borderRadius="10px"
          />
          <AnimatedPlaceholder height="15px" width="100px" borderRadius="3px" />
        </div>
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
        <div class="video-show-card" v-for="i in 12" :key="i">
          <AnimatedPlaceholder
            class="img"
            height="260px"
            width="180px"
            borderRadius="10px"
          />
          <AnimatedPlaceholder height="15px" width="100px" borderRadius="3px" />
        </div>
      </div>
    </div>
    <div class="update-wrapper">
      <h3>最近更新</h3>
      <div class="video-show-card-wrapper">
        <div class="video-show-card" v-for="i in 12" :key="i">
          <AnimatedPlaceholder
            class="img"
            height="260px"
            width="180px"
            borderRadius="10px"
          />
          <AnimatedPlaceholder height="15px" width="100px" borderRadius="3px" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./movieHomeSkeleton.scss";
</style>
