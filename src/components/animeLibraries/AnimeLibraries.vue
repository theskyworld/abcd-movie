<script setup lang="ts">
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
import { ref, onBeforeMount, watchEffect } from "vue";
import getAnimeLibrariesData from "@/server/getAnimeLibrariesData.ts";
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
  datas.value = await getAnimeLibrariesData(page.value, kws.value);
});

// 用于计算年份中的最大值
const thisYear = new Date().getFullYear();
const animeSelectors = ref<Array<VideoSelectorData>>([
  // 剧情
  {
    title: "剧情",
    content: [
      {
        key: "1",
        name: "全部",
      },
      {
        key: "2",
        name: "Netflix",
      },
      {
        key: "3",
        name: "热血",
      },
      {
        key: "4",
        name: "科幻",
      },
      {
        key: "5",
        name: "美少女",
      },
      {
        key: "6",
        name: "魔幻",
      },
      {
        key: "7",
        name: "经典",
      },
      {
        key: "8",
        name: "励志",
      },
      {
        key: "9",
        name: "少儿",
      },
      {
        key: "10",
        name: "冒险",
      },
      {
        key: "11",
        name: "搞笑",
      },
      {
        key: "12",
        name: "推理",
      },
      {
        key: "13",
        name: "恋爱",
      },
      {
        key: "14",
        name: "治愈",
      },
      {
        key: "15",
        name: "幻想",
      },
      {
        key: "16",
        name: "校园",
      },
      {
        key: "17",
        name: "动物",
      },
      {
        key: "18",
        name: "亲子",
      },
      {
        key: "19",
        name: "机战",
      },
      {
        key: "20",
        name: "儿歌",
      },
    ],
  },
  // 地区
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
        name: "日本",
      },
      {
        key: "4",
        name: "欧美",
      },
      {
        key: "5",
        name: "其它",
      },
    ],
  },
  // 语言
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
  // 年份
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
  // 排序
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
  <div class="anime-libraries-container">
    <div class="anime-selectors-wrapper">
      <VideoSelector
        @doChangeKws="changeKws"
        :videoSelectors="animeSelectors"
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
</template>
<style scoped lang="scss">
@use "./animeLibraries.scss";
</style>
