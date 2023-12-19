<script setup lang="ts">
import { ref } from "vue";
import AnimeLibraries from "@/components/animeLibraries/AnimeLibraries.vue";
import PageHome from "@/components/pageHome/PageHome.vue";
const activedTitle = ref("动漫首页");
</script>
<template>
  <div class="anime-page-container">
    <div class="title-wrapper">
      <h2
        :class="{ active: activedTitle === '动漫首页' }"
        @click="activedTitle = '动漫首页'"
      >
        动漫首页
      </h2>
      <!-- 分割线 -->
      <div class="separator"></div>
      <h2
        :class="{ active: activedTitle === '动漫库' }"
        @click="activedTitle = '动漫库'"
      >
        动漫库
      </h2>
    </div>
    <div class="content-wrapper">
      <PageHome
        getDatasFnName="getAnimeHomeData"
        :episode="true"
        v-if="activedTitle === '动漫首页'"
      />
      <AnimeLibraries v-else />
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./animePage.scss";
</style>
