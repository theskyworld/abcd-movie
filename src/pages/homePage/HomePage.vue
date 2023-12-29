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
import getHomePageData from "@/server/getHomePageData";
import LoadingWrapper from "@/components/base/loadingWrapper/LoadingWrapper.vue";

import { ref, onBeforeMount } from "vue";

const isLoading = ref(true);

const swiperDatas: any = ref({});
const bingeWatchDatas: any = ref({});
const hotPlayingDatas: any = ref({});
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
  bingeWatchDatas.value = datas.items[1];
  hotPlayingDatas.value = datas.items[2];
  bingeWeeklyDatas.value = datas.items[3];
  bestMoviesInMonthDatas.value = datas.items[4];
  bestMoviesInWeekDatas.value = datas.items[5];
  netflixHotDatas.value = datas.items[6];
  hotJanpaneseAndKoreanDatas.value = datas.items[7];
  hotEuropeanAndAmericanDatas.value = datas.items[8];
  hotHongKongAndTaiwanDatas.value = datas.items[9];
  hotTVSeriesDatas.value = datas.items[10];
  hotAnimeDatas.value = datas.items[11];
  hotVarietyDatas.value = datas.items[12];
  isLoading.value = false;
});
</script>

<template>
  <LoadingWrapper :flag="isLoading">
    <div class="home-page-container">
      <!-- 将以下内容传送至App.vue中指定的容器下 -->
      <Teleport to=".home-page-swiper-container">
        <div class="home-page-swiper-wrapper">
          <HomePageSwiper
            :img-list="swiperDatas.imgURLs"
            :video-titles="swiperDatas.videoTitles"
            :video-tags="swiperDatas.videoTags"
          />
        </div>
      </Teleport>
      <Teleport to=".video-shows-container">
        <div class="video-shows-wrapper">
          <BingeWatch
            :video-titles="bingeWatchDatas.videoTitles"
            :imgURLs="bingeWatchDatas.imgURLs"
            :video-tags="bingeWatchDatas.videoTags"
            :video-scores="bingeWatchDatas.videoScores"
          />
          <HotPlaying
            :video-titles="hotPlayingDatas.videoTitles"
            :imgURLs="hotPlayingDatas.imgURLs"
            :video-tags="hotPlayingDatas.videoTags"
            :video-scores="hotPlayingDatas.videoScores"
          />
          <BingeWeekly
            :video-titles="bingeWeeklyDatas.videoTitles"
            :imgURLs="bingeWeeklyDatas.imgURLs"
            :video-tags="bingeWeeklyDatas.videoTags"
            :video-episodes="bingeWeeklyDatas.videoEpisodes"
            :video-scores="bingeWeeklyDatas.videoScores"
          />
          <BestMoviesInWeek
            :video-titles="bestMoviesInWeekDatas.videoTitles"
            :imgURLs="bestMoviesInWeekDatas.imgURLs"
            :video-tags="bestMoviesInWeekDatas.videoTags"
            :video-scores="bestMoviesInWeekDatas.videoScores"
          />
          <BestMoviesInMonth
            :video-titles="bestMoviesInMonthDatas.videoTitles"
            :imgURLs="bestMoviesInMonthDatas.imgURLs"
            :video-tags="bestMoviesInMonthDatas.videoTags"
            :video-scores="bestMoviesInMonthDatas.videoScores"
          />
          <NetflixHot
            :video-titles="netflixHotDatas.videoTitles"
            :imgURLs="netflixHotDatas.imgURLs"
            :video-episodes="netflixHotDatas.videoEpisodes"
            :video-scores="netflixHotDatas.videoScores"
          />
          <HotJanpaneseAndKorean
            :video-titles="hotJanpaneseAndKoreanDatas.videoTitles"
            :imgURLs="hotJanpaneseAndKoreanDatas.imgURLs"
            :video-episodes="hotJanpaneseAndKoreanDatas.videoEpisodes"
            :video-scores="hotJanpaneseAndKoreanDatas.videoScores"
          />
          <HotEuropeanAndAmerican
            :video-titles="hotEuropeanAndAmericanDatas.videoTitles"
            :imgURLs="hotEuropeanAndAmericanDatas.imgURLs"
            :video-episodes="hotEuropeanAndAmericanDatas.videoEpisodes"
            :video-scores="hotEuropeanAndAmericanDatas.videoScores"
          />
          <HotHongKongAndTaiwan
            :video-titles="hotHongKongAndTaiwanDatas.videoTitles"
            :imgURLs="hotHongKongAndTaiwanDatas.imgURLs"
            :video-episodes="hotHongKongAndTaiwanDatas.videoEpisodes"
            :video-scores="hotHongKongAndTaiwanDatas.videoScores"
          />
          <HotTVSeries
            :video-titles="hotTVSeriesDatas.videoTitles"
            :imgURLs="hotTVSeriesDatas.imgURLs"
            :video-episodes="hotTVSeriesDatas.videoEpisodes"
            :video-scores="hotTVSeriesDatas.videoScores"
          />
          <HotAnime
            :video-titles="hotAnimeDatas.videoTitles"
            :imgURLs="hotAnimeDatas.imgURLs"
            :video-episodes="hotAnimeDatas.videoEpisodes"
            :video-scores="hotAnimeDatas.videoScores"
          />
          <HotVariety
            :video-titles="hotVarietyDatas.videoTitles"
            :imgURLs="hotVarietyDatas.imgURLs"
            :video-episodes="hotVarietyDatas.videoEpisodes"
            :video-scores="hotVarietyDatas.videoScores"
          />
        </div>
      </Teleport>
    </div>
  </LoadingWrapper>
</template>

<style scoped lang="scss">
@use "./homePage.scss";
</style>
