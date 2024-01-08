import { get } from "./base";

export default function getSearchHotData() {
  return get(`/api/search/hot`).then((res) => {
    return res.data.items;
  });
}
