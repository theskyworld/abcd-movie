<script setup lang="ts">
import VarietyHome from "@/components/varietyHome/VarietyHome.vue";
import { ref } from "vue";
const activedTitle = ref("综艺首页");
</script>
<template>
  <div class="variety-page-container">
    <div class="title-wrapper">
      <h2
        :class="{ active: activedTitle === '综艺首页' }"
        @click="activedTitle = '综艺首页'"
      >
        综艺首页
      </h2>
      <!-- 分割线 -->
      <div class="separator"></div>
      <h2
        :class="{ active: activedTitle === '综艺库' }"
        @click="activedTitle = '综艺库'"
      >
        综艺库
      </h2>
    </div>
    <div class="content-wrapper">
      <VarietyHome v-if="activedTitle === '综艺首页'" />
      <!-- <MovieLibraries v-else /> -->
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./varietyPage.scss";
</style>
