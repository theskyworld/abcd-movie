<script setup lang="ts">
import { onMounted, ref } from "vue";
import SearchAdvise from "../searchAdvise/SearchAdvise.vue";

const isInputElemFocus = ref(false);
const inputElemRef = ref();

onMounted(() => {
  inputElemRef.value.onfocus = () => {
    isInputElemFocus.value = true;
  };
  inputElemRef.value.onblur = () => {
    isInputElemFocus.value = false;
  };
});
</script>
<template>
  <div class="search-container">
    <input
      ref="inputElemRef"
      type="text"
      placeholder="搜索电影、电视剧、综艺、动漫"
    />
    <i>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
      </svg>
    </i>
    <SearchAdvise v-if="isInputElemFocus" />
  </div>
</template>
<style scoped lang="scss">
@use "./Search.scss";
</style>
