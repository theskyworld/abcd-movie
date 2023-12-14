<script setup lang="ts">
import { nextTick, ref, onMounted } from "vue";

let i = 1,
  j = 1;
const pageCounts = ref(10);
const curBtnNum = ref(1);
const spansWrapperElemRef = ref();
// 每次最多显示6个带数字的按钮,当前显示的按钮中最大的数字为6
const curMaxBtnNum = ref(6);
const curMinBtnNum = ref(1);
let translateXVal = -30 * 1 - 10 * 1;

// let toNextPage;

async function toNextPage() {
  // 切换页码
  if (curBtnNum.value < pageCounts.value) {
    curBtnNum.value = curBtnNum.value + 1;
  }
  // 显示下一个隐藏的按钮
  await nextTick();

  if (
    curMaxBtnNum.value - curBtnNum.value <= 2 &&
    curMaxBtnNum.value < pageCounts.value
  ) {
    // 更新curMaxBtnNum
    if (curMaxBtnNum.value < pageCounts.value) {
      curMaxBtnNum.value++;
    }
    spansWrapperElemRef.value.style.transform = `translateX(${translateXVal}px)`;
    i++;
    translateXVal = -30 * i - 10 * i;
    curMinBtnNum.value++;
  }
}

async function toPrevPage() {
  // 切换页码
  if (curBtnNum.value > 1) {
    curBtnNum.value = curBtnNum.value - 1;
  }
  await nextTick();
  // 显示上一个隐藏的按钮
  console.log(curBtnNum.value, curMinBtnNum.value);
  if (
    (curBtnNum.value - curMinBtnNum.value <= 2 && curMinBtnNum.value > 1) ||
    (curBtnNum.value === 2 && curMinBtnNum.value === 1)
  ) {
    // 更新curMinBtnNum
    if (curMinBtnNum.value > 1) {
      curMinBtnNum.value--;
    }
    translateXVal = -30 * i - 10 * i + (30 * j + 10 * j);
    spansWrapperElemRef.value.style.transform = `translateX(${translateXVal}px)`;
    j++;
    curMaxBtnNum.value--;
  }
}

async function toFirstPage() {
  // 切换页码
  curBtnNum.value = 1;
  curMaxBtnNum.value = 6;
  curMinBtnNum.value = 1;
  await nextTick();
  spansWrapperElemRef.value.style.transform = "translateX(0px)";
}

async function toLastPage() {
  // 切换页码
  curBtnNum.value = pageCounts.value;
  curMaxBtnNum.value = pageCounts.value;
  curMinBtnNum.value = pageCounts.value - 6 + 1;

  await nextTick();

  spansWrapperElemRef.value.style.transform = `translateX(-160px)`;
}

function toTargetPage(num: number) {
  // 切换页码
  curBtnNum.value = num;
}
</script>
<template>
  <div class="pagination-container">
    <div class="btns-wrapper">
      <span @click="toFirstPage">首页</span>
      <span @click="toPrevPage">上一页</span>
      <div class="dynamic-nums-wrapper">
        <div class="spans-wrapper" ref="spansWrapperElemRef">
          <span
            class="btn"
            :class="{ active: curBtnNum === i }"
            v-for="(i, index) in pageCounts"
            :key="index"
            @click="toTargetPage(i)"
          >
            {{ i }}
          </span>
        </div>
      </div>
      <span @click="toNextPage">下一页</span>
      <span @click="toLastPage">尾页</span>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./pagination.scss";
</style>
