<script setup lang="ts">
import NavBar from "@/components/navBar/NavBar.vue";
import SideMenus from "@/components/base/sideMenus/SideMenus.vue";
</script>

<template>
  <div class="home-page-container">
    <div class="nav-bar-wrapper">
      <NavBar />
    </div>
    <div class="side-menus-wrapper">
      <SideMenus />
    </div>
    <div class="main-content-wrapper"></div>
  </div>
</template>

<style scoped lang="scss">
@use "./homePage.scss";
</style>
