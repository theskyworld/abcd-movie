import { get } from "./base";

export default function getVarietyHomeData() {
  return get(`/api/variety/variety-home`).then((res) => {
    return res.data.items;
  });
}
