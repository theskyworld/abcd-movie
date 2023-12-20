import { get } from "./base";

export default function getSearchResData(
  keyword: string,
  isByClick: boolean,
  routeIndex?: number,
  episodeIndex?: number,
  perPageNum?: number,
  page?: number,
) {
  return get(
    `/api/search?keyword=${keyword}&isByClick=${isByClick}&routeIndex=${routeIndex}&perPageNum=${perPageNum}&page=${page}&episodeIndex=${episodeIndex}`,
  ).then((res) => {
    return res.data;
  });
}
