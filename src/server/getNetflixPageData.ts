import { get } from "./base";

export default function getNetflixPageData() {
  return get("/api/netflix").then((res) => {
    return res.data.items;
  });
}
