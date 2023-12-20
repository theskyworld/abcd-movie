import { get } from "./base";

export default function getSearchResData(
  keyword: string,
  isByClick: boolean,
  routeIndex?: number,
  perPageNum?: number,
  page?: number,
) {
  return get(
    `/api/search?keyword=${keyword}&isByClick=${isByClick}&routeIndex=${routeIndex}&perPageNum=${perPageNum}&page=${page}`,
  ).then((res) => {
    return res.data;
  });
}
