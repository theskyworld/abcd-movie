import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

export function get(url: string) {
  return instance.get(url);
}
