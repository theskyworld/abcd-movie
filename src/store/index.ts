import { createPinia, defineStore } from "pinia";
import { storeToRefs } from "pinia";
import useSearchStore from "./useSearchStore";

const pinia = createPinia();
const searchStore = useSearchStore(pinia);

const useMainStore = defineStore("mainStore", {
  state: () => {
    const { keyword, serarchResDatas } = storeToRefs(searchStore);

    return {
      keyword,
      serarchResDatas,
    };
  },
  actions: {
    setKeyword(keyword: string) {
      searchStore.setKeyword(keyword);
    },
    async getSearchResData(isByClick: boolean = false) {
      await searchStore.getSearchResData(isByClick);
    },
  },
});

export default useMainStore;
