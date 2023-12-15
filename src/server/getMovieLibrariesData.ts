import { get } from "./base";

export default function getMovieLibrariesData(page: number) {
  return get(`/api/movie/movie-libraries?page=${page}`).then((res) => {
    return res.data.items;
  });
}
