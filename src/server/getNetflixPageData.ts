import { get } from "./base";

export default function getNetflixPageData(page: number) {
  return get(`/api/netflix?page=${page}`).then((res) => {
    return res.data.items;
  });
}
