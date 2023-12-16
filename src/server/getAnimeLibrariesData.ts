import { get } from "./base";

export default function getAnimeLibrariesData(
  page: number,
  kws: Array<string>,
) {
  // console.log(`/api/anime/anime-libraries?page=${page}&kws=${kws}`);

  return get(`/api/anime/anime-libraries?page=${page}&kws=${kws}`).then(
    (res) => {
      return res.data.items;
    },
  );
}
