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

import { ref, onMounted } from "vue";

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
      <HomePageSwiper />
    </div>
    <div class="video-shows-wrapper">
      <BingeWatch />
      <HotPlaying />
      <BingeWeekly />
      <BestMoviesInWeek />
      <BestMoviesInMonth />
      <NetflixHot />
      <HotJanpaneseAndKorean />
      <HotEuropeanAndAmerican />
      <HotHongKongAndTaiwan />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "./homePage.scss";
</style>
