<script setup lang="ts">
const props = defineProps(["imgURL"]);
</script>
<template>
  <div class="profile-container">
    <div class="img">
      <img :src="imgURL" alt="" />
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./profile.scss";
</style>
