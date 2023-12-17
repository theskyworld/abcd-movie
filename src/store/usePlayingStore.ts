import { defineStore } from "pinia";
import { ref } from "vue";
import getSearchResData from "@/server/getSearchResData.ts";

const usePlayingStore = defineStore("playingStore", {
  state: () => {
    const playingKeyword = ref("");
    const videoURLs = ref([]);

    return {
      playingKeyword,
      videoURLs,
    };
  },

  actions: {
    setPlayingKeyword(keyword: string) {
      this.playingKeyword = keyword;
    },
    async getPlayingSearchResData(isByClick: boolean = true) {
      if (this.playingKeyword) {
        const res = await getSearchResData(this.playingKeyword, isByClick);
        this.videoURLs = res[0].videoURLs;
      }
    },
  },
});

export default usePlayingStore;
