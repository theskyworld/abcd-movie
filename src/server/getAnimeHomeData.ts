import { get } from "./base";

export default function getAnimeHomeData() {
  return get(`/api/anime/anime-home`).then((res) => {
    return res.data.items;
  });
}
