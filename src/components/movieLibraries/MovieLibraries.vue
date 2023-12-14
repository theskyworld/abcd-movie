<script setup lang="ts">
import MovieSelectors from "@/components/base/movieSelectors/MovieSelectors.vue";
import VideoShowCard from "@/components/base/videoShowCard/VideoShowCard.vue";
</script>
<template>
  <div class="movie-libraries-container">
    <div class="movie-selectors-wrapper">
      <MovieSelectors />
    </div>
    <div class="video-show-card-wrapper">
      <VideoShowCard />
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./movieLibraries.scss";
</style>
