<script setup lang="ts">
import NavBar from "@/components/navBar/NavBar.vue";
import SideMenus from "@/components/base/sideMenus/SideMenus.vue";
import BingeWatch from "@/components/bingeWatch/BingeWatch.vue";
import BestMoviesInWeek from "@/components/bestMoviesInWeek/BestMoviesInWeek.vue";
import BestMoviesInMonth from "@/components/bestMoviesInMonth/BestMoviesInMonth.vue";
import NetflixHot from "@/components/netflixHot/NetflixHot.vue";
import HomePageSwiper from "../../components/base/homePageSwiper/HomePageSwiper.vue";
</script>

<template>
  <div class="home-page-container">
    <div class="nav-bar-wrapper">
      <NavBar />
    </div>
    <Teleport to="body">
      <div class="side-menus-wrapper">
        <SideMenus />
      </div>
    </Teleport>
    <div class="home-page-swiper-wrapper">
      <HomePageSwiper />
    </div>
    <div class="video-shows-wrapper">
      <BingeWatch />
      <BestMoviesInWeek />
      <BestMoviesInMonth />
      <NetflixHot />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "./homePage.scss";
</style>
