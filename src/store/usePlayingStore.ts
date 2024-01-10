import { defineStore } from "pinia";
import { ref } from "vue";
import getSearchResData from "@/server/getSearchResData";

const usePlayingStore = defineStore("playingStore", {
  state: () => {
    const playingKeyword = ref("");
    const videoURL = ref({});
    const routes = ref(0);

    return {
      playingKeyword,
      videoURL,
      routes,
    };
  },

  actions: {
    setPlayingKeyword(keyword: string) {
      this.playingKeyword = keyword;
    },
    async getPlayingSearchResData(
      isByClick: boolean = true,
      routeIndex?: number,
      episodeIndex?: number,
    ) {
      if (this.playingKeyword) {
        const res = await getSearchResData(
          this.playingKeyword,
          isByClick,
          routeIndex,
          episodeIndex,
        );

        this.videoURL = res.videoURL;
        // 只有初次请求URL（routeIndex默认为0）时才需要修改routes
        if (!routeIndex) {
          this.routes = res.routes;
        }
      }
    },
  },
});

export default usePlayingStore;
