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

onMounted(() => {
  inputElemRef.value.onfocus = () => {
    isInputElemFocus.value = true;
  };
  inputElemRef.value.onblur = () => {
    isInputElemFocus.value = false;
  };
});

const kw = ref("");

async function toSearchResPage() {
  // 更新keyword
  mainStore.setKeyword(kw.value);
  router.push({
    name: "search",
    params: {
      kw: kw.value,
    },
  });
  // 请求数据
  await mainStore.getSearchResData(false);
  kw.value = "";
}
</script>
<template>
  <div class="search-container">
    <input
      ref="inputElemRef"
      type="text"
      placeholder="搜索电影、电视剧、综艺、动漫"
      v-model.lazy="kw"
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
