import { get } from "./base";

export default function getTVLibrariesData(page: number) {
  // console.log(`/api/tv/tv-libraries?page=${page}&kws=${kws}`);

  return get(`/api/tv/tv-libraries?page=${page}`).then((res) => {
    return res.data.items;
  });
}
