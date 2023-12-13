import { get } from "./base";

export default function getHomePageData() {
  return get("/api/home").then((res) => {
    return res.data;
  });
}
