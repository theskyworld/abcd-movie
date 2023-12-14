import { get } from "./base";

export default function getMovieHomeData() {
  return get(`/api/movie/movie-home`).then((res) => {
    return res.data.items;
  });
}
