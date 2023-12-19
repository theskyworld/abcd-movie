<script setup lang="ts">
import VarietyLibraries from "@/components/varietyLibraries/VarietyLibraries.vue";
import { ref } from "vue";
import PageHome from "../../components/pageHome/PageHome.vue";
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
      <PageHome
        getDatasFnName="getVarietyHomeData"
        :episode="true"
        v-if="activedTitle === '综艺首页'"
      />
      <VarietyLibraries v-else />
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./varietyPage.scss";
</style>
