import { defineStore } from "pinia";
import { ref } from "vue";
import getSearchResData from "@/server/getSearchResData.ts";

const useSearchStore = defineStore("searchStore", {
  state: () => {
    const keyword = ref("");
    const serarchResDatas = ref([]);
    return {
      keyword,
      serarchResDatas,
    };
  },

  actions: {
    setKeyword(keyword: string) {
      this.keyword = keyword;
    },
    async getSearchResData(isByClick: boolean = false) {
      if (this.keyword) {
        this.serarchResDatas = await getSearchResData(this.keyword, isByClick);
      }
    },
  },
});

export default useSearchStore;
