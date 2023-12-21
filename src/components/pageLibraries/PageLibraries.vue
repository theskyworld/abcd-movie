<script setup lang="ts">
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
import { ref, watchEffect } from "vue";
import VideoSelectors from "@/components/base/videoSelectors/VideoSelectors.vue";
import TVSelectors from "@/components/base/tvSelectors/TVSelectors.vue";
import { PageLibrariesProps } from "./types";
import Loading from "@/components/base/loading/Loading.vue";

const { videoSelectorsData, getDatasFnName, tv } =
  defineProps<PageLibrariesProps>();

const isLoading = ref(true);

const page = ref(1);
const kws = ref([
  "undefined",
  "undefined",
  "undefined",
  "undefined",
  "undefined",
]);
const datas = ref<any>([]);

function changeKws(newKws: Array<any>) {
  kws.value = newKws;
}
// 根据父组件中传入的请求后端数据方法的方法名来动态加载对应的方法，请求数据
// import()中不理解'@'
const fn = () => import(`../../server/${getDatasFnName}.ts`);

watchEffect(async () => {
  const getDatasFn = (await fn()).default;

  // 获取总的数据
  datas.value = await getDatasFn(page.value, kws.value);

  if (isLoading.value) {
    isLoading.value = false;
  }
});

// Unhandled error during execution of render function
</script>
<template>
  <div v-if="!isLoading" class="page-libraries-container">
    <div class="video-selectors-wrapper">
      <TVSelectors v-if="tv" />
      <VideoSelectors
        v-else
        @doChangeKws="changeKws"
        :videoSelectors="videoSelectorsData"
      />
    </div>
    <div class="video-show-card-wrapper">
      <VideoShowCard
        v-for="(i, index) in datas[0].length"
        :key="index"
        :title="datas[0][index]"
        :imgURL="datas[1][index]"
        :score="datas[2][index]"
        :episode="datas[3][index]"
        is-default
      />
    </div>
  </div>
  <Loading v-else class="loading-container" />
</template>
<style scoped lang="scss">
@use "./pageLibraries.scss";
</style>
