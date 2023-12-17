<script setup lang="ts">
import { onMounted, ref } from "vue";
import SearchAdvise from "../base/searchAdvise/SearchAdvise.vue";
import useMainStore from "@/store";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const isInputElemFocus = ref(false);
const inputElemRef = ref();
const router = useRouter();

const mainStore = useMainStore();
const { keyword } = storeToRefs(mainStore);

onMounted(() => {
  inputElemRef.value.onfocus = () => {
    isInputElemFocus.value = true;
  };
  inputElemRef.value.onblur = () => {
    isInputElemFocus.value = false;
  };
});

async function toSearchResPage() {
  // 更新keyword
  mainStore.setKeyword(keyword.value);
  router.push({
    path: `/search`,
  });
  // 请求数据
  await mainStore.getSearchResData(false);
}
</script>
<template>
  <div class="search-container">
    <input
      @keyup.enter="toSearchResPage"
      ref="inputElemRef"
      type="text"
      placeholder="搜索电影、电视剧、综艺、动漫"
      v-model.lazy="keyword"
    />
    <i @click="toSearchResPage">
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
