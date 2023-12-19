<script setup lang="ts">
import VarietySelectors from "@/components/base/varietySelectors/VarietySelectors.vue";
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
import { ref, onBeforeMount, watchEffect } from "vue";
import getVarietyLibrariesData from "@/server/getVarietyLibrariesData.ts";
import { VideoSelectorData } from "@/components/base/videoSelector/types";
import VideoSelector from "@/components/base/videoSelectors/VideoSelectors.vue";

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
  datas.value = await getVarietyLibrariesData(page.value, kws.value);
});

const thisYear = new Date().getFullYear();
const varietySelectors = ref<Array<VideoSelectorData>>([
  {
    title: "剧情",
    content: [
      {
        key: "1",
        name: "全部",
      },
      {
        key: "2",
        name: "YouTube",
      },
      {
        key: "3",
        name: "脱口秀",
      },
      {
        key: "4",
        name: "真人秀",
      },
      {
        key: "5",
        name: "选秀",
      },
      {
        key: "6",
        name: "八卦",
      },
      {
        key: "7",
        name: "访谈",
      },
      {
        key: "8",
        name: "情感",
      },
      {
        key: "9",
        name: "生活",
      },
      {
        key: "10",
        name: "晚会",
      },
      {
        key: "11",
        name: "搞笑",
      },
      {
        key: "12",
        name: "音乐",
      },
      {
        key: "13",
        name: "时尚",
      },
      {
        key: "14",
        name: "游戏",
      },
      {
        key: "15",
        name: "少儿",
      },
      {
        key: "16",
        name: "体育",
      },
      {
        key: "17",
        name: "纪实",
      },
      {
        key: "18",
        name: "科教",
      },
      {
        key: "19",
        name: "曲艺",
      },
      {
        key: "20",
        name: "歌舞",
      },
      {
        key: "21",
        name: "财经",
      },
      {
        key: "22",
        name: "汽车",
      },
      {
        key: "23",
        name: "其它",
      },
    ],
  },
  {
    title: "地区",
    content: [
      {
        key: "1",
        name: "全部",
      },
      {
        key: "2",
        name: "大陆",
      },
      {
        key: "3",
        name: "韩国",
      },
      {
        key: "4",
        name: "香港",
      },
      {
        key: "5",
        name: "其它",
      },
    ],
  },
  {
    title: "语言",
    content: [
      {
        key: "1",
        name: "全部",
      },
      {
        key: "2",
        name: "国语",
      },
      {
        key: "3",
        name: "英语",
      },
      {
        key: "4",
        name: "粤语",
      },
      {
        key: "5",
        name: "闽南语",
      },
      {
        key: "6",
        name: "日语",
      },
      {
        key: "7",
        name: "韩语",
      },
      {
        key: "8",
        name: "其它",
      },
    ],
  },
  {
    title: "年份",
    content: [
      {
        key: "1",
        name: "全部",
      },
      {
        key: "2",
        name: `${thisYear}`,
      },
      {
        key: "3",
        name: `${thisYear - 1}`,
      },
      {
        key: "4",
        name: `${thisYear - 2}`,
      },
      {
        key: "5",
        name: `${thisYear - 3}`,
      },
      {
        key: "6",
        name: `${thisYear - 4}`,
      },
      {
        key: "7",
        name: `${thisYear - 5}`,
      },
      {
        key: "8",
        name: `${thisYear - 6}`,
      },
      {
        key: "9",
        name: `${thisYear - 7}`,
      },
      {
        key: "10",
        name: `${thisYear - 8}`,
      },
      {
        key: "11",
        name: `${thisYear - 9}`,
      },
      {
        key: "12",
        name: `${thisYear - 10}`,
      },
      {
        key: "13",
        name: `${thisYear - 11}`,
      },
      {
        key: "14",
        name: `${thisYear - 12}`,
      },
      {
        key: "15",
        name: `${thisYear - 13}`,
      },
      {
        key: "16",
        name: `${thisYear - 14}`,
      },
      {
        key: "17",
        name: `${thisYear - 15}`,
      },
    ],
  },
  {
    title: "排序",
    content: [
      {
        key: "1",
        name: "时间排序",
      },
      {
        key: "2",
        name: "人气排序",
      },
      {
        key: "3",
        name: "评分排序",
      },
    ],
  },
]);
</script>
<template>
  <div class="variety-libraries-container">
    <div class="variety-selectors-wrapper">
      <VideoSelector
        @doChangeKws="changeKws"
        :videoSelectors="varietySelectors"
      />
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
