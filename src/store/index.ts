import { createPinia, defineStore } from "pinia";
import { storeToRefs } from "pinia";
import usePlayingStore from "./usePlayingStore";
import useSearchStore from "./useSearchStore";

const pinia = createPinia();
const searchStore = useSearchStore(pinia);
const playingStore = usePlayingStore(pinia);

const useMainStore = defineStore("mainStore", {
  state: () => {
    const { keyword, serarchResDatas, isLoading } = storeToRefs(searchStore);
    const { playingKeyword, videoURL, routes } = storeToRefs(playingStore);
    return {
      keyword,
      serarchResDatas,
      playingKeyword,
      videoURL,
      routes,
      isLoading,
    };
  },
  actions: {
    setKeyword(keyword: string) {
      searchStore.setKeyword(keyword);
    },
    async getSearchResData(isByClick: boolean = false) {
      await searchStore.getSearchResData(isByClick);
    },
    setPlayingKeyword(keyword: string) {
      playingStore.setPlayingKeyword(keyword);
    },
    async getPlayingSearchResData(
      isByClick: boolean = true,
      routeIndex?: number,
      episodeIndex?: number,
    ) {
      await playingStore.getPlayingSearchResData(
        isByClick,
        routeIndex,
        episodeIndex,
      );
    },
  },
});

export default useMainStore;
