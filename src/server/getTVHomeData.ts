import { get } from "./base";

export default function getTVHomeData() {
  return get(`/api/tv/tv-home`).then((res) => {
    return res.data.items;
  });
}
