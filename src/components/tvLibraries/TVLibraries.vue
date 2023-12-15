<script setup lang="ts">
import TVSelectors from "@/components/base/tvSelectors/TVSelectors.vue";
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
import { ref, watchEffect } from "vue";
import getTVLibrariesData from "@/server/getTVLibrariesData.ts";

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

watchEffect(async () => {
  datas.value = await getTVLibrariesData(page.value);
});
</script>
<template>
  <div class="tv-libraries-container">
    <div class="tv-selectors-wrapper">
      <TVSelectors @doChangeKws="changeKws" />
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
</template>
<style scoped lang="scss">
@use "./tvLibraries.scss";
</style>
