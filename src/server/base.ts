import axios from "axios";

const instance = axios.create({
  // baseURL应当为"/api",对应于跨域请求中的配置
  baseURL: "https://111.229.145.94:3001",
  // baseURL: "https://api.abcdys.site",
});

export function get(url: string) {
  return instance.get(url);
}

export function post(url: string, data: any, config?: any) {
  return instance.post(url, data, config);
}

export function put(url: string, data: any) {
  return instance.put(url, data);
}
