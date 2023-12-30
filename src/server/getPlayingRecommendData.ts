import { get } from "./base";

export default function getPlayingRecommendData() {
  return get(`/api/playing/recommend`).then((res) => {
    return res.data.items;
  });
}
