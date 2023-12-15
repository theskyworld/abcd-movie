import { get } from "./base";

export default function getMovieLibrariesData(page: number, kws: Array<any>) {
  console.log(`/api/movie/movie-libraries?page=${page}&kws=${kws}`);

  return get(`/api/movie/movie-libraries?page=${page}&kws=${kws}`).then(
    (res) => {
      return res.data.items;
    },
  );
}
