<script setup lang="ts">
import { ref, Ref } from "vue";

const searchAdvisers = ref([
  {
    id: 1,
    content: "涉过愤怒的海",
    isHot: true,
  },
  {
    id: 2,
    content: "超异能族",
    isHot: true,
  },
  {
    id: 3,
    content: "大力女子姜南顺",
    isHot: true,
  },
  {
    id: 4,
    content: "蓝眼武士",
    isHot: true,
  },
  {
    id: 5,
    content: "帝王计划怪兽遗产",
    isHot: false,
  },
  {
    id: 6,
    content: "阿拉蒙之剑阿斯达年代记",
    isHot: false,
  },
]);
</script>
<template>
  <div class="search-advise-container">
    <h5>大家都在搜</h5>
    <div class="content">
      <ul>
        <li
          v-for="{ id, content, isHot } in searchAdvisers"
          :key="id"
          :class="{ hot: isHot }"
        >
          <i>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-hot"></use>
            </svg>
          </i>
          <span>{{ content }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./searchAdvise.scss";
</style>
