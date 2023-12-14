<script setup lang="ts">
import NavBar from "@/components/navBar/NavBar.vue";
import SideMenus from "@/components/base/sideMenus/SideMenus.vue";
import { ref, onMounted } from "vue";
import NetflixPage from "./pages/netflixPage/NetflixPage.vue";
import Pagination from "@/components/base/pagination/Pagination.vue";

const homePageSwiperContainerRef = ref();
const fromHomePageRef = ref();
const navBarWrapperRef = ref();

function intersectionObserverSwiper() {
  const intersectionObserver = new IntersectionObserver((entries) => {
    fromHomePageRef.value.onscroll = () => {
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

  intersectionObserver.observe(homePageSwiperContainerRef.value);
}

onMounted(() => {
  intersectionObserverSwiper();
});
</script>

<template>
  <router-link to="/" />

  <div class="app-container">
    <div class="static-parts-wrapper">
      <div class="from-home-page" ref="fromHomePageRef">
        <div
          class="home-page-swiper-container"
          ref="homePageSwiperContainerRef"
        ></div>
        <div class="video-shows-container"></div>
      </div>
      <div class="nav-bar-wrapper" ref="navBarWrapperRef">
        <NavBar />
      </div>
      <div class="side-menus-wrapper">
        <SideMenus />
      </div>
    </div>
    <div class="dynamic-parts-wrapper">
      <router-view />
    </div>
  </div>
</template>

<style scoped lang="scss">
// TODO 将来将其抽离出去
// 修改滚动条样式
@mixin scroll() {
  // 整个滚动条容器样式
  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  // 滚动条轨道样式
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  // 滚动条滑块样式
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);

    background-color: #555;
  }
}
.static-parts-wrapper {
  .from-home-page {
    width: 100vw;
    height: 100vh;
    @include scroll();
    overflow-y: auto;
    overflow-x: hidden;
    .home-page-swiper-container {
      position: relative;
      width: 100%;
      height: 66%;
      z-index: 1;
    }
    .video-shows-container {
      position: relative;
      top: 20px;
      left: 180px;
    }
  }
  .nav-bar-wrapper {
    position: fixed;
    z-index: 1;
    top: 0;
  }
  .side-menus-wrapper {
    position: absolute;
    z-index: 10;
    top: 60px;
  }
}

.dynamic-parts-wrapper {
  position: absolute;
  left: 170px;
  top: 70px;
  z-index: 10;
}
</style>
