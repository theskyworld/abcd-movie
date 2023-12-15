<script setup lang="ts">
import { ref } from "vue";

const title = ref("加载中...");
const imgURL = ref(
  "https://s1.aigei.com/src/img/gif/fe/fe50b2f296c3445b922fe72d2dd82747.gif?imageMogr2/auto-orient/thumbnail/!132x132r/gravity/Center/crop/132x132/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:1S7zImqkNz_RquxH7OsXT3ETXkE=",
);

function setTitle(newTitle: string) {
  title.value = newTitle;
}

function setImg(newImg: string) {
  imgURL.value = newImg;
}

defineExpose({
  setTitle,
  setImg,
});
</script>
<template>
  <div class="loading-container">
    <div class="content-wrapper">
      <img :src="imgURL" width="50" height="50" />
      <p class="title">{{ title }}</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./loading.scss";
</style>
