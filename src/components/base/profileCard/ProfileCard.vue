<script setup lang="ts">
import Profile from "@/components/base/profile/Profile.vue";
import { storeToRefs } from "pinia";
import useMainStore from "@/store";
import { post } from "@/server/base";
import useStorage from "@/utils/useStorage";
import showNotification from "@/utils/showNotification";

const mainStore = useMainStore();
const { loginedUser, isLogin } = storeToRefs(mainStore);
const { getStorage, setStorage } = useStorage();

function logout() {
  if (isLogin.value) {
    post("/api/user/logout", null, {
      headers: {
        Authorization: "Bearer " + getStorage("token"),
      },
    })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          mainStore.setIsLogin(false);
          // 清空token和user
          setStorage("token", "");
          setStorage("user", "");
          setStorage("isLogin", "false");
          showNotification(res.data.message, "success");
        }
      })
      .catch((err) => {
        showNotification(err.response.data.err.message, "error");
      });
  }
}
</script>
<template>
  <div class="profile-card-container">
    <div class="top-wrapper">
      <div class="profile-wrapper">
        <Profile imgURL="https://imgapi.xl0408.top/index.php" />
        <span>{{ loginedUser.name }}</span>
      </div>
      <div class="log-out-wrapper">
        <button @click="logout">退出登录</button>
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
