import { defineStore } from "pinia";
import { ref } from "vue";
import getSearchResData from "@/server/getSearchResData";

const useSearchStore = defineStore("searchStore", {
  state: () => {
    const keyword = ref("");
    const serarchResDatas = ref([]);
    const isLoading = ref(true);
    return {
      keyword,
      serarchResDatas,
      isLoading,
    };
  },

  actions: {
    setKeyword(keyword: string) {
      this.keyword = keyword;
    },
    async getSearchResData(isByClick: boolean = false) {
      if (this.keyword) {
        this.isLoading = true;
        this.serarchResDatas = await getSearchResData(this.keyword, isByClick);
        this.isLoading = false;
        this.keyword = "";
      }
    },
  },
});

export default useSearchStore;
