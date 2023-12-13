<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Props } from "./types";

// 使用Navigation, Pagination, Autoplay模块
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
// 卡片切换的特效
import "swiper/css/effect-fade";
// 使用对应的默认样式
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const modules = ref([EffectFade, Autoplay, Navigation, Pagination]);
// swiper配置选项
const swiperOptions = ref({
  // 每页展示的滑片数量
  slidesPerView: 1,
  // 每片滑片之间的间距
  spaceBetween: 30,
  // 有多片滑片在一页中进行展示时，是否需要居中放置
  centeredSlides: true,
  // 自动播放
  autoplay: {
    delay: 6_000,
    disableOnInteraction: false,
  },
  // 循环滑动
  loop: true,
  // 使用分页按钮
  pagination: {
    clickable: true,
  },
  // 使用导航按钮
  // navigation: true,
  modules: modules.value,
  // 卡片切换特效
  effect: "fade",
});

const { imgList, videoTitles, videoTags } = defineProps<Props>();
const bigImgURLs = ref(imgList[0]);
const smallImgURLs = ref(imgList[1]);

let swiperInstance: any;

const onSwiper = (swiper: any) => {
  swiperInstance = swiper;
};

function formatIndex(index: number) {
  if (index === 0) {
    return 1;
  } else if (index === smallImgURLs.value.length - 1) {
    return 0;
  } else {
    return index + 1;
  }
}
</script>
<template>
  <div class="home-page-swiper-container">
    <div class="swiper-wrapper">
      <Swiper v-bind="swiperOptions" class="mySwiper" @swiper="onSwiper">
        <swiper-slide v-for="(img, index) in bigImgURLs" :key="index">
          <img :src="img" :alt="videoTitles[index]" />
        </swiper-slide>
      </Swiper>
    </div>
    <div
      class="swiper-small-wrapper"
      v-for="(img, index) in smallImgURLs"
      :key="index"
      @mouseenter="
        () => {
          const i = formatIndex(index);
          swiperInstance.slideTo(i);
        }
      "
    >
      <div class="img-wrapper">
        <img :src="img" alt="" />
      </div>
      <div class="video-info-wrapper">
        <div class="title">
          <span>{{ videoTitles[index] }} </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./homePageSwiper.scss";
</style>
