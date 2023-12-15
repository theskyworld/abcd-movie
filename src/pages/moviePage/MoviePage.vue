<script setup lang="ts">
import { ref } from "vue";
import MovieHome from "@/components/movieHome/MovieHome.vue";
import MovieLibraries from "@/components/movieLibraries/MovieLibraries.vue";
const activedTitle = ref("电影首页");
</script>
<template>
  <div class="movie-page-container">
    <div class="title-wrapper">
      <h2
        :class="{ active: activedTitle === '电影首页' }"
        @click="activedTitle = '电影首页'"
      >
        电影首页
      </h2>
      <!-- 分割线 -->
      <div class="separator"></div>
      <h2
        :class="{ active: activedTitle === '电影库' }"
        @click="activedTitle = '电影库'"
      >
        电影库
      </h2>
    </div>
    <div class="content-wrapper">
      <MovieHome v-if="activedTitle === '电影首页'" />
      <!-- 使用骨架屏 -->
      <!-- <Suspense>
        <template #default>
          <MovieHome v-if="activedTitle === '电影首页'" />
        </template>
        <template #fallback>
          <MovieHomeSkeleton />
        </template>
      </Suspense> -->
      <MovieLibraries v-else />
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./moviePage.scss";
</style>
