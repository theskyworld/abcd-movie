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
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="24px"
      height="30px"
      viewBox="0 0 24 30"
      style="enable-background: new 0 0 50 50"
      xml:space="preserve"
    >
      <rect x="0" y="13" width="4" height="5" fill="#333">
        <animate
          attributeName="height"
          attributeType="XML"
          values="5;21;5"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="13; 5; 13"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="10" y="13" width="4" height="5" fill="#333">
        <animate
          attributeName="height"
          attributeType="XML"
          values="5;21;5"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="13; 5; 13"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="20" y="13" width="4" height="5" fill="#333">
        <animate
          attributeName="height"
          attributeType="XML"
          values="5;21;5"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="13; 5; 13"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  </div>
</template>
<style scoped lang="scss">
@use "./loading.scss";
</style>
