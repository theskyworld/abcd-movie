import axios from "axios";

const instance = axios.create({
  // baseURL应当为"/api",对应于跨域请求中的配置
  baseURL: "/api",
});

export function get(url: string) {
  return instance.get(url);
}
