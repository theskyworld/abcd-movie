<script setup lang="ts">
import getSearchHotData from "@/server/getSearchHotData";
import { computed, onBeforeMount, ref } from "vue";
import { SearchAdvise } from "./types";

const searchHotData = ref([""]);

onBeforeMount(async () => {
  searchHotData.value = await getSearchHotData();
});

const searchAdvisers = computed(() => {
  return searchHotData.value.map((data, index) => {
    return {
      id: index + 1 + "",
      content: data,
      isHot: index < 4,
    };
  });
});
</script>
<template>
  <div class="search-advise-container">
    <h5>大家都在搜</h5>
    <div class="content-wrapper">
      <ul v-if="searchAdvisers.length > 0">
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
