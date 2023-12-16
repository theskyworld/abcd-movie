<script setup lang="ts">
import VarietySelectors from "@/components/base/varietySelectors/VarietySelectors.vue";
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
import { ref, onBeforeMount, watchEffect } from "vue";
import getAnimeLibrariesData from "@/server/getAnimeLibrariesData.ts";

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
  datas.value = await getAnimeLibrariesData(page.value, kws.value);
});
</script>
<template>
  <div class="variety-libraries-container">
    <div class="variety-selectors-wrapper">
      <VarietySelectors @doChangeKws="changeKws" />
    </div>
    <div class="video-show-card-wrapper">
      <VideoShowCard
        v-for="(i, index) in datas[0].length"
        :key="index"
        :title="datas[0][index]"
        :imgURL="datas[1][index]"
        :score="datas[2][index]"
        :tag="datas[3][index]"
        is-default
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./varietyLibraries.scss";
</style>
