<script setup lang="ts">
import NavBar from "@/components/navBar/NavBar.vue";
import SideMenus from "@/components/base/sideMenus/SideMenus.vue";
import BingeWatch from "@/components/bingeWatch/BingeWatch.vue";
import BestMoviesInWeek from "@/components/bestMoviesInWeek/BestMoviesInWeek.vue";
import BestMoviesInMonth from "@/components/bestMoviesInMonth/BestMoviesInMonth.vue";
import NetflixHot from "@/components/netflixHot/NetflixHot.vue";
import HotPlaying from "@/components/hotPlaying/HotPlaying.vue";
import HomePageSwiper from "../../components/base/homePageSwiper/HomePageSwiper.vue";
import BingeWeekly from "@/components/bingeWeekly/BingeWeekly.vue";
import HotJanpaneseAndKorean from "@/components/hotJanpaneseAndKorean/HotJanpaneseAndKorean.vue";
import HotEuropeanAndAmerican from "@/components/hotEuropeanAndAmerican/HotEuropeanAndAmerican.vue";
import HotHongKongAndTaiwan from "@/components/hotHongKongAndTaiwan/HotHongKongAndTaiwan.vue";
import HotTVSeries from "@/components/hotTVSeries/HotTVSeries.vue";
import HotAnime from "@/components/hotAnime/HotAnime.vue";
import HotVariety from "@/components/hotVariety/HotVariety.vue";
import getHomePageData from "@/server/getHomePageData.ts";

import { ref, onMounted, onBeforeMount } from "vue";

const homeePageSwiperWrapperRef = ref();
const homePageContainerRef = ref();
const navBarWrapperRef = ref();

function intersectionObserverSwiper() {
  const intersectionObserver = new IntersectionObserver((entries) => {
    homePageContainerRef.value.onscroll = () => {
      // 如果swiper元素被滑动到了视口之外
      if (entries[0].intersectionRatio === 0) {
        // 将navbar的背景颜色进行添加
        navBarWrapperRef.value.style.backgroundColor = "#1A1C1F";
      }
      // 如果swiper元素被滑动重新进入了视口
      if (entries[0].intersectionRatio > 0) {
        // 将navbar的背景颜色去除
        navBarWrapperRef.value.style.backgroundColor = "";
      }
    };
  });

  intersectionObserver.observe(homeePageSwiperWrapperRef.value);
}

onMounted(() => {
  intersectionObserverSwiper();
});

const swiperDatas = ref({});
const bingeWeeklyDatas: any = ref({});
const bestMoviesInMonthDatas: any = ref({});
const bestMoviesInWeekDatas: any = ref({});
const netflixHotDatas: any = ref({});
const hotJanpaneseAndKoreanDatas: any = ref({});
const hotEuropeanAndAmericanDatas: any = ref({});
const hotHongKongAndTaiwanDatas: any = ref({});
const hotTVSeriesDatas: any = ref({});
const hotAnimeDatas: any = ref({});
const hotVarietyDatas: any = ref({});

onBeforeMount(async () => {
  const datas = await getHomePageData();
  swiperDatas.value = datas.items[0];
  bingeWeeklyDatas.value = datas.items[1];
  bestMoviesInMonthDatas.value = datas.items[2];
  bestMoviesInWeekDatas.value = datas.items[3];
  netflixHotDatas.value = datas.items[4];
  hotJanpaneseAndKoreanDatas.value = datas.items[5];
  hotEuropeanAndAmericanDatas.value = datas.items[6];
  hotHongKongAndTaiwanDatas.value = datas.items[7];
  hotTVSeriesDatas.value = datas.items[8];
  hotAnimeDatas.value = datas.items[9];
  hotVarietyDatas.value = datas.items[10];
});
</script>

<template>
  <div class="home-page-container" ref="homePageContainerRef">
    <div class="nav-bar-wrapper" ref="navBarWrapperRef">
      <NavBar />
    </div>
    <Teleport to="body">
      <div class="side-menus-wrapper">
        <SideMenus />
      </div>
    </Teleport>
    <div class="home-page-swiper-wrapper" ref="homeePageSwiperWrapperRef">
      <HomePageSwiper :img-list="(swiperDatas as any).imgURLs" />
    </div>
    <div class="video-shows-wrapper">
      <BingeWatch />
      <HotPlaying />
      <BingeWeekly
        :video-titles="bingeWeeklyDatas.videoTitles"
        :img-URLs="bingeWeeklyDatas.imgURLs"
        :video-tags="bingeWeeklyDatas.videoTags"
        :video-episodes="bingeWeeklyDatas.videoEpisodes"
        :video-scores="bingeWeeklyDatas.videoScores"
      />
      <BestMoviesInWeek
        :video-titles="bestMoviesInWeekDatas.videoTitles"
        :img-URLs="bestMoviesInWeekDatas.imgURLs"
        :video-tags="bestMoviesInWeekDatas.videoTags"
        :video-scores="bestMoviesInWeekDatas.videoScores"
      />
      <BestMoviesInMonth
        :video-titles="bestMoviesInMonthDatas.videoTitles"
        :img-URLs="bestMoviesInMonthDatas.imgURLs"
        :video-tags="bestMoviesInMonthDatas.videoTags"
        :video-scores="bestMoviesInMonthDatas.videoScores"
      />
      <NetflixHot
        :video-titles="netflixHotDatas.videoTitles"
        :img-URLs="netflixHotDatas.imgURLs"
        :video-episodes="netflixHotDatas.videoEpisodes"
        :video-scores="netflixHotDatas.videoScores"
      />
      <HotJanpaneseAndKorean
        :video-titles="hotJanpaneseAndKoreanDatas.videoTitles"
        :img-URLs="hotJanpaneseAndKoreanDatas.imgURLs"
        :video-episodes="hotJanpaneseAndKoreanDatas.videoEpisodes"
        :video-scores="hotJanpaneseAndKoreanDatas.videoScores"
      />
      <HotEuropeanAndAmerican
        :video-titles="hotEuropeanAndAmericanDatas.videoTitles"
        :img-URLs="hotEuropeanAndAmericanDatas.imgURLs"
        :video-episodes="hotEuropeanAndAmericanDatas.videoEpisodes"
        :video-scores="hotEuropeanAndAmericanDatas.videoScores"
      />
      <HotHongKongAndTaiwan
        :video-titles="hotHongKongAndTaiwanDatas.videoTitles"
        :img-URLs="hotHongKongAndTaiwanDatas.imgURLs"
        :video-episodes="hotHongKongAndTaiwanDatas.videoEpisodes"
        :video-scores="hotHongKongAndTaiwanDatas.videoScores"
      />
      <HotTVSeries />
      <HotAnime />
      <HotVariety />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "./homePage.scss";
</style>
