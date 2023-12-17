import { get } from "./base";

export default function getSearchResData(keyword: string, isByClick: boolean) {
  return get(`/api/search?keyword=${keyword}&isByClick=${isByClick}`).then(
    (res) => {
      return res.data;
    },
  );
}
