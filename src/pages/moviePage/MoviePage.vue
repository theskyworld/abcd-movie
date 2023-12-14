<script setup lang="ts">
import { ref } from "vue";

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
  </div>
</template>
<style scoped lang="scss">
@use "./moviePage.scss";
</style>
