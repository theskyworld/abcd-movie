<script setup lang="ts">
import { ref } from "vue";
import PageLibraries from "@/components/pageLibraries/PageLibraries.vue";
import PageHome from "../../components/pageHome/PageHome.vue";
const activedTitle = ref("电视剧首页");
</script>
<template>
  <div class="tv-page-container">
    <div class="title-wrapper">
      <h2
        :class="{ active: activedTitle === '电视剧首页' }"
        @click="activedTitle = '电视剧首页'"
      >
        电视剧首页
      </h2>
      <!-- 分割线 -->
      <div class="separator"></div>
      <h2
        :class="{ active: activedTitle === '电视剧库' }"
        @click="activedTitle = '电视剧库'"
      >
        电视剧库
      </h2>
    </div>
    <div class="content-wrapper">
      <PageHome
        getDatasFnName="getTVHomeData"
        :episode="true"
        v-if="activedTitle === '电视剧首页'"
      />
      <PageLibraries v-else :tv="true" getDatasFnName="getTVLibrariesData" />
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./tvPage.scss";
</style>
