import { createPinia, defineStore } from "pinia";
import { storeToRefs } from "pinia";
import usePlayingStore from "./usePlayingStore";
import useSearchStore from "./useSearchStore";
import useNavStore from "./useNavStore";
import useLoginStore from "./useLoginStore";

const pinia = createPinia();
const searchStore = useSearchStore(pinia);
const playingStore = usePlayingStore(pinia);
const navStore = useNavStore(pinia);
const loginStore = useLoginStore(pinia);

const useMainStore = defineStore("mainStore", {
  state: () => {
    const { keyword, serarchResDatas, isLoading } = storeToRefs(searchStore);
    const { playingKeyword, videoURL, routes } = storeToRefs(playingStore);
    const { isInLogin } = storeToRefs(navStore);
    const { isLogin, loginedUser } = storeToRefs(loginStore);
    return {
      keyword,
      serarchResDatas,
      playingKeyword,
      videoURL,
      routes,
      isLoading,
      isInLogin,
      isLogin,
      loginedUser,
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
    setIsInLogin: navStore.setIsInLogin,
    setIsLogin: loginStore.setIsLogin,
  },
});

export default useMainStore;
