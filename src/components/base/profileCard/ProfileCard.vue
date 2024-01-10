<script setup lang="ts">
import Profile from "@/components/base/profile/Profile.vue";
import { storeToRefs } from "pinia";
import useMainStore from "@/store";

const mainStore = useMainStore();
const { loginedUser } = storeToRefs(mainStore);
</script>
<template>
  <div class="profile-card-container">
    <div class="top-wrapper">
      <div class="profile-wrapper">
        <Profile imgURL="https://imgapi.xl0408.top/index.php" />
        <span>{{ loginedUser.name }}</span>
      </div>
      <div class="log-out-wrapper">
        <button>退出登录</button>
      </div>
    </div>
    <div class="bottom-wrapper">
      <div class="personal-center">
        <!-- 添加个人中心iconfont图标 -->
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gerenzhongxin"></use>
        </svg>
        <p>个人中心</p>
      </div>
      <div class="personal-center">
        <!-- 添加个人中心iconfont图标 -->
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gerenzhongxin"></use>
        </svg>
        <p>个人中心</p>
      </div>
      <div class="personal-center">
        <!-- 添加个人中心iconfont图标 -->
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gerenzhongxin"></use>
        </svg>
        <p>个人中心</p>
      </div>
      <div class="personal-center">
        <!-- 添加个人中心iconfont图标 -->
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gerenzhongxin"></use>
        </svg>
        <p>个人中心</p>
      </div>
      <div class="personal-center">
        <!-- 添加个人中心iconfont图标 -->
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gerenzhongxin"></use>
        </svg>
        <p>个人中心</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./profileCard.scss";
</style>
