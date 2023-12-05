import { onMounted } from 'vue';
<script setup lang="ts">
import Logo from "../base/logo/Logo.vue";
import Search from "../search/Search.vue";
import WatchHistoryPart from "../WatchHistoryPart/WatchHistoryPart.vue";
import { ref, onMounted } from "vue";

const watchHistoryToggleElemRef = ref();
const watchHistoryElemRef = ref();
const isShowWatchHistory = ref(false);

onMounted(() => {
  watchHistoryToggleElemRef.value.onmouseover = () => {
    isShowWatchHistory.value = true;
  };
});
</script>
<template>
  <div class="nav-bar-container">
    <div class="left">
      <div class="logo">
        <Logo />
      </div>
      <div class="search">
        <Search />
      </div>
    </div>
    <div class="right">
      <div class="watch-history-wrapper">
        <span ref="watchHistoryToggleElemRef">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-history_line"></use>
          </svg>
          <p>观看记录</p>
        </span>
        <div
          class="watch-history"
          ref="watchHistoryElemRef"
          v-if="isShowWatchHistory"
        >
          <WatchHistoryPart />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./navBar.scss";
</style>
