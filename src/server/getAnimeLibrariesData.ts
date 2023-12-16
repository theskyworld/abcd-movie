import { get } from "./base";

export default function getAnimeLibrariesData(page: number) {
  // console.log(`/api/anime/anime-libraries?page=${page}&kws=${kws}`);

  return get(`/api/anime/anime-libraries?page=${page}`).then((res) => {
    return res.data.items;
  });
}
