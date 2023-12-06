<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// 使用Navigation, Pagination, Autoplay模块
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// 使用对应的默认样式
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const modules = ref([Autoplay, Navigation, Pagination]);
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
    delay: 3_000,
    disableOnInteraction: false,
  },
  // 循环滑动
  loop: true,
  // 使用分页按钮
  pagination: {
    clickable: true,
  },
  // 使用导航按钮
  navigation: true,
  modules: modules.value,
});
</script>
<template>
  <Swiper v-bind="swiperOptions" class="mySwiper">
    <swiper-slide>
      <img
        src="https://647bc185.szrtcpa.com/2023/11/10/3c95a1646f1da.jpg"
        alt=""
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://647bc185.szrtcpa.com/2023/12/02/89e366ffcb035.jpg"
        alt=""
      />
    </swiper-slide>
    <swiper-slide
      ><img
        src="https://647bc185.szrtcpa.com/2023/10/22/3e3599eecebc9.jpg"
        alt=""
    /></swiper-slide>
  </Swiper>
</template>
<style scoped></style>
